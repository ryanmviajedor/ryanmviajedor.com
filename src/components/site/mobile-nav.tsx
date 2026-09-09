"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon } from "@/components/site/icon";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * The export had no mobile navigation at all — the nav was `hidden md:flex`
 * with nothing behind it, leaving the site unnavigable under 768px.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="flex size-10 items-center justify-center rounded-lg text-on-surface transition-colors hover:bg-surface-container-high md:hidden"
      >
        <Icon name="menu" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[280px] border-l border-border-subtle bg-surface p-space-lg"
      >
        <SheetHeader className="p-0 text-left">
          <SheetTitle className="text-headline-sm text-text-charcoal">
            {site.name}
          </SheetTitle>
          <p className="text-label-md text-outline">{site.role}</p>
        </SheetHeader>

        <nav aria-label="Mobile" className="mt-space-lg flex flex-col gap-space-2xs">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between rounded-lg px-space-sm py-space-xs transition-colors",
                  isActive
                    ? "bg-primary-container font-bold text-on-primary-container"
                    : "text-body-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                )}
              >
                {item.label}
                {isActive ? <Icon name="arrow_forward" className="text-[18px]" /> : null}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
