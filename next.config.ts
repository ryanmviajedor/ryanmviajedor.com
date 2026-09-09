import type { NextConfig } from "next";

/**
 * Content Security Policy.
 *
 * `script-src` allows 'unsafe-inline' because Next injects inline bootstrap and
 * flight-data scripts. Removing it means nonces, which require middleware on
 * every request and would turn all seven static routes dynamic. This site has
 * no user input, no authentication, no third-party scripts and no
 * user-generated content, so there is no injection surface to speak of — the
 * static-rendering win is worth more here than the marginal hardening. Revisit
 * if the site ever accepts input.
 *
 * The Google Fonts entries are for the subsetted Material Symbols icon font;
 * Plus Jakarta Sans is self-hosted by next/font and needs no exception.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  /* Redundant with frame-ancestors, kept for browsers that predate CSP3. */
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",
    ].join(", "),
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  /* Vercel already sends HSTS; restated so it survives a host change. */
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
