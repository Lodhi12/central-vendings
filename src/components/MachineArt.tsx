// Original flat illustrations used in place of photography.
// Swap for <Image /> with your own photos when you have them.

type Kind = "vending" | "coffee" | "water";

export default function MachineArt({ kind, className = "" }: { kind: Kind; className?: string }) {
  const bg = kind === "coffee" ? "#f6ece4" : kind === "water" ? "#e3f1f6" : "#eef4f6";
  return (
    <svg viewBox="0 0 320 240" className={className} role="img" aria-label={`${kind} illustration`}>
      <rect width="320" height="240" rx="20" fill={bg} />
      <rect x="0" y="200" width="320" height="40" rx="0" fill="#12263a" opacity=".06" />
      {kind === "vending" && (
        <g>
          <rect x="100" y="28" width="120" height="180" rx="10" fill="#12263a" />
          <rect x="110" y="40" width="74" height="130" rx="4" fill="#dff0f2" />
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2].map((c) => (
              <rect key={`${r}-${c}`} x={116 + c * 22} y={48 + r * 30} width="16" height="20" rx="3"
                fill={["#f2b134", "#0e7c86", "#e0664f"][(r + c) % 3]} />
            ))
          )}
          <rect x="190" y="44" width="22" height="30" rx="3" fill="#0e7c86" />
          <circle cx="201" cy="92" r="6" fill="#f2b134" />
          <rect x="190" y="106" width="22" height="6" rx="3" fill="#fff" opacity=".6" />
          <rect x="116" y="178" width="62" height="18" rx="3" fill="#0a1a29" />
        </g>
      )}
      {kind === "coffee" && (
        <g>
          <rect x="110" y="40" width="100" height="150" rx="14" fill="#7a4a2b" />
          <rect x="122" y="54" width="76" height="34" rx="6" fill="#2d1b10" />
          <circle cx="140" cy="71" r="6" fill="#f2b134" />
          <rect x="152" y="67" width="36" height="8" rx="4" fill="#fff" opacity=".5" />
          <rect x="146" y="98" width="28" height="12" rx="3" fill="#2d1b10" />
          <rect x="132" y="130" width="56" height="44" rx="4" fill="#2d1b10" opacity=".35" />
          <path d="M146 138h28v22a8 8 0 0 1-8 8h-12a8 8 0 0 1-8-8z" fill="#fff" />
          <path d="M174 144h5a6 6 0 0 1 0 12h-5" stroke="#fff" strokeWidth="4" fill="none" />
          <path d="M154 122c0-6 6-6 6-12M164 122c0-6 6-6 6-12" stroke="#7a4a2b" strokeWidth="0" />
        </g>
      )}
      {kind === "water" && (
        <g>
          <path d="M136 30h48v10a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8z" fill="#0e7c86" />
          <path d="M126 48h68v52a10 10 0 0 1-10 10h-48a10 10 0 0 1-10-10z" fill="#9fd3e3" opacity=".85" />
          <path d="M132 70h56" stroke="#fff" strokeWidth="3" opacity=".6" />
          <rect x="120" y="110" width="80" height="96" rx="8" fill="#ffffff" stroke="#12263a" strokeOpacity=".15" />
          <rect x="136" y="126" width="12" height="16" rx="3" fill="#e0664f" />
          <rect x="172" y="126" width="12" height="16" rx="3" fill="#0e7c86" />
          <rect x="132" y="156" width="56" height="30" rx="4" fill="#eef4f6" />
        </g>
      )}
    </svg>
  );
}
