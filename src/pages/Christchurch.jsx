import { Link } from 'react-router-dom'
import { Reveal, Stagger, Item, CtaBanner, usePageMeta, CONFIG } from '../components.jsx'

export default function Christchurch() {
  usePageMeta(
    'Personal Trainer Christchurch — MWB Performance | Micah Barker',
    'Looking for a personal trainer in Christchurch? Micah Barker coaches beginners 1:1 — in the gym or online. Free intro call, no lock-in contracts.'
  )
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Reveal><span className="label">Christchurch</span></Reveal>
          <Reveal><h1>Personal trainer in <span className="accent">Christchurch.</span></h1></Reveal>
          <Reveal><p className="sub" style={{ marginTop: 20 }}>
            I'm Micah Barker — a Christchurch-based personal trainer who specialises in
            getting beginners strong. Train 1:1 with me in the gym, or take the same
            coaching fully online. Either way, it starts with a free intro call.
          </p></Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal><span className="label">Why train with me</span></Reveal>
          <Reveal><h2>Built for Christchurch beginners —<br />not bodybuilders.</h2></Reveal>
          <Stagger className="grid-3">
            <Item className="cell">
              <span className="idx">01</span>
              <h3>Local &amp; in person</h3>
              <p>Real 1:1 sessions throughout Christchurch — hands-on technique coaching, immediate feedback, and a training plan built around your week, not a template.</p>
            </Item>
            <Item className="cell">
              <span className="idx">02</span>
              <h3>Beginner specialist</h3>
              <p>My whole practice is people starting out: first-time lifters, returners after years off, and anyone who finds gyms intimidating. That's the room I read best.</p>
            </Item>
            <Item className="cell">
              <span className="idx">03</span>
              <h3>Online when life moves</h3>
              <p>Travelling, shift work, moving suburbs? Your program lives in the Everfit app, so coaching continues anywhere in NZ without missing a block.</p>
            </Item>
          </Stagger>
        </div>
      </section>

      {/* LOCAL FAQ — light */}
      <section className="light">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal><span className="label">Christchurch FAQ</span></Reveal>
          <Reveal><h2>Common questions from local clients.</h2></Reveal>
          <Reveal>
            <div style={{ marginTop: 40 }}>
              <details>
                <summary>Where in Christchurch do you train clients?</summary>
                <div className="a">I train clients throughout Christchurch — we'll lock in the gym location and times that suit you best on your intro call. {/* [EDIT] name Micah's gym + suburbs served */}</div>
              </details>
              <details>
                <summary>How much does a personal trainer in Christchurch cost?</summary>
                <div className="a">Rates in Christchurch typically run $60–$120 per session. My coaching is priced on your goals and format (in-person or online) — we'll talk numbers on your free intro call, and there are no lock-in contracts either way.</div>
              </details>
              <details>
                <summary>Do you only train beginners?</summary>
                <div className="a">Beginners are my specialty, but the real requirement is that you want structured, honest coaching. If you're returning after a break or stuck at a plateau, we'll likely work well together.</div>
              </details>
              <details>
                <summary>Can I mix in-person and online coaching?</summary>
                <div className="a">Yes — plenty of clients start in person to build technique and confidence, then move online once they're comfortable. The program follows you either way.</div>
              </details>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section>
        <div className="wrap">
          <Reveal><span className="label">Keep reading</span></Reveal>
          <Reveal><h2>Start with the guides.</h2></Reveal>
          <Reveal>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 30 }}>
              <Link className="btn ghost sm" to="/blog/start-lifting-when-the-gym-scares-you">Beating gym anxiety →</Link>
              <Link className="btn ghost sm" to="/blog/first-gym-session">Your first gym session →</Link>
              <Link className="btn ghost sm" to="/blog/online-coaching-vs-pt">Online coaching vs in-person PT →</Link>
              <Link className="btn ghost sm" to="/coaching">See what coaching includes →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner title="Train with a Christchurch coach." sub="Free 20-minute intro call — in person or online." />
    </>
  )
}
