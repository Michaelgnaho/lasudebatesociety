"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Mic, Sparkles, Users, Heart, Globe, ArrowRight } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────

const editions = [
  {
    number: "I",
    theme: "SEED",
    date: "20th October, 2019",
    president: "Hezekiah Tiamiyu",
    description:
      "The very first edition. A seed planted on stage at LASU that would grow into Africa's biggest storytelling platform. Speakers took the stage to share the origins of who they are — the seeds that shaped them.",
    image: "/images/listen/listen-logo.webp",
  },
  {
    number: "II",
    theme: "VISION",
    date: "19th May, 2021",
    president: "Oluwafemi Akanmu",
    description:
      "Stories of sight — of people who dared to see beyond what was in front of them. LISTEN II invited speakers to share the visions that drove them forward, even when the path was uncertain.",
    image: "/images/listen/listen-vision.webp",
  },
  {
    number: "III",
    theme: "VOYAGE",
    date: "23rd February, 2022",
    president: "Oladunni Akinsanmi",
    description:
      "A journey across lived experience. LISTEN III explored what it means to set sail into the unknown — stories of departure, discovery, and the courage it takes to keep moving.",
    image: "/images/listen/listen-voyage.webp",
  },
  {
    number: "IV",
    theme: "ADVENTURE",
    date: "11th January, 2023",
    president: "Titilope Ibrahim",
    description:
      "Stories of daring. LISTEN IV celebrated the moments when people chose the harder, braver, more uncertain path — and came back changed. A night of fearless storytelling.",
    image: "/images/listen/listen-adventure.webp",
  },
  {
    number: "V",
    theme: "RESILIENCE",
    date: "18th October, 2024",
    president: "Boluwatife Kolawole",
    description:
      "Widely regarded as an outstanding edition. LISTEN V held space for stories of survival, endurance, and the quiet strength it takes to keep going when everything says stop.",
    image: "/images/listen/listen-resilient.webp",
  },
  {
    number: "VI",
    theme: "EMERGENCE",
    date: "10th July, 2025",
    president: "Seide Agosu",
    description:
      "Stories of becoming. LISTEN VI explored the moments of emergence — when people broke through the surface and stepped into their truest selves. Held at the Buba Marwa Auditorium, LASU Ojo.",
    image: "/images/listen/listen-emergence.webp",
  },
  {
    number: "VII",
    theme: "ZENITH",
    date: "25th June, 2025",
    president: "Aina Ayomide",
    description:
      "A celebration of peaks. LISTEN VII invited speakers to share the moments that marked their highest point — not of perfection, but of purpose found and potential unlocked.",
    image: "/images/listen/listen-zenith.webp",
  },
  {
    number: "VIII",
    theme: "MOMENTUM",
    date: "29th April, 2026",
    president: "Asikaburu Miracle Ezinne",
    description:
      "The most recent edition. LISTEN VIII explored the force that keeps us moving — stories of momentum built through discipline, community, and relentless forward motion. Held at the Buba Marwa Auditorium, LASU Ojo.",
    image: "/images/listen/listen8.webp",
    isCurrent: true,
  },
];

const guests = [
  { name: "Denrele Edun", image: "/listen/guests/denrele-edun.jpg" },
  { name: "Shaffy Bello", image: "/listen/guests/shaffy-bello.jpg" },
  {
    name: "Roseline Afije",
    image: "/listen/guests/roseline-afije.jpg",
    aka: "Liquorose",
  },
  { name: "Adunni Ade", image: "/listen/guests/adunni-ade.jpg" },
  { name: "Damola Olatunji", image: "/listen/guests/damola-olatunji.jpg" },
  { name: "Seyi Edun Johnson", image: "/listen/guests/seyi-edun-johnson.jpg" },
  {
    name: "Mariam Apaokhagi Greene",
    image: "/listen/guests/mariam-apaokhagi-greene.jpg",
  },
  { name: "Dare Arigbede", image: "/listen/guests/dare-arigbede.jpg" },
  { name: "Yemi Solade", image: "/listen/guests/yemi-solade.jpg" },
  { name: "Iremide Adeoye", image: "/listen/guests/iremide-adeoye.jpg" },
  {
    name: "Prosperity Olorunfemi",
    image: "/listen/guests/prosperity-olorunfemi.jpg",
  },
];

