interface LogoProps {
  variant?: "color" | "white";
  size?: "sm" | "md" | "lg";
}

const scale = { sm: 0.72, md: 0.90, lg: 1.15 };

// viewBox base: 135 × 82
// "i" at x=0, "s" at x=27, "a" at x=84 — all h=58, stroke-width=13
// "SAÚDE" at y=76

export function Logo({ variant = "color", size = "md" }: LogoProps) {
  const teal  = variant === "white" ? "#FFFFFF" : "#00BCD4";
  const pink  = variant === "white" ? "rgba(255,255,255,0.82)" : "#E91E8C";
  const w = Math.round(135 * scale[size]);
  const h = Math.round(82  * scale[size]);

  return (
    <svg
      viewBox="0 0 135 82"
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ISA Saúde"
      role="img"
      style={{ display: "block", overflow: "visible" }}
    >
      <defs>
        {/* Mask to punch the inner counter out of the "a" */}
        <mask id={`a-mask-${size}`}>
          <rect x="84" y="1" width="51" height="57" rx="10" fill="white" />
          {/* inner counter — upper-right rectangular hole */}
          <rect x="98" y="13" width="25" height="32" rx="7" fill="black" />
        </mask>
      </defs>

      {/* ── "i" — rounded rectangle ──────────────────────── */}
      <rect x="0" y="1" width="13" height="57" rx="6.5" fill={teal} />

      {/* ── "s" — S-curve as thick stroked path ─────────── */}
      <path
        d="M 66 7 H 46 C 32 7 27 16 27 23 C 27 32 37 35 47 35 H 55 C 65 35 71 39 71 48 C 71 57 62 62 49 62 H 27"
        stroke={teal}
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* ── "a" — rounded rect frame with interior counter ── */}
      <rect
        x="84" y="1" width="51" height="57" rx="10"
        fill={teal}
        mask={`url(#a-mask-${size})`}
      />

      {/* ── "SAÚDE" ─────────────────────────────────────── */}
      <text
        x="4" y="76"
        fill={pink}
        fontFamily="var(--font-nunito), 'Nunito', system-ui, sans-serif"
        fontWeight="700"
        fontSize="10"
        letterSpacing="2.6"
      >
        SAÚDE
      </text>
    </svg>
  );
}
