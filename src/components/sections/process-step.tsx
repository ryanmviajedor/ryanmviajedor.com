import type { ProcessStep as Step } from "@/content/process";

/**
 * One step of the build process. Keeps the oversized numeral and card
 * treatment from the original design, but trades the 2×2 icon grid for an
 * inline list — six steps at the old density made the page twice as long.
 */
export function ProcessStep({ number, title, lead, body, points }: Step) {
  return (
    <article className="rounded-xl bg-surface-container-low p-space-lg transition-all duration-300 hover:shadow-md md:p-space-xl">
      <div className="grid grid-cols-1 items-start gap-space-lg lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-4">
          <span
            aria-hidden="true"
            className="mb-space-2xs text-[56px] font-bold leading-none text-outline/30 md:text-[72px]"
          >
            {number}
          </span>
          <h2 className="mb-space-2xs text-headline-md text-text-charcoal md:text-headline-lg-mobile">
            {title}
          </h2>
          <p className="text-body-md font-semibold text-on-surface-variant">{lead}</p>
        </div>

        <div className="flex flex-col gap-space-md lg:col-span-8">
          <p className="text-body-lg leading-relaxed text-on-surface-variant">
            {body}
          </p>
          <ul className="flex flex-col gap-space-2xs border-t border-border-subtle/60 pt-space-md">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-space-xs text-body-md text-on-surface-variant"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-accent"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
