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
      className="fixed top-0 left-0 right-0 w-full z-20 flex items-center justify-between py-3.5 px-7 bg-cream-50 border-b border-hairline"
    >
      <Link href="/" aria-label="Sevanna — ir al inicio" className="flex items-center">
        <Image src="/sevanna/logo-wordmark.png" alt="Sevanna" width={972} height={610} priority className="w-auto h-16" />
      </Link>

      <nav aria-label="Navegación principal" className="absolute left-1/2 -translate-x-1/2">
        <ul className="flex gap-6 list-none m-0 p-0">
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
                  className={[
                    "inline-block font-sans text-label font-bold tracking-[0.12em] py-1.5 px-0.5 text-emerald-700",
                    "border-b-[3px] transition-colors duration-140 ease-standard",
                    active ? "border-gold-600" : "border-transparent",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/cursos">
          <Button
            variant="primary"
            size="sm"
            className="py-3.5!"
            iconLeft={<Icon name="leaf" size={16} color="var(--gold-300)" />}
          >
            Ver cursos
          </Button>
        </Link>
      </div>
    </header>
  );
}
