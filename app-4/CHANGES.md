# CHANGES — 2026 launch-system upgrade

## Architecture
- **Shared assets**: all 16 pages (+3 new) now load one `styles.css` (design system) and one
  `app.js` (all behavior, feature-gated by DOM presence). No framework, no build step —
  deployable to Vercel as static files as-is.
- **Inline `<style>`/`<script>` blocks removed** from every page (842 CSS blocks merged,
  exact-duplicate deduplicated).
- **`api/lead.js`** — commented Vercel serverless stub that accepts every lead payload the
  site sends; wire CRM or email and point `FORM_ENDPOINT` at it.

## Design system
- **New tokens**: navy-950/900/800, gold-500/400/300, paper-50/100/200, ink-900/600,
  mist-100/400, semantic success/error, radii, shadows, motion durations. Legacy variable
  names alias into the new tokens, so all existing components re-themed without rewrites.
- **Type**: Fraunces (display serif), Inter (body), Space Mono (eyebrows, prices, badges,
  countdown digits, stats). Google Fonts loaded with preconnect + display=swap.
- **AA contrast**: small gold text on light surfaces moved to ink-600 (eyebrows, tags,
  stat labels); gold retained on navy and for large/display type. Visible `:focus-visible`
  gold outline everywhere. Buttons meet the 44px touch target.

## New components (in styles.css)
- `.badge--live/--roadmap/--invite` status pills (Circle tiers)
- `.tier.reco` + `.reco-tag` (Ascent recommended, replacing Zenith's "featured")
- `.ladder` access-model rungs (Circle)
- `.cohort-frame` founding-cohort proof panel (homepage)
- `.founder-voice` cards designed for Jamad & Shaheen (homepage)
- `.selector` two-question product fit selector + `.sel-result` (consulting)
- `.price-why` per-product price-range explainers, `.ladder-viz` price arc, `.cta-rule`
  signposting (consulting)
- `.calc-capture` "email me the breakdown" lead tool (business-setup calculator)
- `.launch-state` + `.lc-big` countdown (login pre-launch)
- `.soon-chip` / `.soc-soon` — honest disabled states replacing every dead `#` link
- `.ph-block` — intentional placeholder panels with `COPY-NEEDED` code markers
- `.center-hero` (404), `.legal-body`/`.legal-nav` (privacy/terms)

## Behavior (app.js)
- **Nav**: condenses after 40px scroll; current-page indicator via `aria-current`; mobile
  menu is a full-height off-canvas with focus trap (Tab cycles, Esc closes, focus returned).
- **Hero canvas**: ≤40 nodes, connecting lines fade in orchestrated on load then drift,
  cursor-brighten on desktop, pauses off-screen (IntersectionObserver) and on hidden tabs
  (visibilitychange); reduced-motion users get one static frame.
- **Countdown**: any `[data-countdown]` block and `[data-cd-days]` slot driven; mono digits,
  seconds tick; elapsed state reads "The founding cohort is open"; zeroes, never dashes.
- **Get Started funnel**: Step n of 4 progress, Continue disabled until each step is valid,
  `history.pushState` so browser Back restores steps, `?door=` / `?product=` / `?tier=` URL
  prefill with auto-advance, real POST to `FORM_ENDPOINT` with hidden capture fields
  (door, product/tier, question, source_page, referrer, timestamp, user_agent). Failure is
  honest — the summary stays on screen and the user is told nothing was sent.
- **Booking, calculator capture, newsletter**: same `submitLead()` path, same honesty.
- **Login**: `PORTAL_LIVE = false` renders the "portal opens 1 August 2026" countdown state
  with waitlist CTA; flipping the flag restores the real sign-in form. Portal stays guarded.

## Pages
- **New**: 404.html, privacy.html, terms.html.
- **Copy decision**: "start, run, scale — and exit" softened to "start, run, and scale"
  (meta + manifesto); logged in COPY-TODO.md.
- **Zero dead links**: every former `href="#"` is either wired (footer Cost Calculator →
  `business-setup.html#calculator`, Join the Network → `about.html#join`, service bands →
  funnel) or an honest soon-chip (socials, WhatsApp, portal documents).
- **Images**: content images lazy-loaded with explicit width/height.

## Performance & quality
- Single CSS/JS payload shared across pages (browser caches after first page).
- Fonts preconnected; canvas paused when invisible; reveals fail-safe (no-JS shows all).
- COPY-TODO.md tracks every deferred content decision with in-code `COPY-NEEDED` markers.
