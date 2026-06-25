import ArticleCard from "../components/ArticleCard";
import { getPostsByCategory } from "../lib/posts";

export const metadata = {
  title: "Guides — WaveDisco Blog",
  description: "Practical audio production guides — LUFS, streaming targets, mastering AI music.",
};

export default function GuidesPage() {
  const posts = getPostsByCategory("guides");
  return (
    <div className="bg-cream min-h-[60vh]">
      <div className="bg-ink py-10">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-amber mb-2">Guides</p>
          <h1 className="text-3xl font-bold text-white">Practical how-tos</h1>
          <p className="text-white/50 text-sm mt-2 max-w-md">
            Step-by-step guides on mastering, loudness normalization, and streaming targets.
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-6 py-10 space-y-4">
        {posts.map((post) => (
          <ArticleCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
