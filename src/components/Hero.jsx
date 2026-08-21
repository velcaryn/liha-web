import React from 'react';
import { ArrowRight, ShieldCheck, Leaf, Sparkles } from 'lucide-react';

function WhatsAppIcon({ size = 19, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="palm-pattern-bg hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Column */}
          <div className="hero-text">
            <div style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              <span className="badge-pill badge-green">
                <Leaf size={14} aria-hidden="true" />
                100% Pure & Artisanal
              </span>
            </div>

            <h1 className="hero-headline">
              Traditional Palm Jaggery, Reimagined for Wellness
            </h1>

            <div className="hero-tamil">
              உண்மையான பாரம்பரிய பனை கருப்பட்டி & பனங்கற்கண்டு
            </div>

            <p className="hero-desc">
              Handcrafted in small batches from fresh Palmyra palm nectar. Zero artificial colors, zero preservatives, and naturally rich in iron, calcium, and potassium.
            </p>

            <div className="hero-actions">
              <a
                href="https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20Karuppati%20from%20Liha"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp hero-btn"
              >
                <WhatsAppIcon size={19} color="#ffffff" />
                <span>Order via WhatsApp</span>
              </a>
              <a href="#products" className="btn btn-outline hero-btn">
                <span>View Products</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="hero-trust-strip">
              <div className="hero-trust-item">
                <ShieldCheck size={18} color="var(--secondary)" aria-hidden="true" />
                <span>Direct Farm Sourced</span>
              </div>
              <div className="hero-trust-item">
                <Sparkles size={18} color="var(--secondary)" aria-hidden="true" />
                <span>Wood-Fired Processing</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="hero-visual">
            <div className="hero-image-card">
              <img
                src="/images/palm-illustration.webp"
                alt="Palmyra Palm Trees Heritage"
                className="hero-image"
                loading="eager"
              />
              <div className="hero-image-overlay">
                <div className="hero-image-title">Native Palmyra Palm Groves</div>
                <div className="hero-image-subtitle">Authentic heritage of Tamil Nadu palm artisans</div>
              </div>
            </div>

            <div className="hero-float-card">
              <div className="hero-float-icon">
                <Leaf size={18} aria-hidden="true" />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>Zero Additives</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Pure Neera Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 6.5rem;
          padding-bottom: 2.5rem;
          overflow: hidden;
          background: linear-gradient(180deg, #fff8f6 0%, #fff1ec 100%);
        }
        .hero-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .hero-headline {
          font-size: clamp(1.9rem, 5.5vw, 3.8rem);
          font-weight: 700;
          line-height: 1.12;
          margin-bottom: 0.75rem;
          color: var(--primary);
        }
        .hero-tamil {
          font-size: clamp(0.95rem, 2.5vw, 1.2rem);
          font-weight: 600;
          color: var(--secondary);
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        .hero-desc {
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          color: var(--text-variant);
          line-height: 1.7;
          margin-bottom: 1.75rem;
          max-width: 560px;
        }
        .hero-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .hero-btn {
          width: 100%;
          justify-content: center;
        }
        .hero-trust-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-top: 2rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--outline-variant);
        }
        .hero-trust-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-variant);
          font-weight: 600;
        }
        .hero-visual { position: relative; }
        .hero-image-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--soil-shadow);
          border: 3px solid var(--bg-container-lowest);
          background: var(--bg-container-high);
        }
        .hero-image {
          width: 100%;
          height: auto;
          max-height: 320px;
          object-fit: cover;
        }
        .hero-image-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 1.25rem;
          background: linear-gradient(to top, rgba(50, 23, 13, 0.85) 0%, transparent 100%);
          color: #ffffff;
        }
        .hero-image-title {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-weight: 600;
        }
        .hero-image-subtitle {
          font-size: 0.78rem;
          color: #ffd6cc;
          margin-top: 0.15rem;
        }
        .hero-float-card {
          position: absolute;
          top: -10px; right: 8px;
          background: var(--bg-container-lowest);
          padding: 0.65rem 0.9rem;
          border-radius: var(--radius-md);
          box-shadow: var(--soil-shadow);
          border: 1px solid var(--outline-variant);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          z-index: 2;
        }
        .hero-float-icon {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: var(--secondary-container);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--on-secondary-container);
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .hero-section {
            padding-top: 8.5rem;
            padding-bottom: 4rem;
          }
          .hero-grid {
            flex-direction: row;
            align-items: center;
            gap: 3.5rem;
          }
          .hero-text { flex: 1.1; }
          .hero-visual { flex: 0.9; }
          .hero-actions {
            flex-direction: row;
            gap: 1rem;
          }
          .hero-btn {
            width: auto;
          }
          .hero-image {
            max-height: 460px;
          }
          .hero-image-card {
            border-radius: var(--radius-xl);
          }
        }
      `}</style>
    </section>
  );
}
