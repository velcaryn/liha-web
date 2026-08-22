import React from 'react';
import { Activity, ShieldCheck, Heart, Sparkles, Check, X } from 'lucide-react';

const benefits = [
  {
    icon: Activity,
    title: 'Low Glycemic Index',
    desc: 'GI of 35-42 provides steady energy without triggering sudden blood sugar spikes.'
  },
  {
    icon: ShieldCheck,
    title: 'Rich in Natural Iron',
    desc: 'Packed with bioavailable iron to help boost hemoglobin and combat fatigue.'
  },
  {
    icon: Heart,
    title: 'Calcium & Minerals',
    desc: 'Abundant in potassium, magnesium, and calcium to support bone strength.'
  },
  {
    icon: Sparkles,
    title: 'Aids Digestion',
    desc: 'Activates digestive enzymes naturally and helps soothe the digestive tract.'
  }
];

const comparisons = [
  { attr: 'Processing', good: 'Unrefined, wood-fired nectar reduction', bad: 'Heavily chemical bleached & processed' },
  { attr: 'Glycemic Index (GI)', good: 'Low GI (~35 to 42)', bad: 'High GI (~65 to 70)' },
  { attr: 'Nutrient Value', good: 'Packed with Iron, Calcium, Potassium', bad: 'Zero nutrients, empty calories' },
  { attr: 'Chemical Additives', good: '100% Free from sulfur, lime & colors', bad: 'Treated with sulfur dioxide & additives' },
  { attr: 'Impact on Digestion', good: 'Stimulates natural digestive enzymes', bad: 'Causes energy crashes and acidity' }
];

function IconText({ icon, text, className }) {
  return (
    <span className={`icon-text-row ${className}`}>
      <span className="icon-text-icon">{icon}</span>
      <span className="icon-text-label">{text}</span>
    </span>
  );
}

export default function HealthBenefits() {
  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        <div className="benefits-header">
          <span className="badge-pill badge-green">Nutritional Wisdom</span>
          <h2 className="benefits-title">Why Palm Jaggery Outshines White Sugar</h2>
          <p className="benefits-subtitle">
            Nature's unrefined sweetener, cherished for centuries in traditional Siddha and Ayurvedic wellness.
          </p>
        </div>

        {/* Space-efficient compact 2x2 grid on mobile with proper padding */}
        <div className="benefits-grid">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="soil-card benefit-card">
                <div className="benefit-icon-wrap">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <h3 className="benefit-card-title">{item.title}</h3>
                <p className="benefit-card-desc">{item.desc}</p>
              </div>
            );
          })}
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
                  icon={<Check size={15} color="var(--secondary)" aria-hidden="true" />}
                  text={c.good}
                  className="comparison-good"
                />
                <IconText
                  icon={<X size={15} color="#ba1a1a" aria-hidden="true" />}
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
          gap: 0.4rem;
        }
        .icon-text-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          line-height: 0;
        }
        .icon-text-icon svg {
          display: block;
        }
        .icon-text-label {
          line-height: 1.35;
        }

        /* ---- Section ---- */
        .benefits-section {
          padding: 2.5rem 0;
          background: linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-container-low) 100%);
        }
        .benefits-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 1.5rem;
        }
        .benefits-title {
          font-size: clamp(1.7rem, 4vw, 2.7rem);
          margin-top: 0.6rem;
          margin-bottom: 0.5rem;
        }
        .benefits-subtitle {
          color: var(--text-variant);
          font-size: clamp(0.9rem, 2vw, 1.05rem);
          line-height: 1.5;
        }

        /* 2x2 grid on mobile with comfortable gutter padding */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .benefit-card {
          padding: 0.95rem 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          background: var(--bg-container-lowest);
          border-radius: var(--radius-md);
        }
        .benefit-icon-wrap {
          width: 36px; height: 36px;
          border-radius: 8px;
          background: var(--secondary-container);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--on-secondary-container);
          margin-bottom: 0.2rem;
          flex-shrink: 0;
        }
        .benefit-card-title {
          font-size: 0.95rem;
          font-family: var(--font-serif);
          color: var(--primary);
          line-height: 1.25;
        }
        .benefit-card-desc {
          color: var(--text-variant);
          font-size: 0.78rem;
          line-height: 1.4;
        }

        /* ---- Comparison card ---- */
        .comparison-card {
          padding: 1.15rem 1rem;
          background: var(--bg-container-lowest);
        }
        .comparison-title {
          font-size: clamp(1.05rem, 3vw, 1.4rem);
          text-align: center;
          margin-bottom: 1.15rem;
          color: var(--primary);
        }

        /* ---- Mobile stacked comparison ---- */
        .comparison-mobile {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .comparison-item {
          padding-bottom: 0.9rem;
          border-bottom: 1px solid var(--outline-variant);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .comparison-item:last-child { border-bottom: none; padding-bottom: 0; }
        .comparison-attr {
          font-weight: 700;
          color: var(--primary);
          font-size: 0.88rem;
          margin-bottom: 0.1rem;
        }
        .comparison-good {
          color: var(--secondary);
          font-weight: 600;
          font-size: 0.82rem;
        }
        .comparison-bad {
          color: var(--text-muted);
          font-size: 0.8rem;
        }

        /* Desktop table - hidden on mobile */
        .comparison-table { display: none; }

        @media (min-width: 768px) {
          .benefits-section { padding: 4.5rem 0; }
          .benefits-header { margin-bottom: 2.25rem; }
          .benefits-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            margin-bottom: 2.5rem;
          }
          .benefit-card {
            padding: 1.35rem 1.25rem;
            gap: 0.5rem;
          }
          .benefit-icon-wrap {
            width: 42px; height: 42px;
            border-radius: 10px;
            margin-bottom: 0.4rem;
          }
          .benefit-card-title { font-size: 1.1rem; }
          .benefit-card-desc { font-size: 0.88rem; line-height: 1.5; }

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
