import React from 'react';
import { Home, ShoppingBag, HeartPulse, MessageCircle } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 248, 246, 0.96)',
      backdropFilter: 'blur(16px)',
      borderTop: '1px solid var(--outline-variant)',
      boxShadow: '0 -4px 16px rgba(50, 23, 13, 0.08)',
      zIndex: 60,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '0.5rem 0.5rem 0.75rem 0.5rem'
    }} className="mobile-only-nav">
      <a href="#" style={tabStyle}>
        <Home size={20} aria-hidden="true" />
        <span>Home</span>
      </a>

      <a href="#products" style={tabStyle}>
        <ShoppingBag size={20} aria-hidden="true" />
        <span>Products</span>
      </a>

      <a href="#benefits" style={tabStyle}>
        <HeartPulse size={20} aria-hidden="true" />
        <span>Health</span>
      </a>

      <a
        href="https://wa.me/919597959549?text=Hi%20Liha%20Team%2C%20I%20would%20like%20to%20order%20Karuppati"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...tabStyle, color: '#16a34a' }}
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span style={{ fontWeight: 700 }}>Order</span>
      </a>

      <style>{`
        @media (min-width: 900px) {
          .mobile-only-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

const tabStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.2rem',
  color: 'var(--text-variant)',
  textDecoration: 'none',
  fontSize: '0.75rem',
  fontWeight: 600,
  padding: '0.25rem 0.75rem'
};
