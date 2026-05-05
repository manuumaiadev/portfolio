const cards = [
  {
    tag: 'Sites',
    title: 'Sites e landing pages que geram resultado',
    desc: 'Páginas rápidas, responsivas e com foco em conversão — para empresas e profissionais que precisam de presença digital de verdade.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="28" height="20" rx="3" stroke="#24e9a1" strokeWidth="2"/>
        <line x1="2" y1="12" x2="30" y2="12" stroke="#24e9a1" strokeWidth="2"/>
        <circle cx="7" cy="9" r="1.5" fill="#24e9a1"/>
        <circle cx="12" cy="9" r="1.5" fill="#24e9a1"/>
        <circle cx="17" cy="9" r="1.5" fill="#24e9a1"/>
        <line x1="8" y1="19" x2="20" y2="19" stroke="#24e9a1" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="22" x2="14" y2="22" stroke="rgba(36,233,161,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    tag: 'Apps',
    title: 'Aplicações web interativas e escaláveis',
    desc: 'Interfaces React com componentes bem estruturados, navegação fluida e experiência consistente em qualquer dispositivo.',
    techs: ['React', 'JavaScript', 'CSS'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4L28 10L16 16L4 10L16 4Z" stroke="#24e9a1" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M4 16L16 22L28 16" stroke="#24e9a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 22L16 28L28 22" stroke="rgba(36,233,161,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    tag: 'Sistemas',
    title: 'Painéis e sistemas que simplificam operações',
    desc: 'Front-end de ERPs, dashboards e ferramentas internas — organizados, funcionais e pensados para quem usa todos os dias.',
    techs: ['React', 'SQL', 'Node.js'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="19" width="6" height="9" rx="1.5" stroke="#24e9a1" strokeWidth="2"/>
        <rect x="13" y="11" width="6" height="17" rx="1.5" stroke="#24e9a1" strokeWidth="2"/>
        <rect x="22" y="4" width="6" height="24" rx="1.5" stroke="#24e9a1" strokeWidth="2"/>
        <line x1="2" y1="30" x2="30" y2="30" stroke="#24e9a1" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="skills" id="servicos">
      <div className="skills-container">
        <div className="skills-header" data-reveal="up">
          <span className="section-tag">SERVIÇOS</span>
          <h2>Transformo ideias em <span>soluções web</span> reais</h2>
          <p className="section-subtitle">Desenvolvo interfaces modernas com foco em usabilidade, performance e resultado — seja um site, uma aplicação ou um sistema completo.</p>
        </div>
        <div className="skills-grid">
          {cards.map(c => (
            <div className="skill-card" data-reveal="up" key={c.title}>
              <div className="skill-icon">{c.icon}</div>
              <span className="skill-card-tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="project-tags skill-card-techs">
                {c.techs.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
