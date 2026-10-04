"use client";

import { useEffect, useState } from "react";
import { IconButton } from "@/design-system";

/** Floating "back to top" button that appears once the visitor scrolls down a screen. */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <IconButton
      name="arrow-up"
      label="Volver arriba"
      variant="filled"
      size={48}
      onClick={scrollUp}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={[
        "fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-30 transition-all duration-240 ease-standard",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
      ].join(" ")}
    />
  );
}
