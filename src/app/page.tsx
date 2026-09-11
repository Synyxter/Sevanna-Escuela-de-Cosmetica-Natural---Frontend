import Link from "next/link";
import { Button, Icon, SectionHeading, CourseCard } from "@/design-system";
import { Reveal } from "@/components/site/Reveal";
import type { CatalogItem } from "@/components/site/Catalog";
import { safe } from "@/lib/api";
import { getCourses } from "@/lib/courses";
import { getTalleres } from "@/lib/talleres";

const FEATURES: [string, string, string][] = [
  ["leaf", "Ingredientes naturales", "Trabaja con ceras, aceites y activos botánicos reales."],
  ["flask-conical", "Formulación práctica", "Aprende a calcular, medir y ajustar cada receta."],
  ["award", "Nivel a tu medida", "Rutas básicas, intermedias y avanzadas."],
];

function FeaturedRow({
  eyebrow,
  title,
  subtitle,
  items,
  basePath,
  ctaLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: CatalogItem[];
  basePath: string;
  ctaLabel: string;
}) {
  if (items.length === 0) return null;

  return (
    <section style={{ padding: "40px 40px 32px", maxWidth: "var(--container)", margin: "0 auto" }}>
      <Reveal>
        <SectionHeading light eyebrow={eyebrow} title={title} subtitle={subtitle} />
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, marginTop: 44 }}>
        {items.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.12}>
            <Link href={`${basePath}/${item.slug}`} style={{ textDecoration: "none" }}>
              <CourseCard {...item} style={{ height: "100%", cursor: "pointer" }} />
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal style={{ textAlign: "center", marginTop: 44 }}>
        <Link href={basePath}>
          <Button variant="secondary" iconRight={<Icon name="arrow-right" size={16} />}>
            {ctaLabel}
          </Button>
        </Link>
      </Reveal>
    </section>
  );
}

export default async function HomePage() {
  const [courses, talleres] = await Promise.all([
    safe(getCourses(), [] as CatalogItem[]),
    safe(getTalleres(), [] as CatalogItem[]),
  ]);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          padding: "128px 40px",
          textAlign: "center",
          backgroundImage:
            "radial-gradient(ellipse 62% 78% at center, rgba(250,246,238,0.86) 0%, rgba(250,246,238,0.62) 40%, rgba(250,246,238,0.28) 70%, rgba(250,246,238,0.05) 100%), url(/sevanna/hero-products.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 22,
          }}
        >
          <Reveal>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--gold-600)",
              }}
            >
              Academia de Cosmética Natural
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-serif)",
                fontWeight: 600,
                fontSize: "clamp(40px,6vw,72px)",
                lineHeight: 1.08,
                color: "var(--emerald-700)",
              }}
            >
              Aprende a crear tu propia
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold-600)" }}>cosmética natural</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              style={{
                margin: "0 auto",
                maxWidth: 560,
                fontFamily: "var(--font-serif)",
                fontSize: 22,
                lineHeight: 1.6,
                color: "var(--emerald-700)",
              }}
            >
              Cursos y talleres presenciales, virtuales e híbridos para elaborar velas, jabones,
              labiales y más — desde cero hasta nivel profesional.
            </p>
          </Reveal>
          <Reveal delay={0.3} style={{ marginTop: 8 }}>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/cursos">
                <Button
                  variant="solid"
                  size="lg"
                  iconLeft={<Icon name="leaf" size={18} color="var(--gold-300)" />}
                >
                  Explorar cursos
                </Button>
              </Link>
              <Link href="/talleres">
                <Button variant="secondary" size="lg">
                  Ver talleres
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Value props */}
      <section
        style={{
          padding: "64px 40px",
          maxWidth: "var(--container)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 28,
        }}
      >
        {FEATURES.map(([icon, title, description]) => (
          <div
            key={title}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              padding: 28,
              border: "1px solid var(--border-hairline)",
              borderRadius: "var(--radius-lg)",
              background: "var(--surface-card)",
            }}
          >
            <span style={{ color: "var(--accent-strong)" }}>
              <Icon name={icon} size={30} strokeWidth={1.3} />
            </span>
            <h3
              style={{
                margin: 0,
                fontFamily: "var(--font-serif)",
                fontWeight: 600,
                fontSize: 24,
                color: "var(--emerald-700)",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--text-muted)",
              }}
            >
              {description}
            </p>
          </div>
        ))}
      </section>

      <FeaturedRow
        eyebrow="Cursos destacados"
        title="Empieza por tu primer curso"
        subtitle="Programas guiados por niveles, con materiales definidos y práctica acompañada."
        items={courses.slice(0, 3)}
        basePath="/cursos"
        ctaLabel="Ver todos los cursos"
      />

      <FeaturedRow
        eyebrow="Talleres destacados"
        title="Crea algo en una sola sesión"
        subtitle="Encuentros cortos y prácticos: te llevas tu producto terminado el mismo día."
        items={talleres.slice(0, 3)}
        basePath="/talleres"
        ctaLabel="Ver todos los talleres"
      />

      {/* Quote band */}
      <section style={{ padding: "80px 40px", marginTop: 56, background: "var(--emerald-600)", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Reveal>
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--gold-300)",
              }}
            >
              Nuestra filosofía
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(26px,3.4vw,38px)",
                lineHeight: 1.45,
                color: "var(--cream-50)",
                marginTop: 20,
              }}
            >
              “Combinamos conocimiento, creatividad y elaboración artesanal para que cada estudiante
              formule con confianza.”
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
