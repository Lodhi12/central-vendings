"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand, services } from "@/data/site";

export default function Contact({ defaultService = "" }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);

  // Wire this to your backend, an API route, or a form service.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Contact form:", data);
    setSent(true);
  }

  const info = [
    { icon: Phone, label: "Phone", value: brand.phone, href: brand.phoneHref },
    { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
    { icon: MapPin, label: "Service area", value: brand.area },
  ];

  return (
    <section id="contact" className="section bg-foam">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="kicker">Contact</p>
          <h2 className="h2">Get a quote</h2>
          <p className="mt-4 text-slate-600">Tell us about your space and we&apos;ll reply within one business day.</p>
          <ul className="mt-8 space-y-5">
            {info.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sea ring-1 ring-slate-200"><Icon className="h-5 w-5" aria-hidden /></span>
                <span>
                  <span className="block text-sm text-slate-500">{label}</span>
                  {href ? <a href={href} className="font-semibold hover:text-sea">{value}</a> : <span className="font-semibold">{value}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 sm:p-8">
          {sent ? (
            <div role="status" className="py-12 text-center">
              <h3 className="font-display text-2xl font-bold">Message sent</h3>
              <p className="mt-2 text-slate-600">We&apos;ll get back to you within one business day.</p>
              <button className="btn-primary mt-6" onClick={() => setSent(false)}>Send another message</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <h3 className="font-display text-xl font-bold sm:col-span-2">Send us a message</h3>
              <label className="text-sm font-medium">Name<input required name="name" className="field mt-1.5" autoComplete="name" /></label>
              <label className="text-sm font-medium">Company<input name="company" className="field mt-1.5" autoComplete="organization" /></label>
              <label className="text-sm font-medium">Email<input required type="email" name="email" className="field mt-1.5" autoComplete="email" /></label>
              <label className="text-sm font-medium">Phone<input type="tel" name="phone" className="field mt-1.5" autoComplete="tel" /></label>
              <label className="text-sm font-medium sm:col-span-2">Service
                <select name="service" defaultValue={defaultService} className="field mt-1.5">
                  <option value="">Choose a service</option>
                  {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                  <option>Other</option>
                </select>
              </label>
              <label className="text-sm font-medium sm:col-span-2">Message<textarea required name="message" rows={5} className="field mt-1.5" /></label>
              <button type="submit" className="btn-primary sm:col-span-2 sm:justify-self-start">Send message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
