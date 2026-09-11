"use client";

import React from "react";

/** Filter/category chip. Selectable variant used in course filters. */
export function Tag({ children, selected = false, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 py-2 px-4 rounded-full cursor-pointer border",
        "font-sans text-label font-medium tracking-label transition-all duration-240 ease-standard",
        selected ? "text-gold-100 bg-emerald-700 border-transparent" : "text-muted bg-transparent border-hairline",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}
