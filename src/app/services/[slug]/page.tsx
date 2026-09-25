import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { services } from "@/data/site";
import MachineArt from "@/components/MachineArt";
import Contact from "@/components/Contact";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-foam">
        <div className="container-x grid items-center gap-10 py-14 md:grid-cols-2 lg:py-20">
          <div>
            <Link href="/#services" className="text-sm font-semibold text-sea hover:underline">All services</Link>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{service.title}</h1>
            <p className="mt-5 max-w-prose text-lg text-slate-600">{service.body}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sea" aria-hidden /> {p}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary mt-8">Request a quote</a>
          </div>
          <MachineArt kind={service.art} className="mx-auto w-full max-w-md" />
        </div>
      </section>
      <Contact defaultService={service.title} />
    </>
  );
}
