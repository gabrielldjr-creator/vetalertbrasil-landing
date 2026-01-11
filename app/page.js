// Home page content for the Vet Alert Brasil landing page.
export default function HomePage() {
  return (
    <>
      <header className="header">
        <div className="header-logo" aria-hidden="true">
          V
        </div>
        <div className="header-text">
          <span className="header-title">Vet Alert Brasil</span>
          <span className="header-subtitle">
            Inteligência epidemiológica veterinária
          </span>
        </div>
      </header>

      <main>
        {/* Section 1 — Primeira dobra */}
        <section className="hero" id="inicio">
          <div className="hero-content">
            <p className="hero-eyebrow">Sistema institucional</p>
            <h1>
              Veja o que outros veterinários da sua região estão atendendo — em
              tempo real.
            </h1>
            <p className="hero-subtitle">
              O Vet Alert Brasil permite registrar sinais clínicos suspeitos de
              forma anônima e visualizar padrões regionais antes que surtos se
              tornem evidentes.
            </p>
            <div className="hero-changes">
              <h2>O que muda amanhã</h2>
              <ul className="list">
                <li className="list-item">
                  Você começa o dia sabendo se colegas da sua região estão vendo
                  algo fora do padrão.
                </li>
                <li className="list-item">
                  Você reduz surpresa diante de surtos ou intoxicações
                  emergentes.
                </li>
                <li className="list-item">
                  Você pode orientar sua atenção clínica com base em contexto
                  regional real.
                </li>
              </ul>
            </div>
            <div className="hero-actions">
              <a className="primary-button" href="#funcionamento">
                Entender como funciona
              </a>
            </div>
          </div>
        </section>

        {/* Section 2 — Exemplo concreto */}
        <section className="panel" id="exemplo">
          <h2>Como isso aparece na prática</h2>
          <p className="quote">
            “Você atende um cavalo com sinais neurológicos atípicos. No Vet
            Alert, você vê que outros veterinários da região registraram quadros
            semelhantes nos últimos dias. Isso não define o diagnóstico, mas
            muda seu nível de atenção e vigilância.”
          </p>
        </section>

        {/* Section 3 — Como funciona */}
        <section className="panel" id="funcionamento">
          <h2>Funcionamento básico</h2>
          <div className="grid-cards">
            <div className="card">
              <strong>1.</strong> O veterinário registra um alerta clínico de
              forma anônima.
            </div>
            <div className="card">
              <strong>2.</strong> O sistema agrega sinais semelhantes por região.
            </div>
            <div className="card">
              <strong>3.</strong> Padrões emergentes tornam-se visíveis para
              outros profissionais.
            </div>
            <div className="card">
              <strong>4.</strong> Cada veterinário decide sua conduta clínica de
              forma independente.
            </div>
          </div>
          <p className="section-note">
            O sistema não recomenda condutas nem gera decisões automáticas.
          </p>
        </section>

        {/* Section 4 — Limites claros */}
        <section className="panel" id="limites">
          <h2>Limites de atuação</h2>
          <ul className="list">
            <li className="list-item">Não realiza diagnóstico.</li>
            <li className="list-item">Não confirma doenças.</li>
            <li className="list-item">Não substitui exames laboratoriais.</li>
            <li className="list-item">
              Não é sistema de notificação compulsória.
            </li>
            <li className="list-item">Não substitui órgãos oficiais.</li>
          </ul>
          <p className="section-note">
            O Vet Alert Brasil atua exclusivamente como ferramenta de percepção
            coletiva.
          </p>
        </section>

        {/* Section 5 — Posicionamento */}
        <section className="panel" id="posicionamento">
          <h2>Onde o Vet Alert se posiciona</h2>
          <p>
            Atualmente, os sistemas formais reconhecem dois estados principais:
            1) Suspeita clínica individual 2) Caso confirmado por diagnóstico
            e/ou laudo.
          </p>
          <p>
            O Vet Alert Brasil atua em um terceiro estado informacional:
            vigilância sindrômica clínica agregada, permitindo atenção precoce a
            padrões regionais, antes da confirmação diagnóstica.
          </p>
          <div className="callout">
            O uso do Vet Alert Brasil não exime o profissional da obrigação legal
            de notificação imediata de doenças de notificação compulsória aos
            órgãos competentes.
          </div>
        </section>

        {/* Section 6 — Ética, dados e responsabilidade */}
        <section className="panel" id="etica">
          <h2>Ética e dados</h2>
          <ul className="list">
            <li className="list-item">Registros anonimizados e agregados.</li>
            <li className="list-item">Nenhum dado de tutor coletado.</li>
            <li className="list-item">Nenhuma conduta clínica recomendada.</li>
            <li className="list-item">Nenhuma decisão automatizada.</li>
            <li className="list-item">Conformidade com LGPD.</li>
          </ul>
        </section>

        {/* Section 7 — Piloto */}
        <section className="panel cta" id="piloto">
          <h2>Piloto em Santa Catarina</h2>
          <p>
            O Vet Alert Brasil está em fase piloto, com adesão voluntária de
            médicos veterinários, para avaliação de clareza, utilidade e impacto
            prático no campo.
          </p>
          <a
            className="primary-button"
            href="https://vet-alert-brasil.vercel.app/"
          >
            Participar do piloto
          </a>
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
