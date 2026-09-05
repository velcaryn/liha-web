# Reframing the product card images

The home page crops each square product photo into a landscape card. Which
part of the photo survives that crop is a judgement call, so it is set by eye
rather than guessed by CSS.

## How to reframe

1. `npm run dev`, open the home page, scroll to the products.
2. Click **Reframe images** (top right, dev only).
3. Drag any product photo. Dragging down reveals what is above it.
4. Click **Copy values** and send them over, or paste them in yourself.

## Locking it in

Each line maps to the `focus` field of that product in `src/config/site.js`:

```js
{
  name: 'Karuppati',
  slug: 'karuppati',
  focus: '50% 38%',   // <- paste here
  ...
}
```

Once set there it is a plain `object-position` on the image and applies to
every visitor. Nothing is stored in the browser and nothing is draggable in
production: the tool is gated on `import.meta.env.DEV`, so the bundler drops
it from the production build entirely. Verified by grepping the built bundle.
