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
        {/* Section 1 — Hero */}
        <section className="hero" id="inicio">
          <div className="hero-content">
            <p className="hero-eyebrow">Sistema institucional</p>
            <h1>Vet Alert Brasil</h1>
            <h2 className="hero-subtitle">
              Sistema de vigilância sindrômica veterinária baseada em
              inteligência coletiva anônima.
            </h2>
            <p>
              Plataforma que permite o registro anônimo de sinais clínicos
              suspeitos, criando percepção coletiva regional em tempo real, sem
              interferir em diagnóstico, conduta clínica ou notificação oficial.
            </p>
            <div className="hero-actions">
              <a className="secondary-button" href="#como-funciona">
                Como funciona
              </a>
              <a
                className="primary-button"
                href="https://vet-alert-brasil.vercel.app/"
              >
                Piloto em Santa Catarina
              </a>
            </div>
          </div>
        </section>

        {/* Section 2 — O problema atual */}
        <section className="panel" id="problema">
          <h2>O desafio da detecção tardia</h2>
          <div className="grid-cards">
            <div className="card">
              Casos isolados não geram visibilidade regional.
            </div>
            <div className="card">
              Padrões emergentes só são percebidos após confirmação.
            </div>
            <div className="card">
              Alertas chegam quando o impacto já ocorreu.
            </div>
            <div className="card">
              Comunicação entre colegas é fragmentada.
            </div>
          </div>
        </section>

        {/* Section 3 — A solução */}
        <section className="panel" id="como-funciona">
          <h2>Como o Vet Alert Brasil atua</h2>
          <div className="grid-cards">
            <div className="card">Registro clínico anônimo.</div>
            <div className="card">Agregação regional de sinais.</div>
            <div className="card">Visualização de padrões emergentes.</div>
            <div className="card">Apoio à vigilância clínica individual.</div>
          </div>
          <p className="section-note">
            O sistema organiza sinais clínicos reportados em campo, oferecendo
            uma camada de percepção coletiva que antecipa padrões regionais sem
            atribuir diagnóstico.
          </p>
        </section>

        {/* Section 4 — Limites claros */}
        <section className="panel" id="limites">
          <h2>Limites claros de atuação</h2>
          <ul className="list">
            <li className="list-item">Não realiza diagnóstico.</li>
            <li className="list-item">Não confirma doenças.</li>
            <li className="list-item">Não substitui exames laboratoriais.</li>
            <li className="list-item">
              Não é sistema de notificação compulsória.
            </li>
            <li className="list-item">Não substitui órgãos oficiais.</li>
          </ul>
        </section>

        {/* Section 5 — Posicionamento */}
        <section className="panel" id="posicionamento">
          <h2>Posicionamento informacional</h2>
          <p>
            Atualmente, os sistemas formais operam em dois estados: 1) Suspeita
            clínica individual 2) Caso confirmado por diagnóstico e/ou laudo.
          </p>
          <p>
            O Vet Alert Brasil atua em um terceiro estado informacional:
            vigilância sindrômica clínica agregada, permitindo atenção precoce a
            padrões regionais, antes da confirmação diagnóstica.
          </p>
          <div className="callout">
            O uso do Vet Alert Brasil não exime o profissional da obrigação legal
            de notificação imediata de doenças de notificação compulsória.
          </div>
        </section>

        {/* Section 6 — Ética e dados */}
        <section className="panel" id="etica">
          <h2>Ética, dados e responsabilidade</h2>
          <ul className="list">
            <li className="list-item">Dados anonimizados e agregados.</li>
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
            médicos veterinários, para avaliação de uso, clareza e valor prático
            no campo.
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
