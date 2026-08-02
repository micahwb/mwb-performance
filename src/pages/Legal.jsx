import { Reveal, CONFIG, usePageMeta } from '../components.jsx'

/*
  LEGAL TEMPLATES — drafted for a solo NZ online coach against the
  Privacy Act 2020 / CGA / FTA checklist (see audit/research/perplexity-legal-gaps.json).
  ⚠ These are solid templates, NOT legal advice. [EDIT] the marked spots and
  ideally have a NZ lawyer read them once before launch.
*/

const Updated = () => <p className="post-p" style={{ fontSize: '0.85rem' }}>Last updated: 2 August 2026</p>

export function Privacy() {
  usePageMeta('Privacy Policy — MWB Performance', 'How MWB Performance collects, uses and protects your personal information under the New Zealand Privacy Act 2020.')
  return (
    <>
      <section className="page-head"><div className="wrap article">
        <Reveal><span className="label">Legal</span></Reveal>
        <Reveal><h1>Privacy Policy</h1></Reveal>
      </div></section>
      <section style={{ paddingTop: 24 }}><div className="wrap article">
        <Updated />
        <p className="post-p">MWB Performance ("we", "I") is operated by Micah Barker, a sole-trader personal trainer based in Christchurch, New Zealand. This policy explains how I collect, use, store and share your personal information in line with the New Zealand Privacy Act 2020. Questions or requests: {CONFIG.EMAIL}.</p>
        <h2 className="post-h">What I collect</h2>
        <p className="post-p">Through the contact form and during coaching: your name, email address, phone number (optional), training goals, and anything you choose to tell me about your experience, schedule, injuries or health. During coaching I also collect training logs, check-in notes, progress measurements and (if you send them) form-check videos and progress photos. Health-related information is treated as sensitive: I only collect what is needed to coach you safely, and only use it for that purpose.</p>
        <h2 className="post-h">Why I collect it</h2>
        <p className="post-p">To respond to enquiries, deliver 1:1 coaching (program design, check-ins, support), keep you training safely, process payments, and — only if you opt in — send occasional coaching updates. Providing information is optional, but I can't coach you safely without honest answers about your health and training background.</p>
        <h2 className="post-h">Who it's shared with</h2>
        <p className="post-p">I never sell your information. It is shared only with the tools that run the coaching service: Everfit (coaching app that hosts your program and logs), my form provider (delivers contact-form messages to my email), my email provider, Instagram/Meta (if you contact me by DM), Zoom (check-in calls) and my payment provider. These providers store data on servers that may be located overseas (typically the US or Australia); I only use reputable providers with their own privacy protections.</p>
        <h2 className="post-h">How long I keep it</h2>
        <p className="post-p">Enquiries that don't become coaching: deleted within 12 months. Client records: kept while you're a client and for up to 2 years after, in case you return, then deleted. You can ask me to delete your information at any time (some payment records must be kept 7 years for NZ tax law).</p>
        <h2 className="post-h">Your rights</h2>
        <p className="post-p">Under the Privacy Act 2020 you can ask for a copy of the personal information I hold about you, and ask me to correct it. Email {CONFIG.EMAIL} — I'll respond within 20 working days. If you're not happy with how I handle a privacy concern, you can complain to the Office of the Privacy Commissioner (privacy.org.nz).</p>
        <h2 className="post-h">Cookies &amp; analytics</h2>
        <p className="post-p">This site currently uses no advertising trackers. If privacy-respecting analytics are added later, this policy will be updated first. {/* [EDIT] update if you add Google Analytics / Meta Pixel */}</p>
      </div></section>
    </>
  )
}

export function Terms() {
  usePageMeta('Terms & Conditions — MWB Performance', 'Coaching terms, health disclaimer, payments, cancellations and consumer rights for MWB Performance online coaching.')
  return (
    <>
      <section className="page-head"><div className="wrap article">
        <Reveal><span className="label">Legal</span></Reveal>
        <Reveal><h1>Terms &amp; Conditions</h1></Reveal>
      </div></section>
      <section style={{ paddingTop: 24 }}><div className="wrap article">
        <Updated />
        <p className="post-p">These terms govern 1:1 online coaching provided by Micah Barker trading as MWB Performance, Christchurch, New Zealand ("the coach", "I"). By purchasing coaching you agree to them. They don't limit your rights under the Consumer Guarantees Act 1993 or Fair Trading Act 1986.</p>
        <h2 className="post-h">1. The service</h2>
        <p className="post-p">Coaching includes: a personalised training program (delivered via the Everfit app), a weekly check-in call, direct-message support on training days, and form-check video reviews. It does not include in-person supervision, medical or physiotherapy services, or meal plans (general nutrition guidance only). Response times: I aim to reply to DMs within 24 hours on weekdays.</p>
        <h2 className="post-h">2. Health &amp; safety — please read</h2>
        <p className="post-p">Coaching is general fitness guidance, not medical advice. You must complete the pre-exercise questionnaire honestly and tell me about any injuries, conditions, medications or changes to your health. If you have a medical condition, are pregnant, or are returning from injury, get clearance from your GP or physio before starting. Stop any exercise that causes pain and tell me. You train at your own gym unsupervised, and you are responsible for training within your limits and using equipment safely.</p>
        <h2 className="post-h">3. Results</h2>
        <p className="post-p">I promise honest coaching, not specific outcomes. Results depend on your consistency, sleep, nutrition, health and genetics. Anyone guaranteeing "X kg in Y weeks" is selling something.</p>
        <h2 className="post-h">4. Payments</h2>
        <p className="post-p">Coaching is billed weekly in advance in NZD. {/* [EDIT] payment method/provider */} If a payment fails I'll let you know; coaching pauses if it remains unpaid after 7 days. Prices may change with 4 weeks' notice — never mid-block.</p>
        <h2 className="post-h">5. Pausing, cancelling, refunds</h2>
        <p className="post-p">No lock-in contracts. You can pause coaching (up to 4 weeks per year) or cancel any time with one week's notice — you'll be coached to the end of your paid week. If I ever fail to deliver the service as described, you're entitled to the remedies the Consumer Guarantees Act provides, including a refund of the affected period. The one-off Program purchase is refundable within 7 days if I haven't delivered your program yet.</p>
        <h2 className="post-h">6. Your program is yours to use — not to distribute</h2>
        <p className="post-p">Programs, videos and materials I create are for your personal use. Please don't resell or redistribute them.</p>
        <h2 className="post-h">7. Ending coaching</h2>
        <p className="post-p">Either of us can end coaching with a week's notice. I may end it immediately (with a refund of unused days) if continuing would be unsafe or the relationship has broken down.</p>
        <h2 className="post-h">8. Liability</h2>
        <p className="post-p">To the extent NZ law allows, I'm not liable for injury or loss arising from inaccurate health information you provide, training outside the program, or equipment/facility issues at your gym. Nothing in these terms excludes rights that can't be excluded under NZ consumer law.</p>
        <h2 className="post-h">9. General</h2>
        <p className="post-p">These terms are governed by New Zealand law. If we have a dispute, we'll try to sort it out directly first — email {CONFIG.EMAIL}.</p>
      </div></section>
    </>
  )
}
