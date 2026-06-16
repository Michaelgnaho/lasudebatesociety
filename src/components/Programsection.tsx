import { ArrowRight, BookOpenText, Swords } from "lucide-react";

export default function Programs() {
  return (
    <section id="programs" className="py-24 sm:py-28 bg-[var(--sky-faint)]">
      <div className="section-shell">
        <h2 className="mt-12 text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--navy)] max-w-2xl">
          Two stages. <span className="italic gradient-text">One mission.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* LISTEN */}
          <div
            id="listen"
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 sm:p-10 min-h-[420px]"
            style={{ background: "var(--navy)" }}
          >
            <span
              aria-hidden
              className="quote-glyph absolute -bottom-16 -right-6 text-[14rem] select-none"
              style={{
                color: "rgba(255,255,255,0.06)",
                WebkitTextStroke: "1px rgba(111,168,220,0.4)",
              }}
            >
              &rdquo;
            </span>

            <div className="relative z-10">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                style={{ background: "var(--grad-icon)" }}
              >
                <BookOpenText className="h-5 w-5" />
              </span>

              <p className="mt-6 font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--sky)]">
                The Biggest Storytelling Event in Africa
              </p>
              <h3 className="mt-3 text-3xl sm:text-4xl font-medium text-white">
                LISTEN
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed max-w-md">
                LISTEN is not a debate or speech contest. It is a curated
                platform where selected speakers share deeply personal stories
                that reform, transform, and inform — anchored each year by a
                single life-defining theme.
              </p>
            </div>

            <a
              href="#"
              className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Explore LISTEN
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Word War */}
          <div
            id="word-war"
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl border p-8 sm:p-10 min-h-[420px]"
            style={{ borderColor: "var(--line)", background: "white" }}
          >
            <span
              aria-hidden
              className="quote-glyph absolute -bottom-16 -right-6 text-[14rem] select-none"
            >
              &rdquo;
            </span>

            <div className="relative z-10">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full text-white"
                style={{ background: "var(--crimson)" }}
              >
                <Swords className="h-5 w-5" />
              </span>

              <p className="mt-6 font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--sky-mid)]">
                The Internal Proving Ground
              </p>
              <h3 className="mt-3 text-3xl sm:text-4xl font-medium text-[var(--navy)]">
                Word War
              </h3>
              <p className="mt-4 text-[var(--ink)]/70 leading-relaxed max-w-md">
                Our internal debate and public speaking competition, designed to
                sharpen research, logic, and critical thinking. Members argue
                and present under competitive conditions — building the diction,
                confidence, and stage presence that go on to represent LASU
                externally.
              </p>
            </div>

            <a
              href="#"
              className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--navy)] border-b-2 pb-1 w-fit"
              style={{ borderColor: "var(--crimson)" }}
            >
              How to participate
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
