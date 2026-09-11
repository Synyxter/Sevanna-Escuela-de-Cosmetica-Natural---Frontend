import type { Metadata } from "next";
import { SectionHeading } from "@/design-system";
import { Catalog } from "@/components/site/Catalog";
import { safe } from "@/lib/api";
import { getCourses } from "@/lib/courses";
import { uniqueCategories } from "@/lib/mapping";

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Programas completos para aprender cosmética natural desde cero hasta nivel profesional.",
};

export default async function CoursesPage() {
  const courses = await safe(getCourses(), null);

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
      {courses ? (
        <Catalog items={courses} categories={uniqueCategories(courses)} basePath="/cursos" />
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
          No pudimos cargar los cursos en este momento. Intenta de nuevo en unos minutos.
        </p>
      )}
    </>
  );
}
