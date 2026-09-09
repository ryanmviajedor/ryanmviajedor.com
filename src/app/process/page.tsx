import { PageHeader } from "@/components/sections/page-header";
import { ProcessChapter } from "@/components/sections/process-chapter";
import { Icon } from "@/components/site/icon";
import { processChapters } from "@/content/process";

export const metadata = {
  title: "Process",
  description:
    "How I build production mobile systems — from product discovery through scalable architecture, testing, automated delivery, and long-term support.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHeader
        eyebrow="Process"
        title="How I build production mobile systems"
        lead="From initial product discovery through scalable architecture, rigorous testing, automated delivery, and long-term production support."
        aside={
          <div className="flex items-center gap-space-sm rounded-lg bg-surface-container px-space-md py-space-xs">
            <Icon name="settings_suggest" className="text-amber-accent" />
            <span className="text-body-md font-semibold text-text-charcoal">
              End-to-End Execution
            </span>
          </div>
        }
      />

      <section className="mx-auto max-w-container-max px-gutter pb-space-2xl">
        <div className="flex flex-col gap-space-2xl">
          {processChapters.map((chapter) => (
            <ProcessChapter key={chapter.number} {...chapter} />
          ))}
        </div>
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
              A mobile product isn&apos;t finished when the code compiles. It needs
              to be tested, automated, released, monitored, maintained, and
              continuously improved. My approach is to think about the entire
              lifecycle — from the first product requirement to the moment real
              users interact with the application.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
