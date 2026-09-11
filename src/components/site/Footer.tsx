import Link from "next/link";

type FooterLink = { label: string; href: string };

const COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Aprende",
    links: [
      { label: "Cursos", href: "/cursos" },
      { label: "Talleres", href: "/talleres" },
      { label: "Modalidades", href: "/cursos" },
      { label: "Certificados", href: "/nosotros" },
    ],
  },
  {
    heading: "Academia",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Contacto", href: "/cursos" },
      { label: "Preguntas frecuentes", href: "/cursos" },
    ],
  },
  {
    heading: "Recursos",
    links: [
      { label: "Blog", href: "/cursos" },
      { label: "Guías gratuitas", href: "/cursos" },
    ],
  },
];

const SOCIALS = ["WhatsApp", "Instagram", "Facebook", "TikTok"];

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-emerald-950 border-t border-hairline pt-14 pb-8 px-10 text-emerald-100">
      <div className="max-w-content mx-auto grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <span className="font-display font-semibold text-2xl tracking-[0.18em] text-gold-100">SEVANNA</span>
          <p className="font-serif text-lg leading-body text-emerald-100 max-w-70 mt-3">
            Academia de cosmética natural. Conocimiento, creatividad y elaboración artesanal.
          </p>
          <ul className="flex gap-4.5 mt-4.5 list-none p-0">
            {SOCIALS.map((label) => (
              <li key={label}>
                <a href="#" className="font-sans text-xs tracking-label text-gold-300">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {COLUMNS.map(({ heading, links }) => (
          <nav key={heading} aria-label={heading}>
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold-300 m-0 mb-4">
              {heading}
            </h2>
            <ul className="list-none p-0 m-0">
              {links.map((link) => (
                <li key={link.label} className="mb-2.5">
                  <Link href={link.href} className="inline-block font-sans text-sm text-emerald-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="max-w-content mx-auto mt-10 pt-5 border-t border-divider flex justify-between flex-wrap gap-2 font-sans text-xs tracking-[0.06em] text-emerald-300">
        <span>© {new Date().getFullYear()} Sevanna · Academia de Cosmética</span>
        <span>Hecho a mano con ingredientes naturales</span>
      </div>
    </footer>
  );
}
