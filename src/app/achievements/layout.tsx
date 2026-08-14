import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "See the awards, milestones, and recognitions earned by the LASU Debate Society and its members across debate competitions and public speaking events.",
  alternates: { canonical: "/achievements" },
  openGraph: {
    title: "LASU Debate Society Achievements",
    description:
      "Awards, milestones, and recognitions earned by the LASU Debate Society and its members.",
    url: "/achievements",
  },
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
