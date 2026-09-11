"use client";

import React from "react";

/** Filter/category chip. Selectable variant used in course filters. */
export function Tag({ children, selected = false, onClick, style = {} }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        padding: "8px 16px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-label)",
        fontWeight: "var(--fw-medium)",
        letterSpacing: "var(--ls-label)",
        color: selected ? "var(--gold-100)" : "var(--text-muted)",
        background: selected ? "var(--emerald-700)" : "transparent",
        border: `1px solid ${selected ? "transparent" : "var(--border-hairline)"}`,
        transition: "all var(--dur-base) var(--ease-standard)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
