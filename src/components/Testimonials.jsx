import { useState, useEffect } from 'react'

const testimonials = [
  {
    initials: 'CA',
    name: 'Carla Avelar',
    role: 'Dona & Gestão — Hidrauldiesel',
    text: 'Ficamos muito satisfeitos com o resultado. O site transmite exatamente a seriedade da nossa empresa e já nos trouxe novos clientes. Profissionalismo do início ao fim.',
  },
  {
    initials: 'HM',
    name: 'Heitor Maia',
    role: 'Gerente Financeiro — Hidrauldiesel',
    text: 'Estou acompanhando o desenvolvimento do sistema de ERP e os resultados já são visíveis. O controle de ordens de serviço e o painel financeiro vão transformar nossa operação. Projeto sério, entrega comprometida.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 860)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 860)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  function goTo(idx) {
    setVisible(false)
    setTimeout(() => {
      setActive(idx)
      setVisible(true)
    }, 220)
  }

  // Auto-advance: reinicia o timer toda vez que `active` muda
  useEffect(() => {
    const timer = setTimeout(() => {
      goTo((active + 1) % testimonials.length)
    }, 6000)
    return () => clearTimeout(timer)
  }, [active])

  const t = testimonials[active]

  /* ── Inline styles ── */
  const s = {
    section: {
      padding: isMobile ? '60px 5%' : '100px 8%',
    },
    inner: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '40px' : '80px',
      alignItems: 'center',
      maxWidth: '1100px',
      margin: '0 auto',
    },
    left: { display: 'flex', flexDirection: 'column', gap: '20px' },
    tag: {
      display: 'inline-block',
      color: '#24e9a1',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      padding: '5px 14px',
      border: '1px solid rgba(36,233,161,0.3)',
      borderRadius: '20px',
      background: 'rgba(36,233,161,0.06)',
      width: 'fit-content',
    },
    h2: { fontSize: isMobile ? '28px' : '42px', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.2 },
    h2Span: {
      background: 'linear-gradient(90deg,#be1bd7,#24e9a1)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: { color: '#9ca3af', fontSize: '16px', lineHeight: 1.7, margin: 0 },
    nav: { display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' },
    prevBtn: {
      width: '40px', height: '40px', borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.2)',
      background: 'rgba(255,255,255,0.06)',
      color: '#fff', cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '14px', transition: 'background .25s, border-color .25s',
    },
    dots: { display: 'flex', gap: '8px', alignItems: 'center' },
    dot: (on) => ({
      width: on ? '26px' : '8px', height: '8px',
      borderRadius: on ? '4px' : '50%',
      background: on ? '#24e9a1' : 'rgba(255,255,255,0.25)',
      border: 'none', cursor: 'pointer', padding: 0,
      transition: 'all .3s ease',
    }),
    right: { position: 'relative', paddingBottom: '20px' },
    ghost: {
      position: 'absolute', bottom: 0, left: '20px', right: '20px', top: '20px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '20px', zIndex: 0,
      display: isMobile ? 'none' : 'block',
    },
    card: {
      position: 'relative', zIndex: 1,
      background: 'rgba(255,255,255,0.06)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(190,27,215,0.45)',
      borderRadius: '20px', padding: isMobile ? '28px 20px' : '40px 36px',
      display: 'flex', flexDirection: 'column', gap: '22px',
      boxShadow: '0 0 40px rgba(190,27,215,0.12), 0 24px 60px rgba(0,0,0,0.4)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(12px)',
      transition: 'opacity .4s ease, transform .4s ease',
    },
    stars: { color: '#f59e0b', fontSize: '22px', display: 'flex', gap: '6px' },
    quoteIcon: { fontSize: '38px', color: 'rgba(190,27,215,0.35)', lineHeight: 1 },
    quote: { color: '#fff', fontSize: isMobile ? '15px' : '18px', fontWeight: 600, lineHeight: 1.8, margin: 0 },
    sep: { height: '1px', background: 'rgba(255,255,255,0.1)' },
    authorRow: { display: 'flex', alignItems: 'center', gap: '16px' },
    avatar: {
      width: '52px', height: '52px', minWidth: '52px', borderRadius: '50%',
      background: 'linear-gradient(135deg,#be1bd7,#24e9a1)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: '14px', color: '#fff',
    },
    authorName: { display: 'block', fontSize: '15px', fontWeight: 600, color: '#fff' },
    authorRole: { fontSize: '13px', color: '#9ca3af' },
  }

  return (
    <section id="depoimentos" style={s.section}>
      <div style={s.inner}>

        {/* ESQUERDA */}
        <div style={s.left}>
          <span style={s.tag}>DEPOIMENTOS</span>
          <h2 style={s.h2}>
            O que dizem os <span style={s.h2Span}>clientes</span>
          </h2>
          <p style={s.subtitle}>
            A satisfação de quem confiou no meu trabalho é o melhor portfólio.
          </p>
          <div style={s.nav}>
            <button
              style={s.prevBtn}
              aria-label="Anterior"
              onClick={() => goTo((active - 1 + testimonials.length) % testimonials.length)}
            >
              <i className="fa-solid fa-chevron-left" />
            </button>
            <div style={s.dots}>
              {testimonials.map((_, i) => (
                <button key={i} style={s.dot(i === active)} onClick={() => goTo(i)} aria-label={`Depoimento ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>

        {/* DIREITA */}
        <div style={s.right}>
          <div style={s.ghost} />
          <div style={s.card}>
            <div style={s.stars}>
              {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star" />)}
            </div>
            <div style={s.quoteIcon}>
              <i className="fa-solid fa-quote-left" />
            </div>
            <p style={s.quote}>"{t.text}"</p>
            <div style={s.sep} />
            <div style={s.authorRow}>
              <div style={s.avatar}>{t.initials}</div>
              <div>
                <strong style={s.authorName}>{t.name}</strong>
                <span style={s.authorRole}>{t.role}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
