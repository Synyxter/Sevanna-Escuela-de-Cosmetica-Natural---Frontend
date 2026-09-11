"use client";

import React from "react";

const TONES = {
  gold: "text-emerald-800 border-border-strong bg-[rgba(198,159,83,0.22)]",
  emerald: "text-emerald-100 border-divider bg-[rgba(53,122,88,0.18)]",
  basic: "text-emerald-100 border-[rgba(127,185,154,0.4)] bg-[rgba(53,122,88,0.16)]",
  intermediate: "text-gold-200 border-border-strong bg-[rgba(198,159,83,0.12)]",
  advanced: "text-gold-200 border-transparent bg-emerald-900",
  success: "text-[#CFE9D9] border-[rgba(53,122,88,0.5)] bg-[rgba(53,122,88,0.18)]",
  danger: "text-[#F0C9C3] border-[rgba(166,58,46,0.5)] bg-[rgba(166,58,46,0.16)]",
};

/** Small status/level pill. Tones map to course levels & semantics. */
export function Badge({ tone = "gold", children, className = "" }) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1 py-1.25 px-3 rounded-full border",
        "font-sans text-caption font-semibold tracking-label uppercase",
        TONES[tone] || TONES.gold,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
