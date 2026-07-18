"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import PlaceholderTag from "./PlaceholderTag";

/* ------------------------------------------------------------------ */
/* PLACEHOLDER ESTIMATE ENGINE                                         */
/* Dummy logic — real pricing rules aren't confirmed yet. When the     */
/* Emirates First price book lands, replace the three tables below.    */
/* ------------------------------------------------------------------ */

type ActivityKey = "consulting" | "trading" | "ecommerce" | "tech" | "other";
type Jurisdiction = "freezone" | "mainland";

const ACTIVITIES: {
  key: ActivityKey;
  label: string;
  hint: string;
  base: number;
}[] = [
  {
    key: "consulting",
    label: "Consulting & professional services",
    hint: "Advisory, marketing, design, specialist services",
    base: 6000,
  },
  {
    key: "trading",
    label: "Trading & general trading",
    hint: "Import, export, distribution",
    base: 8000,
  },
  {
    key: "ecommerce",
    label: "E-commerce & digital products",
    hint: "Online retail, marketplaces, digital goods",
    base: 7000,
  },
  {
    key: "tech",
    label: "Technology & software",
    hint: "SaaS, development, IT services",
    base: 6500,
  },
  {
    key: "other",
    label: "Something else",
    hint: "We'll scope it in the consultation",
    base: 7000,
  },
];

const JURISDICTIONS: {
  key: Jurisdiction;
  label: string;
  hint: string;
  licence: [number, number];
}[] = [
  {
    key: "freezone",
    label: "Free Zone",
    hint: "100% ownership, fast setup, international focus",
    licence: [12000, 30000],
  },
  {
    key: "mainland",
    label: "Mainland",
    hint: "Trade directly across the UAE market",
    licence: [18000, 35000],
  },
];

const VISA_OPTIONS = [0, 1, 2, 3, 4, 5, 6];
const VISA_COST: [number, number] = [3500, 5000]; // per visa, placeholder
const RANGE_SPREAD = 0.15; // ±15% on the licence band midpoint drift

const fmt = (n: number) => `AED ${Math.round(n).toLocaleString("en-US")}`;

/* ------------------------------------------------------------------ */

function OptionButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full border p-6 text-left transition-colors duration-300 ${
        selected
          ? "border-gold bg-navy-soft"
          : "border-ivory/15 bg-navy-soft/40 hover:border-gold/50"
      }`}
    >
      {children}
    </button>
  );
}

export default function CostCalculator() {
  const [step, setStep] = useState(0);
  const [activity, setActivity] = useState<ActivityKey | null>(null);
  const [jurisdiction, setJurisdiction] = useState<Jurisdiction | null>(null);
  const [visas, setVisas] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const steps = ["Business activity", "Jurisdiction", "Visas", "Estimate"];

  function estimate() {
    const a = ACTIVITIES.find((x) => x.key === activity)!;
    const j = JURISDICTIONS.find((x) => x.key === jurisdiction)!;
    const mid = (j.licence[0] + j.licence[1]) / 2 + a.base;
    const visaMid = ((VISA_COST[0] + VISA_COST[1]) / 2) * (visas ?? 0);
    const low = mid * (1 - RANGE_SPREAD) + VISA_COST[0] * (visas ?? 0);
    const high = mid * (1 + RANGE_SPREAD) + VISA_COST[1] * (visas ?? 0);
    return { low, high, visaMid };
  }

  const result = done ? estimate() : null;

  return (
    <div className="border border-ivory/10 bg-navy/60 p-7 backdrop-blur-sm md:p-12">
      {/* Progress */}
      <ol className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Progress">
        {steps.map((label, i) => (
          <li key={label} className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className={`flex h-7 w-7 items-center justify-center border text-small font-bold transition-colors duration-300 ${
                i < step || done
                  ? "border-gold bg-gold text-navy-deep"
                  : i === step
                    ? "border-gold text-gold-bright"
                    : "border-ivory/20 text-smoke"
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`hidden text-small sm:inline ${
                i === step && !done ? "text-ivory" : "text-smoke"
              }`}
            >
              {label}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="hidden h-px w-6 bg-ivory/15 sm:block" />
            )}
          </li>
        ))}
      </ol>

      <div className="mt-10">
        {/* ---------- Step 1: activity ---------- */}
        {step === 0 && (
          <fieldset>
            <legend className="font-serif text-h3">
              What will your business do?
            </legend>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {ACTIVITIES.map((a) => (
                <OptionButton
                  key={a.key}
                  selected={activity === a.key}
                  onClick={() => setActivity(a.key)}
                >
                  <p className="font-bold text-ivory">{a.label}</p>
                  <p className="mt-1.5 text-small text-smoke">{a.hint}</p>
                </OptionButton>
              ))}
            </div>
            <div className="mt-9 flex justify-end">
              <button
                type="button"
                disabled={!activity}
                onClick={() => setStep(1)}
                className="bg-gold px-7 py-3 font-bold text-navy-deep transition-colors duration-300 hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-30"
              >
                Continue →
              </button>
            </div>
          </fieldset>
        )}

        {/* ---------- Step 2: jurisdiction ---------- */}
        {step === 1 && (
          <fieldset>
            <legend className="font-serif text-h3">
              Where should we license it?
            </legend>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {JURISDICTIONS.map((j) => (
                <OptionButton
                  key={j.key}
                  selected={jurisdiction === j.key}
                  onClick={() => setJurisdiction(j.key)}
                >
                  <p className="font-bold text-ivory">{j.label}</p>
                  <p className="mt-1.5 text-small text-smoke">{j.hint}</p>
                </OptionButton>
              ))}
            </div>
            <p className="mt-5 text-small text-smoke">
              Not sure?{" "}
              <Link
                href="/business-setup/free-zone"
                className="font-bold text-gold-bright underline-offset-4 hover:underline"
              >
                Compare the two paths
              </Link>{" "}
              — or pick either; the estimate explains the difference.
            </p>
            <div className="mt-9 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="text-smoke transition-colors duration-300 hover:text-ivory"
              >
                ← Back
              </button>
              <button
                type="button"
                disabled={!jurisdiction}
                onClick={() => setStep(2)}
                className="bg-gold px-7 py-3 font-bold text-navy-deep transition-colors duration-300 hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-30"
              >
                Continue →
              </button>
            </div>
          </fieldset>
        )}

        {/* ---------- Step 3: visas ---------- */}
        {step === 2 && (
          <fieldset>
            <legend className="font-serif text-h3">
              How many residence visas?
            </legend>
            <p className="mt-3 text-small text-smoke">
              Include yourself, partners, and staff you&rsquo;ll sponsor in
              year one.
            </p>
            <div className="mt-8 grid grid-cols-4 gap-3 sm:grid-cols-7">
              {VISA_OPTIONS.map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-pressed={visas === n}
                  onClick={() => setVisas(n)}
                  className={`border py-4 text-center font-serif text-h3 transition-colors duration-300 ${
                    visas === n
                      ? "border-gold bg-navy-soft text-gold-bright"
                      : "border-ivory/15 text-ivory/80 hover:border-gold/50"
                  }`}
                >
                  {n === 6 ? "6+" : n}
                </button>
              ))}
            </div>
            <div className="mt-9 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-smoke transition-colors duration-300 hover:text-ivory"
              >
                ← Back
              </button>
              <button
                type="button"
                disabled={visas === null}
                onClick={() => setDone(true)}
                className="bg-gold px-7 py-3 font-bold text-navy-deep transition-colors duration-300 hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-30"
              >
                See my estimate
              </button>
            </div>
          </fieldset>
        )}

        {/* ---------- Result ---------- */}
        {done && result && (
          <div>
            <PlaceholderTag tone="dark">
              Placeholder estimate — pricing rules not yet confirmed
            </PlaceholderTag>
            <p className="mt-8 font-serif text-h2 text-ivory">
              {fmt(result.low)} – {fmt(result.high)}
              <span className="ml-3 align-middle text-body text-smoke">
                first year, all-in
              </span>
            </p>

            <dl className="mt-9 space-y-4 border-t border-ivory/10 pt-8">
              <div className="flex items-baseline justify-between gap-6">
                <dt className="text-smoke">
                  Licence &amp; registration ({jurisdiction === "freezone" ? "Free Zone" : "Mainland"},{" "}
                  {ACTIVITIES.find((a) => a.key === activity)?.label.toLowerCase()})
                </dt>
                <dd className="shrink-0 font-bold text-ivory">
                  {fmt(result.low - VISA_COST[0] * (visas ?? 0))} –{" "}
                  {fmt(result.high - VISA_COST[1] * (visas ?? 0))}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <dt className="text-smoke">
                  Residence visas × {visas}
                </dt>
                <dd className="shrink-0 font-bold text-ivory">
                  {visas
                    ? `${fmt(VISA_COST[0] * visas)} – ${fmt(VISA_COST[1] * visas)}`
                    : "—"}
                </dd>
              </div>
            </dl>

            <p className="mt-8 text-small leading-relaxed text-smoke">
              Indicative range only. Office space, dependant visas, and
              optional services aren&rsquo;t included; government fees are
              passed through at cost in the real quote. Your setup expert
              confirms the exact figure before you commit to anything.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center bg-gold px-7 py-3 font-bold text-navy-deep transition-colors duration-300 hover:bg-gold-bright"
              >
                Book a consultation
              </Link>
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center border border-ivory/30 px-7 py-3 text-ivory transition-colors duration-300 hover:border-gold-bright hover:text-gold-bright"
              >
                Get the full quote
              </Link>
              <button
                type="button"
                onClick={() => {
                  setDone(false);
                  setStep(0);
                  setActivity(null);
                  setJurisdiction(null);
                  setVisas(null);
                }}
                className="text-smoke transition-colors duration-300 hover:text-ivory sm:ml-auto"
              >
                Start over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
