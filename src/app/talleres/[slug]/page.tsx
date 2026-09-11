import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgramDetail } from "@/components/site/ProgramDetail";
import { agenda, getTaller, tallerIncludes, talleres } from "@/lib/talleres";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return talleres.map((taller) => ({ slug: taller.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const taller = getTaller(slug);
  if (!taller) return {};
  return { title: taller.title, description: taller.blurb };
}

export default async function TallerPage({ params }: Params) {
  const { slug } = await params;
  const taller = getTaller(slug);
  if (!taller) notFound();

  return (
    <ProgramDetail
      program={taller}
      basePath="/talleres"
      backLabel="Volver a los talleres"
      outline={agenda}
      outlineEyebrow="Agenda de la sesión"
      outlineTitle="Lo que harás en el taller"
      includes={tallerIncludes}
      downloadLabel="Descargar agenda (PDF)"
    />
  );
}
