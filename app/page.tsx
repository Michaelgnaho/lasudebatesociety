import Image from "next/image";
import Hero from "@/components/Hero";
import AboutSection from "@/components/Aboutsection";
import StatsSection from "@/components/Statssection";
import ProgramsSection from "@/components/Programsection";
import TestimonialsSection from "@/components/Testimonials";
import CTASection from "@/components/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <StatsSection />

      <ProgramsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
