import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      paddingTop: '9rem',
      paddingBottom: '5rem',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
        {/* Pill Badge */}
        <div style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
          <span className="pill-badge">
            <Zap size={14} aria-hidden="true" />
            Next-Generation Architecture
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '1.5rem',
          lineHeight: 1.15
        }}>
          Elevate Your Digital Experience with <span className="gradient-text">Liha</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
          maxWidth: '720px',
          marginInline: 'auto'
        }}>
          A high-performance modern web platform engineered for extreme speed, fluid workflows, and elegant aesthetics.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          <a href="#features" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
            Explore Platform
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a href="#solutions" className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
            View Solutions
          </a>
        </div>

        {/* Key Metrics / Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '1rem'
        }}>
          <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
              99.99%
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
              Reliable Uptime
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
              &lt; 50ms
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
              Global Edge Latency
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
              100%
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
              Static Optimization
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
