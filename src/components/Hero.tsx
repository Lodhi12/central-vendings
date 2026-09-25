import { brand } from "@/data/site";
import MachineArt from "./MachineArt";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="container-x grid items-center gap-12 py-16 md:grid-cols-[1.1fr_1fr] lg:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold text-sun">Serving {brand.area} since {brand.founded}</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Vending, coffee and water for the places people work
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            We install the machines, keep them stocked and fix them when they break. You just tell us where they go.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-sun">Get a quote</a>
            <a href={brand.phoneHref} className="btn border border-white/30 text-white hover:bg-white/10">Call {brand.phone}</a>
          </div>
        </div>
        <div className="relative mx-auto grid w-full max-w-md grid-cols-3 items-end gap-3">
          <MachineArt kind="water" className="w-full translate-y-6" />
          <MachineArt kind="vending" className="w-full" />
          <MachineArt kind="coffee" className="w-full translate-y-10" />
        </div>
      </div>
    </section>
  );
}
