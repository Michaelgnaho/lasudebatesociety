import Image from "next/image";
import Hero from "@/src/components/Hero";
import AboutSection from "@/src/components/Aboutsection";
import StatsSection from "@/src/components/Statssection";
import ProgramsSection from "@/src/components/Programsection";
import TestimonialsSection from "@/src/components/Testimonials";
import CTASection from "@/src/components/CTA";
import Achievement from "@/src/components/Achievement";

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
