export type Tool = {
  icon: string;
  title: string;
  body: string;
};

export const tools: Tool[] = [
  {
    icon: "smartphone",
    title: "Mobile",
    body: "Flutter, Dart, Native Android (Kotlin), iOS (Swift), State Management (Bloc / Provider).",
  },
  {
    icon: "architecture",
    title: "Architecture",
    body: "Clean Architecture, Feature-driven modularization, Design Systems, Scalable state patterns.",
  },
  {
    icon: "bolt",
    title: "Delivery",
    body: "CI/CD automation, Fastlane, GitHub Actions, Bitrise, Automated Test Suites & App Store distribution.",
  },
  {
    icon: "api",
    title: "Integrations",
    body: "Secure REST & GraphQL APIs, Payment gateways, Push notifications, Analytics & Crashlytics.",
  },
];
