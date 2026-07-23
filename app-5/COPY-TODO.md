# COPY-TODO — eHive launch copy & data checklist

Every deferred content decision on the site, keyed to its in-code marker.
Search the codebase for `COPY-NEEDED: <key>` to find the exact spot.
Nothing on the site shows a visible placeholder; each of these renders as an
intentional "coming at launch" component until the real content lands.

## Content the founders must supply
| Key | Where | What's needed |
|---|---|---|
| `founder-statement-jamad` | index.html — Voices | 2–4 sentence founding statement, first person |
| `founder-statement-shaheen` | index.html — Voices | 2–4 sentence founding statement, first person |
| `founder-bio-jamad` | about.html — Founders | Full bio paragraph |
| `founder-bio-shaheen` | about.html — Founders | Full bio paragraph |
| `team-roles` | about.html — Core team | Role titles for Sabrina, Afeef, Divya, Shahinsha, Sajeer |
| `advisors` | about.html — Advisors | Advisory board names/bios — or delete the section pre-launch |
| `testimonials` | circle.html — Member voices | Founding member + mentor quotes, with consent |

## Numbers & documents
| Key | Where | What's needed |
|---|---|---|
| `emirates-first-figures` | business-setup.html — trust bar | Verified operating figures (years, businesses formed, nationalities) — publishes with real numbers or not at all |
| `circle-member-count` | circle.html — hero chip | Live founding-member count once applications open |
| `vanguard-thresholds` | circle.html — tier note | Vanguard eligibility thresholds (revenue / team size) |
| `tier-names-trademark` | circle.html — tier note | Trademark clearance on Horizon / Ascent / Vanguard / Zenith |
| `rulebook-doc` | portal.html — footer | Member rulebook + code of conduct documents |
| `cited-research` | index.html — cohort frame | Third-party UAE SME research citations (optional per launch decision) |

## Wiring & contacts
| Key | Where | What's needed |
|---|---|---|
| `FORM_ENDPOINT` | app.js (top) | Formspree form ID, or `/api/lead` with api/lead.js wired (CRM / email) |
| `PORTAL_LIVE` | app.js (top) | Flip to `true` on 1 August 2026 — login form replaces the countdown |
| `whatsapp-number` | get-started.html, business-setup.html (×2) | Real WhatsApp business number → set `WA_NUMBER` in app.js and swap the soon-chips back to `wa.me` links |
| `social-urls` | every footer | LinkedIn / Instagram / X profile URLs — replace the soon-chips |
| `email-contact` | api/lead.js | Destination inbox for lead notifications |
| `privacy-body` | privacy.html | Full policy: retention, processors, UAE data rights |
| `terms-body` | terms.html | Full terms: liability, governing law, refunds, conduct |

## Editorial
| Key | Where | What's needed |
|---|---|---|
| `insights-articles` | insights.html | Issue 01 pieces: founder's letter + one per topic lane |
| `chapter-schedule` | circle.html — chapters | Abu Dhabi / Sharjah chapter launch calendar |

## Product decisions logged
- **"Exit" softened to "start, run, and scale"** in the homepage meta description and
  manifesto promise. The lifecycle diagram (Start · Run · Scale · Exit) still shows Exit as
  a lifecycle stage — keep or remove at the founders' call.
- **Pricing on business-setup calculator** is illustrative logic, clearly labeled indicative,
  pending the Emirates First rate card.
- **Zenith is no longer the highlighted tier** — Ascent carries "Recommended for most
  founders"; Zenith keeps its invitation-only badge.
