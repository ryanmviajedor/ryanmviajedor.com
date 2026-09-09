export type ProcessCard = {
  icon: string;
  title: string;
  body: string;
};

export type ProcessChapter = {
  number: string;
  title: string;
  lead: string;
  body: string;
  cards: ProcessCard[];
};

export const processChapters: ProcessChapter[] = [
  {
    number: "01",
    title: "DISCOVER",
    lead: "Understand the product before writing code.",
    body: "Every robust application starts with clarity. I align technical scope with business metrics, map out user journeys, and establish resilient foundational architecture before a single line of production code is written.",
    cards: [
      {
        icon: "explore",
        title: "Product & Requirements",
        body: "Product requirements, user flows, and clear acceptance criteria.",
      },
      {
        icon: "architecture",
        title: "Technical Discovery",
        body: "API analysis, platform strategy, and scalable architecture planning.",
      },
      {
        icon: "map",
        title: "UX & Journey Mapping",
        body: "Frictionless user flows and state management mapping for all screens.",
      },
      {
        icon: "schedule",
        title: "Delivery Planning",
        body: "Milestone definition, development roadmaps, and release planning.",
      },
    ],
  },
  {
    number: "02",
    title: "BUILD",
    lead: "Turn product direction into a reliable app.",
    body: "Writing clean, modular, and maintainable code across platforms. Whether building multi-platform experiences with Flutter or native powerhouses with Kotlin and Swift, performance and testability are paramount.",
    cards: [
      {
        icon: "devices",
        title: "Cross-Platform & Native",
        body: "Expertise in Flutter, Android/Kotlin, and iOS/Swift development.",
      },
      {
        icon: "api",
        title: "Integrations & State",
        body: "Secure API integration, authentication, payments, and robust state management.",
      },
      {
        icon: "verified",
        title: "Testing & Quality",
        body: "Comprehensive unit/widget testing, code reviews, and strict architecture patterns.",
      },
      {
        icon: "speed",
        title: "Performance Optimization",
        body: "Frame-rate optimization, memory leak prevention, and asset sizing.",
      },
    ],
  },
  {
    number: "03",
    title: "DELIVER",
    lead: "Ship the application with confidence.",
    body: "Deployment should be routine, not stressful. I implement fully automated CI/CD pipelines, robust crash reporting, and proactive monitoring to ensure healthy operations long after launch day.",
    cards: [
      {
        icon: "all_inclusive",
        title: "CI/CD & Fastlane",
        body: "Automated builds, code signing, and continuous integration workflows.",
      },
      {
        icon: "rocket_launch",
        title: "Store Deployments",
        body: "Seamless App Store and Google Play release management and beta tracks.",
      },
      {
        icon: "monitoring",
        title: "Monitoring & Analytics",
        body: "Real-time crash tracking, performance monitoring, and error logging.",
      },
      {
        icon: "support_agent",
        title: "Support & Evolution",
        body: "Long-term production support and continuous feature iteration.",
      },
    ],
  },
];
