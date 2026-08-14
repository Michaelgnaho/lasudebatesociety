import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/src/components/Hero";
import AboutSection from "@/src/components/Aboutsection";
import StatsSection from "@/src/components/Statssection";
import ProgramsSection from "@/src/components/Programsection";
import TestimonialsSection from "@/src/components/Testimonials";
import CTASection from "@/src/components/CTA";
import Achievement from "@/src/components/Achievement";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <StatsSection />
      <Achievement />
      <ProgramsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
