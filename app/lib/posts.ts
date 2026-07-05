export type Category = "story" | "guides" | "features";

export const categoryLabel: Record<Category, string> = {
  story: "Story",
  guides: "Guide",
  features: "Feature",
};

export interface Post {
  slug: string;
  category: Category;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage?: string;
}

export const posts: Post[] = [
  // Story
  {
    slug: "my-story",
    category: "story",
    title: "How a Cashier with Bad Vision Built an Audio Studio in 6 Months",
    excerpt:
      "I work as a cashier. I live in a small city in Moldova. I have bad vision that cannot be corrected. This is how I built WaveDisco anyway.",
    date: "June 21, 2026",
    readTime: "8 min read",
    coverImage: "my-story-cover.webp",
  },
  {
    slug: "from-suno-to-real-product",
    category: "story",
    title: "From AI Tracks to a Real Product: The PRISM Story",
    excerpt:
      "Six months of nights and weekends, a custom DSP engine, and a lot of failed mastering chains. Here's how PRISM Master was born.",
    date: "June 10, 2026",
    readTime: "8 min",
  },
  // Guides
  {
    slug: "udio-vs-suno",
    category: "guides",
    title: "Suno vs Udio — Which AI Music Generator Sounds Better After Mastering?",
    excerpt:
      "Both generate music from prompts. Both export hot. But they clip differently, respond to mastering differently, and suit different styles. An honest comparison.",
    date: "June 23, 2026",
    readTime: "5 min read",
    coverImage: "suno-vs-udio-comparison.webp",
  },
  {
    slug: "ai-music-mastering-guide",
    category: "guides",
    title: "AI Music Mastering — The Complete Guide for 2026",
    excerpt:
      "You generated a track with Suno or Udio. Now you want it to sound like a real release — clean, loud enough, ready for Spotify. This guide covers everything.",
    date: "June 23, 2026",
    readTime: "8 min read",
    coverImage: "ai-music-mastering-guide-cover.webp",
  },
  {
    slug: "how-to-fix-clipping",
    category: "guides",
    title: "How to Fix Clipping in AI Music — A Practical Guide",
    excerpt:
      "Your AI track has clipping. You can hear it — harsh buzzing on loud transients, brittleness in the high end. This guide explains what's happening and how to fix it.",
    date: "June 23, 2026",
    readTime: "5 min read",
    coverImage: "how-to-fix-clipping-cover.webp",
  },
  {
    slug: "streaming-loudness-targets",
    category: "guides",
    title: "Streaming Loudness Targets in 2026 — The Complete Platform Guide",
    excerpt:
      "Every streaming platform normalizes audio differently. Spotify, Apple Music, YouTube, Tidal, SoundCloud — the complete reference table for AI music creators.",
    date: "June 23, 2026",
    readTime: "4 min read",
    coverImage: "streaming-loudness-targets-cover.webp",
  },
  {
    slug: "what-is-lufs",
    category: "guides",
    title: "What Is LUFS — And Why Your Suno Tracks Sound Wrong on Spotify",
    excerpt:
      "You upload your Suno track to Spotify. It sounds great in the generator. But on the platform — something feels off. The reason is almost always LUFS.",
    date: "June 23, 2026",
    readTime: "5 min read",
    coverImage: "what-is-lufs-cover.webp",
  },
  {
    slug: "suno-tracks-too-loud",
    category: "guides",
    title: "Why Suno Tracks Sound Too Loud — And How to Fix It",
    excerpt:
      "You made a track in Suno. It sounds great in the player. You export it — and suddenly it sounds harsh. You didn't do anything wrong. Suno did.",
    date: "June 23, 2026",
    readTime: "4 min read",
    coverImage: "suno-tracks-too-loud-cover.webp",
  },
  // Features
  {
    slug: "free-mastering-tools-2026",
    category: "guides",
    title: "The Best Free AI Music Mastering Tools in 2026",
    excerpt:
      "You made an AI track. You need to master it. You don't want to pay. Here's an honest look at what's actually free and what each tool can and can't do.",
    date: "June 23, 2026",
    readTime: "5 min read",
    coverImage: "free-mastering-tools-cover.webp",
  },
  {
    slug: "wavedisco-vs-competitors",
    category: "guides",
    title: "WaveDisco vs Other AI Music Mastering Tools — Honest Comparison",
    excerpt:
      "Five tools compared honestly — WaveDisco Studio, PRISM Master, LANDR, iZotope Ozone, Audacity. Price, features, free tier quality. No gold mountains.",
    date: "June 23, 2026",
    readTime: "5 min read",
    coverImage: "wavedisco-vs-competitors.webp",
  },
  {
    slug: "wavedisco-manual-mode",
    category: "features",
    title: "How to Use Manual Mode in WaveDisco Studio — Full Controls Guide",
    excerpt:
      "Quick and Auto-Master handle most tracks. Manual mode is for when you want full control — every module explained, from HPF to reverb.",
    date: "June 23, 2026",
    readTime: "6 min read",
    coverImage: "wavedisco-manual-mode.webp",
  },
  {
    slug: "prism-desktop-guide",
    category: "features",
    title: "PRISM Master Desktop — The Offline Version of WaveDisco for Serious Work",
    excerpt:
      "Same processing engine as the browser studio. Runs offline, $25 one-time. AI preference model learns your taste. Reference track mode. Windows + macOS.",
    date: "June 23, 2026",
    readTime: "6 min read",
    coverImage: "prism-desktop-interface.webp",
  },
  {
    slug: "wavedisco-analyzer-guide",
    category: "features",
    title: "How to Analyze Your AI Music Before Mastering — WaveDisco Analyzer Guide",
    excerpt:
      "Most people process without knowing what's wrong. The Analyze tab shows LUFS, True Peak, Dynamic Range, Mud, Harsh and Overload before you touch anything.",
    date: "June 23, 2026",
    readTime: "4 min read",
    coverImage: "wavedisco-analyze.webp",
  },
  {
    slug: "wavedisco-studio-guide",
    category: "features",
    title: "WaveDisco Studio — Complete Guide: How to Master Your AI Music in the Browser",
    excerpt:
      "Free browser mastering for AI music. No install, no account. Drop your Suno or Udio track — get a clean 24-bit WAV back. Full guide to every tab and mode.",
    date: "June 23, 2026",
    readTime: "7 min read",
    coverImage: "wavedisco-studio-interface.webp",
  },
  {
    slug: "dj-mode-guide",
    category: "features",
    title: "DJ Mode in WaveDisco Studio — Mix, Reverse and Echo Your AI Music in the Browser",
    excerpt:
      "No software, no plugins, no controller. Echo, Reverse, Hot Cue, Loop — and Export DJ Mix as 24-bit WAV. All in the browser, all free.",
    date: "June 23, 2026",
    readTime: "4 min read",
    coverImage: "wavedisco-dj-mode.webp",
  },
  {
    slug: "dj-mode-mix-reverse-echo",
    category: "features",
    title: "DJ Mode — mix, reverse and echo your AI music in the browser",
    excerpt:
      "No software. No plugins. Drop your track and start mixing right now.",
    date: "June 17, 2026",
    readTime: "4 min",
  },
  {
    slug: "noise-gate-hysteresis",
    category: "features",
    title: "WaveDisco Noise Gate: Why 6 dB Hysteresis Matters",
    excerpt:
      "Most noise gates pump and chatter at the threshold. PRISM's hysteresis gate locks transitions clean. Here's how it works under the hood.",
    date: "June 12, 2026",
    readTime: "4 min",
  },
  {
    slug: "free-ai-music-mastering-tool",
    category: "guides",
    title: "Free AI Music Mastering Tool — Master Your Suno and Udio Tracks Online",
    excerpt:
      "Most mastering tools cost money. WaveDisco Studio doesn't. Free browser mastering for Suno and Udio — no install, no account, no watermark.",
    date: "July 2, 2026",
    readTime: "4 min",
    coverImage: "free-ai-mastering-tool.webp",
  },
];

export function getPostsByCategory(category: Category): Post[] {
  return posts.filter((p) => p.category === category);
}

export function getLatestPosts(count = 6): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
