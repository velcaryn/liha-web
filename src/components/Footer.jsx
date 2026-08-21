import React from 'react';
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
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-brand-row">
              <img src="/images/logo.webp" alt="Liha's Karuppati" className="footer-logo" width="36" height="36" />
              <span className="footer-brand-name">Liha's Karuppati</span>
            </div>
            <p className="footer-desc">
              Preserving traditional Palmyra craftsmanship since 2019. Bringing authentic, unrefined sweetness of Tamil Nadu directly to your home.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-section-title">Navigation</h4>
            <a href="#products">Our Pure Products</a>
            <a href="#benefits">Health & Nutrition</a>
            <a href="#heritage">Artisanal Process</a>
            <a href="#faq">FAQs</a>
            <a href="#contact">Order & Enquiries</a>
          </div>

          {/* Legal & Policies */}
          <div className="footer-links">
            <h4 className="footer-section-title">Policies</h4>
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

          {/* Connect */}
          <div className="footer-links">
            <h4 className="footer-section-title">Connect</h4>
            <a href="https://www.instagram.com/lihas_karupatti/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={16} /> @lihas_karupatti
            </a>
            <a href="https://wa.me/919597959549" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp Orders
            </a>
            <a href="tel:+919597959549">
              <Phone size={16} aria-hidden="true" /> +91 95979 59549
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Liha's Karuppati. All rights reserved.</span>
          <span>Handcrafted with pride in Tamil Nadu, India.</span>
        </div>
      </div>

      <style>{`
        .liha-footer {
          background: var(--primary);
          color: var(--on-primary);
          padding: 3.5rem 0;
          padding-bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
          border-top: 2px solid var(--primary-container);
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-brand-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.75rem;
        }
        .footer-logo {
          width: 36px; height: 36px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        .footer-brand-name {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
        }
        .footer-desc {
          color: var(--on-primary-container);
          font-size: 0.88rem;
          line-height: 1.6;
          max-width: 340px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .footer-section-title {
          font-size: 0.88rem;
          font-family: var(--font-sans);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.35rem;
          letter-spacing: 0.02em;
        }
        .footer-links a, .footer-policy-btn {
          color: var(--on-primary-container);
          text-decoration: none;
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0;
          transition: color 0.2s;
          touch-action: manipulation;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: var(--font-sans);
          min-height: 38px;
        }
        .footer-links a:active, .footer-policy-btn:active {
          color: #ffffff;
        }
        .footer-bottom {
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: var(--on-primary-container);
          opacity: 0.85;
        }

        @media (min-width: 640px) {
          .footer-top {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }

        @media (min-width: 992px) {
          .liha-footer {
            padding: 4.5rem 0 2.5rem;
          }
          .footer-top {
            grid-template-columns: 1.4fr 1fr 1fr 1.1fr;
            gap: 3rem;
          }
          .footer-brand { max-width: 360px; }
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }
      `}</style>
    </footer>
  );
}
