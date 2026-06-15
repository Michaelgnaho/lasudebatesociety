const listenEditions = [
  "I · SEED",
  "II · VISION",
  "III · VOYAGE",
  "IV · ADVENTURE",
  "V · RESILIENCE",
  "VI · EMERGENCE",
  "VII · ZENITH",
  "VIII · MOMENTUM",
];

function MicIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function SwordsIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line x1="13" y1="19" x2="19" y2="13" />
      <line x1="16" y1="16" x2="20" y2="20" />
      <line x1="19" y1="21" x2="21" y2="19" />
      <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
      <line x1="5" y1="14" x2="9" y2="18" />
      <line x1="7" y1="21" x2="9" y2="19" />
      <line x1="3" y1="19" x2="5" y2="21" />
    </svg>
  );
}

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="py-28 px-8"
      style={{ background: "var(--navy-deep)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "var(--sky)" }}
          >
            Flagship Programs
          </p>
          <h2
            className="mb-3 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            Where we do our best work.
          </h2>
          <p
            className="text-[1rem] max-w-md mx-auto"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "var(--font-body)",
            }}
          >
            Two transformative platforms. One shared purpose — turning voices
            into instruments of change.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LISTEN */}
          <div
            className="relative rounded-sm overflow-hidden p-10"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Top gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: "var(--grad-divider)" }}
            />

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center mb-8"
              style={{ background: "var(--grad-icon)" }}
            >
              <MicIcon />
            </div>

            <p
              className="text-[0.62rem] font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: "var(--sky)", fontFamily: "var(--font-body)" }}
            >
              Flagship Annual Event
            </p>
            <h3
              className="mb-1 leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2rem",
                fontWeight: 400,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              LISTEN
            </h3>
            <p
              className="text-[0.78rem] italic mb-5"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "var(--font-body)",
              }}
            >
              &quot;The Biggest Storytelling Event in Africa&quot;
            </p>
            <p
              className="text-[0.88rem] leading-[1.85] mb-8"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-body)",
              }}
            >
              LISTEN is not a debate competition. It is a transformational
              storytelling platform where carefully selected speakers share
              deeply personal experiences capable of reforming, transforming,
              and informing. Each edition is anchored by a single life-defining
              theme — held at the Buba Marwa Auditorium, LASU Ojo.
            </p>

            {/* Edition pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {listenEditions.map((e) => (
                <span
                  key={e}
                  className="text-[0.62rem] font-semibold tracking-[0.08em] px-2.5 py-1 rounded-full border"
                  style={{
                    color: "var(--sky)",
                    background: "rgba(111,168,220,0.1)",
                    borderColor: "rgba(111,168,220,0.2)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {e}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="inline-block text-[0.8rem] font-medium tracking-[0.05em] px-5 py-2.5 rounded border no-underline"
              style={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.2)",
                fontFamily: "var(--font-body)",
              }}
            >
              Explore LISTEN
            </a>
          </div>

          {/* WORD WAR */}
          <div
            className="relative rounded-sm overflow-hidden p-10"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Top gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, var(--crimson), var(--navy), transparent)",
              }}
            />

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center mb-8"
              style={{
                background:
                  "linear-gradient(135deg, var(--crimson), var(--navy))",
              }}
            >
              <SwordsIcon />
            </div>

            <p
              className="text-[0.62rem] font-bold tracking-[0.2em] uppercase mb-2"
              style={{
                color: "rgba(200,16,46,0.85)",
                fontFamily: "var(--font-body)",
              }}
            >
              Internal Competition
            </p>
            <h3
              className="mb-1 leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2rem",
                fontWeight: 400,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              Word War
            </h3>
            <p
              className="text-[0.78rem] italic mb-5"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "var(--font-body)",
              }}
            >
              Sharpen. Compete. Represent.
            </p>
            <p
              className="text-[0.88rem] leading-[1.85] mb-8"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-body)",
              }}
            >
              Word War is LSUDS&apos;s internal debate and public speaking
              competition, designed to sharpen research, logic, critical
              thinking, diction, confidence, and stage presence under
              competitive conditions. It also serves as the primary pathway for
              identifying speakers who go on to represent LASU at external
              competitions nationwide.
            </p>

            <a
              href="#"
              className="inline-block text-[0.8rem] font-medium tracking-[0.05em] px-5 py-2.5 rounded border no-underline"
              style={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.2)",
                fontFamily: "var(--font-body)",
              }}
            >
              Learn About Word War
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
