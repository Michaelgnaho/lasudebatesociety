import Image from "next/image";
import { ArrowRight } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
// NOTE: Entries marked verified=true are sourced from public news coverage.
// Entries marked verified=false are placeholders — replace with real names
// and image paths. Image paths follow:
//   /achievements/{slug}/winner-1.jpg, winner-2.jpg, etc.

const achievements = [
  {
    slug: "lasepa-2026",
    year: "2026",
    competition:
      "LASEPA Inter-Tertiary Institutions Environmental Debate Competition",
    winners: [{ name: "Fajana Olamide Mary" }],
    verified: true,
  },
  {
    slug: "lasepa-2025",
    year: "2025",
    competition: "LASEPA Inter-Tertiary Institutions Debate Competition",
    winners: [
      { name: "Oladipupo Ramadan" },
      { name: "Atere Sarah Olateju" },
      { name: "Ajeniya Abdulquadri" },
      { name: "Kelvin Chukwuemeke Osadebe" },
      { name: "Sulaiman Samad Olaitan" },
    ],
    verified: true,
  },
  {
    slug: "umezulike-2024",
    year: "2024",
    competition: "Justice Innocent Umezulike National Debate Competition",
    winners: [
      { name: "Oladipupo Olalekan" },
      { name: "Ajeniya Oluwagbemiga" },
      { name: "Musendiku Mulikat" },
    ],
    verified: true,
  },
  {
    slug: "placeholder-1",
    year: "20XX",
    competition: "Competition Name",
    winners: [{ name: "Winner Name" }, { name: "Winner Name" }],
    verified: false,
  },
  {
    slug: "placeholder-2",
    year: "20XX",
    competition: "Competition Name",
    winners: [{ name: "Winner Name" }],
    verified: false,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Achievements() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/achievements/hero-trophy.jpg"
            alt="LSUDS members celebrating a competition win"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/60 to-[var(--navy)]/20" />
        </div>

        <div className="relative z-10 w-full section-shell pb-20 pt-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--sky)]">
            Beyond LASU
          </p>
          <h1 className="mt-4 text-6xl sm:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-none">
            Achievements
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
            Competitions won outside LSUDS — and the speakers who won them.
          </p>
        </div>
      </section>

      {/* ── Achievements grid ────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <div className="section-shell">
          <div className="flex flex-col gap-16">
            {achievements.map((ach) => (
              <div key={ach.slug}>
                {/* Competition header */}
                <div className="flex items-baseline gap-4 mb-7 pb-4 border-b border-[var(--line)]">
                  <span className="text-2xl sm:text-3xl font-semibold text-[var(--crimson)] shrink-0">
                    {ach.year}
                  </span>
                  <h2 className="text-lg sm:text-xl font-medium text-[var(--navy)] leading-snug">
                    {ach.competition}
                  </h2>
                  {!ach.verified && (
                    <span className="ml-auto shrink-0 text-[10px] font-semibold uppercase tracking-widest text-[var(--ink)]/30 border border-[var(--line)] px-2 py-1">
                      Placeholder
                    </span>
                  )}
                </div>

                {/* Winner cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                  {ach.winners.map((w, i) => (
                    <div
                      key={`${ach.slug}-${i}`}
                      className="flex flex-col items-center text-center gap-3"
                    >
                      <div className="relative w-full aspect-square overflow-hidden bg-[var(--navy)]/5 border border-[var(--line)]">
                        <Image
                          src={`/achievements/${ach.slug}/winner-${i + 1}.jpg`}
                          alt={w.name}
                          fill
                          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="text-xs font-semibold text-[var(--navy)] leading-snug">
                        {w.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-t border-[var(--line)]">
        <div className="section-shell">
          <div className="border border-[var(--line)] bg-white p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
                Know of a win we missed?
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-[var(--navy)] max-w-lg leading-snug">
                Help us keep this record complete and accurate.
              </h2>
              <p className="mt-3 text-[var(--ink)]/60 max-w-md">
                If you represented LSUDS at a competition not listed here, reach
                out with the details so we can add it to the record.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://www.instagram.com/lasudebates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--navy)] text-white text-sm font-semibold hover:bg-[var(--navy)]/90 transition-colors"
              >
                Follow on Instagram
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href="mailto:lasu.debatesociety@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--line)] text-[var(--navy)] text-sm font-semibold hover:border-[var(--navy)]/40 transition-colors"
              >
                Send us a message
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
