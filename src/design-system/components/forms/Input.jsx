"use client";

import React from "react";

/** Text input with hairline box treatment and a floating eyebrow label. */
export function Input({
  label = "",
  placeholder = "",
  type = "text",
  value,
  defaultValue,
  error = "",
  hint = "",
  disabled = false,
  className = "",
  ...rest
}) {
  return (
    <label className="flex flex-col gap-2 w-full">
      {label && (
        <span className="font-sans text-xs font-semibold tracking-label uppercase text-muted">{label}</span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        className={[
          "box-border w-full py-3.25 px-4 font-sans text-sm text-body bg-inset border rounded-sm outline-none",
          "transition-[border-color,box-shadow] duration-240 ease-standard",
          "focus:border-accent focus:ring-3 focus:ring-focus-ring",
          error ? "border-danger" : "border-hairline",
          disabled ? "opacity-55" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      />
      {(error || hint) && (
        <span className={["font-sans text-caption", error ? "text-danger" : "text-muted"].join(" ")}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
