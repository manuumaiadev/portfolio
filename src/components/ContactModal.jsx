import { useEffect, useRef } from 'react'

export default function ContactModal() {
  const overlayRef = useRef(null)

  function close() {
    overlayRef.current?.classList.remove('active')
    document.body.style.overflow = ''
  }

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="modal-overlay" id="modal-contato" ref={overlayRef} onClick={e => { if (e.target === overlayRef.current) close() }}>
      <div className="modal-box">
        <button className="modal-close" aria-label="Fechar" onClick={close}>
          <i className="fa-solid fa-xmark" />
        </button>
        <div className="modal-header">
          <span className="section-tag">CONTATO</span>
          <h2>Vamos <span>trabalhar juntos</span></h2>
          <p>Preencha o formulário e retorno em breve.</p>
        </div>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Nome completo" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Telefone" />
          <textarea rows="4" placeholder="Mensagem" required />
          <button type="submit">Enviar mensagem</button>
        </form>
      </div>
    </div>
  )
}
