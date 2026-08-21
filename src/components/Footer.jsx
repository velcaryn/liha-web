import React from 'react';
import { Sparkles, Globe, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 0 2rem 0',
      background: 'rgba(10, 12, 20, 0.95)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}>
              <Sparkles size={16} aria-hidden="true" />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
              Liha
            </span>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
            <a href="#solutions" style={{ color: 'inherit', textDecoration: 'none' }}>Solutions</a>
            <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
            <a href="https://github.com/velcaryn/liha-web" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              GitHub <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.85rem',
          color: 'var(--text-faint)'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Velcaryn. All rights reserved.
          </div>
          <div>
            Designed with high performance and static reliability.
          </div>
        </div>
      </div>
    </footer>
  );
}
