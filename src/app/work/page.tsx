import { CaseStudyCard } from "@/components/sections/case-study-card";
import { PageHeader } from "@/components/sections/page-header";
import { PrincipleCard } from "@/components/sections/principle-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { TechStack } from "@/components/sections/tech-stack";
import { WorkPlaceholder } from "@/components/sections/work-placeholder";
import { caseStudies } from "@/content/case-studies";
import { principles } from "@/content/principles";

export const metadata = {
  title: "Work",
  description:
    "Selected mobile engineering work by Ryan Viajedor — production Flutter, Android and iOS delivery.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHeader
        eyebrow="Portfolio"
        eyebrowTone="amber"
        title="Selected work"
        lead="Mobile products and engineering systems built for production."
      />

      <section className="mx-auto flex max-w-container-max flex-col gap-space-xl px-gutter pb-space-2xl">
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={study.slug}
            study={study}
            reversed={index % 2 === 1}
            priority={index === 0}
          />
        ))}
        <WorkPlaceholder />
      </section>

      <section className="bg-surface-container py-space-2xl">
        <div className="mx-auto flex max-w-container-max flex-col gap-space-2xl px-gutter">
          <TechStack />

          <div>
            <SectionHeading
              eyebrow="Philosophy"
              title="How I build"
              className="mb-space-lg"
            />
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <PrincipleCard key={principle.number} {...principle} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
