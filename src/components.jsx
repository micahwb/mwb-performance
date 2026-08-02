import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useInView } from 'framer-motion'

/* ── Config Micah edits ──────────────────────────────────────── */
export const CONFIG = {
  /* [EDIT-FORM] paste your Formspree endpoint, e.g. "https://formspree.io/f/abcdwxyz" */
  FORM_ENDPOINT: '',
  /* [EDIT-EMAIL] your real email */
  EMAIL: 'hello@mwbperformance.co',
  INSTAGRAM: 'https://instagram.com/mwbcoaching',
  LINKEDIN: 'https://www.linkedin.com/in/micah-barker-4b527b338/',
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

/* ── Nav ─────────────────────────────────────────────────────── */
const LINKS = [
  { to: '/coaching', label: 'Coaching' },
  { to: '/results', label: 'Results' },
  { to: '/about', label: 'About' },
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
            <img src="./mark.svg" alt="" width="34" height="34" />
            <span><b>MWB.</b> Performance</span>
          </Link>
          <ul className="nav-links">
            {LINKS.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {l.label}
                </NavLink>
              </li>
            ))}
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
            <img src="./mark.svg" alt="" width="34" height="34" />
            <span><b>MWB.</b> Performance</span>
          </Link>
          <p style={{ marginTop: 18, maxWidth: 380 }}>
            1:1 online strength coaching that meets you where you are. Custom programs,
            weekly Zoom check-ins and real accountability — train from anywhere.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/coaching">Coaching &amp; pricing</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/about">About Micah</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
      <div className="foot-bottom">
        <span>© 2026 MWB Performance</span>
        <span>Built for people who show up</span>
      </div>
    </div>
  </footer>
)
