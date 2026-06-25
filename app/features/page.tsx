import ArticleCard from "../components/ArticleCard";
import { getPostsByCategory } from "../lib/posts";

export const metadata = {
  title: "Features — WaveDisco Blog",
  description: "Deep dives into WaveDisco and PRISM Master features.",
};

export default function FeaturesPage() {
  const posts = getPostsByCategory("features");
  return (
    <div className="bg-cream min-h-[60vh]">
      <div className="bg-ink py-10">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-amber mb-2">Features</p>
          <h1 className="text-3xl font-bold text-white">Under the hood</h1>
          <p className="text-white/50 text-sm mt-2 max-w-md">
            Deep dives into WaveDisco and PRISM Master — how the tools work and why.
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
