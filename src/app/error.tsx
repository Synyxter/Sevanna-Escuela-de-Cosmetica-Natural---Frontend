"use client";

import { useEffect } from "react";
import { Button, SectionHeading } from "@/design-system";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        padding: "96px 40px",
        textAlign: "center",
      }}
    >
      <SectionHeading
        light
        eyebrow="Algo salió mal"
        title="No pudimos cargar esta página"
        subtitle="Puede ser que la API de Sevanna esté despertando (Render la duerme tras un rato sin uso). Intenta de nuevo en unos segundos."
      />
      <Button variant="primary" onClick={reset}>
        Reintentar
      </Button>
    </section>
  );
}
