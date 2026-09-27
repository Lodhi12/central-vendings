import Image from "next/image";
import { brand } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-ink text-white">
      {/*
        BACKGROUND PHOTO
        - alt="" because it is decorative; the headline already carries the meaning.
          Giving it real alt text makes screen readers announce it twice.
        - priority: this is the largest element above the fold (the LCP image).
          Without it, Next lazy-loads it and your LCP score suffers.
        - object-[70%_center] pushes the subject to the right so the machine
          is not sitting behind the headline. Tune the first number:
          50% = centred, 100% = hard right.
      */}
      <Image
        src="/images/hero-bg.avif"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />

      {/*
        ONE OVERLAY, NOT TWO.
        Stacking a flat bg-ink/70 under a from-ink gradient multiplies the
        darkening and buries the photo. A single gradient does both jobs.

        Mobile  (bg-gradient-to-t): the grid collapses, text sits over the
                whole image, so darken from the bottom up.
        Desktop (md:bg-gradient-to-r): text is on the left, machine on the
                right, so darken left to right and let the right stay clear.

        Do not take the `from-` stop below /80 — white text over a mid-tone
        photo drops under 4.5:1 contrast and becomes unreadable outdoors.
      */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/25
                   md:bg-gradient-to-r md:from-ink/95 md:via-ink/60 md:to-ink/10"
      />

      {/* CONTENT — `relative` lifts it above the two absolute layers. */}
      <div className="container-x relative w-full py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold text-sun">
            Serving {brand.area}
          </p>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Vending and coffee for the places people work
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/85">
            We install the machines, keep them stocked and fix them when they
            break. You just tell us where they go.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-sun">
              Get a quote
            </a>
            <a
              href={brand.phoneHref}
              className="btn border border-white/30 text-white hover:bg-white/10"
            >
              Call {brand.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
