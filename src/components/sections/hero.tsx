import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/site/icon";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

/**
 * Answers four questions above the fold: who, what, where, and what he's open
 * to. Kept to one column of text plus the portrait — the specialty row carries
 * the "what I know" signal so the prose doesn't have to.
 */
export function Hero() {
  return (
    <section className="mx-auto flex max-w-container-max flex-col items-start justify-between gap-space-xl px-gutter pt-space-2xl pb-space-xl lg:flex-row lg:gap-space-2xl">
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

        <h1 className="mb-space-xs text-headline-xl-mobile text-text-charcoal md:text-headline-xl">
          {site.tagline}
        </h1>

        <p className="mb-space-md text-headline-sm text-on-surface-variant">
          {site.name} — {site.role}
        </p>

        <ul className="mb-space-md flex flex-wrap gap-x-space-xs gap-y-space-3xs">
          {site.specialties.map((item, index) => (
            <li
              key={item}
              className="flex items-center gap-x-space-xs text-body-md text-on-surface-variant"
            >
              {index > 0 ? (
                <span aria-hidden="true" className="text-outline-variant">
                  ·
                </span>
              ) : null}
              {item}
            </li>
          ))}
        </ul>

        <p className="mb-space-xl text-body-lg leading-relaxed text-on-surface-variant">
          {site.openTo}
        </p>

        <div className="flex flex-wrap items-center gap-space-sm">
          <Button asChild variant="primary">
            <Link href="/work">
              View my work
              <Icon name="arrow_forward" className="text-[16px]" />
            </Link>
          </Button>

          <Button asChild variant="secondary">
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <Icon name="open_in_new" className="text-[16px]" />
            </a>
          </Button>

          {/* Rendered only once site.resume points at a real file. */}
          {site.resume ? (
            <Button asChild variant="secondary">
              <a href={site.resume} target="_blank" rel="noopener noreferrer">
                Resume
                <Icon name="description" className="text-[16px]" />
              </a>
            </Button>
          ) : null}

          <Button asChild variant="ghost">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>

      <div className="w-full flex-shrink-0 lg:w-80">
        <div className="rounded-xl bg-surface-container-low p-space-md shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <div className="relative h-72 w-full overflow-hidden rounded-lg">
            <Image
              src="/images/ryan-portrait.jpg"
              alt={`${site.name}, ${site.longRole}, in a minimalist workspace.`}
              fill
              sizes="(min-width: 1024px) 320px, 100vw"
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
                {site.role} · Riyadh
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
