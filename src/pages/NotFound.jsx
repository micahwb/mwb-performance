import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <div className="wrap nf">
        <div className="big">404</div>
        <h2>That page skipped leg day.</h2>
        <p className="sub" style={{ margin: '0 auto' }}>It doesn't exist — but your first program could.</p>
        <p><Link className="btn" to="/">Back to the start</Link></p>
      </div>
    </section>
  )
}
