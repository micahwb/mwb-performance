### 1. Visual & Aesthetic Flaws
* **Typographic Monotony:** Over-reliance on heavy uppercase display text across headers, buttons, and subheaders flattens visual hierarchy. Without typographic contrast (e.g., pairing display headers with a crisp mono or refined sentence-case secondary font), sections blur together.
* **Low Contrast Body Text:** Charcoal subtext (e.g., hero paragraph, footer copy) on ink black (`#0B0A08`) fails WCAG accessibility and forces eye strain.
* **Weak Hero Diagram:** The desktop hero UI box (showing Zoom/Form checks) uses thin 1px lines and faint card borders that contradict the heavy brutalist design system.
* **Top-Heavy Data Cards:** In the "Coaching, Measured" section, massive 70pt numbers sit above tiny 10px grey labels, creating unbalanced card proportions.
* **About Image Framing:** The red label (`MICAH BARKER - COACH`) abruptly cuts into the bottom-left of the portrait photo without intentional padding or margin.

---

### 2. Conversion Flaws
* **Above-the-Fold Trust Vacuum:** The main hero lacks immediate trust anchors (no star ratings, transformation badges, or outcome metrics next to the primary CTA).
* **Contact Page Friction:** The contact page forces visitors to read three large benefit cards (`01 20 MINUTES`, `02 HONEST ANSWER`, `03 ZERO PRESSURE`) before seeing the input fields.
* **Pricing Ordering:** "Kickstart" ($79/wk) sits to the left of "Ongoing Coaching" ($65/wk). Presenting the higher weekly price first creates price resistance before the value of the main recurring package is established.

---

### 3. Mobile-Specific Issues
* **Extreme Hero Fold Height:** On mobile home, stacking the hero UI diagram directly below the primary buttons pushes the core value proposition (`BUILT FOR PEOPLE STARTING OUT`) deep off-screen.
* **Mobile Form Depth:** On mobile contact, users must perform 1.5–2 full screen scrolls past intro blocks before reaching the `Name` field.
* **Monochrome Fatigue:** Mobile Home spends too long in continuous black space before hitting the bone background section, causing visual drift.

---

### 4. Top 5 Ranked Changes (Highest ROI First)

1. **Re-order & Streamline Mobile Contact:** Position the form fields immediately below the page header. Compress the 3-step value props (`20 MIN`, `HONEST`, `ZERO PRESSURE`) into a compact horizontal badge strip under the form button.
2. **Inject Above-the-Fold Trust Anchors:** Place a compact social proof badge directly under the Hero CTA block (e.g., *"NZ Certified • 1:1 Custom Programs • 0% Intimidation"*).
3. **Fix Text Accessibility & Hierarchy:** Bump all grey body copy up to high-contrast bone (`#ECE7DC`) or light warm grey (`#C5C0B6`). Convert secondary sub-titles and labels to clean sentence-case to relieve uppercase display fatigue.
4. **Harden the Hero Graphic:** Re-style the floating UI block in the hero with thick 2px borders, solid black fills, and high-contrast ember orange hard offset shadows (`4px 4px #FF4D24`) to match the brutalist aesthetic.
5. **Optimize Mobile Hero Layout:** Hide or condense the floating UI diagram on mobile hero views so the high-converting narrative block ("Built for people starting out...") sits right beneath the fold.