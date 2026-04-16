interface LogoProps {
  variant?: "color" | "white";
  size?: "sm" | "md" | "lg";
}

const widths = { sm: 72, md: 90, lg: 115 };

export function Logo({ variant = "color", size = "md" }: LogoProps) {
  const w = widths[size];
  const src = "/images/logo.png";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="ISA Saúde"
      width={w}
      height={w}
      style={{ objectFit: "contain", display: "block", mixBlendMode: "multiply" }}
    />
  );
}
