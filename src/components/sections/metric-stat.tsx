import Link from "next/link";

import { Icon } from "@/components/site/icon";
import type { Metric } from "@/content/metrics";

/**
 * A metric tile. When `evidenceHref` is set the whole tile becomes a link to
 * the case study that backs the figure; without it the tile is inert text, so
 * a number never implies evidence that isn't there.
 */
export function MetricStat({ label, value, caption, evidenceHref }: Metric) {
  const body = (
    <>
      <span className="text-label-md uppercase tracking-wider text-outline">
        {label}
      </span>
      <span className="text-headline-lg-mobile text-text-charcoal md:text-headline-lg">
        {value}
      </span>
      <span className="flex items-center gap-space-3xs text-body-sm text-on-surface-variant">
        {caption}
        {evidenceHref ? (
          <Icon
            name="arrow_forward"
            className="text-[14px] text-amber-text transition-transform group-hover:translate-x-0.5"
          />
        ) : null}
      </span>
    </>
  );

  if (!evidenceHref) {
    return <div className="flex flex-col gap-space-3xs">{body}</div>;
  }

  return (
    <Link
      href={evidenceHref}
      className="group flex flex-col gap-space-3xs rounded-lg transition-colors hover:text-text-charcoal"
    >
      {body}
    </Link>
  );
}
