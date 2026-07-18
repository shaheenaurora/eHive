import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/Button";

/* ------------------------------------------------------------------ */
/* Foundation preview — a working specimen of the eHive design tokens. */
/* Not the homepage. Replace this route once the look is approved.     */
/* ------------------------------------------------------------------ */

function Swatch({
  name,
  hex,
  role,
  swatchClass,
  bordered = false,
}: {
  name: string;
  hex: string;
  role: string;
  swatchClass: string;
  bordered?: boolean;
}) {
  return (
    <div>
      <div
        className={`h-24 w-full ${swatchClass} ${bordered ? "border border-navy/10" : ""}`}
      />
      <p className="mt-3 text-[0.95rem] font-bold">{name}</p>
      <p className="text-small text-mist">
        {hex} · {role}
      </p>
    </div>
  );
}

function TypeRow({
  spec,
  children,
  dark = false,
}: {
  spec: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`grid gap-4 border-t py-10 md:grid-cols-12 md:gap-8 ${
        dark ? "border-ivory/10" : "border-navy/10"
      }`}
    >
      <p
        className={`text-small md:col-span-3 ${dark ? "text-smoke" : "text-mist"}`}
      >
        {spec}
      </p>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}

function SpaceBar({ token, px }: { token: string; px: number }) {
  return (
    <div className="flex items-center gap-5">
      <p className="w-24 shrink-0 text-small text-smoke">
        {token} · {px}px
      </p>
      <div className="h-3 bg-gold" style={{ width: `${px}px` }} />
    </div>
  );
}

