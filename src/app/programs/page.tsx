import Image from "next/image";
import {
  Swords,
  Crown,
  Megaphone,
  Trophy,
  Mic2,
  ArrowRight,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
// NOTE: Replace placeholder names, faculties, and image paths with real data.
// Image paths follow the convention used on the LISTEN page:
//   /programs/word-war/edition-{n}/word-lord.jpg
//   /programs/word-war/edition-{n}/chief-speaker.jpg
//   /programs/word-war/edition-{n}/supporting-speaker.jpg
//   /programs/poetry-slam/edition-{n}/winner.jpg
//   /programs/call-out/winner-{n}.jpg

const wordWarEditions = [
  {
    edition: "I",
    year: "2017",
    wordLord: {
      name: "Word Lord Name",
      faculty: "Faculty of Arts",
      image: "/programs/word-war/edition-1/word-lord.jpg",
    },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Social Sciences",
      image: "/programs/word-war/edition-1/chief-speaker.jpg",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Science",
      image: "/programs/word-war/edition-1/supporting-speaker.jpg",
    },
  },
  {
    edition: "II",
    year: "2018",
    wordLord: {
      name: "Word Lord Name",
      faculty: "Faculty of Law",
      image: "/programs/word-war/edition-2/word-lord.jpg",
    },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Education",
      image: "/programs/word-war/edition-2/chief-speaker.jpg",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Management Sciences",
      image: "/programs/word-war/edition-2/supporting-speaker.jpg",
    },
  },
  {
    edition: "III",
    year: "2019",
    wordLord: {
      name: "Word Lord Name",
      faculty: "Faculty of Arts",
      image: "/programs/word-war/edition-3/word-lord.jpg",
    },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Engineering",
      image: "/programs/word-war/edition-3/chief-speaker.jpg",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Social Sciences",
      image: "/programs/word-war/edition-3/supporting-speaker.jpg",
    },
  },
  {
    edition: "IV",
    year: "2020",
    wordLord: {
      name: "Word Lord Name",
      faculty: "Faculty of Science",
      image: "/programs/word-war/edition-4/word-lord.jpg",
    },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Law",
      image: "/programs/word-war/edition-4/chief-speaker.jpg",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Arts",
      image: "/programs/word-war/edition-4/supporting-speaker.jpg",
    },
  },
  {
    edition: "V",
    year: "2021",
    wordLord: {
      name: "Word Lord Name",
      faculty: "Faculty of Management Sciences",
      image: "/programs/word-war/edition-5/word-lord.jpg",
    },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Education",
      image: "/programs/word-war/edition-5/chief-speaker.jpg",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Science",
      image: "/programs/word-war/edition-5/supporting-speaker.jpg",
    },
  },
  {
    edition: "VI",
    year: "2022",
    wordLord: {
      name: "Word Lord Name",
      faculty: "Faculty of Arts",
      image: "/programs/word-war/edition-6/word-lord.jpg",
    },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Social Sciences",
      image: "/programs/word-war/edition-6/chief-speaker.jpg",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Engineering",
      image: "/programs/word-war/edition-6/supporting-speaker.jpg",
    },
  },
  {
    edition: "VII",
    year: "2023",
    wordLord: {
      name: "Word Lord Name",
      faculty: "Faculty of Law",
      image: "/programs/word-war/edition-7/word-lord.jpg",
    },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Science",
      image: "/programs/word-war/edition-7/chief-speaker.jpg",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Arts",
      image: "/programs/word-war/edition-7/supporting-speaker.jpg",
    },
  },
  {
    edition: "VIII",
    year: "2024",
    wordLord: {
      name: "Word Lord Name",
      faculty: "Faculty of Social Sciences",
      image: "/programs/word-war/edition-8/word-lord.jpg",
    },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Management Sciences",
      image: "/programs/word-war/edition-8/chief-speaker.jpg",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Law",
      image: "/programs/word-war/edition-8/supporting-speaker.jpg",
    },
    isLatest: true,
  },
];

