import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="liha-navbar" data-scrolled={scrolled}>
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <a href="#" className="navbar-brand">
          <img
            src="/images/logo.png"
            alt="Liha's Karuppati"
            className="navbar-logo"
            width="40"
            height="40"
          />
          <div className="navbar-brand-text">
            <span className="navbar-brand-name">Liha's Karuppati</span>
            <span className="navbar-brand-tagline">PURE PALM JAGGERY</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links">
          <a href="#products">Our Products</a>
          <a href="#benefits">Health Benefits</a>
          <a href="#heritage">Our Heritage</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Desktop CTAs */}
        <div className="navbar-ctas">
          <a href="tel:+919597959549" className="btn btn-outline navbar-btn-sm" title="Call Liha">
            <Phone size={15} aria-hidden="true" />
            <span className="navbar-phone-text">+91 95979 59549</span>
          </a>
          <a
            href="https://wa.me/919597959549?text=Hi%2C%20I%20would%20like%20to%20order%20pure%20Karuppati%20from%20Liha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp navbar-btn-sm"
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="navbar-mobile-toggle"
        >
          {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <>
          <div className="navbar-overlay" onClick={closeMenu} />
          <div className="navbar-drawer">
            <a href="#products" onClick={closeMenu}>Our Products</a>
            <a href="#benefits" onClick={closeMenu}>Health Benefits</a>
            <a href="#heritage" onClick={closeMenu}>Our Heritage</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>

            <div className="navbar-drawer-actions">
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
              <a href="tel:+919597959549" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                <Phone size={16} aria-hidden="true" />
                <span>Call +91 95979 59549</span>
              </a>
            </div>
          </div>
        </>
      )}

      <style>{`
        .liha-navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          padding: 1rem 0;
          background: rgba(255, 248, 246, 0.8);
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }
        .liha-navbar[data-scrolled="true"] {
          padding: 0.6rem 0;
          background: rgba(255, 248, 246, 0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom-color: var(--outline-variant);
          box-shadow: 0 2px 12px rgba(50, 23, 13, 0.04);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          color: var(--primary);
          flex-shrink: 0;
        }
        .navbar-logo {
          width: 38px; height: 38px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--primary-container);
        }
        .navbar-brand-name {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          display: block;
          line-height: 1.1;
        }
        .navbar-brand-tagline {
          font-size: 0.65rem;
          color: var(--secondary);
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        /* Desktop links */
        .navbar-links {
          display: none;
          align-items: center;
          gap: 1.75rem;
        }
        .navbar-links a {
          color: var(--text-variant);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 600;
          transition: color 0.2s;
        }
        .navbar-links a:hover { color: var(--primary); }

        /* Desktop CTAs */
        .navbar-ctas { display: none; align-items: center; gap: 0.6rem; }
        .navbar-btn-sm { padding: 0.5rem 0.9rem !important; font-size: 0.85rem !important; min-height: 40px !important; }

        /* Mobile toggle */
        .navbar-mobile-toggle {
          display: flex;
          background: transparent;
          border: none;
          color: var(--primary);
          cursor: pointer;
          padding: 0.5rem;
          min-width: 44px;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          touch-action: manipulation;
        }

        /* Overlay */
        .navbar-overlay {
          position: fixed;
          inset: 0;
          background: rgba(35, 26, 23, 0.35);
          z-index: 49;
          animation: fadeIn 0.2s ease;
        }

        /* Drawer */
        .navbar-drawer {
          position: fixed;
          top: 0; right: 0; bottom: 0;
          width: min(320px, 85vw);
          background: var(--bg-surface);
          z-index: 51;
          padding: 5rem 1.5rem 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: -8px 0 30px rgba(50, 23, 13, 0.12);
          animation: slideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .navbar-drawer a {
          color: var(--text-variant);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--outline-variant);
          transition: color 0.2s;
        }
        .navbar-drawer a:active { color: var(--secondary); }

        .navbar-drawer-actions {
          margin-top: auto;
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

        @media (min-width: 900px) {
          .navbar-links { display: flex; }
          .navbar-ctas { display: flex; }
          .navbar-mobile-toggle { display: none; }
        }

        @media (max-width: 1080px) and (min-width: 900px) {
          .navbar-phone-text { display: none; }
        }
      `}</style>
    </header>
  );
}
