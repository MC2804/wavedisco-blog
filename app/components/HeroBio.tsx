export default function HeroBio() {
  return (
    <div className="bg-card rounded-xl border border-amber/25 p-6 mb-8 flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center shrink-0">
        <span className="text-white font-bold text-lg select-none">S</span>
      </div>
      <div>
        <p className="font-semibold text-ink mb-1">Hey, I'm Sergej</p>
        <p className="text-sm text-brown leading-relaxed">
          Founder of WaveDisco and the builder behind PRISM Master — a desktop
          mastering tool for AI-generated music. I write about audio production,
          the journey of building indie software, and tools that actually work.
        </p>
      </div>
    </div>
  );
}
