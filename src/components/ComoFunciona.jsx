const steps = [
  {
    title: 'Conversa inicial',
    desc: 'Uma conversa rápida por WhatsApp ou reunião online para entender seu negócio, público e objetivos do site.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Proposta e planejamento',
    desc: 'Você recebe estrutura do site, prazo e valor definidos antes de começar. Sem surpresas.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Desenvolvimento',
    desc: 'Desenvolvo e envio prévias. Você acompanha e pode solicitar até 2 rodadas de ajustes.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Entrega e publicação',
    desc: 'O site vai ao ar e você recebe orientações de uso + suporte inicial pós-entrega.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function ComoFunciona() {
  return (
    <section className="processo-section" id="como-funciona">
      <div className="processo-header" data-reveal="up">
        <span className="section-tag">COMO FUNCIONA</span>
        <h2>Contratar um site comigo</h2>
        <p>Processo simples e previsível — você sabe exatamente o que vai acontecer e em quanto tempo.</p>
      </div>

      <div className="cf-vtl" data-reveal="up">
        {steps.map((s, i) => (
          <div className="cf-vtl-card" key={s.title}>
            <div className="cf-vtl-num">0{i + 1}</div>
            <div className="cf-vtl-icon">{s.icon}</div>
            <div className="cf-vtl-body">
              <h3 className="cf-vtl-title">{s.title}</h3>
              <p className="cf-vtl-desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
