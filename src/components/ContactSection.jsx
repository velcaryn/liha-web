import React, { useState, useRef, useEffect } from 'react';
import { brand, contact, phoneHref, waDefault, waLink } from '../config/site';
import { Phone, ChevronDown, Check } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';


function InstagramIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const PRODUCT_OPTIONS = [
  { id: 'karuppati', label: 'Karuppati', tamil: 'கருப்பட்டி', full: 'Karuppati (Palm Jaggery) - கருப்பட்டி', badge: 'Best Seller' },
  { id: 'panam-karkandu', label: 'Panam Karkandu', tamil: 'பனங்கற்கண்டு', full: 'Panam Karkandu (Palm Candy) - பனங்கற்கண்டு', badge: 'Natural Crystal' },
  { id: 'chukku', label: 'Chukku Karuppati', tamil: 'சுக்கு கருப்பட்டி', full: 'Chukku Karuppati (Dry Ginger Palm Jaggery) - சுக்கு கருப்பட்டி', badge: 'Herbal Wellness' },
  { id: 'vattu', label: 'Vattu Karuppati', tamil: 'வட்டு கருப்பட்டி', full: 'Vattu Karuppati (Disc Palm Jaggery) - வட்டு கருப்பட்டி', badge: 'Rare Edition' },
  { id: 'sampler', label: 'Assorted Sampler Pack', tamil: 'அனைத்தும் அடங்கிய தொகுப்பு', full: 'Assorted Palm Sampler Pack (All 4 Varieties)', badge: 'All 4 Varieties' },
];

const QTY_OPTIONS = [
  { id: '1kg', label: '1 Kg', desc: 'Minimum Qty', tag: 'Fresh Batch' },
  { id: '2kg', label: '2 Kg', desc: 'Family Pack', tag: 'Popular' },
  { id: '5kg', label: '5 Kg', desc: 'Pantry Saver', tag: 'Best Value' },
  { id: '10kg+', label: '10+ Kg', desc: 'Bulk Order', tag: 'Wholesale' },
];

