import React from 'react';
import { contact, phoneHref, waDefault } from '../config/site';
import { Phone, MessageCircle } from 'lucide-react';

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Footer({ onOpenPolicy }) {
  return (
    <footer className="liha-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-brand-row">
              <img src="/images/logo.webp" alt="Liha's Karuppati" className="footer-logo" width="34" height="34" />
              <span className="footer-brand-name">Liha's Karuppati</span>
            </div>
            <p className="footer-desc">
              Preserving traditional Palmyra craftsmanship since 2019. Bringing authentic, unrefined sweetness of Tamil Nadu directly to your home.
            </p>
          </div>

          {/* 2-Column Links on Mobile: Navigation & Policies side-by-side */}
          <div className="footer-links-group">
            {/* Quick Links */}
            <div className="footer-links-col">
              <h4 className="footer-section-title">Navigation</h4>
              <nav className="footer-nav-list" aria-label="Footer Navigation">
                <a href="#products">Our Products</a>
                <a href="#benefits">Health Benefits</a>
                <a href="#heritage">Artisanal Process</a>
                <a href="#faq">FAQs</a>
                <a href="#contact">Order & Enquiries</a>
              </nav>
            </div>

            {/* Legal & Policies */}
            <div className="footer-links-col">
              <h4 className="footer-section-title">Policies</h4>
              <div className="footer-nav-list">
                <button type="button" onClick={() => onOpenPolicy && onOpenPolicy('shipping')} className="footer-policy-btn">
                  Shipping & Delivery
                </button>
                <button type="button" onClick={() => onOpenPolicy && onOpenPolicy('returns')} className="footer-policy-btn">
                  Returns & Refunds
                </button>
                <button type="button" onClick={() => onOpenPolicy && onOpenPolicy('privacy')} className="footer-policy-btn">
                  Privacy Policy
                </button>
                <button type="button" onClick={() => onOpenPolicy && onOpenPolicy('terms')} className="footer-policy-btn">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>

          {/* Connect & Contact */}
          <div className="footer-connect-col">
            <h4 className="footer-section-title">Direct Connect</h4>
            <div className="footer-connect-items">
              <a href="https://www.instagram.com/lihas_karupatti/" target="_blank" rel="noopener noreferrer" className="footer-contact-chip">
                <InstagramIcon size={14} />
                <span>@lihas_karupatti</span>
              </a>
              <a href={waDefault} target="_blank" rel="noopener noreferrer" className="footer-contact-chip">
                <MessageCircle size={14} aria-hidden="true" />
                <span>WhatsApp Order</span>
              </a>
              <a href={phoneHref} className="footer-contact-chip">
                <Phone size={14} aria-hidden="true" />
                <span>{contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Liha's Karuppati. All rights reserved.</span>
          <span>Handcrafted with pride in Tamil Nadu, India.</span>
        </div>
      </div>

      <style>{`
        .liha-footer {
          background: var(--primary);
          color: var(--on-primary);
          padding: 2.25rem 0 1.5rem 0;
          padding-bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
          border-top: 2px solid var(--primary-container);
        }

        .footer-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-brand-row {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 0.45rem;
        }
        .footer-logo {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
        }
        .footer-brand-name {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }
        .footer-desc {
          color: var(--on-primary-container);
          font-size: 0.82rem;
          line-height: 1.5;
          max-width: 100%;
        }

        /* 2-Column Links on Mobile */
        .footer-links-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .footer-section-title {
          font-size: 0.8rem;
          font-family: var(--font-sans);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.45rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .footer-nav-list a,
        .footer-policy-btn {
          color: var(--on-primary-container);
          text-decoration: none;
          font-size: 0.82rem;
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0;
          min-height: 28px;
          transition: color 0.15s ease;
          touch-action: manipulation;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: var(--font-sans);
          -webkit-tap-highlight-color: transparent;
        }

        .footer-nav-list a:hover,
        .footer-nav-list a:active,
        .footer-policy-btn:hover,
        .footer-policy-btn:active {
          color: #ffffff;
        }

        /* Connect / Contact Chips on Mobile */
        .footer-connect-col {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .footer-connect-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .footer-contact-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-sm);
          padding: 0.4rem 0.65rem;
          color: var(--on-primary-container);
          text-decoration: none;
          font-size: 0.78rem;
          font-weight: 500;
          transition: background 0.15s, color 0.15s;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        .footer-contact-chip:active {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        /* Footer Bottom Bar */
        .footer-bottom {
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 0.74rem;
          color: var(--on-primary-container);
          opacity: 0.8;
          line-height: 1.4;
        }

        /* Tablet & Desktop Layout */
        @media (min-width: 640px) {
          .footer-grid {
            display: grid;
            grid-template-columns: 1.2fr 1fr 1fr;
            gap: 2rem;
          }
          .footer-links-group {
            display: contents; /* Flattens children directly into the grid */
          }
          .footer-connect-col {
            grid-column: span 3;
          }
          .footer-connect-items {
            flex-direction: row;
          }
        }

        @media (min-width: 992px) {
          .liha-footer {
            padding: 3.5rem 0 2rem 0;
            padding-bottom: 2rem;
          }
          .footer-grid {
            grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
            gap: 2.5rem;
            padding-bottom: 2rem;
          }
          .footer-brand {
            max-width: 340px;
          }
          .footer-connect-col {
            grid-column: auto;
          }
          .footer-connect-items {
            flex-direction: column;
            gap: 0.35rem;
          }
          .footer-contact-chip {
            background: transparent;
            border: none;
            padding: 0.25rem 0;
            font-size: 0.85rem;
          }
          .footer-contact-chip:hover {
            color: #ffffff;
          }
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            padding-top: 1.5rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
}
