import React from 'react';
import { Phone, MessageCircle, Heart } from 'lucide-react';

function InstagramIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--primary)',
      color: 'var(--on-primary)',
      padding: '4.5rem 0 6rem 0',
      borderTop: '2px solid var(--primary-container)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
          {/* Brand Info */}
          <div style={{ maxWidth: '360px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/images/logo.png"
                alt="Liha's Karuppati"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid rgba(255, 255, 255, 0.4)'
                }}
              />
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#ffffff'
              }}>
                Liha's Karuppati
              </span>
            </div>
            <p style={{ color: 'var(--on-primary-container)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Preserving traditional Palmyra craftsmanship. Bringing the authentic, mineral-rich sweetness of Tamil Nadu directly to your family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <a href="#products" style={footerLinkStyle}>Our Pure Products</a>
              <a href="#benefits" style={footerLinkStyle}>Health & Nutrition</a>
              <a href="#heritage" style={footerLinkStyle}>Artisanal Process</a>
              <a href="#contact" style={footerLinkStyle}>Order & Enquiries</a>
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 style={{ fontSize: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>
              Connect with Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href="https://www.instagram.com/lihas_karupatti/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...footerLinkStyle, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <InstagramIcon size={18} />
                <span>@lihas_karupatti</span>
              </a>

              <a
                href="https://wa.me/919597959549"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...footerLinkStyle, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>+91 95979 59549 (WhatsApp)</span>
              </a>

              <a
                href="tel:+919597959549"
                style={{ ...footerLinkStyle, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Phone size={18} aria-hidden="true" />
                <span>+91 95979 59549 (Call)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.85rem',
          color: 'var(--on-primary-container)'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Liha's Karuppati. All rights reserved.
          </div>
          <div>
            Handcrafted with pride in Tamil Nadu, India.
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: 'var(--on-primary-container)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};
