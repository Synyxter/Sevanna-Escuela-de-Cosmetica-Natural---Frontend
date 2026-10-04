import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/config";

type FooterLink = { label: string; href: string };

const COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Aprende",
    links: [
      { label: "Cursos", href: "/cursos" },
      { label: "Talleres", href: "/talleres" },
    ],
  },
  {
    heading: "Academia",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Contacto", href: `https://wa.me/${WHATSAPP_NUMBER}` },
    ],
  },
];

const SOCIALS: { slug: string; label: string; href: string }[] = [
  { slug: "whatsapp", label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` },
  { slug: "instagram", label: "Instagram", href: "https://www.instagram.com/sevanna_academy/" },
  { slug: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61592336145524" },
  { slug: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@sevannacosme" },
];

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-emerald-950 border-t border-hairline pt-14 pb-8 px-5 sm:px-8 lg:px-10 text-emerald-100">
      <div className="max-w-content mx-auto grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-x-8 gap-y-10 lg:gap-x-12">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display font-semibold text-2xl tracking-[0.18em] text-gold-100">SEVANNA</span>
          <p className="font-serif text-lg leading-body text-emerald-100 md:max-w-70 mt-3">
            Academia de cosmética natural. Conocimiento, creatividad y elaboración artesanal.
          </p>
        </div>

        {COLUMNS.map(({ heading, links }) => (
          <nav key={heading} aria-label={heading}>
            <h2 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold-300 m-0 mb-4">
              {heading}
            </h2>
            <ul className="list-none p-0 m-0">
              {links.map((link) => (
                <li key={link.label} className="mb-2.5">
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-sans text-sm text-emerald-100"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="inline-block font-sans text-sm text-emerald-100">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="col-span-2 md:col-span-1">
          <h2 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold-300 m-0 mb-4">
            Síguenos
          </h2>
          <ul className="flex gap-4 list-none p-0 m-0">
            {SOCIALS.map(({ slug, label, href }) => (
              <li key={slug}>
                <a
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                  aria-label={`Sevanna en ${label}`}
                  className="inline-flex opacity-85 hover:opacity-100 transition-opacity duration-240 ease-standard"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${slug}/C69F53`}
                    alt=""
                    aria-hidden="true"
                    width={22}
                    height={22}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-content mx-auto mt-10 pt-5 border-t border-divider flex justify-between flex-wrap gap-2 font-sans text-xs tracking-[0.06em] text-emerald-300">
        <span>© {new Date().getFullYear()} Sevanna · Academia de Cosmética</span>
        <span>Hecho a mano con ingredientes naturales</span>
      </div>
    </footer>
  );
}
