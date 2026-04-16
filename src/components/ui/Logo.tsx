interface LogoProps {
  variant?: "color" | "white";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { isa: "text-2xl", saude: "text-[9px] tracking-[0.22em]" },
  md: { isa: "text-3xl", saude: "text-[10px] tracking-[0.24em]" },
  lg: { isa: "text-4xl", saude: "text-xs tracking-[0.26em]" },
};

export function Logo({ variant = "color", size = "md" }: LogoProps) {
  const s = sizes[size];
  const isaColor  = variant === "white" ? "text-white"         : "text-[#00BCD4]";
  const saudeColor = variant === "white" ? "text-white/80"     : "text-[#E91E8C]";

  return (
    <div className="flex flex-col leading-none select-none" aria-label="ISA Saúde">
      <span className={`${s.isa} font-black ${isaColor} lowercase leading-none`}>isa</span>
      <span className={`${s.saude} font-bold ${saudeColor} uppercase mt-0.5`}>saúde</span>
    </div>
  );
}
