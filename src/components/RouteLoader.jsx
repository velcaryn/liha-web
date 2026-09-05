import React, { useEffect, useState } from 'react';

/**
 * Brief branded overlay shown while a product page is being fetched.
 *
 * These are full page loads, not client-side routing: the site is prerendered
 * to one HTML file per route, and a plain <a href> is what makes those files
 * reachable to crawlers. On a slow connection that leaves the old page frozen
 * with no feedback, so this paints the logo the moment a product link is
 * tapped and stays until the browser swaps documents.
 *
 * Deliberately NOT a spinner: the mark is the brand, and a 400ms pulse reads
 * as intentional where a spinner reads as a stall.
 */
export default function RouteLoader() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onClick = (e) => {
      // Ignore modified clicks: those open a new tab and the current page stays.
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      if (
        link.target === '_blank' ||
        link.hasAttribute('download') ||
        href.startsWith('#') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:') ||
        href.startsWith('http')
      ) {
        return;
      }

      // Same-document navigation needs no loader.
      const url = new URL(link.href, window.location.href);
      if (url.pathname === window.location.pathname) return;

      setActive(true);
    };

    // pageshow fires when returning via the back/forward cache, where the
    // overlay would otherwise still be painted over a restored page.
    const onPageShow = () => setActive(false);

    document.addEventListener('click', onClick);
    window.addEventListener('pageshow', onPageShow);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('pageshow', onPageShow);
    };
  }, []);

  return (
    <div
      className={`route-loader${active ? ' is-active' : ''}`}
      aria-hidden={!active}
      role="status"
      aria-live="polite"
    >
      <img
        src="/images/logo.webp"
        alt=""
        width="72"
        height="72"
        className="route-loader-mark"
      />
      <span className="route-loader-text">{active ? 'Loading' : ''}</span>
    </div>
  );
}
