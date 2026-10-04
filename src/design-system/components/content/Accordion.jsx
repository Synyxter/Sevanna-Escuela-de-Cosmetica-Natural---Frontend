"use client";

import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Accordion for FAQ / temario. items: [{title, content}]. */
export function Accordion({ items = [], defaultOpen = 0, className = "" }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className={["flex flex-col gap-2 w-full", className].filter(Boolean).join(" ")}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border border-hairline rounded-md bg-card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 py-4 px-6 bg-transparent border-none cursor-pointer text-left font-serif text-[21px] font-semibold text-strong"
            >
              <span>{it.title}</span>
              <span
                className={[
                  "flex-none text-accent-strong transition-transform duration-240 ease-standard",
                  isOpen ? "rotate-45" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <Icon name="plus" size={20} />
              </span>
            </button>
            <div
              className={[
                "overflow-hidden transition-[max-height] duration-420 ease-standard",
                isOpen ? "max-h-100" : "max-h-0",
              ].join(" ")}
            >
              <div className="px-6 pb-6 font-sans text-sm leading-body text-muted">{it.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
