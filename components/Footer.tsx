import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaRss,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const exploreLinks = [
  { href: "/about", label: "About Us" },
  { href: "/listen", label: "LISTEN" },
  { href: "/word-war", label: "Word War" },
  { href: "/leadership", label: "Leadership" },
  { href: "/gallery", label: "Gallery" },
];

const resourceLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/join-us", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    href: "https://instagram.com/lasudebates",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://youtube.com/@lasudebatesociety",
    icon: FaYoutube,
    label: "YouTube",
  },
  {
    href: "https://linkedin.com/company/lasudebates",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://lasudebatesociety.blogspot.com",
    icon: FaRss,
    label: "Blog",
  },
];

export default function Footer() {
  return (
    <div className="relative bg-navy-deep text-sky-faint">
      <div className="gradient-divider" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full gradient-icon-bg text-sm font-semibold font-heading text-white">
                LDS
              </span>
              <span className="font-heading leading-tight">
                <span className="block text-lg font-bold text-white">LASU</span>
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-sky">
                  Debate Society
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sky-faint/70">
              Raising Lagos State University&apos;s finest voices through
              training, competition, and Africa&apos;s biggest storytelling
              stage.
            </p>
            <p className="mt-4 font-heading text-sm italic text-sky">
              &ldquo;Valour in Speech&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-sky transition hover:gradient-icon-bg hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sky-faint/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Resources
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sky-faint/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-sky">
              Stay in the Loop
            </h3>
            <p className="mt-5 text-sm text-sky-faint/70">
              Get news on LISTEN, Word War, and upcoming events.
            </p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-full bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-sky-faint/40 outline-none ring-1 ring-white/10 focus:ring-sky"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full gradient-icon-bg text-white transition hover:opacity-90"
              >
                <FaArrowRight className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-6 space-y-2 text-sm text-sky-faint/70">
              <p className="flex items-center gap-2">
                <FaEnvelope className="h-4 w-4 text-sky" />
                lasu.debatesociety@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="h-4 w-4 text-sky" />
                LASU Ojo Campus, Lagos
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-sky-faint/50">
            © {new Date().getFullYear()} LASU Debate Society. All rights
            reserved.
          </p>
          <p className="text-xs text-sky-faint/50">
            Built with valour, for the voices of tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
}
