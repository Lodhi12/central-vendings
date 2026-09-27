import Image from "next/image";
import { steps } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* ---------- TEXT COLUMN ---------- */}
        <div>
          <p className="kicker">How it works</p>
          <h2 className="h2">Snacks, drinks and coffee without the admin</h2>
          <p className="mt-4 max-w-prose text-slate-600">
            Everything is installed, stocked and serviced by our own team, so
            there is nothing for your staff to manage.
          </p>

          <ol className="mt-10 space-y-8">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sea font-display text-lg font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-slate-600">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <a href="#contact" className="btn-primary mt-10">
            Get a quote
          </a>
        </div>

        {/*
          ---------- IMAGE COLUMN ----------

          `fill` makes the <Image> position:absolute, so it needs a parent
          that is BOTH `relative` and has a real height. Without the wrapper
          the image escapes the grid entirely and the column collapses.

          aspect-[4/5] is a portrait frame, which suits a tall machine.
          Use aspect-[4/3] instead if your photo is landscape.
        */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-2xl bg-foam">
          <Image
            src="/images/vending_machine2.jpg"
            alt="Snack and drink vending machine"
            fill
            sizes="(max-width: 1024px) 90vw, 560px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
