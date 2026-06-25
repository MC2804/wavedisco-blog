import Link from "next/link";
import ArticleCard from "./components/ArticleCard";
import { getLatestPosts } from "./lib/posts";

const featuredSlug = "my-story";

export default function Home() {
  const latest = getLatestPosts(6).filter((p) => p.slug !== featuredSlug);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-ink overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-10">
          <p className="text-xs font-bold uppercase tracking-widest text-amber mb-4">
            Featured Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            A cashier with bad vision built an{" "}
            <span className="text-amber underline decoration-amber decoration-2 underline-offset-4">
              audio studio
            </span>{" "}
            in 6 months
          </h1>
          <blockquote className="border-l-4 border-amber pl-4 mt-6 text-white/70 italic text-base">
            "I don&apos;t know code. I work in retail. I just didn&apos;t want to stop."
          </blockquote>
          <Link
            href="/blog/my-story"
            className="inline-block mt-8 bg-amber text-ink font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Read the story →
          </Link>
        </div>

        {/* Author portrait — full hero height, right edge 30px from text */}
        {/* right = 100vw - (text_start - 30px) = 100vw - (50vw - 312px - 30px) = 50vw + 342px */}
        <div
          className="absolute top-0 bottom-0 hidden xl:block pointer-events-none"
          aria-hidden
          style={{ right: "calc(50vw + 342px)" }}
        >
          <img
            src="/images/author-portrait.png"
            alt="Serj — author of WaveDisco Blog"
            className="opacity-90"
            style={{ height: "100%", width: "auto", display: "block" }}
          />
        </div>

        {/* Decorative stripes — right side */}
        <div
          className="absolute right-0 top-0 bottom-0 hidden lg:flex gap-3 pr-2 pointer-events-none"
          aria-hidden
        >
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-6 bg-amber opacity-15" />
          ))}
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-amber">
        <div className="max-w-2xl mx-auto px-6 py-5 grid grid-cols-3 divide-x divide-ink/20">
          {[
            { value: "6mo", label: "Built in" },
            { value: "14", label: "Articles" },
            { value: "$0", label: "VC money" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center px-4">
              <p className="text-2xl font-bold text-ink leading-none">{value}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-ink/60 mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="bg-cream py-10">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-0.5 bg-amber" />
            <p className="text-xs font-bold uppercase tracking-widest text-ink">
              Latest Articles
            </p>
          </div>
          <div className="space-y-4">
            {latest.map((post) => (
              <ArticleCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-ink py-8">
        <div className="max-w-2xl mx-auto px-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-lg select-none">S</span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed">
            Hi, I&apos;m{" "}
            <span className="text-amber font-semibold">Serj</span>. I work as a
            cashier in Moldova. I built WaveDisco for myself — to make my Suno
            music sound better. Then I gave it to people for free.
          </p>
        </div>
      </section>

      {/* ── KO-FI ── */}
      <section className="bg-cream py-10">
        <div className="max-w-2xl mx-auto px-6">
          <div className="border-2 border-dashed border-amber rounded-xl p-8 text-center">
            <span className="text-2xl" role="img" aria-label="microphone">
              🎙️
            </span>
            <p className="text-ink text-sm mt-2 leading-relaxed">
              If this blog helped you —<br />
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
