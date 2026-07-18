import type { ReactNode } from "react";

/**
 * Section — the site's vertical rhythm unit.
 * Generous whitespace is the default: pad="md" is the standard frame,
 * "lg" for cinematic moments, "sm" for compact bands.
 */
type SectionTone = "ivory" | "paper" | "navy" | "deep" | "pale";
type SectionPad = "sm" | "md" | "lg";

const tones: Record<SectionTone, string> = {
  ivory: "bg-ivory text-ink",
  paper: "bg-paper text-ink",
  navy: "bg-navy text-ivory on-dark",
  deep: "bg-navy-deep text-ivory on-dark",
  pale: "bg-gold-pale text-navy",
};

const pads: Record<SectionPad, string> = {
  sm: "py-16 md:py-20",
  md: "py-24 md:py-32",
  lg: "py-28 md:py-40",
};

export default function Section({
  tone = "ivory",
  pad = "md",
  id,
  className = "",
  children,
}: {
  tone?: SectionTone;
  pad?: SectionPad;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${tones[tone]} ${pads[pad]} ${id ? "scroll-mt-20" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
