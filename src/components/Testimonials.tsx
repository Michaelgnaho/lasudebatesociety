"use client";

import AnimatedContent from "@/components/AnimatedContent";

const testimonials = [
  {
    text: "LSUDS has taught me my first lesson in the university — always have something doing. Since 100L I held on to that sentence, and with it I learned a lot from life, public speaking, education and more.",
    initials: "AA",
    name: "Amb. Adeniji Tomiwa Azeez",
    role: "Communications Executive & Professional Event Host",
  },
  {
    text: "LSUDS gave me a platform to develop my public speaking, communication and leadership skills, while pushing me out of my comfort zone. But most importantly, it gave me a family beyond blood.",
    initials: "ML",
    name: "Maryam Motunrayo Lawal",
    role: "Product Management · Content Creation",
  },
  {
    text: "The LASU Debate Society gave me something I didn't know I needed: the ability to sit with an idea long enough to question it. It changed how I approach conversations, opinions, and my own convictions.",
    initials: "FA",
    name: "Farouk Olaoluwa Aminu",
    role: "Creative Designer & Social Impact Advocate",
  },
  {
    text: "LSUDS did not just improve the way I speak or debate; it changed the way I think, lead, and approach excellence — and that is something I will carry with me wherever I go.",
    initials: "MF",
    name: "Michael Favour Eneoche",
    role: "Final-year English Student, LASU",
  },
  {
    text: "LSUDS gave me the push I needed to perform on a stage again, and it became a family I was proud to be part of.",
    initials: "AA",
    name: "Aderenike Akindele",
    role: "Public Speaker",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <AnimatedContent
            distance={30}
            duration={0.7}
            ease="power3.out"
            threshold={0.1}
          >
            <p
              className="text-[0.68rem] font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--crimson)" }}
            >
              Voices from Our Community
            </p>
          </AnimatedContent>

          <AnimatedContent
            distance={40}
            duration={0.8}
            ease="power3.out"
            delay={0.1}
            threshold={0.1}
          >
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
          </AnimatedContent>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedContent
              key={i}
              distance={24}
              duration={0.6}
              ease="power3.out"
              delay={0.08 + i * 0.06}
              threshold={0.15}
              className={
                testimonials.length % 3 === 2 && i === testimonials.length - 1
                  ? "lg:col-start-2"
                  : testimonials.length % 3 === 1 &&
                      i === testimonials.length - 1
                    ? "md:col-start-1 lg:col-start-2"
                    : ""
              }
            >
              <div
                className="group relative h-full flex flex-col rounded-lg p-9 transition-all duration-300"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(26,50,99,0.08)",
                  boxShadow: "0 1px 3px rgba(26,50,99,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 16px 32px -12px rgba(26,50,99,0.16)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(26,50,99,0.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 1px 3px rgba(26,50,99,0.04)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(26,50,99,0.08)";
                }}
              >
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-9 right-9 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "var(--grad-icon, var(--crimson))" }}
                  aria-hidden
                />

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

                {/* Testimonial text block */}
                <p
                  className="relative text-[0.93rem] leading-[1.85] mb-6 flex-1"
                  style={{
                    color: "var(--text, #1c1c1c)",
                    fontFamily: "var(--font-body)",
                    zIndex: 1,
                  }}
                >
                  {t.text}
                </p>

                {/* Author Info Block */}
                <div className="flex items-center gap-3 pt-6 mt-auto border-t border-black/5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[0.68rem] font-semibold flex-shrink-0"
                    style={{ background: "var(--grad-icon)" }}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div
                      className="text-[0.83rem] font-semibold truncate"
                      style={{
                        color: "var(--navy)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-[0.73rem] truncate"
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
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
