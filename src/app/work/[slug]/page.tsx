import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/site/icon";
import { Badge } from "@/components/ui/badge";
import {
  detailedCaseStudies,
  getCaseStudy,
  hasDetail,
  type CaseStudy,
} from "@/content/case-studies";

type Params = { params: Promise<{ slug: string }> };

/**
 * Only studies with narrative content get a page. An entry that is still just
 * a summary stays on the index — no thin detail page, and no link pointing at
 * one from the card.
 */
export function generateStaticParams() {
  return detailedCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study || !hasDetail(study)) return {};

  return {
    title: study.name,
    description: study.tagline,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study || !hasDetail(study)) notFound();

  return (
    <article className="flex w-full flex-col">
      <header className="mx-auto max-w-container-max px-gutter pt-space-2xl pb-space-lg">
        <Link
          href="/work"
          className="mb-space-md inline-flex items-center gap-space-2xs rounded-lg text-body-sm text-outline transition-colors hover:text-text-charcoal"
        >
          <Icon name="arrow_forward" className="rotate-180 text-[16px]" />
          All work
        </Link>

        <div className="mb-space-md flex flex-wrap items-center gap-space-xs">
          <Badge variant="solid">{study.category}</Badge>
          <span className="text-body-sm font-medium text-on-surface-variant">
            {study.role}
          </span>
        </div>

        <h1 className="mb-space-sm max-w-3xl text-headline-xl-mobile text-text-charcoal md:text-headline-xl">
          {study.name}
        </h1>
        <p className="max-w-2xl text-body-lg text-on-surface-variant">
          {study.tagline}
        </p>
      </header>

      {/* Fact strip */}
      <section className="mx-auto w-full max-w-container-max px-gutter">
        <dl className="grid grid-cols-1 gap-space-md rounded-xl bg-surface-container-low p-space-lg sm:grid-cols-3">
          <Fact label="Role" value={study.role} />
          <Fact label="Platform" value={study.platforms.join(" · ")} />
          {study.metric ? (
            <Fact label="Impact" value={study.metric.value} note={study.metric.caption} />
          ) : null}
        </dl>

        <ul className="mt-space-md flex flex-wrap gap-space-2xs">
          {study.technologies.map((tech) => (
            <li key={tech}>
              <Badge variant="tech">{tech}</Badge>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto flex w-full max-w-container-max flex-col gap-space-xl px-gutter py-space-2xl">
        <Prose title="Problem" body={study.problem} />
        <Prose title="Solution" body={study.solution} />
        <Prose title="Architecture" body={study.architecture} />
        <List title="Challenges" items={study.challenges} />
        <List title="Results" items={study.results} />

        {study.screenshots?.length ? (
          <section>
            <SectionTitle>Screenshots</SectionTitle>
            <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-3">
              {study.screenshots.map((shot) => (
                <div
                  key={shot.src}
                  className="relative aspect-[9/16] overflow-hidden rounded-xl bg-surface-container shadow-sm"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {study.links?.length ? (
          <section>
            <SectionTitle>Links</SectionTitle>
            <ul className="flex flex-wrap gap-space-sm">
              {study.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-space-2xs rounded-lg bg-surface-container-lowest px-space-sm py-space-xs text-body-md text-text-charcoal transition-colors hover:bg-surface-container"
                  >
                    {link.label}
                    <Icon name="open_in_new" className="text-[16px] text-outline" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </article>
  );
}

function Fact({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-space-3xs">
      <dt className="text-label-md uppercase tracking-wider text-outline">
        {label}
      </dt>
      <dd className="text-headline-sm text-text-charcoal">{value}</dd>
      {note ? <dd className="text-body-sm text-on-surface-variant">{note}</dd> : null}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-space-md text-headline-md text-text-charcoal">{children}</h2>
  );
}

/** Renders nothing when the field is absent — no empty headings. */
function Prose({ title, body }: { title: string; body?: string }) {
  if (!body) return null;
  return (
    <section className="max-w-3xl">
      <SectionTitle>{title}</SectionTitle>
      <p className="text-body-lg leading-relaxed text-on-surface-variant">{body}</p>
    </section>
  );
}

function List({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <section className="max-w-3xl">
      <SectionTitle>{title}</SectionTitle>
      <ul className="flex flex-col gap-space-2xs">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-space-xs text-body-lg text-on-surface-variant"
          >
            <span
              aria-hidden="true"
              className="mt-2.5 size-1.5 shrink-0 rounded-full bg-amber-accent"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export type { CaseStudy };
