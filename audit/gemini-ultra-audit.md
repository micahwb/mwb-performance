### Page Scores
* **d-home: 7.5/10** — Strong brutalist frame, but muddy brown accent weakens CTA punch.
* **d-coaching: 7.0/10** — Comparison matrix has terrible contrast; feature boxes feel detached.
* **d-about: 8.0/10** — High authority, but timeline cards have uneven vertical rhythms.
* **d-results: 7.5/10** — Clean data-driven layout, but social proof section feels plain and text-heavy.
* **d-contact: 7.0/10** — Form inputs break design system (soft browser defaults vs. brutalist zero-radius).
* **m-home: 6.5/10** — App screenshot buried below excessive text; excessive vertical scroll fatigue.

---

### Remaining Flaws & Polish

#### 1. Visual & Aesthetic
* **Color System Mismatch:** Site uses a muted, dull gold/brown (`#8C6D23`) instead of the defined high-octane **Ember Orange (`#FF4D24`)**. Primary actions blend into the dark background instead of screaming for attention.
* **Form Inputs (Contact):** Standard browser input styling lacks hard 2px black borders and offset shadows, violating the brutalist design language.
* **Typography & Hierarchy:** Tagline widows like *"Start with the free guide: your first four weeks in the gym."* drop a single word on mobile.
* **Comparison Matrix (Coaching):** Dark gray text on black/olive background fails WCAG AA contrast standards.
* **Card Heights:** "The Path Here" (About) and "Timeline" (Results) cards have mismatched bottom padding due to varying text line counts.

#### 2. Conversion (CRO)
* **Muddy CTA Contrast:** Gold-on-black buttons lack visual weight. Primary CTAs need Ember Orange fill with dark bold text.
* **Interactive App Proof:** "Your whole program in your pocket" relies on static graphic cards rather than showing a crisp UI video/GIF snippet of the app in action.
* **Contact Friction:** Two competing alternative actions below form (`DM @MWBCOACHING` / `EMAIL DIRECTLY`) pull user focus away from submitting the primary booking form.

#### 3. Mobile Specific
* **Mobile Home Hero:** Tab pills (`BUILD MUSCLE`, `GET STRONGER`, `LOSE FAT`) stack tightly and consume 30% of the initial viewport height before the headline even lands.
* **App Preview Placement:** In `m-home`, the app screenshot is exiled to the very bottom of the section after 4 text blocks, losing visual context.
* **Stats Grid Stacking:** `1:1`, `7d`, `52x`, `$0` stats grid on mobile collapses into a cramped 2x2 box with uneven text wrapping.

---

### Top 8 Ranked Fixes by Impact

1. **Swap Accent Color to Ember Orange (`#FF4D24`):** Replace dull brown on all primary buttons (`BOOK YOUR FREE INTRO CALL`) and active states. Increases CTA conversion immediately.
2. **Brutalize Contact Form Inputs:** Apply sharp `#0B0A08` 2px borders, `#ECE7DC` fill, and hard offset shadows to form fields and dropdowns.
3. **Overhaul Coaching Matrix Contrast:** Lighten the background of the `MWB 1:1 Coaching` column in the comparison table to bone/white text with orange accents for instant readability.
4. **Relocate Mobile App Preview:** Move the Everfit mobile app screenshot *above* or *interleaved with* the feature bullet list on mobile so users visually connect feature to interface immediately.
5. **Standardize Card Aspect Ratios:** Force equal height flexbox/grid containers on the timeline steps (About page) and process steps with uniform bottom padding.
6. **Fix Typographic Widows:** Add `text-wrap: balance` / `pretty` across all h1/h2 headings and feature titles to eliminate single-word overflows.
7. **Streamline Mobile Hero Tabs:** Convert the 3 pill buttons at the top of the mobile hero into a compact single segmented toggle or horizontal swipe bar.
8. **Remove Contact Form Secondary Distractions:** Wrap "DM @MWBCOACHING" into a subtle inline link beneath the submit button instead of giving it equal-weight button styling.