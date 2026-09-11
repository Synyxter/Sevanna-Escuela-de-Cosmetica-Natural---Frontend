"use client";

import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Styled select with custom chevron. Options: [{value,label}] or string[]. */
export function Select({
  label = "",
  options = [],
  value,
  defaultValue,
  disabled = false,
  style = {},
  ...rest
}) {
  const opts = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", width: "100%" }}>
      {label && (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-eyebrow)",
            fontWeight: "var(--fw-semibold)",
            letterSpacing: "var(--ls-label)",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          {label}
        </span>
      )}
      <span style={{ position: "relative", display: "block" }}>
        <select
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          style={{
            width: "100%",
            boxSizing: "border-box",
            appearance: "none",
            WebkitAppearance: "none",
            padding: "13px 42px 13px 16px",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-body-sm)",
            color: "var(--text-body)",
            background: "var(--surface-inset)",
            border: "1px solid var(--border-hairline)",
            borderRadius: "var(--radius-sm)",
            outline: "none",
            cursor: "pointer",
            opacity: disabled ? 0.55 : 1,
            ...style,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.boxShadow = "0 0 0 3px var(--focus-ring)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--border-hairline)";
            e.currentTarget.style.boxShadow = "none";
          }}
          {...rest}
        >
          {opts.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span
          style={{
            position: "absolute",
            right: 14,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "var(--accent-strong)",
          }}
        >
          <Icon name="chevron-down" size={18} />
        </span>
      </span>
    </label>
  );
}
