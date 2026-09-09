import { site } from "@/content/site";

export type Channel = {
  icon: string;
  eyebrow: string;
  label: string;
  href: string;
  external?: boolean;
};

export const channels: Channel[] = [
  {
    icon: "mail",
    eyebrow: "Email Me",
    label: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "share",
    eyebrow: "Professional Profile",
    label: "LinkedIn Network",
    href: site.links.linkedin,
    external: true,
  },
  {
    icon: "code",
    eyebrow: "Code Repositories",
    label: "GitHub Profile",
    href: site.links.github,
    external: true,
  },
];

export const projectTypes = [
  { value: "ios", label: "iOS Application Development" },
  { value: "android", label: "Android Application Development" },
  { value: "fullstack", label: "Cross-Platform / Flutter / React Native" },
  { value: "consulting", label: "Mobile Architecture & Consulting" },
  { value: "other", label: "Other Inquiry" },
] as const;
