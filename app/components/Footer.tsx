export default function Footer() {
  return (
    <footer className="bg-amber py-6">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-ink font-medium text-sm mb-2">
          WaveDisco Blog · Made by Serj · Moldova
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <a href="https://wavedisco.com" target="_blank" rel="noopener noreferrer"
            className="text-ink/70 hover:text-ink transition-colors underline">
            wavedisco.com
          </a>
          <span className="text-ink/40">·</span>
          <a href="https://wavedisco.com/studio" target="_blank" rel="noopener noreferrer"
            className="text-ink/70 hover:text-ink transition-colors underline">
            studio
          </a>
          <span className="text-ink/40">·</span>
          <a href="/privacy"
            className="text-ink/70 hover:text-ink transition-colors underline">
            privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
