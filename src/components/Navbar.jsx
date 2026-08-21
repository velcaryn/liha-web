import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: scrolled ? '0.75rem 0' : '1.25rem 0',
      background: scrolled ? 'rgba(255, 248, 246, 0.95)' : 'rgba(255, 248, 246, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid var(--outline-variant)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 20px rgba(50, 23, 13, 0.04)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none',
          color: 'var(--primary)',
          fontWeight: 700,
          fontSize: '1.4rem'
        }}>
          <img
            src="/images/logo.png"
            alt="Liha's Karuppati"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--primary-container)',
              boxShadow: '0 2px 8px rgba(50, 23, 13, 0.15)'
            }}
          />
          <div>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', letterSpacing: '-0.01em', display: 'block', lineHeight: 1.1 }}>
              Liha's Karuppati
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>
              PURE PALM JAGGERY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '2rem'
        }} className="desktop-nav">
          <a href="#products" style={navLinkStyle}>Our Products</a>
          <a href="#benefits" style={navLinkStyle}>Health Benefits</a>
          <a href="#heritage" style={navLinkStyle}>Our Heritage</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>
        </nav>

        {/* WhatsApp & Call Action Buttons */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-cta">
          <a
            href="tel:+919597959549"
            className="btn btn-outline"
            style={{ padding: '0.55rem 1rem', fontSize: '0.88rem' }}
            title="Call Liha"
          >
            <Phone size={15} aria-hidden="true" />
            <span>+91 95979 59549</span>
          </a>
          <a
            href="https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20pure%20Karuppati%20from%20Liha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ padding: '0.55rem 1.2rem', fontSize: '0.88rem' }}
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'flex',
            background: 'transparent',
            border: 'none',
            color: 'var(--primary)',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--outline-variant)',
          boxShadow: 'var(--soil-shadow)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem'
        }}>
          <a href="#products" onClick={() => setMobileOpen(false)} style={navLinkStyle}>Our Products</a>
          <a href="#benefits" onClick={() => setMobileOpen(false)} style={navLinkStyle}>Health Benefits</a>
          <a href="#heritage" onClick={() => setMobileOpen(false)} style={navLinkStyle}>Our Heritage</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} style={navLinkStyle}>Contact</a>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a
              href="https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20pure%20Karuppati%20from%20Liha"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Order on WhatsApp</span>
            </a>
            <a
              href="tel:+919597959549"
              className="btn btn-outline"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Phone size={16} aria-hidden="true" />
              <span>Call +91 95979 59549</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}

const navLinkStyle = {
  color: 'var(--text-variant)',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: 600,
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};
