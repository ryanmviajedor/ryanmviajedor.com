import Link from "next/link";

import { Icon } from "@/components/site/icon";
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
          <div
            aria-hidden="true"
            className="hidden size-8 items-center justify-center rounded-full bg-primary md:flex"
          >
            <Icon name="person" className="text-[18px] text-on-primary" />
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
