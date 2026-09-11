import Link from "next/link";
import { Button, SectionHeading } from "@/design-system";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        padding: "96px 40px",
        textAlign: "center",
      }}
    >
      <SectionHeading light eyebrow="Error 404" title="No encontramos esta página" />
      <Link href="/">
        <Button variant="primary">Volver al inicio</Button>
      </Link>
    </section>
  );
}
