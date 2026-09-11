import type { Metadata } from "next";
import { SectionHeading } from "@/design-system";
import { Catalog } from "@/components/site/Catalog";
import { safe } from "@/lib/api";
import { getTalleres } from "@/lib/talleres";
import { uniqueCategories } from "@/lib/mapping";

export const metadata: Metadata = {
  title: "Talleres",
  description:
    "Sesiones cortas y prácticas de cosmética natural: creas y te llevas tu producto el mismo día.",
};

export default async function TalleresPage() {
  const talleres = await safe(getTalleres(), null);

  return (
    <>
      <section
        style={{
          padding: "72px 40px 56px",
          textAlign: "center",
          background: "linear-gradient(180deg,var(--cream-50),var(--cream-100))",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SectionHeading
            light
            eyebrow="Talleres"
            title="Crea en una sola sesión"
            subtitle="Encuentros cortos y guiados para elaborar tu producto y llevártelo el mismo día."
          />
        </div>
      </section>
      {talleres ? (
        <Catalog items={talleres} categories={uniqueCategories(talleres)} basePath="/talleres" />
      ) : (
        <p
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            padding: "0 40px 96px",
            textAlign: "center",
            fontFamily: "var(--font-serif)",
            fontSize: 20,
            color: "var(--text-muted)",
          }}
        >
          No pudimos cargar los talleres en este momento. Intenta de nuevo en unos minutos.
        </p>
      )}
    </>
  );
}
