import { cn } from "@/lib/utils";

type TagVariant = "blue" | "green" | "teal" | "gray";

type TagProps = {
  children: React.ReactNode;
  variant?: TagVariant;
  className?: string;
};

const variantClasses: Record<TagVariant, string> = {
  blue: "bg-isa-pink-50 text-isa-pink-700",
  green: "bg-isa-green-50 text-isa-green-600",
  teal: "bg-teal-50 text-teal-700",
  gray: "bg-isa-gray-100 text-isa-gray-600",
};

export function Tag({ children, variant = "blue", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-pill",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
