import React from 'react';

const badges = [
  { icon: '/images/no-artificial-colors.webp', title: 'No Artificial Colors' },
  { icon: '/images/zero-preservatives.webp', title: 'Zero Preservatives' },
  { icon: '/images/locally-sourced.webp', title: 'Locally Sourced' },
  { icon: '/images/hygienically-packed.webp', title: 'Hygienically Packed' }
];

export default function TrustBadges() {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-strip">
          {badges.map((item, idx) => (
            <div key={idx} className="trust-item">
              <div className="trust-icon-wrap">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="trust-icon-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="trust-label">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trust-section {
          padding: 1.5rem 0 1rem 0;
          background: var(--bg-surface);
          position: relative;
          z-index: 20;
        }
        /* Solid, non-scrollable, responsive grid */
        .trust-strip {
          background: var(--bg-container-lowest);
          border-radius: var(--radius-lg);
          padding: 1.25rem 0.75rem;
          border: 1px solid var(--outline-variant);
          box-shadow: var(--soil-shadow-sm);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
          align-items: start;
          overflow: hidden; /* Solid, no horizontal scroll */
        }
        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.4rem;
          width: 100%;
        }
        .trust-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--bg-container-high);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          flex-shrink: 0;
        }
        .trust-icon-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .trust-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.2;
          text-align: center;
        }

        @media (max-width: 380px) {
          .trust-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem 0.5rem;
          }
          .trust-icon-wrap {
            width: 42px;
            height: 42px;
          }
          .trust-label {
            font-size: 0.72rem;
          }
        }

        @media (min-width: 768px) {
          .trust-section {
            padding: 2.5rem 0 1.5rem 0;
          }
          .trust-strip {
            padding: 1.75rem 2rem;
            border-radius: var(--radius-xl);
            gap: 1.5rem;
          }
          .trust-icon-wrap {
            width: 64px;
            height: 64px;
            padding: 0.7rem;
          }
          .trust-label {
            font-size: 0.88rem;
            max-width: 140px;
          }
          .trust-item {
            gap: 0.65rem;
          }
        }
      `}</style>
    </section>
  );
}
