import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "outline-dark" | "arrow";

const base =
  "inline-flex items-center justify-center gap-2 text-[0.95rem] font-bold tracking-[0.01em] transition-colors duration-300 rounded-none";

const variants: Record<Variant, string> = {
  /** gold fill — primary CTA, works on navy and light */
  solid: `${base} bg-gold px-7 py-3 text-navy-deep hover:bg-gold-bright`,
  /** hairline outline — secondary action on dark sections */
  outline: `${base} border border-ivory/30 px-7 py-3 text-ivory hover:border-gold-bright hover:text-gold-bright`,
  /** hairline outline — secondary action on light sections */
  "outline-dark": `${base} border border-navy/25 px-7 py-3 text-navy hover:border-gold hover:text-gold`,
  /** quiet text link with a moving arrow — tertiary navigation */
  arrow: `${base} group text-gold hover:text-gold-bright px-0 py-1`,
};

export default function ButtonLink({
  href,
  variant = "solid",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  if (variant === "arrow") {
    return (
      <Link href={href} className={`${variants.arrow} ${className}`}>
        <span>{children}</span>
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    );
  }
  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
