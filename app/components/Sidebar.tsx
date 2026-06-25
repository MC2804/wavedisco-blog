export default function Sidebar() {
  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-4">
      {/* Bio */}
      <div className="bg-card rounded-xl border border-amber/25 p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 rounded-full bg-amber flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-base select-none">S</span>
          </div>
          <div>
            <p className="font-semibold text-ink text-sm">Sergej</p>
            <p className="text-xs text-brown">Founder, WaveDisco</p>
          </div>
        </div>
        <p className="text-sm text-brown leading-relaxed mb-4">
          Building audio tools for producers, DJs, and AI music hobbyists.
          PRISM Master is my way of making streaming-ready sound accessible
          to everyone.
        </p>
        <a
          href="https://wavedisco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-amber hover:underline"
        >
          WaveDisco Studio ↗
        </a>
      </div>

      {/* Ko-fi */}
      <div className="bg-card rounded-xl border border-amber/25 p-5">
        <p className="text-sm text-brown mb-3 leading-relaxed">
          If these posts save you time, a coffee keeps me going ☕
        </p>
        <a
          href="https://ko-fi.com/wavedisco"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-amber text-white font-semibold text-sm py-2.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          ☕ Buy me a coffee
        </a>
      </div>
    </aside>
  );
}
