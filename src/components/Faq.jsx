import { useEffect, useRef, useState } from 'react'

const faqs = [
  { q: 'Quanto tempo leva para criar um site?', a: 'O tempo varia conforme a complexidade. Uma Landing Page profissional geralmente leva de 5 a 10 dias, enquanto um site institucional completo pode levar de 15 a 20 dias.' },
  { q: 'Eu preciso fornecer os textos e imagens?', a: 'Se você já tiver, ótimo! Se não, eu posso te orientar sobre o que é necessário ou podemos trabalhar juntos na criação do conteúdo estratégico que converte.' },
  { q: 'O site funciona bem em celulares?', a: 'Com certeza. Todos os meus projetos são 100% responsivos, adaptando-se perfeitamente a computadores, tablets e smartphones (Android e iOS).' },
  { q: 'Como funciona a hospedagem e o domínio?', a: 'Eu te auxilio em todo o processo de compra do domínio (ex: www.suaempresa.com.br) e na escolha da melhor hospedagem, garantindo que o site fique no ar com segurança.' },
  { q: 'Terei suporte após o site ser entregue?', a: 'Sim! Ofereço suporte por 7 dias após a entrega para garantir que tudo esteja funcionando como esperado e tirar qualquer dúvida que surja.' },
]

export default function Faq() {
  const [open, setOpen] = useState(null)
  const [revealed, setRevealed] = useState([])
  const itemRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = Number(e.target.dataset.idx)
          setRevealed(r => r.includes(idx) ? r : [...r, idx])
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.15 }
    )
    itemRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  function classes(i) {
    return [
      'faq-item',
      open === i ? 'active' : '',
      revealed.includes(i) ? 'faq-revealed' : 'faq-hidden',
    ].filter(Boolean).join(' ')
  }

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-header" data-reveal="up">
          <span className="section-tag">DÚVIDAS</span>
          <h2>Perguntas <span>Frequentes</span></h2>
          <p>Tudo o que você precisa saber sobre como trabalharemos juntos.</p>
        </div>
        <div className="faq-grid">
          {faqs.map((f, i) => (
            <div
              className={classes(i)}
              data-idx={i}
              ref={el => itemRefs.current[i] = el}
              key={i}
            >
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <i className="fa-solid fa-chevron-down" />
              </button>
              <div className="faq-answer"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
