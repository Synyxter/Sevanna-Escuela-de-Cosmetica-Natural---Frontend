"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, IconButton, Icon } from "@/design-system";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/cursos", label: "Cursos" },
  { href: "/talleres", label: "Talleres" },
  { href: "/nosotros", label: "Nosotros" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 w-full z-20 flex items-center justify-between py-3.5 px-5 sm:px-7 bg-cream-50 border-b border-hairline"
    >
      <Link href="/" aria-label="Sevanna — ir al inicio" className="flex items-center">
        <Image src="/sevanna/logo-wordmark.png" alt="Sevanna" width={972} height={610} priority className="w-auto h-16" />
      </Link>

      <nav aria-label="Navegación principal" className="hidden lg:block absolute left-1/2 -translate-x-1/2">
        <ul className="flex gap-6 list-none m-0 p-0">
          {LINKS.map((link, i) => (
            <li key={`${link.href}-${i}`}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={[
                  "inline-block font-sans text-label font-bold tracking-[0.12em] py-1.5 px-0.5 text-emerald-700",
                  "border-b-[3px] transition-colors duration-140 ease-standard",
                  isActive(link.href) ? "border-gold-600" : "border-transparent",
                ].join(" ")}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden lg:flex items-center gap-4">
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

      <IconButton
        name={open ? "x" : "menu"}
        label={open ? "Cerrar menú" : "Abrir menú"}
        variant="ghost"
        className="lg:hidden"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      />

      {open && (
        <nav
          aria-label="Navegación móvil"
          className="lg:hidden absolute top-full left-0 right-0 flex flex-col gap-1 py-4 px-5 bg-cream-50 border-b border-hairline"
        >
          <ul className="flex flex-col list-none m-0 p-0">
            {LINKS.map((link, i) => (
              <li key={`mobile-${link.href}-${i}`}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={[
                    "block font-sans text-label font-bold tracking-[0.12em] py-2.5 px-0.5 text-emerald-700",
                    "border-b border-transparent transition-colors duration-140 ease-standard",
                    isActive(link.href) ? "text-gold-600" : "",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/cursos" onClick={() => setOpen(false)} className="mt-2">
            <Button
              variant="primary"
              size="sm"
              fullWidth
              iconLeft={<Icon name="leaf" size={16} color="var(--gold-300)" />}
            >
              Ver cursos
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
