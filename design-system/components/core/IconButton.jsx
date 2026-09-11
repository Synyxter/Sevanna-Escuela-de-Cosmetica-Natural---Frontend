import React from 'react';
import { Icon } from './Icon.jsx';

/** Circular icon-only button; ghost by default, gold-outline optional. */
export function IconButton({ name = 'arrow-right', variant = 'ghost', size = 40, label = '', style = {}, ...rest }) {
  const variants = {
    ghost: { background: 'transparent', border: '1px solid var(--border-hairline)', color: 'var(--text-muted)' },
    gold: { background: 'transparent', border: '1px solid var(--border-strong)', color: 'var(--accent-strong)' },
    filled: { background: 'var(--gradient-gold)', border: 'none', color: 'var(--text-on-gold)', boxShadow: 'var(--sheen-gold)' },
  };
  return (
    <button
      type="button"
      aria-label={label || name}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, borderRadius: 'var(--radius-pill)',
        cursor: 'pointer', transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
        ...(variants[variant] || variants.ghost), ...style,
      }}
      {...rest}
    >
      <Icon name={name} size={Math.round(size * 0.44)} />
    </button>
  );
}
