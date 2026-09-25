import { Star } from "lucide-react";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="reviews" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker">Reviews</p>
          <h2 className="h2">What our clients say</h2>
          <p className="mt-4 text-slate-600">Offices, property managers and facilities teams across the region.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-slate-200 p-7">
              <div className="flex gap-0.5 text-sun" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" aria-hidden />)}
              </div>
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foam font-display font-bold text-sea">{t.name[0]}</span>
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-sm text-slate-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
