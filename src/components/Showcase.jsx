import React, { useState } from 'react';
import { CheckCircle2, Terminal, Cloud, Lock, Sparkles } from 'lucide-react';

export default function Showcase() {
  const [activeTab, setActiveTab] = useState('deploy');

  return (
    <section id="solutions" style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, transparent 0%, rgba(17, 20, 34, 0.6) 50%, transparent 100%)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Left Text */}
          <div>
            <span className="pill-badge" style={{ marginBottom: '1rem' }}>Architectural Excellence</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1.5rem' }}>
              Engineered for Seamless Netlify Integration
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              Liha is designed from the ground up for friction-free edge deployments. Automated builds produce purely static output with deterministic routing rules and hardened security headers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="var(--primary-light)" aria-hidden="true" />
                <span style={{ color: 'var(--text-main)', fontSize: '1rem' }}>Zero cold starts with pure static distribution</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="var(--primary-light)" aria-hidden="true" />
                <span style={{ color: 'var(--text-main)', fontSize: '1rem' }}>Automated SSL provisioning via Let's Encrypt</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="var(--primary-light)" aria-hidden="true" />
                <span style={{ color: 'var(--text-main)', fontSize: '1rem' }}>Instant Git push preview links and branch deploys</span>
              </div>
            </div>
          </div>

          {/* Right Code/Interactive Preview Card */}
          <div className="glass-card" style={{ padding: '2rem', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                netlify.toml
              </span>
            </div>

            <pre style={{
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
              fontSize: '0.9rem',
              color: '#cbd5e1',
              lineHeight: 1.6,
              overflowX: 'auto',
              padding: '0.5rem'
            }}>
              <code>{`[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Strict-Transport-Security = "max-age=31536000"`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
