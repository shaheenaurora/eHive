import type { ReactNode } from "react";

/**
 * PlaceholderTag — marks dummy content (stats, prices, quotes) as
 * provisional, per the blueprint's no-fabricated-numbers rule.
 * Rendered as a small dashed-outline tag; quiet but unmissable.
 */
export default function PlaceholderTag({
  children,
  tone = "light",
  className = "",
}: {
  children?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const colors =
    tone === "dark"
      ? "border-gold-bright/50 text-gold-bright"
      : "border-gold/60 text-gold";
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 border border-dashed px-3 py-1 text-[0.72rem] font-bold tracking-[0.14em] uppercase ${colors} ${className}`}
    >
      <span aria-hidden="true">◇</span>
      {children ?? "Placeholder — pending real figures"}
    </span>
  );
}
