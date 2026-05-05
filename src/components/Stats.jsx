import { useEffect, useRef } from 'react'

const items = [
  { target: 7,  suffix: '+', label: 'Projetos no GitHub' },
  { target: 17, suffix: '+', label: 'Tecnologias dominadas' },
  { target: 2,  suffix: '+', label: 'Anos desenvolvendo' },
  { target: 2,  suffix: '',  label: 'Sistemas em produção' },
]

export default function Stats() {
  const refs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target
        const target = +el.dataset.target
        const step = target / (1500 / 16)
        let cur = 0
        const t = setInterval(() => {
          cur = Math.min(cur + step, target)
          el.textContent = Math.floor(cur)
          if (cur >= target) clearInterval(t)
        }, 16)
        obs.unobserve(el)
      })
    }, { threshold: 0.5 })
    refs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="stats-section">
      <div className="stats-container">
        {items.map((item, i) => (
          <>
            {i > 0 && <div className="stat-divider" key={`div-${i}`} />}
            <div className="stat-item" data-reveal="up" key={item.label}>
              <span className="stat-number" data-target={item.target} ref={el => refs.current[i] = el}>0</span>
              <span className="stat-suffix">{item.suffix}</span>
              <p>{item.label}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  )
}
