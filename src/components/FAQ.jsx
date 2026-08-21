import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

function WhatsAppIcon({ size = 18, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const faqs = [
  {
    question: 'How long does Karuppati stay fresh and how should I store it?',
    answer: 'Pure Palm Jaggery has a natural shelf-life of 6 to 12 months. Store it in an airtight container in a cool, dry place away from direct moisture. Because our Karuppati is 100% natural with zero preservatives, refrigeration in warm humid months will help preserve its firm texture.'
  },
  {
    question: 'How does shipping work and what are the delivery timelines?',
    answer: 'We dispatch all orders via express air/surface couriers within 24 to 48 hours of order confirmation. Delivery typically takes 2-3 business days across South India (Tamil Nadu, Karnataka, Kerala, AP/Telangana) and 4-6 business days for the rest of India.'
  },
  {
    question: 'Will adding Karuppati to hot tea or filter coffee curdle the milk?',
    answer: 'Pure, authentic palm jaggery does not curdle milk when added properly. For best results with hot tea or filter coffee, brew your beverage first, turn off the heat, and stir in powdered Karuppati just before serving.'
  },
  {
    question: 'Is Liha Karuppati suitable for health-conscious and diabetic diets?',
    answer: 'Palm jaggery has a low Glycemic Index (GI ~35 to 42) compared to refined white sugar (GI 65 to 70), which helps prevent sudden blood sugar spikes. It is packed with bioavailable iron, potassium, and calcium. However, individuals managing diabetes should consume it in moderation as part of a balanced diet.'
  },
  {
    question: 'How is pure Karuppati made and how does it differ from regular jaggery?',
    answer: 'Liha Karuppati is made purely from the fresh inflorescence nectar of Palmyra palm trees (Padaneer). It is slowly evaporated over firewood without adding any white sugar, artificial colors, sodium hydrosulphite, or chemical bleaching agents.'
  },
  {
    question: 'What payment methods do you accept for WhatsApp orders?',
    answer: 'We accept all major UPI apps (Google Pay, PhonePe, Paytm), Net Banking, and direct bank transfers. Once you confirm your items via WhatsApp, our team will provide secure payment details and immediate order confirmation.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <span className="badge-pill badge-green">
            <HelpCircle size={14} aria-hidden="true" />
            Common Questions
          </span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about our pure Palmyra palm products, storage, and pan-India delivery.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`soil-card faq-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className={`faq-chevron ${isOpen ? 'rotate' : ''}`}>
                    <ChevronDown size={20} aria-hidden="true" />
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-wrap">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Box */}
        <div className="faq-help-box">
          <div className="faq-help-content">
            <div className="faq-help-title">Still have a question?</div>
            <div className="faq-help-desc">Our team is happy to assist you directly on WhatsApp.</div>
          </div>
          <a
            href="https://wa.me/919597959549?text=Hi%20Liha%20Team%2C%20I%20have%20a%20question%20about%20your%20products"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp faq-help-btn"
          >
            <WhatsAppIcon size={18} color="#ffffff" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 3.5rem 0 4rem 0;
          background: var(--bg-surface);
        }
        .faq-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 2.5rem;
        }
        .faq-title {
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          margin-top: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .faq-subtitle {
          color: var(--text-variant);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          max-width: 820px;
          margin: 0 auto;
        }

        .faq-item {
          background: var(--bg-container-lowest);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .faq-item.is-open {
          border-color: var(--primary-container);
          box-shadow: var(--soil-shadow);
        }

        .faq-question-btn {
          width: 100%;
          min-height: 56px;
          padding: 1rem 1.25rem;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          text-align: left;
          cursor: pointer;
          font-family: var(--font-sans);
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        .faq-question-btn:active {
          background: var(--bg-container-low);
        }

        .faq-question-text {
          font-size: 0.98rem;
          font-weight: 600;
          color: var(--primary);
          line-height: 1.4;
        }

        .faq-chevron {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-container-low);
          color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-chevron.rotate {
          transform: rotate(180deg);
          background: var(--secondary-container);
          color: var(--on-secondary-container);
        }

        .faq-answer-wrap {
          padding: 0 1.25rem 1.25rem 1.25rem;
          animation: faqFadeIn 0.2s ease-out;
        }

        .faq-answer-text {
          color: var(--text-variant);
          font-size: 0.92rem;
          line-height: 1.65;
          padding-top: 0.25rem;
          border-top: 1px dashed var(--outline-variant);
        }

        @keyframes faqFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Help Box */
        .faq-help-box {
          max-width: 820px;
          margin: 2.5rem auto 0 auto;
          background: var(--bg-container-low);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          text-align: center;
        }

        .faq-help-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary);
        }

        .faq-help-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.15rem;
        }

        .faq-help-btn {
          width: 100%;
          max-width: 240px;
          min-height: 46px !important;
          padding: 0.65rem 1.25rem !important;
          font-size: 0.9rem !important;
        }

        @media (min-width: 768px) {
          .faq-section {
            padding: 5rem 0;
          }
          .faq-question-text {
            font-size: 1.05rem;
          }
          .faq-answer-wrap {
            padding: 0 1.5rem 1.5rem 1.5rem;
          }
          .faq-question-btn {
            padding: 1.25rem 1.5rem;
          }
          .faq-help-box {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
            padding: 1.5rem 2rem;
          }
          .faq-help-btn {
            width: auto;
          }
        }
      `}</style>
    </section>
  );
}
