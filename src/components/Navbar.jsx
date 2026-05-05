import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const overlayRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', 'servicos', 'projetos', 'trajetoria']
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  function closeMenu() { setMenuOpen(false) }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="logo">
        <img src="/imagens/Manu Maia (Vídeo).gif" className="logo-gif" alt="Logo animada" />
      </div>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={closeMenu}>Início</a></li>
        <li><a href="#servicos" className={activeSection === 'servicos' ? 'active' : ''} onClick={closeMenu}>Serviços</a></li>
        <li><a href="#trajetoria" className={activeSection === 'trajetoria' ? 'active' : ''} onClick={closeMenu}>Trajetória</a></li>
        <li><a href="#projetos" className={activeSection === 'projetos' ? 'active' : ''} onClick={closeMenu}>Portfólio</a></li>
        <li className="nav-cta-mobile"><a href="#contato" onClick={closeMenu}>FALE COMIGO</a></li>
      </ul>
      <a href="#contato" className="importance-button">FALE COMIGO</a>
      <button
        className={`hamburger${menuOpen ? ' active' : ''}`}
        aria-label="Abrir menu"
        onClick={() => setMenuOpen(o => !o)}
      >
        <span /><span /><span />
      </button>
      <div
        className={`nav-overlay${menuOpen ? ' active' : ''}`}
        onClick={closeMenu}
      />
    </nav>
  )
}
