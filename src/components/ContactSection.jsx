import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Send } from 'lucide-react';

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
  const [productChoice, setProductChoice] = useState('Karuppati (Palm Jaggery)');
  const [quantity, setQuantity] = useState('1 Kg');
  const [customNotes, setCustomNotes] = useState('');

  const generateWhatsAppLink = () => {
    const text = `Hi Liha's Karuppati team! I would like to order:
- Product: ${productChoice}
- Quantity: ${quantity}
${customNotes ? `- Notes: ${customNotes}` : ''}`;
    return `https://wa.me/919597959549?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" style={{
      padding: '5.5rem 0',
      background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-container-high) 100%)'
    }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        <div className="soil-card" style={{
          padding: '3rem 2rem',
          background: 'var(--bg-container-lowest)',
          border: '1.5px solid var(--outline-variant)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge-pill badge-green" style={{ marginBottom: '0.75rem' }}>
              Direct From Source
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', marginBottom: '0.75rem' }}>
              Order Fresh Palm Jaggery
            </h2>
            <p style={{ color: 'var(--text-variant)', fontSize: '1.05rem' }}>
              We ship authentic Karuppati securely across India. Choose your items below to order directly via WhatsApp.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}>
            {/* Left Info Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'var(--bg-container-low)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#25D366',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MessageCircle size={22} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>WhatsApp Orders</div>
                  <a href="https://wa.me/919597959549" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none' }}>
                    +91 95979 59549
                  </a>
                </div>
              </div>

              <div style={{
                background: 'var(--bg-container-low)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--secondary)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone size={20} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Direct Call</div>
                  <a href="tel:+919597959549" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none' }}>
                    +91 95979 59549
                  </a>
                </div>
              </div>

              <div style={{
                background: 'var(--bg-container-low)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#E1306C',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <InstagramIcon size={20} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Instagram</div>
                  <a href="https://www.instagram.com/lihas_karupatti/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none' }}>
                    @lihas_karupatti
                  </a>
                </div>
              </div>
            </div>

            {/* Right Interactive WhatsApp Builder */}
            <div style={{
              background: 'var(--bg-surface)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--outline-variant)'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--primary)' }}>
                Quick Order Configurator
              </h3>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-variant)', marginBottom: '0.5rem' }}>
                  Select Item
                </label>
                <select
                  value={productChoice}
                  onChange={(e) => setProductChoice(e.target.value)}
                  style={selectStyle}
                >
                  <option value="Karuppati (Palm Jaggery) - கருப்பட்டி">Karuppati (Palm Jaggery) - கருப்பட்டி</option>
                  <option value="Panam Karkandu (Palm Candy) - பனங்கற்கண்டு">Panam Karkandu (Palm Candy) - பனங்கற்கண்டு</option>
                  <option value="Vellai Karuppati (White Palm Jaggery)">Vellai Karuppati (White Palm Jaggery)</option>
                  <option value="Assorted Palm Sampler Pack">Assorted Palm Sampler Pack (All 3 Items)</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-variant)', marginBottom: '0.5rem' }}>
                  Quantity
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  style={selectStyle}
                >
                  <option value="500g">500g Trial Pack</option>
                  <option value="1 Kg">1 Kg Standard Pack</option>
                  <option value="2 Kg">2 Kg Value Family Pack</option>
                  <option value="5 Kg+ (Bulk Order)">5 Kg+ (Bulk / Commercial)</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-variant)', marginBottom: '0.5rem' }}>
                  Delivery City / Special Request (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chennai, Bangalore, Coimbatore"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
              >
                <MessageCircle size={20} aria-hidden="true" />
                <span>Send WhatsApp Order Request</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const selectStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: 'var(--radius-sm)',
  border: '1.5px solid var(--outline-variant)',
  background: 'var(--bg-container-lowest)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.95rem',
  color: 'var(--primary)',
  outline: 'none'
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: 'var(--radius-sm)',
  border: '1.5px solid var(--outline-variant)',
  background: 'var(--bg-container-lowest)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.95rem',
  color: 'var(--primary)',
  outline: 'none'
};
