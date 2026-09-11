"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Icon } from "@/design-system";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/cursos", label: "Cursos" },
  { href: "/talleres", label: "Talleres" },
  { href: "/nosotros", label: "Nosotros" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 28px",
        background: "var(--cream-50)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <Link href="/" aria-label="Sevanna — ir al inicio" style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/sevanna/logo-wordmark.png"
          alt="Sevanna"
          width={972}
          height={610}
          priority
          style={{ width: "auto", height: 64 }}
        />
      </Link>

      <nav
        aria-label="Navegación principal"
        style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
      >
        <ul style={{ display: "flex", gap: 24, listStyle: "none", margin: 0, padding: 0 }}>
          {LINKS.map((link, i) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <li key={`${link.href}-${i}`}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    padding: "6px 2px",
                    color: "var(--emerald-700)",
                    borderBottom: `3px solid ${active ? "var(--gold-600)" : "transparent"}`,
                    transition: "border-color var(--dur-fast) var(--ease-standard)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="/cursos">
          <Button
            variant="primary"
            size="sm"
            style={{ paddingTop: 14, paddingBottom: 14 }}
            iconLeft={<Icon name="leaf" size={16} color="var(--gold-300)" />}
          >
            Ver cursos
          </Button>
        </Link>
      </div>
    </header>
  );
}
