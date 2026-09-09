"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/content/site";
import { cn } from "@/lib/utils";

/** Desktop nav. Active state comes from the route, not a hand-set attribute. */
export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden items-center gap-space-md md:flex">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-lg px-space-xs py-space-3xs transition-colors",
              isActive
                ? "bg-primary-container font-bold text-on-primary-container"
                : "text-body-md text-on-surface-variant hover:text-on-surface"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
