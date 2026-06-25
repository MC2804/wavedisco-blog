import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — WaveDisco Blog",
  description: "How WaveDisco Blog collects and uses your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-ink py-12">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-amber mb-4">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm mt-3">Last updated: June 24, 2026</p>
        </div>
      </div>

      <div className="bg-cream">
        <div className="max-w-2xl mx-auto px-6 py-10 space-y-8 text-ink text-sm leading-relaxed">

          <section>
            <h2 className="text-base font-bold uppercase tracking-widest text-amber mb-3">Who we are</h2>
            <p>
              WaveDisco Blog (<strong>blog.wavedisco.com</strong>) is operated by Serj, Moldova.
            </p>
            <p className="mt-2">
              Contact: <a href="mailto:hello@wavedisco.com" className="text-amber underline hover:opacity-80">hello@wavedisco.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-widest text-amber mb-3">What data we collect</h2>

            <h3 className="font-bold text-ink mt-4 mb-2">Contact form</h3>
            <p>When you use the contact form we collect:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-ink/80">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message</li>
            </ul>
            <p className="mt-2">
              This data is stored in our database and used only to respond to your message.
              We delete contact messages after 90 days.
            </p>

            <h3 className="font-bold text-ink mt-6 mb-2">Reactions (likes)</h3>
            <p>
              When you click the heart reaction button, we store a like count per article
              in our database. We also store in your browser&apos;s localStorage that you
              have already liked this article. No personal data is collected for reactions.
            </p>

            <h3 className="font-bold text-ink mt-6 mb-2">Analytics</h3>
            <p>
              We may use privacy-friendly analytics to understand how many people read our
              articles. No personal data is shared with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-widest text-amber mb-3">How we use your data</h2>
            <ul className="list-disc ml-5 space-y-1 text-ink/80">
              <li>To respond to your messages</li>
              <li>To show reaction counts on articles</li>
              <li>We never sell your data</li>
              <li>We never share your data with third parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-widest text-amber mb-3">Your rights</h2>
            <p>
              You can request deletion of your contact message at any time by emailing{" "}
              <a href="mailto:hello@wavedisco.com" className="text-amber underline hover:opacity-80">
                hello@wavedisco.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-widest text-amber mb-3">Data storage</h2>
            <p>
              Contact messages are stored in a secure PostgreSQL database
              (Neon, AWS infrastructure). Data is stored in the EU/US region.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-widest text-amber mb-3">Cookies</h2>
            <p>
              We use localStorage (not cookies) for reaction state.
              No tracking cookies are used on this blog.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-widest text-amber mb-3">Changes</h2>
            <p>
              We may update this policy. The &quot;Last updated&quot; date at the top of
              this page will reflect any changes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold uppercase tracking-widest text-amber mb-3">Contact</h2>
            <p>
              Questions about this policy:{" "}
              <a href="mailto:hello@wavedisco.com" className="text-amber underline hover:opacity-80">
                hello@wavedisco.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
