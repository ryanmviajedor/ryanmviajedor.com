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

  /** What I'm open to — shown in the hero so recruiters can self-qualify. */
  openTo:
    "Open to Mobile Team Lead and senior mobile engineering roles in Riyadh.",

  /**
   * Specialties, exactly as supplied. This is the authorised vocabulary for
   * the whole site: nothing outside this list (plus tech-stack.ts, once
   * confirmed) should appear as a claimed skill.
   */
  specialties: [
    "Flutter",
    "Android",
    "iOS",
    "CI/CD",
    "Fastlane",
    "Payments",
    "APIs",
    "Mobile App Delivery",
  ],

  phones: [
    { region: "KSA", display: "+966 54 089 2061", dial: "+966540892061" },
    { region: "PH", display: "+63 997 534 4907", dial: "+639975344907" },
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/ryanviajedor/",
    github: "https://github.com/ryanmviajedor",
  },

  /**
   * Set to "/resume.pdf" once the file is in /public. Every Resume CTA —
   * hero, nav, contact — is gated on this, so leaving it null renders no
   * broken link anywhere rather than a 404.
   */
  resume: null as string | null,
} as const;

export const navItems = [
  { label: "About", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
] as const;
