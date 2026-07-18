import Link from "next/link";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";
import ButtonLink from "./Button";
import PageHero from "./PageHero";
import PlaceholderTag from "./PlaceholderTag";

export type JurisdictionContent = {
  eyebrow: string;
  title: string;
  sub: string;
  overview: string;
  blocks: { heading: string; items: string[] }[];
  zones?: { name: string; note: string; price: string }[];
  comparison: { aspect: string; freeZone: string; mainland: string }[];
  otherPathLabel: string;
  otherPathHref: string;
};

export default function JurisdictionPage({
  content,
}: {
  content: JurisdictionContent;
}) {
  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        sub={content.sub}
      >
        <ButtonLink href="/business-setup/calculator" variant="solid">
          Estimate my setup cost
        </ButtonLink>
      </PageHero>

      {/* Overview */}
      <Section tone="ivory" pad="md">
        <Container size="narrow">
          <Reveal>
            <div className="keyline" />
            <p className="lead-serif mt-8 text-navy">{content.overview}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Content blocks */}
      <Section tone="paper" pad="md">
        <Container size="default">
          <div className="grid gap-x-14 gap-y-14 md:grid-cols-2">
            {content.blocks.map((block, i) => (
              <Reveal key={block.heading} delay={i * 80}>
                <h2 className="font-serif text-h3">{block.heading}</h2>
                <ul className="mt-6 space-y-4">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                      />
                      <p className="text-mist">{item}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Indicative options (placeholder pricing) */}
      {content.zones && (
        <Section tone="navy" pad="md">
          <Container size="default">
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="font-serif text-h2">
                  Options and indicative pricing
                </h2>
                <PlaceholderTag tone="dark">
                  Placeholder pricing — pending Emirates First catalog
                </PlaceholderTag>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {content.zones.map((zone, i) => (
                <Reveal key={zone.name} delay={i * 100}>
                  <div className="flex h-full flex-col border border-ivory/10 bg-navy-soft/50 p-8 transition-colors duration-500 hover:border-gold/40">
                    <h3 className="font-serif text-h4">{zone.name}</h3>
                    <p className="mt-3 text-small leading-relaxed text-smoke">
                      {zone.note}
                    </p>
                    <p className="mt-auto pt-7 text-body-lg font-bold text-gold-bright">
                      {zone.price}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <p className="mt-10 text-small text-smoke">
                Indicative first-year ranges including licence and
                registration; visas and optional services quoted separately.
              </p>
            </Reveal>
          </Container>
        </Section>
      )}

      {/* At a glance comparison */}
      <Section tone="ivory" pad="md">
        <Container size="default">
          <Reveal>
            <h2 className="font-serif text-h2">
              Free Zone vs. Mainland at a glance
            </h2>
            <p className="mt-4 max-w-2xl text-mist">
              Exploring this path doesn&rsquo;t lock you out of the other —
              here&rsquo;s the honest side-by-side.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-navy/20">
                    <th className="py-4 pr-6 text-small uppercase tracking-[0.14em] text-mist">
                      &nbsp;
                    </th>
                    <th className="py-4 pr-6 font-serif text-h4 text-navy">
                      Free Zone
                    </th>
                    <th className="py-4 font-serif text-h4 text-navy">
                      Mainland
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {content.comparison.map((row) => (
                    <tr
                      key={row.aspect}
                      className="border-b border-navy/10 align-top"
                    >
                      <th className="py-5 pr-6 text-small font-bold uppercase tracking-[0.1em] text-ink">
                        {row.aspect}
                      </th>
                      <td className="py-5 pr-6 text-mist">{row.freeZone}</td>
                      <td className="py-5 text-mist">{row.mainland}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-10 text-small text-mist">
              Also worth a look:{" "}
              <Link
                href={content.otherPathHref}
                className="font-bold text-gold underline-offset-4 transition-colors duration-300 hover:underline"
              >
                {content.otherPathLabel} →
              </Link>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="deep" pad="md">
        <Container size="narrow" className="text-center">
          <Reveal>
            <h2 className="font-serif text-h2">
              Not sure which structure fits?
            </h2>
            <p className="mt-5 text-smoke">
              Three questions, an instant estimate — or straight to a
              conversation with a setup expert.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/business-setup/calculator" variant="solid">
                Estimate my setup cost
              </ButtonLink>
              <ButtonLink href="/get-started" variant="outline">
                Book a Setup Consultation
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
