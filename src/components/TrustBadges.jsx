import React from 'react';

const badges = [
  { icon: '/images/no-artificial-colors.png', title: 'No Artificial Colors' },
  { icon: '/images/zero-preservatives.png', title: 'Zero Preservatives' },
  { icon: '/images/locally-sourced.png', title: 'Locally Sourced' },
  { icon: '/images/hygienically-packed.png', title: 'Hygienically Packed' }
];

export default function TrustBadges() {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-strip">
          {badges.map((item, idx) => (
            <div key={idx} className="trust-item">
              <div className="trust-icon-wrap">
                <img src={item.icon} alt={item.title} className="trust-icon-img" />
              </div>
              <span className="trust-label">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trust-section {
          padding: 1.5rem 0 2rem;
          background: var(--bg-surface);
          position: relative;
          z-index: 20;
        }
        .trust-strip {
          background: var(--bg-container-lowest);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          border: 1px solid var(--outline-variant);
          box-shadow: var(--soil-shadow-sm);
          display: flex;
          justify-content: space-around;
          gap: 0.5rem;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .trust-strip::-webkit-scrollbar { display: none; }
        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          min-width: 72px;
          flex-shrink: 0;
        }
        .trust-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: var(--bg-container-high);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem;
        }
        .trust-icon-img {
          width: 100%; height: 100%;
          object-fit: contain;
        }
        .trust-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.2;
          max-width: 80px;
        }

        @media (min-width: 768px) {
          .trust-section { padding: 2.5rem 0; }
          .trust-strip {
            padding: 2rem 2rem;
            border-radius: var(--radius-xl);
          }
          .trust-icon-wrap { width: 68px; height: 68px; padding: 0.75rem; }
          .trust-label { font-size: 0.88rem; max-width: 140px; }
          .trust-item { min-width: auto; gap: 0.75rem; }
        }
      `}</style>
    </section>
  );
}
