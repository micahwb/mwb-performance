import { useState } from 'react'
import { Reveal, CONFIG, usePageMeta, Stagger, Item } from '../components.jsx'

export default function Contact() {
  usePageMeta('Book Your Free Intro Call — MWB Performance', "Book a free, no-pressure 20-minute intro call with coach Micah Barker. Tell me your goals and I'll reply within 24 hours.")
  const [status, setStatus] = useState({ msg: '', kind: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return
    const data = Object.fromEntries(new FormData(form).entries())
    if (data._honey) return /* spam trap */
    const mailtoFallback = () => {
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || '-'}\nPreferred: ${data.mode}\nGoal: ${data.goal}\n\n${data.message || ''}`,
      )
      window.location.href = `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent('Free intro call request — ' + data.name)}&body=${body}`
      setStatus({ msg: `Opening your email app as backup… if nothing happens, email ${CONFIG.EMAIL}`, kind: 'ok' })
    }
    if (CONFIG.FORM_ENDPOINT) {
      setStatus({ msg: 'Sending…', kind: '' })
      try {
        const r = await fetch(CONFIG.FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            ...data,
            _subject: `MWB enquiry — ${data.name} (${data.goal})`,
            _template: 'table',
          }),
        })
        if (!r.ok) throw new Error(String(r.status))
        /* FormSubmit answers 200 with success:"false" when the address isn't
           activated yet (or the form is disabled). Without this check the
           visitor sees "Sent." and the enquiry is silently lost. */
        const out = await r.json().catch(() => null)
        if (out && String(out.success) !== 'true') throw new Error(out.message || 'rejected')
        form.reset()
        setStatus({ msg: "Sent. I'll reach out within 24 hours.", kind: 'ok' })
      } catch {
        mailtoFallback()
      }
    } else {
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || '-'}\nGoal: ${data.goal}\n\n${data.message || ''}`,
      )
      window.location.href = `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent('Free intro call request — ' + data.name)}&body=${body}`
      setStatus({ msg: `Opening your email app… if nothing happens, email ${CONFIG.EMAIL}`, kind: 'ok' })
    }
  }

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Reveal><span className="label">Get started</span></Reveal>
          <Reveal><h1>Book your <span className="accent">free intro call.</span></h1></Reveal>
          <Reveal><p className="sub" style={{ marginTop: 20 }}>
            Tell me a little about your goals and I'll reach out within 24 hours to schedule
            a free, no-pressure call.
          </p></Reveal>
        </div>
      </section>

      <section>
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate>
              <input type="text" name="_honey" tabIndex="-1" autoComplete="off" style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true" />
              <div className="frow">
                <label>Name *<input type="text" name="name" autoComplete="name" required /></label>
                <label>Email *<input type="email" name="email" autoComplete="email" required /></label>
              </div>
              <div className="frow">
                <label>Phone (optional)<input type="tel" name="phone" autoComplete="tel" /></label>
                <label>Preferred coaching
                  <select name="mode" defaultValue="Not sure yet">
                    <option>Online coaching</option>
                    <option>In-person waitlist (from September)</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>
              <div className="frow">
                <label>Main goal
                  <select name="goal" defaultValue="Build muscle">
                    <option>Build muscle</option>
                    <option>Get stronger</option>
                    <option>Lose fat</option>
                    <option>Tone up</option>
                    <option>Beginner confidence</option>
                    <option>General fitness</option>
                  </select>
                </label>
              </div>
              <label>Anything else I should know?
                <textarea name="message" placeholder="Experience, injuries, schedule — whatever's useful" />
              </label>
              <button className="btn" type="submit">Request my free intro call</button>
              <p className={`form-status ${status.kind}`} role="status" aria-live="polite">{status.msg}</p>
            </form>
          </Reveal>

          <div className="order-desktop-first">
            <Reveal>
              <div className="grid-3" style={{ gridTemplateColumns: '1fr', marginTop: 0 }}>
                <div className="cell">
                  <span className="idx">01</span>
                  <h3>20 minutes</h3>
                  <p>A relaxed call to understand your goals — where you are, where you want to go.</p>
                </div>
                <div className="cell">
                  <span className="idx">02</span>
                  <h3>Honest answer</h3>
                  <p>An honest recommendation, even if it's not me. No scripts, no hard sell.</p>
                </div>
                <div className="cell">
                  <span className="idx">03</span>
                  <h3>Zero pressure</h3>
                  <p>No obligation to sign up for anything. Worst case, you leave with a clearer plan.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ margin: '28px 0 14px', color: 'var(--grey-on-dark)', fontSize: '0.9rem' }}>
                Prefer to skip the form?
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a className="btn ghost sm" href={CONFIG.INSTAGRAM} target="_blank" rel="noopener noreferrer">DM @mwbcoaching</a>
                <a className="btn ghost sm" href={`mailto:${CONFIG.EMAIL}?subject=Free%20intro%20call`}>Email me directly</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* AFTER YOU SUBMIT — light */}
      <section className="light">
        <div className="wrap">
          <Reveal><span className="label">What happens next</span></Reveal>
          <Reveal><h2>From message to first session<br />in under a week.</h2></Reveal>
          <Stagger className="grid-3">
            <Item className="cell"><span className="idx">24h</span><h3>I reply</h3><p>Personally, within 24 hours — usually faster. We lock in a call time that suits you.</p></Item>
            <Item className="cell"><span className="idx">Day 2–3</span><h3>Intro call</h3><p>20 relaxed minutes on Zoom or phone. Goals, history, honest recommendation.</p></Item>
            <Item className="cell"><span className="idx">Day 5–7</span><h3>Program lands</h3><p>If we're a fit, your custom block arrives in the Hevy app and week one begins.</p></Item>
          </Stagger>
        </div>
      </section>
    </>
  )
}
