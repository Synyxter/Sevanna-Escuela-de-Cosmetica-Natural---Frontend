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
      className={[
        "inline-flex items-center gap-3",
        disabled ? "cursor-not-allowed opacity-55" : "cursor-pointer",
      ].join(" ")}
      style={style}
    >
      <span
        onClick={() => {
          if (disabled) return;
          if (!isControlled) setInternal(!on);
          if (onChange) onChange(!on);
        }}
        className={[
          "inline-flex w-5.5 h-5.5 shrink-0 items-center justify-center rounded-xs border",
          "text-on-gold transition-colors duration-240 ease-standard",
          on ? "border-transparent bg-(image:--gradient-gold)" : "border-border-strong bg-inset",
        ].join(" ")}
      >
        {on && <Icon name="check" size={15} strokeWidth={2.4} />}
      </span>
      {label && <span className="font-sans text-sm text-body">{label}</span>}
    </label>
  );
}
