// Home page content for the Vet Alert Brasil landing page.
export default function HomePage() {
  return (
    <>
      <header className="header">
        <div className="header-badge">Vet Alert Brasil</div>
      </header>

      <main>
        {/* Hero section */}
        <section className="hero">
          <h1>Inteligência epidemiológica veterinária com foco preventivo</h1>
          <p className="hero-subtitle">
            Plataforma nacional para alertas regionais anônimos sobre surtos,
            contaminações tóxicas e reações adversas a medicamentos. Sem coleta
            de dados pessoais e sem interferência em decisões clínicas.
          </p>
        </section>

        {/* Core principles summary */}
        <section>
          <div className="metrics">
            <div className="metric-card">
              <span aria-hidden="true">📍</span>
              <h3>Inteligência regional</h3>
              <p>
                Sinais do campo e da clínica agregados para mapear tendências e
                apoiar a vigilância sanitária local.
              </p>
            </div>
            <div className="metric-card">
              <span aria-hidden="true">🔒</span>
              <h3>Alertas 100% anônimos</h3>
              <p>
                Nenhum nome, nenhum endereço, nenhuma identificação. Apenas
                território, espécie e sinal observado.
              </p>
            </div>
            <div className="metric-card">
              <span aria-hidden="true">🩺</span>
              <h3>Para quem está em campo</h3>
              <p>
                Informação objetiva para profissionais que atuam sob alta
                responsabilidade e tempo limitado.
              </p>
            </div>
          </div>
        </section>

        {/* What it is section */}
        <section>
          <h2>O que é</h2>
          <p>
            Vet Alert Brasil é uma plataforma de inteligência epidemiológica que
            permite o envio de alertas regionais sobre surtos, contaminações
            tóxicas e reações adversas a medicamentos. Os dados são anônimos e
            utilizados exclusivamente para identificar tendências regionais.
          </p>
        </section>

        {/* How it works section */}
        <section>
          <h2>Como funciona</h2>
          <div className="info-grid">
            <div className="card">
              <h3>1. Registro essencial</h3>
              <p>
                O(a) veterinário(a) informa o evento observado com dados mínimos
                e objetivos.
              </p>
            </div>
            <div className="card">
              <h3>2. Consolidação segura</h3>
              <p>
                As informações são agregadas em nível regional, sem identificação
                individual.
              </p>
            </div>
            <div className="card">
              <h3>3. Inteligência preventiva</h3>
              <p>
                Relatórios e sinais regionais apoiam prevenção, planejamento e
                resposta sanitária.
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
            Piloto planejado para Santa Catarina, com foco em colaboração ética
            e proteção de dados em conformidade com a LGPD.
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
