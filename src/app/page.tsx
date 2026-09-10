import { AboutSection } from "@/components/sections/about-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { MetricStat } from "@/components/sections/metric-stat";
import { PillarCard } from "@/components/sections/pillar-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { competencies } from "@/content/competencies";
import { metrics } from "@/content/metrics";
import { site } from "@/content/site";

export const metadata = {
  title: `${site.name} — ${site.role} | Flutter, Android & iOS | Riyadh`,
  description:
    "Mobile Team Lead in Riyadh specializing in Flutter, Android, iOS, CI/CD, Fastlane, payments, APIs and production mobile app delivery.",
  alternates: { canonical: "/" },
};

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <Hero />

      {/* Impact — each tile can later link to the case study evidencing it. */}
      <section
        aria-label="Impact"
        className="mb-space-2xl w-full bg-surface-container-low py-space-lg"
      >
        {/* Single column below 640px: at 2-up on a 375px screen the longer
            values ("Android + iOS") wrap mid-phrase. */}
        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-space-md px-gutter sm:grid-cols-2 sm:gap-space-lg md:grid-cols-4">
          {metrics.map((metric) => (
            <MetricStat key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      <AboutSection />

      <section
        id="capabilities"
        className="mx-auto mb-space-2xl flex max-w-container-max scroll-mt-24 flex-col gap-space-xl px-gutter"
      >
        <SectionHeading
          eyebrow="Core Competencies"
          title="Engineering philosophy built on precision and reliability."
          className="max-w-xl"
        />
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
          {competencies.map((item) => (
            <PillarCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Hidden until real career data is supplied. */}
      <Journey />

      <CtaBanner
        eyebrow="Ready to collaborate"
        title="Looking for a Mobile Team Lead who can ship?"
        body={site.openTo}
        ctaLabel="Get in touch"
        ctaHref="/contact"
      />
    </div>
  );
}
