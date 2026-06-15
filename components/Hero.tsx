"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* ── DARK CINEMATIC BACKGROUND ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(160deg, #0a1428 0%, #0e1e3d 40%, #1a0a14 80%, #0a0d1a 100%)",
        }}
      />

      {/* ── SUBTLE GRID OVERLAY ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(111,168,220,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(111,168,220,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── SVG GEOMETRIC ART LAYER ── */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="glow-sky" cx="70%" cy="20%" r="50%">
            <stop offset="0%" stopColor="#4a8fc7" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#4a8fc7" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-crimson" cx="25%" cy="75%" r="45%">
            <stop offset="0%" stopColor="#c8102e" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#c8102e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-center" cx="50%" cy="50%" r="40%">
            <stop offset="0%" stopColor="#1a3263" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1a3263" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="line-sky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a8fc7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#4a8fc7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-crimson" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c8102e" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c8102e" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Glow pools */}
        <rect x="0" y="0" width="1440" height="900" fill="url(#glow-sky)" />
        <rect x="0" y="0" width="1440" height="900" fill="url(#glow-crimson)" />
        <rect x="0" y="0" width="1440" height="900" fill="url(#glow-center)" />

        {/* Large decorative circles — top right */}
        <circle
          cx="1180"
          cy="140"
          r="320"
          fill="none"
          stroke="#4a8fc7"
          strokeWidth="0.5"
          strokeOpacity="0.12"
        />
        <circle
          cx="1180"
          cy="140"
          r="240"
          fill="none"
          stroke="#4a8fc7"
          strokeWidth="0.5"
          strokeOpacity="0.1"
        />
        <circle
          cx="1180"
          cy="140"
          r="160"
          fill="none"
          stroke="#6fa8dc"
          strokeWidth="1"
          strokeOpacity="0.08"
        />

        {/* Large decorative circles — bottom left */}
        <circle
          cx="260"
          cy="760"
          r="280"
          fill="none"
          stroke="#c8102e"
          strokeWidth="0.5"
          strokeOpacity="0.1"
        />
        <circle
          cx="260"
          cy="760"
          r="180"
          fill="none"
          stroke="#c8102e"
          strokeWidth="0.5"
          strokeOpacity="0.08"
        />
        <circle
          cx="260"
          cy="760"
          r="90"
          fill="none"
          stroke="#c8102e"
          strokeWidth="1"
          strokeOpacity="0.06"
        />

        {/* Diagonal structural lines — top left to center */}
        <line
          x1="0"
          y1="0"
          x2="580"
          y2="420"
          stroke="url(#line-sky)"
          strokeWidth="0.6"
          strokeOpacity="0.4"
        />
        <line
          x1="0"
          y1="60"
          x2="500"
          y2="440"
          stroke="#4a8fc7"
          strokeWidth="0.4"
          strokeOpacity="0.12"
        />
        <line
          x1="60"
          y1="0"
          x2="620"
          y2="460"
          stroke="#4a8fc7"
          strokeWidth="0.3"
          strokeOpacity="0.08"
        />

        {/* Diagonal structural lines — bottom right */}
        <line
          x1="1440"
          y1="900"
          x2="860"
          y2="480"
          stroke="url(#line-crimson)"
          strokeWidth="0.6"
          strokeOpacity="0.4"
        />
        <line
          x1="1440"
          y1="840"
          x2="880"
          y2="460"
          stroke="#c8102e"
          strokeWidth="0.4"
          strokeOpacity="0.12"
        />
        <line
          x1="1380"
          y1="900"
          x2="820"
          y2="500"
          stroke="#c8102e"
          strokeWidth="0.3"
          strokeOpacity="0.08"
        />

        {/* Central horizon line */}
        <line
          x1="0"
          y1="450"
          x2="1440"
          y2="450"
          stroke="#1a3263"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />

        {/* Scattered small dots — deliberate constellation pattern */}
        {[
          [120, 80],
          [300, 160],
          [80, 320],
          [420, 240],
          [1100, 80],
          [1280, 200],
          [1360, 320],
          [1200, 400],
          [160, 600],
          [300, 720],
          [100, 820],
          [480, 800],
          [1300, 700],
          [1380, 820],
          [680, 80],
          [760, 100],
          [820, 60],
          [600, 800],
          [760, 820],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? 1.5 : 1}
            fill={i % 2 === 0 ? "#6fa8dc" : "#c8102e"}
            opacity={0.3 + (i % 4) * 0.1}
          />
        ))}

        {/* Geometric triangle accent — top right */}
        <polygon
          points="1340,20 1440,20 1440,140"
          fill="#4a8fc7"
          fillOpacity="0.04"
          stroke="#4a8fc7"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />
        {/* Geometric triangle accent — bottom left */}
        <polygon
          points="0,760 120,900 0,900"
          fill="#c8102e"
          fillOpacity="0.04"
          stroke="#c8102e"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />

        {/* Thin horizontal rule across center — "stage" feeling */}
        <line
          x1="200"
          y1="448"
          x2="1240"
          y2="448"
          stroke="#4a8fc7"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          strokeDasharray="4 12"
        />
      </svg>

      {/* ── CONTENT ── */}
      <div
        className="relative z-10 flex flex-col items-center px-6 pt-32 pb-28"
        style={{ maxWidth: "900px" }}
      >
        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-2.5 mb-10 px-5 py-2 rounded-full border text-[0.68rem] font-semibold tracking-[0.22em] uppercase"
          style={{
            color: "var(--sky)",
            background: "rgba(111,168,220,0.08)",
            borderColor: "rgba(111,168,220,0.25)",
            fontFamily: "var(--font-body)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--sky)", boxShadow: "0 0 6px #6fa8dc" }}
          />
          Official Public Speaking Society · LASU Ojo
        </div>

        {/* Main heading */}
        <h1
          className="mb-4 text-center leading-[0.95]"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(4rem, 12vw, 9rem)",
            fontWeight: 300,
            letterSpacing: "-0.04em",
            color: "#fff",
          }}
        >
          Valour in
        </h1>

        {/* "Speech" — large gradient italic */}
        <h1
          className="mb-8 text-center leading-[0.85]"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(4.5rem, 14vw, 11rem)",
            fontWeight: 300,
            fontStyle: "italic",
            letterSpacing: "-0.05em",
            background:
              "linear-gradient(100deg, #6fa8dc 0%, #4a8fc7 35%, #c8102e 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Speech
        </h1>

        {/* Gradient divider */}
        <div
          className="mb-10 rounded-full"
          style={{
            width: "80px",
            height: "2px",
            background: "linear-gradient(90deg, #4a8fc7, #c8102e)",
          }}
        />

        {/* Subheading */}
        <p
          className="mb-12 text-center leading-[1.85]"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "560px",
            fontWeight: 400,
          }}
        >
          Raising communicators, storytellers, debaters, and leaders who shape
          conversations and transform communities.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#"
            className="inline-block rounded text-sm font-semibold tracking-wide text-white no-underline"
            style={{
              fontFamily: "var(--font-body)",
              background: "var(--crimson)",
              padding: "0.9rem 2.2rem",
              border: "1.5px solid var(--crimson)",
              letterSpacing: "0.05em",
            }}
          >
            Join LSUDS
          </a>
          <a
            href="#programs"
            className="inline-block rounded text-sm font-semibold tracking-wide no-underline"
            style={{
              fontFamily: "var(--font-body)",
              color: "#fff",
              background: "rgba(255,255,255,0.06)",
              padding: "0.9rem 2.2rem",
              border: "1.5px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              letterSpacing: "0.05em",
            }}
          >
            Explore LISTEN
          </a>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{
          color: "rgba(255,255,255,0.3)",
          fontFamily: "var(--font-body)",
        }}
      >
        <span className="text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
        <div
          className="w-px"
          style={{
            height: "48px",
            background:
              "linear-gradient(to bottom, rgba(111,168,220,0.6), transparent)",
          }}
        />
      </div>

      {/* ── BOTTOM VIGNETTE ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{
          height: "200px",
          background: "linear-gradient(to top, #0a1428 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
