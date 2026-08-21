import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

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
      background: scrolled ? 'rgba(10, 12, 20, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
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
          gap: '0.6rem',
          textDecoration: 'none',
          color: '#ffffff',
          fontWeight: 800,
          fontSize: '1.4rem',
          letterSpacing: '-0.02em',
          fontFamily: 'var(--font-heading)'
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(124, 58, 237, 0.4)'
          }}>
            <Sparkles size={18} aria-hidden="true" />
          </div>
          <span>Liha</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '2rem'
        }} className="desktop-nav">
          <a href="#features" style={navLinkStyle}>Features</a>
          <a href="#solutions" style={navLinkStyle}>Solutions</a>
          <a href="#performance" style={navLinkStyle}>Performance</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>
        </nav>

        {/* Action Button */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-cta">
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
            Get Started
            <ArrowRight size={16} aria-hidden="true" />
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
            color: '#fff',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(10, 12, 20, 0.98)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          <a href="#features" onClick={() => setMobileOpen(false)} style={navLinkStyle}>Features</a>
          <a href="#solutions" onClick={() => setMobileOpen(false)} style={navLinkStyle}>Solutions</a>
          <a href="#performance" onClick={() => setMobileOpen(false)} style={navLinkStyle}>Performance</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} style={navLinkStyle}>Contact</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Get Started
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}

const navLinkStyle = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: 500,
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};
