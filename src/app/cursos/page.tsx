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
      <section className="pt-18 px-10 pb-14 text-center bg-[linear-gradient(180deg,var(--cream-50),var(--cream-100))]">
        <div className="flex justify-center">
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
        <p className="max-w-content mx-auto pt-0 px-10 pb-24 text-center font-serif text-xl text-muted">
          No pudimos cargar los cursos en este momento. Intenta de nuevo en unos minutos.
        </p>
      )}
    </>
  );
}
