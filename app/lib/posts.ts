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
    title: "From Hospital Poems to AI Music — How Suno Became More Than a Toy",
    excerpt:
      "I started writing poems at 12, alone in a German hospital. Years later Suno gave them a voice. Here is how that led to building WaveDisco.",
    date: "July 10, 2026",
    readTime: "6 min",
    coverImage: "from-suno-to-real-product.webp",
  },
  // Guides
  {
    slug: "udio-vs-suno",
    category: "guides",
    title: "Suno vs Udio 2026 — I Mastered Both. Here Is the Honest Difference.",
    excerpt:
      "Same prompt, two generators. Suno clips differently than Udio, masters differently, and suits different styles. Real results after processing both through the same chain.",
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
      "Your AI track has clipping. Harsh buzzing on loud transients, brittleness in the high end. This guide explains what's happening and how to fix it.",
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
    slug: "noise-gate-hysteresis",
    category: "features",
    title: "WaveDisco Noise Gate: Why 6 dB Hysteresis Matters",
    excerpt:
      "Most noise gates chatter when room noise sits at the threshold. WaveDisco's hysteresis gate uses a 6 dB dead-band to keep transitions clean.",
    date: "July 10, 2026",
    readTime: "4 min",
    coverImage: "noise-gate-hysteresis.webp",
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
  {
    slug: "suno-mastering-online",
    category: "guides",
    title: "Suno Mastering Online — How to Make Your Suno Tracks Streaming-Ready",
    excerpt:
      "Suno exports at -10 to -12 LUFS. Streaming platforms want -14 to -16 LUFS. Here is exactly why that gap causes problems and how to fix it online for free.",
    date: "July 2, 2026",
    readTime: "5 min",
    coverImage: "suno-mastering-online.webp",
  },
  {
    slug: "udio-mastering-online",
    category: "guides",
    title: "Udio Mastering Online — How to Get Your Udio Tracks Ready for Streaming",
    excerpt:
      "Udio exports hot and irregularly. Rich arrangements cause low-mid buildup. Here is exactly how to master Udio tracks for Spotify and Apple Music — free online.",
    date: "July 2, 2026",
    readTime: "5 min",
    coverImage: "udio-mastering-online.webp",
  },
  {
    slug: "best-free-ai-music-mastering-tools",
    category: "guides",
    title: "Best Free AI Music Mastering Tools in 2026 — Honest Comparison",
    excerpt:
      "Four tools compared honestly — WaveDisco Studio, Audacity, FFmpeg, LANDR. What each does well, where each falls short, and which is right for AI music.",
    date: "July 2, 2026",
    readTime: "5 min",
    coverImage: "best-free-ai-mastering-tools.webp",
  },
  {
    slug: "how-to-make-suno-music-louder",
    category: "guides",
    title: "How to Make Your Suno Music Louder — And Why I Stopped Trying",
    excerpt:
      "I kept pushing Suno tracks louder. The result was always distortion, clipping, and YouTube undoing all the work. Here's what I actually learned.",
    date: "July 10, 2026",
    readTime: "5 min",
    coverImage: "how-to-make-suno-louder.webp",
  },
  {
    slug: "mistakes-uploading-ai-music-spotify",
    category: "guides",
    title: "The 3 Mistakes I Made Uploading AI Music to Spotify — And How to Avoid Them",
    excerpt:
      "I uploaded my first Suno track to Spotify without mastering it. It sounded wrong. Here are the three mistakes I made and what I do differently now.",
    date: "July 10, 2026",
    readTime: "5 min",
    coverImage: "mistakes-uploading-spotify.webp",
  },
  {
    slug: "what-is-true-peak",
    category: "guides",
    title: "What Is True Peak — And Why Your Limiter Is Lying to You",
    excerpt:
      "Your limiter says 0 dBFS — clean. Spotify disagrees. The reason is true peak: audio that exists between samples and distorts after reconstruction.",
    date: "July 19, 2026",
    readTime: "5 min",
    coverImage: "what-is-true-peak.webp",
  },
  {
    slug: "ai-music-copyright",
    category: "story",
    title: "AI Music and Copyright — What YouTube Taught Me the Hard Way",
    excerpt:
      "YouTube ran ads on my Suno track while it blew up, then removed monetization and kept the money. Here is what that taught me about AI music copyright.",
    date: "July 19, 2026",
    readTime: "6 min",
    coverImage: "ai-music-copyright.webp",
  },
  {
    slug: "russian-chanson-suno",
    category: "story",
    title: "Russian Chanson with Suno — Songs About Life from Someone Who Isn't a Poet",
    excerpt:
      "I don't count my tracks. I just write what's on my mind, give it to Suno, and see what comes out. That's what chanson has always been — not perfection, but truth.",
    date: "July 19, 2026",
    readTime: "4 min",
    coverImage: "russian-chanson-suno.webp",
  },
  {
    slug: "suno-vs-udio-mastering",
    category: "guides",
    title: "Suno vs Udio Mastering — Which One Actually Sounds Better After Processing?",
    excerpt:
      "Suno and Udio both export too hot. But they clip differently, respond to EQ differently, and one of them is significantly harder to master than the other.",
    date: "July 19, 2026",
    readTime: "6 min",
    coverImage: "suno-vs-udio-mastering.webp",
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
