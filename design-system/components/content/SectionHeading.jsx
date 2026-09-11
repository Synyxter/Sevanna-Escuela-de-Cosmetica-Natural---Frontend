import React from 'react';

/**
 * Section header with an uppercase gold eyebrow, a Cormorant serif title, and an
 * optional gold ornament divider echoing the wordmark's rule-with-diamond.
 */
export function SectionHeading({ eyebrow = '', title = '', subtitle = '', align = 'center', ornament = true, light = false, style = {} }) {
  const centered = align === 'center';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: centered ? 'center' : 'flex-start', textAlign: centered ? 'center' : 'left', ...style }}>
      {eyebrow && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-eyebrow)', fontWeight: 'var(--fw-semibold)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--accent-strong)' }}>{eyebrow}</span>
      )}
      {title && (
        <h2 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 'var(--fw-semibold)', fontSize: 'var(--fs-h2)', lineHeight: 'var(--lh-heading)', color: light ? 'var(--emerald-900)' : 'var(--text-strong)' }}>{title}</h2>
      )}
      {ornament && (
        <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, margin: '2px 0', color: 'var(--accent)' }}>
          <span style={{ width: 54, height: 1, background: 'linear-gradient(90deg,transparent,var(--accent))' }} />
          <span style={{ width: 6, height: 6, transform: 'rotate(45deg)', background: 'var(--accent)' }} />
          <span style={{ width: 54, height: 1, background: 'linear-gradient(90deg,var(--accent),transparent)' }} />
        </span>
      )}
      {subtitle && (
        <p style={{ margin: 0, maxWidth: 560, fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-lead)', lineHeight: 'var(--lh-body)', color: 'var(--text-muted)' }}>{subtitle}</p>
      )}
    </div>
  );
}
