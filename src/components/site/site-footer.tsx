import { site } from "@/content/site";

export function SiteFooter() {
  /* The extra bottom padding keeps the footer links clear of the fixed
     WhatsApp button, which floats over the bottom-right corner. */
  return (
    <footer className="w-full bg-surface-container-low pt-space-xl pb-space-2xl">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-space-md px-gutter text-body-sm text-on-surface-variant md:flex-row">
        <span>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
        <div className="flex gap-space-md">
          <a
            className="rounded transition-colors hover:text-on-surface"
            href={site.links.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="rounded transition-colors hover:text-on-surface"
            href={site.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="rounded transition-colors hover:text-on-surface"
            href={`mailto:${site.email}`}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
