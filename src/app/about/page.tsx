"use client";

import Image from "next/image";
import {
  BookOpen,
  Eye,
  Flame,
  Globe,
  Heart,
  Shield,
  Users,
  Zap,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Executive {
  name: string;
  role: string;
  image: string; // path relative to /public, e.g. "/team/admin-1/hezekiah-tiamiyu.jpg"
}

interface Administration {
  term: string;
  president: string;
  note: string;
  executives: Executive[];
  isCurrent?: boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const milestones = [
  {
    year: "2018",
    event: "Society founded at LASU Ojo by fourteen pioneering members.",
  },
  {
    year: "2019",
    event:
      "LISTEN Edition I (SEED) launches — the event that would become Africa's biggest storytelling platform.",
  },
  {
    year: "2021",
    event: "LISTEN Edition II (VISION) held under President Oluwafemi Akanmu.",
  },
  {
    year: "2022",
    event:
      "LISTEN Edition III (VOYAGE) marks the society's national footprint under President Oladunni Akinsanmi.",
  },
  {
    year: "2023",
    event:
      "LISTEN Edition IV (ADVENTURE) and Word War IV deepen the society's training pipeline.",
  },
  {
    year: "2024",
    event:
      "LISTEN Edition V (RESILIENCE) widely described as an outstanding edition under President Boluwatife Kolawole.",
  },
  {
    year: "2025",
    event:
      "LISTEN Editions VI (EMERGENCE) & VII (ZENITH) — two editions in one year, signalling rapid growth.",
  },
  {
    year: "2026",
    event:
      "LISTEN Edition VIII (MOMENTUM) held April 2026 under current President Asikaburu Miracle Ezinne.",
  },
];

const coreValues = [
  {
    icon: Zap,
    title: "Excellence",
    copy: "LSUDS holds itself to the highest standards in public speaking, competition, and community representation — consistently leading as the foremost oratory society at LASU.",
  },
  {
    icon: Flame,
    title: "Impact",
    copy: "Every event, training, and competition is designed to create measurable change in the lives of members and the broader audience they serve.",
  },
  {
    icon: Globe,
    title: "Leadership",
    copy: "Beyond oratory, LSUDS is committed to raising human leaders — individuals who can inspire, guide, and serve their communities long after graduation.",
  },
  {
    icon: Shield,
    title: "Integrity",
    copy: "Members are trained to ground their speaking in genuine knowledge, evidence, and authentic experience — fostering honest, credible communication.",
  },
  {
    icon: Heart,
    title: "Community",
    copy: "LSUDS is inclusive, collaborative, and welcoming of students across all faculties and backgrounds. The society is, at its core, a family.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    copy: "Through its events, training sessions, and publications, the society champions lifelong learning and the continuous refinement of voice and skill.",
  },
];

const administrations: Administration[] = [
  {
    term: "1st Administration · 2018",
    president: "Moyosoreoluwa Eleso",
    note: "Founder and first President. One of fourteen who laid the foundation of LSUDS, setting the tone for excellence that every administration has built upon.",
    executives: [
      {
        name: "Hezekiah Tiamiyu",
        role: "Vice President",
        image: "/team/admin-1/hezekiah-tiamiyu.jpg",
      },
      {
        name: "Faith Uzuegbu",
        role: "General Secretary",
        image: "/team/admin-1/faith-uzuegbu.jpg",
      },
      {
        name: "Ademola Ibrahim",
        role: "PR Expert",
        image: "/team/admin-1/ademola-ibrahim.jpg",
      },
      {
        name: "Timi Ojo",
        role: "Ex-Officio",
        image: "/team/admin-1/timi-ojo.jpg",
      },
    ],
  },
  {
    term: "2nd Administration · 2019",
    president: "Hezekiah Tiamiyu",
    note: "Presided over the inaugural Word War and the first edition of LISTEN (SEED) — the event that would grow into Africa's biggest storytelling platform.",
    executives: [
      {
        name: "Zainab Amusa",
        role: "Vice President",
        image: "/team/admin-2/zainab-amusa.jpg",
      },
      {
        name: "Tolulope Omogunle",
        role: "General Secretary",
        image: "/team/admin-2/tolulope-omogunle.jpg",
      },
      {
        name: "Temilade Olanrewaju",
        role: "Asst. Gen. Secretary",
        image: "/team/admin-2/temilade-olanrewaju.jpg",
      },
      {
        name: "Oluwafemi Akanmu",
        role: "PR Expert",
        image: "/team/admin-2/oluwafemi-akanmu.jpg",
      },
      {
        name: "Olawonuade Atofojomo",
        role: "Welfare Director",
        image: "/team/admin-2/olawonuade-atofojomo.jpg",
      },
      {
        name: "Janet Ayangbola",
        role: "Financial Secretary",
        image: "/team/admin-2/janet-ayangbola.jpg",
      },
      {
        name: "Moyosoreoluwa Eleso",
        role: "Ex-Officio",
        image: "/team/admin-2/moyosoreoluwa-eleso.jpg",
      },
    ],
  },
  {
    term: "3rd Administration · 2020–2021",
    president: "Oluwafemi Akanmu",
    note: "A prolific writer and public speaker who elevated LSUDS to new heights, presiding over LISTEN II (VISION) and Word War II.",
    executives: [
      {
        name: "Zainab Amusa",
        role: "Vice President",
        image: "/team/admin-3/zainab-amusa.jpg",
      },
      {
        name: "Shukroh Adeyemi",
        role: "General Secretary",
        image: "/team/admin-3/shukroh-adeyemi.jpg",
      },
      {
        name: "Fatima Abu",
        role: "Asst. Gen. Secretary",
        image: "/team/admin-3/fatima-abu.jpg",
      },
      {
        name: "Folayemi Sanusi",
        role: "PR Expert",
        image: "/team/admin-3/folayemi-sanusi.jpg",
      },
      {
        name: "Oladunni Akinsanmi",
        role: "Financial Secretary",
        image: "/team/admin-3/oladunni-akinsanmi.jpg",
      },
      {
        name: "Hezekiah Tiamyu",
        role: "Ex-Officio",
        image: "/team/admin-3/hezekiah-tiamyu.jpg",
      },
    ],
  },
  {
    term: "4th Administration · 2021–2022",
    president: "Oladunni Akinsanmi",
    note: "Continued the outstanding legacy of her predecessors, training many speakers and presiding over LISTEN III (VOYAGE) and Word War III.",
    executives: [
      {
        name: "Victory Ashaka",
        role: "Vice President",
        image: "/team/admin-4/victory-ashaka.jpg",
      },
      {
        name: "Titilope Ibrahim",
        role: "General Secretary",
        image: "/team/admin-4/titilope-ibrahim.jpg",
      },
      {
        name: "Akintunde Oluwatosin",
        role: "Asst. Gen. Secretary",
        image: "/team/admin-4/akintunde-oluwatosin.jpg",
      },
      {
        name: "Boluwatife Kolawole",
        role: "PR Expert",
        image: "/team/admin-4/boluwatife-kolawole.jpg",
      },
      {
        name: "Afonja Omotolani",
        role: "Welfare Director",
        image: "/team/admin-4/afonja-omotolani.jpg",
      },
      {
        name: "Oluwatade Peace",
        role: "Financial Secretary",
        image: "/team/admin-4/oluwatade-peace.jpg",
      },
      {
        name: "Zainab Amusa",
        role: "Ex-Officio",
        image: "/team/admin-4/zainab-amusa.jpg",
      },
    ],
  },
  {
    term: "5th Administration · 2022–2023",
    president: "Titilope Ibrahim",
    note: "Popularly known as The Global Titilope, she mentored many individuals and presided over LISTEN IV (ADVENTURE) and Word War IV.",
    executives: [
      {
        name: "Naomi Kadiri",
        role: "Vice President",
        image: "/team/admin-5/naomi-kadiri.jpg",
      },
      {
        name: "Al-Amin Ademola",
        role: "General Secretary",
        image: "/team/admin-5/al-amin-ademola.jpg",
      },
      {
        name: "Adenekan Obadare",
        role: "Asst. Gen. Secretary",
        image: "/team/admin-5/adenekan-obadare.jpg",
      },
      {
        name: "Erhuvwu'Oghene Akpomerha",
        role: "PR Expert",
        image: "/team/admin-5/erhuvwu-akpomerha.jpg",
      },
      {
        name: "Aderibigbe Firdaoz",
        role: "Welfare Director",
        image: "/team/admin-5/aderibigbe-firdaoz.jpg",
      },
      {
        name: "Adetola Fathia",
        role: "Financial Secretary",
        image: "/team/admin-5/adetola-fathia.jpg",
      },
      {
        name: "Victory Ashaka",
        role: "Ex-Officio",
        image: "/team/admin-5/victory-ashaka.jpg",
      },
    ],
  },
  {
    term: "6th Administration · 2023–2024",
    president: "Boluwatife Kolawole",
    note: "An adept compere, actor, writer and public speaker, Bolu coached emerging speakers and presided over LISTEN V (RESILIENCE), widely regarded as an outstanding edition.",
    executives: [
      {
        name: "Fathia Adetola",
        role: "Vice President",
        image: "/team/admin-6/fathia-adetola.jpg",
      },
      {
        name: "Seide Agosu",
        role: "General Secretary",
        image: "/team/admin-6/seide-agosu.jpg",
      },
      {
        name: "Ajeniya Abdulquadri",
        role: "Asst. Gen. Secretary",
        image: "/team/admin-6/ajeniya-abdulquadri.jpg",
      },
      {
        name: "Ogunlaja Oluwanifemisimi",
        role: "PR Expert",
        image: "/team/admin-6/ogunlaja-oluwanifemisimi.jpg",
      },
      {
        name: "Mafe Olatunji",
        role: "Welfare Director",
        image: "/team/admin-6/mafe-olatunji.jpg",
      },
      {
        name: "Ademoye Summaya",
        role: "Financial Secretary",
        image: "/team/admin-6/ademoye-summaya.jpg",
      },
      {
        name: "Titilope Ibrahim",
        role: "Ex-Officio",
        image: "/team/admin-6/titilope-ibrahim.jpg",
      },
    ],
  },
  {
    term: "7th Administration · 2024–2025",
    president: "Seide Agosu",
    note: "Presided over LISTEN VI (EMERGENCE), held at the Buba Marwa Auditorium, further establishing LSUDS as the premier storytelling society in Nigeria.",
    executives: [
      {
        name: "Mafe Olatunji",
        role: "Vice President",
        image: "/team/admin-7/mafe-olatunji.jpg",
      },
      {
        name: "Similoluwa Ifedayo",
        role: "General Secretary",
        image: "/team/admin-7/similoluwa-ifedayo.jpg",
      },
      {
        name: "Temitope Bakare",
        role: "Asst. Gen. Secretary",
        image: "/team/admin-7/temitope-bakare.jpg",
      },
      {
        name: "Temiloluwa Bolawole",
        role: "PR Expert",
        image: "/team/admin-7/temiloluwa-bolawole.jpg",
      },
      {
        name: "Zainab Ogunnowo",
        role: "Welfare Director",
        image: "/team/admin-7/zainab-ogunnowo.jpg",
      },
      {
        name: "Ayooluwatobi Fadare",
        role: "Financial Secretary",
        image: "/team/admin-7/ayooluwatobi-fadare.jpg",
      },
      {
        name: "Fathia Adetola",
        role: "Ex-Officio",
        image: "/team/admin-7/fathia-adetola.jpg",
      },
    ],
  },
  {
    term: "8th Administration",
    president: "Aina Ayomide",
    note: "Presided over LISTEN VII (ZENITH), continuing the upward trajectory of the society's flagship storytelling event.",
    executives: [
      {
        name: "Temitope Bakare",
        role: "Vice President",
        image: "/team/admin-8/temitope-bakare.jpg",
      },
      {
        name: "Kehinde Ajasa",
        role: "General Secretary",
        image: "/team/admin-8/kehinde-ajasa.jpg",
      },
      {
        name: "Adeleye Oladimeji",
        role: "Asst. Gen. Secretary",
        image: "/team/admin-8/adeleye-oladimeji.jpg",
      },
      {
        name: "Oladipupo Ramadan",
        role: "PR Expert",
        image: "/team/admin-8/oladipupo-ramadan.jpg",
      },
      {
        name: "Adewumi Osonoiki",
        role: "Welfare Director",
        image: "/team/admin-8/adewumi-osonoiki.jpg",
      },
      {
        name: "Asikaburu Miracle",
        role: "Financial Secretary",
        image: "/team/admin-8/asikaburu-miracle.jpg",
      },
      {
        name: "Ogunnowo Zainab",
        role: "Ex-Officio",
        image: "/team/admin-8/ogunnowo-zainab.jpg",
      },
    ],
  },
  {
    term: "9th Administration",
    president: "Asikaburu Miracle Ezinne",
    note: "Presided over LISTEN VIII (MOMENTUM) in April 2026, marking a new chapter of sustained momentum for LSUDS.",
    executives: [
      {
        name: "Atere Sarah",
        role: "Vice President",
        image: "/team/admin-9/atere-sarah.jpg",
      },
      {
        name: "Agosu Sewedo",
        role: "General Secretary",
        image: "/team/admin-9/agosu-sewedo.jpg",
      },
      {
        name: "Braimah Marvellous",
        role: "Asst. Gen. Secretary",
        image: "/team/admin-9/braimah-marvellous.jpg",
      },
      {
        name: "Sherifat Umar",
        role: "PR Expert",
        image: "/team/admin-9/sherifat-umar.jpg",
      },
      {
        name: "Gift Okhumode",
        role: "Welfare Director",
        image: "/team/admin-9/gift-okhumode.jpg",
      },
      {
        name: "Atere Mofiyinfoluwa",
        role: "Financial Secretary",
        image: "/team/admin-9/atere-mofiyinfoluwa.jpg",
      },
      {
        name: "Oladipupo Ramadan",
        role: "Ex-Officio",
        image: "/team/admin-9/oladipupo-ramadan.jpg",
      },
    ],
  },
  {
    term: "10th Administration · Present",
    president: "Sherifat Umar",
    note: "The current administration, continuing LSUDS's mission of excellence, impact, and leadership development at Lagos State University.",
    isCurrent: true,
    executives: [
      {
        name: "Diaso Gabriel Alexander",
        role: "Vice President",
        image: "/team/admin-10/diaso-gabriel.jpg",
      },
      {
        name: "Arowojobe Emmanuel Olawale",
        role: "General Secretary",
        image: "/team/admin-10/arowojobe-emmanuel.jpg",
      },
      {
        name: "Hamzat Kamilat Omotolani",
        role: "Asst. Gen. Secretary",
        image: "/team/admin-10/hamzat-kamilat.jpg",
      },
      {
        name: "Adeoso Samuel Omotayo",
        role: "PR Expert",
        image: "/team/admin-10/adeoso-samuel.jpg",
      },
      {
        name: "Oguntubo Daniella Boluwatife",
        role: "Welfare Director",
        image: "/team/admin-10/oguntubo-daniella.jpg",
      },
      {
        name: "Suru Christiana Ebi-Erin",
        role: "Financial Secretary",
        image: "/team/admin-10/suru-christiana.jpg",
      },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ExecutiveCard({ exec }: { exec: Executive }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      {/* Photo */}
      <div className="relative w-full aspect-square overflow-hidden bg-[var(--navy)]/5 border border-[var(--line)]">
        <Image
          src={exec.image}
          alt={`Photo of ${exec.name}`}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
          className="object-cover object-top"
        />
      </div>
      {/* Name & role */}
      <div>
        <p className="text-xs font-semibold text-[var(--navy)] leading-snug">
          {exec.name}
        </p>
        <p className="mt-0.5 text-[10px] uppercase tracking-wider text-[var(--crimson)]/80 font-medium">
          {exec.role}
        </p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 border-b border-[var(--line)]">
        <div className="section-shell">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
            About LSUDS
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-medium text-[var(--navy)] max-w-3xl leading-[1.1]">
            Built on{" "}
            <span className="italic gradient-text">valour in speech.</span>
          </h1>
          <p className="mt-6 text-[var(--ink)]/60 max-w-xl text-lg leading-relaxed">
            The Lagos State University Debate Society is the official public
            speaking society of LASU — a community committed to developing
            exceptional communicators, critical thinkers, and human leaders.
          </p>

          {/* Stat strip */}
          <div
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 border divide-x divide-[var(--line)]"
            style={{ borderColor: "var(--line)" }}
          >
            {[
              { value: "2018", label: "Year founded" },
              { value: "10", label: "Administrations" },
              { value: "VIII", label: "LISTEN editions" },
              { value: "∞", label: "Valour in Speech" },
            ].map((s) => (
              <div key={s.label} className="bg-white px-6 py-8">
                <p className="text-3xl font-semibold text-[var(--navy)]">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-[var(--ink)]/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founding Story ───────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:gap-20">
            {/* Left */}
            <div className="lg:w-5/12 shrink-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
                Our story
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-medium text-[var(--navy)] leading-snug">
                How it all <span className="italic gradient-text">began.</span>
              </h2>
              <p className="mt-6 text-[var(--ink)]/65 leading-relaxed">
                In 2018, fourteen students at Lagos State University, Ojo,
                gathered with a shared conviction: that excellence in
                communication is inseparable from excellence in leadership. From
                that belief, they built the Lagos State University Debate
                Society.
              </p>
              <p className="mt-4 text-[var(--ink)]/65 leading-relaxed">
                LSUDS was established as the official public speaking society of
                LASU — with a mandate to represent the institution at external
                competitions, train members in the art of public speaking, and
                organise speaking events that serve the wider student community.
              </p>
              <p className="mt-4 text-[var(--ink)]/65 leading-relaxed">
                From the very beginning, the society set itself apart not merely
                as a debating club, but as a{" "}
                <span className="font-medium text-[var(--navy)]">
                  human development platform
                </span>{" "}
                — a place where voices are refined, ideas are sharpened, and
                leaders are made.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-14 lg:mt-0 lg:flex-1">
              <div className="relative pl-6 border-l border-[var(--line)] space-y-8">
                {milestones.map((m) => (
                  <div key={m.year} className="relative">
                    <span
                      className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full bg-[var(--crimson)] ring-4 ring-white"
                      aria-hidden="true"
                    />
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                      {m.year}
                    </p>
                    <p className="mt-1 text-sm text-[var(--ink)]/70 leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)]">
        <div className="section-shell">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 border divide-y lg:divide-y-0 lg:divide-x divide-[var(--line)]"
            style={{ borderColor: "var(--line)" }}
          >
            {/* Mission */}
            <div className="bg-white p-10 lg:p-14">
              <div className="flex items-center gap-3">
                <Flame
                  className="h-6 w-6 text-[var(--crimson)]"
                  strokeWidth={1.5}
                />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
                  Mission
                </p>
              </div>
              <h2 className="mt-6 text-2xl sm:text-3xl font-medium text-[var(--navy)] leading-snug">
                Why we exist.
              </h2>
              <p className="mt-5 text-[var(--ink)]/65 leading-relaxed">
                The LASU Debate Society is the official public speaking society
                of Lagos State University, saddled with the responsibility of
                representing the institution at competitions, training members,
                and organising speaking events necessary for the development of
                the student community.
              </p>
              <p className="mt-4 text-[var(--ink)]/65 leading-relaxed">
                LSUDS is driven by the motivation to improve the art of public
                speaking among students and to enhance leadership capabilities
                through structured training. The society adopted the motto{" "}
                <span className="font-semibold text-[var(--navy)]">
                  'Valour in Speech'
                </span>{" "}
                as the emblem of this commitment.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[var(--navy)] p-10 lg:p-14">
              <div className="flex items-center gap-3">
                <Eye className="h-6 w-6 text-[var(--sky)]" strokeWidth={1.5} />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sky)]">
                  Vision
                </p>
              </div>
              <h2 className="mt-6 text-2xl sm:text-3xl font-medium text-white leading-snug">
                Where we are going.
              </h2>
              <p className="mt-5 text-white/60 leading-relaxed">
                To be the leading public speaking and leadership development
                society in Nigeria — raising the finest communicators and human
                leaders who will represent Lagos State University and impact the
                wider society.
              </p>
              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                  Our motto
                </p>
                <p className="mt-2 text-2xl font-medium italic text-[var(--sky)]">
                  Valour in Speech
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--navy)] max-w-xl">
              Principles that{" "}
              <span className="italic gradient-text">guide us.</span>
            </h2>
            <p className="text-[var(--ink)]/60 max-w-sm">
              Six values form the backbone of everything LSUDS does — from
              training sessions to competitions to community events.
            </p>
          </div>

          <div
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border divide-y sm:divide-y-0 sm:divide-x lg:divide-x divide-[var(--line)]"
            style={{ borderColor: "var(--line)" }}
          >
            {coreValues.map((v, i) => (
              <div
                key={v.title}
                className={`bg-white p-8 ${i >= 3 ? "border-t border-[var(--line)]" : ""}`}
              >
                <v.icon
                  className="h-7 w-7 text-[var(--crimson)]"
                  strokeWidth={1.5}
                />
                <h3 className="mt-6 text-lg font-medium text-[var(--navy)]">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--ink)]/65 leading-relaxed">
                  {v.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founding Members ─────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-b border-[var(--line)]">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--navy)] max-w-xl">
              The fourteen who{" "}
              <span className="italic gradient-text">started it all.</span>
            </h2>
            <p className="text-[var(--ink)]/60 max-w-sm">
              In 2018, these individuals came together to build what would
              become the most impactful public speaking society at LASU.
            </p>
          </div>

          <div
            className="border divide-y divide-[var(--line)]"
            style={{ borderColor: "var(--line)" }}
          >
            {[
              "Eleso Moyosoreoluwa",
              "Atanda Rafiat",
              "Tiamiyu Hezekiah",
              "Fadare Kehinde",
              "Omolaja Olayemi",
              "Onagoruwa Ayodeji",
              "Uzuegbu Faith",
              "Ademola Ibrahim",
              "Ibrahim Owolabi",
              "Akinsiwaju Sanya",
              "Ajayi Oladipupo",
              "Awesu Olaniyi",
              "Timilehin Ojo",
              "Tobi Babalola",
            ].map((name, i) => (
              <div
                key={name}
                className="flex items-center gap-6 bg-white px-8 py-5"
              >
                <span className="text-xs font-mono text-[var(--ink)]/30 w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[var(--navy)] font-medium">{name}</span>
                {i === 0 && (
                  <span className="ml-auto text-xs font-semibold uppercase tracking-widest text-[var(--crimson)] border border-[var(--crimson)]/30 px-3 py-1">
                    1st President
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ───────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <div className="section-shell">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--navy)] max-w-xl">
              A decade of{" "}
              <span className="italic gradient-text">leadership.</span>
            </h2>
            <p className="text-[var(--ink)]/60 max-w-sm">
              Ten administrations, each building on the last — a living record
              of those who have carried the LSUDS standard forward.
            </p>
          </div>

          <div className="space-y-px border border-[var(--line)]">
            {administrations.map((admin) => (
              <details
                key={admin.term}
                className="group bg-white open:bg-[var(--navy)]/[0.02]"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 px-8 py-6 list-none group-hover:bg-[var(--navy)]/[0.02] transition-colors">
                  <div className="flex items-center gap-5 min-w-0">
                    {admin.isCurrent && (
                      <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)] border border-[var(--crimson)]/30 px-3 py-1">
                        Current
                      </span>
                    )}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--ink)]/40">
                        {admin.term}
                      </p>
                      <p className="mt-0.5 text-lg font-medium text-[var(--navy)] leading-snug">
                        {admin.president} — President
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:block text-xs font-medium text-[var(--ink)]/35 group-open:hidden">
                      View executives
                    </span>
                    <span className="hidden text-xs font-medium text-[var(--crimson)]/70 group-open:block">
                      Hide executives
                    </span>
                    <div className="flex items-center justify-center h-8 w-8 rounded-full border border-[var(--line)] group-open:border-[var(--crimson)]/30 group-open:bg-[var(--crimson)]/5 transition-colors">
                      <svg
                        className="h-3.5 w-3.5 text-[var(--ink)]/35 group-open:text-[var(--crimson)] transition-transform group-open:rotate-180"
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
                    </div>
                  </div>
                </summary>

                <div className="px-8 pb-10 pt-6 border-t border-[var(--line)]">
                  <p className="text-sm text-[var(--ink)]/65 leading-relaxed max-w-2xl mb-8">
                    {admin.note}
                  </p>

                  {/* Executive photo grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                    {/* President card — always first */}
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="relative w-full aspect-square overflow-hidden bg-[var(--navy)]/5 border-2 border-[var(--crimson)]/40">
                        <Image
                          src={`/team/admin-${administrations.indexOf(admin) + 1}/president.jpg`}
                          alt={`Photo of ${admin.president}`}
                          fill
                          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--navy)] leading-snug">
                          {admin.president}
                        </p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-wider text-[var(--crimson)] font-semibold">
                          President
                        </p>
                      </div>
                    </div>

                    {/* Other executives */}
                    {admin.executives.map((exec) => (
                      <ExecutiveCard key={exec.name + exec.role} exec={exec} />
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
