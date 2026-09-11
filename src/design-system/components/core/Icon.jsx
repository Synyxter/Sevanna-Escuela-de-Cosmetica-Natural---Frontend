"use client";

import { DynamicIcon } from "lucide-react/dynamic";

/**
 * Thin-line icon wrapper around Lucide, rendered at stroke-width 1.5 to match
 * the delicate line quality of the Sevanna mark.
 *
 * Source used a CDN + `window.lucide`; here it wraps `lucide-react` so icons are
 * bundled and SSR-safe. `name` stays kebab-case (e.g. "flower-2", "map-pin").
 */
export function Icon({
  name = "sparkles",
  size = 20,
  strokeWidth = 1.5,
  color = "currentColor",
  style = {},
  ...rest
}) {
  return (
    <span
      aria-hidden="true"
      style={{ display: "inline-flex", color, width: size, height: size, ...style }}
      {...rest}
    >
      <DynamicIcon name={name} size={size} strokeWidth={strokeWidth} />
    </span>
  );
}
