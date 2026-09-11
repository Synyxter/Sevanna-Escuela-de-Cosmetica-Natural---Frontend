"use client";

import React from "react";

/** Toggle switch — gold track when on. */
export function Switch({ checked, defaultChecked, disabled = false, onChange, label = "", style = {} }) {
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
          width: 46,
          height: 26,
          flex: "0 0 46px",
          borderRadius: "var(--radius-pill)",
          position: "relative",
          background: on ? "var(--gradient-gold)" : "var(--emerald-700)",
          border: "1px solid var(--border-hairline)",
          transition: "background var(--dur-base) var(--ease-standard)",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 2,
            left: on ? 22 : 2,
            width: 20,
            height: 20,
            borderRadius: "var(--radius-pill)",
            background: on ? "var(--emerald-950)" : "var(--gold-100)",
            boxShadow: "var(--shadow-xs)",
            transition: "left var(--dur-base) var(--ease-out)",
          }}
        />
      </span>
      {label && (
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>
          {label}
        </span>
      )}
    </label>
  );
}
