import Link from "next/link";

import { Icon } from "@/components/site/icon";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-container-max flex-col items-start px-gutter py-space-2xl">
      <span className="mb-space-xs text-label-md uppercase tracking-wider text-outline">
        404
      </span>
      <h1 className="mb-space-sm text-headline-xl-mobile text-text-charcoal md:text-headline-xl">
        That page doesn&apos;t exist.
      </h1>
      <p className="mb-space-lg max-w-xl text-body-lg text-on-surface-variant">
        The link may be out of date, or the page may have moved. Everything on
        the site is reachable from the navigation above.
      </p>
      <div className="flex flex-wrap items-center gap-space-sm">
        <Button asChild variant="primary">
          <Link href="/">
            Back to home
            <Icon name="arrow_forward" className="text-[16px]" />
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/work">View work</Link>
        </Button>
      </div>
    </section>
  );
}
