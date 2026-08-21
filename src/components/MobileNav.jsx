import React from 'react';
import { Home, ShoppingBag, HeartPulse, HelpCircle } from 'lucide-react';

function WhatsAppIcon({ size = 20, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function MobileNav() {
  return (
    <nav className="mobile-nav">
      {/* 1. Home */}
      <a href="#" className="mobile-nav-tab">
        <Home size={18} aria-hidden="true" />
        <span>Home</span>
      </a>

      {/* 2. Products */}
      <a href="#products" className="mobile-nav-tab">
        <ShoppingBag size={18} aria-hidden="true" />
        <span>Products</span>
      </a>

      {/* 3. Subtle Lightweight Projected WhatsApp Center Button */}
      <a
        href="https://wa.me/919597959549?text=Hi%20Liha's%20Karuppati%20team%2C%20I%20would%20like%20to%20order%20pure%20palm%20jaggery"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-nav-center-btn"
        aria-label="Order on WhatsApp"
      >
        <div className="center-btn-bubble">
          <WhatsAppIcon size={20} color="#ffffff" />
        </div>
        <span className="center-btn-label">Order</span>
      </a>

      {/* 4. Health */}
      <a href="#benefits" className="mobile-nav-tab">
        <HeartPulse size={18} aria-hidden="true" />
        <span>Health</span>
      </a>

      {/* 5. FAQs */}
      <a href="#faq" className="mobile-nav-tab">
        <HelpCircle size={18} aria-hidden="true" />
        <span>FAQs</span>
      </a>

      <style>{`
        .mobile-nav {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          background: rgba(255, 248, 246, 0.94);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-top: 1px solid rgba(213, 195, 189, 0.7);
          box-shadow: 0 -2px 10px rgba(50, 23, 13, 0.05);
          z-index: 90;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0.15rem 0.35rem;
          padding-bottom: calc(0.25rem + env(safe-area-inset-bottom, 0px));
        }

        .mobile-nav-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.1rem;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.64rem;
          font-weight: 600;
          padding: 0.2rem 0.35rem;
          min-height: 42px;
          flex: 1;
          touch-action: manipulation;
          transition: color 0.15s;
          -webkit-tap-highlight-color: transparent;
        }
        .mobile-nav-tab:active {
          color: var(--primary);
          transform: scale(0.95);
        }

        /* Subtle Center WhatsApp Button */
        .mobile-nav-center-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          position: relative;
          top: -8px;
          flex: 1;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        .center-btn-bubble {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 10px rgba(45, 90, 39, 0.3);
          border: 2.5px solid var(--bg-surface);
          transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.15s ease;
        }

        .mobile-nav-center-btn:active .center-btn-bubble {
          transform: scale(0.93);
          background: var(--secondary-hover);
        }

        .center-btn-label {
          font-size: 0.62rem;
          font-weight: 700;
          color: var(--secondary);
          margin-top: 0.1rem;
          letter-spacing: 0.01em;
        }

        @media (min-width: 900px) {
          .mobile-nav { display: none; }
        }
      `}</style>
    </nav>
  );
}
