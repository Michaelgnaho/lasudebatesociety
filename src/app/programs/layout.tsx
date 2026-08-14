import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore LSUDS programs — Word War debates, Orator's Retreat, LISTEN, and structured leadership training designed to build confident communicators at Lagos State University.",
  alternates: { canonical: "/programs" },
  openGraph: {
    title: "LASU Debate Society Programs",
    description:
      "Word War debates, Orator's Retreat, LISTEN, and structured leadership training at LASU.",
    url: "/programs",
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
