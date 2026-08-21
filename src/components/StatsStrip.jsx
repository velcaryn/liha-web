import React from 'react';
import { Calendar, Package, Users, Coffee } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: 'Since 2019',
    label: '7+ Years of Purity',
    sub: 'Traditional Palmyra craft'
  },
  {
    icon: Package,
    value: '10,000+',
    label: 'Orders Shipped',
    sub: 'Delivered across India'
  },
  {
    icon: Users,
    value: '85%+',
    label: 'Repeat Customers',
    sub: 'Families trusting health'
  },
  {
    icon: Coffee,
    value: '50+ Cafes',
    label: 'Coffee Houses & Brands',
    sub: 'Artisanal brew partners'
  }
];

export default function StatsStrip() {
  return (
    <section className="stats-strip-section">
      <div className="container">
        <div className="stats-strip-box">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="stats-item">
                <div className="stats-icon-wrap">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div className="stats-content">
                  <div className="stats-value">{item.value}</div>
                  <div className="stats-label">{item.label}</div>
                  <div className="stats-sub">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .stats-strip-section {
          padding: 0.5rem 0 2rem 0;
          background: var(--bg-surface);
          position: relative;
          z-index: 10;
        }
        /* Solid, non-scrollable, responsive layout */
        .stats-strip-box {
          background: var(--bg-container-low);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-lg);
          padding: 1.25rem 1rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem 0.75rem;
          overflow: hidden; /* Solid, no horizontal scroll */
        }
        .stats-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          width: 100%;
        }
        .stats-icon-wrap {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: var(--bg-container-lowest);
          border: 1px solid var(--outline-variant);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .stats-content {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .stats-value {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.15;
          margin-bottom: 0.1rem;
        }
        .stats-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--secondary);
          line-height: 1.25;
        }
        .stats-sub {
          font-size: 0.7rem;
          color: var(--text-muted);
          line-height: 1.3;
          margin-top: 0.1rem;
        }

        @media (min-width: 900px) {
          .stats-strip-section {
            padding: 1rem 0 2.5rem 0;
          }
          .stats-strip-box {
            grid-template-columns: repeat(4, 1fr);
            padding: 1.75rem 2rem;
            gap: 2rem;
          }
          .stats-item {
            gap: 0.9rem;
            border-right: 1px solid var(--outline-variant);
            padding-right: 1.25rem;
          }
          .stats-item:last-child {
            border-right: none;
            padding-right: 0;
          }
          .stats-icon-wrap {
            width: 42px;
            height: 42px;
            border-radius: 12px;
          }
          .stats-value {
            font-size: 1.35rem;
          }
          .stats-label {
            font-size: 0.88rem;
          }
          .stats-sub {
            font-size: 0.78rem;
          }
        }
      `}</style>
    </section>
  );
}
