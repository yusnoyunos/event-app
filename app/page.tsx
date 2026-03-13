'use client';
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";

const heroVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900/80 to-black text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-24 sm:px-6 md:px-10 lg:px-12 lg:pt-28">
        {/* Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={heroVariant}
          className="flex flex-1 flex-col justify-center gap-10 pb-16"
        >
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-800/80 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300 shadow-[0_0_0_1px_rgba(15,23,42,0.8)] backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Live in Kuala Lumpur · July 2026
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
            <div className="space-y-8">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
                Tech in Malaysia
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
                  Conference 2026
                </span>
              </h1>

              <p className="max-w-xl text-pretty text-sm text-slate-300 sm:text-base md:text-lg">
                A high-end, invite-first gathering of founders, engineers, and investors shaping
                the next decade of Malaysian and Southeast Asian technology.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  href="#register"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(56,189,248,0.6)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.45)] transition-all hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <span className="absolute inset-0 rounded-full bg-cyan-400/40 blur-xl" />
                  <span className="relative">Register</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </motion.a>

                <a
                  href="#about"
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 underline-offset-4 hover:text-slate-100 hover:underline sm:text-sm"
                >
                  View conference vision
                </a>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-300 sm:grid-cols-4 sm:text-sm">
                <div>
                  <dt className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                    <CalendarDays className="h-4 w-4 text-cyan-400" />
                    Date
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-100">
                    18–20 July 2026
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                    <MapPin className="h-4 w-4 text-emerald-400" />
                    Venue
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-100">
                    Kuala Lumpur, Malaysia
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                    <Users className="h-4 w-4 text-sky-400" />
                    Attendees
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-100">
                    800+ leaders
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                    Focus
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-100">
                    AI · Cloud · Fintech · Deep Tech
                  </dd>
                </div>
              </dl>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-4 w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-[0_40px_120px_rgba(15,23,42,0.9)] backdrop-blur"
            >
              <div className="pointer-events-none absolute -left-24 -top-32 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-20 bottom-[-72px] h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

              <div className="relative space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Tech in Malaysia · 2026
                </p>
                <p className="text-sm text-slate-200">
                  Where <span className="text-cyan-300">deep tech</span>,{" "}
                  <span className="text-emerald-300">policy</span>, and{" "}
                  <span className="text-sky-300">capital</span> meet to design
                  Malaysia&apos;s next decade of innovation.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-3">
                    <p className="text-[11px] font-medium text-slate-400">
                      Curated stages
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      Main Hall · Builders Lab · Policy Forum
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-3">
                    <p className="text-[11px] font-medium text-slate-400">
                      Experience
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      Night sessions, founder lounges, curated 1:1s
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          custom={0}
          className="mt-4 border-t border-slate-800/80 pt-10"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2fr)] md:items-start">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
                About the conference
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
                Tech in Malaysia Conference 2026 is crafted for senior builders, operators,
                investors, and policymakers who care about what Malaysian technology looks like
                ten years from now.
              </p>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
                Expect deeply produced keynotes, hands-on labs, and curated networking moments
                across three days. We bring together voices from AI, fintech, climate, and
                frontier tech to design the next chapter of the ecosystem—together.
              </p>
            </div>

            <div className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 text-xs text-slate-200 shadow-[0_24px_80px_rgba(15,23,42,0.85)] sm:text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Audience</span>
                <span className="font-semibold text-slate-50">
                  Founders · Engineering · Product · VC · Policy
                </span>
              </div>
              <div className="flex items-center justify-between border-y border-slate-800/80 py-3">
                <span className="text-slate-400">Format</span>
                <span className="text-right font-semibold text-slate-50">
                  3 days · 2 tracks · curated side events
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Language</span>
                <span className="font-semibold text-slate-50">English & Bahasa Malaysia</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Schedule */}
        <motion.section
          id="schedule"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionVariant}
          custom={1}
          className="mt-12 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-[0_26px_90px_rgba(15,23,42,0.95)] sm:p-6"
        >
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
                Schedule preview
              </h2>
              <p className="text-xs text-slate-400 sm:text-sm">
                A focused, single-track experience during the day with intimate breakouts in the
                evening.
              </p>
            </div>
            <a
              href="#register"
              className="mt-1 inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-200 shadow-sm transition-colors hover:border-cyan-400 hover:text-cyan-100 sm:text-sm"
            >
              Download full agenda (soon)
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80">
            <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,2.4fr)_minmax(0,1.4fr)] border-b border-slate-800 bg-slate-900/80 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
              <span>Time</span>
              <span>Session</span>
              <span>Stage</span>
            </div>

            <div className="divide-y divide-slate-800/80 text-xs text-slate-200 sm:text-sm">
              <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,2.4fr)_minmax(0,1.4fr)] px-4 py-3">
                <span className="text-slate-400">09:00</span>
                <span className="font-medium text-slate-50">
                  Opening keynote: Malaysia&apos;s decade of deep tech
                </span>
                <span>Main Hall</span>
              </div>
              <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,2.4fr)_minmax(0,1.4fr)] bg-slate-900/40 px-4 py-3">
                <span className="text-slate-400">10:30</span>
                <span className="font-medium text-slate-50">
                  Panels: AI governance · Climate infra · Fintech infra
                </span>
                <span>Builders Lab</span>
              </div>
              <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,2.4fr)_minmax(0,1.4fr)] px-4 py-3">
                <span className="text-slate-400">13:30</span>
                <span className="font-medium text-slate-50">
                  Founder stories: Building from Kuala Lumpur to the world
                </span>
                <span>Main Hall</span>
              </div>
              <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,2.4fr)_minmax(0,1.4fr)] bg-slate-900/40 px-4 py-3">
                <span className="text-slate-400">18:30</span>
                <span className="font-medium text-slate-50">
                  Night sessions: Investor roundtables & ecosystem salons
                </span>
                <span>Off-site venues</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Register anchor only (for now) */}
        <section id="register" className="mt-10 text-center text-xs text-slate-500 sm:text-sm">
          Registration opens soon. Join the early list by integrating your own form or provider
          here.
        </section>
      </div>
    </main>
  );
}
