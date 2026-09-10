"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * Route-level error boundary. Deliberately shows no stack or message — the
 * visitor can't act on either, and it would leak internals.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex max-w-container-max flex-col items-start px-gutter py-space-2xl">
      <span className="mb-space-xs text-label-md uppercase tracking-wider text-outline">
        Something went wrong
      </span>
      <h1 className="mb-space-sm text-headline-lg-mobile text-text-charcoal md:text-headline-lg">
        This page failed to load.
      </h1>
      <p className="mb-space-lg max-w-xl text-body-lg text-on-surface-variant">
        Try again — and if it keeps happening, the contact page has other ways
        to reach me.
      </p>
      <div className="flex flex-wrap items-center gap-space-sm">
        <Button variant="primary" onClick={reset}>
          Try again
        </Button>
        <Button asChild variant="secondary">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </section>
  );
}
