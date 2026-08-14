import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LISTEN",
  description:
    "LISTEN is the LASU Debate Society's flagship storytelling and spoken word event, featuring guest speakers, monologues, and live performances at Lagos State University.",
  alternates: { canonical: "/listen" },
  openGraph: {
    title: "LISTEN | LASU Debate Society",
    description:
      "The LASU Debate Society's flagship storytelling and spoken word event, featuring guest speakers, monologues, and live performances.",
    url: "/listen",
  },
};

export default function ListenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
