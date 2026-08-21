import React from 'react';
import { MessageCircle, Check } from 'lucide-react';

const products = [
  {
    name: 'Karuppati',
    tamil: 'கருப்பட்டி',
    subtitle: 'Pure Dark Palm Jaggery',
    img: '/images/karuppati.png',
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
    img: '/images/panam-karkandu.png',
    badge: { label: 'Natural Crystals', className: 'badge-orange' },
    desc: 'Translucent, crystalline palm sugar naturally formed through slow evaporation. Celebrated in Siddha wellness.',
    tags: ['Soothes Throat', 'Natural Coolant'],
    waLink: 'https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20Panam%20Karkandu%20(Palm%20Candy)',
    grid: 'product-card--narrow'
  },
  {
    name: 'Chukku Karuppati',
    tamil: 'சுக்கு கருப்பட்டி',
    subtitle: 'Dry Ginger Palm Jaggery',
    img: '/images/chukku-karuppati.png',
    badge: { label: 'Healthy', className: 'badge-green' },
    desc: 'Traditional palm jaggery infused with the warming goodness of dry ginger and black pepper. A time-tested remedy for cold and cough.',
    tags: ['Warming & Soothing', 'Cold & Cough Relief', 'Immunity Booster'],
    waLink: 'https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20Chukku%20Karuppati%20(Dry%20Ginger%20Palm%20Jaggery)',
    grid: 'product-card--narrow'
  },
  {
    name: 'Vellai Karuppati',
    tamil: 'வெள்ளை கருப்பட்டி',
    subtitle: 'Artisanal White Palm Jaggery',
    img: '/images/vellai-karuppati.png',
    badge: { label: 'Rare & Delicate', className: 'badge-cream' },
    desc: 'Creamish-white palm jaggery blocks with a lighter, sophisticated flavor perfect for traditional sweets, tea, and filter coffee.',
    tags: ['Delicate Caramel Notes', 'Unbleached Purity', 'Perfect for Beverages'],
    waLink: 'https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20Vellai%20Karuppati%20(White%20Palm%20Jaggery)',
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
                <img src={p.img} alt={`${p.name} (${p.tamil})`} className="product-img" loading="lazy" />
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

                <div className="product-tags">
                  {p.tags.map((tag, i) => (
                    <span key={i} className="product-tag">
                      <Check size={13} color="var(--secondary)" aria-hidden="true" />
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
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>Order {p.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .products-section {
          padding: 3.5rem 0;
          background: var(--bg-surface);
        }
        .products-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 2.5rem;
        }
        .products-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .products-subtitle {
          color: var(--text-variant);
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.6;
        }

        /* Mobile: stacked cards */
        .products-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .product-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--bg-container-lowest);
        }
        .product-img-wrap {
          position: relative;
          height: 200px;
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
          top: 0.75rem;
          left: 0.75rem;
          z-index: 2;
        }
        .product-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .product-name {
          font-size: 1.3rem;
          margin-bottom: 0.15rem;
          line-height: 1.2;
        }
        .product-tamil {
          font-size: 0.9rem;
          color: var(--secondary);
          font-weight: 600;
        }
        .product-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .product-desc {
          color: var(--text-variant);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .product-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .product-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.3rem 0.6rem;
          background: var(--bg-container-low);
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--primary);
        }
        .product-order-btn {
          width: 100%;
          justify-content: center;
          margin-top: auto;
        }

        @media (hover: hover) and (pointer: fine) {
          .product-card:hover .product-img {
            transform: scale(1.04);
          }
        }

        /* Tablet & desktop: 2x2 bento grid
           Row 1: Karuppati (7) + Panam Karkandu (5)
           Row 2: Chukku Karuppati (5) + Vellai Karuppati (7) */
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
          .product-img-wrap { height: 260px; }
          .product-body { padding: 2rem; }
          .product-name { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
