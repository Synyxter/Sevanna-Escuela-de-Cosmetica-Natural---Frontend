import type { Metadata } from "next";
import { SectionHeading } from "@/design-system";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Sevanna es una academia de cosmética natural: conocimiento, creatividad y elaboración artesanal.",
};

export default function AboutPage() {
  return (
    <section className="max-w-narrow mx-auto pt-22 px-10 pb-24">
      <SectionHeading
        light
        align="left"
        eyebrow="Academia de Cosmética Natural"
        title="Sobre Sevanna"
      />
      <div className="mt-7 flex flex-col gap-5 font-serif text-xl leading-[1.7] text-ink-700">
        <p>
          Sevanna es una academia especializada en cosmética natural. Ofrecemos cursos y talleres
          —presenciales, virtuales e híbridos— para aprender a elaborar velas, jabones, labiales,
          desodorantes, productos para el cuidado de la piel y otros cosméticos artesanales, en
          niveles básico, intermedio y avanzado.
        </p>
        <p>
          Combinamos conocimiento, creatividad y elaboración artesanal en una experiencia educativa
          cercana, elegante y especializada. Cada curso incluye materiales definidos, objetivos
          claros y práctica guiada.
        </p>
      </div>
    </section>
  );
}
