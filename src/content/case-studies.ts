/**
 * Case studies.
 *
 * Every narrative field is optional and rendered only when present, so a
 * partially-filled entry degrades to a clean summary rather than an empty
 * heading. Nothing here may be written speculatively — if a field isn't
 * supplied by Ryan, it stays absent.
 */

export type CaseStudyLink = {
  label: string;
  href: string;
  /**
   * Official store badge. When present the link renders as the badge instead
   * of a text pill; `label` becomes its alt text and the link's accessible
   * name. Sizes are chosen so both badges' artwork renders 40px tall — see the
   * note on the store links below.
   */
  badge?: { src: string; width: number; height: number };
};

export type Screenshot = {
  src: string;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  /** One line, shown on the card. */
  tagline: string;
  category: string;
  role: string;
  platforms: string[];
  technologies: string[];
  /** Headline outcome. Only figures Ryan has confirmed. */
  metric?: { value: string; caption: string };
  /** Card art. Omitted until a real screenshot exists — never a stand-in. */
  image?: Screenshot;

  /* ---- Detail-page narrative. Populate to unlock /work/<slug>. ---- */
  problem?: string;
  solution?: string;
  architecture?: string;
  challenges?: string[];
  results?: string[];
  screenshots?: Screenshot[];
  links?: CaseStudyLink[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "aldrees",
    name: "Aldrees Mobile Apps",
    tagline:
      "Consumer mobile app for one of Saudi Arabia's largest fuel and logistics companies.",
    category: "Mobile Application",
    role: "Mobile Team Lead",
    platforms: ["Android", "iOS"],
    technologies: ["Flutter", "Android", "iOS", "REST APIs", "CI/CD", "Fastlane"],
    metric: {
      value: "629K+",
      caption: "Downloads across the App Store and Google Play",
    },
    image: {
      src: "/images/aldrees-app.webp",
      alt: "Four iPhone screens from the Aldrees app: sign-in, a map of Aldrees fuel stations, the fleet and finance menu, and a balance top-up screen offering Apple Pay.",
    },
    /*
     * Apple canonicalises to the numeric id, which avoids percent-encoding the
     * Arabic slug in the original URL. Both verified reachable.
     *
     * Badges are the unmodified official assets, as both vendors' brand
     * guidelines require. Their canvases differ: Apple's is nearly all
     * artwork, while Google's carries 41px of mandated clear space on every
     * side, so its artwork is only 67% of canvas height. Rendering Google's
     * canvas at 60px and Apple's at 40px makes both artworks 40px tall —
     * without that compensation Google's badge looks noticeably smaller.
     */
    links: [
      {
        label: "Download on the App Store",
        href: "https://apps.apple.com/sa/app/id6738043230",
        badge: { src: "/images/badge-app-store.svg", width: 120, height: 40 },
      },
      {
        label: "Get it on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.waie.aldrees.mobile",
        badge: { src: "/images/badge-google-play.png", width: 155, height: 60 },
      },
    ],

    /*
     * TODO(ryan): fill any of the fields below and the detail page at
     * /work/aldrees switches on automatically — the card grows a "Read case
     * study" link, and each section appears only once it has content.
     *
     *   problem:      what the product needed to solve
     *   solution:     what you built
     *   architecture: how it was structured
     *   challenges:   string[]
     *   results:      string[]  (confirmed outcomes only)
     *   screenshots:  Screenshot[]  (real captures)
     *   links:        store listings, write-ups
     *
     * The card also stays image-free until a genuine screenshot is added.
     */
  },
];

/** A case study earns a detail page once it has narrative content. */
export function hasDetail(study: CaseStudy): boolean {
  return Boolean(
    study.problem ||
      study.solution ||
      study.architecture ||
      study.challenges?.length ||
      study.results?.length ||
      study.screenshots?.length
  );
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug);
}

/** Studies with a detail page — drives generateStaticParams. */
export const detailedCaseStudies = caseStudies.filter(hasDetail);
