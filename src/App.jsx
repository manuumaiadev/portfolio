import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Importance from './components/Importance'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Experience from './components/Experience'
import ComoFunciona from './components/ComoFunciona'
import CtaFinal from './components/CtaFinal'
import Faq from './components/Faq'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  // Scroll reveal global
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) }
      }),
      { threshold: 0.15 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Reading progress bar
  useEffect(() => {
    const bar = document.querySelector('.reading-progress')
    if (!bar) return
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      bar.style.width = (window.scrollY / h) * 100 + '%'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="reading-progress" />
      <Navbar />
      <div className="nav-overlay" />
      <Hero />
      <Stats />
<Importance />
      <Services />
      <Experience />
      <Projects />
      <ComoFunciona />
      <CtaFinal />
      <Testimonials />
      <Faq />
      <Footer />
      <WhatsAppFloat />
      <ContactModal />
    </>
  )
}
