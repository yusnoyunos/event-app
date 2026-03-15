  import type { Metadata } from "next";
  import Link from "next/link";
  import Image from "next/image";
  import { Geist, Geist_Mono } from "next/font/google";
  import "./globals.css";

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: "Tech in Malaysia Conference 2026",
    description:
      "A high-end, future-focused tech summit spotlighting innovation, AI, and startups across Malaysia and Southeast Asia.",
    manifest: "/manifest.json",
    themeColor: "#020617",
    icons: {
      icon: "/icon-192.png",
      apple: "/icon-192.png",
    },
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-slate-100`}
        >
          <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900/80 to-black">
            <header className="sticky top-0 z-30 border-b border-sky-400/15 bg-slate-950/82 backdrop-blur-xl">
              <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm text-slate-200 sm:px-6 md:px-10 lg:px-12">
              <Link href="/" className="flex items-center gap-2 group">
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 transition-transform duration-300 group-hover:scale-105">
                    <Image 
                      src="/TIM-Logo.png" 
                      alt="Tech in Malaysia Logo"
                      fill
                      priority
                      className="object-contain drop-shadow-[0_0_24px_rgba(56,189,248,0.38)]" 
                    />
                  </div>
                </Link>

                <nav className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 sm:gap-6 sm:text-sm">
                  <Link
                    href="/#about"
                    className="transition-colors hover:text-sky-300"
                  >
                    About
                  </Link>
                  <Link
                    href="/#schedule"
                    className="transition-colors hover:text-sky-300"
                  >
                    Schedule
                  </Link>
                  <Link
                    href="/speakers"
                    className="rounded-full border border-sky-400/25 bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-slate-100 shadow-[0_0_24px_rgba(56,189,248,0.12)] transition-colors hover:border-sky-300 hover:text-sky-200 sm:text-sm"
                  >
                    Speakers
                  </Link>
                </nav>
              </div>
            </header>

            <main className="pb-14">{children}</main>
          </div>
        </body>
      </html>
    );
  }
