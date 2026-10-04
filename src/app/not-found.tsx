import Link from "next/link";
import { Button, SectionHeading } from "@/design-system";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center gap-6 py-24 px-10 text-center">
      <SectionHeading light eyebrow="Error 404" title="No encontramos esta página" />
      <Link href="/">
        <Button variant="primary">Volver al inicio</Button>
      </Link>
    </section>
  );
}
