export type TechGroup = {
  title: string;
  icon: string;
  items: string[];
};

/**
 * Grouped technologies — deliberately not a logo wall.
 *
 * Only entries Ryan has confirmed appear here. The seed set is his stated
 * specialty list; everything else stays commented out until verified, because
 * an unverified stack item on a recruiter-facing page is a claim, not a
 * decoration.
 *
 * TODO(ryan): confirm and uncomment. Candidates from the original design that
 * are NOT yet verified:
 *   Mobile        — Dart, Kotlin, Swift
 *   Architecture  — BLoC, Riverpod, MVVM, Clean Architecture
 *   Integration   — Firebase, Authentication, GraphQL
 *   Delivery      — GitHub Actions, App Store Connect, Bitrise
 *
 * Groups with no items are skipped by the component, so adding a group back
 * is a one-line change here.
 */
export const techGroups: TechGroup[] = [
  {
    title: "Mobile",
    icon: "smartphone",
    items: ["Flutter", "Android", "iOS"],
  },
  {
    title: "Integration",
    icon: "api",
    items: ["REST APIs", "Payments"],
  },
  {
    title: "Delivery",
    icon: "bolt",
    items: ["CI/CD", "Fastlane"],
  },
  {
    title: "Architecture",
    icon: "architecture",
    /* Awaiting confirmation — renders nothing while empty. */
    items: [],
  },
];

export const visibleTechGroups = techGroups.filter((g) => g.items.length > 0);
