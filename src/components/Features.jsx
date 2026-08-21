import React from 'react';
import { Zap, ShieldCheck, RefreshCw, Cpu, Gauge, Globe2 } from 'lucide-react';

const featureList = [
  {
    icon: Zap,
    title: "Instant Edge Delivery",
    desc: "Globally distributed static assets ensuring lightning-fast load times for users anywhere on earth."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Grade Security",
    desc: "Zero server vulnerabilities with static compilation, pre-configured CSP headers, and automated SSL."
  },
  {
    icon: RefreshCw,
    title: "Continuous CI/CD",
    desc: "Instant automated builds and preview deployments on every Git push directly linked with Netlify."
  },
  {
    icon: Cpu,
    title: "Modern React Ecosystem",
    desc: "Powered by Vite and React for instant Hot Module Replacement and modular UI architecture."
  },
  {
    icon: Gauge,
    title: "Maximized Core Web Vitals",
    desc: "Engineered for 100/100 Lighthouse performance metrics with zero render-blocking overhead."
  },
  {
    icon: Globe2,
    title: "Custom Domain Routing",
    desc: "Seamless apex and subdomain DNS management with dedicated edge caching and fallback rules."
  }
];

export default function Features() {
  return (
    <section id="features" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <span className="pill-badge" style={{ marginBottom: '1rem' }}>Core Capabilities</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
            Built for Modern Standards
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Every component is crafted with precision to deliver a resilient, beautiful, and secure web presence.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {featureList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(124, 58, 237, 0.15)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-light)',
                  marginBottom: '1.5rem'
                }}>
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
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
