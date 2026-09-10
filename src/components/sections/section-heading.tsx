import { cn } from "@/lib/utils";

/**
 * Eyebrow + h2 pair. Uses the `-mobile` type tokens the export defined but
 * never wired up, so 36px headlines reflow to 26px on small screens.
 */
export function SectionHeading({
  eyebrow,
  title,
  eyebrowTone = "amber",
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  eyebrowTone?: "amber" | "muted";
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-space-2xs", className)}>
      {eyebrow ? (
        <span
          className={cn(
            "text-label-md uppercase",
            eyebrowTone === "amber"
              ? "font-semibold tracking-wider text-amber-text"
              : "tracking-wider text-outline"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-headline-lg-mobile text-text-charcoal md:text-headline-lg">
        {title}
      </h2>
      {children}
    </div>
  );
}
