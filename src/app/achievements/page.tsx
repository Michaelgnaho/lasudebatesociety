"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

type Win = {
  name: string;
  competition: string;
  year: number;
};

const wins: Win[] = [
  // 2026
  {
    name: "Fajana Olamide Mary",
    competition:
      "LASEPA Inter Tertiary Institutions Environmental Debate Competition",
    year: 2026,
  },
  {
    name: "Maryam Motunrayo Lawal",
    competition: "MSSN Lagos Intellectual Competition",
    year: 2026,
  },
  {
    name: "Michael Favour Eneoche",
    competition: "NASELS Interchapter Debate for Lagos State",
    year: 2026,
  },
  {
    name: "Onafusi Oluwafikunayomi Esther",
    competition: "Global Dialogue Intervarsity Debate Competition",
    year: 2026,
  },
  {
    name: "Hamzat Kamilat Omotolani",
    competition: "Peace Summit 3.0 and MSSN Lagos Intellectual Competition",
    year: 2026,
  },
  {
    name: "Arowojobe Emmanuel",
    competition: "1st Runner Up, Peace Summit 3.0 Speech Contest",
    year: 2026,
  },
  {
    name: "Mariam Oluwapelumi Busari",
    competition:
      "Best Diplomat and Critical Thinker, Presentation Award (Simulation)",
    year: 2026,
  },
  {
    name: "Adeleye Oladimeji Habeeb",
    competition:
      "Lagos Intellectual Competition (British Parliamentary Debate)",
    year: 2026,
  },
  {
    name: "Usman Barakah Oluwafunmilayo",
    competition: "The LASUSU Ikeja Debate",
    year: 2026,
  },
  {
    name: "Gift Onyechukwu",
    competition: "NASELS Departmental Debate",
    year: 2026,
  },

  // 2025
  {
    name: "Oladipupo Ramadan",
    competition: "LASEPA Inter Tertiary Institutions Debate Competition",
    year: 2025,
  },
  {
    name: "Atere Sarah Olateju",
    competition: "LASEPA Inter Tertiary Institutions Debate Competition",
    year: 2025,
  },
  {
    name: "Ajeniya Abdulquadri",
    competition: "LASEPA Inter Tertiary Institutions Debate Competition",
    year: 2025,
  },
  {
    name: "Kelvin Chukwuemeke Osadebe",
    competition: "LASEPA Inter Tertiary Institutions Debate Competition",
    year: 2025,
  },
  {
    name: "Sulaiman Samad Olaitan",
    competition: "LASEPA Inter Tertiary Institutions Debate Competition",
    year: 2025,
  },
  {
    name: "Adebowale Gbenga Ayowale",
    competition: "Lagos State Baptist Student Fellowship Oratory Contest",
    year: 2025,
  },
  {
    name: "Arowojobe Emmanuel",
    competition: "Winner, NAFIS LASU Debate Competition",
    year: 2025,
  },
  {
    name: "Mariam Oluwapelumi Busari",
    competition:
      "Best Diplomat and Critical Thinker, Presentation Award (Simulation)",
    year: 2025,
  },
  {
    name: "Bello Oluwanifemi Onoara",
    competition: "Massa Lasu Verbal Duel (Massa Lasu Word Lord)",
    year: 2025,
  },
  {
    name: "Bello Oluwanifemi Onoara",
    competition: "Accounting and Business Conduct Debate 6.0, Best Speaker",
    year: 2025,
  },
  {
    name: "Sherifat Umar",
    competition: "Winner, Eko Got's Talent",
    year: 2025,
  },

  // 2024
  {
    name: "Oladipupo Olalekan",
    competition: "Justice Innocent Umezulike National Debate Competition",
    year: 2024,
  },
  {
    name: "Ajeniya Oluwagbemiga",
    competition: "Justice Innocent Umezulike National Debate Competition",
    year: 2024,
  },
  {
    name: "Musendiku Mulikat",
    competition: "Justice Innocent Umezulike National Debate Competition",
    year: 2024,
  },
  {
    name: "Sulaiman Samad Olaitan",
    competition: "QHSE and Sustainability Debate Series 2.0",
    year: 2024,
  },
  {
    name: "Arowojobe Emmanuel",
    competition: "Winner, NAFIS LASU Debate Competition",
    year: 2024,
  },
  {
    name: "Ndukuba Edith Ugochi",
    competition: "Inter-Faculty Freshers Debate Competition, LASU",
    year: 2024,
  },
  {
    name: "Sherifat Umar",
    competition: "NANS JCC Debate Competition (with Saheed Sunday)",
    year: 2024,
  },
  {
    name: "Sherifat Umar",
    competition: "Winner, Talent Hunt Poetry Prize",
    year: 2024,
  },
  {
    name: "Sherifat Umar",
    competition: "LASU Debate Society Member of the Year",
    year: 2024,
  },
  {
    name: "Sherifat Umar",
    competition: "1st Runner-Up, LASU Debate Society Poetry Slam",
    year: 2024,
  },
  {
    name: "Sherifat Umar",
    competition: "1st Place, WESTCOSELS Poetry Competition",
    year: 2024,
  },
  {
    name: "Sherifat Umar",
    competition: "2nd Runner-Up, NANS JCC Debate Competition",
    year: 2024,
  },

  // 2023
  {
    name: "Arowojobe Emmanuel",
    competition: "Winner, NASS LASU Freshers Debate",
    year: 2023,
  },
  {
    name: "Sherifat Umar",
    competition: "1st Place, Inter-Divisional Debate Competition, LASU",
    year: 2023,
  },
  {
    name: "Sherifat Umar",
    competition:
      "Best Graduating Student, ABC SPEAK Public Speaking Academy (Cohort 5.0)",
    year: 2023,
  },
  {
    name: "Sherifat Umar",
    competition: "Public Speaker of the Year, NASELS LASU",
    year: 2023,
  },
  {
    name: "Sherifat Umar",
    competition: "3rd Runner-Up, Speak Pro",
    year: 2023,
  },
  {
    name: "Sherifat Umar",
    competition: "1st Runner-Up, Penactive Short Story Contest",
    year: 2023,
  },

  // 2022
  {
    name: "Sherifat Umar",
    competition: "1st Place, NASELS LASU Debate Competition",
    year: 2022,
  },
  {
    name: "Sherifat Umar",
    competition: "1st Runner-Up, WORD LORD Competition (Word War 4)",
    year: 2022,
  },
  {
    name: "Sherifat Umar",
    competition: "1st Runner-Up, My Rotaract Journey Story Challenge",
    year: 2022,
  },
  {
    name: "Sherifat Umar",
    competition: "1st Place, Speak My Truth Poetry Contest",
    year: 2022,
  },
];

