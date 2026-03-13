"use client";

import Image from "next/image";
import { easeOut, motion, type Variants } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";

function AgendaRow({
  time,
  session,
  stage,
  shaded,
}: {
  time: string;
  session: string;
  stage: string;
  shaded?: boolean;
}) {
  return (
    <div
      className={[
        "grid grid-cols-[minmax(0,1.05fr)_minmax(0,2.6fr)_minmax(0,1.35fr)] px-4 py-3",
        shaded ? "bg-slate-900/40" : "",
      ].join(" ")}
    >
      <span className="text-slate-400">{time}</span>
      <span className="font-medium text-slate-50">{session}</span>
      <span className="text-slate-200">{stage}</span>
    </div>
  );
}

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.7,
      ease: easeOut,
    },
  }),
};

export default function Home() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col px-4 pb-16 pt-20 sm:px-6 md:px-10 lg:px-12 lg:pt-24">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center gap-10 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 pb-16 shadow-[0_40px_140px_rgba(15,23,42,1)]"
      >
        <Image
          src="/event-hero-image.jpg"
          alt="Tech in Malaysia Conference 2026 in Kuala Lumpur"
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-1 flex-col justify-center gap-10 px-5 pt-10 sm:px-8 md:px-12 lg:px-16 lg:pt-0">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-teal-400/40 bg-black/40 px-3 py-1 text-xs font-medium text-teal-100 shadow-[0_0_0_1px_rgba(45,212,191,0.45)] backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.9)]" />
            Kuala Lumpur Convention Centre · 15–17 July 2026
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
            <div className="space-y-8">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
                Tech in Malaysia
                <span className="block bg-gradient-to-r from-teal-300 via-teal-400 to-violet-400 bg-clip-text text-transparent">
                  Conference 2026
                </span>
              </h1>

              <p className="max-w-xl text-pretty text-sm text-slate-200 sm:text-base md:text-lg">
                A high-end, invite-first gathering of founders, engineers, and investors shaping
                the next decade of Malaysian and Southeast Asian technology.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  href="#register"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 40px rgba(45,212,191,0.7)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-2 rounded-full bg-teal-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(45,212,191,0.6)] transition-all hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <span className="absolute inset-0 rounded-full bg-teal-300/50 blur-xl" />
                  <span className="relative">Register</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </motion.a>

                <a
                  href="#about"
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-200 underline-offset-4 hover:text-teal-200 hover:underline sm:text-sm"
                >
                  View conference vision
                </a>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-200 sm:grid-cols-4 sm:text-sm">
                <div>
                  <dt className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                    <CalendarDays className="h-4 w-4 text-teal-300" />
                    Date
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-50">15–17 July 2026</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                    <MapPin className="h-4 w-4 text-violet-300" />
                    Venue
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-50">
                    Kuala Lumpur Convention Centre
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                    <Users className="h-4 w-4 text-teal-300" />
                    Attendees
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-50">
                    800+ leaders
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                    Focus
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-50">
                    AI · Cloud · Fintech · Deep Tech
                  </dd>
                </div>
              </dl>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
              className="relative mt-4 w-full overflow-hidden rounded-3xl border border-teal-400/40 bg-slate-900/70 p-6 shadow-[0_40px_140px_rgba(15,23,42,1)] backdrop-blur"
            >
              <div className="pointer-events-none absolute -left-24 -top-32 h-64 w-64 rounded-full bg-teal-400/25 blur-3xl" />
              <div className="pointer-events-none absolute -right-20 bottom-[-72px] h-64 w-64 rounded-full bg-violet-500/25 blur-3xl" />

              <div className="relative space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Tech in Malaysia · 2026
                </p>
                <p className="text-sm text-slate-100">
                  Where <span className="text-teal-300">deep tech</span>,{" "}
                  <span className="text-violet-300">policy</span>, and{" "}
                  <span className="text-teal-200">capital</span> meet to design
                  Malaysia&apos;s next decade of innovation.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-3">
                    <p className="text-[11px] font-medium text-slate-400">
                      Curated stages
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      Main Hall · Builders Lab · Policy Forum
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-3">
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
                across 2.5 days. We bring together voices from AI, fintech, climate, and frontier
                tech to design the next chapter of the ecosystem—together.
              </p>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
                Plus: a curated <span className="text-teal-200">Exhibition Hall</span> featuring
                startups, enterprise demos, community booths, and hands-on product showcases—all
                day during conference hours.
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
                  2.5 days · Main Stage + Labs · Exhibition Hall
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
                Agenda (2.5 days)
              </h2>
              <p className="text-xs text-slate-400 sm:text-sm">
                Each day runs 10:00–17:30 (lunch at 13:00). The final day ends at 13:30.
              </p>
            </div>
            <a
              href="#register"
              className="mt-1 inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-200 shadow-sm transition-colors hover:border-cyan-400 hover:text-cyan-100 sm:text-sm"
            >
              Download full agenda (soon)
            </a>
          </div>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80">
              <div className="flex flex-col gap-1 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-200">
                  Day 1 · Tue 15 July 2026
                </p>
                <p className="text-xs text-slate-400">
                  Exhibition Hall open 10:00–17:30
                </p>
              </div>

              <div className="divide-y divide-slate-800/80 text-xs text-slate-200 sm:text-sm">
                <AgendaRow time="10:00" session="Doors open · Registration + coffee" stage="Concourse" />
                <AgendaRow time="10:30" session="Opening keynote: The next decade of Malaysian tech" stage="Main Stage" shaded />
                <AgendaRow time="11:15" session="Panel: AI adoption in enterprises (from pilots to production)" stage="Main Stage" />
                <AgendaRow time="12:00" session="Founder lightning talks: 5 builders · 5 minutes each" stage="Main Stage" shaded />
                <AgendaRow time="13:00" session="Lunch break + Exhibition Hall networking" stage="Exhibition Hall" />
                <AgendaRow time="14:00" session="Breakouts: Cloud-native reliability · Security-by-design · Data platforms" stage="Labs" shaded />
                <AgendaRow time="15:10" session="Fireside: Building globally from KL" stage="Main Stage" />
                <AgendaRow time="16:00" session="Exhibitor demos: curated product showcases" stage="Exhibition Hall" shaded />
                <AgendaRow time="16:45" session="Closing keynote: Talent, education, and the builder pipeline" stage="Main Stage" />
                <AgendaRow time="17:30" session="Day close" stage="—" shaded />
              </div>
            </div>

            {/* Day 2 */}
            <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80">
              <div className="flex flex-col gap-1 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200">
                  Day 2 · Wed 16 July 2026
                </p>
                <p className="text-xs text-slate-400">
                  Exhibition Hall open 10:00–17:30
                </p>
              </div>

              <div className="divide-y divide-slate-800/80 text-xs text-slate-200 sm:text-sm">
                <AgendaRow time="10:00" session="Morning coffee + Exhibition Hall open" stage="Exhibition Hall" />
                <AgendaRow time="10:30" session="Keynote: Fintech infrastructure for ASEAN scale" stage="Main Stage" shaded />
                <AgendaRow time="11:15" session="Panel: Future of payments, identity, and compliance" stage="Main Stage" />
                <AgendaRow time="12:00" session="Workshop: From monolith to modular (practical migration patterns)" stage="Builders Lab" shaded />
                <AgendaRow time="13:00" session="Lunch break + curated 1:1 meetings" stage="Lounge + Exhibition" />
                <AgendaRow time="14:00" session="Track sessions: AI safety · Agentic systems · MLOps in the real world" stage="Labs" shaded />
                <AgendaRow time="15:10" session="Case study: Scaling platform engineering with small teams" stage="Main Stage" />
                <AgendaRow time="16:00" session="Startup showcase: 8 companies · rapid pitches" stage="Main Stage" shaded />
                <AgendaRow time="16:45" session="Community & partners spotlight + Exhibition Hall final walk-through" stage="Exhibition Hall" />
                <AgendaRow time="17:30" session="Day close" stage="—" shaded />
              </div>
            </div>

            {/* Day 3 (Half day) */}
            <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80">
              <div className="flex flex-col gap-1 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-200">
                  Day 3 · Thu 17 July 2026 (Half day)
                </p>
                <p className="text-xs text-slate-400">
                  Exhibition Hall open 10:00–13:30
                </p>
              </div>

              <div className="divide-y divide-slate-800/80 text-xs text-slate-200 sm:text-sm">
                <AgendaRow time="10:00" session="Coffee + final exhibition hours" stage="Exhibition Hall" />
                <AgendaRow time="10:30" session="Keynote: Climate & green tech as national infrastructure" stage="Main Stage" shaded />
                <AgendaRow time="11:15" session="Policy forum: Regulation that accelerates innovation" stage="Policy Forum" />
                <AgendaRow time="12:00" session="Roundtables: CTO circle · Founder circle · Investor circle" stage="Lounges" shaded />
                <AgendaRow time="13:00" session="Closing remarks + thank you" stage="Main Stage" />
                <AgendaRow time="13:30" session="Conference close" stage="—" shaded />
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
  );
}
