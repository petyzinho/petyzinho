interface LogoProps {
  variant?: "color" | "white";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "color", size = "md" }: LogoProps) {
  const isaColor    = variant === "white" ? "#FFFFFF" : "#00BCD4";
  const saudeColor  = variant === "white" ? "rgba(255,255,255,0.80)" : "#E91E8C";

  const sizes = {
    sm: { isa: "1.55rem", saude: "0.46rem", spacing: "0.26em", gap: "2px" },
    md: { isa: "2.05rem", saude: "0.56rem", spacing: "0.28em", gap: "3px" },
    lg: { isa: "2.65rem", saude: "0.68rem", spacing: "0.30em", gap: "4px" },
  };

  const s = sizes[size];

  return (
    <div className="flex flex-col leading-none select-none">
      {/* "isa" — Nunito Black (weight 900) para traços arredondados e espessos */}
      <span
        style={{
          color: isaColor,
          fontSize: s.isa,
          fontWeight: 900,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          fontFamily: "var(--font-nunito), 'Nunito', 'Varela Round', sans-serif",
        }}
      >
        isa
      </span>

      {/* "SAÚDE" — caixa alta, espaçada, pink */}
      <span
        style={{
          color: saudeColor,
          fontSize: s.saude,
          fontWeight: 700,
          letterSpacing: s.spacing,
          marginTop: s.gap,
          fontFamily: "'Inter', 'Nunito', sans-serif",
          textTransform: "uppercase",
        }}
      >
        SAÚDE
      </span>
    </div>
  );
}
