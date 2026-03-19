import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Majestic Feline",
  description: "A beautiful site showcasing cats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">
        <header className="border-b border-zinc-900 sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md">
          <nav className="max-w-4xl mx-auto flex justify-between items-center p-6">
            <Link href="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Majestic
            </Link>
            <div className="flex gap-8 font-medium">
              <Link href="/" className="text-zinc-400 hover:text-white transition-colors">Home</Link>
              <Link href="/blog" className="text-zinc-400 hover:text-white transition-colors">Blog</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
