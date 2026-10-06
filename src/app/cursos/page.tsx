import type { Metadata } from "next";
import { SectionHeading } from "@/design-system";
import { Catalog } from "@/components/site/Catalog";
import { Reveal } from "@/components/site/Reveal";
import { safe } from "@/lib/api";
import { getCourses } from "@/lib/courses";
import { uniqueCategories } from "@/lib/mapping";

// Regenera la página como máximo cada 5 minutos aunque el fetch a la API falle
// durante el build (si no, Next la congela como estática con el mensaje de error).
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Cursos",
  description:
    "Programas completos para aprender cosmética natural desde cero hasta nivel profesional.",
};

export default async function CoursesPage() {
  const courses = await safe(getCourses(), null);

  return (
    <>
      <section className="pt-18 pb-14 px-5 sm:px-8 lg:px-10 text-center bg-[url(/sevanna/images/cursos/portadacursos.jpg)] bg-cover bg-center">
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
