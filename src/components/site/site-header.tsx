import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/site/mobile-nav";
import { SiteNav } from "@/components/site/site-nav";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full bg-surface/80 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-gutter">
        <Link href="/" className="flex flex-col rounded-lg">
          <span className="text-headline-sm text-text-charcoal">{site.name}</span>
          <span className="text-label-md text-outline">{site.role}</span>
        </Link>

        <SiteNav />

        <div className="flex items-center gap-space-sm">
          {/* Replaces the mockup's generic person glyph, which was a decorative
              div that looked like an account control but did nothing. */}
          <Link
            href="/"
            aria-label={`${site.name} — about`}
            className="hidden rounded-full ring-1 ring-border-subtle transition-all hover:ring-amber-accent md:block"
          >
            <Image
              src="/images/ryan-portrait.jpg"
              alt=""
              width={36}
              height={36}
              className="size-9 rounded-full object-cover"
            />
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
