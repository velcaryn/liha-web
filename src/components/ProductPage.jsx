import React, { useEffect } from 'react';
import { products, productPages, brand, waLink } from '../config/site';
import WhatsAppIcon from './WhatsAppIcon';
import SkeletonImage from './SkeletonImage';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileNav from './MobileNav';

/**
 * A single product's own page, served at /karuppati, /panam-karkandu and so on.
 *
 * These exist for search: one URL cannot rank for four different product
 * intents at once, and a page that only repeats the home page card blurb is a
 * thin duplicate. Each page carries its own long-form copy from
 * config/site.js, its own title and description, and its own Product schema.
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
    // 301s /karuppati to /karuppati/. The canonical has to name the URL that
    // actually returns 200, or it points at a redirect and splits the
    // ranking signal between two addresses.
    const url = `${brand.domain}/${slug}/`;
    // Title carries the buying intent, not just the product name: people
    // search "buy karuppati online", not "karuppati liha". Kept under the
    // ~60 characters Google shows before truncating.
    const title = `Buy ${product.name} Online | ${product.subtitle}`;
    const description = page.intro.slice(0, 155).trim();

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
    // og:image is left as the site-wide 1200x630 JPEG. Pointing it at the
    // product WebP contradicted the inherited og:image:type (image/jpeg) and
    // og:image:width/height (1200x630) tags, and WhatsApp, which is how this
    // shop actually gets shared, does not reliably render WebP previews.
    // A per-product preview needs a real 1200x630 JPEG rendered for it.
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

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

  return (
    <>
      <Navbar />
      <main className="product-page">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <header className="product-page-head">
            <span className={`badge-pill ${product.badge.className}`}>{product.badge.label}</span>
            <h1 className="product-page-title">{page.h1}</h1>
            <p className="product-page-tamil" lang="ta">{product.tamil}</p>
            <p className="product-page-intro">{page.intro}</p>

            <a
              href={waLink(orderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary product-page-cta"
            >
              <WhatsAppIcon size={18} color="#ffffff" />
              <span>Order {product.name} on WhatsApp</span>
            </a>
          </header>

          <SkeletonImage
            src={product.img}
            alt={`${product.name} (${product.tamil}) from ${brand.name}`}
            width={900}
            height={900}
            className="product-page-img"
            loading="eager"
            decoding="async"
          />

          {page.sections.map((section) => (
            <section key={section[0]} className="product-page-section">
              <h2>{section[0]}</h2>
              <p>{section[1]}</p>
            </section>
          ))}

          <section className="product-page-section">
            <h2>Order {product.name}</h2>
            <p>
              We take orders over WhatsApp and ship across India. Message us with the
              quantity you want and we will confirm the price, packing and delivery
              time before you pay.
            </p>
            <a
              href={waLink(orderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsAppIcon size={18} color="#ffffff" />
              <span>Message us to order</span>
            </a>
          </section>

          <nav className="product-page-siblings" aria-label="Other products">
            <h2>Our other palm products</h2>
            <ul>
              {products
                .filter((p) => p.slug !== slug)
                .map((p) => (
                  <li key={p.slug}>
                    <a href={`/${p.slug}/`}>
                      {p.name} <span lang="ta">({p.tamil})</span>
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </main>
      <Footer onOpenPolicy={onOpenPolicy} />
      <MobileNav />
    </>
  );
}
