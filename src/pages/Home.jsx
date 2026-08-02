import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Reveal, Stagger, Item, Marquee, CtaBanner, Count } from '../components.jsx'

const Float = ({ className, delay, children }) => (
  <motion.div
    className={`fcard ${className}`}
    initial={{ opacity: 0, y: 34 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  </motion.div>
)

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <span className="hero-badge"><span className="dot" />Now accepting new clients</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Strength for people <span className="accent">starting out.</span>
            </motion.h1>
            <motion.p className="lead"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              1:1 online coaching for beginners — custom resistance-training programs,
              a weekly Zoom check-in and a coach in your DMs. Build muscle, gain strength,
              lose fat. No guesswork, no gym intimidation.
            </motion.p>
            <motion.div className="hero-ctas"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
            >
              <Link className="btn" to="/contact">Book your free intro call</Link>
              <Link className="btn ghost" to="/coaching">See coaching &amp; pricing</Link>
            </motion.div>
            <motion.div className="hero-meta"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            >
              <span><b>NZ-qualified</b> L4 PT</span>
              <span><b>1:1 only</b> — no templates</span>
              <span><b>CHCH</b> based · NZ-wide</span>
            </motion.div>
          </div>

          <div className="stack" aria-hidden="true">
            <Float className="main" delay={0.2}>
              <img src="./images/gym_1.jpg" alt="" />
              <div className="fk">This week</div>
              <div className="fv">Weekly check-in · Zoom</div>
              <div className="fs">Custom program · Week 4 of 12</div>
              <div className="bar-track"><div className="bar-fill" /></div>
            </Float>
            <Float className="widget" delay={0.4}>
              <div className="fk">Focus</div>
              <div className="fv">Hypertrophy + Strength</div>
              <div className="fs">Beginner block · 3 days/wk</div>
            </Float>
            <Float className="counter" delay={0.6}>
              <div className="fk">DM support</div>
              <div className="fv">Form check reviewed ✓</div>
              <div className="fs">"Depth looks way better — add 2.5kg next session."</div>
            </Float>
            <motion.div
              className="toast"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.5, ease: 'easeOut' }}
            >
              <b>New PB —</b> goblet squat 24kg × 10. Week 6.
            </motion.div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* WHO IT'S FOR — light */}
      <section className="light">
        <div className="wrap">
          <Reveal><span className="label">Who this is for</span></Reveal>
          <Reveal><h2>Built for people starting out —<br />not for gym veterans.</h2></Reveal>
          <Stagger className="grid-3">
            <Item className="cell">
              <div className="rule" />
              <h3>"I don't know where to start"</h3>
              <p>You want to lift weights but the gym floor feels intimidating and every program online says something different.</p>
            </Item>
            <Item className="cell">
              <div className="rule" />
              <h3>"I start, then fall off"</h3>
              <p>You've trained before but without accountability it never sticks past week three. A weekly check-in changes that.</p>
            </Item>
            <Item className="cell">
              <div className="rule" />
              <h3>"I want real results"</h3>
              <p>Muscle, strength, fat loss, tone — you want a plan built for your goal, your equipment and your actual schedule.</p>
            </Item>
          </Stagger>
        </div>
      </section>

      {/* HOW IT WORKS — dark */}
      <section>
        <div className="wrap">
          <Reveal><span className="label">How it works</span></Reveal>
          <Reveal><h2>Three steps between you<br />and your first program.</h2></Reveal>
          <Stagger className="grid-3">
            <Item className="cell">
              <span className="idx">01</span>
              <h3>Free intro call</h3>
              <p>A relaxed 20-minute chat about your goals, experience and schedule. An honest recommendation — even if it's not me.</p>
            </Item>
            <Item className="cell">
              <span className="idx">02</span>
              <h3>Your custom program</h3>
              <p>Built around your goal, your equipment and your week — with technique guidance on every single exercise.</p>
            </Item>
            <Item className="cell">
              <span className="idx">03</span>
              <h3>Coaching &amp; accountability</h3>
              <p>Weekly Zoom check-ins to review and adjust, plus DM support between sessions for questions and form checks.</p>
            </Item>
          </Stagger>
        </div>
      </section>

      {/* STATS — light */}
      <section className="light">
        <div className="wrap">
          <Reveal><span className="label">The standard</span></Reveal>
          <Reveal><h2>Coaching, measured.</h2></Reveal>
          <div className="stats">
            <Reveal className="stat"><div className="n"><Count to={1} />:<em>1</em></div><div className="t">Coaching only — never group templates</div></Reveal>
            <Reveal delay={0.08} className="stat"><div className="n"><Count to={7} /><em>d</em></div><div className="t">Coach contact — DMs open every day</div></Reveal>
            <Reveal delay={0.16} className="stat"><div className="n"><Count to={52} /><em>×</em></div><div className="t">Check-ins per year on Zoom</div></Reveal>
            <Reveal delay={0.24} className="stat"><div className="n"><em>$</em><Count to={0} /></div><div className="t">Cost of your first intro call</div></Reveal>
          </div>
        </div>
      </section>

      {/* PROOF teaser — dark */}
      <section>
        <div className="wrap">
          <Reveal><span className="label">Client results</span></Reveal>
          <Reveal><h2>Real people. Real progress.</h2></Reveal>
          <div className="quotes">
            {/* [EDIT-QUOTES] replace with real client quotes before launch */}
            <Reveal>
              <blockquote>
                "Example — replace me: I'd never touched a barbell before. Twelve weeks in I'm
                squatting bodyweight and I actually look forward to the gym."
                <footer><b>Client name</b>Goal · Duration</footer>
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote>
                "Example — replace me: The weekly check-ins kept me honest. Down 6kg and
                stronger than I've ever been."
                <footer><b>Client name</b>Goal · Duration</footer>
              </blockquote>
            </Reveal>
          </div>
          <Reveal>
            <p style={{ marginTop: 28 }}>
              <Link className="btn ghost sm" to="/results">See all results →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
