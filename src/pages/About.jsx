import { Reveal, CtaBanner, usePageMeta } from '../components.jsx'

export default function About() {
    usePageMeta('About Micah Barker — MWB Performance', 'Meet Micah Barker: Christchurch-based L4 personal trainer specialising in beginner resistance training for hypertrophy, strength and fat loss.')
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Reveal><span className="label">About the coach</span></Reveal>
          <Reveal><h1>Hey, I'm Micah. I bring <span className="accent">confidence to beginners.</span></h1></Reveal>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <Reveal>
            {/* [EDIT] replace with a friendly, well-lit photo of Micah */}
            <div className="duotone">
              <img src="./images/gym_1.jpg" alt="Micah Barker, MWB Performance coach" />
              <span className="tag">Micah Barker · Coach</span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="sub" style={{ marginBottom: 18 }}>
                I'm a Christchurch-based coach specialising in resistance training for
                hypertrophy, strength and fat loss. My whole focus is helping beginners
                build muscle, tone up, and feel genuinely confident in the gym.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="sub" style={{ marginBottom: 18 }}>
                I hold my NZ Certificate in Health &amp; Fitness (Personal Trainer, Level&nbsp;4)
                and I'm currently completing my Advanced Health &amp; Fitness Coach (Level&nbsp;5).
                Everything I coach is built on proper education and real-world results — not guesswork.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="sub">
                All coaching is delivered 1:1 online, so you train at your own gym, on your
                schedule, with the accountability and guidance you need to actually progress.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="creds">
                <div className="cred"><b>Level 4</b><span>NZ Cert. Health &amp; Fitness — Personal Trainer</span></div>
                <div className="cred"><b>Level 5</b><span>Advanced H&amp;F Coach — in progress</span></div>
                <div className="cred"><b>1:1 only</b><span>Fully online, NZ-wide</span></div>
                <div className="cred"><b>CHCH</b><span>Based in Christchurch, NZ</span></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* JOURNEY — dark */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal><span className="label">The path here</span></Reveal>
          <Stagger className="journey">
            <Item className="jstep"><b>The first rep</b><p>Started as the beginner I now coach — unsure, self-taught, learning the hard way what good guidance would have shortcut.</p></Item>
            <Item className="jstep"><b>Level 4 qualified</b><p>NZ Certificate in Health &amp; Fitness (Personal Trainer) — the foundation done properly: anatomy, programming, safe progression.</p></Item>
            <Item className="jstep"><b>Level 5 in progress</b><p>Advanced Health &amp; Fitness Coach — because "qualified" is a starting line, not a finish line.</p></Item>
            <Item className="jstep hot"><b>MWB Performance</b><p>1:1 online coaching built specifically for beginners — the coach I needed on day one.</p></Item>
          </Stagger>
        </div>
      </section>

      {/* PULL QUOTE — dark editorial moment */}
      <section className="pull-quote">
        <div className="wrap">
          <Reveal>
            <p className="pq">"Nobody is born confident in a gym.<br /><span className="accent">Confidence is a rep you practise</span> — and my job is to count them with you."</p>
            <p className="pq-by">— Micah Barker, MWB Performance</p>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY — light */}
      <section className="light">
        <div className="wrap">
          <Reveal><span className="label">Coaching philosophy</span></Reveal>
          <Reveal><h2>Simple beats clever.<br />Consistent beats intense.</h2></Reveal>
          <div className="grid-3">
            <Reveal className="cell">
              <div className="rule" />
              <h3>Technique first</h3>
              <p>You'll learn to lift properly before we chase numbers. Confidence comes from competence.</p>
            </Reveal>
            <Reveal delay={0.08} className="cell">
              <div className="rule" />
              <h3>Progressive overload</h3>
              <p>Small, trackable jumps every week. That's how muscle and strength are actually built.</p>
            </Reveal>
            <Reveal delay={0.16} className="cell">
              <div className="rule" />
              <h3>Life-proof plans</h3>
              <p>Your program bends around your week — shift work, kids, travel — so training never falls over.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner title="Train with me." sub="Tell me your goal — I'll tell you honestly if I can help." />
    </>
  )
}
