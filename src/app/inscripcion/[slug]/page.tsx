import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CatalogItem } from "@/components/site/Catalog";
import { Badge, Button, Card, Icon } from "@/design-system";
import { ApiError, safe } from "@/lib/api";
import { WHATSAPP_NUMBER } from "@/lib/config";
import { getAllPrograms, getProgramBySlug, kindMeta } from "@/lib/programs";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const programs: CatalogItem[] = await safe(getAllPrograms(), []);
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const data = await safe(getProgramBySlug(slug), null);
  return { title: data ? `Inscripción · ${data.program.title}` : "Inscripción" };
}

const STEPS: [string, string, string][] = [
  ["message-circle", "Escríbenos por WhatsApp", "Toca el botón y se abrirá un chat con tu inscripción ya seleccionada."],
  ["credit-card", "Confirma tu cupo", "Te compartimos los medios de pago y aseguramos tu lugar."],
  ["sparkles", "¡Nos vemos!", "Recibirás los detalles, materiales y fecha de inicio."],
];

export default async function EnrollPage({ params }: Params) {
  const { slug } = await params;

  let data;
  try {
    data = await getProgramBySlug(slug);
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) notFound();
    throw err;
  }

  const { program } = data;
  const { label: kindLabel, basePath } = kindMeta(program.kind);

  const message = encodeURIComponent(
    `¡Hola Sevanna! Quiero completar mi inscripción al ${kindLabel} "${program.title}" (${program.levelLabel} · ${program.modality}). ¿Me ayudan con los pasos?`,
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-18 px-5 sm:px-8 lg:px-10 pb-24 bg-[linear-gradient(180deg,var(--cream-50),var(--cream-100))]">
      <Card light className="w-full max-w-140 flex flex-col items-center gap-6 text-center py-8 sm:py-11 px-6 sm:px-10">
        <span className="w-19 h-19 rounded-full flex items-center justify-center bg-[rgba(37,211,102,0.12)] border border-[rgba(37,211,102,0.4)] text-[#1FA855]">
          <img src="https://cdn.simpleicons.org/whatsapp/25D366" alt="WhatsApp" width={38} height={38} />
        </span>

        <div className="flex flex-col gap-3 items-center">
          <Badge tone="gold">Último paso</Badge>
          <h1 className="m-0 font-serif font-semibold text-[clamp(30px,4vw,44px)] leading-[1.12] text-emerald-900">
            Para completar tu inscripción, contáctanos por WhatsApp
          </h1>
          <p className="m-0 max-w-105 font-serif text-xl leading-[1.55] text-ink-700">
            Reservaste <em className="text-accent-strong">{program.title}</em>. Termina tu registro en un
            breve chat con nuestro equipo.
          </p>
        </div>

        <div className="w-full flex flex-col gap-3.5 text-left py-5 px-0 border-t border-b border-divider">
          {STEPS.map(([icon, title, description]) => (
            <div key={title} className="flex gap-3.5 items-start">
              <span className="flex-none w-8.5 h-8.5 rounded-full flex items-center justify-center text-accent-strong border border-border-strong">
                <Icon name={icon} size={17} />
              </span>
              <div>
                <div className="font-sans text-[15px] font-semibold text-strong">{title}</div>
                <div className="font-sans text-[13.5px] leading-normal text-muted">{description}</div>
              </div>
            </div>
          ))}
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6.5 rounded-full bg-[#25D366] text-[#08210F] font-sans text-sm font-semibold tracking-eyebrow uppercase shadow-[0_8px_24px_rgba(37,211,102,0.35)]"
        >
          <img src="https://cdn.simpleicons.org/whatsapp/08210F" alt="" width={20} height={20} /> Escribir por WhatsApp
        </a>

        <Link href={`${basePath}/${program.slug}`}>
          <Button variant="ghost" size="sm" iconLeft={<Icon name="arrow-left" size={15} />}>
            Volver al {kindLabel}
          </Button>
        </Link>
      </Card>
    </section>
  );
}
