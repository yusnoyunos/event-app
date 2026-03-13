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
            <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
              <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-sm text-slate-200 sm:px-6 md:px-10 lg:px-12">
              <Link href="/" className="flex items-center gap-2 group">
                {/* MOBILE: h-10 w-10 | DESKTOP: md:h-16 md:w-16 */}
                  <div className="relative h-12 w-12 transition-transform md:h-16 md:w-16 group-hover:scale-105">
                    <Image 
                            src="/TIM-Logo.png" 
                      alt="Tech in Malaysia Logo"
                      fill
                      priority
                      className="object-contain object-left" 
                    />
                  </div>
                </Link>

                <nav className="flex items-center gap-6 text-xs font-medium text-slate-300 sm:text-sm">
                  <Link
                    href="/#about"
                    className="transition-colors hover:text-teal-300"
                  >
                    About
                  </Link>
                  <Link
                    href="/#schedule"
                    className="transition-colors hover:text-teal-300"
                  >
                    Schedule
                  </Link>
                  <Link
                    href="/speakers"
                    className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-100 shadow-sm transition-colors hover:border-violet-400 hover:text-teal-200 sm:text-sm"
                  >
                    Speakers
                  </Link>
                </nav>
              </div>
            </header>

            <main className="pb-16">{children}</main>
          </div>
        </body>
      </html>
    );
  }
