import type { Metadata } from "next";
import { SectionHeading } from "@/design-system";
import { Catalog } from "@/components/site/Catalog";
import { tallerCategories, talleres } from "@/lib/talleres";

export const metadata: Metadata = {
  title: "Talleres",
  description:
    "Sesiones cortas y prácticas de cosmética natural: creas y te llevas tu producto el mismo día.",
};

export default function TalleresPage() {
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
      <Catalog items={talleres} categories={tallerCategories} basePath="/talleres" />
    </>
  );
}
