import type { Metadata } from "next";
import { SectionHeading } from "@/design-system";
import { Catalog } from "@/components/site/Catalog";
import { Reveal } from "@/components/site/Reveal";
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
      <section className="pt-18 pb-14 px-5 sm:px-8 lg:px-10 text-center bg-[radial-gradient(ellipse_50%_80%_at_center,rgba(250,246,238,0.88)_0%,rgba(250,246,238,0.6)_55%,rgba(250,246,238,0)_100%),url(/sevanna/images/cursos/portadacursos.jpg)] bg-cover bg-center">
        <Reveal className="flex justify-center">
          <SectionHeading
            light
            eyebrow="Catálogo"
            title="Todos nuestros cursos"
            subtitle="Programas guiados por niveles, con materiales definidos y objetivos claros."
          />
        </Reveal>
      </section>
      {courses ? (
        <Catalog items={courses} categories={uniqueCategories(courses)} basePath="/cursos" />
      ) : (
        <p className="max-w-content mx-auto pt-0 px-5 sm:px-8 lg:px-10 pb-24 text-center font-serif text-xl text-muted">
          No pudimos cargar los cursos en este momento. Intenta de nuevo en unos minutos.
        </p>
      )}
    </>
  );
}
