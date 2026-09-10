import { SectionHeading } from "@/components/sections/section-heading";
import { journeyOutcome, journeyStages } from "@/content/journey";

/**
 * Career progression as an arc, not a resume — titles and shape only.
 * Renders nothing at all while journeyStages is empty, so an unfilled section
 * never shows as an empty heading on the live site.
 */
export function Journey() {
  if (journeyStages.length === 0) return null;

  return (
    <section
      id="journey"
      className="mx-auto mb-space-2xl max-w-container-max scroll-mt-24 px-gutter"
    >
      <SectionHeading
        eyebrow="Journey"
        title="How the work has grown."
        className="mb-space-xl max-w-xl"
      />

      <ol className="flex flex-col gap-space-2xs md:flex-row md:items-stretch md:gap-space-sm">
        {journeyStages.map((stage, index) => (
          <li
            key={stage.title}
            className="flex flex-1 items-center gap-space-sm md:flex-col md:items-start"
          >
            <div
              className={[
                "flex w-full flex-col gap-space-3xs rounded-xl border p-space-md transition-colors",
                stage.current
                  ? "border-amber-accent/40 bg-surface-container-low"
                  : "border-border-subtle bg-surface-container-lowest",
              ].join(" ")}
            >
              <span className="text-label-md uppercase tracking-wider text-outline">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-headline-sm text-text-charcoal">
                {stage.title}
              </span>
              {stage.note ? (
                <span className="text-body-sm text-on-surface-variant">
                  {stage.note}
                </span>
              ) : null}
              {stage.current ? (
                <span className="mt-space-3xs flex items-center gap-space-3xs text-label-md uppercase tracking-wider text-amber-text">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-amber-accent"
                  />
                  Now
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-space-md text-body-lg text-on-surface-variant">
        {journeyOutcome}
      </p>
    </section>
  );
}
