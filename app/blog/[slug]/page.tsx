import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getMdxPost } from "../../lib/mdx";
import ReactionButton from "../../components/ReactionButton";
import { getPostBySlug, categoryLabel } from "../../lib/posts";
import type { Metadata } from "next";

const SITE_URL = "https://blog.wavedisco.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/my-story-cover.webp`;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mdx = getMdxPost(slug);
  const post = mdx ?? getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found — WaveDisco Blog" };
  }

  const ogImage = post.coverImage
    ? `${SITE_URL}/images/${post.coverImage}`
    : DEFAULT_OG_IMAGE;

  return {
    title: `${post.title} — WaveDisco Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: "WaveDisco Blog",
      images: [{ url: ogImage, width: 1280, height: 720, alt: post.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const mdx = getMdxPost(slug);
  const staticPost = getPostBySlug(slug);
  const post = mdx ?? staticPost;

  if (!post) {
    return (
      <div className="bg-cream min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-amber font-bold text-sm uppercase tracking-widest mb-3">404</p>
          <h1 className="text-2xl font-bold text-ink mb-4">Post not found</h1>
          <Link href="/" className="text-amber font-semibold hover:underline text-sm">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const cat = post.category as keyof typeof categoryLabel;

  return (
    <>
      {/* ── Post header ── */}
      <div className="bg-ink py-12">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-amber mb-4">
            {categoryLabel[cat] ?? post.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
            {post.title}
          </h1>
          <p className="text-white/50 text-sm mt-3">
            {post.date} · {post.readTime}
          </p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="bg-cream">
        <div className="max-w-2xl mx-auto px-6 py-10">
          {mdx ? (
            <article className="article-body">
              <MDXRemote source={mdx.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
            </article>
          ) : (
            <div className="bg-card border border-amber/15 rounded-xl p-6 text-muted text-sm leading-relaxed">
              <p className="text-base text-ink font-medium mb-3">{post.excerpt}</p>
              <p className="italic text-muted/70">Full article coming soon…</p>
            </div>
          )}

          {mdx && <ReactionButton slug={slug} />}

          <div className="mt-6 pt-8 border-t border-amber/20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-amber font-semibold hover:underline text-sm"
            >
              ← Back to blog
            </Link>
          </div>
        </div>
      </div>

      {/* ── Ko-fi ── */}
      <section className="bg-cream pb-12">
        <div className="max-w-2xl mx-auto px-6">
          <div className="border-2 border-dashed border-amber rounded-xl p-8 text-center">
            <span className="text-2xl" role="img" aria-label="microphone">🎙️</span>
            <p className="text-ink text-sm mt-2 leading-relaxed">
              If this story meant something to you —<br />
              buy me a coffee. No pressure.
            </p>
            <a
              href="https://ko-fi.com/wavedisco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-amber text-ink font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Support on Ko-fi
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
