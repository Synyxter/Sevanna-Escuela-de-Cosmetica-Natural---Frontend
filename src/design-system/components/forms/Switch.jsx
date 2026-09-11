"use client";

import React from "react";

/** Toggle switch — gold track when on. */
export function Switch({ checked, defaultChecked, disabled = false, onChange, label = "", className = "" }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  return (
    <label
      className={[
        "inline-flex items-center gap-3",
        disabled ? "cursor-not-allowed opacity-55" : "cursor-pointer",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        onClick={() => {
          if (disabled) return;
          if (!isControlled) setInternal(!on);
          if (onChange) onChange(!on);
        }}
        className={[
          "relative grow-0 shrink-0 w-11.5 h-6.5 rounded-full border border-hairline",
          "transition-colors duration-240 ease-standard",
          on ? "bg-(image:--gradient-gold)" : "bg-emerald-700",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-0.5 w-5 h-5 rounded-full shadow-xs transition-[left] duration-240 ease-out",
            on ? "left-5.5 bg-emerald-950" : "left-0.5 bg-gold-100",
          ].join(" ")}
        />
      </span>
      {label && <span className="font-sans text-sm text-body">{label}</span>}
    </label>
  );
}
