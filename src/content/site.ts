export const site = {
  name: "Ryan Viajedor",
  role: "Mobile Team Lead",
  longRole: "Mobile Team Lead & Architect",
  tagline: "Mobile products built to ship.",
  location: "Riyadh, Saudi Arabia",
  timezone: "UTC+3 (GMT+3)",
  email: "hello@ryanmviajedor.com",
  url: "https://ryanmviajedor.com",
  availability: "Available for select projects",
  links: {
    linkedin: "https://linkedin.com/in/ryanmviajedor",
    github: "https://github.com/ryanmviajedor",
  },
} as const;

export const navItems = [
  { label: "About", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
] as const;
