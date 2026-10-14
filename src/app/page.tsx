import Link from "next/link";
import { Button, Icon, SectionHeading, CourseCard } from "@/design-system";
import { Reveal } from "@/components/site/Reveal";
import type { CatalogItem } from "@/components/site/Catalog";
import { safe } from "@/lib/api";
import { WHATSAPP_NUMBER } from "@/lib/config";
import { getCourses } from "@/lib/courses";
import { getTalleres } from "@/lib/talleres";

// Regenera la página como máximo cada 5 minutos aunque el fetch a la API falle
// durante el build (si no, Next la congela como estática con el mensaje de error).
export const revalidate = 300;

const FEATURES: [string, string, string][] = [
  ["leaf", "Ingredientes naturales", "Trabaja con ceras, aceites y activos botánicos reales."],
  ["flask-conical", "Formulación práctica", "Aprende a calcular, medir y ajustar cada receta."],
  ["award", "Cursos certificados", "Certificados por Sevanna Academy y aprobados por el Ministerio de Educación."],
  ["coffee", "Refrigerio y material", "Todos los cursos incluyen refrigerio y el material básico para tus prácticas."],
];

const PROMO_MODULES: [string, string][] = [
  ["Asepsia y desinfección", "Elaboración de productos para limpieza y desinfección."],
  ["Limpieza del hogar e industrial", "Preparación de productos de limpieza para diferentes espacios."],
  ["Aseo personal y cosméticos", "Fabricación de productos para el cuidado personal."],
];

const PROMO_DETAILS: [string, string, string][] = [
  ["calendar-days", "Inicio", "17 de noviembre"],
  ["clock", "Horario", "Sábados, 8:00 a. m. – 12:00 m."],
  ["hourglass", "Duración", "3 meses"],
];

