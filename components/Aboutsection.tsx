const values = [
  "Excellence",
  "Impact",
  "Leadership",
  "Integrity",
  "Community",
  "Continuous Learning",
];

export default function AboutSection() {
  return (
    <section className="py-28 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image block */}
        <div className="relative">
          <div
            className="w-full rounded-sm overflow-hidden relative flex items-center justify-center"
            style={{
              aspectRatio: "4/5",
              background:
                "linear-gradient(135deg, var(--sky-pale) 0%, #e8f0fb 100%)",
            }}
          >
            {/* Crosshatch pattern overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(74,143,199,0.04) 40px, rgba(74,143,199,0.04) 80px)",
              }}
            />
            <span
              className="relative"
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
                color: "var(--sky-mid)",
                opacity: 0.4,
                fontSize: "1rem",
              }}
            >
              Society photo
            </span>
          </div>

          {/* Badge */}
          <div
            className="absolute -bottom-6 -right-4 px-5 py-4 rounded-sm"
            style={{ background: "var(--crimson)", color: "#fff" }}
          >
            <span
              className="block leading-none mb-1"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: 300,
              }}
            >
              Lagos
              <br />
              State
            </span>
            <span
              className="block text-[0.6rem] font-semibold tracking-[0.1em] uppercase"
              style={{ opacity: 0.85 }}
            >
              University · Ojo
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          <p
            className="text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "var(--crimson)" }}
          >
            About the Society
          </p>
          <h2
            className="mb-6 leading-[1.15]"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--navy-deep)",
              letterSpacing: "-0.02em",
            }}
          >
            More than debate.
            <br />
            <em>A platform for human growth.</em>
          </h2>
          <p
            className="leading-[1.85] mb-4 text-[1rem]"
            style={{
              color: "var(--text-muted, #5a5a6a)",
              fontFamily: "var(--font-body)",
            }}
          >
            LSUDS is the official public speaking society of Lagos State
            University. Beyond debate, the society serves as a platform for
            leadership development, communication excellence, and personal
            transformation.
          </p>
          <p
            className="leading-[1.85] mb-8 text-[1rem]"
            style={{
              color: "var(--text-muted, #5a5a6a)",
              fontFamily: "var(--font-body)",
            }}
          >
            Built on a philosophy of impact — a belief that excellence in
            communication is inseparable from excellence in leadership — LSUDS
            has grown from a founding cohort into one of Nigeria&apos;s most
            recognised student speaking organisations.
          </p>

          {/* Values */}
          <div className="flex flex-wrap gap-2 mb-9">
            {values.map((v) => (
              <span
                key={v}
                className="text-[0.72rem] font-semibold px-3.5 py-1.5 rounded-full border"
                style={{
                  color: "var(--navy)",
                  borderColor: "rgba(26,50,99,0.2)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {v}
              </span>
            ))}
          </div>

          <a
            href="#"
            className="inline-block px-8 py-3.5 rounded text-sm font-semibold tracking-wide text-white no-underline"
            style={{
              background: "var(--crimson)",
              fontFamily: "var(--font-body)",
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
