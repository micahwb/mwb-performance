import { Reveal, Stagger, Item, CtaBanner, CONFIG, usePageMeta } from '../components.jsx'

export default function Results() {
    usePageMeta('Client Results — MWB Performance', 'Real client progress from MWB Performance 1:1 online coaching — plus a realistic 12-week timeline of what beginners can expect.')
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Reveal><span className="label">Client results</span></Reveal>
          <Reveal><h1>Real people. <span className="accent">Real progress.</span></h1></Reveal>
          <Reveal><p className="sub" style={{ marginTop: 20 }}>
            No fake transformations, no rented physiques. Just beginners who showed up,
            followed the plan, and got stronger.
          </p></Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="quotes">
            {/* [EDIT-QUOTES] Replace all example quotes with REAL client words (with permission).
                Never launch with invented testimonials. Delete cards you don't need. */}
            <Reveal>
              <blockquote>
                "Example — replace me: I'd never touched a barbell before. Twelve weeks in I'm
                squatting bodyweight and I actually look forward to the gym."
                <footer><b>Client name</b>Goal · Duration</footer>
              </blockquote>
            </Reveal>
            <Reveal delay={0.08}>
              <blockquote>
                "Example — replace me: The weekly check-ins kept me honest. Down 6kg and
                stronger than I've ever been."
                <footer><b>Client name</b>Goal · Duration</footer>
              </blockquote>
            </Reveal>
            <Reveal delay={0.16}>
              <blockquote>
                "Example — replace me: Micah rebuilt my program around a dodgy knee. Strength
                up every block, zero pain."
                <footer><b>Client name</b>Goal · Duration</footer>
              </blockquote>
            </Reveal>
            <Reveal delay={0.24}>
              <blockquote>
                "Example — replace me: As a total beginner I was terrified of the weights area.
                Now it's my favourite part of the week."
                <footer><b>Client name</b>Goal · Duration</footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW PROGRESS IS MEASURED — dark */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal><span className="label">How progress gets measured</span></Reveal>
          <Reveal><h2>No vibes. Numbers.</h2></Reveal>
          <Stagger className="grid-4">
            <Item className="cell"><span className="idx">01</span><h3>Every set logged</h3><p>Weights and reps in the app, every session — the strength curve doesn't lie.</p></Item>
            <Item className="cell"><span className="idx">02</span><h3>Measurements</h3><p>Waist, hips, arms — monthly. The scale is the least useful number we track.</p></Item>
            <Item className="cell"><span className="idx">03</span><h3>Progress photos</h3><p>Same light, same pose, every four weeks. Private, and only if you want them.</p></Item>
            <Item className="cell"><span className="idx">04</span><h3>PB board</h3><p>Every personal best recorded and celebrated. Beginners set a lot of them.</p></Item>
          </Stagger>
        </div>
      </section>

      {/* WHAT TO EXPECT — light */}
      <section className="light">
        <div className="wrap">
          <Reveal><span className="label">What to expect</span></Reveal>
          <Reveal><h2>A realistic timeline —<br />no miracle promises.</h2></Reveal>
          <Stagger className="grid-3">
            <Item className="cell">
              <span className="idx">W 1–4</span>
              <h3>Foundations</h3>
              <p>Technique locked in, routine established. Lifts start climbing fast — beginner gains are real.</p>
            </Item>
            <Item className="cell">
              <span className="idx">W 4–8</span>
              <h3>Momentum</h3>
              <p>Noticeably stronger. Training feels natural, confidence in the gym replaces second-guessing.</p>
            </Item>
            <Item className="cell">
              <span className="idx">W 8–12</span>
              <h3>Visible change</h3>
              <p>Muscle shape, strength PBs, clothes fitting differently. The habit is now part of your life.</p>
            </Item>
          </Stagger>
        </div>
      </section>

      {/* INSTAGRAM — dark */}
      <section>
        <div className="wrap">
          <Reveal><span className="label">Day to day</span></Reveal>
          <Reveal><h2>Client wins, training clips<br />and form tips — daily.</h2></Reveal>
          <Reveal>
            <p style={{ marginTop: 28 }}>
              <a className="btn ghost" href={CONFIG.INSTAGRAM} target="_blank" rel="noopener noreferrer">
                Follow @mwbcoaching →
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner title="Your turn." sub="Every result above started with one free call." />
    </>
  )
}
