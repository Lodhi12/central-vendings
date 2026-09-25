import Link from "next/link";
import { brand, nav, services } from "@/data/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-white/65">Vending, office coffee and water coolers for {brand.area}.</p>
        </div>
        <div>
          <h3 className="font-display font-bold">Quick links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-sun">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-display font-bold">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {services.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-sun">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-display font-bold">Service area</h3>
          {/* Replace with your own Google Maps embed URL */}
          <div className="mt-4 flex aspect-video items-center justify-center rounded-xl bg-white/10 text-center text-xs text-white/60">
            Map embed goes here
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-5 text-center text-xs text-white/50">© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
