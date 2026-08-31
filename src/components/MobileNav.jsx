import React, { useState, useEffect, useCallback } from 'react';
import { waLink } from '../config/site';
import { Home, ShoppingBag, HeartPulse, HelpCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const NAV_ITEMS = [
  { id: 'home', href: '#', label: 'Home', icon: Home, section: null },
  { id: 'products', href: '#products', label: 'Products', icon: ShoppingBag, section: 'products' },
  { id: 'benefits', href: '#benefits', label: 'Health', icon: HeartPulse, section: 'benefits' },
  { id: 'faq', href: '#faq', label: 'FAQs', icon: HelpCircle, section: 'faq' },
];

export default function MobileNav() {
  const [activeTab, setActiveTab] = useState('home');

  const updateActiveSection = useCallback(() => {
    const scrollY = window.scrollY + 200;
    let current = 'home';

    for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
      const item = NAV_ITEMS[i];
      if (!item.section) continue;
      const el = document.getElementById(item.section);
      if (el && el.offsetTop <= scrollY) {
        current = item.id;
        break;
      }
    }
    setActiveTab(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [updateActiveSection]);

  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {NAV_ITEMS.slice(0, 2).map(item => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            className={`mobile-nav-tab${isActive ? ' is-active' : ''}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{item.label}</span>
          </a>
        );
      })}

      {/* Center WhatsApp Order Button */}
      <a
        href={waLink("Hi Liha's Karuppati team, I would like to order pure palm jaggery")}
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

      {NAV_ITEMS.slice(2).map(item => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            className={`mobile-nav-tab${isActive ? ' is-active' : ''}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{item.label}</span>
          </a>
        );
      })}

      <style>{`
        /* ---- Bottom dock pinning. Read before editing. ----
           This element must never move during scroll on any browser.
           Three things keep it pinned; removing any one reintroduces the
           iOS Safari bug where the dock rides to mid-screen and settles back:

           1. position: fixed with a -webkit-sticky/fixed fallback pair.
           2. bottom anchored to 0 - NOT to a vh unit. On iOS, 100vh is the
              LARGE viewport (URL bar hidden), so any vh-derived offset is
              wrong by the toolbar height while the bar is showing.
           3. The backdrop-filter lives on a ::before pseudo-element, not on
              .mobile-nav itself. backdrop-filter creates a containing block;
              keeping it off the fixed element removes the interaction
              entirely while looking identical. */
        .mobile-nav {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          background: rgba(255, 248, 246, 0.94);
          border-top: 1px solid rgba(213, 195, 189, 0.7);
          box-shadow: 0 -2px 10px rgba(50, 23, 13, 0.05);
          z-index: 90;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0.15rem 0.35rem;
          padding-bottom: calc(0.25rem + env(safe-area-inset-bottom, 0px));
          /* Promote to its own layer so iOS composites it against the
             viewport rather than repositioning it per scroll frame. */
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          will-change: transform;
          /* Never inherit a transform/animation from an ancestor. */
          animation: none !important;
          /* Keep the dock out of the page's scroll/layout calculations. */
          contain: layout paint;
        }

        /* Blur carrier. Isolated so backdrop-filter never sits on the fixed
           element or on any ancestor of it. */
        .mobile-nav::before {
          content: "";
          position: absolute;
          inset: 0;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          pointer-events: none;
          z-index: -1;
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
          /* Apple HIG / playbook section 10 minimum touch target. */
          min-height: 48px;
          flex: 1;
          touch-action: manipulation;
          transition: color 0.15s;
          -webkit-tap-highlight-color: transparent;
        }
        .mobile-nav-tab:active {
          color: var(--primary);
          transform: scale(0.95);
        }

        /* Active tab styling */
        .mobile-nav-tab.is-active {
          color: var(--secondary);
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
