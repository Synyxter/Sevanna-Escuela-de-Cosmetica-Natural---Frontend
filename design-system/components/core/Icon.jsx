import React, { useEffect, useRef } from 'react';

/**
 * Thin-line icon wrapper around Lucide (loaded via CDN in the host page).
 * Matches the delicate, elegant line quality of the Sevanna mark.
 */
export function Icon({ name = 'sparkles', size = 20, strokeWidth = 1.5, color = 'currentColor', style = {}, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      ref.current.appendChild(el);
      try { window.lucide.createIcons({ nameAttr: 'data-lucide', attrs: { width: size, height: size, 'stroke-width': strokeWidth } }); } catch (e) {}
    }
  }, [name, size, strokeWidth]);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ display: 'inline-flex', color, width: size, height: size, ...style }}
      {...rest}
    />
  );
}
