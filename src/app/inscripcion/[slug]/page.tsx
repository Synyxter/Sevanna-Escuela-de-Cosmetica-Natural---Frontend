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
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "72px 40px 96px",
        background: "linear-gradient(180deg,var(--cream-50),var(--cream-100))",
      }}
    >
      <Card
        light
        style={{
          width: "100%",
          maxWidth: 560,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          textAlign: "center",
          padding: "44px 40px",
        }}
      >
        <span
          style={{
            width: 76,
            height: 76,
            borderRadius: "var(--radius-pill)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(37,211,102,0.12)",
            border: "1px solid rgba(37,211,102,0.4)",
            color: "#1FA855",
          }}
        >
          <Icon name="message-circle" size={38} />
        </span>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          <Badge tone="gold">Último paso</Badge>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              fontSize: "clamp(30px,4vw,44px)",
              lineHeight: 1.12,
              color: "var(--emerald-900)",
            }}
          >
            Para completar tu inscripción, contáctanos por WhatsApp
          </h1>
          <p style={{ margin: 0, maxWidth: 420, fontFamily: "var(--font-serif)", fontSize: 20, lineHeight: 1.55, color: "var(--ink-700)" }}>
            Reservaste <em style={{ color: "var(--accent-strong)" }}>{program.title}</em>. Termina tu registro en un
            breve chat con nuestro equipo.
          </p>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            textAlign: "left",
            padding: "20px 0",
            borderTop: "1px solid var(--divider)",
            borderBottom: "1px solid var(--divider)",
          }}
        >
          {STEPS.map(([icon, title, description]) => (
            <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span
                style={{
                  flex: "0 0 auto",
                  width: 34,
                  height: 34,
                  borderRadius: "var(--radius-pill)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-strong)",
                  border: "1px solid var(--border-strong)",
                }}
              >
                <Icon name={icon} size={17} />
              </span>
              <div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: "var(--text-strong)" }}>
                  {title}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.5, color: "var(--text-muted)" }}>
                  {description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "16px 26px",
            borderRadius: "var(--radius-pill)",
            background: "#25D366",
            color: "#08210F",
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "var(--ls-eyebrow)",
            textTransform: "uppercase",
            boxShadow: "0 8px 24px rgba(37,211,102,0.35)",
          }}
        >
          <Icon name="message-circle" size={20} color="#08210F" /> Escribir por WhatsApp
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
