"use client";

import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Accordion for FAQ / temario. items: [{title, content}]. */
export function Accordion({ items = [], defaultOpen = 0, style = {} }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", width: "100%", ...style }}
    >
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            style={{
              border: "1px solid var(--border-hairline)",
              borderRadius: "var(--radius-md)",
              background: "var(--surface-card)",
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "var(--space-4)",
                padding: "var(--space-4) var(--space-5)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "var(--font-serif)",
                fontSize: "21px",
                fontWeight: "var(--fw-semibold)",
                color: "var(--text-strong)",
              }}
            >
              <span>{it.title}</span>
              <span
                style={{
                  flex: "0 0 auto",
                  color: "var(--accent-strong)",
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform var(--dur-base) var(--ease-standard)",
                }}
              >
                <Icon name="plus" size={20} />
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? 400 : 0,
                transition: "max-height var(--dur-slow) var(--ease-standard)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "0 var(--space-5) var(--space-5)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--fs-body-sm)",
                  lineHeight: "var(--lh-body)",
                  color: "var(--text-muted)",
                }}
              >
                {it.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
