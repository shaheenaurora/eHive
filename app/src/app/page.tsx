import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/Button";
import HiveLattice from "@/components/HiveLattice";
import CountdownDays from "@/components/CountdownDays";

/* ------------------------------------------------------------------ */
/* eHive homepage — blueprint Section 2                                */
/* hero → manifesto → reveal → pillars → how it works → proof →        */
/* voices → Circle teaser → final CTA                                  */
/* ------------------------------------------------------------------ */

/* ---------- Pillar motifs (line-drawn SVG, one identity each) ---------- */

function MotifSetup() {
  /* foundation courses + rising arrow — solid ground */
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-12 w-12 text-gold-bright"
      aria-hidden="true"
    >
      <path d="M6 40h36" />
      <path d="M10 32h24" />
      <path d="M14 24h16" />
      <path d="M24 18V6" />
      <path d="M18 11l6-6 6 6" />
    </svg>
  );
}

function MotifConsulting() {
  /* compass — direction and rigor */
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-12 w-12 text-gold-bright"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="18" />
      <path d="M30 18l-4 8-8 4 4-8 8-4z" />
      <circle cx="24" cy="24" r="1" fill="currentColor" />
    </svg>
  );
}

function MotifCircle() {
  /* three linked hexagons — the hive, belonging */
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-12 w-12 text-gold-bright"
      aria-hidden="true"
    >
      <path d="M17 8l7.8 4.5v9L17 26l-7.8-4.5v-9L17 8z" />
      <path d="M31 8l7.8 4.5v9L31 26l-7.8-4.5v-9L31 8z" />
      <path d="M24 22l7.8 4.5v9L24 40l-7.8-4.5v-9L24 22z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */

const PILLARS = [
  {
    stage: "Start",
    title: "Start on solid ground.",
    body: "Company formation, licensing, visas, and the operational infrastructure to get from idea to incorporated — powered by Emirates First, delivered under one roof.",
    cta: "Explore Business Setup",
    href: "/business-setup",
    Motif: MotifSetup,
  },
  {
    stage: "Run & Scale",
    title: "Run and scale with rigor.",
    body: "Six proprietary consulting products, from a two-day clarity sprint to a 90-day growth engagement — the strategic thinking of a top consultancy, the creative process of a design studio.",
    cta: "Explore Consulting",
    href: "/consulting",
    Motif: MotifConsulting,
  },
  {
    stage: "Every stage",
    title: "Never build alone.",
    body: "A membership community of founders, mentors, experts, and investors — the people who open doors, share what they've learned, and grow alongside you.",
    cta: "Explore eHive Circle",
    href: "/circle",
    Motif: MotifCircle,
  },
];

const STEPS = [
  {
    n: "01",
    title: "Tell us where you are.",
    body: "A short intake — starting up, running and needing clarity, or looking to join a community of peers.",
  },
  {
    n: "02",
    title: "We match you to the right door.",
    body: "Business Setup for formation and licensing. Consulting for a specific sprint. Circle for belonging and network.",
  },
  {
    n: "03",
    title: "You book directly.",
    body: "Real dates, real pricing where possible, no back-and-forth for standard engagements.",
  },
  {
    n: "04",
    title: "You keep going.",
    body: "Most founders end up using more than one pillar over time — that's the design, not an upsell.",
  },
];

/* Dummy placeholder stats — to be replaced with researched or real figures */
const STATS = [
  { value: "82%", label: "of growing SMEs credit a strong peer network as a key factor in their growth" },
  { value: "40+", label: "years of combined operator experience behind the ecosystem's three pillars" },
  { value: "6", label: "proprietary consulting products, from two-day sprints to 90-day engagements" },
  { value: "50", label: "seats in the Zenith inner circle — invitation-only, by design" },
];

/* Dummy placeholder quotes — to be replaced with real member/client voices */
const QUOTES = [
  {
    quote:
      "eHive took what would have been three separate relationships — formation, strategy, community — and made them one conversation.",
    name: "A. Rahman",
    role: "Founder, e-commerce · Dubai",
  },
  {
    quote:
      "The Clarity Sprint did in two days what we'd been circling for two quarters. Direct, structured, and immediately usable.",
    name: "M. Okafor",
    role: "Managing Director, logistics · Sharjah",
  },
  {
    quote:
      "It's the first community I've joined where the doors actually open. The network is curated, not just collected.",
    name: "S. Pillai",
    role: "CEO, professional services · Abu Dhabi",
  },
];

const TIERS = [
  { name: "Horizon", level: "L1 · Entry" },
  { name: "Ascent", level: "L2 · Growth" },
  { name: "Vanguard", level: "L3 · Established" },
  { name: "Zenith", level: "L4 · Invitation only" },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- 2.1 Hero ---------- */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-deep text-ivory">
        <HiveLattice />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(18,18,31,0.6)_100%)]" />
        <Container size="default" className="relative z-10 text-center">
          <h1>
            <span
              className="animate-reveal block font-serif text-h1"
              style={{ animationDelay: "0.7s" }}
            >
              Every successful business has one thing in common.
            </span>
            <span
              className="animate-reveal mt-5 block font-serif font-bold text-display"
              style={{ animationDelay: "1.8s" }}
            >
              It doesn&rsquo;t grow alone.
            </span>
          </h1>
        </Container>
        <div
          className="animate-reveal absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ animationDelay: "3.2s" }}
          aria-hidden="true"
        >
          <div className="h-14 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
        </div>
      </section>

      {/* ---------- 2.2 The manifesto ---------- */}
      <Section tone="navy" pad="lg">
        <Container size="narrow" className="text-center">
          <Reveal>
            <p className="font-serif text-quote leading-relaxed">
              Growth happens when the right people, the right ideas, and the
              right opportunities come together in one place.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-12 font-serif text-quote leading-relaxed">
              That&rsquo;s the vision behind eHive — an entrepreneurial
              ecosystem where businesses connect with experts, investors,
              mentors, partners, technology, and a community that helps them
              move forward.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-12 font-serif text-quote leading-relaxed">
              When every connection creates another opportunity, growth
              isn&rsquo;t just possible — it becomes exponential.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-16 font-serif text-quote font-bold leading-relaxed text-gold-bright">
              Because success is built on collaboration, not competition.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- 2.3 The reveal — what eHive is ---------- */}
      <Section tone="ivory" pad="lg">
        <Container size="narrow" className="text-center">
          <Reveal>
            <div className="keyline mx-auto" />
            <p className="lead-serif mt-10 text-navy">
              eHive is more than a business community. It&rsquo;s where
              ambition meets opportunity, where collaboration creates
              momentum, and where businesses are built for the future.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-10 text-body-lg text-mist">
              One ecosystem. Everything a business needs to start, run,
              scale — and when the time comes, exit.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- 2.4 The three pillars ---------- */}
      <Section tone="navy" pad="md">
        <Container size="default">
          <Reveal>
            <p className="eyebrow">The architecture</p>
            <h2 className="mt-6 max-w-2xl font-serif text-h2">
              Three pillars, mapped to the way a business actually grows.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 120}>
                <div className="group flex h-full min-h-[26rem] flex-col border border-ivory/10 bg-navy-soft/50 p-10 transition-colors duration-500 hover:border-gold/40">
                  <pillar.Motif />
                  <p className="mt-8 text-small uppercase tracking-[0.18em] text-smoke">
                    {pillar.stage}
                  </p>
                  <h3 className="mt-3 font-serif text-h3">{pillar.title}</h3>
                  <p className="mt-5 text-smoke">{pillar.body}</p>
                  <div className="mt-auto pt-8">
                    <ButtonLink href={pillar.href} variant="arrow">
                      {pillar.cta}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-16 text-center font-serif text-lead text-ivory/90">
              Three pillars. One ecosystem.
              <span className="text-smoke">
                {" "}
                Move between them as your business grows.
              </span>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- 2.5 How it works ---------- */}
      <Section tone="ivory" pad="md">
        <Container size="default">
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="mt-6 max-w-2xl font-serif text-h2">
              Four steps, no maze.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 120}>
                <div className="border-t border-navy/15 pt-8">
                  <p className="font-serif text-h2 text-gold">{step.n}</p>
                  <h3 className="mt-5 text-body-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-small leading-relaxed text-mist">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- 2.6 Proof / results (dummy stats) ---------- */}
      <Section tone="deep" pad="md">
        <Container size="default">
          <Reveal>
            <p className="eyebrow">Why it works</p>
            <h2 className="mt-6 max-w-2xl font-serif text-h2">
              The case for connection.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.value} delay={i * 100}>
                <p className="font-serif text-display text-gold-bright">
                  {stat.value}
                </p>
                <p className="mt-4 text-small leading-relaxed text-smoke">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- 2.7 Testimonials / voices (dummy quotes) ---------- */}
      <Section tone="paper" pad="md">
        <Container size="default">
          <Reveal>
            <p className="eyebrow">Voices</p>
            <h2 className="mt-6 max-w-2xl font-serif text-h2">
              What builders are saying.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {QUOTES.map((q, i) => (
              <Reveal key={q.name} delay={i * 120}>
                <figure className="flex h-full flex-col border border-navy/10 bg-ivory p-9">
                  <span
                    aria-hidden="true"
                    className="font-serif text-h1 leading-none text-gold"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 font-serif text-h4 leading-relaxed text-navy">
                    {q.quote}
                  </blockquote>
                  <figcaption className="mt-auto pt-8 text-small text-mist">
                    <span className="font-bold text-ink">{q.name}</span>
                    <br />
                    {q.role}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- 2.8 eHive Circle teaser ---------- */}
      <Section tone="navy" pad="lg">
        <Container size="default">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow">eHive Circle</p>
              <h2 className="mt-6 font-serif text-h2">
                You don&rsquo;t have to build alone.
              </h2>
              <p className="mt-6 max-w-lg text-body-lg text-smoke">
                A membership community of founders, mentors, experts, and
                investors. Every tier is a home, not a waiting room for the
                next one.
              </p>
              <CountdownDays className="mt-8 text-small uppercase tracking-[0.18em] text-ivory/80" />
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <ButtonLink href="/circle" variant="solid">
                  Join the waitlist
                </ButtonLink>
                <ButtonLink href="/circle/membership" variant="arrow">
                  Apply for Zenith
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <ul className="grid grid-cols-2 gap-4">
                {TIERS.map((tier) => (
                  <li
                    key={tier.name}
                    className="border border-ivory/10 bg-navy-soft/50 px-6 py-7"
                  >
                    <p className="font-serif text-h3">{tier.name}</p>
                    <p className="mt-2 text-small text-smoke">{tier.level}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------- 2.9 Final CTA ---------- */}
      <section className="relative overflow-hidden bg-navy-deep py-28 text-ivory md:py-40">
        <HiveLattice instant intensity={0.45} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(18,18,31,0.35)_0%,rgba(18,18,31,0.85)_100%)]" />
        <Container size="narrow" className="relative z-10 text-center">
          <Reveal>
            <h2 className="font-serif text-h1">Ready to move forward?</h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/get-started" variant="solid">
                Start a Business
              </ButtonLink>
              <ButtonLink href="/consulting" variant="outline">
                Book a Consulting Sprint
              </ButtonLink>
              <ButtonLink href="/circle" variant="outline">
                Join the Circle
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