const years = Array.from(new Set(wins.map((w) => w.year))).sort(
  (a, b) => b - a,
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Achievements() {
  const [openYear, setOpenYear] = useState<number | null>(years[0] ?? null);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[45vh] flex items-end">
        <div className="absolute inset-0 z-0 bg-[var(--navy)]" />

        <div className="relative z-10 w-full section-shell pb-16 pt-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--sky)]">
            Beyond LASU
          </p>
          <h1 className="mt-4 text-6xl sm:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-none">
            Achievements
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
            Competitions won outside LSUDS, organised by year.
          </p>
        </div>
      </section>

      {/* ── Year accordion ───────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28">
        <div className="section-shell max-w-3xl">
          <div className="flex flex-col border-t border-[var(--line)]">
            {years.map((year) => {
              const yearWins = wins.filter((w) => w.year === year);
              const isOpen = openYear === year;

              return (
                <div key={year} className="border-b border-[var(--line)]">
                  <button
                    onClick={() => setOpenYear(isOpen ? null : year)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-semibold text-[var(--crimson)]">
                        {year}
                      </span>
                      <span className="text-sm text-[var(--ink)]/50">
                        {yearWins.length}{" "}
                        {yearWins.length === 1 ? "win" : "wins"}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-[var(--navy)] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      strokeWidth={2}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="pb-8 flex flex-col gap-5">
                        {yearWins.map((w, i) => (
                          <li key={`${year}-${i}`}>
                            <p className="text-sm font-semibold text-[var(--navy)]">
                              {w.name}
                            </p>
                            <p className="text-sm text-[var(--ink)]/60 mt-0.5">
                              {w.competition}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-28 border-t border-[var(--line)]">
        <div className="section-shell">
          <div className="border border-[var(--line)] bg-white p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--crimson)]">
                Know of a win we missed?
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-[var(--navy)] max-w-lg leading-snug">
                Help us keep this record complete and accurate.
              </h2>
              <p className="mt-3 text-[var(--ink)]/60 max-w-md">
                If you represented LSUDS at a competition not listed here, reach
                out with the details so we can add it to the record.
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