const pillars = [
  {
    icon: Mic,
    title: "Not a debate.",
    copy: "LISTEN is not a competition. There are no winners or losers — only storytellers and an audience forever changed by what they hear.",
  },
  {
    icon: Heart,
    title: "Rooted in truth.",
    copy: "Every speaker shares a deeply personal story grounded in lived experience — stories of struggle, growth, discovery, and the courage it takes to be honest.",
  },
  {
    icon: Sparkles,
    title: "Anchored by a theme.",
    copy: "Each edition is guided by a single overarching theme. Every story on stage connects to that theme through authentic, unscripted human experience.",
  },
  {
    icon: Users,
    title: "Open to all.",
    copy: "Speakers are drawn from within LASU, from public life, and from the wider Nigerian community. LISTEN belongs to anyone with a story worth telling.",
  },
  {
    icon: Globe,
    title: "A movement.",
    copy: "LISTEN is a declaration that the stories of young Africans deserve to be told, heard, and celebrated on the largest possible stage — and beyond.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Listen() {
  const mainRef = useRef<HTMLDivElement>(null);
  const venueSectionRef = useRef<HTMLDivElement>(null);
  const venuePanelRef = useRef<HTMLDivElement>(null);

  // Scroll-driven entrance animations for mapped/repeated list & grid items
  useEffect(() => {
    const scroller =
      document.getElementById("snap-main-container") || undefined;

    const ctx = gsap.context(() => {
      const q = (sel: string) =>
        Array.from(mainRef.current?.querySelectorAll<HTMLElement>(sel) ?? []);

      const reveal = (sel: string, vars: gsap.TweenVars = {}) => {
        const els = q(sel);
        if (!els.length) return;
        ScrollTrigger.batch(els, {
          scroller,
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.08,
              ...vars,
            }),
        });
      };

      reveal(".pillar-card", { stagger: 0.08 });
      reveal(".exp-card", { stagger: 0.12 });
      reveal(".edition-card", { stagger: 0.06, ease: "back.out(1.4)" });
      reveal(".guest-card", { stagger: 0.035, duration: 0.5 });

      // Venue — navy wipe panel, same technique as AboutPreview
      if (venuePanelRef.current) {
        gsap.to(venuePanelRef.current, {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 1.1,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: venueSectionRef.current,
            scroller,
            start: "top 75%",
            once: true,
          },
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef}>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-end">
        {/* Background image — replace src with your stage photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/listen/listen-hero3.webp"
            alt="LISTEN stage at the Buba Marwa Auditorium, LASU Ojo"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient overlay — dark at bottom for text legibility, subtle at top */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/60 to-[var(--navy)]/20" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full section-shell pb-20 pt-40">
          <AnimatedContent
            distance={20}
            duration={0.6}
            ease="power3.out"
            threshold={0.1}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--sky)]">
              LSUDS Presents
            </p>
          </AnimatedContent>

          <AnimatedContent
            distance={40}
            duration={0.8}
            ease="power3.out"
            delay={0.12}
            threshold={0.1}
          >
            <h1 className="mt-4 text-6xl sm:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-none">
              LISTEN
            </h1>
          </AnimatedContent>

          <AnimatedContent
            distance={30}
            duration={0.7}
            ease="power3.out"
            delay={0.26}
            threshold={0.1}
          >
            <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
              The biggest storytelling event in Africa. Eight editions. One
              auditorium. Thousands of lives changed by the power of a story
              told well.
            </p>
          </AnimatedContent>

          {/* Edition badge strip */}
          <AnimatedContent
            distance={30}
            duration={0.7}
            ease="power3.out"
            delay={0.4}
            threshold={0.1}
            scale={0.98}
          >
            <div className="mt-10 flex flex-wrap gap-2">
              {editions.map((e) => (
                <span
                  key={e.number}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest border ${
                    e.isCurrent
                      ? "bg-(--crimson) border-[var(--crimson)] text-white"
                      : "border-white/20 text-white/50"
                  }`}
                >
                  {e.isCurrent && (
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  )}
                  Edition {e.number} · {e.theme}
                </span>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* ── What is LISTEN ───────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:gap-20">
            {/* Left — eyebrow + headline */}
            <div className="lg:w-5/12 shrink-0">
              <AnimatedContent
                distance={30}
                duration={0.7}
                ease="power3.out"
                threshold={0.15}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
                  About the event
                </p>
                <h2 className="mt-4 text-3xl sm:text-4xl font-medium text-[var(--navy)] leading-snug">
                  Stories that{" "}
                  <span className="italic gradient-text">
                    reform, transform,
                  </span>{" "}
                  and inform.
                </h2>
              </AnimatedContent>

              <AnimatedContent
                distance={30}
                duration={0.7}
                ease="power3.out"
                delay={0.15}
                threshold={0.15}
              >
                <p className="mt-6 text-[var(--ink)]/65 leading-relaxed">
                  LISTEN is the annual storytelling event organised by the Lagos
                  State University Debate Society. It carries the distinction of
                  being described as the Biggest Storytelling Event in Africa —
                  the most ambitious storytelling platform on any Nigerian
                  university campus.
                </p>
              </AnimatedContent>

              <AnimatedContent
                distance={30}
                duration={0.7}
                ease="power3.out"
                delay={0.3}
                threshold={0.15}
              >
                <p className="mt-4 text-[var(--ink)]/65 leading-relaxed">
                  The premise is simple and profound:{" "}
                  <span className="font-medium text-[var(--navy)]">
                    stories matter.
                  </span>{" "}
                  The ability to tell a great story is a superpower — one that
                  transforms ordinary words into extraordinary experiences,
                  forges human connections, and allows us to travel through time
                  and empathy together.
                </p>
              </AnimatedContent>

              <AnimatedContent
                distance={30}
                duration={0.7}
                ease="power3.out"
                delay={0.45}
                threshold={0.15}
              >
                <p className="mt-4 text-[var(--ink)]/65 leading-relaxed">
                  Unlike debates or speech contests, LISTEN is not about winning
                  an argument. It is about truth.
                </p>
              </AnimatedContent>
            </div>

            {/* Right — pillars */}
            <div className="mt-14 lg:mt-0 lg:flex-1 flex flex-col divide-y divide-[var(--line)] border border-[var(--line)]">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="pillar-card opacity-0 -translate-x-4 flex items-start gap-5 bg-white px-7 py-6"
                >
                  <p.icon
                    className="h-5 w-5 text-[var(--crimson)] shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="font-semibold text-[var(--navy)] text-sm">
                      {p.title}
                    </p>
                    <p className="mt-1 text-sm text-[var(--ink)]/60 leading-relaxed">
                      {p.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The LISTEN Experience ─────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)] bg-[var(--navy)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <AnimatedContent
              distance={30}
              duration={0.7}
              ease="power3.out"
              threshold={0.15}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white max-w-xl">
                What the audience{" "}
                <span className="italic text-[var(--sky)]">takes home.</span>
              </h2>
            </AnimatedContent>
            <AnimatedContent
              distance={20}
              duration={0.6}
              ease="power3.out"
              delay={0.15}
              threshold={0.15}
            >
              <p className="text-white/50 max-w-sm">
                LISTEN is not just an event. Every edition leaves its audience
                fundamentally changed.
              </p>
            </AnimatedContent>
          </div>

          {/* Stat strip — animates in as a single cohesive block */}
          <AnimatedContent
            distance={30}
            duration={0.7}
            ease="power3.out"
            delay={0.1}
            threshold={0.15}
            scale={0.98}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {[
                {
                  stat: "8",
                  label: "Editions held",
                  sub: "Since 2019 — growing every year",
                },
                {
                  stat: "1,000s",
                  label: "Lives impacted",
                  sub: "Attendees across all editions",
                },
                {
                  stat: "11+",
                  label: "Notable guests",
                  sub: "Nigeria's most celebrated voices",
                },
                {
                  stat: "1",
                  label: "Venue",
                  sub: "Buba Marwa Auditorium, LASU Ojo",
                },
              ].map((s) => (
                <div key={s.label} className="px-8 py-10">
                  <p className="text-4xl font-semibold text-white">{s.stat}</p>
                  <p className="mt-1 text-sm font-medium text-[var(--sky)]">
                    {s.label}
                  </p>
                  <p className="mt-1 text-xs text-white/40">{s.sub}</p>
                </div>
              ))}
            </div>
          </AnimatedContent>

          {/* Experience prose */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-px border border-white/10">
            {[
              {
                heading: "Dare to dream.",
                body: "Through the stories told at LISTEN, audiences encounter people who refused to stop at the boundaries of what was possible — and were changed by what they found beyond them.",
              },
              {
                heading: "Find resilience.",
                body: "They encounter resilience in the stories of people who faced hardship and chose to rise — narratives that prove that survival is not the end of the story, only the beginning.",
              },
              {
                heading: "Own your story.",
                body: "Attendees leave LISTEN more reflective, more courageous, and more willing to own and share their own stories — because they've seen what happens when someone dares to be honest.",
              },
            ].map((block) => (
              <div
                key={block.heading}
                className="exp-card opacity-0 translate-y-6 bg-white/5 px-8 py-10"
              >
                <h3 className="text-lg font-medium text-white">
                  {block.heading}
                </h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Editions ─────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <AnimatedContent
              distance={30}
              duration={0.7}
              ease="power3.out"
              threshold={0.15}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--navy)] max-w-xl">
                Eight editions,{" "}
                <span className="italic gradient-text">one movement.</span>
              </h2>
            </AnimatedContent>
            <AnimatedContent
              distance={20}
              duration={0.6}
              ease="power3.out"
              delay={0.15}
              threshold={0.15}
            >
              <p className="text-[var(--ink)]/60 max-w-sm">
                Every edition is a chapter. Together, they tell the story of
                LISTEN itself.
              </p>
            </AnimatedContent>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-[var(--line)] bg-[var(--line)]">
            {editions.map((ed) => (
              <div
                key={ed.number}
                className="edition-card opacity-0 translate-y-6 bg-white flex flex-col group"
              >
                {/* Edition cover image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--navy)]/5">
                  <Image
                    src={ed.image}
                    alt={`LISTEN Edition ${ed.number} — ${ed.theme}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Theme overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Edition {ed.number}
                    </p>
                    <p className="text-xl font-semibold text-white leading-tight">
                      {ed.theme}
                    </p>
                  </div>
                  {ed.isCurrent && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[var(--crimson)] px-2.5 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-white">
                        Latest
                      </span>
                    </div>
                  )}
                </div>

                {/* Edition details */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--crimson)]/70">
                    {ed.date}
                  </p>
                  <p className="mt-3 text-sm text-[var(--ink)]/65 leading-relaxed flex-1">
                    {ed.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-[var(--line)]">
                    <p className="text-[10px] uppercase tracking-wider text-[var(--ink)]/35 font-medium">
                      Under President
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-[var(--navy)]">
                      {ed.president}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notable Guests ───────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <AnimatedContent
              distance={30}
              duration={0.7}
              ease="power3.out"
              threshold={0.15}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--navy)] max-w-xl">
                Voices that have{" "}
                <span className="italic gradient-text">graced the stage.</span>
              </h2>
            </AnimatedContent>
            <AnimatedContent
              distance={20}
              duration={0.6}
              ease="power3.out"
              delay={0.15}
              threshold={0.15}
            >
              <p className="text-[var(--ink)]/60 max-w-sm">
                LISTEN has hosted some of Nigeria's most celebrated
                personalities across media, entertainment, and public life.
              </p>
            </AnimatedContent>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
            {guests.map((guest) => (
              <div
                key={guest.name}
                className="guest-card opacity-0 translate-y-4 flex flex-col items-center text-center gap-3"
              >
                {/* Photo */}
                <div className="relative w-full aspect-square overflow-hidden bg-[var(--navy)]/5 border border-[var(--line)]">
                  <Image
                    src={guest.image}
                    alt={`Photo of ${guest.name}`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                    className="object-cover object-top"
                  />
                </div>
                {/* Name */}
                <div>
                  <p className="text-xs font-semibold text-[var(--navy)] leading-snug">
                    {guest.name}
                  </p>
                  {guest.aka && (
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-[var(--crimson)]/70 font-medium">
                      {guest.aka}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* "And more" placeholder tile */}
            <div className="guest-card opacity-0 translate-y-4 flex flex-col items-center text-center gap-3">
              <div className="relative w-full aspect-square bg-[var(--navy)]/5 border border-dashed border-[var(--line)] flex items-center justify-center">
                <span className="text-2xl font-semibold text-[var(--navy)]/20">
                  +
                </span>
              </div>
              <p className="text-xs text-[var(--ink)]/35 italic leading-snug">
                And many more across eight editions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Venue ────────────────────────────────────────────────────────── */}
      <section
        ref={venueSectionRef}
        className="py-24 sm:py-28 border-b border-[var(--line)]"
      >
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-[var(--line)] divide-y lg:divide-y-0 lg:divide-x divide-[var(--line)]">
            {/* Venue image */}
            <div className="relative aspect-[4/3] lg:aspect-auto min-h-64 bg-[var(--navy)]/5 overflow-hidden">
              <Image
                src="/images/listen/listen-hero1.webp"
                alt="Buba Marwa Auditorium, LASU Ojo"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Wipe-reveal panel — same technique as AboutPreview */}
              <div
                ref={venuePanelRef}
                className="absolute inset-0 z-10"
                style={{ background: "var(--navy)" }}
              />
            </div>

            {/* Venue details — single combined reveal, like the Mission/Vision panels */}
            <AnimatedContent
              direction="horizontal"
              distance={60}
              duration={0.8}
              ease="power3.out"
              delay={0.15}
              threshold={0.15}
              className="bg-white p-10 lg:p-14 flex flex-col justify-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
                Venue
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-medium text-[var(--navy)] leading-snug">
                Buba Marwa Auditorium
              </h2>
              <p className="mt-1 text-sm text-[var(--ink)]/50 font-medium">
                Lagos State University, Ojo Campus
              </p>
              <p className="mt-6 text-[var(--ink)]/65 leading-relaxed">
                Since its early editions, LISTEN has found its home at the Buba
                Marwa Auditorium on the LASU Ojo campus — a venue large enough
                to hold the stories, and the audience who needs to hear them.
              </p>
              <p className="mt-4 text-[var(--ink)]/65 leading-relaxed">
                Each edition of LISTEN draws a large and diverse audience to
                this space, creating a communal experience of emotional
                resonance and reflection that spills out long after the final
                speaker leaves the stage.
              </p>
              <div className="mt-8 pt-8 border-t border-[var(--line)]">
                <p className="text-xs text-[var(--ink)]/35 uppercase tracking-wider font-medium">
                  Address
                </p>
                <p className="mt-1 text-sm text-[var(--navy)] font-medium">
                  Lagos State University, Ojo, Lagos State, Nigeria
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <div className="section-shell">
          <div className="border border-(--line) bg-white p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--crimson)">
                Stay connected
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-[var(--navy)] max-w-lg leading-snug">
                Be the first to know when the next edition is announced.
              </h2>
              <p className="mt-3 text-(--ink)/60 max-w-md">
                Follow LSUDS on social media or reach out directly to find out
                about upcoming LISTEN editions, speaker calls, and ticket
                information.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://www.instagram.com/lasudebates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--navy)] text-white text-sm font-semibold hover:bg-[var(--navy)]/90 transition-colors"
              >
                Follow on Instagram
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href="mailto:lasu.debatesociety@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--line)] text-[var(--navy)] text-sm font-semibold hover:border-[var(--navy)]/40 transition-colors"
              >
                Send us a message
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
