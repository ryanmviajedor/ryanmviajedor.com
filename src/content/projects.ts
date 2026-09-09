export type Project = {
  slug: string;
  category: string;
  role: string;
  title: string;
  body: string;
  stack: string[];
  metric: { value: string; caption: string };
  image: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "aldrees",
    category: "Mobile Application",
    role: "Mobile Team Lead",
    title: "Aldrees Mobile Apps",
    body: "Engineered and scaled the primary consumer mobile app for one of the region's largest fuel and logistics companies. Achieved over 629K+ downloads with high user retention and seamless fuel station locator, loyalty, and fleet management features.",
    stack: ["Flutter", "Android", "iOS", "REST APIs", "CI/CD", "Fastlane"],
    metric: {
      value: "629K+",
      caption: "Verified Downloads across App Store & Google Play",
    },
    image: {
      src: "/images/project-aldrees.jpg",
      alt: "The Aldrees mobile app on a smartphone resting on a concrete surface, showing fuel station maps and reward points.",
    },
  },
  {
    slug: "payments",
    category: "Payments / Mobile",
    role: "Mobile Engineering Lead",
    title: "Mobile Payments Platform",
    body: "Architected a secure, robust payment gateway integration layer for high-throughput transactional flows. Focused on PCI-DSS compliance, offline resilience, low-latency transaction processing, and multi-currency support.",
    stack: ["Secure APIs", "Payment Integration", "Encryption", "OAuth2"],
    metric: {
      value: "99.99%",
      caption: "Uptime across high-volume transaction peaks",
    },
    image: {
      src: "/images/project-payments.jpg",
      alt: "A secure mobile payment interface on a smartphone, with financial charts and encryption icons blurred behind it.",
    },
  },
  {
    slug: "delivery",
    category: "Engineering / DevOps",
    role: "DevOps & Mobile Architect",
    title: "Mobile Delivery Platform",
    body: "Built an automated release pipeline cutting deployment times from hours to minutes. Integrated comprehensive testing suites, automated code signing, and distribution channels for rapid QA feedback loops.",
    stack: ["Automated CI/CD", "Fastlane", "GitHub Actions", "Bitrise"],
    metric: { value: "-75%", caption: "Reduction in manual release overhead" },
    image: {
      src: "/images/project-delivery.jpg",
      alt: "An abstract visualization of continuous integration pipelines and automated deployment graphs.",
    },
  },
  {
    slug: "architecture",
    category: "Architecture",
    role: "Mobile Architect / Team Lead",
    title: "Cross-Platform Mobile Architecture",
    body: "Designed a scalable, feature-driven clean architecture template for enterprise Flutter applications. Standardized state management, dependency injection, and modular testing guidelines across multiple cross-functional squads.",
    stack: ["Scalable Flutter", "Clean Architecture", "Modular Design", "State Management"],
    metric: { value: "100%", caption: "Codebase modularity for rapid team scaling" },
    image: {
      src: "/images/project-architecture.jpg",
      alt: "An architectural blueprint and modular component diagram on a tablet, illustrating a scalable cross-platform codebase.",
    },
  },
];
