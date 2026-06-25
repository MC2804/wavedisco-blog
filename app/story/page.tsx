import ArticleCard from "../components/ArticleCard";
import { getPostsByCategory } from "../lib/posts";

export const metadata = {
  title: "Story — WaveDisco Blog",
  description: "The personal side of building WaveDisco.",
};

export default function StoryPage() {
  const posts = getPostsByCategory("story");
  return (
    <div className="bg-cream min-h-[60vh]">
      <div className="bg-ink py-10">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-amber mb-2">Story</p>
          <h1 className="text-3xl font-bold text-white">The personal side</h1>
          <p className="text-white/50 text-sm mt-2 max-w-md">
            Decisions, detours, and what it&apos;s actually like to build audio software solo.
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
