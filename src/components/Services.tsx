import Link from "next/link";
import { services } from "@/data/site";
import MachineArt from "./MachineArt";

export default function Services() {
  return (
    <section id="services" className="section bg-foam">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="kicker">Services</p>
          <h2 className="h2">One supplier for vending, coffee and water</h2>
          <p className="mt-4 text-slate-600">For offices, schools, clinics, warehouses and residential buildings.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.slug} className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              <MachineArt kind={s.art} className="w-full" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 flex-1 text-slate-600">{s.short}</p>
                <Link href={`/services/${s.slug}`} className="mt-5 text-sm font-semibold text-sea hover:underline">
                  See {s.title.toLowerCase()} details
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center"><a href="#contact" className="btn-primary">Get a quote</a></div>
      </div>
    </section>
  );
}
