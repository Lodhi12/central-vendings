import { steps } from "@/data/site";
import MachineArt from "./MachineArt";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="kicker">How it works</p>
          <h2 className="h2">Snacks, drinks, coffee and water without the admin</h2>
          <p className="mt-4 max-w-prose text-slate-600">
            Everything is installed, stocked and serviced by our own team, so there is nothing for your staff to manage.
          </p>
          <ol className="mt-10 space-y-8">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sea font-display text-lg font-bold text-white">{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-slate-600">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <a href="#contact" className="btn-primary mt-10">Get a quote</a>
        </div>
        <MachineArt kind="vending" className="mx-auto w-full max-w-lg" />
      </div>
    </section>
  );
}
