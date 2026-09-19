# Add a new product

The follow-this-and-nothing-breaks procedure. Read `docs/PLAYBOOK.md`
first if you have not; the house rules there apply here too (no em dashes,
tokens not raw values, no client data in `src/components/`).

Most of the wiring is derived from `src/config/site.js` now, so the list
below is shorter than it used to be. Steps marked **auto** need nothing
from you, they are listed so you know they happen.

---

## 1. Prepare the photo

Square, 900x900, WebP, under ~150KB, product centred on a clean
background so it matches the others.

```sh
# From a source PNG/JPG of any size. Crop square first if it is not.
cwebp -q 82 source.png -o public/images/<slug>.webp
```

If the source is portrait or landscape, centre-crop to a square before
converting, or the card will crop it unpredictably. Check the result at
900x900 before moving on.

## 2. Add the product to `src/config/site.js`

Append to the `products` array:

```js
{
  name: 'Product Name',
  slug: 'product-name',          // becomes /product-name/
  focus: '50% 50%',              // object-position for the card crop
  tamil: 'தமிழ் பெயர்',
  subtitle: 'Short English descriptor',
  img: '/images/product-name.webp',
  badge: { label: 'Short Badge', className: 'badge-green' },  // or badge-orange / badge-cream
  desc: 'One or two sentences for the home page card.',
  tags: ['Tag One', 'Tag Two', 'Tag Three'],   // exactly 3 reads best
  grid: 'product-card--narrow',  // see the grid note below
}
```

**The grid field.** The home page bento is a 12 column grid:
`--wide` spans 7, `--narrow` spans 5, `--full` spans 12 and lays the image
beside the copy. Rows must add to 12, so keep the wide/narrow pairs
balanced and use `--full` for a leftover odd card. With five products the
current arrangement is wide, narrow / narrow, wide / full.

## 3. Add the long-form page copy

Add a matching key to `productPages` in the same file. The slug must match
exactly or the route renders nothing:

```js
"product-name": {
  "h1": "Product Name: A Descriptive, Keyword-Carrying Headline",
  "intro": "Two to four sentences. This is also the meta description and the WhatsApp share text, so front-load the useful part.",
  "sections": [
    ["How it is made", "..."],
    ["What it tastes like", "..."],
    ["How to use it", "..."],
    ["Storage", "..."]
  ]
}
```

Four sections is the house pattern and it fills the 2x2 card grid on the
product page exactly. Keep the copy descriptive and factual. Traditional
use can be described as traditional use; health claims cannot be made.
See the note above `productPages` in the config.

## 4. Add it to the home page ItemList schema

`index.html`, the `ItemList` node in the JSON-LD block. Copy the last
`Product` entry, bump `position`, update name, description and image URL.

This is the one place that still needs a hand edit, because the JSON-LD is
static HTML that no JS runs over before a crawler sees it.

## 5. Add it to `public/sitemap.xml`

```xml
<url>
  <loc>https://lihashop.in/product-name/</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

Refresh `lastmod` on the home page entry too, since its product list
changed.

## 6. Verify

```sh
npm run verify
```

That runs the brand-leak guard, the fixed-nav guard, the FAQ schema check
and a full build. The build will fail loudly if the new route prerenders
under 200 words, which is the usual sign that step 3 was missed.

Then `npm run preview` and check:

- the new card appears on the home page and the grid still tiles cleanly
- `/product-name/` loads with image, buy panel, detail cards and related products
- the WhatsApp button opens with the right prefilled message
- the share button copies the right URL
- `dist/images/og/product-name.jpg` exists and looks right

## 7. After deploying

```sh
npm run indexnow
```

---

## What happens automatically

- **auto** Routing. `src/App.jsx` looks the slug up in `products`.
- **auto** Prerendering. `scripts/prerender.mjs` reads slugs out of
  `src/config/site.js` and bakes a crawlable HTML file per route.
- **auto** Share preview image. `scripts/og-images.mjs` renders a real
  1200x630 JPEG per product at build time.
- **auto** Navbar and mobile CardNav product links, derived from `products`.
- **auto** The order form dropdown in `ContactSection.jsx`, derived from
  `products`. Only the short badge label is hand-keyed, in `ORDER_BADGES`
  in that file, and it falls back to empty if you skip it.
- **auto** The "Explore our other products" rail on every other product page.

## If you rename or remove a slug

A live slug is an indexed URL. Renaming one without a redirect breaks every
existing link to it, and Netlify serves a hard 404 for unknown paths.

Add a 301 in `netlify.toml`, **above** the `/*` catch-all, before you ship
the rename. There is a worked example in that file from the 2026-09-19
Karuppati to Karupatti rename.
