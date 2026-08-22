#!/usr/bin/env node
/**
 * Fails if client-specific data is hardcoded in src/components/.
 *
 * Everything client-specific belongs in src/config/site.js. This is the
 * guard that keeps site number two a weekend instead of a month: if a
 * brand name or phone number leaks into a component, cloning the repo
 * for a new client silently ships the previous client's details.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/components';

// Patterns that must never appear outside src/config/site.js
// TIER 1 - hard fail. These cause a wrong-client incident if they leak:
// the previous client's phone number on a new client's live site.
const RULES = [
  { name: 'phone number',    re: /\b\d{12}\b|\+91[\s-]?\d{5}[\s-]?\d{5}/ },
  { name: 'hardcoded wa.me', re: /wa\.me\/\d+/ },
  { name: 'hardcoded tel:',  re: /tel:\+?\d{6,}/ },
];

// TIER 2 - warn only. Brand and product names in prose (FAQ answers,
// policy text, alt attributes) are rewritten per client anyway, so
// hoisting them into config would just move English paragraphs into a
// JS file. Counted and reported so the number stays visible.
const SOFT = [
  { name: 'brand name',   re: /\bLiha\b/i },
  { name: 'product name', re: /karuppati|karkandu/i },
];

let failures = 0;
let soft = 0;
for (const file of readdirSync(DIR).filter((f) => f.endsWith('.jsx'))) {
  const path = join(DIR, file);
  readFileSync(path, 'utf8').split('\n').forEach((line, i) => {
    if (line.trimStart().startsWith('//') || line.trimStart().startsWith('*')) return;
    for (const rule of SOFT) {
      if (rule.re.test(line)) soft++;
    }
    for (const rule of RULES) {
      if (rule.re.test(line)) {
        console.error(`${path}:${i + 1}  ${rule.name} hardcoded`);
        console.error(`   ${line.trim().slice(0, 100)}`);
        console.error(`   -> move it to src/config/site.js\n`);
        failures++;
      }
    }
  });
}

if (failures) {
  console.error(`FAIL: ${failures} client-specific value(s) hardcoded in components.`);
  process.exit(1);
}
console.log('OK: no contact details hardcoded in components.');
if (soft) {
  console.log(`note: ${soft} brand/product mention(s) in component prose.`);
  console.log('      expected - this copy is rewritten per client.');
}
