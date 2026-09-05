#!/usr/bin/env node
/**
 * Bakes the rendered DOM into dist/index.html after `vite build`.
 *
 * Why this exists
 * ---------------
 * This is a client-rendered SPA: the built HTML ships an empty
 * <div id="root"> and all 872 words of copy arrive only once the JS
 * bundle executes. Googlebot can render JS, but does it on a second,
 * heavily queued pass, which is slow for a new domain with no authority.
 *
 * The bigger problem is AI crawlers. GPTBot, PerplexityBot, ClaudeBot and
 * Google's AI Overviews fetchers largely do NOT execute JavaScript. To
 * every one of them an unprerendered SPA is a blank page. No amount of
 * keyword work fixes that; the text has to be in the HTML.
 *
 * How it works
 * ------------
 * Drives the system Chrome over the DevTools protocol against a locally
 * served copy of dist/, waits for React to paint, and writes the settled
 * <body> back into the HTML file. No new runtime dependencies, and no
 * build-time framework lock-in.
 *
 * The app mounts with createRoot (not hydrateRoot), so React discards this
 * markup and re-renders on the client. That is intentional and safe: the
 * baked HTML exists for crawlers, and users get a clean client render with
 * no hydration-mismatch risk. Do not switch to hydrateRoot without also
 * making the prerendered output deterministic.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createServer } from 'node:http';
import { join, extname } from 'node:path';
import { spawn } from 'node:child_process';

const DIST = 'dist';
const PORT = 4179;
const CDP_PORT = 9333;

const CHROME = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
].find((p) => p && existsSync(p));

// STRICT=1 (or CI=true on Netlify) turns a missing Chrome into a hard
// failure. Locally it is a warning, so `npm run build` still works on a
// machine without Chrome - you just ship an unprerendered page, which is
// exactly the SEO problem this script exists to fix. Never let a silent
// skip reach production.
const STRICT = process.env.PRERENDER_STRICT === '1' || process.env.CI === 'true';

if (!CHROME) {
  const msg = 'no Chrome binary found. Set CHROME_PATH.';
  if (STRICT) {
    console.error(`FAIL: ${msg} Refusing to ship an unprerendered page.`);
    process.exit(1);
  }
  console.warn(`WARN: ${msg} Skipping prerender - this page will have NO crawlable text.`);
  process.exit(0);
}

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.xml': 'application/xml',
  '.txt': 'text/plain', '.json': 'application/json',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Serve dist/ with an SPA fallback, mirroring the Netlify redirect.
const server = createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let file = join(DIST, urlPath === '/' ? 'index.html' : urlPath);
  if (!existsSync(file) || extname(file) === '') file = join(DIST, 'index.html');
  try {
    const buf = readFileSync(file);
    res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(buf);
  } catch {
    res.writeHead(404).end('not found');
  }
});

const cdp = async (method, params, ws, state) =>
  new Promise((resolve) => {
    const id = ++state.id;
    state.pending.set(id, resolve);
    ws.send(JSON.stringify({ id, method, params }));
  });

(async () => {
  await new Promise((r) => server.listen(PORT, r));

  const chrome = spawn(CHROME, [
    '--headless=new',
    `--remote-debugging-port=${CDP_PORT}`,
    '--user-data-dir=.prerender-profile',
    '--no-first-run', '--no-default-browser-check',
    '--disable-gpu', '--hide-scrollbars',
  ], { stdio: 'ignore', detached: false });

  let target = null;
  for (let i = 0; i < 40; i++) {
    await sleep(300);
    try {
      const r = await fetch(`http://127.0.0.1:${CDP_PORT}/json/new?http://127.0.0.1:${PORT}/`, { method: 'PUT' });
      if (r.ok) { target = await r.json(); break; }
    } catch { /* chrome still starting */ }
  }
  if (!target) {
    chrome.kill(); server.close();
    console.error('FAIL: could not reach Chrome DevTools.');
    process.exit(1);
  }

  // Node 20+ ships a global WebSocket, so this needs no dependency.
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  const state = { id: 0, pending: new Map() };
  ws.addEventListener('message', (ev) => {
    const d = JSON.parse(ev.data);
    if (d.id && state.pending.has(d.id)) { state.pending.get(d.id)(d.result); state.pending.delete(d.id); }
  });
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));

  // Let React mount, fonts settle and the carousel lay out.
  await sleep(6000);

  const evaluate = async (expression) =>
    (await cdp('Runtime.evaluate', { expression, returnByValue: true }, ws, state)).result.value;

  // Strip the bundle's own <script> tags out of the captured DOM. They are
  // re-appended from the original HTML below; capturing them here as well
  // would load the bundle twice.
  const bodyHTML = await evaluate(
    `(() => {
       const clone = document.body.cloneNode(true);
       clone.querySelectorAll('script').forEach((s) => s.remove());
       return clone.innerHTML;
     })()`
  );
  const wordCount = await evaluate('document.body.innerText.trim().split(/\\s+/).length');

  ws.close();
  try { await fetch(`http://127.0.0.1:${CDP_PORT}/json/close/${target.id}`); } catch {}
  chrome.kill();
  server.close();

  if (!bodyHTML || wordCount < 200) {
    console.error(`FAIL: prerender captured only ${wordCount} words. Refusing to write a broken page.`);
    process.exit(1);
  }

  // Splice the rendered body in. Vite emits the module script in <head>
  // with defer semantics, so the bundle still loads and nothing needs to be
  // re-appended here - doing so would load it twice.
  const htmlPath = join(DIST, 'index.html');
  const html = readFileSync(htmlPath, 'utf8');
  const openTag = html.match(/<body[^>]*>/)[0];
  const rebuilt = html.replace(
    /<body[^>]*>[\s\S]*<\/body>/,
    `${openTag}\n${bodyHTML}\n</body>`
  );

  writeFileSync(htmlPath, rebuilt);
  const kb = (Buffer.byteLength(rebuilt) / 1024).toFixed(1);
  console.log(`OK: prerendered ${wordCount} words into dist/index.html (${kb} KB).`);
})().catch((e) => {
  console.error('FAIL:', e.message);
  process.exit(1);
});
