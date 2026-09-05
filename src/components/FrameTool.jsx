import React, { useEffect, useState } from 'react';

/**
 * Drag-to-reframe tool for the product card images. DEV ONLY.
 *
 * The card crops a square photo into a landscape box, so whichever part of
 * the photo the crop lands on is a judgement call, not something CSS can
 * guess. This lets that call be made by eye: drag an image to slide the crop
 * window, then copy the values into `focus` in config/site.js and the framing
 * is locked in for every visitor.
 *
 * Gated on import.meta.env.DEV, so it is stripped from the production bundle
 * entirely. Visitors can never drag anything.
 */
export default function FrameTool() {
  const [on, setOn] = useState(false);
  const [values, setValues] = useState({});

  useEffect(() => {
    if (!on) return;

    const imgs = [...document.querySelectorAll('[data-focus-slug]')];
    const cleanups = [];

    imgs.forEach((img) => {
      const slug = img.dataset.focusSlug;
      img.style.cursor = 'grab';
      img.style.outline = '2px dashed rgba(45,90,39,0.5)';
      img.style.outlineOffset = '-2px';

      let dragging = false;
      let startX = 0, startY = 0, baseX = 50, baseY = 50;

      const parse = () => {
        const pos = (getComputedStyle(img).objectPosition || '50% 50%').split(' ');
        // Computed value comes back in px on some engines; fall back to the
        // percentage we last wrote rather than guessing.
        const stored = (img.dataset.focusValue || '50% 50%').split(' ');
        const px = parseFloat(stored[0]);
        const py = parseFloat(stored[1]);
        if (!Number.isNaN(px) && !Number.isNaN(py)) return [px, py];
        return [parseFloat(pos[0]) || 50, parseFloat(pos[1]) || 50];
      };

      const down = (e) => {
        dragging = true;
        img.style.cursor = 'grabbing';
        // Show the crop edges only while dragging, so the framing can be
        // judged against the box the visitor will actually see.
        img.parentElement?.classList.add('is-framing');
        const pt = e.touches ? e.touches[0] : e;
        startX = pt.clientX; startY = pt.clientY;
        [baseX, baseY] = parse();
        e.preventDefault();
      };

      const move = (e) => {
        if (!dragging) return;
        const pt = e.touches ? e.touches[0] : e;
        const r = img.getBoundingClientRect();
        // Percentage moves inversely to the drag: dragging the photo down
        // should reveal what is above it.
        const nx = Math.max(0, Math.min(100, baseX - ((pt.clientX - startX) / r.width) * 100));
        const ny = Math.max(0, Math.min(100, baseY - ((pt.clientY - startY) / r.height) * 100));
        const v = `${Math.round(nx)}% ${Math.round(ny)}%`;
        // setProperty with !important: React owns this element's style prop
        // and re-renders would otherwise wipe a plain assignment.
        img.style.setProperty('object-position', v, 'important');
        img.dataset.focusValue = v;
        setValues((prev) => ({ ...prev, [slug]: v }));
        e.preventDefault();
      };

      const up = () => {
        dragging = false;
        img.style.cursor = 'grab';
        img.parentElement?.classList.remove('is-framing');
      };

      img.addEventListener('mousedown', down);
      img.addEventListener('touchstart', down, { passive: false });
      window.addEventListener('mousemove', move);
      window.addEventListener('touchmove', move, { passive: false });
      window.addEventListener('mouseup', up);
      window.addEventListener('touchend', up);

      cleanups.push(() => {
        img.style.cursor = '';
        img.style.outline = '';
        img.removeEventListener('mousedown', down);
        img.removeEventListener('touchstart', down);
        window.removeEventListener('mousemove', move);
        window.removeEventListener('touchmove', move);
        window.removeEventListener('mouseup', up);
        window.removeEventListener('touchend', up);
      });
    });

    setValues((prev) => {
      const next = { ...prev };
      imgs.forEach((i) => {
        if (!next[i.dataset.focusSlug]) {
          next[i.dataset.focusSlug] = i.style.objectPosition || '50% 50%';
        }
      });
      return next;
    });

    return () => cleanups.forEach((fn) => fn());
  }, [on]);

  const entries = Object.entries(values);

  return (
    <div className="frame-tool">
      <button type="button" onClick={() => setOn((v) => !v)} className="frame-tool-toggle">
        {on ? 'Done framing' : 'Reframe images'}
      </button>

      {on && (
        <div className="frame-tool-panel">
          <p>Drag each product photo to reframe it, then send me these values.</p>
          <pre>
{entries.length
  ? entries.map(([slug, v]) => `${slug}: ${v}`).join('\n')
  : 'Drag an image to begin.'}
          </pre>
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(entries.map(([s, v]) => `${s}: ${v}`).join('\n'))}
          >
            Copy values
          </button>
        </div>
      )}
    </div>
  );
}
