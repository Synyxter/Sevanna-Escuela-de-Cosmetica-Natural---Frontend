import React from 'react';

/** Generic surface container. Emerald by default; `light` for cream surfaces. */
export function Card({ children, padded = true, light = false, hover = false, style = {}, ...rest }) {
  const [h, setH] = React.useState(false);
  return (
    <div
      className={light ? 'on-light' : undefined}
      onMouseEnter={() => hover && setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-lg)',
        padding: padded ? 'var(--space-6)' : 0,
        boxShadow: h ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: h ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-standard)',
        color: 'var(--text-body)', ...style,
      }}
      {...rest}
    >{children}</div>
  );
}
