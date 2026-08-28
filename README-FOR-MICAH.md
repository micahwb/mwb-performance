# MWB Performance — your website, ready to own 💪

Hey Micah — this folder is your complete website: a 5-page React site with your own brand system (black / off-white / bronze gold) plus 5 emblem logo concepts to choose from, and animations. No Bolt, no lock-in — you own all of it.

## 0. Preview it right now
You need Node.js (free, nodejs.org). Then in Terminal, from this folder:
```bash
npm install
npm run dev
```
Open the local URL it prints (usually http://localhost:5173).

> Quick fallback: there's also a zero-setup single-file version in `v2-static/index.html` — double-click it to open. The React site in this folder is the main event.

## 1. Still to do before you promote the site
Search the `src/` folder for `[EDIT]`:

| Tag | File | What to change |
|---|---|---|
| `[EDIT-PRICE]` | `src/pages/Coaching.jsx` | The $65/$79/$149 prices are **placeholders** — set your real ones. |
| `[EDIT-QUOTES]` | `src/pages/Home.jsx` + `src/pages/Results.jsx` | Replace example testimonials with real client quotes (with permission). **Never launch with the examples.** |

Already done: your email, the enquiry form, and the real photos on the home and about pages.

## 2. ⚠️ ACTIVATE THE ENQUIRY FORM — one click, do this first
The form sends enquiries to **mwbperformance.nz@gmail.com** via FormSubmit. It needs a one-time activation before it will deliver anything.

1. Open **mwbperformance.nz@gmail.com**.
2. Find the email from **FormSubmit** (check spam) with an **"Activate Form"** link.
3. Click it. Done — every enquiry now lands in that inbox.

Then test it yourself: go to mwbperformance.com/contact, send a fake enquiry, and check it arrives.

> Until that link is clicked, the form falls back to opening the visitor's own email app with their details pre-filled — so nothing is silently lost, but it's a worse experience. Do the click.

> ⚠️ Why this matters: on the old Bolt site, enquiries went into a database you had no access to. Every lead was lost. Never launch a form without sending yourself a test through it.

## 3. Your repo & hosting — already done
- **Code:** github.com/micahwb/mwb-performance (public, your account — you're the owner)
- **Live site:** mwbperformance.com, hosted on **Vercel**
- **Deploys are automatic:** anything pushed to the `main` branch is live in about 90 seconds. There's nothing to click.

> The site pre-renders `/blog/...` pages with their own titles and `sitemap.xml` on each build. After launch, add the site to Google Search Console and submit `https://mwbperformance.com/sitemap.xml`.

## 4. Editing the site — three ways, easiest first

### A. Small text changes — no installing anything
Open **github.com/micahwb/mwb-performance** and press the **`.`** key. A full editor opens in your browser. Change a price or a line of copy, then **Source Control** (left sidebar) → type a message → **Commit & Push**. Live in ~90 seconds.

Best for: prices, copy tweaks, fixing a typo.

### B. Cursor — the proper tool for real work
```bash
git clone https://github.com/micahwb/mwb-performance.git
cd mwb-performance
npm install
npm run dev
```
Edit, then **Source Control → Commit → Sync**. You can also just ask Cursor's chat "change the prices on the coaching page" and it'll find the file itself.

Best for: anything visual, adding pages, bigger changes.

### C. Bolt — for trying design ideas
Open: **https://bolt.new/github.com/micahwb/mwb-performance**

To push changes back you must first sign into Bolt with **your own** GitHub account (Bolt → Sign in with GitHub).

Two rules if you use Bolt:
1. **Push to a branch, never `main`.** In the push dialog name a branch like `bolt-edits`. `main` is wired to the live site — a bad push goes public immediately. From a branch you get a preview link to check first, then merge on GitHub.
2. **Check the push dialog targets `micahwb/mwb-performance`.** Bolt will happily create a brand-new repo instead, and then the live site never changes while you think it did.
3. **Don't let Bolt rewrite `package.json`, `vite.config.js`, or `scripts/`.** That's what generates the blog pages for Google. Its preview won't show them — that's normal, not broken.

## 5. (Recommended) your own domain
Buy `mwbperformance.com` (~NZ$20/yr) → **Settings → Pages → Custom domain** → follow the DNS steps. Then update the `canonical` and `og:image` URLs in `index.html`.

## Your brand kit
- **Colours:** Black `#000000` · Warm off-white `#F2EEE4` · Bronze `#7B5D20` (with lighter gold `#C9A14B` for text accents on dark)
- **Font:** Archivo (free, Google Fonts) — headlines 900 uppercase, body 400
- **Logo (chosen):** the Speed-M lockup — live in the nav (`public/logo-lockup.png`), badge as favicon (`public/favicon.png`), source in `brand/2-speed-M-badge.png`. Other concepts kept in `brand/` and the logo rounds folders for merch/social.
- **Programs app:** the site carries an official "Powered by Hevy" badge (Coaching page + footer) — logos in `public/hevy*.svg`.
- **Rule:** black + off-white + ONE bronze accent. Sharp corners everywhere — never add border-radius.

## Legal pages & blog
- `/privacy` and `/terms` are solid NZ-law templates (Privacy Act 2020 / Consumer Guarantees Act aware) — **have a lawyer glance over them once**, and fill the `[EDIT]` payment-provider line in Terms.
- `/blog` has 4 articles written in your voice — edit freely in `src/posts.js`, and add new posts by copying the pattern.
- Beyond the site: run a PAR-Q pre-exercise questionnaire in your Hevy onboarding (legal research says this is best practice for NZ PTs).

## What's in this folder
```
src/                ← the website (9 pages: home, coaching, results, about, blog + 4 posts, contact, privacy, terms + 404)
public/             ← logo, images (micah-coaching.jpg = home, micah-client.jpg = about)
v2-static/          ← simple single-file backup version
AUDIT-REPORT.md     ← audit of the old Bolt site + all research
audit/              ← screenshots + research (kept on disk, not in the repo, so Bolt stays fast)
old-bolt-site/      ← the original Bolt site, extracted (reference)
```
