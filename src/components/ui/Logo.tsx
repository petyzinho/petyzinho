import Image from "next/image";

interface LogoProps {
  variant?: "color" | "white";
  size?: "sm" | "md" | "lg";
}

const widths = { sm: 72, md: 90, lg: 115 };

export function Logo({ variant = "color", size = "md" }: LogoProps) {
  const w = widths[size];

  // Logo colorido (padrão) ou versão branca para fundos escuros
  const src = variant === "white" ? "/images/logo-white.png" : "/images/logo.png";

  return (
    <Image
      src={src}
      alt="ISA Saúde"
      width={w}
      height={Math.round(w * 0.6)}
      style={{ objectFit: "contain" }}
      priority
    />
  );
}
