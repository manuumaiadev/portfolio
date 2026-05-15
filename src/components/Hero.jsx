import { useEffect, useRef } from 'react'

const phrases = [
  'Criação de sites modernos.',
  'Design que converte.',
  'Experiência que impressiona.',
  'Presença digital profissional.',
]

export default function Hero() {
  const typingRef = useRef(null)

  useEffect(() => {
    let pi = 0, ci = 0, deleting = false
    let timer

    function type() {
      const phrase = phrases[pi]
      if (!deleting) {
        if (typingRef.current) typingRef.current.textContent = phrase.slice(0, ++ci)
        if (ci === phrase.length) { deleting = true; timer = setTimeout(type, 1800); return }
      } else {
        if (typingRef.current) typingRef.current.textContent = phrase.slice(0, --ci)
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length }
      }
      timer = setTimeout(type, deleting ? 45 : 80)
    }
    timer = setTimeout(type, 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return
    if (!hero.querySelector('.glow-1')) {
      const g1 = document.createElement('div'); g1.className = 'hero-glow glow-1'
      const g2 = document.createElement('div'); g2.className = 'hero-glow glow-2'
      hero.appendChild(g1); hero.appendChild(g2)
    }
    const glow1 = hero.querySelector('.glow-1')
    const glow2 = hero.querySelector('.glow-2')
    const floatingCards = hero.querySelector('.floating-cards')
    const onMove = ({ clientX, clientY }) => {
      const mx = (clientX - window.innerWidth / 2) / 25
      const my = (clientY - window.innerHeight / 2) / 25
      if (glow1) glow1.style.transform = `translate(${mx}px,${my}px)`
      if (glow2) glow2.style.transform = `translate(${-mx * 1.5}px,${-my * 1.5}px)`
      if (floatingCards) floatingCards.style.transform = `translate(${-mx * .5}px,${-my * .5}px)`
    }
    hero.addEventListener('mousemove', onMove)
    return () => hero.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="floating-cards">
          <div className="card card1">
            <div className="card-icon"><img src="/imagens/codigo.png" alt="status" /></div>
            <div className="card-text">
              <strong>Status</strong>
              <span className="card-desc disponivel"><span className="dot" />Disponível</span>
            </div>
          </div>
          <div className="card card2">
            <div className="card-icon"><img src="/imagens/localizacao.png" alt="localização" /></div>
            <div className="card-text"><strong>Localização</strong><span>Curitiba - PR</span></div>
          </div>
          <div className="card card3">
            <div className="card-icon"><img src="/imagens/no-mundo-todo.png" alt="trabalho remoto" /></div>
            <div className="card-text"><strong>Trabalho remoto</strong><span>Brasil inteiro</span></div>
          </div>
          <div className="hero-left" />
        </div>
        <div className="hero-right">
          <div className="hero-text">
            <div className="hero-title-container">
              <h2><span ref={typingRef} /><span className="typing-cursor">|</span></h2>
            </div>
            <p>Criação estratégica, design intuitivo e alta performance.</p>
          </div>
          <div className="skills-list">
            {['HTML','CSS','JavaScript','Python','Java','SQL'].map((s, i) => (
              <span key={s} style={{'--i': i}}>{s}</span>
            ))}
          </div>
          <div className="importance-cta">
            <a href="https://wa.me/5541999999999?text=Olá,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20orçamento" className="importance-button">
              Solicite um orçamento
            </a>
            <a href="#projetos" className="importance-button">Conheça meus projetos</a>
          </div>
        </div>
      </div>
    </section>
  )
}
