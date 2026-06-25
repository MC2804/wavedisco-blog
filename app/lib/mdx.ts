import { readFileSync, existsSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const contentDir = join(process.cwd(), "content", "posts");

export interface MdxPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  coverImage?: string;
}

export function getMdxPost(slug: string): MdxPost | null {
  const filePath = join(contentDir, `${slug}.mdx`);
  if (!existsSync(filePath)) return null;

  const raw = readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  return {
    slug: data.slug ?? slug,
    title: data.title ?? "",
    category: data.category ?? "story",
    date: data.date ?? "",
    readTime: data.readTime ?? "",
    excerpt: data.excerpt ?? "",
    content,
  };
}
