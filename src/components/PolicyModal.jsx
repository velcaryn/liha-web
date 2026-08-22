import { contact } from '../config/site';
import React, { useEffect } from 'react';
import { X, ShieldCheck, Truck, RotateCcw, FileText } from 'lucide-react';

const policies = {
  shipping: {
    title: 'Shipping & Delivery Policy',
    icon: Truck,
    content: (
      <>
        <h4>1. Processing & Dispatch</h4>
        <p>All orders placed for Liha's Karuppati products are handcrafted in small batches and dispatched within 24 to 48 business hours from our facility in Tamil Nadu.</p>

        <h4>2. Delivery Timelines</h4>
        <ul>
          <li><strong>South India (Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana):</strong> 2 to 4 business days.</li>
          <li><strong>Rest of India (North, West & East Regions):</strong> 3 to 6 business days.</li>
          <li><strong>Remote / Rural Areas:</strong> 5 to 7 business days depending on regional courier connectivity.</li>
        </ul>

        <h4>3. Food-Grade Packaging & Safety</h4>
        <p>Our palm jaggery products are securely sealed in food-grade, moisture-proof pouches or containers to prevent transit humidity and preserve natural aroma.</p>

        <h4>4. Tracking Your Order</h4>
        <p>As soon as your package is handed over to our courier partner, a live tracking link with the consignment number will be sent directly to your WhatsApp number.</p>
      </>
    )
  },
  returns: {
    title: 'Return & Refund Policy',
    icon: RotateCcw,
    content: (
      <>
        <h4>1. Perishable Food Items</h4>
        <p>Because palm jaggery, palm candy, and traditional sweeteners are consumable and perishable food products, we cannot accept returns once a package has been opened or unsealed, in accordance with standard food safety regulations.</p>

        <h4>2. Transit Damage & Replacement Guarantee</h4>
        <p>If your order arrives damaged, broken, or spoiled during transit, please notify us within 24 hours of delivery by sharing a photo or unboxing video of the package on WhatsApp at <strong>{contact.phoneDisplay}</strong>.</p>
        <p>We will immediately dispatch a free replacement or initiate a full refund to your original payment method.</p>

        <h4>3. Order Cancellations</h4>
        <p>Orders can be cancelled free of charge if the request is submitted via WhatsApp before the shipment is dispatched from our workshop.</p>
      </>
    )
  },
  privacy: {
    title: 'Privacy Policy',
    icon: ShieldCheck,
    content: (
      <>
        <h4>1. Information We Collect</h4>
        <p>When you contact us or place an order via WhatsApp, we collect only the essential details required to process and ship your package (Your Name, Phone Number, Delivery Address, and Order Preferences).</p>

        <h4>2. How We Use Your Data</h4>
        <p>Your details are used strictly for order fulfillment, courier delivery, and customer service updates. We do not sell, rent, or trade your personal information with any third-party advertisers.</p>

        <h4>3. Payment Security</h4>
        <p>All online payments are completed securely via direct UPI apps (Google Pay, PhonePe, Paytm) or verified banking rails. We do not store or process your credit card numbers or banking passwords.</p>
      </>
    )
  },
  terms: {
    title: 'Terms of Service',
    icon: FileText,
    content: (
      <>
        <h4>1. Product Authenticity</h4>
        <p>Liha's Karuppati guarantees 100% natural, unadulterated palm jaggery sourced from native Palmyra palms. Natural variations in color and texture may occur across batches due to seasonal harvest conditions.</p>

        <h4>2. Pricing & Availability</h4>
        <p>Prices and seasonal item availability (such as Vattu Karuppati from male palm nectar) are subject to harvest yield and stock levels.</p>

        <h4>3. Governing Law</h4>
        <p>Any disputes arising from purchases or services shall be governed by the laws and jurisdiction of Tamil Nadu, India.</p>
      </>
    )
  }
};

export default function PolicyModal({ policyKey, onClose }) {
  useEffect(() => {
    if (!policyKey) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [policyKey, onClose]);

  if (!policyKey || !policies[policyKey]) return null;

  const current = policies[policyKey];
  const Icon = current.icon;

  return (
    <div className="policy-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="policy-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="policy-header">
          <div className="policy-title-row">
            <div className="policy-icon-badge">
              <Icon size={18} aria-hidden="true" />
            </div>
            <h3 className="policy-title">{current.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="policy-close-btn"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="policy-body">
          {current.content}
        </div>

        {/* Footer Button */}
        <div className="policy-footer">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-outline policy-ok-btn"
          >
            Got It
          </button>
        </div>
      </div>

      <style>{`
        .policy-overlay {
          position: fixed;
          inset: 0;
          background: rgba(35, 26, 23, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 100;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          animation: overlayFadeIn 0.2s ease-out;
        }

        .policy-sheet {
          background: var(--bg-surface);
          width: 100%;
          max-width: 640px;
          max-height: 85vh;
          border-radius: var(--radius-xl) var(--radius-xl) 0 0;
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          border: 1px solid var(--outline-variant);
          border-bottom: none;
          animation: sheetSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .policy-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.25rem 1rem 1.25rem;
          border-bottom: 1px solid var(--outline-variant);
          background: var(--bg-container-lowest);
        }

        .policy-title-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .policy-icon-badge {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--secondary-container);
          color: var(--on-secondary-container);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .policy-title {
          font-size: 1.1rem;
          font-family: var(--font-serif);
          color: var(--primary);
          line-height: 1.2;
        }

        .policy-close-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-container-low);
          border: none;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s;
          touch-action: manipulation;
        }

        .policy-close-btn:active {
          background: var(--outline-variant);
        }

        .policy-body {
          padding: 1.25rem;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          color: var(--text-variant);
          font-size: 0.92rem;
          line-height: 1.65;
        }

        .policy-body h4 {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary);
          margin-top: 1rem;
          margin-bottom: 0.35rem;
        }

        .policy-body h4:first-of-type {
          margin-top: 0;
        }

        .policy-body p {
          margin-bottom: 0.75rem;
        }

        .policy-body ul {
          padding-left: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .policy-body li {
          margin-bottom: 0.35rem;
        }

        .policy-footer {
          padding: 0.85rem 1.25rem;
          padding-bottom: calc(0.85rem + env(safe-area-inset-bottom, 0px));
          border-top: 1px solid var(--outline-variant);
          background: var(--bg-container-lowest);
          display: flex;
          justify-content: flex-end;
        }

        .policy-ok-btn {
          min-height: 42px !important;
          padding: 0.5rem 1.5rem !important;
          font-size: 0.88rem !important;
          width: 100%;
        }

        @keyframes overlayFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes sheetSlideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        @media (min-width: 768px) {
          .policy-overlay {
            align-items: center;
            padding: 1.5rem;
          }
          .policy-sheet {
            border-radius: var(--radius-xl);
            border-bottom: 1px solid var(--outline-variant);
            animation: sheetScaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .policy-header {
            padding: 1.5rem;
          }
          .policy-title {
            font-size: 1.25rem;
          }
          .policy-body {
            padding: 1.5rem 2rem;
          }
          .policy-footer {
            padding: 1rem 1.5rem;
          }
          .policy-ok-btn {
            width: auto;
          }
          @keyframes sheetScaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        }
      `}</style>
    </div>
  );
}
