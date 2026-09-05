#!/usr/bin/env node
/**
 * Writes dist/404.html: a real not-found page carrying noindex.
 *
 * Netlify serves this for unknown paths at status 404 (see netlify.toml).
 * It is built from the prerendered home page so it keeps the site's styling
 * and nav, with the head swapped for a noindex one.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const home = readFileSync('dist/index.html', 'utf8');

const head = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, follow" />
    <title>Page not found | Liha's Karuppati</title>
    <link rel="icon" href="/favicon.ico" sizes="any" />
`;

// Keep the stylesheet and bundle links so the page still looks like the site.
const assetTags = [...home.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map((m) => m[0])
  .concat([...home.matchAll(/<script[^>]+src="\/assets\/[^"]+"[^>]*><\/script>/g)].map((m) => m[0]));

const out = home.replace(
  /<head>[\s\S]*?<\/head>/,
  `<head>${head}${assetTags.join('\n    ')}\n  </head>`
);

writeFileSync('dist/404.html', out);
console.log(`OK: wrote dist/404.html (noindex, ${(Buffer.byteLength(out) / 1024).toFixed(0)} KB)`);