export default function FoundationPreview() {
  return (
    <>
      {/* ---------- Hero: the tokens at their most cinematic ---------- */}
      <Section
        tone="deep"
        pad="lg"
        className="flex min-h-[92vh] items-center pt-32"
      >
        <Container size="default">
          <Reveal>
            <p className="eyebrow">eHive · Design foundation</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-4xl font-serif text-display">
              Build. Belong. Become.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lead text-smoke">
              This page is the working specimen for the eHive site — color,
              type, spacing, and motion, in use. Nothing here is final page
              content; it exists so the foundational look can be reviewed and
              approved before any page is built.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-12 flex flex-wrap gap-4">
              <ButtonLink href="/get-started" variant="solid">
                Get Started
              </ButtonLink>
              <ButtonLink href="#color" variant="outline">
                Review the tokens
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- Color ---------- */}
      <Section tone="ivory" pad="md" id="color">
        <Container size="default">
          <Reveal>
            <p className="eyebrow">01 · Color</p>
            <h2 className="mt-6 font-serif text-h2">
              Navy carries the frame. Gold is spent sparingly.
            </h2>
            <p className="mt-5 max-w-2xl text-mist">
              Two brand colors, their working shades, and warm neutrals. Light
              sections default to ivory rather than pure white — the warmth
              keeps long reads from feeling clinical.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
            <Reveal>
              <Swatch name="Navy" hex="#1A1A2E" role="primary" swatchClass="bg-navy" />
            </Reveal>
            <Reveal delay={80}>
              <Swatch name="Navy Deep" hex="#12121F" role="hero / footer" swatchClass="bg-navy-deep" />
            </Reveal>
            <Reveal delay={160}>
              <Swatch name="Navy Soft" hex="#24243C" role="raised on dark" swatchClass="bg-navy-soft" />
            </Reveal>
            <Reveal>
              <Swatch name="Gold" hex="#B8862E" role="accent" swatchClass="bg-gold" />
            </Reveal>
            <Reveal delay={80}>
              <Swatch name="Gold Bright" hex="#D2A24C" role="accent on dark" swatchClass="bg-gold-bright" />
            </Reveal>
            <Reveal delay={160}>
              <Swatch name="Gold Pale" hex="#F4EAD6" role="accent tint" swatchClass="bg-gold-pale" />
            </Reveal>
            <Reveal>
              <Swatch name="Ivory" hex="#FAF8F3" role="light background" swatchClass="bg-ivory" bordered />
            </Reveal>
            <Reveal delay={80}>
              <Swatch name="Paper" hex="#FFFFFF" role="light surface" swatchClass="bg-paper" bordered />
            </Reveal>
            <Reveal delay={160}>
              <Swatch name="Mist / Smoke" hex="#55566B · #A9A9BC" role="secondary text" swatchClass="bg-gradient-to-r from-mist to-smoke" />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------- Type scale ---------- */}
      <Section tone="paper" pad="md" id="type">
        <Container size="default">
          <Reveal>
            <p className="eyebrow">02 · Type</p>
            <h2 className="mt-6 font-serif text-h2">
              Georgia speaks. Carlito explains.
            </h2>
            <p className="mt-5 max-w-2xl text-mist">
              Serif is reserved for moments that should feel said, not read —
              headlines, pull-quotes, the manifesto. Everything functional is
              set in Carlito, the open metric match for the brand&apos;s
              Calibri.
            </p>
          </Reveal>

          <div className="mt-14">
            <Reveal>
              <TypeRow spec="Display · Georgia · 44–76px / 1.05">
                <p className="font-serif text-display">
                  It doesn&apos;t grow alone.
                </p>
              </TypeRow>
            </Reveal>
            <Reveal>
              <TypeRow spec="Heading 1 · Georgia · 36–56px / 1.10">
                <p className="font-serif text-h1">
                  One ecosystem, from first step to exit.
                </p>
              </TypeRow>
            </Reveal>
            <Reveal>
              <TypeRow spec="Heading 2 · Georgia · 30–42px / 1.18">
                <p className="font-serif text-h2">The three pillars</p>
              </TypeRow>
            </Reveal>
            <Reveal>
              <TypeRow spec="Heading 3 · Georgia · 22–26px / 1.28">
                <p className="font-serif text-h3">Start on solid ground.</p>
              </TypeRow>
            </Reveal>
            <Reveal>
              <TypeRow spec="Heading 4 · Georgia · 20px / 1.35">
                <p className="font-serif text-h4">Run and scale with rigor.</p>
              </TypeRow>
            </Reveal>
            <Reveal>
              <TypeRow spec="Quote · Georgia · 24–36px / 1.45">
                <p className="font-serif text-quote text-navy">
                  “Because success is built on collaboration, not
                  competition.”
                </p>
              </TypeRow>
            </Reveal>
            <Reveal>
              <TypeRow spec="Lead · Carlito · 20–24px / 1.55">
                <p className="text-lead">
                  A founder who needs a trade license is not in the same
                  mindset as one ready for a ninety-day growth engagement —
                  the type system slows down for belief, and speeds up for
                  business.
                </p>
              </TypeRow>
            </Reveal>
            <Reveal>
              <TypeRow spec="Body · Carlito · 17px / 1.75">
                <p className="max-w-2xl">
                  Growth happens when the right people, the right ideas, and
                  the right opportunities come together in one place. The body
                  measure is capped near sixty-five characters per line so
                  long-form reading stays effortless, and the line height stays
                  open enough to breathe.
                </p>
              </TypeRow>
            </Reveal>
            <Reveal>
              <TypeRow spec="Small · Carlito · 14px / 1.6">
                <p className="text-small text-mist">
                  Captions, footnotes, legal lines, and interface metadata —
                  quiet but never cramped.
                </p>
              </TypeRow>
            </Reveal>
            <Reveal>
              <TypeRow spec="Eyebrow · Carlito Bold · 12px · +0.22em">
                <p className="eyebrow">The architecture</p>
              </TypeRow>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------- Spacing & rhythm ---------- */}
      <Section tone="deep" pad="md" id="spacing">
        <Container size="default">
          <Reveal>
            <p className="eyebrow">03 · Spacing &amp; rhythm</p>
            <h2 className="mt-6 font-serif text-h2">
              Whitespace is the loudest element on the page.
            </h2>
            <p className="mt-5 max-w-2xl text-smoke">
              Sections breathe on a 96–160px vertical rhythm, content sits in
              three fixed measures, and everything else falls off a 4px base
              grid. Nothing crowds; nothing shouts.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-14 md:grid-cols-2">
            <Reveal>
              <h3 className="font-serif text-h3">The spacing scale</h3>
              <div className="mt-8 space-y-4">
                <SpaceBar token="space-1" px={4} />
                <SpaceBar token="space-2" px={8} />
                <SpaceBar token="space-4" px={16} />
                <SpaceBar token="space-6" px={24} />
                <SpaceBar token="space-8" px={32} />
                <SpaceBar token="space-12" px={48} />
                <SpaceBar token="space-16" px={64} />
                <SpaceBar token="space-24" px={96} />
                <SpaceBar token="space-40" px={160} />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h3 className="font-serif text-h3">Section rhythm</h3>
              <dl className="mt-8 space-y-6">
                {[
                  ["Compact band", "py-16 / md:py-20", "64–80px"],
                  ["Standard frame", "py-24 / md:py-32", "96–128px"],
                  ["Cinematic frame", "py-28 / md:py-40", "112–160px"],
                ].map(([name, cls, px]) => (
                  <div
                    key={name}
                    className="flex items-baseline justify-between border-b border-ivory/10 pb-5"
                  >
                    <dt className="text-ivory">{name}</dt>
                    <dd className="text-small text-smoke">
                      {cls} · {px}
                    </dd>
                  </div>
                ))}
              </dl>

              <h3 className="mt-14 font-serif text-h3">Motion, restrained</h3>
              <p className="mt-5 text-smoke">
                One move only: a 20px rise over 0.9 seconds as sections enter
                the viewport, staggered by 80–120ms. It fires once, never
                loops, and is disabled entirely for reduced-motion
                preferences.
              </p>
            </Reveal>
          </div>

          {/* Container measures */}
          <Reveal>
            <div className="mt-20">
              <h3 className="font-serif text-h3">Three measures</h3>
              <div className="mt-8 space-y-5">
                {[
                  ["Narrow · 48rem", "max-w-3xl", "long-form reading"],
                  ["Default · 72rem", "max-w-6xl", "standard content"],
                  ["Wide · 80rem", "max-w-7xl", "nav, footer, media"],
                ].map(([name, cls, role]) => (
                  <div
                    key={name}
                    className={`border border-ivory/15 px-5 py-4 ${
                      cls === "max-w-3xl"
                        ? "w-full md:w-3/5"
                        : cls === "max-w-6xl"
                          ? "w-full md:w-5/6"
                          : "w-full"
                    }`}
                  >
                    <span className="text-small text-gold-bright">{name}</span>
                    <span className="ml-3 text-small text-smoke">
                      {cls} — {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- Composition: tokens reading together ---------- */}
      <Section tone="ivory" pad="lg" id="composition">
        <Container size="default">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <div className="keyline" />
                <p className="eyebrow mt-6">04 · Composition</p>
                <h2 className="mt-6 font-serif text-h2">
                  A section, assembled from the tokens above.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <Reveal>
                <p className="lead-serif text-navy">
                  This is how the system reads when it stops being a specimen:
                  a gold keyline and eyebrow to open, Georgia to carry the
                  argument, Carlito to do the work.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 max-w-2xl">
                  The rhythm is deliberate — generous space above and below, a
                  narrow measure for the words that matter, and one accent
                  color doing all of the pointing. Restraint here is what
                  keeps the eventual pages feeling cinematic rather than
                  templated.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <ButtonLink href="#color" variant="outline-dark">
                    Revisit color
                  </ButtonLink>
                  <ButtonLink href="/get-started" variant="arrow">
                    Approve and continue
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
