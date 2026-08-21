import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Leaf, Sparkles } from 'lucide-react';

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
                <MessageCircle size={20} aria-hidden="true" />
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
                src="/images/palm-illustration.png"
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
