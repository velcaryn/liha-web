import React, { useEffect } from 'react';
import { products, productPages, brand, contact, trustBadges, waLink } from '../config/site';
import WhatsAppIcon from './WhatsAppIcon';
import ShareButton from './ShareButton';
import SkeletonImage from './SkeletonImage';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileNav from './MobileNav';

/**
 * A single product's own page, served at /karupatti/, /panam-karkandu/ and
 * so on.
 *
 * These exist for search: one URL cannot rank for five different product
 * intents at once, and a page that only repeats the home page card blurb is
 * a thin duplicate. Each page carries its own long-form copy from
 * config/site.js, its own title and description, its own Product schema,
 * and its own share preview image (see scripts/og-images.mjs).
 *
 * Laid out as a proper product detail page rather than an article: image
 * and buy panel side by side up top, the long-form copy broken into scan-
 * able cards below, then a route to the rest of the catalogue. See
 * src/index.css for the .product-page-* rules this renders with.
 */
export default function ProductPage({ slug, onOpenPolicy }) {
  const product = products.find((p) => p.slug === slug);
  const page = productPages[slug];

  // Per-route head tags. Without a distinct title, description and canonical
  // per URL, these pages compete with the home page instead of ranking on
  // their own terms. Written imperatively because there is no head manager
  // in this stack, and the prerender step bakes the result into each file.
  useEffect(() => {
    if (!product || !page) return;
    // Trailing slash: Netlify serves these as directory index files and
    // 301s /karupatti to /karupatti/. The canonical has to name the URL that
    // actually returns 200, or it points at a redirect and splits the
    // ranking signal between two addresses.
    const url = `${brand.domain}/${slug}/`;
    // Title carries the buying intent, not just the product name: people
    // search "buy karupatti online", not "karupatti liha". Kept under the
    // ~60 characters Google shows before truncating.
    const title = `Buy ${product.name} Online | ${product.subtitle}`;
    // Cut at a word boundary, not mid-word: a description ending "sun-dri"
    // is what a naive slice(0, 155) produces, and that is what shows in the
    // search result and the WhatsApp preview.
    const description = page.intro.length <= 155
      ? page.intro
      : `${page.intro.slice(0, 155).replace(/\s+\S*$/, '')}...`;
    // A real 1200x630 JPEG rendered per product by scripts/og-images.mjs at
    // build time (see that file for why WebP was never used here). Falls
    // back to the site-wide preview if a page is viewed before a build has
    // run one, e.g. `npm run dev`.
    const ogImage = `${brand.domain}/images/og/${slug}.jpg`;

    document.title = title;

    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [key, val] = selector.replace(/[[\]']/g, '').split('=');
        el.setAttribute(key.replace('meta', '').trim() || 'name', val);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[property="og:image:secure_url"]', 'content', ogImage);
    setMeta('meta[property="og:image:alt"]', 'content', `${product.name} (${product.tamil}) from ${brand.name}`);
    setMeta('meta[name="twitter:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', ogImage);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // The home page's FAQPage and ItemList schema is inherited from
    // index.html but those sections do not render here. Structured data that
    // describes content not on the page is a mismatch, so drop it.
    document.head
      .querySelectorAll('script[type="application/ld+json"]:not(#product-page-schema)')
      .forEach((el) => el.remove());

    // Product + Breadcrumb schema for this page only.
    const ID = 'product-page-schema';
    document.getElementById(ID)?.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = ID;
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product',
          name: `${product.name} (${product.tamil})`,
          description: page.intro,
          image: `${brand.domain}${product.img}`,
          category: 'Palm Jaggery',
          brand: { '@type': 'Brand', name: brand.name },
          url,
          // No price: nothing on this site quotes one, and inventing a
          // number for a rich result that then contradicts what we tell a
          // customer on WhatsApp is worse than having no price at all. Add a
          // real price here and Google can show it in results.
          offers: {
            '@type': 'Offer',
            url,
            availability: 'https://schema.org/InStock',
            priceCurrency: 'INR',
            seller: { '@id': `${brand.domain}/#store` },
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${brand.domain}/` },
            { '@type': 'ListItem', position: 2, name: product.name, item: url },
          ],
        },
      ],
    });
    document.head.appendChild(script);
  }, [slug, product, page]);

  if (!product || !page) return null;

  const orderMessage = `Hi ${brand.name} team, I would like to order ${product.name} (${product.tamil})`;
  const shareUrl = `${brand.domain}/${slug}/`;
  const otherProducts = products.filter((p) => p.slug !== slug);

  return (
    <>
      <Navbar />
      <main className="pdp">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          {/* ---- Hero: image + buy panel side by side on desktop ---- */}
          <div className="pdp-hero">
            <div className="pdp-media">
              <SkeletonImage
                src={product.img}
                alt={`${product.name} (${product.tamil}) from ${brand.name}`}
                width={900}
                height={900}
                className="pdp-img"
                loading="eager"
                decoding="async"
              />
              <ShareButton
                url={shareUrl}
                title={product.name}
                tamil={product.tamil}
                text={product.subtitle}
                phoneDisplay={contact.phoneDisplay}
              />
            </div>

            <div className="pdp-details">
              <span className={`badge-pill ${product.badge.className}`}>{product.badge.label}</span>
              <h1 className="pdp-title">{product.name}</h1>
              <p className="pdp-tamil" lang="ta">{product.tamil}</p>
              <p className="pdp-subtitle">{product.subtitle}</p>

              <a
                href={waLink(orderMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp pdp-order-btn"
              >
                <WhatsAppIcon size={19} color="#ffffff" />
                <span>Order on WhatsApp</span>
              </a>
              <p className="pdp-order-note">Ships across India. Price confirmed on WhatsApp.</p>

              <p className="pdp-intro">{product.desc}</p>

              <ul className="pdp-highlights">
                {product.tags.map((tag) => (
                  <li key={tag}>
                    <span className="highlight-dot" aria-hidden="true">&bull;</span>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---- Trust strip, same component used on the home page ---- */}
          <div className="pdp-trust">
            {trustBadges.map((item) => (
              <div key={item.title} className="trust-item">
                <div className="trust-icon-wrap">
                  <img src={item.icon} alt={item.title} className="trust-icon-img" loading="lazy" decoding="async" />
                </div>
                <span className="trust-label">{item.title}</span>
              </div>
            ))}
          </div>

          {/* ---- Detail cards: how it is made, taste, use, storage ---- */}
          <section className="pdp-info" aria-labelledby="pdp-info-heading">
            <h2 id="pdp-info-heading" className="pdp-section-heading">{page.h1}</h2>
            <div className="pdp-info-grid">
              {page.sections.map((section) => (
                <div key={section[0]} className="pdp-info-card">
                  <h3>{section[0]}</h3>
                  <p>{section[1]}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---- Explore other products ---- */}
          <section className="pdp-related" aria-labelledby="pdp-related-heading">
            <h2 id="pdp-related-heading" className="pdp-section-heading">Explore our other products</h2>
            <div className="pdp-related-grid">
              {otherProducts.map((p) => (
                <a key={p.slug} href={`/${p.slug}/`} className="pdp-related-card">
                  <SkeletonImage
                    src={p.img}
                    alt={`${p.name} (${p.tamil})`}
                    width={900}
                    height={900}
                    className="pdp-related-img"
                    fill
                    objectPosition={p.focus}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pdp-related-body">
                    <span className="pdp-related-name">{p.name}</span>
                    <span className="pdp-related-subtitle">{p.subtitle}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer onOpenPolicy={onOpenPolicy} />
      <MobileNav />
    </>
  );
}
