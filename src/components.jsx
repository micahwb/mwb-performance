import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useInView } from 'framer-motion'

/* ── Config Micah edits ──────────────────────────────────────── */
export const CONFIG = {
  /* [EDIT-FORM] paste your Formspree endpoint, e.g. "https://formspree.io/f/abcdwxyz" */
  FORM_ENDPOINT: '',
  /* [EDIT-EMAIL] your real email */
  EMAIL: 'hello@mwbperformance.co',
  INSTAGRAM: 'https://www.instagram.com/mwbcoaching/',
  LINKEDIN: 'https://www.linkedin.com/in/micah-barker-4b527b338/',
}

/* ── Per-page meta (SEO) ─────────────────────────────────────── */
export const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title
    let m = document.querySelector('meta[name="description"]')
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m) }
    if (description) m.content = description
  }, [title, description])
}

/* ── Motion helpers ──────────────────────────────────────────── */
export const Reveal = ({ children, delay = 0, y = 26, ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    {...rest}
  >
    {children}
  </motion.div>
)

export const Stagger = ({ children, className }) => (
  <motion.div
    className={className}
    initial="off"
    whileInView="on"
    viewport={{ once: true, amount: 0.15 }}
    transition={{ staggerChildren: 0.1 }}
  >
    {children}
  </motion.div>
)

export const Item = ({ children, className, style }) => (
  <motion.div
    className={className}
    style={style}
    variants={{
      off: { opacity: 0, y: 26 },
      on: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    }}
  >
    {children}
  </motion.div>
)

/* Count-up number on scroll entry */
export const Count = ({ to, suffix = '', prefix = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const t0 = performance.now()
    const dur = 1600
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to])
  return <span ref={ref}>{prefix}{n}{suffix}</span>
}

/* ── Instagram icon ──────────────────────────────────────────── */
export const InstaIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.2" />
    <circle cx="12" cy="12" r="4.4" />
    <circle cx="17.6" cy="6.4" r="1.15" fill="currentColor" stroke="none" />
  </svg>
)

/* ── Nav ─────────────────────────────────────────────────────── */
const LINKS = [
  { to: '/coaching', label: 'Coaching' },
  { to: '/results', label: 'Results' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export const Nav = () => {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  useEffect(() => { setOpen(false) }, [loc.pathname])
  return (
    <>
      <div className="nav-shell">
        <div className="wrap nav">
          <Link className="logo" to="/" aria-label="MWB Performance — home">
            <img className="lockup" src="./logo-lockup.png" alt="MWB Performance" />
          </Link>
          <ul className="nav-links">
            {LINKS.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a className="ig-link" href={CONFIG.INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="MWB on Instagram — @mwbcoaching">
                <InstaIcon />
              </a>
            </li>
            <li><Link className="btn sm" to="/contact">Free intro call</Link></li>
          </ul>
          <button
            className={`burger${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            {LINKS.map(l => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label}
              </NavLink>
            ))}
            <a className="ig-link big" href={CONFIG.INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="MWB on Instagram — @mwbcoaching">
              <InstaIcon size={30} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

/* ── Marquee ─────────────────────────────────────────────────── */
export const Marquee = () => {
  const items = ['Build muscle', 'Gain strength', 'Lose fat', 'Train anywhere', 'Beginner friendly', '1:1 coaching']
  const strip = items.map((s, i) => <span key={i}>{s} <i>◆</i></span>)
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{strip}{strip}</div>
    </div>
  )
}

/* ── Powered by Everfit badge ────────────────────────────────── */
export const Everfit = ({ note }) => (
  <div className="everfit">
    <span className="pb">Powered by</span>
    <a href="https://everfit.io" target="_blank" rel="noopener noreferrer" aria-label="Everfit coaching app">
      <img src="./everfit-white.svg" alt="Everfit" height="22" loading="lazy" />
    </a>
    {note && <span className="note">{note}</span>}
  </div>
)

/* ── CTA banner ──────────────────────────────────────────────── */
export const CtaBanner = ({ title = 'Ready to get strong?', sub = 'Free 20-minute intro call. No pressure, no lock-in.' }) => (
  <section className="cta-banner">
    <div className="wrap cta-inner">
      <div>
        <h2>{title}</h2>
        <p style={{ marginTop: 10, fontWeight: 600 }}>{sub}</p>
      </div>
      <Link className="btn" to="/contact">Book your free intro call</Link>
    </div>
  </section>
)

/* ── Footer ──────────────────────────────────────────────────── */
export const Footer = () => (
  <footer className="site">
    <div className="wrap">
      <div className="foot">
        <div>
          <Link className="logo" to="/">
            <img className="lockup" src="./logo-lockup.png" alt="MWB Performance" />
          </Link>
          <p style={{ marginTop: 18, maxWidth: 380 }}>
            1:1 strength coaching that meets you where you are — in person in Christchurch
            or online NZ-wide. Custom programs, weekly check-ins, real accountability.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/coaching">Coaching</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/about">About Micah</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy policy</Link></li>
            <li><Link to="/terms">Terms &amp; conditions</Link></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href={`mailto:${CONFIG.EMAIL}`}>{CONFIG.EMAIL}</a></li>
            <li><a href={CONFIG.INSTAGRAM} target="_blank" rel="noopener noreferrer">@mwbcoaching</a></li>
            <li><a href={CONFIG.LINKEDIN} target="_blank" rel="noopener noreferrer">Micah Barker on LinkedIn</a></li>
            <li>Christchurch, New Zealand</li>
          </ul>
        </div>
      </div>
      <div className="foot-mark" aria-hidden="true">MWB PERFORMANCE</div>
      <div className="foot-bottom">
        <span>© 2026 MWB Performance</span>
        <Everfit />
        <span>Built for people who show up</span>
      </div>
    </div>
  </footer>
)
