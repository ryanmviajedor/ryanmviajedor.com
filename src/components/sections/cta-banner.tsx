import Link from "next/link";

import { Button } from "@/components/ui/button";

/** Dark editorial callout. Used on About; the Contact page has its own variant. */
export function CtaBanner({
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="mx-auto mb-space-2xl max-w-container-max px-gutter">
      <div className="flex flex-col items-start justify-between gap-space-lg rounded-xl bg-primary p-space-lg text-on-primary md:flex-row md:items-center md:p-space-xl">
        <div className="flex max-w-xl flex-col gap-space-xs">
          <span className="text-label-md uppercase tracking-wider text-amber-accent">
            {eyebrow}
          </span>
          <h2 className="text-headline-lg-mobile text-on-primary md:text-headline-lg">
            {title}
          </h2>
          <p className="text-body-md text-on-primary-container">{body}</p>
        </div>
        <Button asChild variant="onDark" size="lg" className="text-body-md">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
