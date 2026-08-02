import { useEffect, useState } from 'react'
import { Link as RouterLink, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Nav, Footer } from './components.jsx'
import Home from './pages/Home.jsx'
import Coaching from './pages/Coaching.jsx'
import About from './pages/About.jsx'
import Results from './pages/Results.jsx'
import Contact from './pages/Contact.jsx'
import { Blog, Post } from './pages/Blog.jsx'
import { Privacy, Terms } from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'

const Page = ({ children }) => (
  <motion.main
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  >
    {children}
  </motion.main>
)

const StickyCta = () => {
  const loc = useLocation()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (loc.pathname === '/contact' || !show) return null
  return (
    <div className="sticky-cta">
      <RouterLink to="/contact">Book your free intro call</RouterLink>
    </div>
  )
}

export default function App() {
  const loc = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [loc.pathname])
  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={loc} key={loc.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/coaching" element={<Page><Coaching /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/results" element={<Page><Results /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="/blog" element={<Page><Blog /></Page>} />
          <Route path="/blog/:slug" element={<Page><Post /></Page>} />
          <Route path="/privacy" element={<Page><Privacy /></Page>} />
          <Route path="/terms" element={<Page><Terms /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </AnimatePresence>
      <StickyCta />
      <Footer />
    </>
  )
}
