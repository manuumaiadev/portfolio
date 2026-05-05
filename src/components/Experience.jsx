const techCategories = [
  { label: 'Linguagens',        items: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'SQL'] },
  { label: 'Frameworks & Libs', items: ['React', 'Node.js', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
  { label: 'Ferramentas',       items: ['Git', 'Figma', 'Vite', 'Vercel', 'DBeaver'] },
  { label: 'Banco de dados',    items: ['PostgreSQL'] },
  { label: 'APIs',              items: ['Fetch API'] },
]

const softSkills = [
  {
    label: 'Liderança & Gestão',
    desc: 'Coordenei equipes e processos em diferentes contextos',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#be1bd7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="#be1bd7" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#be1bd7" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#be1bd7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Comunicação Assertiva',
    desc: 'Clara e objetiva com clientes e times',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#24e9a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Organização & Processos',
    desc: 'Mapeo e otimizo fluxos com visão sistêmica',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#be1bd7" strokeWidth="2"/>
        <line x1="16" y1="2" x2="16" y2="6" stroke="#be1bd7" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8"  y1="2" x2="8"  y2="6" stroke="#be1bd7" strokeWidth="2" strokeLinecap="round"/>
        <line x1="3"  y1="10" x2="21" y2="10" stroke="#be1bd7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Adaptabilidade',
    desc: 'Transicionei de áreas distintas com facilidade',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="23 4 23 10 17 10" stroke="#24e9a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="1 20 1 14 7 14"   stroke="#24e9a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" stroke="#24e9a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Resolução de Problemas',
    desc: 'Analiso e resolvo com foco em resultado',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="#be1bd7" strokeWidth="2"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="#be1bd7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="17" x2="12.01" y2="17" stroke="#be1bd7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Pensamento Crítico',
    desc: 'Questiono e analiso antes de decidir',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#24e9a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="#24e9a1" strokeWidth="2"/>
      </svg>
    ),
  },
]

const experiences = [
  { title: 'Empreendedora / Empresária',       period: '2018 – 2022',    desc: 'Gestão de negócio próprio, liderança, atendimento ao cliente e tomada de decisões estratégicas.' },
  { title: 'Analista de Sistemas & Processos', period: '2023 – Presente', desc: 'Mapeamento e melhoria de processos, análise de dados e otimização de fluxos internos.' },
  { title: 'Desenvolvedora Front-End',         period: '2024 – Presente', desc: 'Desenvolvimento de interfaces modernas, responsivas e focadas na experiência do usuário.' },
]

export default function Experience() {
  return (
    <section className="experience-section" id="trajetoria">

      {/* Cabeçalho */}
      <div className="section-header" data-reveal="up">
        <span className="section-tag">TRAJETÓRIA</span>
        <h2>Experiência &amp; <span>Habilidades</span></h2>
        <p>Minha jornada profissional e as competências que aplico no dia a dia.</p>
      </div>

      <div className="exp-blocks">

        {/* BLOCO 1 — Download */}
        <div className="exp-download-wrap" data-reveal="up">
          <a href="/curriculo-manuella-maia.pdf" download className="download-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#24e9a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="7 10 12 15 17 10" stroke="#24e9a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="15" x2="12" y2="3" stroke="#24e9a1" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Baixar currículo
          </a>
        </div>

        {/* BLOCO 2 — Timeline Horizontal */}
        <div className="exp-htimeline-wrap" data-reveal="up">
          <div className="exp-htimeline">
            {experiences.map(e => (
              <div className="exp-htimeline-item" key={e.title}>
                <div className="exp-htimeline-dot" />
                <div className="exp-htimeline-card">
                  <span className="exp-htimeline-period">{e.period}</span>
                  <h3 className="exp-htimeline-title">{e.title}</h3>
                  <p className="exp-htimeline-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCO 3 — Grid 50/50 */}
        <div className="exp-bottom-grid" data-reveal="up">

          {/* Coluna Esquerda — Soft Skills */}
          <div className="exp-soft-col">
            <h4 className="exp-col-title">Soft Skills</h4>
            <div className="soft-cards-grid">
              {softSkills.map(s => (
                <div className="soft-card" key={s.label}>
                  <div className="soft-card-icon">{s.icon}</div>
                  <strong className="soft-card-title">{s.label}</strong>
                  <p className="soft-card-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Direita — Linguagens & Tecnologias */}
          <div className="exp-tech-col">
            <h4 className="exp-col-title">Linguagens &amp; Tecnologias</h4>
            <div className="tech-cat-grid">
              {techCategories.map(cat => (
                <div className="tech-cat-card" key={cat.label}>
                  <span className="tech-cat-label">{cat.label}</span>
                  <div className="tech-cat-chips">
                    {cat.items.map(item => (
                      <span className="exp-tech-chip" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
