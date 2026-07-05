import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — WaveDisco Blog",
  description:
    "Send a message to Serj, the creator of WaveDisco. Questions about mastering, feedback, or just saying hello — I read every message.",
  alternates: { canonical: "https://blog.wavedisco.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
