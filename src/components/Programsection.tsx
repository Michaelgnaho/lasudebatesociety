import {
  ArrowRight,
  BookOpenText,
  Swords,
  Crown,
  Megaphone,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const programs = [
  {
    id: "listen",
    icon: BookOpenText,
    eyebrow: "The Biggest Storytelling Event in Africa",
    name: "LISTEN",
    tag: "Annual · Flagship",
    description:
      "LISTEN is not a debate or speech contest. It is a curated platform where selected speakers — drawn from within LASU, from public life, and from the broader Nigerian society — share deeply personal stories that reform, transform, and inform. Each edition is anchored by a single life-defining theme, and every story connects to that theme through lived, authentic experience.",
    highlights: [
      "8 editions held since 2019",
      "Held at Buba Marwa Auditorium, LASU Ojo",
      "Hosts Nigeria's most celebrated public voices",
      "Thousands of attendees across all editions",
    ],
    cta: { label: "Explore LISTEN", href: "/listen" },
    dark: true,
  },
  {
    id: "word-war",
    icon: Swords,
    eyebrow: "The Internal Proving Ground",
    name: "Word War",
    tag: "Annual · Competition",
    description:
      "Word War is LSUDS's internal debate and public speaking competition. Members research, argue, and present ideas persuasively under competitive conditions — sharpening critical thinking, diction, logic, and stage presence. It is the primary feeder pathway for identifying the speakers who will go on to represent LASU at external competitions.",
    highlights: [
      "Open to all LASU students",
      "Multiple competitive rounds",
      "Structured judging and feedback",
      "Winners represent LASU externally",
    ],
    cta: { label: "How to participate", href: "/programs/word-war" },
    dark: false,
  },
  {
    id: "change-of-guard",
    icon: Crown,
    eyebrow: "Transition · Poetry · Celebration",
    name: "Change of Guard & Poetry Slam",
    tag: "Annual · Ceremony",
    description:
      "Change of Guard is LSUDS's formal handover ceremony — the moment one administration passes the baton to the next. But this is no ordinary handover. Woven into the same event is a Poetry Slam: an electric evening of performance poetry where members and guests take the stage to speak, move, and electrify the room. Leadership meets art in one unforgettable night.",
    highlights: [
      "Formal handover of leadership between administrations",
      "Live poetry slam performances on the night",
      "Open to members and guests",
      "Celebrates both legacy and new beginnings",
    ],
    cta: { label: "Learn more", href: "/programs/change-of-guard" },
    dark: false,
  },
  {
    id: "call-out",
    icon: Megaphone,
    eyebrow: "Street Debate · Raw · Unscripted",
    name: "Call-Out",
    tag: "Open Challenge · Street Event",
    description:
      "Call-Out is where the streets become the stage. An orator issues a public challenge to another orator — and they face off in debate, storytelling, speech, or poetry right where they stand. There are no formal venues, no curated programmes. Just two voices, an audience, and the raw power of words under pressure. Anyone can call. Anyone can answer.",
    highlights: [
      "Open challenge format — any orator can issue a call",
      "Formats include debate, storytelling, speech & poetry",
      "Takes place in open, public campus spaces",
      "Unscripted, spontaneous, and audience-driven",
    ],
    cta: { label: "Learn more", href: "/programs/call-out" },
    dark: false,
    accent: true,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Programs() {
  return (
    <section id="programs" className="py-24 sm:py-28 bg-[var(--sky-faint)]">
      <div className="section-shell">
        {/* Section header */}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
          Our programmes
        </p>
        <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--navy)] max-w-2xl">
            Four stages.{" "}
            <span className="italic gradient-text">One mission.</span>
          </h2>
          <p className="text-[var(--ink)]/55 max-w-sm">
            From flagship events to street debates, every LSUDS programme is
            built around one belief: that the right words, spoken well, can
            change everything.
          </p>
        </div>

        {/* ── Top row: LISTEN (large) + Word War ───────────────────────── */}
        <div className="mt-12 grid grid-cols-1 gap-px lg:grid-cols-2 bg-[var(--line)]">
          {/* LISTEN — dark card */}
          <div
            className="relative flex flex-col justify-between overflow-hidden p-8 sm:p-10 min-h-[480px]"
            style={{ background: "var(--navy)" }}
          >
            {/* decorative glyph */}
            <span
              aria-hidden
              className="absolute -bottom-12 -right-4 text-[13rem] select-none font-serif leading-none"
              style={{
                color: "rgba(255,255,255,0.04)",
                WebkitTextStroke: "1px rgba(111,168,220,0.3)",
              }}
            >
              &rdquo;
            </span>

            <div className="relative z-10 flex flex-col h-full">
              {/* icon + tag */}
              <div className="flex items-start justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center text-white"
                  style={{ background: "var(--grad-icon)" }}
                >
                  <BookOpenText className="h-5 w-5" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30 border border-white/10 px-3 py-1.5">
                  {programs[0].tag}
                </span>
              </div>

              <p className="mt-6 font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--sky)]">
                {programs[0].eyebrow}
              </p>
              <h3 className="mt-2 text-4xl sm:text-5xl font-semibold text-white tracking-tight">
                {programs[0].name}
              </h3>
              <p className="mt-4 text-white/65 leading-relaxed max-w-md">
                {programs[0].description}
              </p>

              {/* highlights */}
              <ul className="mt-6 space-y-2 flex-1">
                {programs[0].highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-white/50"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--sky)] shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={programs[0].cta.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white group w-fit"
              >
                {programs[0].cta.label}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Word War — light card */}
          <div className="relative flex flex-col justify-between overflow-hidden p-8 sm:p-10 min-h-[480px] bg-white">
            <span
              aria-hidden
              className="absolute -bottom-12 -right-4 text-[13rem] select-none font-serif leading-none text-[var(--navy)]/[0.04]"
              style={{ WebkitTextStroke: "1px rgba(12,35,64,0.07)" }}
            >
              &rdquo;
            </span>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center text-white bg-(--crimson)">
                  <Swords className="h-5 w-5" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-(--ink)/30 border border-[var(--line)] px-3 py-1.5">
                  {programs[1].tag}
                </span>
              </div>

              <p className="mt-6 font-mono text-[11px] tracking-[0.28em] uppercase text-(--sky-mid)">
                {programs[1].eyebrow}
              </p>
              <h3 className="mt-2 text-4xl sm:text-5xl font-semibold text-(--navy) tracking-tight">
                {programs[1].name}
              </h3>
              <p className="mt-4 text-(--ink)/65 leading-relaxed max-w-md">
                {programs[1].description}
              </p>

              <ul className="mt-6 space-y-2 flex-1">
                {programs[1].highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-(--ink)/50"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-(--crimson) shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={programs[1].cta.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-(--navy) border-b-2 pb-1 w-fit group"
                style={{ borderColor: "var(--crimson)" }}
              >
                {programs[1].cta.label}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom row: Change of Guard + Call-Out ───────────────────── */}
        <div className="grid grid-cols-1 gap-px lg:grid-cols-2 bg-(--line)">
          {/* Change of Guard */}
          <div className="relative flex flex-col overflow-hidden p-8 sm:p-10 min-h-100 bg-white border-t border-[var(--line)]">
            <div className="flex items-start justify-between">
              <span
                className="flex h-12 w-12 items-center justify-center text-white"
                style={{ background: "var(--grad-icon)" }}
              >
                <Crown className="h-5 w-5" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--ink)]/30 border border-[var(--line)] px-3 py-1.5">
                {programs[2].tag}
              </span>
            </div>

            <p className="mt-6 font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--sky-mid)]">
              {programs[2].eyebrow}
            </p>
            <h3 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--navy)] tracking-tight leading-snug">
              Change of Guard
              <br />
              <span className="text-[var(--crimson)]">&amp; Poetry Slam</span>
            </h3>
            <p className="mt-4 text-[var(--ink)]/65 leading-relaxed flex-1">
              {programs[2].description}
            </p>

            <ul className="mt-5 space-y-2">
              {programs[2].highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2.5 text-sm text-[var(--ink)]/50"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--navy)] shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <a
              href={programs[2].cta.href}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] border-b-2 pb-1 w-fit group"
              style={{ borderColor: "var(--navy)" }}
            >
              {programs[2].cta.label}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Call-Out — crimson accent card */}
          <div
            className="relative flex flex-col overflow-hidden p-8 sm:p-10 min-h-[400px] border-t"
            style={{
              background: "var(--crimson)",
              borderColor: "var(--crimson)",
            }}
          >
            {/* decorative glyph */}
            <span
              aria-hidden
              className="absolute -bottom-10 -right-4 text-[13rem] select-none font-serif leading-none"
              style={{ color: "rgba(255,255,255,0.06)" }}
            >
              !
            </span>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center bg-white/15 text-white">
                  <Megaphone className="h-5 w-5" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40 border border-white/20 px-3 py-1.5">
                  {programs[3].tag}
                </span>
              </div>

              <p className="mt-6 font-mono text-[11px] tracking-[0.28em] uppercase text-white/60">
                {programs[3].eyebrow}
              </p>
              <h3 className="mt-2 text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                {programs[3].name}
              </h3>
              <p className="mt-4 text-white/75 leading-relaxed flex-1">
                {programs[3].description}
              </p>

              <ul className="mt-5 space-y-2">
                {programs[3].highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-white/60"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={programs[3].cta.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white border-b-2 border-white/40 pb-1 w-fit group"
              >
                {programs[3].cta.label}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
