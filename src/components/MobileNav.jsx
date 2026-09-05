import React, { useState, useEffect, useCallback } from 'react';
import { waLink } from '../config/site';
import { Home, ShoppingBag, HeartPulse, HelpCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

// hash: the in-page anchor when we are already on the home page.
// The href is resolved per render, because a bare "#products" does nothing on
// a product page: it has no such section. On those pages every tab points
// back at the home page anchor instead.
const NAV_ITEMS = [
  { id: 'home', hash: '#', label: 'Home', icon: Home, section: null },
  { id: 'products', hash: '#products', label: 'Products', icon: ShoppingBag, section: 'products' },
  { id: 'benefits', hash: '#benefits', label: 'Health', icon: HeartPulse, section: 'benefits' },
  { id: 'faq', hash: '#faq', label: 'FAQs', icon: HelpCircle, section: 'faq' },
];

export default function MobileNav() {
  const [activeTab, setActiveTab] = useState('home');

  const onHome =
    typeof window === 'undefined' ||
    ['/', '', '/index.html'].includes(window.location.pathname.replace(/\/+$/, '') || '/');

  const hrefFor = (item) => (onHome ? item.hash : `/${item.hash}`);

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
            href={hrefFor(item)}
            className={`mobile-nav-tab${isActive ? ' is-active' : ''}`}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
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
          <WhatsAppIcon size={22} color="#ffffff" />
        </div>
        <span className="center-btn-label">Order</span>
      </a>

      {NAV_ITEMS.slice(2).map(item => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <a
            key={item.id}
            href={hrefFor(item)}
            className={`mobile-nav-tab${isActive ? ' is-active' : ''}`}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
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
          /* Detached floating pill. The safe-area inset is applied as an
             offset from the bottom, NOT as inner padding: the bar no longer
             reaches the screen edge, so padding would leave a gap inside the
             pill while the pill itself sat on the home indicator. */
          bottom: calc(0.75rem + env(safe-area-inset-bottom, 0px));
          /* Centred and only as wide as its contents, rather than stretched
             edge to edge: a full-width bar reads as a strip, a shrink-wrapped
             one reads as a pill. */
          left: 50%;
          transform: translateX(-50%) translateZ(0);
          -webkit-transform: translateX(-50%) translateZ(0);
          /* Fixed width, not max-content: a shrink-wrapped bar re-centres
             itself whenever the active tab's label expands, which drags the
             order bubble sideways. A fixed width keeps the bubble anchored
             and lets the tabs breathe inside it. */
          width: min(21rem, calc(100vw - 1.5rem));
          background: rgba(255, 248, 246, 0.86);
          border: 1px solid rgba(213, 195, 189, 0.5);
          /* Stadium radius now that the bar is short: at this height the ends
             are true semicircles and the tabs still sit clear of the curve. */
          border-radius: var(--radius-full);
          box-shadow:
            0 8px 24px -8px rgba(50, 23, 13, 0.2),
            0 2px 6px rgba(50, 23, 13, 0.05);
          z-index: 90;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.15rem;
          padding: 0.25rem 0.5rem;
          position: relative;
          /* Layer promotion is folded into the centring transform above, so
             iOS still composites this against the viewport. */
          will-change: transform;
          /* Never inherit a transform/animation from an ancestor. */
          animation: none !important;
          /* Layout containment ONLY. Do not add paint containment here: it
             clips everything drawn outside the border box, which sliced the
             top off the raised WhatsApp bubble. Layout alone gives the same
             scroll isolation without the clipping. */
          contain: layout;
          /* The bubble is deliberately taller than the bar. */
          overflow: visible;
        }

        /* Blur carrier. Isolated so backdrop-filter never sits on the fixed
           element or on any ancestor of it. */
        .mobile-nav::before {
          content: "";
          position: absolute;
          inset: 0;
          /* Must match the pill radius, or the blur paints square corners
             behind the rounded bar. */
          border-radius: inherit;
          backdrop-filter: blur(20px) saturate(1.4);
          -webkit-backdrop-filter: blur(20px) saturate(1.4);
          pointer-events: none;
          z-index: -1;
        }

        /* Icon over label is what made the bar 85px tall. The label now sits
           beside the icon and only on the active tab, which keeps the pill
           short while the current section stays named. Inactive tabs keep
           their accessible name via aria-label. */
        .mobile-nav-tab {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0 0.55rem;
          border-radius: var(--radius-full);
          /* The 48px touch target is kept, but as a transparent hit area that
             overhangs the short pill rather than as visible height. */
          min-height: 44px;
          position: relative;
          touch-action: manipulation;
          /* Transition is declared with the active-state rules below. */
          -webkit-tap-highlight-color: transparent;
        }
        .mobile-nav-tab::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 48px;
        }

        /* Label is revealed only for the active tab. */
        .mobile-nav-tab span {
          max-width: 0;
          overflow: hidden;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(-4px);
          /* Slight overshoot so the label springs out rather than sliding. */
          transition:
            max-width 0.34s cubic-bezier(0.34, 1.4, 0.5, 1),
            opacity 0.22s ease 0.04s,
            transform 0.34s cubic-bezier(0.34, 1.4, 0.5, 1);
        }
        .mobile-nav-tab.is-active span {
          max-width: 5rem;
          opacity: 1;
          transform: translateX(0);
        }
        .mobile-nav-tab.is-active {
          background: var(--secondary-container);
          color: var(--primary);
        }
        /* The icon lifts as its tab takes focus. */
        .mobile-nav-tab svg {
          transition: transform 0.3s cubic-bezier(0.34, 1.4, 0.5, 1);
        }
        .mobile-nav-tab.is-active svg {
          transform: translateY(-1px) scale(1.08);
        }

        /* The chip background is what actually reads as movement between
           tabs, so give it the same spring as the label. */
        .mobile-nav-tab {
          transition:
            color 0.2s ease,
            background-color 0.28s cubic-bezier(0.34, 1.4, 0.5, 1),
            padding 0.3s cubic-bezier(0.34, 1.4, 0.5, 1);
        }
        .mobile-nav-tab.is-active { padding: 0 0.7rem; }

        /* Equal flex on every tab so the two either side of the bubble always
           occupy the same total width, whichever one is active. The label is
           absolutely positioned so its width never feeds back into the
           layout, which is what was still nudging the bubble by a few px. */
        .mobile-nav-tab { flex: 1 1 0; min-width: 0; }

        @media (prefers-reduced-motion: reduce) {
          .mobile-nav-tab,
          .mobile-nav-tab span,
          .mobile-nav-tab svg { transition: none; }
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
        /* The order button is the primary action, so it sits proud of the bar
           rather than sitting in the row. It needs the dock to allow overflow
           (see the contain note above) or the top of the circle is clipped. */
        /* The order button is the fixed anchor of the bar. Tabs either side
           expand and contract as the active section changes; this stays put,
           so the primary action never moves under the thumb. */
        .mobile-nav-center-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          position: relative;
          top: -10px;
          margin: 0;
          /* Stays in the flex flow (absolute positioning escapes the promoted
             layer on .mobile-nav), but never grows or shrinks, so the tabs
             resizing around it cannot squeeze it. */
          flex: 0 0 46px;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        .center-btn-bubble {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          /* Ring in the bar colour so the circle reads as lifted off the bar,
             plus a shadow underneath for the same reason. */
          border: 3px solid var(--bg-surface);
          box-shadow:
            0 6px 16px rgba(45, 90, 39, 0.34),
            0 2px 6px rgba(50, 23, 13, 0.12);
          transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.15s ease;
        }

        .mobile-nav-center-btn:active .center-btn-bubble {
          transform: scale(0.93);
          background: var(--secondary-hover);
        }

        /* The bubble is self-explanatory and the pill is short, so the label
           would only add height. Kept in the DOM for screen readers. */
        .center-btn-label {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(50%);
          white-space: nowrap;
        }

        @media (min-width: 900px) {
          .mobile-nav { display: none; }
        }
      `}</style>
    </nav>
  );
}
