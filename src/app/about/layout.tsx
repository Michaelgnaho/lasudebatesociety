import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the LASU Debate Society (LSUDS) — our mission, values, leadership team, and history developing public speakers, debaters, and storytellers at Lagos State University.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About the LASU Debate Society",
    description:
      "Our mission, values, leadership team, and history developing public speakers, debaters, and storytellers at LASU.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
