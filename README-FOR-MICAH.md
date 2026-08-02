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

## 1. Five quick edits before going live
Search the `src/` folder for `[EDIT]`:

| Tag | File | What to change |
|---|---|---|
| `[EDIT-EMAIL]` | `src/components.jsx` | Your real email in `CONFIG.EMAIL`. Check `hello@mwbperformance.com` actually exists first. |
| `[EDIT-FORM]` | `src/components.jsx` | Formspree endpoint — see step 2. |
| `[EDIT-PRICE]` | `src/pages/Coaching.jsx` | The $65/$79/$149 prices are **placeholders** — set your real ones. |
| `[EDIT-QUOTES]` | `src/pages/Home.jsx` + `src/pages/Results.jsx` | Replace example testimonials with real client quotes (with permission). **Never launch with the examples.** |
| `[EDIT]` photos | `public/images/` | Replace `gym_1.jpg` / `gym_2.jpg` with bright photos of you — biggest trust win available. |

## 2. Make the form send enquiries to YOU (2 minutes)
1. formspree.io → sign up free → **New form** → copy the URL (`https://formspree.io/f/xxxx`).
2. In `src/components.jsx`, paste it into `FORM_ENDPOINT: ''`.
3. Until then the form falls back to opening the visitor's email app — it always works.

> ⚠️ This matters: on the old Bolt site, enquiries went into a database you had no access to. Every lead was lost.

## 3. Put it on GitHub — you as sole owner
1. Create a GitHub account → **+ → New repository** → name `mwb-performance` → **Public** → Create (don't tick any "initialize" boxes).
2. In Terminal from this folder:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/mwb-performance.git
   git push -u origin main
   ```
   (Git history is already set up.) Because the repo is under **your** account, you're the sole owner — Henry never needs access.

## 4. Free hosting — automatic
This repo includes a GitHub Action that builds and deploys the site every time you push.
1. In your repo: **Settings → Pages → Source: GitHub Actions**.
2. Push (or click **Actions → Deploy to GitHub Pages → Run workflow**).
3. Live in ~2 minutes at `https://YOUR-USERNAME.github.io/mwb-performance/`.

## 5. (Recommended) your own domain
Buy `mwbperformance.com` (~NZ$20/yr) → **Settings → Pages → Custom domain** → follow the DNS steps. Then update the `canonical` and `og:image` URLs in `index.html`.

## Your brand kit
- **Colours:** Black `#000000` · Warm off-white `#F2EEE4` · Bronze `#7B5D20` (with lighter gold `#C9A14B` for text accents on dark)
- **Font:** Archivo (free, Google Fonts) — headlines 900 uppercase, body 400
- **Logo (chosen):** the Speed-M lockup — live in the nav (`public/logo-lockup.png`), badge as favicon (`public/favicon.png`), source in `brand/2-speed-M-badge.png`. Other concepts kept in `brand/` and the logo rounds folders for merch/social.
- **Programs app:** the site carries an official "Powered by Everfit" badge (Coaching page + footer) — logos in `public/everfit*.svg`.
- **Rule:** black + off-white + ONE bronze accent. Sharp corners everywhere — never add border-radius.

## Legal pages & blog
- `/privacy` and `/terms` are solid NZ-law templates (Privacy Act 2020 / Consumer Guarantees Act aware) — **have a lawyer glance over them once**, and fill the `[EDIT]` payment-provider line in Terms.
- `/blog` has 4 articles written in your voice — edit freely in `src/posts.js`, and add new posts by copying the pattern.
- Beyond the site: run a PAR-Q pre-exercise questionnaire in your Everfit onboarding (legal research says this is best practice for NZ PTs).

## What's in this folder
```
src/                ← the website (9 pages: home, coaching, results, about, blog + 4 posts, contact, privacy, terms + 404)
public/             ← logo, images
v2-static/          ← simple single-file backup version
.github/workflows/  ← auto-deploy to GitHub Pages
AUDIT-REPORT.md     ← audit of the old Bolt site + all research
audit/              ← screenshots, Gemini design audit, research data (reference — delete anytime)
old-bolt-site/      ← the original Bolt site, extracted (reference)
```
