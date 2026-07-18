import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/Button";
import HiveLattice from "@/components/HiveLattice";
import CostCalculator from "@/components/CostCalculator";

export const metadata: Metadata = {
  title: "Setup Cost Calculator — eHive Business Setup",
  description:
    "The #1 question: how much? Three questions in, an instant estimate range out — then a real quote from a setup expert.",
};

const NOTES = [
  {
    title: "A range, not a teaser",
    body: "The estimate spans what comparable setups actually cost — licence, registration, and visas. Not a low number designed to make you call.",
  },
  {
    title: "Government fees at cost",
    body: "In the real quote, every line is itemized and government fees are passed through without markup.",
  },
  {
    title: "Confirmed before you commit",
    body: "A setup expert validates the figure for your exact activity and structure — before you sign or pay anything.",
  },
];

export default function CalculatorPage() {
  return (
    <>
      {/* Calculator hero — the tool is the page */}
      <section className="relative overflow-hidden bg-navy-deep pt-40 pb-24 text-ivory md:pt-48 md:pb-28">
        <HiveLattice instant intensity={0.35} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(18,18,31,0.3)_0%,rgba(18,18,31,0.88)_100%)]" />
        <Container size="default" className="relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">Business Setup · Cost Calculator</p>
                <h1 className="mt-7 font-serif text-h1">
                  How much? That&rsquo;s the #1 question.
                </h1>
                <p className="mt-6 text-lead text-smoke">
                  Three questions in, an instant estimate range out. Then a
                  real quote from a setup expert, if you want one.
                </p>
              </Reveal>
              <div className="mt-12 hidden space-y-8 lg:block">
                {NOTES.map((note, i) => (
                  <Reveal key={note.title} delay={i * 100}>
                    <div className="border-t border-ivory/10 pt-6">
                      <h2 className="text-body-lg font-bold">{note.title}</h2>
                      <p className="mt-2 text-small leading-relaxed text-smoke">
                        {note.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={150} className="lg:col-span-8">
              <CostCalculator />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mobile notes */}
      <section className="bg-navy pb-20 text-ivory lg:hidden">
        <Container size="default">
          <div className="space-y-8">
            {NOTES.map((note) => (
              <div key={note.title} className="border-t border-ivory/10 pt-6">
                <h2 className="text-body-lg font-bold">{note.title}</h2>
                <p className="mt-2 text-small leading-relaxed text-smoke">
                  {note.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink href="/get-started" variant="solid">
              Book a Setup Consultation
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
