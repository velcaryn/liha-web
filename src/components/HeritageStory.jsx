import React from 'react';
import { Sparkles, Sun, Droplets, Flame, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: Sun,
    step: '01',
    title: 'Dawn Nectar Tapping',
    desc: 'Skilled palm climbers scale tall Palmyra trees at dawn to tap fresh, natural palm inflorescence sap (Padaneer).'
  },
  {
    icon: Droplets,
    step: '02',
    title: 'Pure Filtration',
    desc: 'The fresh nectar is immediately strained and filtered through fine cotton to remove natural sediment.'
  },
  {
    icon: Flame,
    step: '03',
    title: 'Slow Wood-Fired Boiling',
    desc: 'Simmered gently in large traditional iron vats over firewood until it thickens into a rich, golden-brown syrup.'
  },
  {
    icon: PackageCheck,
    step: '04',
    title: 'Coconut Shell Moulding',
    desc: 'Poured into natural coconut shell halves to cool and solidify into classic, authentic Karuppati blocks.'
  }
];

export default function HeritageStory() {
  return (
    <section id="heritage" style={{
      padding: '5.5rem 0',
      background: 'var(--bg-surface)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span className="badge-pill badge-cream" style={{ marginBottom: '1rem' }}>
            Artisanal Tradition
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            From Palm Tree to Your Kitchen
          </h2>
          <p style={{ color: 'var(--text-variant)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Our time-honored artisanal process protects the integrity of the soil, trees, and your health without any industrial shortcuts.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem'
        }}>
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="soil-card"
                style={{
                  padding: '2.2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  background: 'var(--bg-container-lowest)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--bg-container-high)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-container)'
                  }}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--outline-variant)'
                  }}>
                    {item.step}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--primary)' }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-variant)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
