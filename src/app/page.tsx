import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/sections/cta-banner";
import { MetricStat } from "@/components/sections/metric-stat";
import { PillarCard } from "@/components/sections/pillar-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { Icon } from "@/components/site/icon";
import { Button } from "@/components/ui/button";
import { competencies } from "@/content/competencies";
import { metrics, profileStats } from "@/content/metrics";
import { site } from "@/content/site";

export const metadata = {
  title: `${site.name} · ${site.role}`,
  description:
    "Mobile Team Lead specializing in Flutter, native Android & iOS, CI/CD, Fastlane, payments, APIs, and production app delivery.",
};

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero */}
      <section className="mx-auto flex max-w-container-max flex-col items-start justify-between gap-space-2xl px-gutter pt-space-2xl pb-space-xl md:flex-row">
        <div className="flex max-w-2xl flex-col">
          <div className="mb-space-sm flex items-center gap-space-2xs">
            <span
              aria-hidden="true"
              className="inline-block size-2 rounded-full bg-amber-accent"
            />
            <span className="text-label-md uppercase tracking-wider text-outline">
              {site.location}
            </span>
          </div>

          <h1 className="mb-space-md text-headline-xl-mobile text-text-charcoal md:text-headline-xl">
            {site.tagline}
          </h1>

          <p className="mb-space-xl text-body-lg leading-relaxed text-on-surface-variant">
            Mobile Team Lead specializing in Flutter, native Android &amp; iOS,
            CI/CD, Fastlane, payments, APIs, and production app delivery. Focused
            on clean architecture, resilient codebases, and high-performing
            engineering teams.
          </p>

          <div className="flex flex-wrap items-center gap-space-sm">
            <Button asChild variant="primary">
              <Link href="/work">
                View my work
                <Icon name="arrow_forward" className="text-[16px]" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact">Let&apos;s talk</Link>
            </Button>
          </div>
        </div>

        {/* Profile card */}
        <div className="w-full flex-shrink-0 md:w-80">
          <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-low p-space-md shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div className="relative h-72 w-full overflow-hidden rounded-lg">
              <Image
                src="/images/ryan-portrait.jpg"
                alt={`${site.name}, ${site.longRole}, in a minimalist workspace.`}
                fill
                sizes="(min-width: 768px) 320px, 100vw"
                className="object-cover"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"
              />
              <div className="absolute right-space-xs bottom-space-xs left-space-xs text-on-primary">
                <span className="block text-headline-sm">{site.name}</span>
                <span className="text-body-sm opacity-90">
                  Lead Mobile Engineer · Riyadh
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-space-xs pt-space-3xs">
              {profileStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-surface-container-lowest p-space-xs"
                >
                  <span className="block text-headline-md text-text-charcoal">
                    {stat.value}
                  </span>
                  <span className="text-label-md text-outline">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credibility bar */}
      <section className="mb-space-2xl w-full bg-surface-container-low py-space-lg">
        <div className="mx-auto grid max-w-container-max grid-cols-2 gap-space-lg px-gutter md:grid-cols-4">
          {metrics.map((metric) => (
            <MetricStat key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      {/* Core competencies */}
      <section className="mx-auto mb-space-2xl flex max-w-container-max flex-col gap-space-xl px-gutter">
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

      <CtaBanner
        eyebrow="Ready to collaborate"
        title="Have a mobile project or leadership role in mind?"
        body="Based in Riyadh and available for select high-impact mobile engineering advisory and team lead engagements."
        ctaLabel="Get in touch"
        ctaHref="/contact"
      />
    </div>
  );
}
