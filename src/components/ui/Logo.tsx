interface LogoProps {
  variant?: "color" | "white";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "color", size = "md" }: LogoProps) {
  const isaColor = variant === "white" ? "#FFFFFF" : "#00BCD4";
  const saudeColor = variant === "white" ? "rgba(255,255,255,0.75)" : "#E91E8C";

  const sizes = {
    sm: { isa: "1.4rem", saude: "0.45rem", spacing: "0.28em" },
    md: { isa: "1.9rem", saude: "0.55rem", spacing: "0.3em" },
    lg: { isa: "2.4rem", saude: "0.65rem", spacing: "0.32em" },
  };

  const s = sizes[size];

  return (
    <div className="flex flex-col leading-none select-none">
      <span
        style={{
          color: isaColor,
          fontSize: s.isa,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          fontFamily: "'Plus Jakarta Sans', 'Nunito', sans-serif",
        }}
      >
        isa
      </span>
      <span
        style={{
          color: saudeColor,
          fontSize: s.saude,
          fontWeight: 700,
          letterSpacing: s.spacing,
          marginTop: "1px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        SAÚDE
      </span>
    </div>
  );
}
