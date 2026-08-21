import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, ShieldCheck, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      paddingTop: '8.5rem',
      paddingBottom: '4rem',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #fff8f6 0%, #fff1ec 100%)'
    }} className="palm-pattern-bg">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Text Column */}
          <div>
            {/* Pill Badge */}
            <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
              <span className="badge-pill badge-green">
                <Leaf size={14} aria-hidden="true" />
                100% Pure, Unrefined & Artisanal
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '1rem',
              color: 'var(--primary)'
            }}>
              Traditional Palm Jaggery, Reimagined for Wellness
            </h1>

            {/* Tamil Subtitle */}
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'var(--secondary)',
              marginBottom: '1.25rem',
              letterSpacing: '0.01em'
            }}>
              உண்மையான பாரம்பரிய பனை கருப்பட்டி & பனங்கற்கண்டு
            </div>

            {/* Paragraph Description */}
            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
              color: 'var(--text-variant)',
              lineHeight: 1.7,
              marginBottom: '2.25rem',
              maxWidth: '560px'
            }}>
              Handcrafted in small batches from fresh Palmyra palm nectar. Zero artificial colors, zero preservatives, and naturally rich in essential minerals like iron, calcium, and potassium.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <a
                href="https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20Karuppati%20from%20Liha"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '0.9rem 1.8rem', fontSize: '1.05rem' }}
              >
                <MessageCircle size={20} aria-hidden="true" />
                <span>Order via WhatsApp</span>
              </a>

              <a
                href="#products"
                className="btn btn-outline"
                style={{ padding: '0.9rem 1.8rem', fontSize: '1.05rem' }}
              >
                <span>View Products</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Mini Strip */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--outline-variant)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-variant)', fontWeight: 600 }}>
                <ShieldCheck size={18} color="var(--secondary)" aria-hidden="true" />
                <span>Direct Farm Sourced</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-variant)', fontWeight: 600 }}>
                <Sparkles size={18} color="var(--secondary)" aria-hidden="true" />
                <span>Wood-Fired Processing</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--soil-shadow-hover)',
              border: '4px solid var(--bg-container-lowest)',
              background: 'var(--bg-container-high)'
            }}>
              <img
                src="/images/palm-illustration.png"
                alt="Palmyra Palm Trees Heritage"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '480px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(50, 23, 13, 0.85) 0%, transparent 100%)',
                color: '#ffffff'
              }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600 }}>
                  Native Palmyra Palm Groves
                </div>
                <div style={{ fontSize: '0.85rem', color: '#ffd6cc', marginTop: '0.25rem' }}>
                  Authentic heritage of Tamil Nadu palm artisans
                </div>
              </div>
            </div>

            {/* Floating Highlight Card */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              background: 'var(--bg-container-lowest)',
              padding: '0.85rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--soil-shadow)',
              border: '1px solid var(--outline-variant)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--secondary-container)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--on-secondary-container)'
              }}>
                <Leaf size={20} aria-hidden="true" />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>Zero Additives</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pure Neera Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
