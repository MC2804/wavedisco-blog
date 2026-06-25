"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("sent");
      } else {
        setErrorMsg(data.error ?? "Something went wrong. Try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <div className="bg-ink py-12">
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
            Get in touch
          </h1>
          <p className="text-white/60 text-base mt-3 leading-relaxed">
            Have a question about WaveDisco or just want to say something?<br />
            I read every message.
          </p>
        </div>
      </div>

      <div className="bg-cream min-h-[60vh]">
        <div className="max-w-2xl mx-auto px-6 py-10">
          {status === "sent" ? (
            <div className="bg-card border border-amber/20 rounded-xl p-8 text-center">
              <p className="text-2xl mb-2">✉️</p>
              <p className="text-ink font-bold text-lg mb-1">Message sent.</p>
              <p className="text-muted text-sm">I'll get back to you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ink mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-card border border-amber/20 rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:border-amber transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ink mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-card border border-amber/20 rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:border-amber transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ink mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-card border border-amber/20 rounded-lg px-4 py-3 text-ink text-sm focus:outline-none focus:border-amber transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-amber text-ink font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 text-sm"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              <p className="text-muted text-xs leading-relaxed">
                Your message is stored securely. We don&apos;t share your data with third parties.{" "}
                By sending a message you agree to our{" "}
                <a href="/privacy" className="text-amber underline hover:opacity-80">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
