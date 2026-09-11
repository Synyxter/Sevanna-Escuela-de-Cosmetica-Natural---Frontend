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
      <section className="pt-18 px-10 pb-14 text-center bg-[linear-gradient(180deg,var(--cream-50),var(--cream-100))]">
        <div className="flex justify-center">
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
        <p className="max-w-content mx-auto pt-0 px-10 pb-24 text-center font-serif text-xl text-muted">
          No pudimos cargar los talleres en este momento. Intenta de nuevo en unos minutos.
        </p>
      )}
    </>
  );
}
