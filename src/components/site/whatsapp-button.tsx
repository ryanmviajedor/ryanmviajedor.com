import { whatsappHref } from "@/content/site";

const LABEL = "Chat with me on WhatsApp";

/**
 * Floating WhatsApp link.
 *
 * A plain anchor with a CSS-only tooltip, so this stays a server component and
 * adds no JavaScript to the bundle. Renders nothing when no number is
 * configured, rather than linking to a wa.me URL that would 404.
 *
 * Styled in the site's charcoal rather than WhatsApp brand green: the brief
 * asks for the existing design system and something not visually overpowering.
 * Swap `bg-primary` for `bg-[#25D366]` if brand recognition matters more.
 */
export function WhatsAppButton() {
  const href = whatsappHref();
  if (!href) return null;

  return (
    <div className="fixed right-space-sm bottom-space-sm z-40 print:hidden md:right-space-md md:bottom-space-md">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={LABEL}
        className="group relative flex size-12 items-center justify-center rounded-full bg-primary text-on-primary shadow-[0_4px_16px_rgba(0,0,0,0.16)] transition-all hover:bg-primary-container hover:shadow-[0_6px_22px_rgba(0,0,0,0.22)] motion-safe:hover:-translate-y-0.5 md:size-14"
      >
        <WhatsAppGlyph className="size-6 md:size-7" />

        {/* Tooltip. aria-hidden because the anchor already carries the name. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-full mr-space-2xs hidden whitespace-nowrap rounded-lg bg-primary px-space-xs py-space-3xs text-body-sm text-on-primary opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 md:block"
        >
          {LABEL}
        </span>
      </a>
    </div>
  );
}

/** WhatsApp mark. Neither Material Symbols nor lucide ships brand glyphs. */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.993 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
