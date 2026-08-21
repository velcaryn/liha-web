import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

function InstagramIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function ContactSection() {
  const [product, setProduct] = useState('Karuppati (Palm Jaggery)');
  const [qty, setQty] = useState('1 Kg');
  const [notes, setNotes] = useState('');

  const waLink = () => {
    const msg = `Hi Liha's Karuppati team! I would like to order:\n- Product: ${product}\n- Quantity: ${qty}${notes ? `\n- Notes: ${notes}` : ''}`;
    return `https://wa.me/919597959549?text=${encodeURIComponent(msg)}`;
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
            {/* Contact Info */}
            <div className="contact-info">
              <a href="https://wa.me/919597959549" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <div className="contact-info-icon" style={{ background: '#25D366' }}>
                  <MessageCircle size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="contact-info-label">WhatsApp</div>
                  <div className="contact-info-value">+91 95979 59549</div>
                </div>
              </a>

              <a href="tel:+919597959549" className="contact-info-item">
                <div className="contact-info-icon" style={{ background: 'var(--secondary)' }}>
                  <Phone size={18} aria-hidden="true" />
                </div>
                <div>
                  <div className="contact-info-label">Direct Call</div>
                  <div className="contact-info-value">+91 95979 59549</div>
                </div>
              </a>

              <a href="https://www.instagram.com/lihas_karupatti/" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <div className="contact-info-icon" style={{ background: '#E1306C' }}>
                  <InstagramIcon size={18} color="#ffffff" />
                </div>
                <div>
                  <div className="contact-info-label">Instagram</div>
                  <div className="contact-info-value">@lihas_karupatti</div>
                </div>
              </a>
            </div>

            {/* Order Builder */}
            <div className="contact-order-builder">
              <h3 className="contact-builder-title">Quick Order</h3>

              <label className="contact-field-label">Select Item</label>
              <select value={product} onChange={(e) => setProduct(e.target.value)} className="contact-select">
                <option value="Karuppati (Palm Jaggery) - கருப்பட்டி">Karuppati - கருப்பட்டி</option>
                <option value="Panam Karkandu (Palm Candy) - பனங்கற்கண்டு">Panam Karkandu - பனங்கற்கண்டு</option>
                <option value="Chukku Karuppati (Dry Ginger Palm Jaggery) - சுக்கு கருப்பட்டி">Chukku Karuppati - சுக்கு கருப்பட்டி</option>
                <option value="Vattu Karuppati (Disc Palm Jaggery) - வட்டு கருப்பட்டி">Vattu Karuppati - வட்டு கருப்பட்டி</option>
                <option value="Assorted Palm Sampler Pack">Sampler Pack (All 4 Items)</option>
              </select>

              <label className="contact-field-label">Quantity</label>
              <select value={qty} onChange={(e) => setQty(e.target.value)} className="contact-select">
                <option value="500g">500g Trial Pack</option>
                <option value="1 Kg">1 Kg Standard</option>
                <option value="2 Kg">2 Kg Family Pack</option>
                <option value="5 Kg+ (Bulk)">5 Kg+ Bulk</option>
              </select>

              <label className="contact-field-label">Delivery City (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Chennai, Bangalore"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="contact-input"
              />

              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp contact-submit-btn">
                <MessageCircle size={20} aria-hidden="true" />
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
          gap: 0.75rem;
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
        }
        .contact-info-item:active {
          transform: scale(0.98);
          background: var(--bg-container);
        }
        .contact-info-icon {
          width: 40px; height: 40px;
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
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
          border: 1px solid var(--outline-variant);
        }
        .contact-builder-title {
          font-size: 1.15rem;
          margin-bottom: 1.25rem;
          color: var(--primary);
        }
        .contact-field-label {
          display: block;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-variant);
          margin-bottom: 0.4rem;
          margin-top: 1rem;
        }
        .contact-field-label:first-of-type { margin-top: 0; }
        .contact-select, .contact-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: var(--radius-sm);
          border: 1.5px solid var(--outline-variant);
          background: var(--bg-container-lowest);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--primary);
          outline: none;
          appearance: none;
          -webkit-appearance: none;
          min-height: 48px;
          transition: border-color 0.2s;
        }
        .contact-select:focus, .contact-input:focus {
          border-color: var(--secondary);
        }
        .contact-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 1.5rem;
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
