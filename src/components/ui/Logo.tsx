interface LogoProps {
  variant?: "color" | "white";
  size?: "sm" | "md" | "lg";
}

const widths = { sm: 68, md: 86, lg: 110 };

export function Logo({ variant = "color", size = "md" }: LogoProps) {
  const isaColor   = variant === "white" ? "#FFFFFF" : "#00BCD4";
  const saudeColor = variant === "white" ? "rgba(255,255,255,0.82)" : "#E91E8C";
  const w = widths[size];

  // Inline SVG: fontes do DOM são aplicadas ao <text>, incluindo --font-nunito
  return (
    <svg
      viewBox="0 0 96 54"
      width={w}
      height="auto"
      aria-label="ISA Saúde"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", overflow: "visible" }}
    >
      {/* "isa" — Nunito Black 900 carregado via next/font */}
      <text
        x="0"
        y="38"
        fill={isaColor}
        fontFamily="var(--font-nunito), 'Nunito', sans-serif"
        fontWeight="900"
        fontSize="44"
        letterSpacing="-1"
      >
        isa
      </text>

      {/* "SAÚDE" — caixa alta, espaçada, pink */}
      <text
        x="3"
        y="52"
        fill={saudeColor}
        fontFamily="'Inter', system-ui, sans-serif"
        fontWeight="700"
        fontSize="10"
        letterSpacing="2.6"
      >
        SAÚDE
      </text>
    </svg>
  );
}
