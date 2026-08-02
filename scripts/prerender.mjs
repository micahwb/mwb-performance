// Prerender: per-route HTML shells with unique title/meta/canonical/og + sitemap
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { POSTS } from '../src/posts.js'
const DOMAIN = 'https://mwbperformance.com'
const base = readFileSync('dist/index.html', 'utf8')
const esc = s => s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;')
const ROUTES = [
  { path: '/coaching', title: 'Coaching — MWB Performance', desc: '1:1 coaching with Micah Barker: in person in Christchurch or online NZ-wide. Custom programs, weekly check-ins, DM support. No lock-in.' },
  { path: '/results', title: 'Client Results — MWB Performance', desc: 'Real client progress from MWB Performance 1:1 coaching — plus a realistic 12-week timeline of what beginners can expect.' },
  { path: '/about', title: 'About Micah Barker — MWB Performance', desc: 'Meet Micah Barker: Christchurch personal trainer specialising in beginner resistance training for hypertrophy, strength and fat loss.' },
  { path: '/contact', title: 'Book Your Free Intro Call — MWB Performance', desc: 'Book a free, no-pressure 20-minute intro call with coach Micah Barker — in person in Christchurch or online.' },
  { path: '/blog', title: "Coach's Notes — MWB Performance Blog", desc: 'Straight-talking strength training articles for beginners from coach Micah Barker: gym confidence, muscle-building timelines, programs that stick.' },
  { path: '/privacy', title: 'Privacy Policy — MWB Performance', desc: 'How MWB Performance handles your personal information under the NZ Privacy Act 2020.' },
  { path: '/terms', title: 'Terms & Conditions — MWB Performance', desc: 'Coaching terms, health disclaimer, payments and consumer rights for MWB Performance.' },
  { path: '/personal-trainer-christchurch', title: 'Personal Trainer Christchurch — MWB Performance | Micah Barker', desc: 'Looking for a personal trainer in Christchurch? Micah Barker coaches beginners 1:1 — in the gym or online. Free intro call, no lock-in contracts.',
    ld: { '@context': 'https://schema.org', '@graph': [
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'Where in Christchurch do you train clients?', acceptedAnswer: { '@type': 'Answer', text: 'Micah trains clients throughout Christchurch — gym location and times are locked in on your free intro call.' } },
        { '@type': 'Question', name: 'How much does a personal trainer in Christchurch cost?', acceptedAnswer: { '@type': 'Answer', text: 'Rates in Christchurch typically run $60–$120 per session. MWB coaching is priced on your goals and format, discussed on a free intro call, with no lock-in contracts.' } },
        { '@type': 'Question', name: 'Do you only train beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Beginners are the specialty, but anyone wanting structured, honest coaching — including returners and lifters at a plateau — is a good fit.' } },
        { '@type': 'Question', name: 'Can I mix in-person and online coaching?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — many clients start in person to build technique and confidence, then continue online. The program follows you either way.' } } ] },
      { '@type': 'Service', name: 'Personal Training — Christchurch', serviceType: 'Personal training and online strength coaching',
        provider: { '@type': 'Person', name: 'Micah Barker' }, areaServed: { '@type': 'City', name: 'Christchurch' },
        url: DOMAIN + '/personal-trainer-christchurch' } ] } },
  ...POSTS.map(p => ({ path: `/blog/${p.slug}`, title: `${p.title} — MWB Performance`, desc: p.excerpt, og: DOMAIN + p.image,
    ld: { '@context': 'https://schema.org', '@type': 'Article', headline: p.title, description: p.excerpt,
      image: DOMAIN + p.image, datePublished: p.date, url: `${DOMAIN}/blog/${p.slug}`,
      author: { '@type': 'Person', name: 'Micah Barker', url: DOMAIN + '/about' },
      publisher: { '@type': 'Organization', name: 'MWB Performance' } } })),
]
let html
for (const r of ROUTES) {
  html = base
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(r.desc)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${DOMAIN}${r.path}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.desc)}$2`)
  if (r.og) html = html.replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${r.og}$2`)
  if (r.ld) html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(r.ld)}</script></head>`)
  mkdirSync(`dist${r.path}`, { recursive: true })
  writeFileSync(`dist${r.path}/index.html`, html)
}
const urls = ['/', ...ROUTES.map(r => r.path)]
writeFileSync('dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${DOMAIN}${u}</loc></url>`).join('\n') + '\n</urlset>\n')
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${DOMAIN}/sitemap.xml\n`)
console.log(`prerendered ${ROUTES.length} routes + sitemap`)
