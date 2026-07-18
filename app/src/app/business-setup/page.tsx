import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/Button";
import PageHero from "@/components/PageHero";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Business Setup — eHive",
  description:
    "Company formation, licensing, visas, and the operational infrastructure to get from idea to incorporated — powered by Emirates First, delivered through eHive.",
};

const PATHS = [
  {
    n: "01",
    title: "I want to start a company",
    body: "The single most important decision first: free zone or mainland. Ownership, market access, timelines, and cost — compared plainly.",
    cta: "Compare Free Zone vs. Mainland",
    href: "/business-setup/free-zone",
  },
  {
    n: "02",
    title: "I need ongoing corporate services",
    body: "Banking, tax, compliance, visas, and the operational layer that keeps a company running after the licence is issued.",
    cta: "Browse the services catalog",
    href: "/business-setup/services",
  },
  {
    n: "03",
    title: "I'm not sure yet",
    body: "Start with a real number. Three questions, an instant estimate range, and a consultation if you want to talk it through.",
    cta: "Estimate my setup cost",
    href: "/business-setup/calculator",
  },
];

const WHY = [
  {
    title: "Backed by an established operator",
    body: "Emirates First infrastructure, not a startup back office.",
  },
  {
    title: "End-to-end, not fragmented",
    body: "Formation, licensing, and visas handled as one process.",
  },
  {
    title: "A dedicated expert per client",
    body: "One person who knows your case — not a call center.",
  },
  {
    title: "Government relationships",
    body: "Working channels that speed up licensing and registration.",
  },
  {
    title: "The ecosystem beyond the licence",
    body: "The only formation partner that also hands you a strategy team and a founder community the moment you're licensed.",
  },
];

const FAQS = [
  {
    q: "Mainland or free zone — how do I choose?",
    a: "It comes down to where your customers are and how you want to own the company. Free zones offer 100% foreign ownership and typically faster setup; a mainland licence lets you trade directly across the whole UAE market. We map both paths before you commit to either.",
  },
  {
    q: "How long does setup take?",
    a: "Free zone licences are typically issued within days once documents are in order; mainland timelines vary with activity approvals. Visas follow licence issuance. Your dedicated expert gives you a realistic timeline for your specific activity before you start.",
  },
  {
    q: "What's included, and what's billed separately?",
    a: "Every quote itemizes the licence, registration, and our service fee as separate lines. Government fees are passed through at cost. Optional services — banking support, visas for dependants, office space — are quoted only if you ask for them.",
  },
  {
    q: "Do I have to pay corporate tax?",
    a: "The UAE applies a 9% corporate tax on taxable profits above AED 375,000. Most newly formed businesses register and file, even if they owe nothing. We'll tell you exactly where your structure lands.",
  },
];

export default function BusinessSetupPage() {
  return (
    <>
      {/* ---------- 3.1 Hero ---------- */}
      <PageHero
        eyebrow="Business Setup"
        title="Start on solid ground."
        sub="Company formation, licensing, and the operational infrastructure to get from idea to incorporated — powered by Emirates First, delivered through eHive."
      >
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href="/business-setup/calculator" variant="solid">
            Estimate my setup cost
          </ButtonLink>
          <ButtonLink href="/get-started" variant="outline">
            Book a Setup Consultation
          </ButtonLink>
        </div>
      </PageHero>

      {/* ---------- 3.1 Trust stat bar (placeholder numbers) ---------- */}
      <TrustBar />

      {/* ---------- 3.1 Transparency block ---------- */}
      <Section tone="ivory" pad="md">
        <Container size="narrow">
          <Reveal>
            <div className="keyline" />
            <h2 className="mt-8 font-serif text-h2">
              Built on an operator, not a back office.
            </h2>
            <p className="mt-6 text-body-lg text-mist">
              eHive&rsquo;s Business Setup pillar runs on Emirates First, an
              established UAE formation operator. They bring the licensing
              infrastructure, government channels, and case operations; eHive
              brings the experience around it — one dedicated expert, one
              transparent process, and an ecosystem that keeps working for
              you after the licence is issued.
            </p>
            <p className="mt-6 text-body-lg text-mist">
              No mystery middlemen. You always know who is handling your
              case, what stage it&rsquo;s at, and what happens next.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- 3.2 Three-path selector ---------- */}
      <Section tone="navy" pad="md">
        <Container size="default">
          <Reveal>
            <p className="eyebrow">Where to start</p>
            <h2 className="mt-6 max-w-2xl font-serif text-h2">
              What&rsquo;s your business goal?
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {PATHS.map((path, i) => (
              <Reveal key={path.n} delay={i * 120}>
                <div className="flex h-full flex-col border border-ivory/10 bg-navy-soft/50 p-9 transition-colors duration-500 hover:border-gold/40">
                  <p className="font-serif text-h2 text-gold">{path.n}</p>
                  <h3 className="mt-5 font-serif text-h4">{path.title}</h3>
                  <p className="mt-4 text-small leading-relaxed text-smoke">
                    {path.body}
                  </p>
                  <div className="mt-auto pt-8">
                    <ButtonLink href={path.href} variant="arrow">
                      {path.cta}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- 3.6 Why eHive for Business Setup ---------- */}
      <Section tone="ivory" pad="md">
        <Container size="default">
          <Reveal>
            <p className="eyebrow">Why eHive</p>
            <h2 className="mt-6 max-w-2xl font-serif text-h2">
              Formation is the entry point, not the product.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex gap-6 border-t border-navy/15 pt-7">
                  <span
                    aria-hidden="true"
                    className="mt-1 font-serif text-h3 text-gold"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-body-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-small leading-relaxed text-mist">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- 3.8 FAQ ---------- */}
      <Section tone="paper" pad="md">
        <Container size="narrow">
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-6 font-serif text-h2">Asked often.</h2>
          </Reveal>

          <div className="mt-14">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 60}>
                <details className="group border-t border-navy/10 py-7 last:border-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-h4 text-navy [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-5 max-w-2xl leading-relaxed text-mist">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- 3.9 CTA ---------- */}
      <Section tone="deep" pad="lg">
        <Container size="narrow" className="text-center">
          <Reveal>
            <h2 className="font-serif text-h1">Ready to set up?</h2>
            <p className="mt-6 text-body-lg text-smoke">
              A thirty-minute conversation with a setup expert — your
              activity, your structure, a real timeline and quote.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/get-started" variant="solid">
                Book a Setup Consultation
              </ButtonLink>
              <ButtonLink href="/business-setup/calculator" variant="outline">
                Estimate costs first
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
