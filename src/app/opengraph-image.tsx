import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name} — ${site.longRole}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Palette mirrored from globals.css — ImageResponse can't read CSS variables. */
const c = {
  surface: "#fbf9f5",
  charcoal: "#1c1c1c",
  bodyText: "#444748",
  outline: "#6b6f6f",
  amber: "#f28c28",
  border: "#e5e1da",
};

/**
 * Fetching the brand face is a nicety, not a requirement — if Google is
 * unreachable during a build we fall back to ImageResponse's default rather
 * than failing the deploy over a social preview.
 */
async function loadJakarta(weight: 600 | 700): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@${weight}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [semibold, bold] = await Promise.all([loadJakarta(600), loadJakarta(700)]);

  const fonts = [
    semibold && { name: "Jakarta", data: semibold, weight: 600 as const, style: "normal" as const },
    bold && { name: "Jakarta", data: bold, weight: 700 as const, style: "normal" as const },
  ].filter(Boolean) as NonNullable<
    ConstructorParameters<typeof ImageResponse>[1]
  >["fonts"];

  const family = fonts && fonts.length ? "Jakarta" : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: c.surface,
          padding: "72px 80px",
          fontFamily: family,
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: c.amber,
            }}
          />
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: c.outline,
            }}
          >
            {site.location}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: "-0.028em",
              lineHeight: 1.04,
              color: c.charcoal,
              maxWidth: 940,
            }}
          >
            {site.tagline}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              fontWeight: 600,
              lineHeight: 1.4,
              color: c.bodyText,
              maxWidth: 860,
            }}
          >
            Flutter, native Android &amp; iOS, CI/CD and production delivery.
          </div>
        </div>

        {/* Footer rule */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: `2px solid ${c.border}`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700, color: c.charcoal }}>
              {site.name}
            </div>
            <div style={{ fontSize: 24, fontWeight: 600, color: c.outline, marginTop: 6 }}>
              {site.longRole}
            </div>
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, color: c.amber }}>
            {site.url.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
