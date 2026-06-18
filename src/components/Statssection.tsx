const stats = [
  { value: "2018", label: "Founded" },
  { value: "08", label: "LISTEN Editions", note: "SEED → MOMENTUM" },
  { value: "400+", label: "Certified Speakers", note: "produced & trained" },
  { value: "500+", label: "Members Trained", note: "across all faculties" },
];

export default function ImpactStats() {
  return (
    <section
      id="impact"
      className="relative bg-(--navy) text-white py-24 sm:py-28"
    >
      <div className="section-shell">
        <div className="mt-12 flex flex-wrap items-baseline gap-x-3 gap-y-2">
          <h2 className="text-3xl sm:text-4xl font-medium">
            Multi-award winning,
          </h2>
          <h2 className="text-3xl sm:text-4xl font-medium italic text-(--sky)">
            by the numbers.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-l pl-5 sm:pl-6 ${i === 0 ? "" : ""}`}
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-medium tabular-nums bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--grad-stat-num)" }}
              >
                {stat.value}
              </div>
              <div className="mt-3 text-sm sm:text-base text-white/85">
                {stat.label}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
