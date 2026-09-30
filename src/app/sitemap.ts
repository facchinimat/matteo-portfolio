import type { MetadataRoute } from "next";

const siteUrl = "https://matteo-portfolio-sage.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1.0 },
    { url: `${siteUrl}/projects`, priority: 0.9 },
    { url: `${siteUrl}/experience`, priority: 0.8 },
    { url: `${siteUrl}/about`, priority: 0.7 },
    { url: `${siteUrl}/skills`, priority: 0.7 },
    { url: `${siteUrl}/contact`, priority: 0.6 },
  ];
}