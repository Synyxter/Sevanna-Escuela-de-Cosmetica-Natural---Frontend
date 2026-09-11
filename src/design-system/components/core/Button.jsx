"use client";

/**
 * Sevanna primary action. Emerald fill for primary, emerald outline for
 * secondary, quiet ghost for tertiary. Montserrat with brand tracking.
 */
const SIZES = {
  sm: "py-2.25 px-4.5 text-caption",
  md: "py-3.25 px-6.5 text-label",
  lg: "py-4.25 px-9 text-sm",
};

const VARIANTS = {
  primary: "bg-emerald-600 text-gold-100 shadow-none border-transparent",
  secondary: "bg-transparent text-accent-strong border-border-strong",
  ghost: "bg-transparent text-muted tracking-label border-transparent",
  solid: "bg-emerald-700 text-gold-100 border-hairline",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  className = "",
  ...rest
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-label",
        "leading-none normal-case rounded-full border whitespace-nowrap",
        "transition-[transform_var(--dur-fast)_var(--ease-standard),box-shadow_var(--dur-base)_var(--ease-standard),background_var(--dur-base)_var(--ease-standard)]",
        "not-disabled:hover:-translate-y-px",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        fullWidth ? "w-full" : "w-auto",
        SIZES[size] || SIZES.md,
        VARIANTS[variant] || VARIANTS.primary,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
