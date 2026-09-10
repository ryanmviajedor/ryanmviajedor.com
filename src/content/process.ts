export type ProcessStep = {
  number: string;
  title: string;
  /** The one-line summary, straight from Ryan's brief. */
  lead: string;
  body: string;
  points: string[];
};

/**
 * How a mobile product gets built, start to finish. This is methodology —
 * how the work is approached — not a claim about any particular project.
 */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    lead: "Product goals, users, requirements, constraints.",
    body: "Before any architecture decision, get clear on what the product has to do and what it has to survive — the devices it runs on, the networks it runs over, and the constraints that won't move. Most expensive mobile rewrites trace back to a constraint nobody named early.",
    points: [
      "Product goals and success criteria",
      "User flows and platform expectations",
      "Technical and delivery constraints",
    ],
  },
  {
    number: "02",
    title: "Architect",
    lead: "Architecture, APIs, state management, scalability.",
    body: "Decide the shape of the codebase while it's still cheap to change. Module boundaries, how state moves, and what the API contract guarantees — chosen so the second year of feature work costs about what the first did.",
    points: [
      "Module boundaries and layering",
      "State management and data flow",
      "API contracts and error handling",
    ],
  },
  {
    number: "03",
    title: "Build",
    lead: "Flutter and native Android/iOS where appropriate.",
    body: "Write the product, reaching for native where the platform genuinely differs and sharing code where it doesn't. Cross-platform is a default, not a rule — some things belong in Kotlin or Swift, and pretending otherwise costs more than the shared code saves.",
    points: [
      "Flutter for shared product surface",
      "Native where the platform demands it",
      "Reviewed in small, releasable increments",
    ],
  },
  {
    number: "04",
    title: "Validate",
    lead: "Testing, performance, reliability, crash monitoring.",
    body: "Prove it holds up before users do. Automated tests around the logic that matters, performance checked on real devices rather than the newest one, and crash reporting wired in from the first build so production tells you the truth.",
    points: [
      "Unit and widget test coverage",
      "Performance on representative devices",
      "Crash and error monitoring in place",
    ],
  },
  {
    number: "05",
    title: "Automate",
    lead: "CI/CD, Fastlane, automated builds and releases.",
    body: "Take the humans out of the release path. Builds, signing, and store uploads run the same way every time, so a release is a pipeline run rather than an afternoon — and the person who knows the incantation stops being a dependency.",
    points: [
      "CI on every change",
      "Fastlane for signing and upload",
      "Repeatable beta and production tracks",
    ],
  },
  {
    number: "06",
    title: "Ship",
    lead: "Production release, monitoring and continuous improvement.",
    body: "Release, then watch. Staged rollouts so a bad build reaches few people, monitoring that surfaces problems before reviews do, and a feedback loop that turns what production teaches into the next iteration.",
    points: [
      "Staged rollout and release monitoring",
      "Store feedback and crash triage",
      "Iterate on what production reveals",
    ],
  },
];
