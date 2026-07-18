"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Swords,
  Crown,
  Megaphone,
  Trophy,
  Mic2,
  Compass,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
// NOTE: Replace placeholder names and faculties with real data.

const wordWarEditions = [
  {
    edition: "I",
    year: "2017",
    wordLord: { name: "Word Lord Name", faculty: "Faculty of Arts" },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Social Sciences",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Science",
    },
  },
  {
    edition: "II",
    year: "2018",
    wordLord: { name: "Word Lord Name", faculty: "Faculty of Law" },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Education",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Management Sciences",
    },
  },
  {
    edition: "III",
    year: "2019",
    wordLord: { name: "Word Lord Name", faculty: "Faculty of Arts" },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Engineering",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Social Sciences",
    },
  },
  {
    edition: "IV",
    year: "2020",
    wordLord: { name: "Word Lord Name", faculty: "Faculty of Science" },
    chiefSpeaker: { name: "Chief Speaker Name", faculty: "Faculty of Law" },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Arts",
    },
  },
  {
    edition: "V",
    year: "2021",
    wordLord: {
      name: "Word Lord Name",
      faculty: "Faculty of Management Sciences",
    },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Education",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Science",
    },
  },
  {
    edition: "VI",
    year: "2022",
    wordLord: { name: "Word Lord Name", faculty: "Faculty of Arts" },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Social Sciences",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Engineering",
    },
  },
  {
    edition: "VII",
    year: "2023",
    wordLord: { name: "Word Lord Name", faculty: "Faculty of Law" },
    chiefSpeaker: { name: "Chief Speaker Name", faculty: "Faculty of Science" },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Arts",
    },
  },
  {
    edition: "VIII",
    year: "2024",
    wordLord: { name: "Word Lord Name", faculty: "Faculty of Social Sciences" },
    chiefSpeaker: {
      name: "Chief Speaker Name",
      faculty: "Faculty of Management Sciences",
    },
    supportingSpeaker: {
      name: "Supporting Speaker Name",
      faculty: "Faculty of Law",
    },
    isLatest: true,
  },
];

const poetrySlamEditions = [
  {
    edition: "I",
    year: "2021",
    winner: { name: "Poetry Slam Winner Name", faculty: "Faculty of Arts" },
  },
  {
    edition: "II",
    year: "2022",
    winner: {
      name: "Poetry Slam Winner Name",
      faculty: "Faculty of Social Sciences",
    },
  },
  {
    edition: "III",
    year: "2023",
    winner: {
      name: "Poetry Slam Winner Name",
      faculty: "Faculty of Education",
    },
  },
  {
    edition: "IV",
    year: "2024",
    winner: { name: "Poetry Slam Winner Name", faculty: "Faculty of Law" },
    isLatest: true,
  },
];

const callOutWinners = [
  {
    name: "Call-Out Winner Name",
    detail: "Won a public debate challenge on campus",
  },
  {
    name: "Call-Out Winner Name",
    detail: "Won a storytelling face-off in the open square",
  },
  { name: "Call-Out Winner Name", detail: "Won a poetry call-out challenge" },
  { name: "Call-Out Winner Name", detail: "Won a spontaneous speech duel" },
];

// Orator's Retreat editions.
// TODO: fill in real years/themes for editions I–III once confirmed.
const oratorsRetreatEditions = [
  { edition: "I", year: "Year TBA", theme: "Theme TBA" },
  { edition: "II", year: "Year TBA", theme: "Theme TBA" },
  { edition: "III", year: "Year TBA", theme: "Theme TBA" },
  {
    edition: "IV",
    year: "2025",
    theme: "Odyssey",
    dates: "November 19 to 23, 2025",
    isLatest: true,
  },
];

// ─── Small shared bits ─────────────────────────────────────────────────────

function LatestBadge() {
  return (
    <span className="flex items-center gap-1.5 bg-[var(--crimson)] px-2.5 py-1 shrink-0">
      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
      <span className="text-[9px] font-semibold uppercase tracking-widest text-white">
        Latest
      </span>
    </span>
  );
}

