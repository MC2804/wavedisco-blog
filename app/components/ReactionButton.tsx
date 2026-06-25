"use client";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export default function ReactionButton({ slug }: Props) {
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [bouncing, setBouncing] = useState(false);

  useEffect(() => {
    setLiked(localStorage.getItem(`liked_${slug}`) === "true");
    fetch(`/api/reactions?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((data) => setCount(data.count ?? 0))
      .catch(() => setCount(0));
  }, [slug]);

  async function handleClick() {
    if (liked) return;
    setBouncing(true);
    setTimeout(() => setBouncing(false), 400);
    try {
      const res = await fetch(`/api/reactions?slug=${encodeURIComponent(slug)}`, {
        method: "POST",
      });
      const data = await res.json();
      if (data.count !== undefined) setCount(data.count);
    } catch {
      setCount((c) => (c ?? 0) + 1);
    }
    setLiked(true);
    localStorage.setItem(`liked_${slug}`, "true");
  }

  return (
    <div className="flex items-center gap-3 my-6">
      <button
        onClick={handleClick}
        disabled={liked}
        aria-label={liked ? "You liked this" : "Like this article"}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 font-semibold text-sm transition-all duration-150 select-none ${
          liked
            ? "border-red-400 text-red-500 bg-red-50 cursor-default"
            : "border-amber text-amber hover:bg-amber/10 cursor-pointer active:scale-95"
        } ${bouncing ? "scale-110" : "scale-100"}`}
      >
        <span className={bouncing ? "animate-bounce" : ""}>❤️</span>
        <span>{count !== null ? count : "—"}</span>
      </button>
      <span className="text-sm text-muted">
        {liked ? "Thank you!" : "If this helped you"}
      </span>
    </div>
  );
}
