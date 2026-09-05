import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { products, copy, waOrder } from '../config/site';



export default function Products() {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="products-header">
          <span className="badge-pill badge-cream">Artisanal Collection</span>
          <h2 className="products-title">Our Pure Palm Offerings</h2>
          <p className="products-subtitle">
            Harvested sustainably and crafted using time-tested methods to preserve vital nutrients and unmatched rich flavor.
          </p>
        </div>

        <div className="products-grid">
          {products.map((p, idx) => (
            <div key={idx} className={`soil-card product-card ${p.grid}`}>
              <div className="product-img-wrap">
                <img
                  src={p.img}
                  alt={`${p.name} (${p.tamil})`}
                  className="product-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="product-badge-pos">
                  <span className={`badge-pill ${p.badge.className}`}>{p.badge.label}</span>
                </div>
              </div>

              <div className="product-body">
                <h3 className="product-name">
                  {p.name} <span className="product-tamil" lang="ta">({p.tamil})</span>
                </h3>
                <div className="product-subtitle">{p.subtitle}</div>
                <p className="product-desc">{p.desc}</p>

                {/* Space-efficient compact highlights */}
                <div className="product-highlights">
                  {p.tags.map((tag, i) => (
                    <span key={i} className="product-highlight-item">
                      <span className="highlight-dot" aria-hidden="true">•</span>
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={waOrder(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp product-order-btn"
                >
                  <WhatsAppIcon size={17} color="#ffffff" />
                  <span>Order {p.name}</span>
                </a>

                {/* Internal link to the product's own page. This is how
                    crawlers discover those routes, and how a visitor who
                    wants detail gets it without leaving for WhatsApp. */}
                <a href={`/${p.slug}`} className="product-learn-more">
                  Read about {p.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .products-section {
          padding: 3rem 0;
          background: var(--bg-surface);
        }
        .products-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 2rem;
        }
        .products-title {
          font-size: clamp(1.7rem, 4vw, 2.7rem);
          margin-top: 0.6rem;
          margin-bottom: 0.6rem;
        }
        .products-subtitle {
          color: var(--text-variant);
          font-size: clamp(0.92rem, 2vw, 1.05rem);
          line-height: 1.55;
        }

        /* Mobile: stacked cards */
        .products-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .product-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--bg-container-lowest);
        }
        .product-img-wrap {
          position: relative;
          height: 190px;
          overflow: hidden;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .product-badge-pos {
          position: absolute;
          top: 0.65rem;
          left: 0.65rem;
          z-index: 2;
        }
        .product-body {
          padding: 1.15rem 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .product-name {
          font-size: 1.2rem;
          margin-bottom: 0.1rem;
          line-height: 1.2;
        }
        .product-tamil {
          font-size: 0.85rem;
          color: var(--secondary);
          font-weight: 600;
        }
        .product-subtitle {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .product-desc {
          color: var(--text-variant);
          font-size: 0.88rem;
          line-height: 1.5;
          margin-bottom: 0.75rem;
        }

        /* Space-Efficient Compact Highlights */
        .product-highlights {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.2rem 0.65rem;
          margin-bottom: 1rem;
        }
        .product-highlight-item {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-variant);
          line-height: 1.3;
        }
        .highlight-dot {
          color: var(--secondary);
          font-weight: 900;
          font-size: 0.9rem;
        }

        .product-order-btn {
          width: 100%;
          justify-content: center;
          margin-top: auto;
          font-size: 0.9rem;
          min-height: 44px;
          padding: 0.65rem 1.2rem;
          gap: 0.45rem;
        }

        @media (hover: hover) and (pointer: fine) {
          .product-card:hover .product-img {
            transform: scale(1.04);
          }
        }

        /* Tablet & desktop: 2x2 bento grid */
        @media (min-width: 768px) {
          .products-section { padding: 5rem 0; }
          .products-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 2rem;
          }
          .product-card--wide {
            grid-column: span 7;
          }
          .product-card--narrow {
            grid-column: span 5;
          }
          .product-img-wrap { height: 250px; }
          .product-body { padding: 1.75rem 2rem; }
          .product-name { font-size: 1.45rem; }
          .product-desc { font-size: 0.92rem; margin-bottom: 1rem; }
          .product-highlights { margin-bottom: 1.25rem; gap: 0.3rem 0.85rem; }
          .product-highlight-item { font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
}
