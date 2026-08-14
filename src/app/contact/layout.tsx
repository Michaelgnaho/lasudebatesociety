import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the LASU Debate Society. Reach out about membership, partnerships, event bookings, or general inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact the LASU Debate Society",
    description:
      "Reach out about membership, partnerships, event bookings, or general inquiries.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
