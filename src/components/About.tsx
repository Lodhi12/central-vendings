import { CheckCircle2 } from "lucide-react";
import { aboutPoints, brand } from "@/data/site";
import MachineArt from "./MachineArt";

export default function About() {
  return (
    <section id="about" className="section bg-ink text-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <MachineArt kind="coffee" className="order-last mx-auto w-full max-w-lg lg:order-first" />
        <div>
          <p className="mb-3 text-sm font-semibold text-sun">About us</p>
          <h2 className="h2">{brand.name}</h2>
          <p className="mt-5 text-white/75">
            We&apos;re a locally owned company that has looked after vending, coffee and water equipment in the region since {brand.founded}.
            Every client gets a set route, a named technician and a product mix built around what their people buy.
          </p>
          <ul className="mt-8 space-y-5">
            {aboutPoints.map((p) => (
              <li key={p.title} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sun" aria-hidden />
                <p><span className="font-semibold">{p.title}.</span> <span className="text-white/75">{p.body}</span></p>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-sun mt-10">Get a quote</a>
        </div>
      </div>
    </section>
  );
}
