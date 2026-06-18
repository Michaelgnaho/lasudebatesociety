"use client";

import { useState } from "react";
import {
  MdMail,
  MdLocationPin,
  MdOutlineCheckCircle,
  MdSend,
} from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";

// ─── Data ─────────────────────────────────────────────────────────────────────

const socials = [
  {
    icon: FaInstagram,
    label: "Instagram",
    handle: "@lasudebates",
    href: "https://www.instagram.com/lasudebates",
    description: "Events, updates & behind-the-scenes",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "lasudebates",
    href: "https://www.linkedin.com/company/lasudebates",
    description: "Professional updates & member achievements",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    handle: "@lasudebatesociety",
    href: "https://www.youtube.com/@lasudebatesociety",
    description: "Recordings of LISTEN, Word War & more",
  },
  {
    icon: IoBookOutline,
    label: "Blog",
    handle: "lasudebatesociety.blogspot.com",
    href: "https://lasudebatesociety.blogspot.com",
    description: "Articles on public speaking & leadership",
  },
];

const reasons = [
  { label: "General enquiry" },
  { label: "LISTEN — speaking opportunity" },
  { label: "Word War — participation" },
  { label: "Partnership / sponsorship" },
  { label: "Media & press" },
  { label: "Other" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [reason, setReason] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // Wire up to your preferred form handler (Formspree, Resend, etc.)
    setSubmitted(true);
  }

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[var(--line)]">
        <div className="section-shell">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
            Contact us
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-medium text-[var(--navy)] max-w-3xl leading-[1.1]">
            We would love to{" "}
            <span className="italic gradient-text">hear from you.</span>
          </h1>
          <p className="mt-6 text-[var(--ink)]/60 max-w-xl text-lg leading-relaxed">
            Whether you want to speak at LISTEN, compete in Word War, partner
            with us, or simply learn more about LSUDS — reach out. A voice is
            always welcome here.
          </p>
        </div>
      </section>

      {/* ── Main: Form + Details ─────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)]">
        <div className="section-shell">
          <div className="grid grid-cols-1 lg:grid-cols-5 border border-[var(--line)] divide-y lg:divide-y-0 lg:divide-x divide-[var(--line)]">
            {/* ── Contact form (3 cols) ─────────────────────────────────── */}
            <div className="lg:col-span-3 bg-white p-8 sm:p-12">
              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-start gap-5 py-12">
                  <MdOutlineCheckCircle className="h-12 w-12 text-[var(--crimson)]" />
                  <h2 className="text-2xl font-medium text-[var(--navy)]">
                    Message received.
                  </h2>
                  <p className="text-[var(--ink)]/60 leading-relaxed max-w-sm">
                    Thank you for reaching out. A member of the LSUDS team will
                    get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", message: "" });
                      setReason("");
                    }}
                    className="mt-4 text-sm font-semibold text-[var(--navy)] underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-medium text-[var(--navy)]">
                    Send us a message
                  </h2>
                  <p className="mt-2 text-sm text-[var(--ink)]/55">
                    Fill out the form and we'll be in touch shortly.
                  </p>

                  <div className="mt-8 flex flex-col gap-5">
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink)]/50">
                          Full name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="border border-[var(--line)] bg-transparent px-4 py-3 text-sm text-[var(--navy)] placeholder:text-[var(--ink)]/30 focus:outline-none focus:border-[var(--navy)] transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink)]/50">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="border border-[var(--line)] bg-transparent px-4 py-3 text-sm text-[var(--navy)] placeholder:text-[var(--ink)]/30 focus:outline-none focus:border-[var(--navy)] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Reason */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink)]/50">
                        Reason for reaching out
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {reasons.map((r) => (
                          <button
                            key={r.label}
                            type="button"
                            onClick={() => setReason(r.label)}
                            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                              reason === r.label
                                ? "bg-[var(--navy)] text-white border-[var(--navy)]"
                                : "border-[var(--line)] text-[var(--ink)]/50 hover:border-[var(--navy)]/40 hover:text-[var(--navy)]"
                            }`}
                          >
                            {r.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink)]/50">
                        Your message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us what's on your mind…"
                        className="border border-[var(--line)] bg-transparent px-4 py-3 text-sm text-[var(--navy)] placeholder:text-[var(--ink)]/30 focus:outline-none focus:border-[var(--navy)] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      className="mt-1 inline-flex items-center justify-center gap-2 bg-[var(--navy)] px-8 py-4 text-sm font-semibold text-white hover:bg-[var(--navy)]/90 transition-colors w-full sm:w-fit"
                    >
                      Send message
                      <MdSend className="h-4 w-4" />
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* ── Contact details (2 cols) ──────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col divide-y divide-[var(--line)]">
              {/* Email */}
              <div className="bg-[var(--navy)] p-8 sm:p-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <MdMail className="h-5 w-5 text-[var(--sky)]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sky)]">
                    Email us
                  </p>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  For enquiries, partnerships, speaker applications, or anything
                  else — our inbox is always open.
                </p>
                <a
                  href="mailto:lasu.debatesociety@gmail.com"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm group w-fit mt-1"
                >
                  lasu.debatesociety@gmail.com
                  <FiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Address */}
              <div className="bg-white p-8 sm:p-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <MdLocationPin className="h-5 w-5 text-[var(--crimson)]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
                    Find us
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--navy)]">
                    Lagos State University
                  </p>
                  <p className="text-sm text-[var(--ink)]/55 mt-0.5 leading-relaxed">
                    Ojo Campus, Ojo,
                    <br />
                    Lagos State, Nigeria
                  </p>
                </div>
                <p className="text-xs text-[var(--ink)]/40 leading-relaxed">
                  LSUDS is the official public speaking society of LASU. We
                  operate on campus — come find us.
                </p>
              </div>

              {/* Response time */}
              <div className="bg-[var(--sky-faint)] p-8 sm:p-10 flex-1 flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink)]/40">
                  Response time
                </p>
                <p className="text-2xl font-semibold text-[var(--navy)]">
                  Within 48 hrs
                </p>
                <p className="text-sm text-[var(--ink)]/55 leading-relaxed">
                  We aim to respond to all messages within two business days.
                  For urgent matters, reaching out via Instagram DM is often
                  faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Platforms ─────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--navy)] max-w-xl">
              Follow the{" "}
              <span className="italic gradient-text">conversation.</span>
            </h2>
            <p className="text-[var(--ink)]/60 max-w-sm">
              Stay close to what LSUDS is doing — events, members, stories, and
              everything in between.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)]"
            style={{ borderColor: "var(--line)" }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-8 flex flex-col gap-5 hover:bg-[var(--navy)] transition-colors duration-300"
              >
                <s.icon className="h-6 w-6 text-[var(--crimson)] group-hover:text-[var(--sky)] transition-colors" />
                <div>
                  <p className="font-semibold text-[var(--navy)] group-hover:text-white transition-colors">
                    {s.label}
                  </p>
                  <p className="mt-0.5 text-xs font-mono text-[var(--ink)]/40 group-hover:text-white/40 transition-colors">
                    {s.handle}
                  </p>
                </div>
                <p className="text-sm text-[var(--ink)]/55 leading-relaxed group-hover:text-white/55 transition-colors flex-1">
                  {s.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--navy)] group-hover:text-white transition-colors">
                  Visit
                  <FiArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ strip ────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--navy)] max-w-xl">
              Common <span className="italic gradient-text">questions.</span>
            </h2>
            <p className="text-[var(--ink)]/60 max-w-sm">
              Quick answers before you reach out.
            </p>
          </div>

          <div className="border border-[var(--line)] divide-y divide-[var(--line)]">
            {[
              {
                q: "How do I become a member of LSUDS?",
                a: "LSUDS is open to all Lagos State University students, regardless of faculty or level. Membership is open at the start of each semester — follow our Instagram (@lasudebates) or send us an email to find out when the next intake opens.",
              },
              {
                q: "How can I apply to speak at LISTEN?",
                a: "Speaker applications open ahead of each edition and are announced on our social media platforms. You can also send an expression of interest to lasu.debatesociety@gmail.com and we will notify you when the call for speakers opens.",
              },
              {
                q: "Can non-LASU students attend LISTEN?",
                a: "Absolutely. LISTEN is open to the public. Tickets and attendance details are announced on our Instagram page ahead of each edition.",
              },
              {
                q: "How does a Call-Out work?",
                a: "Any orator can publicly challenge another to a face-off in debate, storytelling, speech, or poetry. Challenges are issued publicly — on campus or via our platforms — and the format, topic, and venue are agreed upon between the two parties.",
              },
              {
                q: "Are there partnership or sponsorship opportunities?",
                a: "Yes. LSUDS welcomes partnerships with brands, organisations, and individuals who share our values around communication, education, and leadership. Reach out to us at lasu.debatesociety@gmail.com with the subject line 'Partnership Enquiry'.",
              },
            ].map((item) => (
              <details key={item.q} className="group bg-white">
                <summary className="flex cursor-pointer items-center justify-between gap-6 px-8 py-6 list-none group-hover:bg-[var(--navy)]/[0.02] transition-colors">
                  <p className="font-medium text-[var(--navy)] text-sm sm:text-base">
                    {item.q}
                  </p>
                  <svg
                    className="h-4 w-4 text-[var(--ink)]/30 shrink-0 group-open:text-[var(--crimson)] transition-all group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-8 pb-7 pt-1 border-t border-[var(--line)]">
                  <p className="text-sm text-[var(--ink)]/65 leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
