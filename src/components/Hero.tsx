"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { FaMicrophoneAlt, FaArrowRight, FaPlay } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import Link from "next/link";

const slides = [
  {
    id: 1,
    edition: "LISTEN VIII — MOMENTUM",
    date: "29 April 2026",
    tag: "Latest Edition",
    bg: "linear-gradient(135deg, #0e1e3d 0%, #1a3263 50%, #0e1e3d 100%)",
    accent: "#6fa8dc",
    img: "/images/Eleso-Moyosoreoluwa.webp",
  },
  {
    id: 2,
    edition: "LISTEN VII — ZENITH",
    date: "25 June 2025",
    tag: "Previous Edition",
    bg: "linear-gradient(135deg, #1a0a0f 0%, #8f0a1f 45%, #1a3263 100%)",
    accent: "#c8102e",
    img: "/images/Hezekiah-Tiamiyu.webp",
  },
  {
    id: 3,
    edition: "LISTEN V — RESILIENCE",
    date: "18 October 2024",
    tag: "Word War Finals",
    bg: "linear-gradient(135deg, #050d1a 0%, #0e1e3d 40%, #14294d 100%)",
    accent: "#4a8fc7",
    img: "/images/Oluwafemi-Akanmu.webp",
  },
  {
    id: 4,
    edition: "Word War",
    date: "Internal Competition",
    tag: "The Proving Ground",
    bg: "linear-gradient(135deg, #14090c 0%, #3d1020 50%, #1a3263 100%)",
    accent: "#c8102e",
    img: "/images/Boluwatife-Kolawole.webp",
  },
  {
    id: 5,
    edition: "LISTEN VI — EMERGENCE",
    date: "10 July 2025",
    tag: "Past Edition",
    bg: "linear-gradient(135deg, #060e20 0%, #1a3263 55%, #4a8fc7 100%)",
    accent: "#6fa8dc",
    img: "/images/Titilope-Ibrahim.webp",
  },
  {
    id: 6,
    edition: "LISTEN VI — EMERGENCE",
    date: "10 July 2025",
    tag: "Past Edition",
    bg: "linear-gradient(135deg, #060e20 0%, #1a3263 55%, #4a8fc7 100%)",
    accent: "#6fa8dc",
    img: "/images/Oladunni-Akinsanmi .webp",
  },
  {
    id: 7,
    edition: "LISTEN VI — EMERGENCE",
    date: "10 July 2025",
    tag: "Past Edition",
    bg: "linear-gradient(135deg, #060e20 0%, #1a3263 55%, #4a8fc7 100%)",
    accent: "#6fa8dc",
    img: "/images/Seide-Agosu.webp",
  },
  {
    id: 8,
    edition: "LISTEN VI — EMERGENCE",
    date: "10 July 2025",
    tag: "Past Edition",
    bg: "linear-gradient(135deg, #060e20 0%, #1a3263 55%, #4a8fc7 100%)",
    accent: "#6fa8dc",
    img: "/images/Aina-Ayomide.webp",
  },
  {
    id: 9,
    edition: "LISTEN VI — EMERGENCE",
    date: "10 July 2025",
    tag: "Past Edition",
    bg: "linear-gradient(135deg, #060e20 0%, #1a3263 55%, #4a8fc7 100%)",
    accent: "#6fa8dc",
    img: "/images/miracle.webp",
  },
  {
    id: 10,
    edition: "LISTEN VI — EMERGENCE",
    date: "10 July 2025",
    tag: "Past Edition",
    bg: "linear-gradient(135deg, #060e20 0%, #1a3263 55%, #4a8fc7 100%)",
    accent: "#6fa8dc",
    img: "/images/Sherifat-Umar.webp",
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* ─── BACKGROUND CAROUSEL ──────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".hero-pagination",
            bulletClass: "hero-bullet",
            bulletActiveClass: "hero-bullet-active",
          }}
          loop
          speed={1200}
          className="h-full w-full"
          aria-hidden="true"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative h-full w-full"
                style={{ background: slide.bg }}
              >
                {/* Full-bleed photo */}
                {slide.img && (
                  <Image
                    src={slide.img}
                    alt={slide.edition}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                    priority={slide.id === 1}
                  />
                )}

                {/* Grain texture overlay */}
                <div
                  className="absolute inset-0 z-10 opacity-[0.035]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundSize: "128px 128px",
                  }}
                />

                {/* Slide content badge — bottom-right */}
                <div className="absolute bottom-10 right-8 sm:right-12 z-10 flex flex-col items-end gap-1">
                  <span
                    className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase"
                    style={{ color: slide.accent }}
                  >
                    {slide.tag}
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-white/50 tracking-[0.2em]">
                    {slide.date}
                  </span>
                  <span className="mt-1 text-white/25 text-xs italic">
                    {slide.edition}
                  </span>
                </div>

                {/* Side accent bar */}
                <div
                  className="absolute left-0 top-0 z-10 h-full w-1"
                  style={{
                    background: `linear-gradient(to bottom, transparent, ${slide.accent}, transparent)`,
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Multi-layer overlay — ensures text legibility over any slide */}
        <div className="absolute inset-0 bg-[#050d1a]/60 z-10" />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(5,13,26,0.85) 0%, rgba(5,13,26,0.5) 60%, rgba(5,13,26,0.2) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(5,13,26,0.95) 0%, transparent 45%)",
          }}
        />
      </div>

      {/* ─── FOREGROUND CONTENT ───────────────────────────── */}
      <div className="relative z-20 flex min-h-screen flex-col">
        {/* Top bar */}
        <div className="section-shell flex items-center justify-between pt-7 sm:pt-9">
          <div className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full"
              style={{ background: "var(--grad-icon)" }}
            >
              <FaMicrophoneAlt className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-white/40">
                Official Public Speaking Society
              </span>
              <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/90">
                Lagos State University
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7">
            {["About", "LISTEN", "Word War", "Join"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/55 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Main copy — centred vertically */}
        <div className="section-shell flex flex-1 flex-col items-center justify-center py-16 sm:py-24 max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-[var(--sky)]" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-[var(--sky)]">
              Est. 2018 · Multi-Award Winning
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-white leading-[1.0] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="block text-[clamp(2.6rem,8vw,5.5rem)] font-medium">
              LASU Debate Society
            </span>
          </h1>

          {/* Subheading */}
          <div className="mt-5 sm:mt-6 flex items-baseline gap-3">
            <span
              className="h-px w-8 shrink-0"
              style={{ background: "var(--crimson)" }}
            />
            <p
              className="italic text-[clamp(1.4rem,3.5vw,2.8rem)] font-medium leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                background: "var(--grad-text)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              &ldquo;Valour in Speech&rdquo;
            </p>
          </div>

          {/* Body copy */}
          <p className="mt-7 max-w-lg text-base sm:text-lg text-white/60 leading-relaxed">
            Raising communicators, storytellers, debaters, and leaders who shape
            conversations and transform communities at Lagos State University
            and beyond.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
              style={{
                background: "var(--crimson)",
                boxShadow: "0 10px 32px -8px rgba(200,16,46,0.55)",
              }}
            >
              Join LSUDS
              <FaArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="/listen"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <FaPlay className="h-3 w-3" />
              Explore LISTEN
            </Link>
          </div>
        </div>

        {/* ─── BOTTOM STRIP ─────────────────────────────── */}
        <div className="section-shell flex items-end justify-between pb-9 sm:pb-11 gap-6">
          <div className="hero-pagination flex items-center gap-2" />

          <div className="hidden sm:flex items-center gap-5">
            <div className="text-right">
              <div
                className="text-2xl font-medium tabular-nums"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "var(--grad-stat-num)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                VIII
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mt-0.5">
                LISTEN Editions
              </div>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div className="text-right">
              <div
                className="text-2xl font-medium tabular-nums"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "var(--grad-stat-num)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                500+
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 mt-0.5">
                Members Trained
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/35">
              Scroll
            </span>
            <HiChevronDown className="h-4 w-4 text-white/35" />
          </div>
        </div>
      </div>

      {/* ─── BULLET STYLES ───────────────────────────────── */}
      <style>{`
        .hero-bullet {
          display: inline-block;
          width: 24px;
          height: 2px;
          background: rgba(255,255,255,0.25);
          border-radius: 2px;
          cursor: pointer;
        }
        .hero-bullet-active {
          width: 44px;
          background: #c8102e;
        }
      `}</style>
    </section>
  );
}
