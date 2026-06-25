import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WaveDisco Blog — AI Music Mastering Guide",
  description:
    "Free guides on mastering AI music from Suno and Udio. LUFS, clipping, streaming targets, WaveDisco Studio tutorials.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "WaveDisco Blog",
    description: "Free guides on mastering AI music from Suno and Udio.",
    url: "https://blog.wavedisco.com",
    siteName: "WaveDisco Blog",
    images: [
      {
        url: "https://blog.wavedisco.com/images/my-story-cover.webp",
        width: 1280,
        height: 720,
        alt: "WaveDisco Blog — AI Music Mastering",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WaveDisco Blog",
    description: "Free guides on mastering AI music from Suno and Udio.",
    images: ["https://blog.wavedisco.com/images/my-story-cover.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
