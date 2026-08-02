# MWB Performance — Website Audit & Rebuild Report

**Site audited:** https://personal-training-we-wju2.bolt.host/ (Bolt-hosted, React/Vite SPA)
**Date:** 2 August 2026
**Method:** Full source extraction + rendered-page analysis, plus a research sweep across Perplexity (live-sourced best practices), Exa (exemplar coaching sites), and a 6-model review panel via OpenRouter (DeepSeek V3, Qwen3-235B, Llama 4 Maverick, Kimi K2, GLM-4.5, Gemini 2.5 Flash). Raw outputs are in `audit/research/`.

---

## 1. Critical issues found on the Bolt site

### 🔴 1. Leads go to a database Micah can't access
The contact form submits to a Supabase project (`xqjgevzshdwamkmjggmr.supabase.co`, table `leads`) created by the Bolt deployment. There is **no email notification and no dashboard Micah owns** — every enquiry silently lands in a database tied to the Bolt account. For a lead-generation site this is the single biggest problem: the site can "work" perfectly and still lose every client.

### 🔴 2. Mobile horizontal scroll
The page scrolls sideways on phones (confirmed at 390px viewport). Most PT clients will arrive from Instagram on a phone — this reads as broken and kills trust.

### 🔴 3. Broken favicon
The HTML references `/vite.svg` (the default Vite dev icon), and the server doesn't even have it — requesting it returns the HTML page. The browser tab shows a broken/blank icon.

### 🟠 4. Scroll-animation content can render invisible
Large sections of the page (About, Coaching cards) are blank in full-page rendering because content only fades in via scroll-triggered animation. Users with JS hiccups, reduced-motion settings, or crawlers/preview bots can see empty black sections.

### 🟠 5. No ownership / platform lock-in
The site lives on a `bolt.host` subdomain under the Bolt account, with Bolt badge scripts injected into the page. Micah can't point a domain at it, can't see analytics, and doesn't control the code.

## 2. Conversion & content gaps (unanimous across the 6-model panel + Perplexity research)

| Gap | Why it matters |
|---|---|
| **No testimonials / social proof** | The highest-converting element for solo coaches. Even 1–2 real quotes materially lifts conversions. |
| **No pricing** | "From $X/week" transparency filters serious leads and builds trust; hidden pricing costs enquiries. |
| **No FAQ** | Beginners have predictable objections (Do I need a gym? Am I too inexperienced?) — unanswered = bounce. |
| **Stock-feel imagery, coach barely visible** | Solo coaching is a trust purchase. Micah's face should be front and centre. |
| **Title says "Online & In-Person"** but the page sells online-only | Message mismatch confuses visitors and search engines. |
| **Two competing hero CTAs** | Research consensus: one primary CTA ("Book a free intro call"), repeated at decision points. |

## 3. Technical SEO gaps
- No canonical URL, no `og:image`, no Twitter card → poor link previews when shared on IG/FB DMs (where most traffic will come from).
- No structured data (LocalBusiness / Person / FAQPage schema).
- No sitemap/robots (minor for a one-pager, but free to add).
- Email `hello@mwbperformance.co` — **verify this mailbox actually exists** before it goes anywhere. `.co` looks like a placeholder; consider `mwbperformance.co.nz` for NZ.
- PageSpeed API was quota-limited today; local measurement: the old site ships a 305 KB JS bundle to render a static page. The rebuild ships ~30 KB of HTML with zero JS frameworks.

## 4. What the rebuild fixes (this repo's `index.html`)

