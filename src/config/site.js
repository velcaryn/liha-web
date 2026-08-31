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
    tamil: 'கருப்பட்டி',
    subtitle: 'Pure Dark Palm Jaggery',
    img: '/images/karuppati.webp',
    badge: { label: 'Traditional Heritage', className: 'badge-green' },
    desc: 'Rich, dark brown solid blocks of traditional Indian palm sugar. Purely unrefined, free from sulfur and bleaching chemicals.',
    tags: ['Natural Iron Booster', 'Low Glycemic Index', 'Authentic Taste'],
    grid: 'product-card--wide',
  },
  {
    name: 'Panam Karkandu',
    tamil: 'பனங்கற்கண்டு',
    subtitle: 'Palm Candy Crystals',
    img: '/images/panam-karkandu.webp',
    badge: { label: 'Natural Crystals', className: 'badge-orange' },
    desc: 'Translucent, crystalline palm sugar naturally formed through slow evaporation. Celebrated in Siddha wellness.',
    tags: ['Soothes Throat', 'Natural Coolant', 'Rich Mineral Sweetener'],
    grid: 'product-card--narrow',
  },
  {
    name: 'Chukku Karuppati',
    tamil: 'சுக்கு கருப்பட்டி',
    subtitle: 'Dry Ginger Palm Jaggery',
    img: '/images/chukku-karuppati.webp',
    badge: { label: 'Healthy Remedy', className: 'badge-green' },
    desc: 'Traditional palm jaggery infused with the warming goodness of dry ginger and black pepper. A time-tested remedy for cold and cough.',
    tags: ['Warming & Soothing', 'Cold & Cough Relief', 'Immunity Booster'],
    grid: 'product-card--narrow',
  },
  {
    name: 'Vattu Karuppati',
    tamil: 'வட்டு கருப்பட்டி',
    subtitle: 'Rare Male Palm Nectar Delicacy',
    img: '/images/vellai-karuppati.webp',
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