const PROMO_WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, quiero información sobre el Curso 3x1 de fabricación de productos químicos.",
)}`;

function PromoCurso3x1() {
  return (
    <section className="px-5 sm:px-8 lg:px-10 pt-10 pb-4 max-w-content mx-auto">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] border border-hairline rounded-lg bg-card overflow-hidden">
          {/* Contenido del curso */}
          <div className="p-7 sm:p-10 lg:p-12 flex flex-col gap-6">
            <span className="self-start font-sans text-[13px] font-semibold tracking-eyebrow uppercase text-gold-600">
              Nuevo curso · Inscripciones abiertas
            </span>
            <h2 className="m-0 font-serif font-semibold text-[clamp(30px,3.6vw,44px)] leading-[1.1] text-emerald-500">
              Curso 3x1: fabricación de
              <br />
              <em className="not-italic text-gold-600">productos químicos</em>
            </h2>
            <p className="m-0 font-serif text-xl leading-body text-emerald-700">
              Aprende a elaborar productos para el hogar, para tu negocio y para el cuidado personal,
              en una formación 100&nbsp;% práctica: mezclas, formulación, preparación y pruebas
              básicas de calidad.
            </p>

            <ol className="m-0 p-0 list-none flex flex-col gap-5 mt-2">
              {PROMO_MODULES.map(([title, description], i) => (
                <li key={title} className="flex gap-5 items-start">
                  <span className="shrink-0 font-serif text-[40px] leading-none text-gold-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1 pt-1 border-l border-hairline pl-5">
                    <h3 className="m-0 font-serif font-semibold text-[22px] text-emerald-500">{title}</h3>
                    <p className="m-0 font-sans text-[15px] leading-body text-muted">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Inversión y horario */}
          <div className="p-7 sm:p-10 lg:p-12 flex flex-col gap-6 bg-cream-100 border-t lg:border-t-0 lg:border-l border-hairline">
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[13px] font-semibold tracking-eyebrow uppercase text-muted">
                Inscripción
              </span>
              <span className="font-serif font-semibold text-[44px] leading-none text-emerald-500">$50.000</span>
              <span className="font-sans text-[15px] text-muted mt-1">
                Valor del curso: <strong className="text-emerald-700">$1.260.000</strong>
              </span>
            </div>

            <div className="flex flex-col gap-2 p-5 rounded-lg border border-gold-300 bg-card">
              <span className="flex items-center gap-2 font-sans text-[13px] font-semibold tracking-eyebrow uppercase text-gold-600">
                <Icon name="wallet" size={16} /> Financiación sin intereses
              </span>
              <p className="m-0 font-sans text-[15px] leading-body text-emerald-700">
                Abonos semanales desde <strong>$55.000</strong> o quincenales de <strong>$110.000</strong>.
              </p>
            </div>

            <ul className="m-0 p-0 list-none flex flex-col gap-4">
              {PROMO_DETAILS.map(([icon, label, value]) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="text-accent-strong">
                    <Icon name={icon} size={22} strokeWidth={1.4} />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-sans text-[12px] font-semibold tracking-eyebrow uppercase text-muted">
                      {label}
                    </span>
                    <span className="font-sans text-base text-emerald-700">{value}</span>
                  </span>
                </li>
              ))}
            </ul>

            <a href={PROMO_WHATSAPP} target="_blank" rel="noopener noreferrer" className="no-underline mt-auto">
              <Button className="w-full" iconRight={<Icon name="arrow-right" size={16} />}>
                Quiero inscribirme
              </Button>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

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
              <CourseCard title={item.title} price={item.price} image={item.image} className="h-full cursor-pointer" />
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
      <section className="relative flex items-center sm:max-lg:justify-center max-sm:aspect-[941/1672] lg:min-h-[41.6vw] max-sm:py-0 py-20 sm:py-26 lg:py-32 px-5 sm:px-8 lg:px-24 xl:px-32 text-left sm:max-lg:text-center overflow-hidden bg-cover bg-center bg-[url(/sevanna/hero-products-celular.png)] sm:bg-[url(/sevanna/hero-products-tablet.png)] lg:bg-[url(/sevanna/hero-products.png)]">
        {/* min-h matches the desktop photo's 2.4:1 ratio so it shows whole instead of being cropped.
            The photo scales with the viewport, so the title and paragraph widths are sized in vw
            to stay clear of the products that start around the middle of the image.
            On phones the section takes the mobile photo's ratio so the text sits in its empty middle;
            on tablets the text is centered in the open space between the corner products. */}
        {/* Phones and tablets: a soft cream veil, in the photo's own tone, behind the text block so it
            reads clearly over the shadows and petals without looking like a box. */}
        <div
          aria-hidden="true"
          className="lg:hidden pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_34%_at_45%_50%,rgba(250,246,238,0.72)_0%,rgba(250,246,238,0.5)_45%,rgba(250,246,238,0)_100%)] sm:bg-[radial-gradient(ellipse_52%_46%_at_50%_50%,rgba(250,246,238,0.72)_0%,rgba(250,246,238,0.5)_45%,rgba(250,246,238,0)_100%)]"
        />
        <div className="relative max-w-2xl lg:max-w-none flex flex-col items-start sm:max-lg:items-center max-sm:gap-4 gap-6">
          <Reveal>
            <span className="font-sans max-md:text-[13px] text-[15px] font-semibold tracking-eyebrow uppercase max-sm:text-gold-700 text-gold-600">
              Academia de Cosmética Natural
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="m-0 font-serif font-semibold max-sm:text-[clamp(26px,7.6vw,32px)] text-[clamp(32px,4.8vw,70px)] lg:text-[clamp(32px,calc(5.1vw-12px),70px)] leading-[1.08] text-emerald-500">
              Aprende a crear tu propia
              <br />
              <em className="not-italic max-sm:text-gold-700 text-gold-600">cosmética natural</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="m-0 max-w-160 sm:max-lg:max-w-[min(35rem,72vw)] lg:max-w-[calc(46vw-6rem)] xl:max-w-[calc(46vw-8rem)] font-serif max-sm:text-lg text-[21px] lg:text-[clamp(18px,1.65vw,24px)] leading-body max-sm:text-emerald-900 text-emerald-700">
              Cursos y talleres presenciales, virtuales e híbridos para elaborar velas, jabones,
              labiales y más — desde cero hasta nivel profesional.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Value props */}
      <section className="py-16 px-5 sm:px-8 lg:px-10 max-w-content mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
        {FEATURES.map(([icon, title, description]) => (
          <div key={title} className="flex flex-col gap-3 p-7 border border-hairline rounded-lg bg-card">
            <span className="text-accent-strong">
              <Icon name={icon} size={30} strokeWidth={1.3} />
            </span>
            <h3 className="m-0 font-serif font-semibold text-2xl text-emerald-500">{title}</h3>
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

      <PromoCurso3x1 />

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
