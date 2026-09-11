import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CatalogItem } from "@/components/site/Catalog";
import { ProgramDetail } from "@/components/site/ProgramDetail";
import { ApiError, safe } from "@/lib/api";
import { courseIncludes, getCourseDetail, getCourses } from "@/lib/courses";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const courses: CatalogItem[] = await safe(getCourses(), []);
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const data = await safe(getCourseDetail(slug), null);
  if (!data) return {};
  return { title: data.program.title, description: data.program.blurb };
}

export default async function CoursePage({ params }: Params) {
  const { slug } = await params;

  let data;
  try {
    data = await getCourseDetail(slug);
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) notFound();
    throw err;
  }
  if (!data) notFound();

  return (
    <ProgramDetail
      program={data.program}
      basePath="/cursos"
      backLabel="Volver al catálogo"
      outline={data.outline}
      outlineEyebrow="Sobre el curso"
      outlineTitle="Lo que aprenderás"
      includes={courseIncludes}
      downloadLabel="Descargar temario (PDF)"
    />
  );
}
