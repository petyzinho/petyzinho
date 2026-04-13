import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  pill?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  pill,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {pill && (
        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-isa-blue-600 bg-isa-blue-50 rounded-pill">
          {pill}
        </span>
      )}
      <h2
        className={cn(
          "font-display font-bold text-3xl md:text-4xl text-isa-gray-900 text-balance",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-isa-gray-600 max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
