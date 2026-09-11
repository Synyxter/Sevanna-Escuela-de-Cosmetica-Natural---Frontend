import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Montserrat } from "next/font/google";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

// Font substitution documented in the design system readme:
// Cinzel → inscriptional wordmark / display caps
// Cormorant Garamond → editorial serif headings, quotes, ledes
// Montserrat → UI, labels, letter-spaced eyebrows
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sevanna.example"),
  title: {
    default: "Sevanna · Academia de Cosmética Natural",
    template: "%s · Sevanna",
  },
  description:
    "Cursos y talleres presenciales, virtuales e híbridos para elaborar velas, jabones, labiales y más — desde cero hasta nivel profesional.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <body className="on-light">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
