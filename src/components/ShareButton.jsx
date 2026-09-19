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
 * The shared message is built as ONE block of text with the link as its
 * own first line, then handed to every path (native share, clipboard,
 * legacy copy) exactly the same way. This is deliberate, not incidental:
 *
 * 1. `navigator.share({ text, url })` does not compose the same order on
 *    every platform. Android appends `url` after `text` when the target
 *    app only accepts a single text field, which put the link last even
 *    though the clipboard path (which only ever had one string) put it
 *    first. Passing everything as one `text` string and leaving `url`
 *    out of the share call keeps the order identical everywhere.
 * 2. A link on its own first line, not buried after other text, is what
 *    WhatsApp's own unfurler looks for to build a rich link preview when
 *    the message lands in a chat, which is the actual point of sharing.
 *
 * Deliberately no wa.me link anywhere in the text: a second URL in the
 * message competes with the product link for which one gets unfurled,
 * and previously won, showing a WhatsApp preview instead of the
 * product's own image and description.
 */
export default function ShareButton({ url, title, tamil, text, phoneDisplay }) {
  const [toast, setToast] = useState(false);
  const [toastPos, setToastPos] = useState(null);
  const hideTimer = useRef(null);
  const inputRef = useRef(null);
  const btnRef = useRef(null);

  const nameLine = tamil ? `${text} (${tamil})` : text;
  const shareText = [
    url,
    nameLine,
    `Order now @ ${phoneDisplay}`,
  ].join('\n');

  const showToast = () => {
    // Positioned in the viewport from the button's own rect, not relative
    // to any CSS ancestor: this component is reused inside containers that
    // clip overflow for their own reasons (a rounded product card image),
    // and a toast positioned relative to one of those never becomes
    // visible there.
    const rect = btnRef.current?.getBoundingClientRect();
    if (rect) setToastPos({ top: rect.bottom + 8, right: window.innerWidth - rect.right });
    setToast(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setToast(false), 2200);
  };

  const legacyCopy = () => {
    const input = inputRef.current;
    if (!input) return false;
    input.value = shareText;
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
        // `url` deliberately left out here: shareText already opens with
        // it, and some Android share targets append `url` again after
        // `text` when they only accept one field, which would print the
        // link twice.
        await navigator.share({ title, text: shareText });
        return;
      } catch (err) {
        // AbortError fires when the person just closes the share sheet.
        // Nothing went wrong, so do not fall through to the copy toast.
        if (err?.name === 'AbortError') return;
      }
    }

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(shareText);
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
        ref={btnRef}
        type="button"
        className="share-btn"
        onClick={(e) => {
          // Stops the tap from also being read as "tap anywhere on the
          // card" by useTapNavigate on the home page grid, which would
          // otherwise navigate to the product page as well as sharing it.
          e.stopPropagation();
          handleShare();
        }}
        aria-label={`Share ${title}`}
        title="Share"
      >
        <Share2 size={18} aria-hidden="true" />
      </button>

      <span
        className={`share-toast${toast ? ' is-visible' : ''}`}
        style={toastPos ? { top: `${toastPos.top}px`, right: `${toastPos.right}px` } : undefined}
        role="status"
        aria-live="polite"
      >
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
          /* Fixed to the viewport and positioned from the button's own
             rect in JS (see showToast), not from a CSS ancestor: this
             component sits inside containers that clip overflow for
             their own layout reasons, and an absolutely-positioned toast
             would render invisible inside one of those. */
          position: fixed;
          z-index: 9999;
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
