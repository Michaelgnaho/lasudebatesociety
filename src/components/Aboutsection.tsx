import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Visual side — abstract laurel + soundwave motif standing in for photography */}
          <div className="order-2 lg:order-1">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border"
              style={{
                borderColor: "var(--line)",
                background: "var(--sky-faint)",
              }}
            >
              <span
                aria-hidden
                className="quote-glyph absolute -top-10 -left-6 text-[14rem] sm:text-[18rem] select-none"
              >
                &ldquo;
              </span>

              {/* Laurel crest, abstracted from the LSUDS mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="flex h-40 w-40 sm:h-56 sm:w-56 items-center justify-center rounded-full border-2"
                  style={{ borderColor: "var(--sky)" }}
                >
                  <div
                    className="flex h-28 w-28 sm:h-40 sm:w-40 items-center justify-center rounded-full"
                    style={{ background: "var(--grad-icon)" }}
                  >
                    <span className="font-[var(--font-heading)] text-4xl sm:text-6xl italic text-white">
                      L
                    </span>
                  </div>
                </div>
              </div>

              {/* Soundwave bars along the base */}
              <div className="absolute bottom-8 left-8 right-8 flex items-end gap-1.5">
                {[40, 70, 30, 90, 55, 25, 80, 45, 60, 35, 75, 50].map(
                  (h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-full"
                      style={{
                        height: `${h}%`,
                        background:
                          i % 2 === 0 ? "var(--crimson)" : "var(--navy)",
                        opacity: 0.65,
                      }}
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Copy side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--navy)] leading-tight">
              More than a debate club —
              <br />a leadership platform.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[var(--ink)]/70 leading-relaxed">
              LSUDS is the official public speaking society of Lagos State
              University. We represent the institution at competitions, train
              members in the art of public speaking, and organise speaking
              events for the wider campus community.
            </p>

            <p className="mt-4 text-base sm:text-lg text-[var(--ink)]/70 leading-relaxed">
              Beyond debate, the society is a platform for leadership
              development, communication excellence, and personal transformation
              — built on the belief that excellence in speech is inseparable
              from excellence in leadership.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 border-b-2 pb-1 text-sm font-semibold text-[var(--navy)]"
              style={{ borderColor: "var(--crimson)" }}
            >
              Learn more about our story
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
