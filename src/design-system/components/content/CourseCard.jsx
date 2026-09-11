"use client";

import { Badge } from "./Badge.jsx";
import { Icon } from "../core/Icon.jsx";

/**
 * Course catalog card — image well, level badge, title, meta row, price.
 * The image well shows an emerald-to-gold placeholder unless `image` is given.
 */
export function CourseCard({
  title = "Curso",
  level = "basic",
  levelLabel = "Básico",
  modality = "Presencial",
  duration = "4 h",
  price = "",
  image = "",
  category = "",
  onClick,
  className = "",
}) {
  return (
    <div
      onClick={onClick}
      className={[
        "flex flex-col overflow-hidden bg-card border border-hairline rounded-lg shadow-sm",
        "transition-[transform_var(--dur-base)_var(--ease-out),box-shadow_var(--dur-base)_var(--ease-standard)]",
        "hover:shadow-lg hover:-translate-y-1",
        onClick ? "cursor-pointer" : "cursor-default",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="relative aspect-4/3 overflow-hidden"
        style={{
          background: image
            ? `center/cover no-repeat url(${image})`
            : "linear-gradient(160deg,var(--emerald-500),var(--emerald-600))",
        }}
      >
        {!image && (
          <span className="absolute inset-0 flex items-center justify-center text-gold-400">
            <Icon name="flower-2" size={48} strokeWidth={1} />
          </span>
        )}
        {image && (
          <span className="absolute inset-x-0 top-0 h-[46%] pointer-events-none bg-[linear-gradient(180deg,rgba(8,26,15,0.55),transparent)]" />
        )}
        <span
          className={[
            "absolute top-3.5 left-3.5 rounded-full",
            image ? "backdrop-blur-[6px] backdrop-saturate-140 shadow-[0_2px_10px_rgba(8,26,15,0.45)]" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Badge tone={level}>{levelLabel}</Badge>
        </span>
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        {category && (
          <span className="font-sans text-xs tracking-eyebrow uppercase text-accent-strong">{category}</span>
        )}
        <h3 className="m-0 font-serif font-semibold text-2xl leading-heading text-emerald-700">{title}</h3>
        <div className="flex gap-4 mt-auto text-muted font-sans text-caption tracking-label">
          {modality && (
            <span className="inline-flex items-center gap-1.5">
              <Icon name="map-pin" size={14} />
              {modality}
            </span>
          )}
          {duration && (
            <span className="inline-flex items-center gap-1.5">
              <Icon name="clock" size={14} />
              {duration}
            </span>
          )}
        </div>
        {price && (
          <div className="mt-2 pt-3 border-t border-divider font-display text-xl text-accent-strong tracking-[0.04em]">
            {price}
          </div>
        )}
      </div>
    </div>
  );
}
