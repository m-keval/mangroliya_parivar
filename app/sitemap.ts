import type { MetadataRoute } from "next";
import { members, notices, site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/members",
    "/events",
    "/gallery",
    "/notices",
    "/committee",
    "/founders",
    "/village",
    "/business",
    "/donors",
    "/sponsors",
    "/jobs",
    "/news",
    "/donate",
    "/contact",
  ].map((path) => ({
    url: `${site.domain}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const memberRoutes: MetadataRoute.Sitemap = members.map((member) => ({
    url: `${site.domain}/members/${member.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const noticeRoutes: MetadataRoute.Sitemap = notices.map((notice) => ({
    url: `${site.domain}/notices/${notice.slug}`,
    lastModified: new Date(notice.date),
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...staticRoutes, ...memberRoutes, ...noticeRoutes];
}
