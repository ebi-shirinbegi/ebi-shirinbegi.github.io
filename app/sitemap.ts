import { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, priority: 1 },
    { url: `${site.url}/about/`, lastModified: now, priority: 0.8 },
    { url: `${site.url}/projects/`, lastModified: now, priority: 0.8 },
    { url: `${site.url}/contact/`, lastModified: now, priority: 0.6 },
  ];
}
