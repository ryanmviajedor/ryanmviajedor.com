import type { MetadataRoute } from "next";

import { navItems, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: new URL(item.href, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
