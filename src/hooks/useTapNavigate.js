import { useRef } from 'react';

/**
 * Makes an entire card navigate on tap, without breaking vertical scroll
 * or swallowing taps on nested controls (a WhatsApp button, a share icon).
 *
 * Why not just wrap the card in an <a>: the card already contains its own
 * links (image, title) and a WhatsApp order button, and nesting anchors is
 * invalid HTML (see the comment this replaced in Products.jsx). Those
 * inner links stay as real <a> elements for keyboard, screen reader and
 * crawler access; this hook adds a synthetic "tap anywhere else" behaviour
 * on top, for touch only.
 *
 * Why not a plain onClick on the card: a click fires after a scroll-swipe
 * on some touch browsers as well as after a genuine tap, so a naive
 * onClick would navigate away every time someone tried to scroll the
 * page with a finger down on a card. This measures the pointer's total
 * movement and elapsed time between down and up, and only navigates when
 * both stay under a small threshold, exactly how a tap is distinguished
 * from a swipe.
 */
const MOVE_THRESHOLD = 10; // px
const TIME_THRESHOLD = 400; // ms

export default function useTapNavigate(href) {
  const start = useRef(null);

  const onPointerDown = (e) => {
    // Only tracked for touch and pen. Mouse users already have the real
    // <a> elements inside the card, and a mouse "click" does not have the
    // scroll-vs-tap ambiguity a touch drag does.
    if (e.pointerType === 'mouse') return;
    start.current = { x: e.clientX, y: e.clientY, t: Date.now() };
  };

  const onPointerUp = (e) => {
    if (e.pointerType === 'mouse' || !start.current) return;
    const { x, y, t } = start.current;
    start.current = null;

    const dx = Math.abs(e.clientX - x);
    const dy = Math.abs(e.clientY - y);
    const dt = Date.now() - t;

    if (dx < MOVE_THRESHOLD && dy < MOVE_THRESHOLD && dt < TIME_THRESHOLD) {
      // A real <a> or <button> under the finger handles its own
      // navigation; do not double-fire on top of it.
      if (e.target.closest('a, button')) return;
      window.location.href = href;
    }
  };

  const onPointerCancel = () => {
    start.current = null;
  };

  return { onPointerDown, onPointerUp, onPointerCancel };
}
