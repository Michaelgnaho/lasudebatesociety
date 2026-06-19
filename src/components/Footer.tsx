import Link from "next/link";
import {
  RiInstagramLine,
  RiYoutubeLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiMapPinLine,
  RiArrowRightLine,
  RiInformationLine,
  RiHeadphoneLine,
  RiSwordLine,
  RiTeamLine,
  RiGalleryLine,
  RiArticleLine,
  RiUserAddLine,
  RiPhoneLine,
  RiHomeLine,
} from "react-icons/ri";
import { RiRssLine } from "react-icons/ri";
import Image from "next/image";

const exploreLinks = [
  { href: "/", label: "Home", Icon: RiHomeLine },
  { href: "/about", label: "About Us", Icon: RiInformationLine },
  { href: "/listen", label: "LISTEN", Icon: RiHeadphoneLine },
  { href: "/programs", label: "Programs", Icon: RiSwordLine },
  { href: "/achievevments", label: "Achievments", Icon: RiTeamLine },
];

const resourceLinks = [
  { href: "/contact", label: "Contact", Icon: RiPhoneLine },
];

const socials = [
  {
    href: "https://instagram.com/lasudebates",
    Icon: RiInstagramLine,
    label: "Instagram",
  },
  {
    href: "https://youtube.com/@lasudebatesociety",
    Icon: RiYoutubeLine,
    label: "YouTube",
  },
  {
    href: "https://linkedin.com/company/lasudebates",
    Icon: RiLinkedinBoxLine,
    label: "LinkedIn",
  },
  {
    href: "https://lasudebatesociety.blogspot.com",
    Icon: RiRssLine,
    label: "Blog",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative text-white"
      style={{ background: "var(--navy-deep)" }}
    >
      {/* Top gradient rule — mirrors the navbar top border */}
      <div
        className="h-[2px] w-full"
        style={{ background: "var(--grad-divider)" }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* ── BRAND ── */}
          <div>
            <Link href="/" className="flex ">
              <div className="relative h-12 w-26">
                <Image
                  src="/images/logo.webp"
                  alt="LSUDS logo"
                  height={100}
                  width={120}
                  className=""
                />
              </div>
            </Link>

            <p
              className="mt-5 max-w-xs text-sm leading-relaxed"
              style={{
                color: "rgba(243,249,254,0.60)",
                fontFamily: "var(--font-body)",
              }}
            >
              Raising Lagos State University&apos;s finest voices through
              training, competition, and Africa&apos;s biggest storytelling
              stage.
            </p>

            <p
              className="mt-4 text-sm italic"
              style={{ fontFamily: "var(--font-heading)", color: "var(--sky)" }}
            >
              &ldquo;Valour in Speech&rdquo;
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Icon size={16} style={{ color: "var(--sky)" }} />
                </a>
              ))}
            </div>
          </div>

          {/* ── EXPLORE ── */}
          <div>
            <h3
              className="text-[0.7rem] font-semibold uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-body)", color: "var(--sky)" }}
            >
              Explore
            </h3>
            <ul className="mt-5 space-y-1">
              {exploreLinks.map(({ href, label, Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2.5 rounded-lg px-2 py-2 no-underline text-sm"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(243,249,254,0.60)",
                    }}
                  >
                    <Icon
                      size={14}
                      style={{ color: "var(--sky-mid)", flexShrink: 0 }}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RESOURCES ── */}
          <div>
            <h3
              className="text-[0.7rem] font-semibold uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-body)", color: "var(--sky)" }}
            >
              Resources
            </h3>
            <ul className="mt-5 space-y-1">
              {resourceLinks.map(({ href, label, Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2.5 rounded-lg px-2 py-2 no-underline text-sm"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(243,249,254,0.60)",
                    }}
                  >
                    <Icon
                      size={14}
                      style={{ color: "var(--sky-mid)", flexShrink: 0 }}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── NEWSLETTER + CONTACT ── */}
          <div>
            <h3
              className="text-[0.7rem] font-semibold uppercase tracking-[0.28em]"
              style={{ fontFamily: "var(--font-body)", color: "var(--sky)" }}
            >
              Stay in the Loop
            </h3>
            <p
              className="mt-5 text-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(243,249,254,0.60)",
              }}
            >
              Get news on LISTEN, Word War, and upcoming events.
            </p>

            {/* Email input row */}
            <div className="mt-4 flex items-center gap-2">
              <div
                className="flex flex-1 items-center gap-2 rounded-full px-4 py-2.5"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <RiMailLine
                  size={14}
                  style={{ color: "var(--sky-mid)", flexShrink: 0 }}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent text-sm text-white placeholder-white/30 outline-none"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: "var(--crimson)",
                  boxShadow: "0 4px 14px rgba(200,16,46,0.4)",
                }}
              >
                <RiArrowRightLine size={16} className="text-white" />
              </button>
            </div>

            {/* Contact details */}
            <div className="mt-6 space-y-3">
              <p
                className="flex items-center gap-2.5 text-sm"
                style={{
                  color: "rgba(243,249,254,0.60)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <RiMailLine
                  size={15}
                  style={{ color: "var(--sky)", flexShrink: 0 }}
                />
                lasu.debatesociety@gmail.com
              </p>
              <p
                className="flex items-center gap-2.5 text-sm"
                style={{
                  color: "rgba(243,249,254,0.60)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <RiMapPinLine
                  size={15}
                  style={{ color: "var(--sky)", flexShrink: 0 }}
                />
                LASU Ojo Campus, Lagos
              </p>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div
          className="mt-14 flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-xs"
            style={{
              color: "rgba(243,249,254,0.35)",
              fontFamily: "var(--font-body)",
            }}
          >
            © {new Date().getFullYear()} LASU Debate Society. All rights
            reserved.
          </p>
          <p
            className="text-xs italic"
            style={{
              color: "rgba(243,249,254,0.35)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Built with valour, for the voices of tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
