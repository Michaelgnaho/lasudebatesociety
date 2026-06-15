"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiArrowRight, HiBars3, HiXMark } from "react-icons/hi2";
import { RiMicFill } from "react-icons/ri";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/listen", label: "LISTEN" },
  { href: "/word-war", label: "Word War" },
  { href: "/leadership", label: "Leadership" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      {/* Gradient top border */}
      <div
        className="h-[2px] w-full"
        style={{ background: "var(--grad-divider)" }}
      />

      {/* Main bar */}
      <div
        className="w-full"
        style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(26,50,99,0.08)",
        }}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* ── LOGO ── */}
          <Link href="/" className="group flex items-center gap-3 no-underline">
            {/* Icon circle */}
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 transition-transform group-hover:scale-105"
              style={{
                background: "var(--grad-icon)",
                boxShadow: "0 4px 14px rgba(26,50,99,0.25)",
              }}
            >
              <RiMicFill className="text-white" size={16} />
            </div>

            {/* Wordmark */}
            <div className="leading-tight">
              <span
                className="block text-lg font-bold tracking-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--crimson)",
                  lineHeight: 1.1,
                }}
              >
                LASU
              </span>
              <span
                className="block text-[0.6rem] font-semibold uppercase tracking-[0.22em]"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--navy)",
                  marginTop: "1px",
                }}
              >
                Debate Society
              </span>
            </div>
          </Link>

          {/* ── DESKTOP LINKS ── */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative no-underline"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    color: active ? "var(--crimson)" : "rgba(14,30,61,0.65)",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-[22px] left-0 right-0 h-[2px] rounded-full"
                      style={{ background: "var(--grad-divider)" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── RIGHT: CTA + HAMBURGER ── */}
          <div className="flex items-center gap-3">
            {/* Join Us — desktop */}
            <Link
              href="/join-us"
              className="hidden sm:inline-flex items-center gap-2 no-underline rounded-full text-white text-sm font-semibold"
              style={{
                fontFamily: "var(--font-body)",
                background: "var(--crimson)",
                padding: "0.55rem 1.3rem",
                letterSpacing: "0.04em",
                boxShadow: "0 4px 16px rgba(200,16,46,0.28)",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "var(--crimson-deep)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "var(--crimson)";
              }}
            >
              Join Us
              <HiArrowRight size={14} />
            </Link>

            {/* Hamburger — mobile */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border"
              style={{
                borderColor: "rgba(26,50,99,0.12)",
                color: "var(--navy)",
                background: "transparent",
                cursor: "pointer",
              }}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <HiXMark size={20} /> : <HiBars3 size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* ── MOBILE MENU ── */}
      {open && (
        <div
          className="lg:hidden px-5 pb-6 pt-3"
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(26,50,99,0.08)",
          }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 no-underline text-sm font-semibold"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: active ? "var(--crimson)" : "rgba(14,30,61,0.75)",
                    background: active ? "var(--sky-faint)" : "transparent",
                    letterSpacing: "0.02em",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Join Us */}
            <Link
              href="/join-us"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full text-white text-sm font-semibold no-underline"
              style={{
                fontFamily: "var(--font-body)",
                background: "var(--crimson)",
                padding: "0.85rem 1.5rem",
                letterSpacing: "0.04em",
                boxShadow: "0 4px 16px rgba(200,16,46,0.28)",
              }}
            >
              Join Us
              <HiArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
