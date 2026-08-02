import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Reveal, CtaBanner, usePageMeta } from '../components.jsx'
import { POSTS } from '../posts.js'
import NotFound from './NotFound.jsx'

const fmt = (d) => new Date(d + 'T00:00:00').toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })

export function Blog() {
  usePageMeta('Blog — MWB Performance', 'Straight-talking strength training articles for beginners from coach Micah Barker: gym confidence, muscle-building timelines, programs that stick.')
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <Reveal><span className="label">Coach's notes</span></Reveal>
          <Reveal><h1>Straight talk for <span className="accent">people starting out.</span></h1></Reveal>
          <Reveal><p className="sub" style={{ marginTop: 20 }}>
            No hacks, no 8-week miracles. The stuff I actually tell my clients.
          </p></Reveal>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="post-grid">
            {POSTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link className="post-card" to={`/blog/${p.slug}`}>
                  <img className="post-art" src={p.image} alt="" loading="lazy" />
                  <span className="meta">{fmt(p.date)} · {p.minutes} min read</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="more">Read article →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner title="Prefer it done for you?" sub="Free intro call — honest advice even if it's not me." />
    </>
  )
}

const ReadProgress = () => {
  const [w, setW] = useState(0)
  useEffect(() => {
    const f = () => {
      const h = document.documentElement
      setW(Math.min(100, (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100))
    }
    window.addEventListener('scroll', f, { passive: true }); f()
    return () => window.removeEventListener('scroll', f)
  }, [])
  return <div className="read-progress" style={{ width: `${w}%` }} />
}

export function Post() {
  const { slug } = useParams()
  const post = POSTS.find(p => p.slug === slug)
  usePageMeta(
    post ? `${post.title} — MWB Performance` : 'Article not found — MWB Performance',
    post ? post.excerpt : ''
  )
  if (!post) return <NotFound />
  return (
    <>
      <ReadProgress />
      <section className="page-head">
        <div className="wrap article">
          <Reveal><span className="label">Coach's notes</span></Reveal>
          <Reveal><h1 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)' }}>{post.title}</h1></Reveal>
          <Reveal><p className="post-byline">By Micah Barker · {fmt(post.date)} · {post.minutes} min read</p></Reveal>
        </div>
      </section>
      <section style={{ paddingTop: 24 }}>
        <div className="wrap article">
          <Reveal><img className="post-hero reveal-wipe" src={post.image} alt="" /></Reveal>
          {post.body.map((b, i) =>
            b.h ? <div key={i}><div className="brk"><i /></div><h2 className="post-h">{b.h}</h2></div> : <p key={i} className="post-p">{b.p}</p>
          )}
          <div className="post-back">
            <Link className="btn ghost sm" to="/blog">← All articles</Link>
            <Link className="btn sm" to="/contact">Book your free intro call</Link>
          </div>
        </div>
      </section>
    </>
  )
}
