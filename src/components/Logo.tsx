import { brand } from "@/data/site";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
        <rect width="40" height="40" rx="10" fill="#0e7c86" />
        <path
          d="M11 27c3-2 6-2 9 0s6 2 9 0"
          stroke="#f2b134"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M11 20c3-2 6-2 9 0s6 2 9 0"
          stroke="#fff"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="20" cy="12" r="3" fill="#fff" />
      </svg>
      <span
        className={`font-display text-lg font-extrabold leading-none tracking-tight ${light ? "text-white" : "text-ink"}`}
      >
        {brand.short}
        <span
          className={`block text-[11px] font-semibold tracking-normal ${light ? "text-white/60" : "text-slate-500"}`}
        ></span>
      </span>
    </span>
  );
}
