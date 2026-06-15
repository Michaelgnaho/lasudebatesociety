const stats = [
  { num: "2018", label: "Founded" },
  { num: "8", label: "LISTEN Editions" },
  { num: "Multi", label: "Award Winning" },
  { num: "100+", label: "Certified Speakers" },
  { num: "500+", label: "Members Trained" },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-8" style={{ background: "var(--navy)" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div
              className="leading-none mb-2"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 300,
                background: "var(--grad-stat-num)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {s.num}
            </div>
            <div
              className="text-[0.72rem] font-medium tracking-[0.12em] uppercase"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
