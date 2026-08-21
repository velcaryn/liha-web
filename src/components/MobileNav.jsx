import React from 'react';
import { Home, ShoppingBag, HeartPulse, MessageCircle } from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="mobile-nav">
      <a href="#" className="mobile-nav-tab">
        <Home size={20} aria-hidden="true" />
        <span>Home</span>
      </a>
      <a href="#products" className="mobile-nav-tab">
        <ShoppingBag size={20} aria-hidden="true" />
        <span>Products</span>
      </a>
      <a href="#benefits" className="mobile-nav-tab">
        <HeartPulse size={20} aria-hidden="true" />
        <span>Health</span>
      </a>
      <a
        href="https://wa.me/919597959549?text=Hi%20Liha%20Team%2C%20I%20would%20like%20to%20order%20Karuppati"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-nav-tab mobile-nav-tab--accent"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span>Order</span>
      </a>

      <style>{`
        .mobile-nav {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          background: rgba(255, 248, 246, 0.97);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-top: 1px solid var(--outline-variant);
          box-shadow: 0 -2px 12px rgba(50, 23, 13, 0.06);
          z-index: 60;
          display: flex;
          justify-content: space-around;
          align-items: stretch;
          padding: 0.35rem 0;
          padding-bottom: calc(0.35rem + env(safe-area-inset-bottom, 0px));
        }
        .mobile-nav-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.15rem;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.68rem;
          font-weight: 600;
          padding: 0.5rem 0.75rem;
          min-height: 52px;
          min-width: 56px;
          touch-action: manipulation;
          transition: color 0.15s;
          -webkit-tap-highlight-color: transparent;
        }
        .mobile-nav-tab:active {
          color: var(--primary);
          transform: scale(0.92);
        }
        .mobile-nav-tab--accent {
          color: #16a34a;
        }
        .mobile-nav-tab--accent span {
          font-weight: 700;
        }
        .mobile-nav-tab--accent:active {
          color: #15803d;
        }

        @media (min-width: 900px) {
          .mobile-nav { display: none; }
        }
      `}</style>
    </nav>
  );
}
