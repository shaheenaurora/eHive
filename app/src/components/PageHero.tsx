import type { ReactNode } from "react";
import Container from "./Container";
import Reveal from "./Reveal";
import HiveLattice from "./HiveLattice";

/**
 * PageHero — the standard dark opening frame for interior pages.
 * Lattice runs dimmed and pre-formed; the homepage hero keeps the
 * full formation animation to itself.
 */
export default function PageHero({
  eyebrow,
  title,
  sub,
  children,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-44 pb-24 text-ivory md:pt-56 md:pb-28">
      <HiveLattice instant intensity={0.4} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(18,18,31,0.25)_0%,rgba(18,18,31,0.85)_100%)]" />
      <Container size="default" className="relative z-10">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-7 max-w-3xl font-serif text-h1">{title}</h1>
          {sub && (
            <p className="mt-7 max-w-2xl text-lead text-smoke">{sub}</p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
