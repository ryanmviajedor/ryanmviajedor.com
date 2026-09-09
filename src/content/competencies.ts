export type Competency = {
  icon: string;
  title: string;
  body: string;
  tags: string[];
};

export const competencies: Competency[] = [
  {
    icon: "architecture",
    title: "Architecture",
    body: "Designing resilient, modular state management architectures. Clean Architecture implementations using BLoC, Riverpod, and MVVM patterns to ensure maintainability at scale.",
    tags: ["Clean Architecture", "BLoC / Riverpod", "Offline-first"],
  },
  {
    icon: "bolt",
    title: "Execution",
    body: "Rapid deployment pipelines and flawless store releases. Streamlining developer workflows using Fastlane, GitHub Actions, automated testing, and secure payment gateway integrations.",
    tags: ["Fastlane & CI/CD", "Stripe & Apple Pay", "App Store / Play"],
  },
  {
    icon: "groups",
    title: "Leadership",
    body: "Mentoring engineering talent and fostering high-ownership team cultures. Aligning technical roadmaps with business milestones across cross-functional product squads.",
    tags: ["Mentorship", "Code Review Culture", "Agile Delivery"],
  },
];
