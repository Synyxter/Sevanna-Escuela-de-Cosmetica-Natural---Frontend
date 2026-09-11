import React from 'react';

/** Text input with elegant hairline underline-plus-box treatment and a floating eyebrow label. */
export function Input({ label = '', placeholder = '', type = 'text', value, defaultValue, error = '', hint = '', disabled = false, style = {}, ...rest }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', width: '100%' }}>
      {label && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-eyebrow)', fontWeight: 'var(--fw-semibold)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        style={{
          width: '100%', boxSizing: 'border-box',
          padding: '13px 16px',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-sm)',
          color: 'var(--text-body)', background: 'var(--surface-inset)',
          border: `1px solid ${error ? 'var(--danger)' : 'var(--border-hairline)'}`,
          borderRadius: 'var(--radius-sm)', outline: 'none',
          transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
          opacity: disabled ? 0.55 : 1, ...style,
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = error ? 'var(--danger)' : 'var(--border-hairline)'; e.currentTarget.style.boxShadow = 'none'; }}
        {...rest}
      />
      {(error || hint) && (
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-caption)', color: error ? 'var(--danger)' : 'var(--text-muted)' }}>{error || hint}</span>
      )}
    </label>
  );
}
