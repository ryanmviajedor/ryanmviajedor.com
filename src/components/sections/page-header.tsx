import { cn } from "@/lib/utils";

/** Shared hero block for Work / Process / Contact. */
export function PageHeader({
  eyebrow,
  eyebrowTone = "muted",
  title,
  lead,
  aside,
  className,
}: {
  eyebrow?: string;
  eyebrowTone?: "amber" | "muted";
  title: string;
  lead?: string;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "mx-auto max-w-container-max px-gutter pt-space-2xl pb-space-xl",
        className
      )}
    >
      <div className="flex flex-col justify-between gap-space-lg md:flex-row md:items-end">
        <div className="flex max-w-2xl flex-col">
          {eyebrow ? (
            <span
              className={cn(
                "mb-space-3xs block text-label-md uppercase tracking-wider",
                eyebrowTone === "amber" ? "text-amber-text" : "text-outline"
              )}
            >
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mb-space-md text-headline-xl-mobile text-text-charcoal md:text-headline-xl">
            {title}
          </h1>
          {lead ? (
            <p className="text-body-lg text-on-surface-variant">{lead}</p>
          ) : null}
        </div>
        {aside}
      </div>
    </section>
  );
}
