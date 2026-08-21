import React from 'react';

const badges = [
  {
    icon: '/images/no-artificial-colors.png',
    title: 'No Artificial Colors',
    desc: 'Pure, natural deep amber tone from slow reduction'
  },
  {
    icon: '/images/zero-preservatives.png',
    title: 'Zero Preservatives',
    desc: 'Free of chemical additives, sulphur, or bleaching agents'
  },
  {
    icon: '/images/locally-sourced.png',
    title: 'Locally Sourced',
    desc: 'Directly sourced from indigenous Tamil Nadu palmyra groves'
  },
  {
    icon: '/images/hygienically-packed.png',
    title: 'Hygienically Packed',
    desc: 'Processed in clean food-grade facilities'
  }
];

export default function TrustBadges() {
  return (
    <section style={{
      padding: '3rem 0',
      background: 'var(--bg-surface)',
      position: 'relative',
      zIndex: 20
    }}>
      <div className="container">
        <div style={{
          background: 'var(--bg-container-lowest)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem 1.5rem',
          border: '1px solid var(--outline-variant)',
          boxShadow: 'var(--soil-shadow)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          alignItems: 'start'
        }}>
          {badges.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.75rem',
                padding: '0.5rem'
              }}
            >
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'var(--bg-container-high)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.85rem',
                boxShadow: 'inset 0 2px 6px rgba(50, 23, 13, 0.06)'
              }}>
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h4 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--primary)',
                lineHeight: 1.3
              }}>
                {item.title}
              </h4>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
                maxWidth: '220px'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
