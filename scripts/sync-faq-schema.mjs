#!/usr/bin/env node
/**
 * Regenerates the FAQPage JSON-LD in index.html from the FAQ component.
 *
 * Playbook section 9, bug 5: the structured data drifted from the rendered
 * FAQ. It had 4 questions while the page showed 6, so two answers were
 * invisible to rich results, and Google treats schema that disagrees with
 * the visible page as a spam signal.
 *
 * src/components/FAQ.jsx owns the content. This script reads that array and
 * rewrites the JSON-LD block. Run with --check to verify without writing
 * (wired into npm run verify).
 */
import { readFileSync, writeFileSync } from 'node:fs';

const CHECK = process.argv.includes('--check');
const HTML = 'index.html';

// Pull the exported array out of the component without importing JSX.
const src = readFileSync('src/components/FAQ.jsx', 'utf8');
const start = src.indexOf('export const faqs = [');
if (start === -1) {
  console.error('FAIL: could not find `export const faqs` in src/components/FAQ.jsx');
  process.exit(1);
}
const open = src.indexOf('[', start);
let depth = 0, end = -1;
for (let i = open; i < src.length; i++) {
  if (src[i] === '[') depth++;
  else if (src[i] === ']') { depth--; if (depth === 0) { end = i; break; } }
}
const faqs = eval(src.slice(open, end + 1)); // trusted local source file

if (!Array.isArray(faqs) || faqs.length === 0) {
  console.error('FAIL: parsed no FAQ entries.');
  process.exit(1);
}

const block = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const html = readFileSync(HTML, 'utf8');

// Replace the FAQPage node inside the JSON-LD @graph, preserving indentation.
const marker = '"@type": "FAQPage"';
const idx = html.indexOf(marker);
if (idx === -1) {
  console.error('FAIL: no FAQPage node found in index.html.');
  process.exit(1);
}
let objStart = html.lastIndexOf('{', idx);
depth = 0; let objEnd = -1;
for (let i = objStart; i < html.length; i++) {
  if (html[i] === '{') depth++;
  else if (html[i] === '}') { depth--; if (depth === 0) { objEnd = i; break; } }
}

const indent = ' '.repeat(html.slice(0, objStart).length - html.lastIndexOf('\n', objStart) - 1);
const rendered = JSON.stringify(block, null, 2)
  .split('\n')
  .map((l, i) => (i === 0 ? l : indent + l))
  .join('\n');

const current = html.slice(objStart, objEnd + 1);
const existing = (current.match(/"@type": "Question"/g) || []).length;

if (current.trim() === rendered.trim()) {
  console.log(`OK: FAQ schema matches the component (${faqs.length} questions).`);
  process.exit(0);
}

if (CHECK) {
  console.error(
    `FAIL: FAQ schema is out of sync.\n` +
    `      index.html has ${existing} question(s), FAQ.jsx has ${faqs.length}.\n` +
    `      Run: npm run sync:faq`
  );
  process.exit(1);
}

writeFileSync(HTML, html.slice(0, objStart) + rendered + html.slice(objEnd + 1));
console.log(`OK: wrote ${faqs.length} questions into the FAQPage schema (was ${existing}).`);