function ReadMoreButton({
  open,
  onClick,
  tone = "light",
}: {
  open: boolean;
  onClick: () => void;
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "text-white" : "text-[var(--navy)]";
  return (
    <button
      onClick={onClick}
      className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${color}`}
    >
      {open ? "Show less" : "Read more"}
      <ChevronDown
        className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        strokeWidth={2}
      />
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProgramsDetail() {
  const [wordWarOpen, setWordWarOpen] = useState(false);
  const [poetrySlamOpen, setPoetrySlamOpen] = useState(false);
  const [retreatOpen, setRetreatOpen] = useState(false);
  const [callOutOpen, setCallOutOpen] = useState(false);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg.jpg"
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
            &amp; the Retreat.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
            Beyond LISTEN, LSUDS runs a full calendar of programmes that carry
            its spirit forward — competitive debate, ceremonial transition, and
            an annual retreat in communication mastery.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest border border-white/20 text-white/50">
              Word War · 8 Editions
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest border border-white/20 text-white/50">
              Poetry Slam · 4 Editions
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest border border-white/20 text-white/50">
              Orator&apos;s Retreat · Annual
            </span>
          </div>
        </div>
      </section>

      {/* ── Word War ─────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:gap-20">
            {/* Left — intro and read more */}
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

              <ReadMoreButton
                open={wordWarOpen}
                onClick={() => setWordWarOpen((v) => !v)}
              />
            </div>

            {/* Right — stats strip, always visible */}
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

          {/* Edition by edition breakdown, text only, revealed by Read more */}
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              wordWarOpen
                ? "grid-rows-[1fr] opacity-100 mt-16"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-[var(--line)]">
                {wordWarEditions.map((ed) => (
                  <div
                    key={ed.edition}
                    className="border-b border-[var(--line)] py-6"
                  >
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]/70">
                        Edition {ed.edition} · {ed.year}
                      </p>
                      {ed.isLatest && <LatestBadge />}
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div>
                        <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--ink)]/40">
                          <Trophy className="h-3 w-3 text-[var(--crimson)]" />
                          Word Lord
                        </p>
                        <p className="mt-1.5 text-sm font-semibold text-[var(--navy)]">
                          {ed.wordLord.name}
                        </p>
                        <p className="text-xs text-[var(--ink)]/45">
                          {ed.wordLord.faculty}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--ink)]/40">
                          Chief Speaker
                        </p>
                        <p className="mt-1.5 text-sm font-semibold text-[var(--navy)]">
                          {ed.chiefSpeaker.name}
                        </p>
                        <p className="text-xs text-[var(--ink)]/45">
                          {ed.chiefSpeaker.faculty}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--ink)]/40">
                          Supporting Speaker
                        </p>
                        <p className="mt-1.5 text-sm font-semibold text-[var(--navy)]">
                          {ed.supportingSpeaker.name}
                        </p>
                        <p className="text-xs text-[var(--ink)]/45">
                          {ed.supportingSpeaker.faculty}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Change of Guard & Poetry Slam ────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)] bg-[var(--navy)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:gap-20">
            {/* Left — intro and read more */}
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
                Four editions of the Poetry Slam have crowned a winner each.
              </p>

              <ReadMoreButton
                open={poetrySlamOpen}
                onClick={() => setPoetrySlamOpen((v) => !v)}
                tone="dark"
              />
            </div>

            {/* Right — poetry slam champions, text only, revealed by Read more */}
            <div className="mt-14 lg:mt-0 lg:flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-6">
                Poetry Slam Champions
              </p>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  poetrySlamOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10">
                    {poetrySlamEditions.map((ed) => (
                      <div
                        key={ed.edition}
                        className="flex items-center justify-between gap-4 py-4 border-b border-white/10"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <Mic2 className="h-3.5 w-3.5 text-[var(--sky)] shrink-0" />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-white truncate">
                              {ed.winner.name}
                            </p>
                            <p className="text-xs text-white/40">
                              {ed.winner.faculty}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <p className="text-xs text-white/30">
                            Edition {ed.edition} · {ed.year}
                          </p>
                          {ed.isLatest && <LatestBadge />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {!poetrySlamOpen && (
                <p className="text-sm text-white/40 italic">
                  Tap Read more to see every champion by edition.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Orator's Retreat ─────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:gap-20">
            {/* Left — intro and read more */}
            <div className="lg:w-5/12 shrink-0">
              <span className="flex h-12 w-12 items-center justify-center text-white bg-[var(--crimson)]">
                <Compass className="h-5 w-5" />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
                The annual leadership retreat
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-medium text-[var(--navy)] leading-snug">
                Orator&apos;s Retreat —{" "}
                <span className="italic gradient-text">
                  an odyssey in communication.
                </span>
              </h2>
              <p className="mt-6 text-[var(--ink)]/65 leading-relaxed">
                The Orator&apos;s Retreat is an annual, multi-day public
                speaking and networking event hosted by LSUDS. It is designed to
                help students master communication, storytelling, and delivery
                through intensive practical drills and expert-led sessions.
              </p>
              <p className="mt-4 text-[var(--ink)]/65 leading-relaxed">
                Orator&apos;s Retreat 4.0, themed{" "}
                <span className="font-medium text-[var(--navy)]">
                  &quot;Odyssey,&quot;
                </span>{" "}
                was successfully held from November 19th to 23rd, 2025.
              </p>
              <a
                href="https://www.instagram.com/lasudebates/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 border-b-2 pb-1 text-sm font-semibold text-[var(--navy)] w-fit"
                style={{ borderColor: "var(--crimson)" }}
              >
                More on Instagram
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <div>
                <ReadMoreButton
                  open={retreatOpen}
                  onClick={() => setRetreatOpen((v) => !v)}
                />
              </div>
            </div>

            {/* Right — edition timeline, revealed by Read more */}
            <div className="mt-14 lg:mt-0 lg:flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink)]/40 mb-6">
                Retreat Editions
              </p>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  retreatOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className="border divide-y divide-[var(--line)]"
                    style={{ borderColor: "var(--line)" }}
                  >
                    {oratorsRetreatEditions.map((ed) => (
                      <div
                        key={ed.edition}
                        className="flex items-center justify-between gap-6 px-6 py-5 bg-white"
                      >
                        <div className="flex items-center gap-5 min-w-0">
                          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--crimson)]/70 shrink-0">
                            Edition {ed.edition}
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-[var(--navy)] leading-snug truncate">
                              {ed.theme}
                            </p>
                            <p className="text-xs text-[var(--ink)]/40">
                              {"dates" in ed && ed.dates ? ed.dates : ed.year}
                            </p>
                          </div>
                        </div>
                        {"isLatest" in ed && ed.isLatest && <LatestBadge />}
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-[var(--ink)]/35 italic">
                    Themes and dates for earlier editions will be added as
                    records are confirmed.
                  </p>
                </div>
              </div>
              {!retreatOpen && (
                <p className="text-sm text-[var(--ink)]/40 italic">
                  Tap Read more to see every edition by year.
                </p>
              )}
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
                  issues a public challenge to another orator, and they face off
                  in debate, storytelling, speech, or poetry right where they
                  stand. No formal venues, no curated programmes. Just two
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

            {/* Right — winners list, text only, revealed by Read more */}
            <div className="bg-white p-10 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)] mb-8">
                Some Call-Out winners
              </p>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  callOutOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col">
                    {callOutWinners.map((winner, i) => (
                      <div
                        key={`${winner.name}-${i}`}
                        className="flex flex-col gap-1 py-4 border-b border-[var(--line)]"
                      >
                        <p className="text-sm font-semibold text-[var(--navy)]">
                          {winner.name}
                        </p>
                        <p className="text-xs text-[var(--ink)]/50 leading-relaxed">
                          {winner.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {!callOutOpen && (
                <p className="text-sm text-[var(--ink)]/50 leading-relaxed">
                  Call-Out happens spontaneously across campus. A handful of
                  recent winners are on record, with more champions crowned
                  every time a challenge is issued.
                </p>
              )}

              <ReadMoreButton
                open={callOutOpen}
                onClick={() => setCallOutOpen((v) => !v)}
              />
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
                Word War, Poetry Slam, Orator&apos;s Retreat, and Call-Out are
                open to every LASU student.
              </h2>
              <p className="mt-3 text-[var(--ink)]/60 max-w-md">
                Follow LSUDS on social media or reach out directly to learn when
                the next edition is announced.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://www.instagram.com/lasudebates/"
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
