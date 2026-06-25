import Link from "next/link";
import type { Category } from "../lib/posts";
import { categoryLabel } from "../lib/posts";

const borderColor: Record<Category, string> = {
  guides:   "border-l-amber",
  features: "border-l-brown",
  story:    "border-l-amber",
};

interface ArticleCardProps {
  slug: string;
  category: Category;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export default function ArticleCard({
  slug,
  category,
  title,
  excerpt,
  date,
  readTime,
}: ArticleCardProps) {
  const href = `/blog/${slug}`;

  return (
    <article
      className={`bg-card rounded-xl border border-amber/15 border-l-4 ${borderColor[category]} p-5 hover:shadow-sm transition-shadow`}
    >
      <p className="text-xs font-bold uppercase tracking-widest text-amber mb-2">
        {categoryLabel[category]}
      </p>
      <h2 className="text-base font-bold text-ink leading-snug mb-2 hover:text-amber transition-colors">
        <Link href={href}>{title}</Link>
      </h2>
      <p className="text-sm text-muted leading-relaxed mb-4">{excerpt}</p>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="text-xs text-muted">
          {date} · {readTime}
        </span>
        <Link href={href} className="text-xs font-bold text-amber hover:underline">
          Read →
        </Link>
      </div>
    </article>
  );
}
