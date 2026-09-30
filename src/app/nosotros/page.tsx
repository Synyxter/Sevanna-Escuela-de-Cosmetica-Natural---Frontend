import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/design-system";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Sevanna es una academia de cosmética natural: conocimiento, creatividad y elaboración artesanal.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream-200">
      <section className="max-w-content mx-auto pt-22 px-5 sm:px-8 lg:px-10 pb-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] gap-10 lg:gap-14 items-center">
        <div>
          <Reveal>
            <SectionHeading
              light
              align="left"
              eyebrow="Academia de Cosmética Natural"
              title="Sobre Sevanna"
            />
          </Reveal>
          <div className="mt-7 flex flex-col gap-5 font-serif text-xl leading-[1.7] text-ink-700">
            <Reveal delay={0.12}>
              <p>
                Sevanna es una academia especializada en cosmética natural. Ofrecemos cursos y talleres
                —presenciales, virtuales e híbridos— para aprender a elaborar velas, jabones, labiales,
                desodorantes, productos para el cuidado de la piel y otros cosméticos artesanales, en
                niveles básico, intermedio y avanzado.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p>
                Combinamos conocimiento, creatividad y elaboración artesanal en una experiencia
                educativa cercana, elegante y especializada. Cada curso incluye materiales definidos,
                objetivos claros y práctica guiada.
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.2}>
          <figure className="m-0 w-full max-w-105 mx-auto">
            <Image
              src="/sevanna/foto-señora.jpg"
              alt="Martha Cartagena con bata blanca en su taller de cosmética natural"
              width={1075}
              height={1463}
              sizes="(min-width: 1024px) 420px, 100vw"
              className="w-full h-auto rounded-lg border border-hairline"
            />
            <figcaption className="mt-4 text-center font-serif italic text-lg text-ink-700">
              Martha Cartagena, fundadora de Sevanna
            </figcaption>
          </figure>
        </Reveal>
      </section>
    </div>
  );
}
