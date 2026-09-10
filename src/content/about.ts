/**
 * About copy.
 *
 * Describes how the work is approached, not how long it's been done — no
 * tenure claims, no employer names, no invented achievements. Written to be
 * edited: these are paragraphs, not a template.
 */
export const about = {
  eyebrow: "About",
  title: "I build mobile products that hold up in production.",

  paragraphs: [
    "I work as a Mobile Team Lead in Riyadh, across mobile architecture, Flutter and native Android and iOS. Most of what I do sits between the code and the release — designing systems that stay maintainable as they grow, wiring them to APIs and payment flows, and making sure what ships is what was intended.",
    "The problems I find most worth solving are the ones that only appear in production: the crash that reproduces on one OEM's build, the payment flow that fails on a slow network, the release process that works until the person who knows it is away. Fixing those permanently usually means changing the process, not just the code.",
    "As a lead, my job is to make good decisions cheap for the team to make — clear architecture, standards that hold under deadline, code review that raises the floor, and mentoring that means fewer questions have to come through me. The measure is whether the team ships reliably without heroics.",
  ],

  /** Short, scannable summary beside the prose. */
  focus: [
    { label: "Architecture", detail: "Maintainable mobile codebases" },
    { label: "Delivery", detail: "Automated, repeatable releases" },
    { label: "Leadership", detail: "Standards, mentoring, direction" },
  ],
} as const;
