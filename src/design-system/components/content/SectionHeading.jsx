"use client";

import React from "react";

/**
 * Section header with an uppercase gold eyebrow, a Cormorant serif title, and an
 * optional gold ornament divider echoing the wordmark's rule-with-diamond.
 */
export function SectionHeading({
  eyebrow = "",
  title = "",
  subtitle = "",
  align = "center",
  ornament = true,
  light = false,
  className = "",
}) {
  const centered = align === "center";
  return (
    <div
      className={[
        "flex flex-col gap-3",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && (
        <span className="font-sans text-xs font-semibold tracking-eyebrow uppercase text-accent-strong">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={[
            "m-0 font-serif font-semibold text-h2 leading-heading",
            light ? "text-emerald-900" : "text-strong",
          ].join(" ")}
        >
          {title}
        </h2>
      )}
      {ornament && (
        <span aria-hidden="true" className="inline-flex items-center gap-2 my-0.5 text-accent">
          <span className="w-13.5 h-px bg-[linear-gradient(90deg,transparent,var(--accent))]" />
          <span className="w-1.5 h-1.5 rotate-45 bg-accent" />
          <span className="w-13.5 h-px bg-[linear-gradient(90deg,var(--accent),transparent)]" />
        </span>
      )}
      {subtitle && (
        <p className="m-0 max-w-140 font-serif text-lead leading-body text-muted">{subtitle}</p>
      )}
    </div>
  );
}
