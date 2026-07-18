"use client";

import { useEffect, useRef, useState } from "react";
import PlaceholderTag from "./PlaceholderTag";

type Stat = {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 12, suffix: "+", label: "years operating in the UAE" },
  { value: 4500, suffix: "+", label: "businesses formed" },
  { value: 60, suffix: "+", label: "specialists on the ground" },
  { value: 80, suffix: "+", label: "nationalities served" },
];

/**
 * TrustBar — operator credibility stats for the Business Setup pillar.
 * Numbers are dummy placeholders pending Emirates First's real figures.
 */
export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 1100);
        setProgress(1 - Math.pow(1 - p, 3));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          if (reduced) setProgress(1);
          else animate();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const fmt = (n: number) =>
    Math.round(n * progress).toLocaleString("en-US");

  return (
    <div ref={ref} className="border-y border-ivory/10 bg-navy text-ivory">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-small uppercase tracking-[0.18em] text-smoke">
            Powered by Emirates First
          </p>
          <PlaceholderTag tone="dark">
            Placeholder numbers — pending Emirates First figures
          </PlaceholderTag>
        </div>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dd className="font-serif text-h1 text-gold-bright">
                {s.prefix}
                {fmt(s.value)}
                {s.suffix}
              </dd>
              <dt className="mt-2 text-small text-smoke">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
