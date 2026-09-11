"use client";

/** Generic surface container. Emerald by default; `light` for cream surfaces. */
export function Card({ children, padded = true, light = false, hover = false, className = "", ...rest }) {
  return (
    <div
      className={[
        light ? "on-light" : "",
        "bg-card border border-hairline rounded-lg shadow-sm text-body",
        "transition-[transform_var(--dur-base)_var(--ease-out),box-shadow_var(--dur-base)_var(--ease-standard)]",
        padded ? "p-8" : "p-0",
        hover ? "hover:shadow-lg hover:-translate-y-0.75" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}
