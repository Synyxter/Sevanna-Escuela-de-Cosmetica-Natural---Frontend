"use client";

import React from "react";
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
  style = {},
}) {
  const [h, setH] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        background: "var(--surface-card)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-lg)",
        boxShadow: h ? "var(--shadow-lg)" : "var(--shadow-sm)",
        transform: h ? "translateY(-4px)" : "none",
        transition:
          "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-standard)",
        ...style,
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "4 / 3",
          overflow: "hidden",
          background: image
            ? `center/cover no-repeat url(${image})`
            : "linear-gradient(160deg,var(--emerald-500),var(--emerald-600))",
        }}
      >
        {!image && (
          <span
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--gold-400)",
            }}
          >
            <Icon name="flower-2" size={48} strokeWidth={1} />
          </span>
        )}
        {image && (
          <span
            style={{
              position: "absolute",
              insetInline: 0,
              top: 0,
              height: "46%",
              background: "linear-gradient(180deg, rgba(8,26,15,0.55), transparent)",
              pointerEvents: "none",
            }}
          />
        )}
        <span
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            borderRadius: "var(--radius-pill)",
            backdropFilter: image ? "saturate(140%) blur(6px)" : "none",
            WebkitBackdropFilter: image ? "saturate(140%) blur(6px)" : "none",
            boxShadow: image ? "0 2px 10px rgba(8,26,15,0.45)" : "none",
          }}
        >
          <Badge tone={level}>{levelLabel}</Badge>
        </span>
      </div>
      <div
        style={{
          padding: "var(--space-5)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
          flex: 1,
        }}
      >
        {category && (
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "var(--fs-eyebrow)",
              letterSpacing: "var(--ls-eyebrow)",
              textTransform: "uppercase",
              color: "var(--accent-strong)",
            }}
          >
            {category}
          </span>
        )}
        <h3
          style={{
            margin: 0,
            fontFamily: "var(--font-serif)",
            fontWeight: "var(--fw-semibold)",
            fontSize: "24px",
            lineHeight: "var(--lh-heading)",
            color: "var(--emerald-700)",
          }}
        >
          {title}
        </h3>
        <div
          style={{
            display: "flex",
            gap: "var(--space-4)",
            marginTop: "auto",
            color: "var(--text-muted)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-caption)",
            letterSpacing: "var(--ls-label)",
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Icon name="map-pin" size={14} />
            {modality}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Icon name="clock" size={14} />
            {duration}
          </span>
        </div>
        {price && (
          <div
            style={{
              marginTop: "var(--space-2)",
              paddingTop: "var(--space-3)",
              borderTop: "1px solid var(--divider)",
              fontFamily: "var(--font-display)",
              fontSize: "20px",
              color: "var(--accent-strong)",
              letterSpacing: "0.04em",
            }}
          >
            {price}
          </div>
        )}
      </div>
    </div>
  );
}
