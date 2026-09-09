export type Metric = {
  label: string;
  value: string;
  caption: string;
};

/** Credibility bar under the About hero. */
export const metrics: Metric[] = [
  { label: "Scale", value: "629K+", caption: "App downloads globally" },
  { label: "Framework", value: "Flutter", caption: "Cross-platform mastery" },
  { label: "Platform", value: "Android / iOS", caption: "Native performance" },
  { label: "Automation", value: "CI/CD", caption: "Fastlane & automated deploys" },
];

/** Compact stat pair inside the profile card. */
export const profileStats = [
  { value: "629K+", label: "Downloads" },
  { value: "99.8%", label: "Crash-free" },
] as const;
