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
    label: "ryan@viajedor.com",
    href: "mailto:ryan@viajedor.com",
  },
  {
    icon: "share",
    eyebrow: "Professional Profile",
    label: "LinkedIn Network",
    href: "https://linkedin.com",
    external: true,
  },
  {
    icon: "code",
    eyebrow: "Code Repositories",
    label: "GitHub Profile",
    href: "https://github.com",
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
