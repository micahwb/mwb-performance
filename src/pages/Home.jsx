import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Reveal, Stagger, Item, Marquee, CtaBanner, Count, usePageMeta, Everfit } from '../components.jsx'

const Float = ({ className, delay, children }) => (
  <motion.div
    className={`fcard ${className}`}
    initial={{ opacity: 0, y: 34 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  </motion.div>
)

export default function Home() {
  usePageMeta('MWB Performance — Online Strength Coaching for Beginners | Christchurch NZ', '1:1 online strength coaching for beginners with Micah Barker. Custom programs, weekly Zoom check-ins, daily DM support. Christchurch, NZ.')
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <span className="hero-badge"><span className="dot" />Now accepting new clients</span>
            </motion.div>
            <motion.h1 aria-label="Strength for people starting out." initial="off" animate="on" transition={{ staggerChildren: 0.09, delayChildren: 0.05 }}>
              {['Strength', 'for', 'people'].map(w => (
                <motion.span key={w} className="hw" variants={{ off: { opacity: 0, y: 34 }, on: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}>{w} </motion.span>
              ))}
              <br />
              {['starting', 'out.'].map(w => (
                <motion.span key={w} className="hw accent" variants={{ off: { opacity: 0, y: 34 }, on: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}>{w} </motion.span>
              ))}
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
              <Link className="btn ghost" to="/coaching">Explore the coaching</Link>
            </motion.div>
            <motion.div className="hero-meta"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            >
              <span><b>NZ-qualified</b> L4 PT</span>
              <span><b>1:1 only</b> — no templates</span>
              <span><b>CHCH</b> based · NZ-wide</span>
            </motion.div>
          </div>

          <div className="collage" aria-hidden="true">
            <Float className="c-main" delay={0.2}>
              <img src="./images/gym_2.jpg" alt="" />
              <div className="fk">This week</div>
              <div className="fv">Weekly check-in · Zoom</div>
              <div className="fs">Custom program · Week 4 of 12</div>
              <div className="bar-track"><div className="bar-fill" /></div>
            </Float>
            <Float className="c-widget" delay={0.4}>
              <div className="fk">Focus</div>
              <div className="fv">Hypertrophy + Strength</div>
              <div className="fs">Beginner block · 3 days/wk</div>
            </Float>
            <Float className="c-dm" delay={0.6}>
              <div className="fk">DM support</div>
              <div className="fv">Form check reviewed ✓</div>
              <div className="fs">"Depth looks way better — add 2.5kg next session."</div>
            </Float>
            <motion.div
              className="toast c-toast"
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
          <Reveal><span className="label">01 — Who this is for</span></Reveal>
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
          <Reveal><span className="label">02 — How it works</span></Reveal>
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

      {/* COACHING APP — dark */}
      <section className="app-section">
        <div className="wrap app-grid">
          <div>
            <Reveal><span className="label">03 — Your coaching app</span></Reveal>
            <Reveal><h2>Your whole program,<br />in your pocket.</h2></Reveal>
            <Reveal><p className="sub" style={{ margin: '18px 0 34px' }}>
              Every session, exercise video, logged set and coach conversation lives in the
              Everfit app — so the plan is always with you, and so am I.
            </p></Reveal>
            <Stagger className="app-feats">
              <Item className="feat"><b>Full program + video demos</b><span>Every exercise has a technique video. No guessing on the gym floor.</span></Item>
              <Item className="feat"><b>Log every set</b><span>Weights, reps and PBs tracked — progress you can actually see.</span></Item>
              <Item className="feat"><b>Check-in notes</b><span>Weekly reviews written into your plan, so nothing gets lost.</span></Item>
              <Item className="feat"><b>Coach chat</b><span>Questions and form checks straight to me, inside the app.</span></Item>
            </Stagger>
            <Reveal><Everfit /></Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="phone" aria-hidden="true">
              <div className="ph-top"><i />MWB · Week 4 · Day 2</div>
              <div className="ph-head">Lower body — strength</div>
              <div className="ph-row done"><span>Goblet squat</span><span>3 × 8 · 24kg ✓</span></div>
              <div className="ph-row done"><span>Romanian deadlift</span><span>3 × 10 · 40kg ✓</span></div>
              <div className="ph-row"><span>Leg press</span><span>3 × 12 · 90kg</span></div>
              <div className="ph-row"><span>Seated row</span><span>3 × 10 · 45kg</span></div>
              <div className="ph-bar"><div className="ph-fill" /><span>Session 2 of 4 done</span></div>
              <div className="ph-chat">
                <div className="ph-msg coach"><b>Micah</b>Depth looks way better — add 2.5kg next session.</div>
                <div className="ph-msg you">On it 💪</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS — light */}
      <section className="light">
        <div className="wrap">
          <Reveal><span className="label">04 — The standard</span></Reveal>
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
          <Reveal><span className="label">05 — Client results</span></Reveal>
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

      {/* RISK REVERSAL — light */}
      <section className="light">
        <div className="wrap guarantee">
          <div>
            <Reveal><span className="label">06 — The MWB promise</span></Reveal>
            <Reveal><h2>If you show up,<br />I make it work.</h2></Reveal>
          </div>
          <Stagger className="grid-3" >
            <Item className="cell">
              <div className="rule" />
              <h3>Free intro call</h3>
              <p>20 minutes, zero pressure — and an honest recommendation even if it's not me.</p>
            </Item>
            <Item className="cell">
              <div className="rule" />
              <h3>No lock-in, ever</h3>
              <p>Week to week. Pause or cancel anytime. If coaching isn't delivering, you shouldn't be paying for it.</p>
            </Item>
            <Item className="cell">
              <div className="rule" />
              <h3>First week guarantee</h3>
              {/* [EDIT] confirm this guarantee wording with Micah before launch */}
              <p>If your first coached week isn't the clearest training you've ever done, it's free. Simple.</p>
            </Item>
          </Stagger>
        </div>
      </section>

      {/* FREE GUIDE strip — dark */}
      <section className="guide-strip">
        <div className="wrap cta-inner">
          <div>
            <span className="label">Not ready to talk to a coach?</span>
            <h3 style={{ fontSize: 'clamp(1.2rem,2.4vw,1.6rem)' }}>Start with the free guide: your first four weeks in the gym.</h3>
          </div>
          <Link className="btn" to="/blog/start-lifting-when-the-gym-scares-you">Read the free guide →</Link>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
