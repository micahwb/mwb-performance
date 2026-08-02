import { useState } from 'react'
import { Reveal, CONFIG } from '../components.jsx'

export default function Contact() {
  const [status, setStatus] = useState({ msg: '', kind: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return
    const data = Object.fromEntries(new FormData(form).entries())
    if (CONFIG.FORM_ENDPOINT) {
      setStatus({ msg: 'Sending…', kind: '' })
      try {
        const r = await fetch(CONFIG.FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        })
        if (!r.ok) throw new Error(String(r.status))
        form.reset()
        setStatus({ msg: "Sent. I'll reach out within 24 hours.", kind: 'ok' })
      } catch {
        setStatus({ msg: 'Something went wrong — DM @mwbcoaching or email me instead.', kind: 'err' })
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
              <div className="frow">
                <label>Name *<input type="text" name="name" autoComplete="name" required /></label>
                <label>Email *<input type="email" name="email" autoComplete="email" required /></label>
              </div>
              <div className="frow">
                <label>Phone (optional)<input type="tel" name="phone" autoComplete="tel" /></label>
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
    </>
  )
}
