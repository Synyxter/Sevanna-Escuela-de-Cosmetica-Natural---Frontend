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
    <section className="pt-10 px-5 sm:px-8 lg:px-10 pb-8 max-w-content mx-auto">
      <Reveal>
        <SectionHeading light eyebrow={eyebrow} title={title} subtitle={subtitle} />
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mt-11">
        {items.map((item, i) => (
          <Reveal key={item.slug} delay={i * 0.12}>
            <Link href={`${basePath}/${item.slug}`} className="no-underline">
              <CourseCard {...item} className="h-full cursor-pointer" />
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal className="text-center mt-11">
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
      <section className="relative py-20 sm:py-26 lg:py-32 px-5 sm:px-8 lg:px-10 text-center overflow-hidden bg-[radial-gradient(ellipse_62%_78%_at_center,rgba(250,246,238,0.86)_0%,rgba(250,246,238,0.62)_40%,rgba(250,246,238,0.28)_70%,rgba(250,246,238,0.05)_100%),url(/sevanna/hero-products.png)] bg-cover bg-center">
        <div className="max-w-205 mx-auto flex flex-col items-center gap-5.5">
          <Reveal>
            <span className="font-sans text-xs font-semibold tracking-eyebrow uppercase text-gold-600">
              Academia de Cosmética Natural
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="m-0 font-serif font-semibold text-[clamp(40px,6vw,72px)] leading-[1.08] text-emerald-700">
              Aprende a crear tu propia
              <br />
              <em className="italic text-gold-600">cosmética natural</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto max-w-140 font-serif text-[22px] leading-body text-emerald-700">
              Cursos y talleres presenciales, virtuales e híbridos para elaborar velas, jabones,
              labiales y más — desde cero hasta nivel profesional.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-2">
            <div className="flex gap-3.5 flex-wrap justify-center">
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
      <section className="py-16 px-5 sm:px-8 lg:px-10 max-w-content mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {FEATURES.map(([icon, title, description]) => (
          <div key={title} className="flex flex-col gap-3 p-7 border border-hairline rounded-lg bg-card">
            <span className="text-accent-strong">
              <Icon name={icon} size={30} strokeWidth={1.3} />
            </span>
            <h3 className="m-0 font-serif font-semibold text-2xl text-emerald-700">{title}</h3>
            <p className="m-0 font-sans text-[15px] leading-body text-muted">{description}</p>
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
      <section className="py-20 px-5 sm:px-8 lg:px-10 mt-14 bg-emerald-600 text-center">
        <div className="max-w-180 mx-auto">
          <Reveal>
            <h2 className="m-0 font-sans text-label font-bold tracking-[0.28em] uppercase text-gold-300">
              Nuestra filosofía
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-serif italic text-[clamp(26px,3.4vw,38px)] leading-[1.45] text-cream-50 mt-5">
              “Combinamos conocimiento, creatividad y elaboración artesanal para que cada estudiante
              formule con confianza.”
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
