---
name: Palm & Soil
colors:
  surface: '#fff8f6'
  surface-dim: '#e8d6d1'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#fceae5'
  surface-container-high: '#f6e4df'
  surface-container-highest: '#f1dfda'
  on-surface: '#231a17'
  on-surface-variant: '#504440'
  inverse-surface: '#382e2b'
  inverse-on-surface: '#ffede8'
  outline: '#83746f'
  outline-variant: '#d5c3bd'
  surface-tint: '#7b5647'
  primary: '#32170d'
  on-primary: '#ffffff'
  primary-container: '#4b2c20'
  on-primary-container: '#bf9282'
  inverse-primary: '#ecbcaa'
  secondary: '#3b6934'
  on-secondary: '#ffffff'
  secondary-container: '#b9eeab'
  on-secondary-container: '#3f6d38'
  tertiary: '#221e12'
  on-tertiary: '#ffffff'
  tertiary-container: '#383326'
  on-tertiary-container: '#a39b8a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ecbcaa'
  on-primary-fixed: '#2e140a'
  on-primary-fixed-variant: '#613e31'
  secondary-fixed: '#bcf0ae'
  secondary-fixed-dim: '#a1d494'
  on-secondary-fixed: '#002201'
  on-secondary-fixed-variant: '#23501e'
  tertiary-fixed: '#ebe2ce'
  tertiary-fixed-dim: '#cfc6b3'
  on-tertiary-fixed: '#1f1b0f'
  on-tertiary-fixed-variant: '#4c4638'
  background: '#fff8f6'
  on-background: '#231a17'
  surface-variant: '#f1dfda'
typography:
  display-lg:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Literata
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 80px
---

## Brand & Style

The visual identity of this design system is rooted in the "Palm & Soil" narrative—a celebration of traditional Indian Palmyra palm sugar (Karuppati) through a contemporary, hygienic, and vibrant lens. It bridges the gap between heritage and modern e-commerce.

The style is **Modern Tactile**. It utilizes clean layouts and professional typography but infuses the UI with organic warmth through earthy textures, soft shadows, and illustrative palm motifs. The goal is to evoke a sense of "Farm-to-Table" authenticity that feels both premium and approachable.

**Key Visual Pillars:**
- **Authenticity:** Use of paper-like textures and organic line work.
- **Modern Hygiene:** High whitespace and crisp UI elements to signal quality and safety.
- **Vibrant Earthiness:** A palette that feels alive and natural, rather than muddy or dated.

## Colors

The palette is derived directly from the Karuppati production process—the dark jaggery, the green palm fronds, and the creamy interior of the fruit.

- **Primary (Deep Brown - #4B2C20):** Used for primary typography, headers, and core branding elements. It provides the "solid" foundation of the brand.
- **Secondary (Palm Green - #2D5A27):** Used for "Freshness" cues, primary call-to-actions (CTAs), and success states. It adds the "vibrant" element requested.
- **Tertiary (Warm Cream - #FFF5E1):** The primary background color. It is softer and more "organic" than pure white, enhancing the premium, artisanal feel.
- **Accent (Sunlight Orange - #F2994A):** To be used sparingly for badges, highlights, or "Limited Edition" tags to provide a pop of energy.

## Typography

The typography pairing reflects the "Traditional yet Modern" goal.

- **Literata (Serif):** Chosen for its scholarly yet warm character. It anchors the brand in tradition and storytelling. Use for all headlines and product names.
- **Be Vietnam Pro (Sans-Serif):** A friendly, contemporary typeface with high legibility. It handles the functional aspects of the UI (navigation, product descriptions, pricing) to ensure the brand feels tech-forward and hygienic.

**Hierarchy Rules:**
- Large display text should always be in the Primary Brown.
- Use `label-lg` for categories or metadata to provide a clear, structured contrast to the flowing serif headlines.

## Layout & Spacing

This design system utilizes a **Fluid-Fixed Hybrid Grid**. The content is contained within a max-width for readability, but background elements (like decorative palm illustrations) can bleed to the edges of the screen.

- **Rhythm:** An 8px base unit ensures consistent scaling.
- **Grid:** A 12-column grid for desktop, 8-column for tablet, and 4-column for mobile.
- **Density:** High whitespace is prioritized to maintain the "Hygienic" brand pillar. Elements should feel like they have "room to breathe," reflecting the open landscapes where palm trees grow.
- **Margins:** Generous side margins on desktop (48px) create a gallery-like feel for product showcases.

## Elevation & Depth

To achieve the "Modern Tactile" look, depth is created through **Tonal Layering** and **Soft Ambient Shadows**.

1.  **Surfaces:** The base layer is the `Warm Cream`. Secondary surfaces (cards, sidebars) use a slightly lighter or darker cream to create subtle separation without harsh lines.
2.  **Shadows:** Shadows are rare but intentional. When used, they are "Soil Shadows"—low-opacity, highly diffused, and tinted with the Primary Brown (`#4B2C20` at 8% opacity). This makes elements feel like they are resting gently on a surface rather than floating in digital space.
3.  **Textures:** Use subtle paper or grain textures on primary background containers to enhance the "Earthy" feel.

## Shapes

The shape language is **Organic and Friendly**. Avoid sharp, clinical corners.

- **Standard Radius:** 0.5rem (8px) for buttons and input fields.
- **Large Radius:** 1rem (16px) for product cards and featured sections to give them a "soft-touch" feel.
- **Decorative Elements:** Use circular or "leaf-shaped" masks for imagery to echo the logo and the Palmyra palm's natural forms.

## Components

### Buttons
- **Primary:** Filled Palm Green (`#2D5A27`) with White or Cream text. Rounded (8px). High-contrast and clear.
- **Secondary:** Outlined in Deep Brown (`#4B2C20`) with 1.5px border weight.
- **Tertiary:** Text-only in Deep Brown with a subtle underline on hover.

### Cards
- **Product Cards:** Cream background with a very subtle Brown-tinted shadow. The Literata serif is used for the product title, and Be Vietnam Pro for the price and weight.
- **Information Cards:** Use a light Green tint background to highlight "Health Benefits" or "Origin Stories."

### Input Fields
- Understated borders (1px) in `Neutral`. Focus state uses the `Palm Green` to signify a "healthy" interaction.

### Chips & Badges
- Used for "Organic," "Traditional," or "New" labels. Use the `Accent Orange` or `Palm Green` with low opacity backgrounds and high-contrast text.

### Palm Motifs
- A set of custom Palmyra palm illustrations should be used as background watermarks or section breaks to reinforce the theme consistently across all pages.