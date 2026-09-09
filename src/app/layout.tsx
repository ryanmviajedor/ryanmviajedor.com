import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { ICON_SUBSET } from "@/components/site/icon";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { site } from "@/content/site";

import "./globals.css";

/* Self-hosted by next/font — no CDN round-trip, no layout shift. */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Mobile Team Lead specializing in Flutter, native Android & iOS, CI/CD, Fastlane, payments, APIs, and production app delivery.",
  alternates: { canonical: "/" },
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · ${site.role}`,
    description:
      "Mobile products built to ship. Flutter, native Android & iOS, CI/CD, and production delivery.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: "Mobile products built to ship.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f5",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.longRole,
  url: site.url,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riyadh",
    addressCountry: "SA",
  },
  knowsAbout: [
    "Flutter",
    "Android",
    "iOS",
    "Mobile Architecture",
    "CI/CD",
    "Fastlane",
  ],
  sameAs: [site.links.linkedin, site.links.github],
  worksFor: { "@type": "Organization", name: "Independent" },
  telephone: site.phones.map((p) => p.dial),
};

/** Lets search engines treat the domain as a named site, not loose pages. */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: "en",
  publisher: { "@type": "Person", name: site.name },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        {/* Material Symbols, subsetted to the ~25 glyphs the site actually
            uses rather than the whole variable font. */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&icon_names=${ICON_SUBSET}&display=block`}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
        <a
          href="#main"
          className="sr-only rounded-lg bg-primary px-space-sm py-space-2xs text-on-primary focus:not-sr-only focus:absolute focus:top-space-2xs focus:left-space-2xs focus:z-100"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="w-full bg-surface pt-20">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
