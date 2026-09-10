export type Competency = {
  icon: string;
  title: string;
  lead: string;
  body: string;
  tags: string[];
};

/**
 * Tags describe capability, not tooling, wherever the specific technology
 * hasn't been confirmed. The Delivery and Leadership lists come straight from
 * Ryan's brief; Architecture stays capability-phrased until the state
 * management and architecture pattern list is supplied (see tech-stack.ts).
 */
export const competencies: Competency[] = [
  {
    icon: "architecture",
    title: "Architecture",
    lead: "Build systems that remain maintainable as products grow.",
    body: "Structuring mobile codebases so that feature work stays cheap after the first release — clear module boundaries, predictable state, and API contracts that survive change. The aim is a codebase several engineers can move through without stepping on each other.",
    tags: ["Scalable architecture", "State management", "API design", "Offline behaviour"],
  },
  {
    icon: "bolt",
    title: "Delivery",
    lead: "Turn code into reliable production releases.",
    body: "Making releases routine rather than an event. Automated builds, signed and shipped without manual steps, backed by tests that catch regressions before a store review does — so shipping is a decision, not a project.",
    tags: ["CI/CD", "Fastlane", "Testing", "App Store", "Google Play", "Automation"],
  },
  {
    icon: "groups",
    title: "Leadership",
    lead: "Help teams ship better software consistently.",
    body: "Setting technical direction and the standards that hold once the team grows. Reviewing code to raise the floor rather than police it, and mentoring engineers so decisions get made well without needing to pass through one person.",
    tags: [
      "Technical direction",
      "Mentoring",
      "Code review",
      "Engineering standards",
      "Agile delivery",
    ],
  },
];
