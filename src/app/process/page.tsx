import { PageHeader } from "@/components/sections/page-header";
import { ProcessStep } from "@/components/sections/process-step";
import { Icon } from "@/components/site/icon";
import { processSteps } from "@/content/process";

export const metadata = {
  title: "Process",
  description:
    "How a mobile product gets built — understand, architect, build, validate, automate, ship.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHeader
        eyebrow="Process"
        title="How I build production mobile systems"
        lead="From product goals through architecture, testing and automation to a release that can be repeated."
        aside={
          <div className="flex items-center gap-space-sm rounded-lg bg-surface-container px-space-md py-space-xs">
            <Icon name="settings_suggest" className="text-amber-text" />
            <span className="text-body-md font-semibold text-text-charcoal">
              Six steps, end to end
            </span>
          </div>
        }
      />

      <section className="mx-auto max-w-container-max px-gutter pb-space-2xl">
        <ol className="flex flex-col gap-space-lg">
          {processSteps.map((step) => (
            <li key={step.number}>
              <ProcessStep {...step} />
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-space-2xl bg-primary-container py-space-2xl text-on-primary-container">
        <div className="mx-auto max-w-container-max px-gutter">
          <div className="flex max-w-3xl flex-col gap-space-md">
            <span className="text-label-md uppercase tracking-wider text-amber-accent">
              Philosophy
            </span>
            <h2 className="text-headline-lg-mobile text-on-primary md:text-headline-lg">
              Build for production, not just for demo day.
            </h2>
            <p className="text-body-lg text-on-primary/80">
              A mobile product isn&apos;t finished when the code compiles. It has
              to be tested, automated, released, monitored and maintained. The
              work I care about is the whole lifecycle — from the first product
              requirement to what production teaches you afterwards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
