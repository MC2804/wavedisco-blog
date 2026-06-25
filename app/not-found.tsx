import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-ink min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-amber font-bold text-7xl sm:text-9xl leading-none select-none">
          404
        </p>
        <h1 className="text-white text-2xl font-bold mt-4 mb-2">
          Page not found
        </h1>
        <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto mb-8">
          The article you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-amber text-ink font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
        >
          ← Back to blog
        </Link>
      </div>
    </div>
  );
}
