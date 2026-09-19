import React, { useRef, useState } from 'react';
import { Share2 } from 'lucide-react';

/**
 * Share affordance for a product page, positioned over the hero image.
 *
 * Native share sheet where the browser supports it (Android Chrome, iOS
 * Safari), which is exactly the "share to any IM" behaviour asked for.
 * Everywhere else, copy the link to the clipboard and show a toast, with a
 * final fallback for contexts where the Clipboard API is unavailable
 * (non-secure origins, very old browsers).
 *
 * The shared body text carries the English subtitle, the Tamil name, and an
 * order line. Most share targets show `text` and `url` as separate lines
 * (title is often not shown to the recipient at all), so everything meant
 * to be read goes into `text` and the product link is passed separately as
 * `url`, so the app unfurls a preview of the product page.
 *
 * Deliberately no wa.me link in the text: apps that unfurl a link preview
 * pick it up from whichever URL appears in the message, and a wa.me link
 * in `text` was winning over the product `url`, so the share showed a
 * WhatsApp preview instead of the product's own image and description.
 */
export default function ShareButton({ url, title, tamil, text, phoneDisplay }) {
  const [toast, setToast] = useState(false);
  const hideTimer = useRef(null);
  const inputRef = useRef(null);

  const nameLine = tamil ? `${text} (${tamil})` : text;
  const shareText = [
    nameLine,
    '',
    `Order now @ ${phoneDisplay}`,
  ].join('\n');

  const showToast = () => {
    setToast(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setToast(false), 2200);
  };

  const legacyCopy = () => {
    const input = inputRef.current;
    if (!input) return false;
    input.value = `${shareText}\n${url}`;
    input.hidden = false;
    input.focus();
    input.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    input.hidden = true;
    return ok;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: shareText, url });
        return;
      } catch (err) {
        // AbortError fires when the person just closes the share sheet.
        // Nothing went wrong, so do not fall through to the copy toast.
        if (err?.name === 'AbortError') return;
      }
    }

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(`${shareText}\n${url}`);
        showToast();
        return;
      } catch {
        // fall through to the legacy path below
      }
    }

    if (legacyCopy()) showToast();
  };

  return (
    <div className="share-btn-wrap">
      <button
        type="button"
        className="share-btn"
        onClick={handleShare}
        aria-label={`Share ${title}`}
        title="Share"
      >
        <Share2 size={18} aria-hidden="true" />
      </button>

      <span className={`share-toast${toast ? ' is-visible' : ''}`} role="status" aria-live="polite">
        Link copied
      </span>

      {/* Off-screen input used only by the legacy execCommand('copy') path. */}
      <input ref={inputRef} type="text" readOnly hidden className="share-legacy-input" />

      <style>{`
        .share-btn-wrap {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          z-index: 5;
        }
        .share-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          min-width: 48px;
          min-height: 48px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 248, 246, 0.92);
          color: var(--primary);
          box-shadow: 0 4px 14px rgba(50, 23, 13, 0.18);
          cursor: pointer;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          transition: transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease;
        }
        @media (hover: hover) and (pointer: fine) {
          .share-btn:hover {
            background: var(--bg-container-lowest);
          }
        }
        .share-btn:active {
          transform: scale(0.92);
        }

        .share-toast {
          position: absolute;
          top: calc(100% + 0.6rem);
          right: 0;
          background: var(--primary);
          color: var(--on-primary);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.45rem 0.8rem;
          border-radius: var(--radius-sm);
          white-space: nowrap;
          opacity: 0;
          transform: translateY(-4px);
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: var(--soil-shadow);
        }
        .share-toast.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .share-btn, .share-toast { transition: none; }
        }
      `}</style>
    </div>
  );
}
