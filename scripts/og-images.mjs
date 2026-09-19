#!/usr/bin/env node
/**
 * Renders a real 1200x630 JPEG share preview for every product, into
 * dist/images/og/<slug>.jpg.
 *
 * Why this exists
 * ----------------
 * Before this script, every product page shared the same site-wide OG
 * image (see the old comment this replaced in ProductPage.jsx). That was
 * deliberate: WhatsApp, which is how this shop actually gets shared, does
 * not reliably render WebP previews, and pointing og:image at the product
 * WebP would have contradicted the og:image:type (image/jpeg) and
 * og:image:width/height (1200x630) tags already set for the site-wide image.
 *
 * The fix is not to relax those tags, it is to generate a real 1200x630
 * JPEG per product. This script draws a simple branded card (logo top
 * left, product photo, name, Tamil name, short description) in the same
 * headless Chrome already installed for scripts/prerender.mjs, and
 * screenshots it. No new dependency, no new binary to install on Netlify.
 *
 * Runs after prerender in `npm run build`. If Chrome cannot be found this
 * fails the same way prerender.mjs does: warn-and-skip locally, hard fail
 * under PRERENDER_STRICT/CI so a broken share preview never ships silently.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { createServer } from 'node:http';
import { join, extname } from 'node:path';
import { spawn } from 'node:child_process';

const DIST = 'dist';
const OUT_DIR = join(DIST, 'images', 'og');
const PORT = 4180;
const CDP_PORT = 9334;

const CHROME = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
].find((p) => p && existsSync(p));

const STRICT = process.env.PRERENDER_STRICT === '1' || process.env.CI === 'true';

if (!CHROME) {
  const msg = 'no Chrome binary found. Set CHROME_PATH.';
  if (STRICT) {
    console.error(`FAIL: ${msg} Refusing to ship without share preview images.`);
    process.exit(1);
  }
  console.warn(`WARN: ${msg} Skipping OG image generation - product pages will fall back to the site-wide preview.`);
  process.exit(0);
}

// Read the product list straight from config, the same way prerender.mjs
// reads slugs, so this never drifts from the real catalogue.
const cfg = readFileSync('src/config/site.js', 'utf8');
const productBlocks = [...cfg.matchAll(/\{\s*name:\s*'([^']+)',\s*slug:\s*'([^']+)',[\s\S]*?tamil:\s*'([^']+)',\s*subtitle:\s*'([^']+)',\s*img:\s*'([^']+)'/g)];
const products = productBlocks.map(([, name, slug, tamil, subtitle, img]) => ({ name, slug, tamil, subtitle, img }));

if (products.length === 0) {
  console.error('FAIL: could not parse any products out of src/config/site.js.');
  process.exit(1);
}

const brandMatch = cfg.match(/name:\s*"([^"]+)"/) || cfg.match(/name:\s*'([^']+)'/);
const brandName = brandMatch ? brandMatch[1] : "Liha's Karupatti";

mkdirSync(OUT_DIR, { recursive: true });

const MIME = {
  '.html': 'text/html', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Serves dist/ plus one virtual route per product that renders the card.
const server = createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const match = urlPath.match(/^\/__og\/([a-z0-9-]+)$/);
  if (match) {
    const p = products.find((x) => x.slug === match[1]);
    if (!p) { res.writeHead(404).end(); return; }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(cardHTML(p));
    return;
  }
  let file = join(DIST, urlPath);
  if (!existsSync(file)) { res.writeHead(404).end('not found'); return; }
  try {
    const buf = readFileSync(file);
    res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(buf);
  } catch {
    res.writeHead(404).end('not found');
  }
});

function cardHTML(p) {
  return `<!doctype html>
<html><head><meta charset="utf-8"><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    font-family: 'Be Vietnam Pro', -apple-system, sans-serif;
    background: #fff8f6;
    display: flex;
    align-items: center;
    padding: 64px 72px;
    position: relative;
  }
  .logo {
    position: absolute;
    top: 40px;
    left: 48px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 14px rgba(50,23,13,0.18);
  }
  .photo {
    width: 460px;
    height: 460px;
    border-radius: 24px;
    object-fit: cover;
    box-shadow: 0 20px 50px rgba(50,23,13,0.16);
    flex-shrink: 0;
  }
  .copy { margin-left: 56px; }
  .brand {
    font-size: 22px;
    font-weight: 700;
    color: #2d5a27;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 18px;
  }
  h1 {
    font-family: 'Literata', Georgia, serif;
    font-size: 56px;
    line-height: 1.1;
    color: #32170d;
    margin-bottom: 10px;
  }
  .tamil {
    font-size: 26px;
    color: #2d5a27;
    font-weight: 600;
    margin-bottom: 22px;
  }
  .subtitle {
    font-size: 28px;
    color: #504440;
    line-height: 1.4;
    max-width: 560px;
  }
</style></head>
<body>
  <img class="logo" src="/images/logo.webp" />
  <img class="photo" src="${p.img}" />
  <div class="copy">
    <div class="brand">${brandName}</div>
    <h1>${p.name}</h1>
    <div class="tamil" lang="ta">${p.tamil}</div>
    <div class="subtitle">${p.subtitle}</div>
  </div>
</body></html>`;
}

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
    '--user-data-dir=.prerender-og-profile',
    '--no-first-run', '--no-default-browser-check',
    '--disable-gpu', '--hide-scrollbars',
    '--force-device-scale-factor=1',
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
    console.error('FAIL: could not reach Chrome DevTools for OG image generation.');
    process.exit(1);
  }

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  const state = { id: 0, pending: new Map() };
  ws.addEventListener('message', (ev) => {
    const d = JSON.parse(ev.data);
    if (d.id && state.pending.has(d.id)) { state.pending.get(d.id)(d.result); state.pending.delete(d.id); }
  });
  await new Promise((r) => ws.addEventListener('open', r, { once: true }));

  await cdp('Emulation.setDeviceMetricsOverride', {
    width: 1200, height: 630, deviceScaleFactor: 1, mobile: false,
  }, ws, state);

  const results = [];
  for (const p of products) {
    await cdp('Page.navigate', { url: `http://127.0.0.1:${PORT}/__og/${p.slug}` }, ws, state);
    await sleep(600);
    const shot = await cdp('Page.captureScreenshot', { format: 'jpeg', quality: 88 }, ws, state);
    if (!shot?.data) {
      console.error(`FAIL: could not capture OG image for ${p.slug}.`);
      ws.close(); chrome.kill(); server.close();
      process.exit(1);
    }
    const outPath = join(OUT_DIR, `${p.slug}.jpg`);
    writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
    results.push([p.slug, (Buffer.byteLength(shot.data, 'base64') / 1024).toFixed(0)]);
  }

  ws.close();
  try { await fetch(`http://127.0.0.1:${CDP_PORT}/json/close/${target.id}`); } catch {}
  chrome.kill();
  server.close();

  for (const [slug, kb] of results) {
    console.log(`OK: og image for ${slug.padEnd(24)} ${kb} KB`);
  }
})().catch((e) => {
  console.error('FAIL:', e.message);
  process.exit(1);
});
