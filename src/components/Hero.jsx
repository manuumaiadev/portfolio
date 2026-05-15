import { useEffect, useRef } from 'react'

const phrases = [
  'Criação de sites modernos.',
  'Aplicações web interativas.',
  'Sistemas que simplificam.',
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

  return (
    <section className="hero" id="hero">
      <div className="hero-bento">

        {/* Coluna esquerda — identidade */}
        <div className="hero-identity">
          <span className="hero-role-tag">DESENVOLVEDORA FRONT-END</span>
          <h1 className="hero-name">Manuella<br />Maia</h1>
          <div className="hero-typing-line">
            <span ref={typingRef} />
            <span className="typing-cursor">|</span>
          </div>
          <div className="hero-skill-chips">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'SQL'].map((s, i) => (
              <span key={s} style={{ '--i': i }}>{s}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a
              href="https://wa.me/5583988266185?text=Olá,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20orçamento"
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento
            </a>
            <a href="#projetos" className="btn-ghost">Ver projetos</a>
          </div>
        </div>

        {/* Coluna direita — cards bento */}
        <div className="hero-cards">
          <div className="bento-info-card bento-status-card">
            <span className="bento-info-label">Status</span>
            <span className="bento-info-value">
              <span className="dot" />Disponível
            </span>
          </div>
          <div className="bento-info-card bento-location-card">
            <span className="bento-info-label">Base</span>
            <span className="bento-info-value">Curitiba — PR</span>
          </div>
          <div className="bento-info-card bento-remote-card">
            <span className="bento-info-label">Atendimento</span>
            <span className="bento-info-value">Brasil inteiro</span>
          </div>
          <div className="bento-info-card bento-tagline-card">
            <p>"Visão de negócio.<br />Código técnico.<br />Resultados reais."</p>
          </div>
        </div>

      </div>
    </section>
  )
}
