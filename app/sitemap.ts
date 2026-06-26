import { MetadataRoute } from "next";
import { getLatestPosts } from "./lib/posts";

const SITE_URL = "https://blog.wavedisco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getLatestPosts(100);

  const articles = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: SITE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/story`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/guides`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/features`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/contact`, priority: 0.3, changeFrequency: "yearly" as const },
    ...articles,
  ];
}
