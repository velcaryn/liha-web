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
  name: "Liha's Karuppati",
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
    name: 'Karuppati',
    slug: 'karuppati',
    tamil: 'கருப்பட்டி',
    subtitle: 'Pure Dark Palm Jaggery',
    img: '/images/karuppati.webp',
    badge: { label: 'Traditional Heritage', className: 'badge-green' },
    desc: 'Rich, dark brown solid blocks of traditional Indian palm sugar. Purely unrefined, free from sulfur and bleaching chemicals.',
    tags: ['Unrefined', 'Naturally Low Glycemic', 'Deep Caramel Taste'],
    grid: 'product-card--wide',
  },
  {
    name: 'Panam Karkandu',
    slug: 'panam-karkandu',
    tamil: 'பனங்கற்கண்டு',
    subtitle: 'Palm Candy Crystals',
    img: '/images/panam-karkandu.webp',
    badge: { label: 'Natural Crystals', className: 'badge-orange' },
    desc: 'Translucent, crystalline palm sugar naturally formed through slow evaporation. Celebrated in Siddha wellness.',
    tags: ['Slow Crystallised', 'Traditional Coolant', 'Mineral-Rich Sweetener'],
    grid: 'product-card--narrow',
  },
  {
    name: 'Chukku Karuppati',
    slug: 'chukku-karuppati',
    tamil: 'சுக்கு கருப்பட்டி',
    subtitle: 'Dry Ginger Palm Jaggery',
    img: '/images/chukku-karuppati.webp',
    badge: { label: 'Healthy Remedy', className: 'badge-green' },
    desc: 'Traditional palm jaggery infused with the warming goodness of dry ginger and black pepper. A traditional winter preparation in Tamil homes.',
    tags: ['Dry Ginger & Pepper', 'Warming Spice Blend', 'Winter Favourite'],
    grid: 'product-card--narrow',
  },
  {
    name: 'Vattu Karuppati',
    slug: 'vattu-karuppati',
    tamil: 'வட்டு கருப்பட்டி',
    subtitle: 'Rare Male Palm Nectar Delicacy',
    img: '/images/vattu-karuppati.webp',
    badge: { label: 'Rare & Limited Edition', className: 'badge-cream' },
    desc: 'An exquisite artisanal delicacy crafted exclusively from the limited Padaneer tapped from Male Palm trees (ஆண் பனை). This unique nectar gives Vattu Karuppati its distinctive lighter golden shade and refined sweetness.',
    tags: ['Tapped from Male Palms', 'Distinctive Light Shade', 'Seasonal Batch'],
    grid: 'product-card--wide',
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
  "karuppati": {
    "h1": "Karuppati: Traditional Palmyra Palm Jaggery from Tamil Nadu",
    "intro": "Karuppati is the solid, dark palm jaggery that Tamil households have sweetened with for generations. Ours is made from nothing but Padaneer, the fresh nectar tapped at dawn from Palmyra palms, reduced slowly over a firewood flame until it sets into dense blocks. No white sugar is blended in, no sulphur or lime is used to lighten the colour, and nothing is added to make it set faster.",
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
        "The same Padaneer used for Karuppati is reduced to a thick syrup, then held warm and undisturbed for days so crystals can form and grow on their own. The crystals are lifted out, drained and dried. Nothing is seeded or sprayed to force crystallisation, which is why the crystals vary in size and shape from batch to batch."
      ],
      [
        "What it tastes like",
        "Cleaner and lighter than block Karuppati, closer to a mild caramel. The irregular crystals dissolve slowly, so it sweetens gradually rather than all at once."
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
  "chukku-karuppati": {
    "h1": "Chukku Karuppati: Palm Jaggery with Dry Ginger and Pepper",
    "intro": "Chukku Karuppati is Karuppati made with dry ginger (chukku) and black pepper worked into the batch while it is still molten. It is a preparation Tamil families make for the cooler months, when a warming, spiced sweetener is preferred to a plain one.",
    "sections": [
      [
        "How it is made",
        "Palm nectar is reduced the same way as plain Karuppati. Near the end of the boil, ground dry ginger and black pepper are folded through, so the spice is distributed evenly rather than sitting on the surface. The blocks are then set and cooled."
      ],
      [
        "What it tastes like",
        "The palm caramel comes first, then the ginger heat builds, with pepper behind it. Noticeably spicier than plain Karuppati and less straightforwardly sweet."
      ],
      [
        "How to use it",
        "Most often dissolved in hot water or milk as a spiced drink, particularly in the mornings and during the monsoon. It also works well grated over porridge or stirred into strong tea."
      ],
      [
        "Storage",
        "As with plain Karuppati, keep it airtight and cool. The spices do not shorten its life, but they will lose sharpness after several months, so it is best used within the season."
      ]
    ]
  },
  "vattu-karuppati": {
    "h1": "Vattu Karuppati: Rare Male Palm Nectar Jaggery",
    "intro": "Vattu Karuppati is made only from Padaneer tapped from male Palmyra palms. Male palms yield less nectar and yield it for a shorter window in the year, so this is a small, seasonal batch rather than a product we can make continuously. It is lighter in colour and distinctly different in taste from ordinary Karuppati.",
    "sections": [
      [
        "Why it is rare",
        "Male Palmyra palms produce nectar from their flower spikes across a limited season, and the volume per tree is well below what a female palm yields. A tapper working the same number of trees will bring back a fraction of the nectar, which is why Vattu Karuppati has always been the batch that runs out first."
      ],
      [
        "What it tastes like",
        "Lighter and cleaner than dark Karuppati, with less of the smoky depth and more of a delicate palm character. The colour is noticeably paler, closer to light amber than brown."
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
  }
};
