import React from 'react';
import { ExternalLink } from 'lucide-react';

function InstagramIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const INSTAGRAM_HANDLE = 'lihas_karupatti';
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

export default function InstagramFeed() {
  return (
    <section className="ig-section">
      <div className="container">
        <div className="ig-header">
          <span className="badge-pill badge-cream">
            <InstagramIcon size={14} aria-hidden="true" />
            Follow Us
          </span>
          <h2 className="ig-title">Fresh from Our Farm</h2>
          <p className="ig-subtitle">
            Follow <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="ig-handle-link">@{INSTAGRAM_HANDLE}</a> for daily updates, behind-the-scenes craftsmanship, and customer stories.
          </p>
        </div>

        {/* Embedded Instagram Profile Feed */}
        <div className="ig-embed-wrapper">
          <div className="ig-embed-inner">
            <iframe
              src={`https://www.instagram.com/${INSTAGRAM_HANDLE}/embed`}
              className="ig-iframe"
              title="Liha's Karuppati Instagram Feed"
              loading="lazy"
              allowTransparency="true"
              allow="encrypted-media"
            />
          </div>
        </div>

        {/* CTA to visit full profile */}
        <div className="ig-cta-row">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline ig-cta-btn"
          >
            <InstagramIcon size={18} aria-hidden="true" />
            <span>View Full Profile</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      <style>{`
        .ig-section {
          padding: 2.5rem 0 3rem 0;
          background: var(--bg-container-low);
          border-top: 1px solid var(--outline-variant);
        }
        .ig-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 1.75rem;
        }
        .ig-title {
          font-size: clamp(1.7rem, 3.8vw, 2.4rem);
          margin-top: 0.65rem;
          margin-bottom: 0.4rem;
        }
        .ig-subtitle {
          color: var(--text-variant);
          font-size: 0.92rem;
          line-height: 1.55;
        }
        .ig-handle-link {
          color: var(--secondary);
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ig-handle-link:hover {
          color: var(--secondary-hover);
          text-decoration: underline;
        }

        .ig-embed-wrapper {
          max-width: 540px;
          margin: 0 auto;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--outline-variant);
          background: var(--bg-container-lowest);
          box-shadow: var(--soil-shadow);
        }
        .ig-embed-inner {
          position: relative;
          width: 100%;
          min-height: 480px;
        }
        .ig-iframe {
          width: 100%;
          min-height: 480px;
          border: none;
          display: block;
        }

        .ig-cta-row {
          text-align: center;
          margin-top: 1.5rem;
        }
        .ig-cta-btn {
          font-size: 0.9rem;
          padding: 0.7rem 1.4rem;
          min-height: 44px;
          gap: 0.4rem;
        }

        @media (min-width: 768px) {
          .ig-section {
            padding: 3.5rem 0 4rem 0;
          }
          .ig-embed-inner {
            min-height: 600px;
          }
          .ig-iframe {
            min-height: 600px;
          }
        }
      `}</style>
    </section>
  );
}
