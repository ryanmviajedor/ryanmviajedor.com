import Link from "next/link";

import { Icon } from "@/components/site/icon";
import { site } from "@/content/site";

/**
 * Shown beneath the published case studies. States plainly that more work is
 * being written up, rather than padding the page with invented projects or
 * greyed-out fake cards.
 */
export function WorkPlaceholder() {
  return (
    <div className="rounded-xl border border-dashed border-border-subtle bg-surface-container-lowest p-space-lg md:p-space-xl">
      <div className="flex max-w-2xl flex-col gap-space-sm">
        <span className="flex items-center gap-space-2xs text-label-md uppercase tracking-wider text-outline">
          <span aria-hidden="true" className="size-2 rounded-full bg-amber-accent" />
          More case studies in progress
        </span>
        <h2 className="text-headline-md text-text-charcoal">
          Further work is being written up.
        </h2>
        <p className="text-body-lg text-on-surface-variant">
          Several projects are still under NDA or awaiting write-up. If you&apos;d
          like detail on specific production work — architecture decisions,
          release process, or team practices — I&apos;m happy to walk through it
          directly.
        </p>
        <div className="mt-space-2xs flex flex-wrap items-center gap-space-sm">
          <Link
            href="/contact"
            className="inline-flex items-center gap-space-2xs rounded-lg text-body-md font-medium text-text-charcoal transition-colors hover:text-amber-text"
          >
            Get in touch
            <Icon name="arrow_forward" className="text-[16px]" />
          </Link>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-space-2xs rounded-lg text-body-md font-medium text-on-surface-variant transition-colors hover:text-text-charcoal"
          >
            LinkedIn
            <Icon name="open_in_new" className="text-[16px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
