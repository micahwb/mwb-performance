import { Link } from 'react-router-dom'
import { Reveal, Stagger, Item, CtaBanner, Everfit, usePageMeta } from '../components.jsx'

export default function Coaching() {
    usePageMeta('Coaching & Pricing — MWB Performance', "What's included in MWB 1:1 online coaching: custom programs, weekly Zoom check-ins, DM support. Transparent pricing, no lock-in.")
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Reveal><span className="label">Coaching &amp; pricing</span></Reveal>
          <Reveal><h1>Everything you need to progress. <span className="accent">Nothing you don't.</span></h1></Reveal>
          <Reveal><p className="sub page-sub" style={{ marginTop: 20 }}>
            Fully online 1:1 coaching, built around your gym, your pace and your life —
            specialising in resistance training for hypertrophy, strength and fat loss.
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

      {/* PRICING — light */}
      <section className="light">
        <div className="wrap">
          <Reveal><span className="label">Pricing</span></Reveal>
          <Reveal><h2>Transparent. No lock-in.<br />No surprises.</h2></Reveal>
          {/* [EDIT-PRICE] set real prices — these are placeholders */}
          <div className="pricing">
            <Reveal className="price-card hot">
              <div>
                <div className="flag">Most popular</div>
                <div className="tier">Ongoing coaching</div>
                <div className="amount">$65<small> /week</small></div>
                <p className="per">Month-to-month · cancel anytime</p>
                <ul>
                  <li>Custom program, updated every block</li>
                  <li>Weekly Zoom check-in + 7-day DM support</li>
                  <li>Progress tracking + monthly review</li>
                  <li>Priority DM response</li>
                </ul>
              </div>
              <Link className="btn" to="/contact">Book your free intro call</Link>
            </Reveal>
            <Reveal delay={0.08} className="price-card">
              <div>
                <div className="tier">Kickstart</div>
                <div className="amount">$79<small> /week</small></div>
                <p className="per">8-week beginner block · billed weekly</p>
                <ul>
                  <li>Custom program + technique library</li>
                  <li>Weekly Zoom check-in</li>
                  <li>DM support 7 days</li>
                  <li>Form-check video reviews</li>
                </ul>
              </div>
              <Link className="btn ghost" to="/contact">Start with a free call</Link>
            </Reveal>
            <Reveal delay={0.16} className="price-card">
              <div>
                <div className="tier">Program only</div>
                <div className="amount">$149<small> one-off</small></div>
                <p className="per">Self-guided · 8-week custom block</p>
                <ul>
                  <li>Custom program for your goal</li>
                  <li>Exercise technique notes</li>
                  <li>One kick-off Zoom call</li>
                  <li>Upgrade to coaching anytime</li>
                </ul>
              </div>
              <Link className="btn ghost" to="/contact">Ask about programs</Link>
            </Reveal>
          </div>
          <Reveal><p className="sub" style={{ marginTop: 26, fontSize: '0.85rem' }}>
            First intro call is always free. Honest recommendation — even if it's not me.
          </p></Reveal>
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
                  <tr><td>Program built for you</td><td className="me yes">✓ Every block</td><td>Sometimes</td><td>✗ Template</td></tr>
                  <tr><td>Weekly 1:1 check-in</td><td className="me yes">✓ Zoom, every week</td><td>✓ In session</td><td>✗</td></tr>
                  <tr><td>Coach in your DMs</td><td className="me yes">✓ 7 days</td><td>✗</td><td>✗</td></tr>
                  <tr><td>Form-check videos</td><td className="me yes">✓ Included</td><td>In session only</td><td>✗</td></tr>
                  <tr><td>Train on your schedule</td><td className="me yes">✓ Any gym, any time</td><td>✗ Booked slots</td><td>✓</td></tr>
                  <tr><td>Typical cost</td><td className="me">From $65/wk</td><td>$80–120/session</td><td>$15–30/mo</td></tr>
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
                <summary>How does online coaching actually work?</summary>
                <div className="a">You get a custom program in your pocket, a weekly Zoom check-in to review progress and adjust the plan, and DM support between sessions. The accountability of a PT, on your schedule.</div>
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
