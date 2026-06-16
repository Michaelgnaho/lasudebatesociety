import { Award, GraduationCap, Trophy, Users } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Multi-Award Winning",
    copy: "Recognised both as a collective body and through individual member achievements at external competitions.",
  },
  {
    icon: GraduationCap,
    title: "Certified Public Speakers",
    copy: "A growing roster of trained, certified speakers shaped through structured public speaking and leadership programmes.",
  },
  {
    icon: Award,
    title: "National Representation",
    copy: "Members have represented LASU at speaking platforms and competitions across Nigeria and beyond.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    copy: "Every event, training, and competition is designed to create measurable impact on members' leadership capacity.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--navy)] max-w-xl">
            A record built on{" "}
            <span className="italic gradient-text">excellence.</span>
          </h2>
          <p className="text-[var(--ink)]/60 max-w-sm">
            Since its founding, LSUDS has produced a significant number of
            certified public speakers who carry the society's standard forward.
          </p>
        </div>

        <div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border divide-y sm:divide-y-0 sm:divide-x lg:divide-x divide-[var(--line)]"
          style={{ borderColor: "var(--line)" }}
        >
          {achievements.map((item) => (
            <div key={item.title} className="bg-white p-8">
              <item.icon
                className="h-7 w-7 text-[var(--crimson)]"
                strokeWidth={1.5}
              />
              <h3 className="mt-6 text-lg font-medium text-[var(--navy)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--ink)]/65 leading-relaxed">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
