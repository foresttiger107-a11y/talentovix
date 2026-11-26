import type { MetadataRoute } from "next";
import { insights, services } from "@/lib/content";

const base = "https://talentovix.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/industries", "/insights", "/about", "/careers", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, priority: 0.7 })),
    ...insights.map((i) => ({ url: `${base}/insights/${i.slug}`, priority: 0.6 })),
  ];
}
