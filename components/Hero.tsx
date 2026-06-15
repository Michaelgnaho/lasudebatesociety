import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

const stats = [
  { value: "2018", label: "Founded" },
  { value: "VIII", label: "LISTEN Editions" },
  { value: "50+", label: "Speakers Trained" },
  { value: "Multi", label: "Award Winning" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Decorative gradient ribbons */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-32 h-[28rem] w-[28rem] rotate-12 rounded-[3rem] opacity-[0.12] blur-2xl gradient-icon-bg"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full opacity-10 blur-3xl gradient-text"
        style={{ WebkitTextFillColor: "unset" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span
              className="h-px w-10"
              style={{ backgroundImage: "var(--grad-divider)" }}
            />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/60">
              Lagos State University · Est. 2018
            </span>
            <span
              className="h-px w-10"
              style={{ backgroundImage: "var(--grad-divider)" }}
            />
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-navy-deep sm:text-6xl md:text-7xl">
            Valour in <span className="gradient-text">Speech</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-navy-deep/70 sm:text-lg font-[var(--font-body)]">
            The official public speaking society of LASU — training the
            university&apos;s finest voices, hosting Africa&apos;s biggest
            storytelling stage, and raising leaders one word at a time.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/listen"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-crimson px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-crimson/25 transition hover:bg-crimson-deep hover:shadow-crimson/40 sm:w-auto"
            >
              <PlayCircle className="h-4 w-4" />
              Explore LISTEN
            </Link>
            <Link
              href="/about"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-navy/15 px-7 py-3.5 text-sm font-semibold text-navy transition hover:border-navy hover:bg-navy hover:text-white sm:w-auto"
            >
              Meet the Society
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="gradient-stat text-3xl font-bold sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-navy-deep/60 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider into next section */}
      <div className="absolute bottom-0 left-1/2 w-full max-w-5xl -translate-x-1/2 px-6">
        <div className="gradient-divider" />
      </div>
    </section>
  );
}
