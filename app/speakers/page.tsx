import type { Metadata } from "next";

const speakers = [
  {
    name: "Datuk Seri AI",
    title: "AI Visionary",
    bio: "Designing Malaysia's AI strategy across public, private, and startup ecosystems.",
  },
  {
    name: "Sarah Lim",
    title: "Fintech CEO",
    bio: "Building next-generation financial rails connecting Malaysian SMEs to the region.",
  },
  {
    name: "Yusno Yunos",
    title: "Blockchain Leader",
    bio: "Pioneering secure, compliant blockchain infrastructure and real-world asset use cases.",
  },
  {
    name: "Dr. Hamdi",
    title: "Green Tech Researcher",
    bio: "Translating cutting-edge climate and energy research into deployable solutions.",
  },
];

export const metadata: Metadata = {
  title: "Speakers · Tech in Malaysia Conference 2026",
};

export default function SpeakersPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 md:px-10 lg:px-12 lg:pt-20">
      <header className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300 sm:text-sm">
          Voices shaping what comes next
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Speakers
        </h1>
        <p className="text-sm text-slate-300 sm:text-base">
          A curated lineup of founders, researchers, policymakers, and operators building the
          next decade of Malaysian technology.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
        {speakers.map((speaker) => (
          <article
            key={speaker.name}
            className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 text-sm text-slate-200 shadow-[0_22px_70px_rgba(15,23,42,0.9)] transition-transform hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-[0_26px_90px_rgba(45,212,191,0.5)]"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-teal-200">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.9)]" />
                {speaker.title}
              </div>
              <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
                {speaker.name}
              </h2>
              <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                {speaker.bio}
              </p>
            </div>

            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          </article>
        ))}
      </div>
    </section>
  );
}

