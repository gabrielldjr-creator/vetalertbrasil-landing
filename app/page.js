// Home page content for the Vet Alert Brasil landing page.
export default function HomePage() {
  return (
    <>
      <main>
        {/* Hero section */}
        <section className="hero">
          <h1>Vet Alert Brasil</h1>
          <p className="hero-subtitle">
            Inteligência epidemiológica para prevenção e resposta rápida em saúde
            animal. Alertas anônimos fortalecem a vigilância regional sem
            interferir na conduta clínica.
          </p>
        </section>

        {/* What it is section */}
        <section>
          <h2>O que é</h2>
          <p>
            Vet Alert Brasil é uma plataforma de inteligência epidemiológica que
            permite o envio de alertas regionais sobre surtos, contaminações
            tóxicas e reações adversas a medicamentos. Os dados são anônimos e
            utilizados apenas para identificar tendências regionais.
          </p>
        </section>

        {/* How it works section */}
        <section>
          <h2>Como funciona</h2>
          <div className="info-grid">
            <div className="card">
              <h3>1. Envio rápido</h3>
              <p>
                O(a) veterinário(a) registra um alerta anônimo com informações
                essenciais do evento observado.
              </p>
            </div>
            <div className="card">
              <h3>2. Análise regional</h3>
              <p>
                Os dados são agregados e analisados para identificar padrões
                locais e tendências emergentes.
              </p>
            </div>
            <div className="card">
              <h3>3. Inteligência preventiva</h3>
              <p>
                A plataforma compartilha sinais regionais para apoiar prevenção
                e planejamento sanitário.
              </p>
            </div>
          </div>
        </section>

        {/* Why participate section */}
        <section>
          <h2>Por que participar</h2>
          <div className="list">
            <div className="list-item">
              Fortalece a prevenção e a resposta rápida a eventos sanitários.
            </div>
            <div className="list-item">
              Contribui para a abordagem One Health e proteção integrada de
              animais, pessoas e meio ambiente.
            </div>
            <div className="list-item">
              Ajuda a reduzir perdas sanitárias e econômicas com dados regionais
              confiáveis.
            </div>
          </div>
        </section>

        {/* Call to action section */}
        <section className="cta">
          <h2>Participação no piloto</h2>
          <p>
            Projeto piloto planejado para Santa Catarina, com foco em colaboração
            ética e proteção de dados.
          </p>
          <button type="button">Participar do piloto em Santa Catarina</button>
        </section>
      </main>

      {/* Footer with compliance and contact information */}
      <footer>
        <div className="footer-content">
          <p>
            Este projeto segue princípios da LGPD, sem coleta de dados pessoais,
            e utiliza somente informações anônimas para inteligência regional.
          </p>
          <p>
            O Vet Alert Brasil não interfere em decisões clínicas e respeita os
            princípios éticos da profissão veterinária.
          </p>
          <p>
            Contato:{" "}
            <a href="mailto:tamara.van.roy@icloud.com">
              tamara.van.roy@icloud.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
