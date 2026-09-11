"use client";

import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Checkbox with gold check. Controlled via `checked` or uncontrolled default. */
export function Checkbox({ label = "", checked, defaultChecked, disabled = false, onChange, style = {} }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.55 : 1,
        ...style,
      }}
    >
      <span
        onClick={() => {
          if (disabled) return;
          if (!isControlled) setInternal(!on);
          if (onChange) onChange(!on);
        }}
        style={{
          width: 22,
          height: 22,
          flex: "0 0 22px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--radius-xs)",
          border: `1px solid ${on ? "transparent" : "var(--border-strong)"}`,
          background: on ? "var(--gradient-gold)" : "var(--surface-inset)",
          color: "var(--text-on-gold)",
          transition: "background var(--dur-base) var(--ease-standard)",
        }}
      >
        {on && <Icon name="check" size={15} strokeWidth={2.4} />}
      </span>
      {label && (
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>
          {label}
        </span>
      )}
    </label>
  );
}
