/**
 * Email palette, mirrored from the site's design tokens in globals.css.
 * Email clients can't read CSS custom properties, so the values are restated
 * here as plain literals — keep them in sync with @theme if the palette moves.
 */
export const email = {
  surface: "#fbf9f5",
  surfaceContainerLow: "#f5f3ef",
  surfaceContainerLowest: "#ffffff",
  charcoal: "#1c1c1c",
  onSurfaceVariant: "#444748",
  outline: "#6b6f6f",
  amber: "#f28c28",
  border: "#e5e1da",
  onPrimary: "#ffffff",
} as const;

/* Plus Jakarta Sans won't load in most mail clients; the stack degrades well. */
export const fontStack =
  "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
