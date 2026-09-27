import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { aboutPoints, brand } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section bg-ink text-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/*
          Same rule as the Process section: `fill` is position:absolute, so it
          needs a parent that is `relative` AND has a height of its own.
          Drop <Image fill> straight into a grid and it escapes the layout.
        */}
        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
          <Image
            src="/images/office_coffee.jpg"
            alt="Bean-to-cup coffee machine on an office break room counter"
            fill
            sizes="(max-width: 1024px) 90vw, 560px"
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-sun">About us</p>
          <h2 className="h2">{brand.name}</h2>

          <p className="mt-5 text-white/75">
            We&apos;re a locally owned company looking after vending and coffee
            equipment across {brand.area}. Every client gets a set route, a
            named contact and a product mix built around what their people buy.
          </p>

          <ul className="mt-8 space-y-5">
            {aboutPoints.map((p) => (
              <li key={p.title} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-sun"
                  aria-hidden
                />
                <p>
                  <span className="font-semibold">{p.title}.</span>{" "}
                  <span className="text-white/75">{p.body}</span>
                </p>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-sun mt-10">
            Get a quote
          </a>
        </div>
      </div>
    </section>
  );
}
