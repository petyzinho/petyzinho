interface LogoProps {
  variant?: "color" | "white";
  size?: "sm" | "md" | "lg";
}

const widths = { sm: 72, md: 90, lg: 115 };

export function Logo({ variant = "color", size = "md" }: LogoProps) {
  const w = widths[size];
  const src = variant === "white" ? "/images/logo-white.svg" : "/images/logo.svg";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="ISA Saúde"
      width={w}
      height={Math.round(w * 0.59)}
      style={{ objectFit: "contain", display: "block" }}
    />
  );
}
