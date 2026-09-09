import { cn } from "@/lib/utils";

/**
 * Every Material Symbol used across the site. The union is the single source
 * of truth: it type-checks call sites AND feeds the `icon_names` subset in
 * layout.tsx, so we ship ~25 glyphs instead of the full variable font.
 * Adding an icon means adding it here and to ICON_SUBSET below.
 */
export const ICON_NAMES = [
  "all_inclusive",
  "api",
  "architecture",
  "arrow_forward",
  "bolt",
  "call",
  "chat",
  "close",
  "code",
  "devices",
  "explore",
  "groups",
  "mail",
  "map",
  "menu",
  "monitoring",
  "open_in_new",
  "person",
  "rocket_launch",
  "schedule",
  "settings_suggest",
  "share",
  "smartphone",
  "speed",
  "support_agent",
  "verified",
] as const;

export type IconName = (typeof ICON_NAMES)[number];

/** Comma-joined, alphabetically sorted — the shape Google Fonts expects. */
export const ICON_SUBSET = [...ICON_NAMES].sort().join(",");

export function Icon({
  name,
  className,
  filled = false,
  ...props
}: {
  name: IconName;
  filled?: boolean;
} & React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      className={cn("material-symbols-outlined", className)}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
      {...props}
    >
      {name}
    </span>
  );
}
