import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CatalogItem } from "@/components/site/Catalog";
import { ProgramDetail } from "@/components/site/ProgramDetail";
import { ApiError, safe } from "@/lib/api";
import { getTallerDetail, getTalleres, tallerIncludes } from "@/lib/talleres";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const talleres: CatalogItem[] = await safe(getTalleres(), []);
  return talleres.map((taller) => ({ slug: taller.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const data = await safe(getTallerDetail(slug), null);
  if (!data) return {};
  return { title: data.program.title, description: data.program.blurb };
}

export default async function TallerPage({ params }: Params) {
  const { slug } = await params;

  let data;
  try {
    data = await getTallerDetail(slug);
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) notFound();
    throw err;
  }
  if (!data) notFound();

  return (
    <ProgramDetail
      program={data.program}
      basePath="/talleres"
      backLabel="Volver a los talleres"
      outline={data.outline}
      outlineEyebrow="Sobre el taller"
      outlineTitle="Lo que harás en el taller"
      includes={tallerIncludes}
      downloadLabel="Descargar agenda (PDF)"
    />
  );
}
