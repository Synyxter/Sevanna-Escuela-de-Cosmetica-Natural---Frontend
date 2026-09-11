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
    <footer
      role="contentinfo"
      style={{
        background: "var(--emerald-950)",
        borderTop: "1px solid var(--border-hairline)",
        padding: "56px 40px 32px",
        color: "var(--emerald-100)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 24,
              letterSpacing: "0.18em",
              color: "var(--gold-100)",
            }}
          >
            SEVANNA
          </span>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--emerald-100)",
              maxWidth: 280,
              marginTop: 12,
            }}
          >
            Academia de cosmética natural. Conocimiento, creatividad y elaboración artesanal.
          </p>
          <ul
            style={{
              display: "flex",
              gap: 18,
              marginTop: 18,
              listStyle: "none",
              padding: 0,
            }}
          >
            {SOCIALS.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    letterSpacing: "0.08em",
                    color: "var(--gold-300)",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {COLUMNS.map(({ heading, links }) => (
          <nav key={heading} aria-label={heading}>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold-300)",
                margin: "0 0 16px",
              }}
            >
              {heading}
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {links.map((link) => (
                <li key={link.label} style={{ marginBottom: 10 }}>
                  <Link
                    href={link.href}
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      color: "var(--emerald-100)",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div
        style={{
          maxWidth: "var(--container)",
          margin: "40px auto 0",
          paddingTop: 20,
          borderTop: "1px solid var(--divider)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          letterSpacing: "0.06em",
          color: "var(--emerald-300)",
        }}
      >
        <span>© {new Date().getFullYear()} Sevanna · Academia de Cosmética</span>
        <span>Hecho a mano con ingredientes naturales</span>
      </div>
    </footer>
  );
}