export default function ContactSection() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_OPTIONS[0]);
  const [selectedQty, setSelectedQty] = useState(QTY_OPTIONS[0]);
  const [notes, setNotes] = useState('');

  const [productOpen, setProductOpen] = useState(false);
  const [qtyOpen, setQtyOpen] = useState(false);

  const productRef = useRef(null);
  const qtyRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setProductOpen(false);
      }
      if (qtyRef.current && !qtyRef.current.contains(event.target)) {
        setQtyOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const buildOrderLink = () => {
    let msg = `Hi ${brand.name} team, I would like to order:\n- Item: ${selectedProduct.full}\n- Quantity: ${selectedQty.label} (${selectedQty.desc})`;
    if (notes.trim()) {
      msg += `\n- Delivery Location: ${notes.trim()}`;
    }
    return waLink(msg);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="soil-card contact-card">
          <div className="contact-header">
            <span className="badge-pill badge-green">Direct From Source</span>
            <h2 className="contact-title">Order Fresh Palm Jaggery</h2>
            <p className="contact-subtitle">
              We ship authentic Karuppati securely across India. Choose items below to order via WhatsApp.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Info Channels */}
            <div className="contact-info">
              <a href={waDefault} target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <div className="contact-info-icon" style={{ background: '#25D366' }}>
                  <WhatsAppIcon size={20} color="#ffffff" />
                </div>
                <div>
                  <div className="contact-info-label">WhatsApp Quick Order</div>
                  <div className="contact-info-value">{contact.phoneDisplay}</div>
                </div>
              </a>

              <a href={phoneHref} className="contact-info-item">
                <div className="contact-info-icon" style={{ background: 'var(--secondary)' }}>
                  <Phone size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="contact-info-label">Direct Phone Call</div>
                  <div className="contact-info-value">{contact.phoneDisplay}</div>
                </div>
              </a>

              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <div className="contact-info-icon" style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                  <InstagramIcon size={18} color="#ffffff" />
                </div>
                <div>
                  <div className="contact-info-label">Instagram Community</div>
                  <div className="contact-info-value">@{contact.instagramHandle}</div>
                </div>
              </a>
            </div>

            {/* Interactive Order Configurator */}
            <div className="contact-order-builder">
              <div className="builder-header">
                <h3 className="contact-builder-title">Quick Order</h3>
                <span className="builder-subtag">Direct WhatsApp Checkout</span>
              </div>

              {/* Product Custom Dropdown */}
              <div className="form-group" ref={productRef}>
                <label className="contact-field-label">Select Item</label>
                <div className="custom-select-container">
                  <button
                    type="button"
                    className={`custom-select-trigger ${productOpen ? 'open' : ''}`}
                    onClick={() => {
                      setProductOpen(!productOpen);
                      setQtyOpen(false);
                    }}
                    aria-expanded={productOpen}
                  >
                    <div className="trigger-content">
                      <span className="trigger-main">{selectedProduct.label}</span>
                      <span className="trigger-tamil">({selectedProduct.tamil})</span>
                    </div>
                    <ChevronDown size={18} className={`chevron-icon ${productOpen ? 'rotate' : ''}`} />
                  </button>

                  {productOpen && (
                    <div className="custom-select-dropdown">
                      {PRODUCT_OPTIONS.map((item) => (
                        <div
                          key={item.id}
                          className={`custom-select-option ${selectedProduct.id === item.id ? 'selected' : ''}`}
                          onClick={() => {
                            setSelectedProduct(item);
                            setProductOpen(false);
                          }}
                        >
                          <div className="option-text">
                            <div className="option-title-row">
                              <span className="option-label">{item.label}</span>
                              <span className="option-tamil">({item.tamil})</span>
                            </div>
                            <span className="option-badge">{item.badge}</span>
                          </div>
                          {selectedProduct.id === item.id && <Check size={18} className="check-icon" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity Custom Dropdown */}
              <div className="form-group" ref={qtyRef}>
                <label className="contact-field-label">Quantity</label>
                <div className="custom-select-container">
                  <button
                    type="button"
                    className={`custom-select-trigger ${qtyOpen ? 'open' : ''}`}
                    onClick={() => {
                      setQtyOpen(!qtyOpen);
                      setProductOpen(false);
                    }}
                    aria-expanded={qtyOpen}
                  >
                    <div className="trigger-content">
                      <span className="trigger-main">{selectedQty.label}</span>
                      <span className="trigger-desc">({selectedQty.desc})</span>
                    </div>
                    <ChevronDown size={18} className={`chevron-icon ${qtyOpen ? 'rotate' : ''}`} />
                  </button>

                  {qtyOpen && (
                    <div className="custom-select-dropdown">
                      {QTY_OPTIONS.map((opt) => (
                        <div
                          key={opt.id}
                          className={`custom-select-option ${selectedQty.id === opt.id ? 'selected' : ''}`}
                          onClick={() => {
                            setSelectedQty(opt);
                            setQtyOpen(false);
                          }}
                        >
                          <div className="option-text">
                            <div className="option-title-row">
                              <span className="option-label">{opt.label}</span>
                              <span className="option-desc-text">({opt.desc})</span>
                            </div>
                            <span className="option-badge">{opt.tag}</span>
                          </div>
                          {selectedQty.id === opt.id && <Check size={18} className="check-icon" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Location Input */}
              <div className="form-group">
                <label className="contact-field-label">Delivery City (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Chennai, Coimbatore, Bangalore"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="contact-input"
                />
              </div>

              {/* Submit Action */}
              <a href={buildOrderLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp contact-submit-btn">
                <WhatsAppIcon size={20} color="#ffffff" />
                <span>Send WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 3.5rem 0;
          background: linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-container-high) 100%);
        }
        .contact-card {
          padding: 1.5rem;
          background: var(--bg-container-lowest);
          border: 1.5px solid var(--outline-variant);
        }
        .contact-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .contact-title {
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          margin-top: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .contact-subtitle {
          color: var(--text-variant);
          font-size: 0.95rem;
        }
        .contact-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 1rem;
          background: var(--bg-container-low);
          border-radius: var(--radius-md);
          text-decoration: none;
          color: var(--primary);
          transition: var(--transition-smooth);
          touch-action: manipulation;
          min-height: 56px;
          border: 1px solid var(--outline-variant);
        }
        .contact-info-item:active {
          transform: scale(0.98);
          background: var(--bg-container);
        }
        .contact-info-icon {
          width: 42px; height: 42px;
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .contact-info-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        .contact-info-value {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .contact-order-builder {
          background: var(--bg-surface);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          border: 1.5px solid var(--outline-variant);
          box-shadow: var(--soil-shadow-sm);
        }
        .builder-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .contact-builder-title {
          font-size: 1.2rem;
          color: var(--primary);
          font-family: var(--font-serif);
        }
        .builder-subtag {
          font-size: 0.72rem;
          font-weight: 700;
          color: #15803d;
          background: #dcfce7;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
        }
        .form-group {
          margin-bottom: 1rem;
          position: relative;
        }
        .contact-field-label {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-variant);
          margin-bottom: 0.4rem;
        }

        /* Custom Dropdown Styling */
        .custom-select-container {
          position: relative;
          width: 100%;
        }
        .custom-select-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          background: var(--bg-container-lowest);
          border: 1.5px solid var(--outline-variant);
          border-radius: var(--radius-sm);
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--primary);
          cursor: pointer;
          min-height: 50px;
          text-align: left;
          transition: all 0.2s ease;
          touch-action: manipulation;
        }
        @media (hover: hover) {
          .custom-select-trigger:hover {
            border-color: var(--primary-container);
          }
        }
        .custom-select-trigger.open {
          border-color: var(--secondary);
          box-shadow: 0 0 0 3px rgba(45, 90, 39, 0.12);
        }
        .trigger-content {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .trigger-main {
          font-weight: 700;
          color: var(--primary);
        }
        .trigger-tamil, .trigger-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .chevron-icon {
          color: var(--text-muted);
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }
        .chevron-icon.rotate {
          transform: rotate(180deg);
          color: var(--secondary);
        }

        /* Expanded Dropdown Menu */
        .custom-select-dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          background: var(--bg-container-lowest);
          border: 1.5px solid var(--outline-variant);
          border-radius: var(--radius-md);
          box-shadow: 0 10px 28px rgba(50, 23, 13, 0.14);
          z-index: 40;
          overflow: hidden;
          animation: dropFade 0.2s ease;
        }
        @keyframes dropFade {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .custom-select-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 1rem;
          cursor: pointer;
          transition: background 0.15s ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          min-height: 48px;
          touch-action: manipulation;
        }
        .custom-select-option:last-child {
          border-bottom: none;
        }
        /* Guarded: on touch this highlight sticks after a tap and reads
           as a selected option. */
        @media (hover: hover) {
          .custom-select-option:hover {
            background: var(--bg-container-low);
          }
        }
        .custom-select-option.selected {
          background: #f0fdf4;
        }
        .option-text {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .option-title-row {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
        }
        .option-label {
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--primary);
        }
        .option-tamil, .option-desc-text {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .option-badge {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--secondary);
          letter-spacing: 0.02em;
        }
        .check-icon {
          color: #16a34a;
          flex-shrink: 0;
        }

        .contact-input {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          border: 1.5px solid var(--outline-variant);
          background: var(--bg-container-lowest);
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--primary);
          outline: none;
          min-height: 50px;
          transition: border-color 0.2s;
        }
        .contact-input:focus {
          border-color: var(--secondary);
          box-shadow: 0 0 0 3px rgba(45, 90, 39, 0.12);
        }
        .contact-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 1.25rem;
          font-size: 1rem;
          gap: 0.6rem;
        }

        @media (min-width: 768px) {
          .contact-section { padding: 5.5rem 0; }
          .contact-card { padding: 3rem; }
          .contact-grid {
            flex-direction: row;
            gap: 2.5rem;
          }
          .contact-info { flex: 1; }
          .contact-order-builder { flex: 1.1; padding: 2rem; }
        }
      `}</style>
    </section>
  );
}
