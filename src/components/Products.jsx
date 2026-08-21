import React from 'react';
import { MessageCircle, Sparkles, Check, Heart, Shield } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" style={{
      padding: '5rem 0',
      background: 'var(--bg-surface)'
    }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge-pill badge-cream" style={{ marginBottom: '1rem' }}>
            Artisanal Collection
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Our Pure Palm Offerings
          </h2>
          <p style={{ color: 'var(--text-variant)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Harvested sustainably and crafted using time-tested methods to preserve vital nutrients and unmatched rich flavor.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2rem'
        }}>
          {/* Product 1: Karuppati (Large Feature Card: 7 cols on desktop) */}
          <div className="soil-card product-card-large" style={{
            gridColumn: 'span 7',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            background: 'var(--bg-container-lowest)'
          }}>
            <div style={{ position: 'relative', height: '280px', overflow: 'hidden', background: '#2e140a' }}>
              <img
                src="/images/karuppati.png"
                alt="Karuppati Palm Jaggery"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                className="hover-zoom"
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                zIndex: 2
              }}>
                <span className="badge-pill badge-green">Traditional Heritage</span>
              </div>
            </div>

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>
                  Karuppati <span style={{ fontSize: '1.15rem', color: 'var(--secondary)', fontWeight: 600 }}>(கருப்பட்டி)</span>
                </h3>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600 }}>
                  Pure Dark Palm Jaggery
                </div>
                <p style={{ color: 'var(--text-variant)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Rich, dark brown solid blocks of traditional Indian palm sugar. Purely unrefined, free from sulfur and bleaching chemicals, and packed with bio-available iron and essential minerals.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                  <span style={tagStyle}><Check size={14} color="var(--secondary)" /> Natural Iron Booster</span>
                  <span style={tagStyle}><Check size={14} color="var(--secondary)" /> Low Glycemic Index</span>
                  <span style={tagStyle}><Check size={14} color="var(--secondary)" /> Authentic Taste</span>
                </div>
              </div>

              <a
                href="https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20Karuppati%20(Palm%20Jaggery)"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>Order Karuppati via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Product 2: Panam Karkandu (5 cols on desktop) */}
          <div className="soil-card product-card-medium" style={{
            gridColumn: 'span 5',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            background: 'var(--bg-container-lowest)'
          }}>
            <div style={{ position: 'relative', height: '240px', overflow: 'hidden', background: '#3b2f2f' }}>
              <img
                src="/images/panam-karkandu.png"
                alt="Panam Karkandu Palm Candy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                className="hover-zoom"
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                zIndex: 2
              }}>
                <span className="badge-pill badge-orange">Natural Crystals</span>
              </div>
            </div>

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                  Panam Karkandu <span style={{ fontSize: '1.1rem', color: 'var(--secondary)', fontWeight: 600 }}>(பனங்கற்கண்டு)</span>
                </h3>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 600 }}>
                  Palm Candy Crystals
                </div>
                <p style={{ color: 'var(--text-variant)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Translucent, crystalline palm sugar naturally formed through slow evaporation. Widely celebrated in traditional Siddha wellness for throat comfort and refreshing natural sweetness.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                  <span style={tagStyle}><Check size={14} color="var(--secondary)" /> Soothes Throat</span>
                  <span style={tagStyle}><Check size={14} color="var(--secondary)" /> Natural Coolant</span>
                </div>
              </div>

              <a
                href="https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20Panam%20Karkandu%20(Palm%20Candy)"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>Order Panam Karkandu</span>
              </a>
            </div>
          </div>

          {/* Product 3: Vellai Karuppati (Full width 12 cols on desktop) */}
          <div className="soil-card product-card-full" style={{
            gridColumn: 'span 12',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            overflow: 'hidden',
            background: 'var(--bg-container-lowest)'
          }}>
            <div style={{
              flex: '1 1 360px',
              minHeight: '260px',
              position: 'relative',
              overflow: 'hidden',
              background: '#4a382e'
            }}>
              <img
                src="/images/vellai-karuppati.png"
                alt="Vellai Karuppati White Palm Jaggery"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                className="hover-zoom"
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                zIndex: 2
              }}>
                <span className="badge-pill badge-cream">Rare & Delicate</span>
              </div>
            </div>

            <div style={{
              flex: '1 1 420px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.35rem' }}>
                Vellai Karuppati <span style={{ fontSize: '1.25rem', color: 'var(--secondary)', fontWeight: 600 }}>(வெள்ளை கருப்பட்டி)</span>
              </h3>
              <div style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.25rem', fontWeight: 600 }}>
                Artisanal White Palm Jaggery
              </div>
              <p style={{ color: 'var(--text-variant)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: '640px' }}>
                Delicate, creamish-white palm jaggery blocks processed with master craftsmanship. Provides a lighter, sophisticated flavor profile that pairs beautifully with traditional sweets, artisanal baking, tea, and filter coffee.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2rem' }}>
                <span style={tagStyle}><Check size={14} color="var(--secondary)" /> Delicate Caramel Notes</span>
                <span style={tagStyle}><Check size={14} color="var(--secondary)" /> Unbleached Purity</span>
                <span style={tagStyle}><Check size={14} color="var(--secondary)" /> Perfect for Beverages</span>
              </div>

              <div style={{ alignSelf: 'flex-start' }}>
                <a
                  href="https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20Vellai%20Karuppati%20(White%20Palm%20Jaggery)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '0.85rem 1.8rem' }}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>Order Vellai Karuppati via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-zoom:hover {
          transform: scale(1.04);
        }
        @media (max-width: 900px) {
          .product-card-large { grid-column: span 12 !important; }
          .product-card-medium { grid-column: span 12 !important; }
          .product-card-full { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}

const tagStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  padding: '0.35rem 0.75rem',
  background: 'var(--bg-container-low)',
  borderRadius: 'var(--radius-sm)',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--primary)'
};
