import { cn } from "@/lib/utils";

/**
 * Every Material Symbol used across the site. The union is the single source
 * of truth: it type-checks call sites AND feeds the `icon_names` subset in
 * layout.tsx, so we ship only the glyphs we draw.
 *
 * Adding an icon means adding it here and nowhere else. Removing one from the
 * site means removing it here, or we keep paying to fetch it.
 */
export const ICON_NAMES = [
  "api",
  "architecture",
  "arrow_forward",
  "bolt",
  "call",
  "chat",
  "code",
  "description",
  "groups",
  "mail",
  "menu",
  "open_in_new",
  "settings_suggest",
  "share",
  "smartphone",
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
