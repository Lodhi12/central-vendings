import { Phone } from "lucide-react";
import { brand } from "@/data/site";

export default function TopBar() {
  return (
    <div className="bg-ink text-white">
      <div className="container-x flex items-center justify-center gap-3 py-2 text-xs sm:justify-end sm:text-sm">
        <span className="hidden sm:inline text-white/70">Questions? Call us</span>
        <a href={brand.phoneHref} className="inline-flex items-center gap-1.5 font-semibold hover:text-sun">
          <Phone className="h-3.5 w-3.5" aria-hidden /> {brand.phone}
        </a>
      </div>
    </div>
  );
}
