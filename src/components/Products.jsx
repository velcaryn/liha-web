import React from 'react';

function WhatsAppIcon({ size = 17, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const products = [
  {
    name: 'Karuppati',
    tamil: 'கருப்பட்டி',
    subtitle: 'Pure Dark Palm Jaggery',
    img: '/images/karuppati.webp',
    badge: { label: 'Traditional Heritage', className: 'badge-green' },
    desc: 'Rich, dark brown solid blocks of traditional Indian palm sugar. Purely unrefined, free from sulfur and bleaching chemicals.',
    tags: ['Natural Iron Booster', 'Low Glycemic Index', 'Authentic Taste'],
    waLink: 'https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20Karuppati%20(Palm%20Jaggery)',
    grid: 'product-card--wide'
  },
  {
    name: 'Panam Karkandu',
    tamil: 'பனங்கற்கண்டு',
    subtitle: 'Palm Candy Crystals',
    img: '/images/panam-karkandu.webp',
    badge: { label: 'Natural Crystals', className: 'badge-orange' },
    desc: 'Translucent, crystalline palm sugar naturally formed through slow evaporation. Celebrated in Siddha wellness.',
    tags: ['Soothes Throat', 'Natural Coolant', 'Rich Mineral Sweetener'],
    waLink: 'https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20Panam%20Karkandu%20(Palm%20Candy)',
    grid: 'product-card--narrow'
  },
  {
    name: 'Chukku Karuppati',
    tamil: 'சுக்கு கருப்பட்டி',
    subtitle: 'Dry Ginger Palm Jaggery',
    img: '/images/chukku-karuppati.webp',
    badge: { label: 'Healthy Remedy', className: 'badge-green' },
    desc: 'Traditional palm jaggery infused with the warming goodness of dry ginger and black pepper. A time-tested remedy for cold and cough.',
    tags: ['Warming & Soothing', 'Cold & Cough Relief', 'Immunity Booster'],
    waLink: 'https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20Chukku%20Karuppati%20(Dry%20Ginger%20Palm%20Jaggery)',
    grid: 'product-card--narrow'
  },
  {
    name: 'Vattu Karuppati',
    tamil: 'வட்டு கருப்பட்டி',
    subtitle: 'Rare Male Palm Nectar Delicacy',
    img: '/images/vellai-karuppati.webp',
    badge: { label: 'Rare & Limited Edition', className: 'badge-cream' },
    desc: 'An exquisite artisanal delicacy crafted exclusively from the limited Padaneer tapped from Male Palm trees (ஆண் பனை). This unique nectar gives Vattu Karuppati its distinctive lighter golden shade and refined sweetness.',
    tags: ['Tapped from Male Palms', 'Distinctive Light Shade', 'Seasonal Batch'],
    waLink: 'https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20Vattu%20Karuppati%20(%E0%AE%B5%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AF%81%20%E0%AE%95%E0%AE%B0%E0%AF%81%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%BF)',
    grid: 'product-card--wide'
  }
];

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
                  {p.name} <span className="product-tamil">({p.tamil})</span>
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
                  href={p.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp product-order-btn"
                >
                  <WhatsAppIcon size={17} color="#ffffff" />
                  <span>Order {p.name}</span>
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
