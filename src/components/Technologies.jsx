import { useState } from 'react'

const filters = ['Todas', 'Linguagens', 'Frameworks & Libs', 'Ferramentas', 'Banco de dados', 'APIs']

const techs = [
  { name: 'HTML',         cat: 'Linguagens' },
  { name: 'CSS',          cat: 'Linguagens' },
  { name: 'JavaScript',   cat: 'Linguagens' },
  { name: 'Python',       cat: 'Linguagens' },
  { name: 'Java',         cat: 'Linguagens' },
  { name: 'SQL',          cat: 'Linguagens' },
  { name: 'React',        cat: 'Frameworks & Libs' },
  { name: 'Node.js',      cat: 'Frameworks & Libs' },
  { name: 'Next.js',      cat: 'Frameworks & Libs' },
  { name: 'Tailwind CSS', cat: 'Frameworks & Libs' },
  { name: 'TypeScript',   cat: 'Frameworks & Libs' },
  { name: 'Git',          cat: 'Ferramentas' },
  { name: 'Figma',        cat: 'Ferramentas' },
  { name: 'Vite',         cat: 'Ferramentas' },
  { name: 'Vercel',       cat: 'Ferramentas' },
  { name: 'DBeaver',      cat: 'Ferramentas' },
  { name: 'PostgreSQL',   cat: 'Banco de dados' },
  { name: 'Fetch API',    cat: 'APIs' },
]

export default function Technologies() {
  const [active, setActive] = useState('Todas')

  const visible = active === 'Todas' ? techs : techs.filter(t => t.cat === active)

  return (
    <section className="tech-section" id="tecnologias">
      <div className="tech-inner">

        <div className="skills-header" data-reveal="up">
          <span className="section-tag">TECNOLOGIAS</span>
          <h2>Ferramentas do meu <span>arsenal</span></h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Tecnologias que uso para construir soluções web reais
          </p>
        </div>

        <div className="tech-filters" data-reveal="up">
          {filters.map(f => (
            <button
              key={f}
              className={`tech-filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="tech-chips-area" data-reveal="up">
          {visible.map(t => (
            <span className="tech-chip-item" key={t.name}>{t.name}</span>
          ))}
        </div>

      </div>
    </section>
  )
}
