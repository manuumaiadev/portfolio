export default function Importance() {
  return (
    <section className="importance" id="importance">
      <div className="importance-header" data-reveal="up">
        <span className="section-tag">POR QUE INVESTIR</span>
        <h2>Sua empresa <span>precisa de um site</span></h2>
        <p>No mundo digital, não ter um site profissional é como ter uma loja sem vitrine.</p>
      </div>
      <div className="importance-boxes">
        <div className="importance-card negative" data-reveal="up">
          <h3><i className="fa-solid fa-xmark" /> Sem um site, você...</h3>
          <ul>
            <li>Clientes não encontram sua empresa online</li>
            <li>Perde credibilidade para concorrentes</li>
            <li>Depende apenas de redes sociais</li>
            <li>Dificuldade em mostrar serviços e portfólio</li>
          </ul>
        </div>
        <div className="importance-card positive" data-reveal="up">
          <h3><i className="fa-solid fa-check" /> Com um site profissional...</h3>
          <ul>
            <li>Visibilidade 24h no Google</li>
            <li>Transmite profissionalismo e confiança</li>
            <li>Canal próprio que você controla</li>
            <li>Portfólio sempre acessível</li>
          </ul>
        </div>
      </div>
      <div className="importance-cta">
        <a href="#contato" className="importance-button">Quero meu site →</a>
      </div>
    </section>
  )
}
