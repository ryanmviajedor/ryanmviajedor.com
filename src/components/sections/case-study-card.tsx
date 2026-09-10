import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/site/icon";
import { Badge } from "@/components/ui/badge";
import { hasDetail, type CaseStudy } from "@/content/case-studies";
import { cn } from "@/lib/utils";

/**
 * Case-study summary card.
 *
 * Every optional field degrades cleanly: no image renders a text-led card
 * rather than a placeholder graphic, and the "Read case study" link only
 * appears once the entry has narrative content behind it.
 */
export function CaseStudyCard({
  study,
  reversed = false,
  priority = false,
}: {
  study: CaseStudy;
  reversed?: boolean;
  priority?: boolean;
}) {
  const detailed = hasDetail(study);
  const hasImage = Boolean(study.image);

  return (
    <article className="group rounded-xl bg-surface-container-low p-space-lg transition-all duration-300 hover:shadow-xl md:p-space-xl">
      <div
        className={cn(
          "grid items-center gap-space-lg",
          hasImage ? "grid-cols-1 lg:grid-cols-12" : "grid-cols-1"
        )}
      >
        <div
          className={cn(
            "flex flex-col justify-between",
            hasImage && "lg:col-span-6",
            hasImage && reversed && "order-1 lg:order-2"
          )}
        >
          <div>
            <div className="mb-space-md flex flex-wrap items-center gap-space-xs">
              <Badge variant="solid">{study.category}</Badge>
              <span className="text-body-sm font-medium text-on-surface-variant">
                {study.role}
              </span>
            </div>

            <h2 className="mb-space-sm text-headline-lg-mobile text-text-charcoal md:text-headline-lg">
              {study.name}
            </h2>
            <p className="mb-space-lg text-body-lg text-on-surface-variant">
              {study.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-space-md">
            <dl className="flex flex-wrap gap-x-space-lg gap-y-space-2xs">
              <div className="flex flex-col gap-space-3xs">
                <dt className="text-label-md uppercase tracking-wider text-outline">
                  Platform
                </dt>
                <dd className="text-body-md text-text-charcoal">
                  {study.platforms.join(" · ")}
                </dd>
              </div>
            </dl>

            <ul className="flex flex-wrap gap-space-2xs">
              {study.technologies.map((tech) => (
                <li key={tech}>
                  <Badge variant="tech">{tech}</Badge>
                </li>
              ))}
            </ul>

            {study.metric ? (
              <div className="flex flex-wrap items-baseline gap-space-sm border-t border-border-subtle/60 pt-space-md">
                <span className="text-headline-md font-bold text-text-charcoal">
                  {study.metric.value}
                </span>
                <span className="text-body-sm text-outline">
                  {study.metric.caption}
                </span>
              </div>
            ) : null}

            {/* Store listings and write-ups. Third-party proof the product
                shipped, so these sit above the internal case-study link.
                items-center aligns the two badges' artwork optically, since
                their canvases carry different amounts of clear space. */}
            {study.links?.length ? (
              <ul className="flex flex-wrap items-center gap-space-2xs">
                {study.links.map((link) =>
                  link.badge ? (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-lg transition-opacity hover:opacity-80"
                      >
                        {/* Plain img: these are fixed-size vendor assets, and
                            next/image would need dangerouslyAllowSVG for the
                            Apple badge. Dimensions are set to avoid layout shift. */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={link.badge.src}
                          alt={link.label}
                          width={link.badge.width}
                          height={link.badge.height}
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    </li>
                  ) : (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-space-2xs rounded-lg bg-surface-container-lowest px-space-sm py-space-2xs text-body-sm font-medium text-text-charcoal transition-colors hover:bg-surface-container hover:text-amber-text"
                      >
                        {link.label}
                        <Icon name="open_in_new" className="text-[16px] text-outline" />
                      </a>
                    </li>
                  )
                )}
              </ul>
            ) : null}

            {detailed ? (
              <Link
                href={`/work/${study.slug}`}
                className="inline-flex items-center gap-space-2xs self-start rounded-lg text-body-md font-medium text-text-charcoal transition-colors hover:text-amber-text"
              >
                Read case study
                <Icon
                  name="arrow_forward"
                  className="text-[16px] transition-transform group-hover:translate-x-1"
                />
              </Link>
            ) : null}
          </div>
        </div>

        {study.image ? (
          <div
            className={cn("lg:col-span-6", reversed && "order-2 lg:order-1")}
          >
            {/* 16:9 matches the device-mockup key art these use, so the
                composition isn't cropped to fit a fixed height. */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-md transition-transform duration-500 group-hover:scale-[1.01]">
              <Image
                src={study.image.src}
                alt={study.image.alt}
                fill
                sizes="(min-width: 1024px) 570px, 100vw"
                className="object-cover"
                priority={priority}
              />
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
