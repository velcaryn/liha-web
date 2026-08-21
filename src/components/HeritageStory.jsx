import React from 'react';
import { Sun, Droplets, Flame, PackageCheck } from 'lucide-react';

const steps = [
  { icon: Sun, step: '01', title: 'Dawn Nectar Tapping', desc: 'Skilled palm climbers tap fresh Palmyra sap (Padaneer) at dawn.' },
  { icon: Droplets, step: '02', title: 'Pure Filtration', desc: 'Fresh nectar is strained through fine cotton to remove natural sediment.' },
  { icon: Flame, step: '03', title: 'Slow Wood-Fired Boiling', desc: 'Simmered in traditional iron vats over firewood until golden-brown.' },
  { icon: PackageCheck, step: '04', title: 'Coconut Shell Moulding', desc: 'Poured into coconut shell halves to cool into classic Karuppati blocks.' }
];

export default function HeritageStory() {
  return (
    <section id="heritage" className="heritage-section">
      <div className="container">
        <div className="heritage-header">
          <span className="badge-pill badge-cream">Artisanal Tradition</span>
          <h2 className="heritage-title">From Palm Tree to Your Kitchen</h2>
          <p className="heritage-subtitle">
            Our time-honored process protects the integrity of the soil, trees, and your health.
          </p>
        </div>

        <div className="heritage-steps">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="soil-card heritage-card">
                <div className="heritage-card-top">
                  <div className="heritage-icon-wrap">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <span className="heritage-step-num">{item.step}</span>
                </div>
                <h3 className="heritage-card-title">{item.title}</h3>
                <p className="heritage-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .heritage-section {
          padding: 3.5rem 0;
          background: var(--bg-surface);
        }
        .heritage-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 2.5rem;
        }
        .heritage-title {
          font-size: clamp(1.7rem, 4vw, 2.8rem);
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .heritage-subtitle {
          color: var(--text-variant);
          font-size: clamp(0.92rem, 2vw, 1.1rem);
          line-height: 1.6;
        }
        .heritage-steps {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .heritage-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          background: var(--bg-container-lowest);
        }
        .heritage-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .heritage-icon-wrap {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: var(--bg-container-high);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-container);
        }
        .heritage-step-num {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--outline-variant);
        }
        .heritage-card-title {
          font-size: 1rem;
          font-family: var(--font-serif);
          color: var(--primary);
          line-height: 1.3;
        }
        .heritage-card-desc {
          color: var(--text-variant);
          font-size: 0.82rem;
          line-height: 1.5;
        }

        @media (min-width: 768px) {
          .heritage-section { padding: 5.5rem 0; }
          .heritage-steps {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
          .heritage-card { padding: 2rem 1.5rem; gap: 0.85rem; }
          .heritage-card-title { font-size: 1.2rem; }
          .heritage-card-desc { font-size: 0.9rem; }
        }
      `}</style>
    </section>
  );
}
