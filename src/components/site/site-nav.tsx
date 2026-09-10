"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon } from "@/components/site/icon";
import { navItems, site } from "@/content/site";
import { cn } from "@/lib/utils";

/** Desktop nav. Active state comes from the route, not a hand-set attribute. */
export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden items-center gap-space-md md:flex">
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
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

      {/* Only rendered once a real resume file exists — never a dead link. */}
      {site.resume ? (
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-space-3xs rounded-lg px-space-xs py-space-3xs text-body-md text-on-surface-variant transition-colors hover:text-on-surface"
        >
          Resume
          <Icon name="description" className="text-[16px]" />
        </a>
      ) : null}
    </nav>
  );
}
