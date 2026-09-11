import type { Metadata } from "next";
import { SectionHeading } from "@/design-system";
import { Catalog } from "@/components/site/Catalog";
import { categories, courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Programas completos para aprender cosmética natural desde cero hasta nivel profesional.",
};

export default function CoursesPage() {
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
            eyebrow="Catálogo"
            title="Todos nuestros cursos"
            subtitle="Programas guiados por niveles, con materiales definidos y objetivos claros."
          />
        </div>
      </section>
      <Catalog items={courses} categories={categories} basePath="/cursos" />
    </>
  );
}
