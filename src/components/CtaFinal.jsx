export default function CtaFinal() {
  function openModal() {
    document.getElementById('modal-contato')?.classList.add('active')
    document.body.style.overflow = 'hidden'
  }
  return (
    <section className="cta-final" id="contato">
      <div className="cta-final-inner" data-reveal="up">
        <span className="section-tag">VAMOS TRABALHAR JUNTOS</span>
        <h2>Pronto para ter um site que <span>vende de verdade?</span></h2>
        <div className="cta-final-buttons">
          <a href="https://wa.me/5583988266185?text=Olá,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20orçamento." target="_blank" rel="noreferrer" className="cta-btn-primary">
            <i className="fa-brands fa-whatsapp" /> Solicitar orçamento
          </a>
          <button className="cta-btn-secondary" onClick={openModal}>Enviar mensagem</button>
        </div>
      </div>
    </section>
  )
}
