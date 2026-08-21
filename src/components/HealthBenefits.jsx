import React from 'react';
import { Activity, ShieldCheck, Heart, Sparkles, Check, X } from 'lucide-react';

const benefits = [
  { icon: Activity, title: 'Rich in Natural Iron', desc: 'Helps prevent anemia and boosts hemoglobin levels naturally.' },
  { icon: Heart, title: 'Low Glycemic Index', desc: 'GI of ~35 to 42, releasing sustained energy without sugar spikes.' },
  { icon: ShieldCheck, title: 'Digestive & Respiratory', desc: 'Used in traditional Siddha medicine to clear toxins and aid digestion.' },
  { icon: Sparkles, title: 'Essential Minerals', desc: 'Calcium, potassium, and magnesium in a naturally bioavailable form.' }
];

const comparisons = [
  { attr: 'Process', good: 'Wood-Fired Evaporation', bad: 'Chemical Bleaching & Sulphur' },
  { attr: 'Nutrients', good: 'Iron, Potassium, Calcium', bad: 'Zero Nutrients (Empty Calories)' },
  { attr: 'GI Index', good: 'Low (~35 to 42)', bad: 'High (65 to 75)' },
  { attr: 'Additives', good: 'Zero Chemicals, 100% Pure', bad: 'Anti-caking & refining agents' }
];

function IconText({ icon, text, className }) {
  return (
    <div className={`icon-text-row ${className || ''}`}>
      <span className="icon-text-icon">{icon}</span>
      <span className="icon-text-label">{text}</span>
    </div>
  );
}

export default function HealthBenefits() {
  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        <div className="benefits-header">
          <span className="badge-pill badge-green">Nutritional Wisdom</span>
          <h2 className="benefits-title">Why Palm Jaggery Outshines Refined Sugar</h2>
          <p className="benefits-subtitle">
            For centuries, South Indian heritage recognized Karuppati not just as a sweetener, but as a restorative superfood.
          </p>
        </div>

        {/* Benefits Cards - horizontal scroll on mobile */}
        <div className="benefits-scroll-wrap">
          <div className="benefits-cards">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="soil-card benefit-card">
                  <div className="benefit-icon-wrap">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="benefit-card-title">{item.title}</h3>
                  <p className="benefit-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison - card layout on mobile, table on desktop */}
        <div className="soil-card comparison-card">
          <h3 className="comparison-title">Pure Karuppati vs Refined White Sugar</h3>

          {/* Mobile: stacked comparison items */}
          <div className="comparison-mobile">
            {comparisons.map((c, i) => (
              <div key={i} className="comparison-item">
                <div className="comparison-attr">{c.attr}</div>
                <IconText
                  icon={<Check size={16} color="var(--secondary)" aria-hidden="true" />}
                  text={c.good}
                  className="comparison-good"
                />
                <IconText
                  icon={<X size={16} color="#ba1a1a" aria-hidden="true" />}
                  text={c.bad}
                  className="comparison-bad"
                />
              </div>
            ))}
          </div>

          {/* Desktop: standard table */}
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th className="comparison-th-good">Liha Pure Palm Jaggery</th>
                <th>Refined White Sugar</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((c, i) => (
                <tr key={i}>
                  <td className="comparison-td-attr">{c.attr}</td>
                  <td className="comparison-td-good">
                    <span className="icon-text-row">
                      <span className="icon-text-icon"><Check size={16} aria-hidden="true" /></span>
                      <span className="icon-text-label">{c.good}</span>
                    </span>
                  </td>
                  <td className="comparison-td-bad">
                    <span className="icon-text-row">
                      <span className="icon-text-icon"><X size={16} color="#ba1a1a" aria-hidden="true" /></span>
                      <span className="icon-text-label">{c.bad}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        /* ---- Shared icon + text alignment utility ---- */
        .icon-text-row {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }
        .icon-text-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          line-height: 0;
        }
        .icon-text-icon svg {
          display: block;
        }
        .icon-text-label {
          line-height: 1.4;
        }

        /* ---- Section ---- */
        .benefits-section {
          padding: 3.5rem 0;
          background: linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-container-low) 100%);
        }
        .benefits-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 2rem;
        }
        .benefits-title {
          font-size: clamp(1.7rem, 4vw, 2.8rem);
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .benefits-subtitle {
          color: var(--text-variant);
          font-size: clamp(0.92rem, 2vw, 1.1rem);
          line-height: 1.6;
        }

        /* Horizontal scroll on mobile */
        .benefits-scroll-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          margin: 0 -1rem;
          padding: 0.5rem 1rem 1.5rem;
        }
        .benefits-scroll-wrap::-webkit-scrollbar { display: none; }
        .benefits-cards {
          display: flex;
          gap: 1rem;
        }
        .benefit-card {
          min-width: 240px;
          max-width: 280px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-shrink: 0;
          scroll-snap-align: start;
        }
        .benefit-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: var(--secondary-container);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--on-secondary-container);
        }
        .benefit-card-title {
          font-size: 1.1rem;
          font-family: var(--font-serif);
          color: var(--primary);
        }
        .benefit-card-desc {
          color: var(--text-variant);
          font-size: 0.88rem;
          line-height: 1.5;
        }

        /* ---- Comparison card ---- */
        .comparison-card {
          margin-top: 2rem;
          padding: 1.5rem;
          background: var(--bg-container-lowest);
        }
        .comparison-title {
          font-size: clamp(1.15rem, 3vw, 1.5rem);
          text-align: center;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }

        /* ---- Mobile stacked comparison ---- */
        .comparison-mobile {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .comparison-item {
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--outline-variant);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .comparison-item:last-child { border-bottom: none; padding-bottom: 0; }
        .comparison-attr {
          font-weight: 700;
          color: var(--primary);
          font-size: 0.92rem;
          margin-bottom: 0.15rem;
        }
        .comparison-good {
          color: var(--secondary);
          font-weight: 600;
          font-size: 0.88rem;
        }
        .comparison-bad {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        /* Desktop table - hidden on mobile */
        .comparison-table { display: none; }

        @media (min-width: 768px) {
          .benefits-section { padding: 5.5rem 0; }
          .benefits-scroll-wrap {
            overflow-x: visible;
            margin: 0;
            padding: 0 0 2rem;
          }
          .benefits-cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
          .benefit-card {
            min-width: 0;
            max-width: none;
          }
          .comparison-card { padding: 2.5rem; }
          .comparison-mobile { display: none; }
          .comparison-table {
            display: table;
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          .comparison-table th {
            padding: 1rem;
            font-size: 0.95rem;
            color: var(--primary);
            border-bottom: 2px solid var(--outline-variant);
          }
          .comparison-th-good {
            color: var(--secondary) !important;
            background: rgba(185, 238, 171, 0.15);
          }
          .comparison-table td {
            padding: 1rem;
            border-bottom: 1px solid var(--outline-variant);
            font-size: 0.92rem;
            vertical-align: middle;
          }
          .comparison-td-attr { font-weight: 700; color: var(--primary); }
          .comparison-td-good {
            color: var(--secondary);
            font-weight: 600;
            background: rgba(185, 238, 171, 0.08);
          }
          .comparison-td-bad { color: var(--text-variant); }
        }
      `}</style>
    </section>
  );
}
