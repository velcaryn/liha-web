import React, { useEffect, useRef, useState } from 'react';

/**
 * An <img> that shows a shimmering placeholder until the file decodes.
 *
 * On a slow Indian mobile connection the product photos are the slowest thing
 * on the page, and an unstyled empty box reads as broken. The placeholder
 * reserves the exact final box, so nothing shifts when the image lands.
 *
 * width and height are required: without them the placeholder cannot reserve
 * the right space and the page reflows on load, which is the layout shift
 * this is meant to prevent.
 */
export default function SkeletonImage({ src, alt, width, height, className = '', objectPosition, ...rest }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  // An image restored from cache can finish before React attaches onLoad.
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <span
      className={`skeleton-wrap${loaded ? '' : ' skeleton'}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <img
        ref={ref}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} img-skeleton ${loaded ? 'is-loaded' : 'is-loading'}`}
        style={objectPosition ? { objectPosition } : undefined}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        {...rest}
      />
    </span>
  );
}
