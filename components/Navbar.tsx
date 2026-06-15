"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

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
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="gradient-divider" />
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full gradient-icon-bg text-sm font-semibold font-heading text-white shadow-md shadow-navy/20 transition-transform group-hover:scale-105">
            LDS
          </span>
          <span className="font-heading leading-tight">
            <span className="block text-lg font-bold tracking-tight text-crimson">
              LASU
            </span>
            <span className="-mt-0.5 block text-xs font-semibold uppercase tracking-[0.2em] text-navy">
              Debate Society
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold tracking-wide transition-colors ${
                  active ? "text-crimson" : "text-navy-deep/70 hover:text-navy"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full gradient-icon-bg" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/join-us"
            className="hidden items-center gap-2 rounded-full bg-crimson px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-crimson/25 transition hover:bg-crimson-deep hover:shadow-crimson/40 sm:inline-flex"
          >
            Join Us
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-navy/5 bg-white px-6 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${
                  pathname === link.href
                    ? "bg-sky-faint text-crimson"
                    : "text-navy-deep/80 hover:bg-sky-faint"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join-us"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-crimson/25"
            >
              Join Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
