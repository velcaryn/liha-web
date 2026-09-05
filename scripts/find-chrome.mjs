#!/usr/bin/env node
/**
 * Resolves a Chrome binary for the prerender step, installing one if needed.
 *
 * Netlify's build image does not guarantee a Chrome at a fixed path, and
 * parsing the installer's stdout with sed is brittle. This asks
 * @puppeteer/browsers for the path programmatically instead, and prints it
 * so the build can export it.
 */
import { existsSync } from 'node:fs';

const LOCAL = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
].find((p) => p && existsSync(p));

if (LOCAL) {
  console.log(LOCAL);
  process.exit(0);
}

// Nothing local: fetch a pinned Chrome for Testing build.
try {
  const { install, resolveBuildId, computeExecutablePath, Browser } =
    await import('@puppeteer/browsers');
  const cacheDir = process.env.PUPPETEER_CACHE_DIR || `${process.env.HOME}/.cache/chrome-prerender`;
  const buildId = await resolveBuildId(Browser.CHROME, 'linux', 'stable');
  await install({ browser: Browser.CHROME, buildId, cacheDir });
  console.log(computeExecutablePath({ browser: Browser.CHROME, buildId, cacheDir }));
} catch (e) {
  console.error(`could not resolve Chrome: ${e.message}`);
  process.exit(1);
}
