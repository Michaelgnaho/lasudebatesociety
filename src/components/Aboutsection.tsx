"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const barsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const scroller =
      document.getElementById("snap-main-container") || undefined;

    const ctx = gsap.context(() => {
      // Navy panel wipes away to reveal the photo
      if (panelRef.current) {
        gsap.to(panelRef.current, {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 1.1,
          ease: "power4.inOut",
          delay: 0.25,
          scrollTrigger: {
            trigger: panelRef.current,
            scroller,
            start: "top 80%",
            once: true,
          },
        });
      }

      // Soundwave bars grow in, then settle into a soft idle pulse
      const bars = barsRef.current.filter(Boolean) as HTMLSpanElement[];
      if (bars.length) {
        gsap.fromTo(
          bars,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "bottom",
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.05,
            delay: 0.9,
            scrollTrigger: {
              trigger: bars[0],
              scroller,
              start: "top 85%",
              once: true,
            },
            onComplete: () => {
              bars.forEach((bar, i) => {
                gsap.to(bar, {
                  scaleY: 0.7 + Math.random() * 0.3,
                  duration: 1 + Math.random(),
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut",
                  delay: i * 0.08,
                });
              });
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Visual side */}
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            duration={0.9}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.96}
            threshold={0.1}
            delay={0}
          >
            <div className="order-2 lg:order-1">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border"
                style={{ borderColor: "var(--line)" }}
              >
                <Image
                  src="/images/Hezekiah-Tiamiyu.webp"
                  alt="LSUDS member"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />

                {/* Wipe-reveal panel */}
                <div
                  ref={panelRef}
                  className="absolute inset-0 z-10"
                  style={{ background: "var(--navy)" }}
                />

                {/* Soundwave bars along the base */}
                <div className="absolute bottom-8 left-8 right-8 flex items-end gap-1.5 z-20">
                  {[40, 70, 30, 90, 55, 25, 80, 45, 60, 35, 75, 50].map(
                    (h, i) => (
                      <span
                        key={i}
                        ref={(el) => {
                          barsRef.current[i] = el;
                        }}
                        className="flex-1 rounded-full"
                        style={{
                          height: `${h}%`,
                          background:
                            i % 2 === 0 ? "var(--crimson)" : "var(--navy)",
                          opacity: 0.65,
                          transform: "scaleY(0)",
                        }}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </AnimatedContent>

          {/* Copy side — staggered reveal, line by line */}
          <div className="order-1 lg:order-2">
            <AnimatedContent
              distance={40}
              duration={0.7}
              ease="power3.out"
              delay={0.1}
              threshold={0.15}
              initialOpacity={0}
              animateOpacity
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--navy)] leading-tight">
                More than a debate club —
                <br />a leadership platform.
              </h2>
            </AnimatedContent>

            <AnimatedContent
              distance={40}
              duration={0.7}
              ease="power3.out"
              delay={0.25}
              threshold={0.15}
              initialOpacity={0}
              animateOpacity
            >
              <p className="mt-6 text-base sm:text-lg text-[var(--ink)]/70 leading-relaxed">
                LSUDS is the official public speaking society of Lagos State
                University. We represent the institution at competitions, train
                members in the art of public speaking, and organise speaking
                events for the wider campus community.
              </p>
            </AnimatedContent>

            <AnimatedContent
              distance={40}
              duration={0.7}
              ease="power3.out"
              delay={0.4}
              threshold={0.15}
              initialOpacity={0}
              animateOpacity
            >
              <p className="mt-4 text-base sm:text-lg text-[var(--ink)]/70 leading-relaxed">
                Beyond debate, the society is a platform for leadership
                development, communication excellence, and personal
                transformation, built on the belief that excellence in speech is
                inseparable from excellence in leadership.
              </p>
            </AnimatedContent>

            <AnimatedContent
              distance={20}
              duration={0.6}
              ease="power3.out"
              delay={0.55}
              threshold={0.15}
              initialOpacity={0}
              animateOpacity
            >
              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 border-b-2 pb-1 text-sm font-semibold text-[var(--navy)]"
                style={{ borderColor: "var(--crimson)" }}
              >
                Learn more about our story
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
}
