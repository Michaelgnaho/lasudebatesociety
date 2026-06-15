export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-36 px-8 text-center overflow-hidden"
      style={{ background: "#fff" }}
    >
      {/* Ambient radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(74,143,199,0.08) 0%, rgba(200,16,46,0.04) 60%, transparent 80%)",
        }}
      />

      <div className="relative">
        <p
          className="text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-6"
          style={{ color: "var(--sky-mid)", fontFamily: "var(--font-body)" }}
        >
          Your Journey Begins Here
        </p>

        <h2
          className="mx-auto mb-4 leading-[1.05]"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            color: "var(--navy-deep)",
            maxWidth: "800px",
          }}
        >
          Your voice has power.
          <br />
          <em
            style={{
              background: "var(--grad-text)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Learn to use it.
          </em>
        </h2>

        <p
          className="text-[1rem] mb-12"
          style={{
            color: "var(--text-muted, #5a5a6a)",
            fontFamily: "var(--font-body)",
          }}
        >
          Join a society that has been transforming students into communicators,
          thinkers, and leaders since 2018.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#"
            className="inline-block px-8 py-3.5 rounded text-sm font-semibold tracking-wide text-white no-underline"
            style={{
              background: "var(--crimson)",
              fontFamily: "var(--font-body)",
            }}
          >
            Join The Society
          </a>
          <a
            href="#"
            className="inline-block px-8 py-3.5 rounded text-sm font-semibold tracking-wide no-underline border-[1.5px]"
            style={{
              color: "var(--navy)",
              borderColor: "var(--navy)",
              fontFamily: "var(--font-body)",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
