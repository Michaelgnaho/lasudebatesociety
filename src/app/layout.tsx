import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LASU Debate Society | Valour in Speech",
  description:
    "The official public speaking society of Lagos State University — developing communicators, storytellers, debaters, and leaders through LISTEN, Word War, and structured leadership training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fraunces.variable, jakarta.variable, "font-sans", geist.variable)}>
      <body className="`bg-(--paper)` `text-(--ink)` antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
