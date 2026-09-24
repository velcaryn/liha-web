import { contact } from '../config/site';
import React, { useState } from 'react';
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

const INSTAGRAM_HANDLE = contact.instagramHandle;
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

// A few real product photos already on the site, shown in place of the
// live feed when it does not render. Not a curated "latest posts" grid,
// just enough imagery that the section never sits as a stark white box.
const FALLBACK_PHOTOS = [
  '/images/carousel/carousel-1-hero-wooden-spread.webp',
  '/images/carousel/carousel-2-palm-candy-jar.webp',
  '/images/carousel/carousel-6-clear-pouch-showcase.webp',
  '/images/carousel/carousel-4-lifestyle-pour.webp',
];

/**
 * Instagram's public, logged-out `/<handle>/embed` route is not an
 * official embed product (there is no supported way to embed a profile
 * feed without the Graph API and a connected business account), and it
 * has quietly stopped rendering for logged-out visitors before: the
 * iframe returns 200 with a real HTML shell, but Instagram's own script
 * inside it paints nothing, which reads as identical to a successful load
 * from the outside. This was tried: an onLoad-plus-timer heuristic auto-
 * revealed the iframe once, and it was blank, the exact bug this exists
 * to prevent. A cross-origin iframe's content cannot be inspected by the
 * parent page, by browser design, so there is no signal available in JS
 * that tells a real render apart from a silent one.
 *
 * So the default view is always the photo grid, permanently, not on a
 * timer. The live embed is still offered, as a "Load Instagram feed"
 * button the visitor presses themselves: a person looking at the result
 * can tell in a glance whether it rendered, which is the one check this
 * component itself can never perform. If it is blank for them, the photo
 * grid they were already looking at is still right there.
 */
export default function InstagramFeed() {
  const [showEmbed, setShowEmbed] = useState(false);

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

        <div className="ig-embed-wrapper">
          <div className="ig-embed-inner">
            {showEmbed ? (
              <iframe
                src={`https://www.instagram.com/${INSTAGRAM_HANDLE}/embed`}
                className="ig-iframe"
                title="Liha's Karupatti Instagram Feed"
                allowTransparency="true"
                allow="encrypted-media"
              />
            ) : (
              <div className="ig-fallback">
                <div className="ig-fallback-grid">
                  {FALLBACK_PHOTOS.map((src) => (
                    <img key={src} src={src} alt="" loading="lazy" decoding="async" />
                  ))}
                </div>
                <div className="ig-fallback-copy">
                  <InstagramIcon size={28} color="var(--secondary)" aria-hidden="true" />
                  <p>See our latest posts on Instagram</p>
                  {/* Loads the live embed only once asked to, rather than
                      guessing on the visitor's behalf whether it will
                      render. Whether it worked is then visible to them
                      directly, which is the one check this component
                      cannot make for itself. */}
                  <button type="button" className="btn btn-whatsapp ig-fallback-btn" onClick={() => setShowEmbed(true)}>
                    <span>Load Instagram Feed</span>
                  </button>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="ig-fallback-link">
                    or open the profile directly <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
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
        @media (hover: hover) {
          .ig-handle-link:hover {
            color: var(--secondary-hover);
            text-decoration: underline;
          }
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
          width: 100%;
          min-height: 480px;
        }
        .ig-iframe {
          width: 100%;
          min-height: 480px;
          border: none;
          display: block;
        }

        /* Default view: a real photo grid plus a button that loads the
           live embed on request, rather than the iframe itself, which
           cannot be trusted to render for every visitor (see the comment
           above this component). */
        .ig-fallback {
          display: flex;
          flex-direction: column;
          min-height: 480px;
        }
        .ig-fallback-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          flex: 1;
          min-height: 0;
        }
        .ig-fallback-grid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .ig-fallback-copy {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          padding: 1.5rem 1.25rem;
          text-align: center;
          background: var(--bg-container-lowest);
          border-top: 1px solid var(--outline-variant);
        }
        .ig-fallback-copy p {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary);
          margin: 0;
        }
        .ig-fallback-btn {
          font-size: 0.88rem;
          padding: 0.6rem 1.2rem;
          min-height: 44px;
          gap: 0.4rem;
        }
        .ig-fallback-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-decoration: none;
        }
        @media (hover: hover) {
          .ig-fallback-link:hover {
            color: var(--secondary);
            text-decoration: underline;
          }
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
          .ig-fallback-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .ig-fallback-copy {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
