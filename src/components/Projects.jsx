import { useState } from 'react'

const projects = [
  {
    img: '/imagens/frontbeka.png', alt: 'Beka — IA Virtual',
    title: 'Beka — Virtual Assistant',
    category: 'Assistente com IA',
    desc: 'Assistente virtual com inteligência artificial para atendimento automatizado, resposta a dúvidas frequentes e qualificação de leads via WhatsApp e site.',
    techs: ['Python', 'IA', 'API', 'WhatsApp'],
    status: 'Em desenvolvimento',
  },
  {
    img: '/imagens/frontsistemahidraul.png', alt: 'Sistema Hidrauldiesel',
    title: 'Sistema Hidrauldiesel',
    category: 'Sistema de Gestão',
    desc: 'Sistema web de gestão para oficina mecânica com controle de ordens de serviço, clientes, veículos, peças e painel administrativo.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    status: 'Em desenvolvimento',
    link: 'https://github.com/manuumaiadev/sistema-hidrauldiesel',
  },
  {
    img: '/imagens/frontclinicaodonto.png', alt: 'Site Renova Odonto',
    title: 'Renova Odontologia',
    category: 'Site Institucional',
    desc: 'Clínica de odontologia especializada precisava de presença digital profissional. Site com apresentação de serviços, equipe e contato direto com pacientes.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/manuumaiadev/site-renovaodonto',
  },
  {
    img: '/imagens/frontlojaderoupas.png', alt: 'Site Loja de Roupas',
    title: 'Loja de Roupas',
    category: 'E-commerce Visual',
    desc: 'Projeto do curso de desenvolvimento web com HTML, CSS e JavaScript. Loja online com uma vitrine digital elegante. Landing page com catálogo visual, identidade de marca e compra via WhatsApp.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/manuumaiadev/lojaderoupa',
  },
  {
    img: '/imagens/fronthidrauldiesel.png', alt: 'Site Hidrauldiesel',
    title: ' Site Hidrauldiesel',
    category: 'Site Institucional',
    desc: 'Site para uma empresa de mecânica pesada. Presença digital profissional com apresentação de serviços, diferenciais e contato direto para captação de novos clientes.',
    techs: ['HTML', 'CSS'],
    link: 'https://github.com/manuumaiadev/sitehidrauldiesel',
  },
]

export default function Projects() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)

  function goTo(idx) {
    if (idx === active) return
    setVisible(false)
    setTimeout(() => { setActive(idx); setVisible(true) }, 500)
  }

  const p = projects[active]

  return (
    <section className="projects" id="projetos">
      <div className="projects-heading">
        <span className="section-tag">PORTFÓLIO</span>
        <h2>Meus <span>Projetos</span></h2>
        <p>Alguns trabalhos que desenvolvi para resolver problemas reais de negócios.</p>
      </div>

      <div className="projects-layout">
        {/* Tabs */}
        <nav className="projects-tabs">
          {projects.map((proj, i) => (
            <button
              key={i}
              className={`project-tab${active === i ? ' active' : ''}`}
              onClick={() => goTo(i)}
            >
              {proj.title}
            </button>
          ))}
        </nav>

        {/* Preview */}
        <div className="projects-preview" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity .5s cubic-bezier(0.4,0,0.2,1), transform .5s cubic-bezier(0.4,0,0.2,1)' }}>
          <div className="preview-stack">
            <div className="preview-bg-card preview-bg-card--2" />
            <div className="preview-bg-card preview-bg-card--1" />
            <div className="preview-main-card">
              {p.placeholder
                ? <div className={`preview-placeholder${p.placeholderAi ? ' preview-placeholder--ai' : ''}`}>
                    <i className={p.icon} />
                  </div>
                : <img src={p.img} alt={p.alt} />
              }
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="projects-info" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity .5s cubic-bezier(0.4,0,0.2,1) .08s, transform .5s cubic-bezier(0.4,0,0.2,1) .08s' }}>
          <p className="project-category">{p.category}</p>
          <h3 className="project-info-title">{p.title}</h3>
          {p.status && (
            <span className="project-badge">
              <i className="fa-solid fa-code-branch" /> {p.status}
            </span>
          )}
          <p className="project-info-desc">{p.desc}</p>
          <div className="project-tags">
            {p.techs.map(t => <span key={t}>{t}</span>)}
          </div>
          {p.link && (
            <a href={p.link} target="_blank" rel="noreferrer" className="project-info-btn">
              <i className="fa-brands fa-github" style={{ marginRight: 8 }} />
              Ver no GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