const poetrySlamEditions = [
  {
    edition: "I",
    year: "2021",
    winner: {
      name: "Poetry Slam Winner Name",
      faculty: "Faculty of Arts",
      image: "/programs/poetry-slam/edition-1/winner.jpg",
    },
  },
  {
    edition: "II",
    year: "2022",
    winner: {
      name: "Poetry Slam Winner Name",
      faculty: "Faculty of Social Sciences",
      image: "/programs/poetry-slam/edition-2/winner.jpg",
    },
  },
  {
    edition: "III",
    year: "2023",
    winner: {
      name: "Poetry Slam Winner Name",
      faculty: "Faculty of Education",
      image: "/programs/poetry-slam/edition-3/winner.jpg",
    },
  },
  {
    edition: "IV",
    year: "2024",
    winner: {
      name: "Poetry Slam Winner Name",
      faculty: "Faculty of Law",
      image: "/programs/poetry-slam/edition-4/winner.jpg",
    },
    isLatest: true,
  },
];

const callOutWinners = [
  {
    name: "Call-Out Winner Name",
    detail: "Won a public debate challenge on campus",
    image: "/programs/call-out/winner-1.jpg",
  },
  {
    name: "Call-Out Winner Name",
    detail: "Won a storytelling face-off in the open square",
    image: "/programs/call-out/winner-2.jpg",
  },
  {
    name: "Call-Out Winner Name",
    detail: "Won a poetry call-out challenge",
    image: "/programs/call-out/winner-3.jpg",
  },
  {
    name: "Call-Out Winner Name",
    detail: "Won a spontaneous speech duel",
    image: "/programs/call-out/winner-4.jpg",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProgramsDetail() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/programs/hero-stage.jpg"
            alt="LSUDS members in a live competitive event"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/60 to-[var(--navy)]/20" />
        </div>

        <div className="relative z-10 w-full section-shell pb-20 pt-40">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--sky)]">
            LSUDS Programmes
          </p>
          <h1 className="mt-4 text-6xl sm:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-none">
            Word War, Guard
            <br />
            &amp; the Streets.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
            Beyond LISTEN, three programmes carry the LSUDS spirit forward —
            competitive debate, ceremonial transition, and raw street oratory.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest border border-white/20 text-white/50">
              Word War · 8 Editions
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest border border-white/20 text-white/50">
              Poetry Slam · 4 Editions
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest border border-white/20 text-white/50">
              Call-Out · Open Challenge
            </span>
          </div>
        </div>
      </section>

      {/* ── Word War ─────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:gap-20">
            {/* Left — intro */}
            <div className="lg:w-5/12 shrink-0">
              <span className="flex h-12 w-12 items-center justify-center text-white bg-[var(--crimson)]">
                <Swords className="h-5 w-5" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
                The internal proving ground
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-medium text-[var(--navy)] leading-snug">
                Word War —{" "}
                <span className="italic gradient-text">
                  eight editions of sharpened minds.
                </span>
              </h2>
              <p className="mt-6 text-[var(--ink)]/65 leading-relaxed">
                Word War is LSUDS&apos;s internal debate and public speaking
                competition. Members research, argue, and present ideas
                persuasively under competitive conditions, sharpening critical
                thinking, diction, logic, and stage presence.
              </p>
              <p className="mt-4 text-[var(--ink)]/65 leading-relaxed">
                Each edition crowns a{" "}
                <span className="font-medium text-[var(--navy)]">
                  Word Lord
                </span>{" "}
                — the overall best speaker — alongside a winning team made up of
                a{" "}
                <span className="font-medium text-[var(--navy)]">
                  Chief Speaker
                </span>{" "}
                and{" "}
                <span className="font-medium text-[var(--navy)]">
                  Supporting Speaker
                </span>
                .
              </p>
            </div>

            {/* Right — stats strip */}
            <div className="mt-10 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-3 border border-[var(--line)] divide-x divide-[var(--line)]">
                {[
                  { stat: "8", label: "Editions held" },
                  { stat: "24", label: "Titles awarded" },
                  { stat: "1", label: "Word Lord per edition" },
                ].map((s) => (
                  <div key={s.label} className="px-6 py-8 text-center">
                    <p className="text-3xl font-semibold text-[var(--navy)]">
                      {s.stat}
                    </p>
                    <p className="mt-1 text-xs text-[var(--ink)]/50 font-medium">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Edition winner cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-[var(--line)] bg-[var(--line)]">
            {wordWarEditions.map((ed) => (
              <div key={ed.edition} className="bg-white flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 border-b border-[var(--line)] flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]/70">
                      Edition {ed.edition}
                    </p>
                    <p className="text-xs text-[var(--ink)]/40 font-medium">
                      {ed.year}
                    </p>
                  </div>
                  {ed.isLatest && (
                    <span className="flex items-center gap-1.5 bg-[var(--crimson)] px-2.5 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-white">
                        Latest
                      </span>
                    </span>
                  )}
                </div>

                {/* Word Lord — featured */}
                <div className="px-6 pt-6">
                  <div className="relative aspect-square overflow-hidden bg-[var(--navy)]/5 border border-[var(--line)]">
                    <Image
                      src={ed.wordLord.image}
                      alt={`${ed.wordLord.name}, Word Lord of Word War Edition ${ed.edition}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-[var(--navy)] px-2 py-1">
                      <Trophy className="h-3 w-3 text-[var(--sky)]" />
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-white">
                        Word Lord
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[var(--navy)] leading-snug">
                    {ed.wordLord.name}
                  </p>
                  <p className="text-xs text-[var(--ink)]/45">
                    {ed.wordLord.faculty}
                  </p>
                </div>

                {/* Chief + Supporting — small pair */}
                <div className="mt-5 px-6 pb-6 grid grid-cols-2 gap-3">
                  <div>
                    <div className="relative aspect-square overflow-hidden bg-[var(--navy)]/5 border border-[var(--line)]">
                      <Image
                        src={ed.chiefSpeaker.image}
                        alt={`${ed.chiefSpeaker.name}, Chief Speaker of Word War Edition ${ed.edition}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 12vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <p className="mt-2 text-[11px] font-semibold text-[var(--navy)] leading-snug">
                      {ed.chiefSpeaker.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wide text-[var(--crimson)]/70 font-medium">
                      Chief Speaker
                    </p>
                    <p className="text-[10px] text-[var(--ink)]/40">
                      {ed.chiefSpeaker.faculty}
                    </p>
                  </div>
                  <div>
                    <div className="relative aspect-square overflow-hidden bg-[var(--navy)]/5 border border-[var(--line)]">
                      <Image
                        src={ed.supportingSpeaker.image}
                        alt={`${ed.supportingSpeaker.name}, Supporting Speaker of Word War Edition ${ed.edition}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 12vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <p className="mt-2 text-[11px] font-semibold text-[var(--navy)] leading-snug">
                      {ed.supportingSpeaker.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wide text-[var(--crimson)]/70 font-medium">
                      Supporting Speaker
                    </p>
                    <p className="text-[10px] text-[var(--ink)]/40">
                      {ed.supportingSpeaker.faculty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Change of Guard & Poetry Slam ────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)] bg-[var(--navy)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:gap-20">
            {/* Left — intro */}
            <div className="lg:w-5/12 shrink-0">
              <span
                className="flex h-12 w-12 items-center justify-center text-white"
                style={{ background: "var(--grad-icon)" }}
              >
                <Crown className="h-5 w-5" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sky)]">
                Transition · Poetry · Celebration
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-medium text-white leading-snug">
                Change of Guard{" "}
                <span className="italic text-[var(--sky)]">
                  &amp; Poetry Slam.
                </span>
              </h2>
              <p className="mt-6 text-white/65 leading-relaxed">
                Change of Guard is LSUDS&apos;s formal handover ceremony — the
                moment one administration passes the baton to the next. Woven
                into the same night is a Poetry Slam: an electric evening of
                performance poetry where members and guests take the stage to
                speak, move, and electrify the room.
              </p>
              <p className="mt-4 text-white/65 leading-relaxed">
                Four editions of the Poetry Slam have crowned a winner each —
                celebrated below alongside the wider legacy of leadership
                transitions.
              </p>
            </div>

            {/* Right — poetry slam winners */}
            <div className="mt-14 lg:mt-0 lg:flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-6">
                Poetry Slam Champions
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-white/10 bg-white/10">
                {poetrySlamEditions.map((ed) => (
                  <div
                    key={ed.edition}
                    className="bg-[var(--navy)] flex flex-col p-5"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--sky)]">
                        Edition {ed.edition}
                      </p>
                      {ed.isLatest && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--crimson)] animate-pulse" />
                      )}
                    </div>
                    <div className="relative aspect-square overflow-hidden bg-white/5 border border-white/10">
                      <Image
                        src={ed.winner.image}
                        alt={`${ed.winner.name}, Poetry Slam winner, Edition ${ed.edition}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 18vw"
                        className="object-cover object-top"
                      />
                      <div className="absolute top-1.5 left-1.5 flex items-center gap-1 bg-[var(--crimson)] px-1.5 py-0.5">
                        <Mic2 className="h-2.5 w-2.5 text-white" />
                      </div>
                    </div>
                    <p className="mt-3 text-xs font-semibold text-white leading-snug">
                      {ed.winner.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-white/40">
                      {ed.winner.faculty}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-wide text-white/30">
                      {ed.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Call-Out ─────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px border border-[var(--line)] bg-[var(--line)]">
            {/* Left — crimson intro panel */}
            <div
              className="relative flex flex-col overflow-hidden p-10 lg:p-14 min-h-[420px]"
              style={{ background: "var(--crimson)" }}
            >
              <span
                aria-hidden
                className="absolute -bottom-10 -right-4 text-[13rem] select-none font-serif leading-none"
                style={{ color: "rgba(255,255,255,0.06)" }}
              >
                !
              </span>
              <div className="relative z-10 flex flex-col h-full">
                <span className="flex h-12 w-12 items-center justify-center bg-white/15 text-white">
                  <Megaphone className="h-5 w-5" />
                </span>
                <p className="mt-6 font-mono text-[11px] tracking-[0.28em] uppercase text-white/60">
                  Street Debate · Raw · Unscripted
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                  Call-Out
                </h2>
                <p className="mt-4 text-white/75 leading-relaxed flex-1">
                  Call-Out is where the streets become the stage. An orator
                  issues a public challenge to another orator — and they face
                  off in debate, storytelling, speech, or poetry right where
                  they stand. No formal venues, no curated programmes. Just two
                  voices, an audience, and the raw power of words under
                  pressure.
                </p>
                <a
                  href="/programs/call-out"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white border-b-2 border-white/40 pb-1 w-fit group"
                >
                  Learn more about Call-Out
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right — winners grid */}
            <div className="bg-white p-10 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)] mb-8">
                Some Call-Out winners
              </p>
              <div className="grid grid-cols-2 gap-6">
                {callOutWinners.map((winner, i) => (
                  <div
                    key={`${winner.name}-${i}`}
                    className="flex flex-col gap-3"
                  >
                    <div className="relative aspect-square overflow-hidden bg-[var(--navy)]/5 border border-[var(--line)]">
                      <Image
                        src={winner.image}
                        alt={`${winner.name}, Call-Out winner`}
                        fill
                        sizes="(max-width: 640px) 45vw, 20vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--navy)] leading-snug">
                        {winner.name}
                      </p>
                      <p className="mt-0.5 text-xs text-[var(--ink)]/50 leading-relaxed">
                        {winner.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs text-[var(--ink)]/35 italic">
                Call-Out happens spontaneously across campus — more champions
                are crowned with every challenge issued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <div className="section-shell">
          <div className="border border-[var(--line)] bg-white p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
                Want in?
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-[var(--navy)] max-w-lg leading-snug">
                Word War, Poetry Slam, and Call-Out are open to every LASU
                student.
              </h2>
              <p className="mt-3 text-[var(--ink)]/60 max-w-md">
                Follow LSUDS on social media or reach out directly to learn when
                the next edition is announced.
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
