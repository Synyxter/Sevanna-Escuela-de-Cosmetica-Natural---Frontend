import Link from "next/link";
import { Accordion, Badge, Button, Card, Icon, SectionHeading } from "@/design-system";
import type { CatalogItem } from "./Catalog";

type OutlineItem = { title: string; content: string };

export type ProgramDetailProps = {
  program: CatalogItem;
  basePath: string;
  backLabel: string;
  outline: OutlineItem[];
  outlineEyebrow: string;
  outlineTitle: string;
  includes: string[];
  downloadLabel: string;
};

export function ProgramDetail({
  program,
  basePath,
  backLabel,
  outline,
  outlineEyebrow,
  outlineTitle,
  includes,
  downloadLabel,
}: ProgramDetailProps) {
  const meta: [string, string][] = [
    ["map-pin", program.modality],
    ["clock", program.duration],
    ["bar-chart-3", program.levelLabel],
    ["users", "Cupos limitados"],
  ];

  return (
    <>
      <section style={{ background: "linear-gradient(180deg,var(--cream-50),var(--cream-100))", padding: "40px 40px 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
          <Link
            href={basePath}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 28,
            }}
          >
            <Icon name="arrow-left" size={16} /> {backLabel}
          </Link>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: 48,
              alignItems: "center",
              paddingBottom: 56,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", gap: 10 }}>
                <Badge tone={program.level}>{program.levelLabel}</Badge>
                <Badge tone="gold">{program.category}</Badge>
              </div>
              <h1
                style={{
                  margin: 0,
                  fontFamily: "var(--font-serif)",
                  fontWeight: 600,
                  fontSize: "clamp(34px,4.6vw,54px)",
                  lineHeight: 1.1,
                  color: "var(--emerald-900)",
                }}
              >
                {program.title}
              </h1>
              <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontSize: 22, lineHeight: 1.6, color: "var(--ink-700)" }}>
                {program.blurb}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 22, marginTop: 6 }}>
                {meta.map(([icon, text]) => (
                  <span
                    key={text}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      letterSpacing: "0.06em",
                      color: "var(--text-muted)",
                    }}
                  >
                    <Icon name={icon} size={16} color="var(--accent-strong)" />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                aspectRatio: "4/3",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                background: program.image ? `center/cover no-repeat url(${program.image})` : "var(--emerald-800)",
                border: "1px solid var(--border-strong)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--border-strong)",
              }}
            >
              {!program.image && <Icon name="flower-2" size={72} strokeWidth={0.9} />}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "64px 40px 96px",
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: 48,
          alignItems: "start",
        }}
      >
        <div>
          <SectionHeading
            light
            align="left"
            eyebrow={outlineEyebrow}
            title={outlineTitle}
            ornament={false}
            style={{ marginBottom: 28 }}
          />
          <Accordion items={outline} defaultOpen={0} />
        </div>

        <Card
          light
          style={{
            position: "sticky",
            top: 96,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: 20,
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              Inversión
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 38, letterSpacing: "0.03em", color: "var(--accent-strong)" }}>
              {program.price}
            </span>
          </div>
          <div
            style={{
              borderTop: "1px solid var(--divider)",
              paddingTop: 18,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              textAlign: "left",
            }}
          >
            {includes.map((item) => (
              <span
                key={item}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "var(--text-body)",
                }}
              >
                <Icon name="check" size={17} color="var(--accent)" />
                {item}
              </span>
            ))}
          </div>
          <Link href={`/inscripcion/${program.slug}`} style={{ display: "block" }}>
            <Button variant="primary" size="lg" fullWidth>
              Inscribirme ahora
            </Button>
          </Link>
          <Button variant="ghost" size="sm" fullWidth>
            {downloadLabel}
          </Button>
        </Card>
      </section>
    </>
  );
}
