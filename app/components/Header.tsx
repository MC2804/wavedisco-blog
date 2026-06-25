"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/story", label: "Story" },
  { href: "/guides", label: "Guides" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-ink">
      <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-amber font-bold text-xl tracking-tight">WaveDisco</span>
          <span className="text-white text-xs font-medium tracking-widest uppercase">Blog</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex items-center gap-1">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  pathname.startsWith(href)
                    ? "text-amber"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <a
            href="https://wavedisco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber text-ink font-bold text-sm px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Studio ↗
          </a>
        </div>
      </div>
    </header>
  );
}
