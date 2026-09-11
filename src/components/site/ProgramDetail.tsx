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
      <section className="bg-[linear-gradient(180deg,var(--cream-50),var(--cream-100))] pt-10 px-10 pb-0">
        <div className="max-w-content mx-auto">
          <Link
            href={basePath}
            className="inline-flex items-center gap-2 font-sans text-label tracking-[0.1em] uppercase text-muted mb-7"
          >
            <Icon name="arrow-left" size={16} /> {backLabel}
          </Link>

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 items-center pb-14">
            <div className="flex flex-col gap-4.5">
              <div className="flex gap-2.5">
                <Badge tone={program.level}>{program.levelLabel}</Badge>
                <Badge tone="gold">{program.category}</Badge>
              </div>
              <h1 className="m-0 font-serif font-semibold text-[clamp(34px,4.6vw,54px)] leading-[1.1] text-emerald-900">
                {program.title}
              </h1>
              <p className="m-0 font-serif text-[22px] leading-body text-ink-700">{program.blurb}</p>
              <div className="flex flex-wrap gap-5.5 mt-1.5">
                {meta.map(([icon, text]) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 font-sans text-label tracking-[0.06em] text-muted"
                  >
                    <Icon name={icon} size={16} color="var(--accent-strong)" />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="aspect-4/3 rounded-xl overflow-hidden border border-border-strong flex items-center justify-center text-border-strong"
              style={{
                background: program.image ? `center/cover no-repeat url(${program.image})` : "var(--emerald-800)",
              }}
            >
              {!program.image && <Icon name="flower-2" size={72} strokeWidth={0.9} />}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto pt-16 px-10 pb-24 grid grid-cols-[1fr_340px] gap-12 items-start">
        <div>
          <SectionHeading
            light
            align="left"
            eyebrow={outlineEyebrow}
            title={outlineTitle}
            ornament={false}
            className="mb-7"
          />
          <Accordion items={outline} defaultOpen={0} />
        </div>

        <Card light className="sticky top-24 flex flex-col items-stretch gap-5 text-center">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-muted">
              Inversión
            </span>
            <span className="font-display text-[38px] tracking-[0.03em] text-accent-strong">{program.price}</span>
          </div>
          <div className="border-t border-divider pt-4.5 flex flex-col gap-3 text-left">
            {includes.map((item) => (
              <span key={item} className="flex gap-2.5 items-center font-sans text-sm text-body">
                <Icon name="check" size={17} color="var(--accent)" />
                {item}
              </span>
            ))}
          </div>
          <Link href={`/inscripcion/${program.slug}`} className="block">
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