Section order follows the researched high-conversion pattern (hero → who it's for → proof → how it works → offer+pricing → about → FAQ → CTA):

- ✅ **Form Micah owns** — configurable endpoint (2-min Formspree setup) with a mailto fallback that always works, plus "DM @mwbcoaching" and direct-email escape hatches.
- ✅ **No horizontal scroll** (verified at 390px), single-column mobile, large tap targets.
- ✅ Real favicon (MWB gold mark, inline SVG — no file to lose).
- ✅ Content visible without JS; animations respect `prefers-reduced-motion`.
- ✅ Testimonial section (clearly-marked placeholders — **must be replaced with real quotes, never invented ones**).
- ✅ Pricing card ("From $60/week" placeholder — Micah sets the real number).
- ✅ FAQ section + FAQPage/LocalBusiness/Person JSON-LD schema.
- ✅ One primary CTA repeated: **Book your free intro call**.
- ✅ Hero rewritten to the researched audience+outcome+mechanism formula: *"Online strength coaching for beginners who want confidence in the gym."*
- ✅ Single self-contained HTML file, no build step, no dependencies, no Bolt scripts — deploys free on GitHub Pages/Netlify/Cloudflare, trivially editable.

## 5. Recommended next steps (in order)
1. Micah completes the 4 `[EDIT]` items in `index.html` (email, price, real testimonials, form endpoint) — see `README-FOR-MICAH.md`.
2. Push to Micah's GitHub + enable GitHub Pages (free hosting, his ownership).
3. Buy a domain (`mwbperformance.co.nz` ≈ NZ$20/yr) and point it at Pages.
4. Replace `images/gym_*.jpg` with 2–3 well-lit photos of Micah coaching.
5. Collect 2–3 real client quotes (with permission) for the Results section.
6. Add a free Google Analytics or Cloudflare analytics snippet once live.
7. Retire the Bolt deployment so the duplicate site doesn't compete in search.

---

*Reference material in this repo: `old-bolt-site/` (extracted original), `audit/old-site-captures/` (screenshots + rendered content), `audit/research/` (raw Perplexity/Exa/model-panel JSON), `audit/new-*.png` (rebuild screenshots).*

---

# v3 REBUILD — multi-page React site (2 Aug 2026, same day)

Rebuilt again per Henry's spec: LeadFoundry design-system DNA, **no Tailwind** (hand-written CSS tokens), **zero rounded corners**, React + Vite + **Framer Motion**, five pages + 404, unique palette and AI-generated logo.

## Brand decisions
- **Palette (chosen for MWB):** Ink `#0B0A08` + Bone `#ECE7DC` + Ember `#FF4D24`. Follows the design system's "black + ONE accent" rule with a brand-unique accent (LeadFoundry keeps mint).
- **Type:** Archivo (variable) — 900 uppercase expanded headlines, sentence-case body. Single family per system rules.
- **Signature moves:** hard offset shadows (no blur), 1px hairline grids, ember top-bar on nav, duotone-striped photo treatment, marquee strip, floating product cards in hero.
- **Logo:** gpt-image-1 generated 3 candidates (in `audit/logo-candidates/` — keep for Instagram brand art); production mark is a hand-built sharp SVG barbell (`public/mark.svg`) so the favicon is crisp at 16px.

## Research inputs
- Perplexity design-trends sweep (`audit/research/perplexity-design-trends.json`): premium = monochrome base + one aggressive accent, oversized kerned type, editorial discipline, one-message hero — all adopted.
- Firecrawl scrapes of exemplar coaching sites (janeflores.com, lordsonstrong.com, bespoke.fit) in `audit/research/`.

## Gemini live visual audit (screenshots → Gemini vision)
Round 1 (`audit/gemini-visual-audit.md`) flagged: low-contrast grey text, uppercase monotony, weak hero-card borders, mobile hero too tall, contact form buried on mobile, pricing order. **All fixed.**
Round 2 verification (`audit/gemini-verify-pass.md`): fixes confirmed. Final scores — **Aesthetic 8.8/10, Conversion 8.5/10.** Its remaining top suggestion (real coach portrait in hero) is blocked on new photos of Micah — noted in README.

## Verified
- No horizontal scroll on any page at 390px; zero console errors across all routes.
- Mobile sticky "Book free call" bar after first scroll; form-first contact layout on mobile.
- Form: Formspree endpoint config + mailto fallback + IG DM escape hatch (leads always reach Micah).
- Auto-deploy GitHub Action included; HashRouter so the site works on any static host with zero config.

## v3.1 — Mint palette + logo round 2 (same day)
- Accent switched from ember orange to the design system's **Foundry Mint `#B2FCE3`** per Henry; light sections now `#F5F5F5`, dark `#000`. Accent *text* on light sections uses ink (mint fails contrast on white); mint stays for CTAs, dark-section accents and decorative bars.
- Logo round 2: Perplexity logo-strategy research (avoid dumbbell clichés; simple/ownable/16px; combo wordmark+mark) → 5 new concepts generated with **gpt-image-2** (flat output, no glow — unlike gpt-image-1): Ascent M, MB Ligature, Rising Bars W, Angular Koru, First-Step Door. In `brand/` + `~/Desktop/MICAH/micah logos/`.


## v3.2 — Bronze brand lock + emblem logos + Everfit (same day)
- Brand colour corrected to Henry's hex **#7B5D20** (antique bronze). Because #7B5D20 is dark (≈3:1 on black), the system uses it for fills/CTAs with off-white text, and a lighter gold tint `#C9A14B` for text accents on dark — standard brand-tint practice, both derive from the same hue.
- Neutrals warmed to suit: off-white `#F2EEE4`, warm greys.
- **Logo round 3 (final):** 5 complex emblem lockups containing "MWB PERFORMANCE", gpt-image-2: Athletic Crest, Circular Seal, Varsity Lockup (note: prints EST. 2020 — fix if chosen), Gothic Wordmark, Kārearea Falcon Emblem. In `brand/` and `~/Desktop/MICAH/micah logos/`.
- **Everfit integration:** official Everfit SVG logos downloaded; "Powered by Everfit" badge on the Coaching page (with app explainer line) and in the footer.


## v3.3 — Content & compliance build-out (same day)
- **Gap audit** (Perplexity, NZ law): a NZ PT site collecting personal + health-adjacent info needs a Privacy Act 2020-compliant privacy policy, coaching T&Cs with health/medical disclaimer and CGA-safe refund language, and ideally PAR-Q screening at onboarding. Raw research: `audit/research/perplexity-legal-gaps.json`.
- **Added:** `/privacy` (Privacy Act 2020: what/why/who/retention/rights/OPC complaints, Everfit+form+Zoom+Meta processors, offshore storage note) and `/terms` (service scope, health disclaimer + GP clearance, no-results-guarantee, payments, pause/cancel/refunds aligned to CGA, IP, liability, NZ law). Both are marked as templates for a lawyer's once-over.
- **Blog:** `/blog` + 4 articles in Micah's voice (gym anxiety playbook, realistic 12-week muscle timeline, 3-day beginner split, fat-loss vs toning) — each ends with a coaching CTA and a not-medical-advice line.
- **SEO:** per-page titles + meta descriptions on every route (usePageMeta), robots.txt.
- **Logo round 4 (final):** simple athletic set per Gymshark/Alphalete formula research — Chevron Peak, Speed M, Plate Monogram, Bar M, Block Badge. Rounds 1–3 archived in subfolders.
- Remaining for Micah beyond the website: PAR-Q intake questionnaire at onboarding (Everfit has forms), waiver acknowledgment in onboarding flow, cookie note only if analytics added.

## v3.8 — Competitor benchmark: jordantrains.com (same day)
Jordan Stirling-Rowling — **also a Christchurch PT, also Everfit-powered** — is Micah's most direct comparable. Full-page capture in `audit/research/jordantrains-full.png`.
- **Their strengths:** volume of pro photography, Everfit app phone-mockup showcase, online + in-person dual offer, story section, confident voice.
- **Their gaps (MWB already wins):** no pricing, no FAQ, no comparison table, no blog, template design (agency Next.js), generic orange-on-dark.
- **Gap closed this round:** "Your whole program, in your pocket" section on Home — a pure-CSS brutalist phone mockup (stylised MWB program screen: exercise rows with logged sets, session progress bar, coach chat) + 4 app feature cells + Powered-by-Everfit badge. All solid colours, sharp corners, hard bronze shadow — intentionally NOT a generic device render (per Kimi K2 panel advice: "intentional restraint beats generic device renders").
- Also: nav made fully solid (removed translucent backdrop-blur) per Henry's no-opacity-boxes rule.
- **Still needs Micah:** a photo shoot. Their photography advantage is the only gap that can't be closed in code.
