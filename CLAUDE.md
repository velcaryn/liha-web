# Agent instructions

**Read `docs/PLAYBOOK.md` in full before writing any code.** It is the build
standard for this repo and for every client site cloned from it. Every rule in
it is something that was actually built here, or a defect that was actually
found here.

Do not skip it because a task looks small. The most expensive bugs in this
codebase were one-line problems: a phone number in policy prose, a domain
typo in a canonical tag, one letter wrong in a social handle.

## The rules most often broken

1. **No client-specific data in `src/components/`.** Brand name, phone,
   products, social handles all live in `src/config/site.js`. Never write a
   `wa.me` or `tel:` URL by hand; use `waLink()` / `phoneHref`.
2. **No em dashes (U+2014) anywhere.** Code, copy, comments, commit messages,
   markdown. Use a hyphen, comma, or full stop.
3. **Tokens, not raw values.** No hex colors or pixel radii in components.
4. **Run `npm run verify` after any bulk edit.** It runs the brand-leak guard
   and the build. Both catch classes of error that reading the diff does not.
5. **Hover effects go inside `@media (hover: hover)`.** Touch devices get
   `:active` feedback instead.

## Before calling a task done

Walk the launch checklist in section 10 of the playbook. If the task touched
config, verify the phone number appears exactly once in the built bundle.

## Deployment

**Never deploy, commit, or push without explicit instruction.** Build and
preview locally (`npm run verify`, `npm run preview`) and report back. The
client's live site is not yours to publish to.
