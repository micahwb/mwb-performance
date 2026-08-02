# MWB Performance — your website, ready to own 💪

Hey Micah — this folder is your complete website. No Bolt, no lock-in: it's one HTML file you fully own. Here's everything, step by step.

## 0. Preview it right now
Double-click `index.html` — it opens in your browser and works completely offline.

## 1. Four quick edits before going live
Open `index.html` in any text editor (TextEdit works, VS Code is nicer) and search for `[EDIT]`:

| Tag | What to change |
|---|---|
| `[EDIT-EMAIL]` | Your real email address (appears 3 times). Check `hello@mwbperformance.co` actually exists — if not, use your normal email for now. |
| `[EDIT-PRICE]` | The pricing card says "From $60/week" as a placeholder — put your real price. |
| `[EDIT-QUOTES]` | Two example testimonials are clearly marked "replace me". Swap in real client quotes (ask their permission) or delete the section until you have some. **Don't launch with the examples in place.** |
| `[EDIT-FORM]` | See step 2 below. |

## 2. Make the form send enquiries to YOU (2 minutes)
Right now the form falls back to opening the visitor's email app — that works, but a proper endpoint is smoother:
1. Go to **formspree.io** → sign up free → **New form** → it gives you a URL like `https://formspree.io/f/abcdwxyz`.
2. In `index.html`, find `const FORM_ENDPOINT = "";` and paste your URL between the quotes.
3. Done — every enquiry lands in your email inbox.

> ⚠️ Important: on the old Bolt site, form submissions went into a database you had no access to. That's the main reason this rebuild exists.

## 3. Put it on GitHub — you as sole owner
1. Create a GitHub account (github.com) if you don't have one.
2. Click **+ → New repository** → name it `mwb-performance` → **Private or Public** (Public needed for free GitHub Pages) → Create.
3. On the repo page, choose **uploading an existing file** and drag everything in this folder in (or, in Terminal from this folder):
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/mwb-performance.git
   git push -u origin main
   ```
   (Git history is already set up in this folder.)

Because the repo is created under **your** account, you are the sole owner from day one — Henry never needs access.

## 4. Free hosting with GitHub Pages
1. In your repo: **Settings → Pages**.
2. Under "Build and deployment", Source = **Deploy from a branch**, Branch = **main**, folder = **/ (root)** → Save.
3. In ~1 minute your site is live at `https://YOUR-USERNAME.github.io/mwb-performance/`.

## 5. (Recommended) your own domain
Buy `mwbperformance.co.nz` (~NZ$20/yr from any NZ registrar), then in **Settings → Pages → Custom domain** enter it and follow the DNS instructions. Also update the `canonical` and `og:image` URLs near the top of `index.html` to your domain.

## 6. Level it up over time
- Replace `images/gym_1.jpg` / `gym_2.jpg` with bright, friendly photos of you coaching — biggest trust win available.
- Collect 2–3 client quotes for the Results section.
- Read `AUDIT-REPORT.md` for the full audit of the old site and the research behind this rebuild.

## What's in this folder
```
index.html          ← your entire website
images/             ← site photos (replace with your own)
README-FOR-MICAH.md ← this file
AUDIT-REPORT.md     ← audit of the old Bolt site + research findings
old-bolt-site/      ← the original Bolt site, extracted (reference only)
audit/              ← screenshots + raw research data (reference only)
```
The `old-bolt-site/` and `audit/` folders are just reference — you can delete them any time.
