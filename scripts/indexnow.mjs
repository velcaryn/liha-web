#!/usr/bin/env node
/**
 * Pings IndexNow so Bing (and therefore ChatGPT search, which uses Bing's
 * index) picks up new or changed pages within minutes instead of waiting for
 * a crawl. Google ignores IndexNow; use Search Console for that.
 *
 * Usage: npm run indexnow
 *
 * The key file must be reachable at https://lihashop.in/<key>.txt and contain
 * exactly the key with no trailing newline, which is how the endpoint proves
 * we control the domain.
 */
import { readFileSync } from 'node:fs';

const KEY = '806ffda5f8db7addd3bcef4513f72748';
const HOST = 'lihashop.in';

const sitemap = readFileSync('public/sitemap.xml', 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error('FAIL: no URLs found in public/sitemap.xml');
  process.exit(1);
}

// Verify the key file is actually live before submitting: the endpoint
// returns 202 either way, so a missing key fails silently otherwise.
const keyUrl = `https://${HOST}/${KEY}.txt`;
const keyRes = await fetch(keyUrl);
const keyBody = (await keyRes.text()).trim();
if (!keyRes.ok || keyBody !== KEY) {
  console.error(`FAIL: ${keyUrl} did not return the key.`);
  console.error(`      status ${keyRes.status}, body starts "${keyBody.slice(0, 40)}"`);
  console.error('      Deploy first, then run this.');
  process.exit(1);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: keyUrl, urlList }),
});

console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
urlList.forEach((u) => console.log('  ' + u));
if (res.status !== 200 && res.status !== 202) {
  console.error('Unexpected status. 200/202 mean accepted.');
  process.exit(1);
}
