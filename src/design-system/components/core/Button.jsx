"use client";

import React from "react";

/**
 * Sevanna primary action. Emerald fill for primary, emerald outline for
 * secondary, quiet ghost for tertiary. Montserrat with brand tracking.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "9px 18px", font: "var(--fs-caption)" },
    md: { padding: "13px 26px", font: "var(--fs-label)" },
    lg: { padding: "17px 36px", font: "var(--fs-body-sm)" },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    width: fullWidth ? "100%" : "auto",
    padding: s.padding,
    fontFamily: "var(--font-sans)",
    fontSize: s.font,
    fontWeight: "var(--fw-semibold)",
    letterSpacing: "var(--ls-label)",
    textTransform: "none",
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    border: "1px solid transparent",
    transition:
      "transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)",
    whiteSpace: "nowrap",
  };

  const variants = {
    primary: {
      background: "var(--emerald-600)",
      color: "var(--gold-100)",
      boxShadow: "none",
    },
    secondary: {
      background: "transparent",
      color: "var(--accent-strong)",
      borderColor: "var(--border-strong)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      letterSpacing: "var(--ls-label)",
    },
    solid: {
      background: "var(--emerald-700)",
      color: "var(--gold-100)",
      borderColor: "var(--border-hairline)",
    },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      style={{ ...base, ...(variants[variant] || variants.primary), ...style }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
