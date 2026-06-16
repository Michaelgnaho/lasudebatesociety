const testimonials = [
  {
    text: "LSUDS didn't just teach me how to speak. It taught me how to think, lead, and show up for a room. The friendships and confidence I built here are things I carry everywhere.",
    initials: "AA",
    name: "LSUDS Alumna",
    role: "Faculty of Law · 2023",
  },
  {
    text: "LISTEN Edition V was the moment I realised storytelling could change a room. Being on that stage was the most terrifying and most fulfilling thing I have done in university.",
    initials: "TK",
    name: "LISTEN Speaker, Edition V",
    role: "RESILIENCE · October 2024",
  },
  {
    text: "Word War prepared me for my first external competition better than any textbook could. The pressure, the research, the feedback — it made me a sharper thinker and a more confident speaker.",
    initials: "MO",
    name: "Word War Finalist",
    role: "Faculty of Social Sciences",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "var(--crimson)" }}
          >
            Voices from Our Community
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 400,
              color: "var(--navy-deep)",
              letterSpacing: "-0.02em",
            }}
          >
            What our members say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-sm p-9"
              style={{
                background: "#fff",
                border: "1px solid rgba(26,50,99,0.08)",
              }}
            >
              {/* Opening quote */}
              <span
                className="absolute top-3 left-5 leading-none pointer-events-none select-none"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "5rem",
                  color: "var(--sky-pale)",
                  lineHeight: 1,
                }}
                aria-hidden
              >
                &ldquo;
              </span>

              <p
                className="relative text-[0.93rem] leading-[1.85] mb-6"
                style={{
                  color: "var(--text, #1c1c1c)",
                  fontFamily: "var(--font-body)",
                  zIndex: 1,
                }}
              >
                {t.text}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[0.68rem] font-semibold flex-shrink-0"
                  style={{ background: "var(--grad-icon)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="text-[0.83rem] font-semibold"
                    style={{
                      color: "var(--navy)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[0.73rem]"
                    style={{
                      color: "var(--text-muted, #5a5a6a)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
