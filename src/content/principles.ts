export type Principle = {
  number: string;
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    number: "01",
    title: "Ship reliably",
    body: "Every release is backed by automated tests, staged rollouts, and robust monitoring to ensure zero regression in production.",
  },
  {
    number: "02",
    title: "Automate what repeats",
    body: "Eliminate human error through continuous integration, automated code signing, and streamlined deployment pipelines.",
  },
  {
    number: "03",
    title: "Design for maintainability",
    body: "Write clean, modular codebases that multiple cross-functional engineering squads can easily scale and understand.",
  },
  {
    number: "04",
    title: "Build for real users",
    body: "Prioritize fluid animations, offline-first resilience, and instant responsiveness over sheer feature bloat.",
  },
];
