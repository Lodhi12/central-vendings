"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav, services } from "@/data/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setSvcOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setSvcOpen(false); setOpen(false); }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => { setOpen(false); setSvcOpen(false); };

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${scrolled ? "shadow-md" : ""}`}>
      <div className="container-x flex items-center justify-between py-3">
        <Link href="/" onClick={close} aria-label="Home"><Logo /></Link>

        {/* Desktop nav */}
        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-8 text-sm font-semibold">
            <li ref={dropRef} className="relative">
              <button
                className="inline-flex items-center gap-1 hover:text-sea"
                aria-expanded={svcOpen}
                aria-haspopup="true"
                onClick={() => setSvcOpen((v) => !v)}
              >
                Services <ChevronDown className={`h-4 w-4 transition-transform ${svcOpen ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {svcOpen && (
                <ul className="absolute left-1/2 top-full mt-3 w-60 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} onClick={close} className="block rounded-lg px-4 py-2.5 hover:bg-foam hover:text-sea">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-sea">{n.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-slate-300 px-3 py-1.5 text-xs font-bold sm:inline-block" aria-label="Switch language">FR</button>
          <Link href="/#contact" className="btn-primary hidden sm:inline-flex">Contact us</Link>
          <button className="rounded-lg p-2 lg:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div id="mobile-nav" className={`overflow-hidden border-t border-slate-200 bg-white lg:hidden ${open ? "max-h-[32rem]" : "max-h-0 border-t-0"} transition-[max-height] duration-300`}>
        <nav className="container-x py-4" aria-label="Mobile">
          <p className="px-2 pb-1 text-xs font-semibold text-slate-500">Services</p>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} onClick={close} className="block rounded-lg px-2 py-2.5 font-semibold hover:bg-foam">{s.title}</Link>
          ))}
          <hr className="my-3 border-slate-200" />
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={close} className="block rounded-lg px-2 py-2.5 font-semibold hover:bg-foam">{n.label}</Link>
          ))}
          <Link href="/#contact" onClick={close} className="btn-primary mt-4 w-full">Contact us</Link>
        </nav>
      </div>
    </header>
  );
}
