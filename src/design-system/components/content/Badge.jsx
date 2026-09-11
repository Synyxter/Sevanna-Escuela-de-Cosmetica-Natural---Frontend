"use client";

import React from "react";

/** Small status/level pill. Tones map to course levels & semantics. */
export function Badge({ tone = "gold", children, style = {} }) {
  const tones = {
    gold: { color: "var(--emerald-800)", border: "var(--border-strong)", bg: "rgba(198,159,83,0.22)" },
    emerald: { color: "var(--emerald-100)", border: "var(--divider)", bg: "rgba(53,122,88,0.18)" },
    basic: { color: "var(--emerald-100)", border: "rgba(127,185,154,0.4)", bg: "rgba(53,122,88,0.16)" },
    intermediate: { color: "var(--gold-200)", border: "var(--border-strong)", bg: "rgba(198,159,83,0.12)" },
    advanced: { color: "var(--gold-200)", border: "transparent", bg: "var(--emerald-900)", solid: true },
    success: { color: "#CFE9D9", border: "rgba(53,122,88,0.5)", bg: "rgba(53,122,88,0.18)" },
    danger: { color: "#F0C9C3", border: "rgba(166,58,46,0.5)", bg: "rgba(166,58,46,0.16)" },
  };
  const t = tones[tone] || tones.gold;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-1)",
        padding: "5px 12px",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-caption)",
        fontWeight: "var(--fw-semibold)",
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        color: t.color,
        background: t.bg,
        border: `1px solid ${t.border}`,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
