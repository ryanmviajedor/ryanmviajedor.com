import { site } from "@/content/site";

export type Channel = {
  icon: string;
  eyebrow: string;
  label: string;
  href: string;
  external?: boolean;
};

/** Direct lines — email and phone. Shown first and most prominently. */
export const primaryChannels: Channel[] = [
  {
    icon: "mail",
    eyebrow: "Email",
    label: site.email,
    href: `mailto:${site.email}`,
  },
  ...site.phones.map((phone) => ({
    icon: "call",
    eyebrow: `Phone · ${phone.region}`,
    label: phone.display,
    href: `tel:${phone.dial}`,
  })),
];

/** Secondary profiles, de-emphasised below the direct lines. */
export const socialChannels: Channel[] = [
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
