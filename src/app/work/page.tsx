import { PageHeader } from "@/components/sections/page-header";
import { PrincipleCard } from "@/components/sections/principle-card";
import { ProjectCard } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { principles } from "@/content/principles";
import { projects } from "@/content/projects";
import { tools } from "@/content/tools";
import { ToolCard } from "@/components/sections/tool-card";

export const metadata = {
  title: "Work",
  description:
    "Selected mobile products and engineering systems built for real users — Aldrees, payments, delivery automation, and cross-platform architecture.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHeader
        eyebrow="Portfolio"
        eyebrowTone="amber"
        title="Selected work"
        lead="Mobile products and engineering systems built for real users."
        aside={
          <div className="flex items-center gap-space-sm text-body-md text-outline">
            <span>2021 — Present</span>
            <span aria-hidden="true" className="size-1.5 rounded-full bg-outline" />
            <span>{projects.length} Featured Systems</span>
          </div>
        }
      />

      <section className="mx-auto flex max-w-container-max flex-col gap-space-2xl px-gutter pb-space-2xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            reversed={index % 2 === 1}
            priority={index === 0}
          />
        ))}
      </section>

      <section className="bg-surface-container py-space-2xl">
        <div className="mx-auto flex max-w-container-max flex-col gap-space-2xl px-gutter">
          <div>
            <SectionHeading
              eyebrow="Capabilities"
              title="Tools I work with"
              className="mb-space-lg"
            />
            <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
              {tools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>

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
