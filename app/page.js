// Home page content for the Vet Alert Brasil landing page.
export default function HomePage() {
  return (
    <>
      <header className="header">
        <div className="header-brand">
          <div className="header-logo" aria-hidden="true">
            V
          </div>
          <div className="header-text">
            <span className="header-title">Vet Alert Brasil</span>
            <span className="header-subtitle">
              Inteligência epidemiológica veterinária
            </span>
          </div>
        </div>
        <div className="header-actions">
          <span className="header-link">Painel</span>
          <span className="header-badge">Acesso restrito a veterinários</span>
        </div>
      </header>

      <main>
        {/* Section 1 — Aparência de sistema */}
        <section className="hero" id="inicio">
          <div className="hero-content">
            <p className="hero-eyebrow">Sistema institucional</p>
            <h1 className="hero-title-box">
              Monitoramento clínico regional visão compartilhada entre
              veterinários.
            </h1>
            <p className="hero-subtitle">
              Sinais clínicos suspeitos registrados de forma anônima por
              veterinários da sua região, atualizados em tempo real.
            </p>
            <p className="hero-authority">
              Camada pré-diagnóstica de vigilância clínica agregada.
            </p>
          </div>
        </section>

        {/* Section 2 — Desconforto cognitivo sutil */}
        <section className="section-block" id="invisivel">
          <h2 className="section-title">O que hoje não é visível</h2>
          <div className="section-card">
            <ul className="list">
              <li className="list-item">
                Casos atendidos de forma isolada não revelam padrões regionais.
              </li>
              <li className="list-item">
                A confirmação diagnóstica ocorre após o impacto inicial.
              </li>
              <li className="list-item">
                Alertas oficiais surgem quando o evento já está estabelecido.
              </li>
              <li className="list-item">
                Entre a suspeita individual e o laudo, há um vazio informacional.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 — A camada que faltava */}
        <section className="section-block" id="camada">
          <h2 className="section-title">Onde o Vet Alert atua</h2>
          <div className="section-card">
            <p>
              O Vet Alert Brasil opera exclusivamente no intervalo entre a
              suspeita clínica individual e a confirmação diagnóstica formal.
            </p>
            <p className="section-note">
              Não substitui certeza. Amplia percepção.
            </p>
          </div>
        </section>

        {/* Section 4 — Uso imediato */}
        <section className="section-block" id="pratica">
          <h2 className="section-title">Como isso se traduz na prática</h2>
          <div className="section-card">
            <p className="quote">
              “Antes de iniciar os atendimentos do dia, o veterinário pode
              verificar se há registros recentes de quadros semelhantes em sua
              região. Isso não define diagnóstico, mas altera o nível de atenção
              clínica.”
            </p>
          </div>
        </section>

        {/* Section 5 — Limites que tranquilizam */}
        <section className="section-block" id="limites">
          <h2 className="section-title">Limites claros de atuação</h2>
          <div className="section-card">
            <ul className="list">
              <li className="list-item">Não realiza diagnóstico.</li>
              <li className="list-item">Não atribui causa.</li>
              <li className="list-item">Não recomenda conduta.</li>
              <li className="list-item">Não substitui exames laboratoriais.</li>
              <li className="list-item">Não atua como notificação oficial.</li>
              <li className="list-item">Não interfere na autonomia clínica.</li>
            </ul>
            <p className="section-note">
              O uso do sistema não altera responsabilidades legais existentes.
            </p>
          </div>
        </section>

        {/* Section 6 — Hierarquia sanitária */}
        <section className="section-block" id="hierarquia">
          <h2 className="section-title">Hierarquia da informação clínica</h2>
          <div className="section-card">
            <ol className="ordered-list">
              <li>Suspeita clínica individual</li>
              <li>Vigilância sindrômica clínica agregada (Vet Alert Brasil)</li>
              <li>Confirmação diagnóstica e notificação oficial</li>
            </ol>
            <p className="section-note">
              Cada camada cumpre uma função distinta e não substitui as demais.
            </p>
            <div className="callout">
              Doenças de notificação obrigatória devem seguir os protocolos
              oficiais independentemente do uso do Vet Alert Brasil.
            </div>
          </div>
        </section>

        {/* Section 7 — Ética e dados */}
        <section className="section-block" id="etica">
          <h2 className="section-title">Dados e ética</h2>
          <div className="section-card">
            <ul className="list">
              <li className="list-item">Registros anonimizados.</li>
              <li className="list-item">Dados exclusivamente agregados.</li>
              <li className="list-item">Nenhum dado de tutor coletado.</li>
              <li className="list-item">Nenhuma decisão automatizada.</li>
              <li className="list-item">Conformidade com LGPD.</li>
            </ul>
          </div>
        </section>

        {/* Section 8 — Ação discreta */}
        <section className="section-block" id="piloto">
          <h2 className="section-title">Acesso ao piloto</h2>
          <div className="section-card cta">
            <p>
              Sistema em fase piloto, com participação voluntária de médicos
              veterinários.
            </p>
            <a
              className="primary-button"
              href="https://vet-alert-brasil.vercel.app/"
            >
              Acessar o sistema
            </a>
          </div>
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
