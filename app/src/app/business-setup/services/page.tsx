import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/Button";
import PageHero from "@/components/PageHero";
import PlaceholderTag from "@/components/PlaceholderTag";

export const metadata: Metadata = {
  title: "Corporate Services — eHive Business Setup",
  description:
    "Banking, tax, compliance, visas, and the operational layer that keeps a UAE company running — grouped the way a founder's needs actually evolve.",
};

const BANDS = [
  {
    name: "Essential",
    strap: "The obligations — handled before they become problems.",
    services: [
      {
        title: "Bank account opening",
        body: "Introductions, preparation, and follow-through with UAE banks — the step most founders dread, handled end to end.",
      },
      {
        title: "Accounting & bookkeeping",
        body: "Clean books from day one, sized to your stage — not an enterprise package you'll never use.",
      },
      {
        title: "Corporate tax & VAT",
        body: "Registration, filing, and plain-language advice on the 9% corporate tax above AED 375,000 profit.",
      },
      {
        title: "Compliance — UBO & ESR",
        body: "Beneficial-ownership and economic-substance filings, tracked and submitted before deadlines find you.",
      },
      {
        title: "Health insurance",
        body: "Mandatory cover for you and your team, sourced and renewed.",
      },
    ],
  },
  {
    name: "Operational",
    strap: "The day-to-day layer — so the office runs without you in it.",
    services: [
      {
        title: "Legal services",
        body: "Contracts, agreements, and reviews from counsel who understand founder-stage businesses.",
      },
      {
        title: "Mail management",
        body: "A real address, mail received, scanned, and forwarded — wherever you are.",
      },
      {
        title: "Virtual receptionist",
        body: "Calls answered in your company's name, messages relayed — presence without payroll.",
      },
      {
        title: "IT services",
        body: "Setup, support, and security for small teams that can't afford downtime.",
      },
    ],
  },
  {
    name: "Support & Growth",
    strap: "The longer game — status, protection, and what's next.",
    services: [
      {
        title: "Golden Visa",
        body: "Ten-year residency for qualifying founders, investors, and specialists — assessed and applied for properly.",
      },
      {
        title: "PRO services",
        body: "Government liaison handled for you: renewals, attestations, approvals, and queues you never stand in.",
      },
      {
        title: "Trademark & copyright",
        body: "Your brand protected in the UAE and beyond, filed correctly the first time.",
      },
      {
        title: "Will preparation",
        body: "Succession for your UAE assets and shares — the document founders postpone and shouldn't.",
      },
      {
        title: "Tourist visa",
        body: "Short-stay visas for visiting partners, family, and early team members.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Setup · Corporate Services"
        title="Everything after the licence."
        sub="Banking, tax, compliance, and the operational layer that keeps a company running — grouped the way your needs actually evolve after formation."
      >
        <ButtonLink href="/get-started" variant="solid">
          Talk to a services expert
        </ButtonLink>
      </PageHero>

      {BANDS.map((band, bandIndex) => (
        <Section
          key={band.name}
          tone={bandIndex % 2 === 0 ? "ivory" : "paper"}
          pad="md"
        >
          <Container size="default">
            <Reveal>
              <p className="eyebrow">
                {String(bandIndex + 1).padStart(2, "0")} · {band.name}
              </p>
              <h2 className="mt-5 max-w-2xl font-serif text-h2">
                {band.strap}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {band.services.map((service, i) => (
                <Reveal key={service.title} delay={i * 60}>
                  <div className="flex h-full flex-col border-t border-navy/15 pt-7">
                    <h3 className="text-body-lg font-bold">{service.title}</h3>
                    <p className="mt-3 text-small leading-relaxed text-mist">
                      {service.body}
                    </p>
                    <div className="mt-auto pt-6">
                      <ButtonLink href="/get-started" variant="arrow">
                        Enquire
                      </ButtonLink>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      {/* Catalog note + CTA */}
      <Section tone="deep" pad="md">
        <Container size="narrow" className="text-center">
          <Reveal>
            <PlaceholderTag tone="dark">
              Catalog shape provisional — pending Emirates First service list
            </PlaceholderTag>
            <h2 className="mt-8 font-serif text-h2">
              Tell us what you&rsquo;re running.
            </h2>
            <p className="mt-5 text-smoke">
              Every service starts with a short conversation and a fixed
              quote — no retainers you didn&rsquo;t ask for, no bundles you
              don&rsquo;t need.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/get-started" variant="solid">
                Book a Setup Consultation
              </ButtonLink>
              <ButtonLink href="/business-setup" variant="outline">
                Back to Business Setup
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
