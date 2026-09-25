"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="kicker">FAQ</p>
          <h2 className="h2">Common questions</h2>
          <p className="mt-4 text-slate-600">Can&apos;t find your answer? Send us a message below.</p>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {f.q}
                    <Plus className={`h-5 w-5 shrink-0 text-sea transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden />
                  </button>
                </h3>
                <div id={`faq-${i}`} hidden={!isOpen} className="pb-5 pr-8 text-slate-600">{f.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
