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
    <section className="min-h-[60vh] flex flex-col items-center justify-center gap-6 py-24 px-10 text-center">
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
