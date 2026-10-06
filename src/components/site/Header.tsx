"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, IconButton } from "@/design-system";
import { WHATSAPP_NUMBER } from "@/lib/config";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/cursos", label: "Cursos" },
  { href: "/talleres", label: "Talleres" },
  { href: "/nosotros", label: "Nosotros" },
];

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "¡Hola Sevanna! Quiero más información sobre sus cursos y talleres.",
)}`;

const WHATSAPP_ICON = (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="https://cdn.simpleicons.org/whatsapp/E3C072" alt="" width={18} height={18} />
);

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 w-full z-20 py-3.5 px-5 sm:px-8 lg:px-24 xl:px-32 bg-cream-50 border-b border-hairline"
    >
      {/* Same side padding as the hero so the logo lines up with its text. */}
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Sevanna — ir al inicio" className="flex items-center">
          <Image src="/sevanna/logo-wordmark.png" alt="Sevanna" width={972} height={610} priority className="w-auto h-16" />
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-14 xl:gap-20 list-none m-0 p-0">
            {LINKS.map((link, i) => (
              <li key={`${link.href}-${i}`}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={[
                    "inline-block font-sans text-[15px] font-bold tracking-[0.12em] py-1.5 px-0.5 text-emerald-500",
                    "border-b-[3px] transition-colors duration-140 ease-standard",
                    isActive(link.href) ? "border-gold-600" : "border-transparent hover:border-gold-600",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm" className="py-3.5! text-[15px]!" iconLeft={WHATSAPP_ICON}>
              Escríbenos
            </Button>
          </a>
        </div>

        <IconButton
          name={open ? "x" : "menu"}
          label={open ? "Cerrar menú" : "Abrir menú"}
          variant="ghost"
          className="lg:hidden border-2! text-emerald-500!"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        />
      </div>

      {open && (
        <nav
          aria-label="Navegación móvil"
          className="lg:hidden absolute top-full left-0 right-0 flex flex-col gap-1 py-4 px-5 sm:px-8 bg-cream-50 border-b border-hairline"
        >
          <ul className="flex flex-col list-none m-0 p-0">
            {LINKS.map((link, i) => (
              <li key={`mobile-${link.href}-${i}`}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={[
                    "block font-sans text-[15px] font-bold tracking-[0.12em] py-2.5 px-0.5 text-emerald-500",
                    "border-b border-transparent transition-colors duration-140 ease-standard",
                    isActive(link.href) ? "text-gold-600" : "",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2"
          >
            <Button variant="primary" size="sm" fullWidth className="text-[15px]!" iconLeft={WHATSAPP_ICON}>
              Escríbenos
            </Button>
          </a>
        </nav>
      )}
    </header>
  );
}
