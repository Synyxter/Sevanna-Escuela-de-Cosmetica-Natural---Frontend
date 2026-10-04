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
  className = "",
  ...rest
}) {
  const opts = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  return (
    <label className="flex flex-col gap-2 w-full">
      {label && (
        <span className="font-sans text-xs font-semibold tracking-label uppercase text-muted">{label}</span>
      )}
      <span className="relative block">
        <select
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          className={[
            "box-border w-full appearance-none py-3.25 pl-4 pr-10.5",
            "font-sans text-sm text-body bg-inset border border-hairline rounded-sm outline-none cursor-pointer",
            "transition-[border-color,box-shadow] duration-240 ease-standard",
            "focus:border-accent focus:ring-3 focus:ring-focus-ring",
            disabled ? "opacity-55" : "",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          {...rest}
        >
          {opts.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-accent-strong">
          <Icon name="chevron-down" size={18} />
        </span>
      </span>
    </label>
  );
}
