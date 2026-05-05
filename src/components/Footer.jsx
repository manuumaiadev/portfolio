export default function Footer() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-top-line" />

      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/imagens/logo.png" alt="Logo Manuella Maia" />
            <span>Manuella Maia</span>
          </div>
          <p>Desenvolvedora Front-End especializada em interfaces modernas, performance e experiência do usuário.</p>
          <div className="footer-socials">
            <a href="https://github.com/Manuumaia" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/manuumaiadev/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href="mailto:manuumaia96@gmail.com" aria-label="E-mail">
              <i className="fa-solid fa-envelope" />
            </a>
            <a href="https://wa.me/5583988266185" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp" />
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#trajetoria">Trajetória</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4>Contato</h4>
          <a href="mailto:manuumaia96@gmail.com" className="footer-contact-item">
            <i className="fa-solid fa-envelope" />
            <span>manuumaia96@gmail.com</span>
          </a>
          <a href="tel:+5583988266185" className="footer-contact-item">
            <i className="fa-solid fa-phone" />
            <span>(83) 98826-6185</span>
          </a>
          <a href="https://wa.me/5583988266185" target="_blank" rel="noreferrer" className="footer-contact-item">
            <i className="fa-brands fa-whatsapp" />
            <span>WhatsApp</span>
          </a>
          <a href="https://www.linkedin.com/in/manuumaiadev/" target="_blank" rel="noreferrer" className="footer-contact-item">
            <i className="fa-brands fa-linkedin" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Manuella Maia — Todos os direitos reservados</span>
        <button className="footer-back-top" onClick={scrollTop} aria-label="Voltar ao topo">
          <i className="fa-solid fa-arrow-up" />
        </button>
      </div>
    </footer>
  )
}
