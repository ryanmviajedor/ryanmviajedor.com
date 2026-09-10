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
