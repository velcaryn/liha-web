#!/usr/bin/env node
/**
 * Fails if the mobile bottom dock can come unpinned.
 *
 * Found in the wild on iOS Safari: the bottom nav rode up to mid-screen
 * during scroll and settled back at rest. Two independent causes, both
 * of which had shipped:
 *
 *   1. `overflow-x: hidden` on body but NOT on html. iOS Safari then
 *      promotes body to the scroll container, and position:fixed children
 *      resolve against it instead of the viewport, so they scroll.
 *
 *   2. `backdrop-filter` on the fixed element (or any ancestor of it).
 *      filter / backdrop-filter / transform / perspective all create a
 *      containing block, which silently downgrades position:fixed to
 *      behaving like position:absolute.
 *
 * Both are invisible on desktop Chrome and on the iOS simulator at rest.
 * They only appear on a real device mid-scroll, which is why they need a
 * guard rather than a code review.
 */
import { readFileSync } from 'node:fs';

let failed = 0;
const fail = (msg) => { console.error(`FAIL: ${msg}`); failed++; };

// Comments must never satisfy a check - strip them before matching, or a
// rule that merely *mentions* a property in prose passes the guard.
const stripComments = (src) => src.replace(/\/\*[\s\S]*?\*\//g, '');

// ---- Rule 1: overflow-x must be on html and body together ----
const css = stripComments(readFileSync('src/index.css', 'utf8'));
const htmlBlock = css.match(/(^|\n)html\s*\{([^}]*)\}/);
const bodyBlock = css.match(/(^|\n)body\s*\{([^}]*)\}/);

const hasOverflowX = (b) => b && /overflow-x\s*:\s*hidden/.test(b[2]);
if (hasOverflowX(bodyBlock) && !hasOverflowX(htmlBlock)) {
  fail(
    'src/index.css: `overflow-x: hidden` is on body but not html.\n' +
    '      iOS Safari will make body the scroll container and the fixed\n' +
    '      bottom nav will drift during scroll. Set it on both.'
  );
}

// ---- Rule 2: no containing-block triggers on the fixed dock ----
const nav = stripComments(readFileSync('src/components/MobileNav.jsx', 'utf8'));
const navRule = nav.match(/\.mobile-nav\s*\{([^}]*)\}/);
if (!navRule) {
  fail('src/components/MobileNav.jsx: could not find the .mobile-nav rule.');
} else {
  const body = navRule[1];
  if (!/position\s*:\s*fixed/.test(body)) {
    fail('.mobile-nav must be position: fixed.');
  }
  // These create a containing block and unpin fixed descendants.
  for (const prop of ['backdrop-filter', 'filter', 'perspective']) {
    const re = new RegExp(`(^|[;{\\s])-?(webkit-)?${prop}\\s*:`, 'i');
    if (re.test(body)) {
      fail(
        `.mobile-nav sets \`${prop}\`, which creates a containing block and\n` +
        '      unpins position: fixed. Move it to the .mobile-nav::before\n' +
        '      pseudo-element instead - it looks identical and is inert.'
      );
    }
  }
  // bottom must be anchored to 0, not a vh unit (iOS 100vh = LARGE viewport).
  const bottom = body.match(/bottom\s*:\s*([^;]+)/);
  if (bottom && /vh/.test(bottom[1])) {
    fail(
      `.mobile-nav anchors bottom to a vh unit (${bottom[1].trim()}).\n` +
      '      On iOS 100vh is the large viewport, so this is wrong by the\n' +
      '      toolbar height while the URL bar shows. Anchor to 0.'
    );
  }
}

// ---- Rule 3: .app-shell must stay a clean ancestor ----
const app = stripComments(readFileSync('src/App.jsx', 'utf8'));
const shell = app.match(/className="app-shell"[^>]*style=\{\{([^}]*)\}\}/);
if (shell) {
  for (const prop of ['transform', 'filter', 'perspective', 'backdropFilter']) {
    if (new RegExp(`\\b${prop}\\s*:`, 'i').test(shell[1])) {
      fail(
        `src/App.jsx: .app-shell sets \`${prop}\`. It is an ancestor of the\n` +
        '      fixed bottom nav, so this creates a containing block and\n' +
        '      unpins it. Keep .app-shell free of these.'
      );
    }
  }
}

if (failed) {
  console.error(`\n${failed} fixed-position defect(s) found.`);
  process.exit(1);
}
console.log('OK: bottom nav pinning is sound (html/body overflow, no containing-block triggers).');
