/**
 * SINGLE SOURCE OF TRUTH for everything client-specific.
 *
 * To launch a new client site, this is the only file you edit
 * (plus swapping the images in /public/images).
 *
 * Rule: no brand name, phone number, or product copy anywhere
 * in src/components/. If you are about to type a client's name
 * into a component, it belongs here instead.
 */

// ── Brand ────────────────────────────────────────────────
export const brand = {
  name: "Liha's Karupatti",
  shortName: 'Liha',
  tagline: 'Palm & Soil',
  domain: 'https://lihashop.in',
  logo: '/images/logo.webp',
  ogImage: '/images/og-preview.jpg',
  description:
    'Pure, unrefined Palmyra palm jaggery from Tamil Nadu. No chemicals, no bleaching, no preservatives.',
};

// ── Contact ──────────────────────────────────────────────
// Change the number ONCE, here. Everything else derives from it.
export const contact = {
  phone: '919597959549',           // country code + number, digits only
  phoneDisplay: '+91 95979 59549', // as shown to humans
  email: null,
  address: null,
  instagram: 'https://www.instagram.com/lihas_karupatti/',
  instagramHandle: 'lihas_karupatti',
};

export const phoneHref = `tel:+${contact.phone}`;

/** Build a WhatsApp link with a prefilled message. */
export function waLink(message) {
  return `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
}

/** Default WhatsApp CTA used by the floating button and nav. */
export const waDefault = waLink(
  `Hi ${brand.shortName}, I would like to enquire about ordering.`
);

/** Per-product order link. */
export function waOrder(productName) {
  return waLink(`Hi, I would like to order ${productName}`);
}

// ── Products ─────────────────────────────────────────────
export const products = [
  {
    name: 'Karupatti',
    slug: 'karupatti',
    // Framing for the cropped card image, set with the drag tool
    // (npm run frame) and baked in here. See scripts/frame-images.md.
    focus: '51% 31%',
    tamil: 'கருப்பட்டி',
    subtitle: 'Pure Dark Palm Jaggery',
    img: '/images/karupatti.webp',
    badge: { label: 'Traditional Heritage', className: 'badge-green' },
    desc: 'Rich, dark brown solid blocks of traditional Indian palm sugar. Purely unrefined, free from sulfur and bleaching chemicals.',
    tags: ['Unrefined', 'Naturally Low Glycemic', 'Deep Caramel Taste'],
    grid: 'product-card--wide',
  },
  {
    name: 'Panam Karkandu',
    slug: 'panam-karkandu',
    // Framing for the cropped card image, set with the drag tool
    // (npm run frame) and baked in here. See scripts/frame-images.md.
    focus: '55% 83%',
    tamil: 'பனங்கற்கண்டு',
    subtitle: 'Palm Candy Crystals',
    img: '/images/panam-karkandu.webp',
    badge: { label: 'Natural Crystals', className: 'badge-orange' },
    desc: 'Translucent, crystalline palm sugar naturally formed through slow evaporation. Celebrated in Siddha wellness.',
    tags: ['Slow Crystallised', 'Traditional Coolant', 'Mineral-Rich Sweetener'],
    grid: 'product-card--narrow',
  },
  {
    name: 'Chukku Karupatti',
    slug: 'chukku-karupatti',
    // Centred product crop, set by eye against the 2026-09-19 photo.
    focus: '50% 50%',
    tamil: 'சுக்கு கருப்பட்டி',
    subtitle: 'Dry Ginger Palm Jaggery',
    img: '/images/chukku-karupatti.webp',
    badge: { label: 'Healthy Remedy', className: 'badge-green' },
    desc: 'Bite-sized cubes of palm jaggery infused with the warming goodness of dry ginger and black pepper. A traditional winter preparation in Tamil homes.',
    tags: ['Dry Ginger & Pepper', 'Warming Spice Blend', 'Winter Favourite'],
    grid: 'product-card--narrow',
  },
  {
    name: 'Vattu Karupatti',
    slug: 'vattu-karupatti',
    // Framing for the cropped card image, set with the drag tool
    // (npm run frame) and baked in here. See scripts/frame-images.md.
    focus: '49% 62%',
    tamil: 'வட்டு கருப்பட்டி',
    subtitle: 'Rare Male Palm Nectar Delicacy',
    img: '/images/vattu-karupatti.webp',
    badge: { label: 'Rare & Limited Edition', className: 'badge-cream' },
    desc: 'An exquisite artisanal delicacy crafted exclusively from the limited Padaneer tapped from Male Palm trees (ஆண் பனை). This unique nectar gives Vattu Karupatti its distinctive lighter golden shade and refined sweetness.',
    tags: ['Tapped from Male Palms', 'Distinctive Light Shade', 'Seasonal Batch'],
    grid: 'product-card--wide',
  },
  {
    name: 'Panam Kilangu Maavu',
    slug: 'panam-kilangu-maavu',
    // Centred product crop, set by eye against the 2026-09-19 photo.
    focus: '50% 50%',
    tamil: 'பனங்கிழங்கு மாவு',
    subtitle: 'Palm Sprouts Powder',
    img: '/images/panam-kilangu-maavu.webp',
    badge: { label: 'Wholesome Staple', className: 'badge-orange' },
    desc: 'Fine flour milled from sun-dried Palmyra palm sprouts, a traditional Tamil staple valued for its fibre and gentle, grounding nature.',
    tags: ['Sun-Dried & Milled', 'Naturally Gluten-Free', 'Traditional Porridge Flour'],
    grid: 'product-card--full',
  },
];

// ── Trust badges ─────────────────────────────────────────
export const trustBadges = [
  { icon: '/images/no-artificial-colors.webp', title: 'No Artificial Colors' },
  { icon: '/images/zero-preservatives.webp', title: 'Zero Preservatives' },
  { icon: '/images/locally-sourced.webp', title: 'Locally Sourced' },
  { icon: '/images/hygienically-packed.webp', title: 'Hygienically Packed' },
];

// ── Section copy ─────────────────────────────────────────
export const copy = {
  productsEyebrow: 'Artisanal Collection',
  productsTitle: 'Our Pure Palm Offerings',
  productsSubtitle:
    'Harvested sustainably and crafted using time-tested methods to preserve vital nutrients and unmatched rich flavor.',
};


// Long-form copy for the per-product pages. Each product page needs
// substantial unique content to rank on its own: a page that only repeats
// the card blurb from the home page is a thin duplicate and will not.
// Descriptive and factual only, no medical claims (see HealthBenefits.jsx).
export const productPages = {
  "karupatti": {
    "h1": "Karupatti: Traditional Palmyra Palm Jaggery from Tamil Nadu",
    "intro": "Karupatti is the solid, dark palm jaggery that Tamil households have sweetened with for generations. Ours is made from nothing but Padaneer, the fresh nectar tapped at dawn from Palmyra palms, reduced slowly over a firewood flame until it sets into dense blocks. No white sugar is blended in, no sulphur or lime is used to lighten the colour, and nothing is added to make it set faster.",
    "sections": [
      [
        "How it is made",
        "A tapper climbs each palm before sunrise and collects the nectar that has run overnight into a clay pot. That nectar is filtered and moved straight to a wide iron vat over a wood fire. Over several hours it reduces, darkens and thickens, and is then poured into moulds to cool and harden. The whole process is finished the same day the nectar is collected, because Padaneer ferments quickly in the heat."
      ],
      [
        "What it tastes like",
        "Deep caramel with a faint smokiness from the firewood, and a mineral finish that refined sugar does not have. The colour runs from amber to near-black depending on how long the batch was reduced. Darker blocks taste stronger and less sweet."
      ],
      [
        "How to use it",
        "Grate or crush it into filter coffee and tea, use it in payasam and sweets in place of sugar, or eat a small piece on its own after a meal as is traditional. If you are adding it to hot milk, brew first, take the pan off the heat, then stir the powder in."
      ],
      [
        "Storage",
        "Keep it in an airtight jar somewhere cool and dry. Because there are no preservatives it will soften and stick in humid weather, which is normal and does not mean it has spoiled. In a Chennai summer, keep the jar in the fridge and it will stay firm."
      ]
    ]
  },
  "panam-karkandu": {
    "h1": "Panam Karkandu: Natural Palm Candy Crystals",
    "intro": "Panam Karkandu is palm sugar that has been left to crystallise slowly instead of being poured and set. The result is translucent, irregular crystals with a clean sweetness and a slight caramel note. It is the palm equivalent of rock sugar, and unlike commercial rock candy it is not made from refined cane sugar.",
    "sections": [
      [
        "How it is made",
        "The same Padaneer used for Karupatti is reduced to a thick syrup, then held warm and undisturbed for days so crystals can form and grow on their own. The crystals are lifted out, drained and dried. Nothing is seeded or sprayed to force crystallisation, which is why the crystals vary in size and shape from batch to batch."
      ],
      [
        "What it tastes like",
        "Cleaner and lighter than block Karupatti, closer to a mild caramel. The irregular crystals dissolve slowly, so it sweetens gradually rather than all at once."
      ],
      [
        "How to use it",
        "Traditionally dissolved in warm water or milk, added to herbal decoctions, or simply held in the mouth. It is also used in Siddha preparations, which is where much of its reputation in Tamil Nadu comes from."
      ],
      [
        "Storage",
        "Airtight and dry. Crystals draw moisture from the air and will clump if the jar is left open. Clumped crystals are still perfectly good, just break them apart."
      ]
    ]
  },
  "chukku-karupatti": {
    "h1": "Chukku Karupatti: Palm Jaggery with Dry Ginger and Pepper",
    "intro": "Chukku Karupatti is Karupatti made with dry ginger (chukku) and black pepper worked into the batch while it is still molten, then set into bite-sized cubes rather than large blocks. It is a preparation Tamil families make for the cooler months, when a warming, spiced sweetener is preferred to a plain one.",
    "sections": [
      [
        "How it is made",
        "Palm nectar is reduced the same way as plain Karupatti. Near the end of the boil, ground dry ginger and black pepper are folded through, so the spice is distributed evenly rather than sitting on the surface. The mixture is then set and cut into small cubes rather than poured into large moulds, which is why Chukku Karupatti looks different from a block of plain Karupatti."
      ],
      [
        "What it tastes like",
        "The palm caramel comes first, then the ginger heat builds, with pepper behind it. Noticeably spicier than plain Karupatti and less straightforwardly sweet."
      ],
      [
        "How to use it",
        "Most often dissolved in hot water or milk as a spiced drink, particularly in the mornings and during the monsoon. It also works well grated over porridge or stirred into strong tea."
      ],
      [
        "Storage",
        "As with plain Karupatti, keep it airtight and cool. The spices do not shorten its life, but they will lose sharpness after several months, so it is best used within the season."
      ]
    ]
  },
  "vattu-karupatti": {
    "h1": "Vattu Karupatti: Rare Male Palm Nectar Jaggery",
    "intro": "Vattu Karupatti is made only from Padaneer tapped from male Palmyra palms. Male palms yield less nectar and yield it for a shorter window in the year, so this is a small, seasonal batch rather than a product we can make continuously. It is lighter in colour and distinctly different in taste from ordinary Karupatti.",
    "sections": [
      [
        "Why it is rare",
        "Male Palmyra palms produce nectar from their flower spikes across a limited season, and the volume per tree is well below what a female palm yields. A tapper working the same number of trees will bring back a fraction of the nectar, which is why Vattu Karupatti has always been the batch that runs out first."
      ],
      [
        "What it tastes like",
        "Lighter and cleaner than dark Karupatti, with less of the smoky depth and more of a delicate palm character. The colour is noticeably paler, closer to light amber than brown."
      ],
      [
        "How to use it",
        "Because the flavour is more delicate, it is worth using where it will be tasted rather than buried. Good on its own, in light sweets, or dissolved in warm milk. Using it in strong filter coffee tends to mask what makes it different."
      ],
      [
        "Availability",
        "Seasonal and limited. When a batch is gone we cannot simply make more until the next tapping season, so we sell it in small quantities while it lasts."
      ]
    ]
  },
  "panam-kilangu-maavu": {
    "h1": "Panam Kilangu Maavu: Traditional Palmyra Palm Sprouts Powder",
    "intro": "Panam Kilangu Maavu is flour milled from the sprouted tuber of the Palmyra palm, known in Tamil as panang kizhangu. The tuber is boiled, sliced and sun-dried before it is ground into a fine powder, a preparation Tamil households have relied on as a wholesome, fibre-rich staple for generations.",
    "sections": [
      [
        "How it is made",
        "The underground sprout of the Palmyra palm is dug up during its short seasonal window, boiled, then sliced into pieces and laid out to dry in the sun over several days. Once fully dried, the pieces are ground into a fine, pale flour and sieved before packing. Nothing is added at any stage."
      ],
      [
        "What it tastes like",
        "Mild, earthy and lightly starchy on its own, closer to a wholegrain flour than a sweetener. It takes on other flavours easily, which is why it is traditionally cooked with milk, jaggery or fruit rather than eaten plain."
      ],
      [
        "How to use it",
        "Traditionally cooked slowly with water or milk into a thick porridge (kanji), often sweetened with a little Karupatti and finished with a few nuts. It can also be blended with millet flours for a heartier breakfast, or introduced to babies as an early weaning food from around ten months, cooked soft and thin."
      ],
      [
        "Storage",
        "Keep it in an airtight container somewhere cool and dry, away from direct sunlight and moisture. Being a plain milled flour with no preservatives, it is best used within a few months of opening for the freshest flavour."
      ]
    ]
  }
};
