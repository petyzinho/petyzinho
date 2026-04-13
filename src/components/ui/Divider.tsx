import { cn } from "@/lib/utils";

type DividerProps = {
  color?: string;
  flip?: boolean;
  className?: string;
};

export function Divider({
  color = "#F8FAFC",
  flip = false,
  className,
}: DividerProps) {
  return (
    <div
      className={cn("overflow-hidden leading-none", flip && "rotate-180", className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16"
      >
        <path
          d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
