"use client";

import React from "react";
import { Icon } from "./Icon.jsx";

/** Circular icon-only button; ghost by default, gold-outline optional. */
const VARIANTS = {
  ghost: "bg-transparent border border-hairline text-muted",
  gold: "bg-transparent border border-border-strong text-accent-strong",
  filled: "bg-(image:--gradient-gold) border-none text-on-gold shadow-(--sheen-gold)",
};

export function IconButton({
  name = "arrow-right",
  variant = "ghost",
  size = 40,
  label = "",
  disabled = false,
  className = "",
  style,
  ...rest
}) {
  return (
    <button
      type="button"
      aria-label={label || name}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center rounded-full transition-colors duration-240 ease-standard",
        disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
        VARIANTS[variant] || VARIANTS.ghost,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      <Icon name={name} size={Math.round(size * 0.44)} />
    </button>
  );
}
