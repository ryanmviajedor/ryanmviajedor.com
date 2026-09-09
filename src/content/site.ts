export const site = {
  name: "Ryan Viajedor",
  role: "Mobile Team Lead",
  longRole: "Mobile Team Lead & Architect",
  tagline: "Mobile products built to ship.",
  location: "Riyadh, Saudi Arabia",
  timezone: "UTC+3 (GMT+3)",
  email: "ryanmoradasviajedor@gmail.com",
  url: "https://ryanmviajedor.com",
  availability: "Available for select projects",
  phones: [
    { region: "KSA", display: "+966 54 089 2061", dial: "+966540892061" },
    { region: "PH", display: "+63 997 534 4907", dial: "+639975344907" },
  ],
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
