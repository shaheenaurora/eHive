"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-01T00:00:00+04:00").getTime();

/** "Founding cohort opens 1 August 2026 — N days away." Days counted client-side. */
export default function CountdownDays({ className = "" }: { className?: string }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const update = () =>
      setDays(Math.max(0, Math.ceil((TARGET - Date.now()) / 86_400_000)));
    update();
    const id = setInterval(update, 3_600_000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className={className}>
      Founding cohort opens 1 August 2026
      {days !== null && days > 0 && (
        <span className="text-gold-bright"> — {days} days away</span>
      )}
    </p>
  );
}
