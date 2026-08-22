import React from 'react';
import { Sun, Droplets, Flame, PackageCheck } from 'lucide-react';

const steps = [
  { icon: Sun, title: 'Dawn Nectar Tapping', desc: 'Skilled palm climbers tap fresh Palmyra sap (Padaneer) at dawn.' },
  { icon: Droplets, title: 'Pure Filtration', desc: 'Fresh nectar is strained through fine cotton to remove natural sediment.' },
  { icon: Flame, title: 'Slow Wood-Fired Boiling', desc: 'Simmered in traditional iron vats over firewood until golden-brown.' },
  { icon: PackageCheck, title: 'Coconut Shell Moulding', desc: 'Poured into coconut shell halves to cool into classic Karuppati blocks.' }
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
                <div className="heritage-icon-wrap">
                  <Icon size={22} aria-hidden="true" />
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
          padding: 2.75rem 0;
          background: var(--bg-surface);
        }
        .heritage-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 1.75rem;
        }
        .heritage-title {
          font-size: clamp(1.7rem, 4vw, 2.7rem);
          margin-top: 0.6rem;
          margin-bottom: 0.5rem;
        }
        .heritage-subtitle {
          color: var(--text-variant);
          font-size: clamp(0.9rem, 2vw, 1.05rem);
          line-height: 1.5;
        }
        .heritage-steps {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }
        .heritage-card {
          padding: 1.15rem 0.9rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.4rem;
          background: var(--bg-container-lowest);
          border-radius: var(--radius-md);
        }
        .heritage-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: var(--bg-container-high);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-container);
          margin-bottom: 0.35rem;
          flex-shrink: 0;
        }
        .heritage-card-title {
          font-size: 0.95rem;
          font-family: var(--font-serif);
          color: var(--primary);
          line-height: 1.25;
        }
        .heritage-card-desc {
          color: var(--text-variant);
          font-size: 0.78rem;
          line-height: 1.4;
        }

        @media (min-width: 768px) {
          .heritage-section { padding: 4.5rem 0; }
          .heritage-header { margin-bottom: 2.25rem; }
          .heritage-steps {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
          .heritage-card {
            padding: 1.75rem 1.25rem;
            gap: 0.6rem;
          }
          .heritage-icon-wrap {
            width: 48px; height: 48px;
            margin-bottom: 0.5rem;
          }
          .heritage-card-title { font-size: 1.15rem; }
          .heritage-card-desc { font-size: 0.88rem; line-height: 1.5; }
        }
      `}</style>
    </section>
  );
}
