import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramDetail } from "@/components/site/ProgramDetail";
import { courseIncludes, courses, getCourse, temario } from "@/lib/courses";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return { title: course.title, description: course.blurb };
}

export default async function CoursePage({ params }: Params) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <ProgramDetail
      program={course}
      basePath="/cursos"
      backLabel="Volver al catálogo"
      outline={temario}
      outlineEyebrow="Temario"
      outlineTitle="Lo que aprenderás"
      includes={courseIncludes}
      downloadLabel="Descargar temario (PDF)"
    />
  );
}
