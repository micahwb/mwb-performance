import { Link } from 'react-router-dom'
import { Reveal, Stagger, Item, CtaBanner, Everfit, usePageMeta } from '../components.jsx'

export default function Coaching() {
    usePageMeta('Coaching — MWB Performance', '1:1 coaching with Micah Barker: in person in Christchurch or online NZ-wide. Custom programs, weekly check-ins, DM support. No lock-in.')
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Reveal><span className="label">Coaching &amp; pricing</span></Reveal>
          <Reveal><h1>Everything you need to progress. <span className="accent">Nothing you don't.</span></h1></Reveal>
          <Reveal><p className="sub page-sub" style={{ marginTop: 20 }}>
            1:1 coaching built around your pace and your life — train with me in person
            in Christchurch, or fully online from any gym in New Zealand. Specialising in
            resistance training for hypertrophy, strength and fat loss.
          </p></Reveal>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section>
        <div className="wrap">
          <Reveal><span className="label">What's included</span></Reveal>
          <Stagger className="grid-4">
            <Item className="cell">
              <span className="idx">A</span>
              <h3>Custom gym program</h3>
              <p>Built for your goal, equipment and schedule — updated as you progress, never a recycled template.</p>
            </Item>
            <Item className="cell">
              <span className="idx">B</span>
              <h3>Weekly Zoom check-in</h3>
              <p>A dedicated video call every week to review training, troubleshoot and plan the week ahead.</p>
            </Item>
            <Item className="cell">
              <span className="idx">C</span>
              <h3>DM support, every day</h3>
              <p>Form checks, questions and motivation between sessions — you're never training alone.</p>
            </Item>
            <Item className="cell">
              <span className="idx">D</span>
              <h3>Technique coaching</h3>
              <p>Video feedback on your lifts so you build strength safely from day one.</p>
            </Item>
          </Stagger>
          <Reveal>
            <Everfit note="Your program lives in the Everfit coaching app — workouts, exercise videos and progress tracking, all in your pocket." />
          </Reveal>
        </div>
      </section>

      {/* TWO WAYS — light */}
      <section className="light">
        <div className="wrap">
          <Reveal><span className="label">Two ways to train</span></Reveal>
          <Reveal><h2>In the gym with me,<br />or coached from anywhere.</h2></Reveal>
          <Stagger className="grid-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <Item className="cell">
              <div className="rule" />
              <h3>In-person · Christchurch</h3>
              <p>Train 1:1 with me in the gym — hands-on technique coaching, immediate feedback, sessions built around your goals. Ideal if you want someone right there for every rep.</p>
            </Item>
            <Item className="cell">
              <div className="rule" />
              <h3>Online · NZ-wide</h3>
              <p>Your custom program in the Everfit app, weekly Zoom check-ins and DM support every day. The same coaching brain, at your own gym, on your schedule.</p>
            </Item>
          </Stagger>
          <Reveal>
            <div className="offer-card">
              <div className="offer-head">
                <div>
                  <div className="tier">1:1 Coaching — In-Person or Online</div>
                  <p className="offer-sub">In person in Christchurch or online NZ-wide — fully personalised, month to month, no lock-in. Investment discussed on your free intro call, so the plan fits your goals before we ever talk numbers.</p>
                </div>
                <Link className="btn" to="/contact">Book your free intro call</Link>
              </div>
              <details className="offer-more">
                <summary>See everything that's included</summary>
                <div className="offer-detail">
                  <ul>
                    <li>Custom gym program, rebuilt every training block</li>
                    <li>Weekly 1:1 Zoom check-in — review, adjust, plan</li>
                    <li>DM support 7 days — questions, wins, wobbles</li>
                    <li>Form-check video reviews with same-day feedback</li>
                  </ul>
                  <ul>
                    <li>Everfit coaching app — program, videos, logging</li>
                    <li>Progress tracking: lifts, measurements, photos (opt-in)</li>
                    <li>Beginner-first technique coaching from day one</li>
                    <li>First-week guarantee + cancel anytime</li>
                  </ul>
                </div>
              </details>
            </div>
          </Reveal>
          <Reveal><p className="sub" style={{ marginTop: 26, fontSize: '0.85rem' }}>
            First intro call is always free. Honest recommendation — even if it's not me.
          </p></Reveal>
        </div>
      </section>

      {/* WEEK INSIDE — dark */}
      <section>
        <div className="wrap">
          <Reveal><span className="label">A week inside coaching</span></Reveal>
          <Reveal><h2>What working together<br />actually looks like.</h2></Reveal>
          <Stagger className="week-grid">
            <Item className="wday"><b>Mon</b><i>Session 1</i><p>Lower body. Log every set in the app — I see it live.</p></Item>
            <Item className="wday"><b>Tue</b><i>Rest</i><p>Recovery day. Steps + protein target, nothing else.</p></Item>
            <Item className="wday"><b>Wed</b><i>Session 2</i><p>Upper body. Filmed a set? Send it — form check same day.</p></Item>
            <Item className="wday"><b>Thu</b><i>DM check</i><p>Quick pulse: energy, sleep, any niggles before session 3.</p></Item>
            <Item className="wday"><b>Fri</b><i>Session 3</i><p>Full body. Push for the small PBs the plan lined up.</p></Item>
            <Item className="wday"><b>Sat</b><i>Free</i><p>Life. The plan bends around it, not the other way.</p></Item>
            <Item className="wday hot"><b>Sun</b><i>Zoom check-in</i><p>20 minutes together: review the week, adjust the block, set next week's targets.</p></Item>
          </Stagger>
        </div>
      </section>

      {/* COMPARISON — dark */}
      <section>
        <div className="wrap">
          <Reveal><span className="label">How it compares</span></Reveal>
          <Reveal><h2>1:1 online coaching vs the alternatives.</h2></Reveal>
          <Reveal>
            <div className="compare-scroll">
              <table className="compare">
                <thead>
                  <tr>
                    <th></th>
                    <th className="me">MWB 1:1 Coaching</th>
                    <th>Big-box gym PT</th>
                    <th>Generic app plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Program built for you</td><td className="me yes">Every block</td><td>Sometimes</td><td>✗ Template</td></tr>
                  <tr><td>Weekly 1:1 check-in</td><td className="me yes">Zoom, every week</td><td>✓ In session</td><td>✗</td></tr>
                  <tr><td>Coach in your DMs</td><td className="me yes">7 days</td><td>✗</td><td>✗</td></tr>
                  <tr><td>Form-check videos</td><td className="me yes">Included</td><td>In session only</td><td>✗</td></tr>
                  <tr><td>Train on your schedule</td><td className="me yes">Any gym, any time</td><td>✗ Booked slots</td><td>✓</td></tr>
                  <tr><td>Pricing</td><td className="me">Tailored — discussed on your call</td><td>$80–120/session</td><td>$15–30/mo</td></tr>
                  <tr><td>Lock-in contract</td><td className="me yes">None</td><td>Often 10+ sessions</td><td>Annual plans</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ — dark continued */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal><span className="label">FAQ</span></Reveal>
          <Reveal><h2>Questions beginners actually ask.</h2></Reveal>
          <Reveal>
            <div style={{ marginTop: 40 }}>
              <details>
                <summary>Do I need a gym membership?</summary>
                <div className="a">A basic gym works best for resistance training, but I can build your program around home equipment too. We'll sort this on your intro call.</div>
              </details>
              <details>
                <summary>I've never lifted weights — is this for me?</summary>
                <div className="a">Yes — beginners are exactly who I coach. Every exercise comes with technique guidance, and you can send me form-check videos any time.</div>
              </details>
              <details>
                <summary>Should I pick in-person or online?</summary>
                <div className="a">In-person (Christchurch) suits you if you want hands-on technique coaching every session. Online suits you if you want flexibility at your own gym with the same programming, weekly check-ins and daily DM support. Plenty of clients start in person and move online once their confidence is built — we\u2019ll figure out the right fit on your call.</div>
              </details>
              <details>
                <summary>How fast will I see results?</summary>
                <div className="a">Most beginners feel noticeably stronger within 4–6 weeks and see visible change by 8–12 weeks of consistent training. I'll always be straight with you about realistic timelines.</div>
              </details>
              <details>
                <summary>What if it's not for me?</summary>
                <div className="a">The intro call is free and no-pressure — if I'm not the right fit, I'll tell you and point you in a better direction. No lock-in contracts, cancel anytime.</div>
              </details>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner title="Start your first block." sub="Free intro call → custom program → week one." />
    </>
  )
}
