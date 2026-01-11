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
        {/* Hero section */}
        <section className="hero">
          <div className="hero-content">
            <p className="hero-eyebrow">Plataforma nacional de alertas clínicos</p>
            <h1>Inteligência coletiva para prevenção regional em saúde animal</h1>
            <p className="hero-subtitle">
              Vet Alert Brasil transforma alertas anônimos sobre surtos,
              contaminações tóxicas e reações adversas em sinais regionais úteis
              para o dia a dia clínico. Sem coleta de dados pessoais e sem
              interferir na sua conduta.
            </p>
            <div className="hero-actions">
              <a
                className="primary-button"
                href="https://vet-alert-brasil.vercel.app/"
              >
                Participar do piloto em Santa Catarina
              </a>
              <p className="hero-note">
                Piloto disponível apenas para veterinários com CRMV ativo em Santa
                Catarina.
              </p>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-header">
              <div>
                <h2>Resumo essencial</h2>
                <p>
                  Gratuito, anônimo e rápido — transforma experiências isoladas
                  em inteligência coletiva que protege você, seus pacientes e
                  sua região.
                </p>
              </div>
              <div className="hero-card-badge">Em tempo real</div>
            </div>
            <div className="hero-tags">
              <span>Gratuito</span>
              <span>Anônimo</span>
              <span>Rápido</span>
              <span>Ético</span>
            </div>
            <div className="hero-signal">
              <div>
                <strong>Sinal regional</strong>
                <span>Santa Catarina • Últimas 24h</span>
              </div>
              <span className="signal-pill">Tendência ↑</span>
            </div>
          </div>
        </section>

        {/* App preview section */}
        <section className="app-preview">
          <div className="app-preview-text">
            <h2>Como a plataforma aparece no seu dia</h2>
            <p>
              Interface direta, sem ruído, com visão regional contínua. Você
              registra alertas em menos de 60 segundos e acessa sinais objetivos
              antes do próximo atendimento.
            </p>
            <div className="app-preview-highlights">
              <div>
                <h3>Registro essencial</h3>
                <p>Campos mínimos e objetivos, sem burocracia.</p>
              </div>
              <div>
                <h3>Mapa de sinais</h3>
                <p>Indicadores clínicos agregados por região.</p>
              </div>
              <div>
                <h3>Consulta rápida</h3>
                <p>Atualização contínua com contexto regional.</p>
              </div>
            </div>
          </div>
          <div className="app-preview-card">
            <div className="preview-header">
              <div className="preview-avatar">V</div>
              <div>
                <span className="preview-title">Vet Alert Brasil</span>
                <span className="preview-subtitle">Painel regional</span>
              </div>
              <span className="preview-status">Ativo</span>
            </div>
            <div className="preview-alerts">
              <div className="preview-alert">
                <span className="alert-icon">📍</span>
                <div>
                  <strong>Inteligência epidemiológica regional</strong>
                  <p>
                    Sinais do campo e do consultório agregados em tempo real.
                    Sem orientação clínica — apenas padrão e frequência.
                  </p>
                </div>
              </div>
              <div className="preview-alert">
                <span className="alert-icon">🔒</span>
                <div>
                  <strong>Alertas 100% anônimos</strong>
                  <p>
                    Nenhum nome, CRMV ou dado pessoal. Apenas território,
                    espécie e sinal.
                  </p>
                </div>
              </div>
              <div className="preview-alert">
                <span className="alert-icon">🩺</span>
                <div>
                  <strong>Para veterinários em atividade</strong>
                  <p>
                    Consulte rapidamente antes do plantão ou entre atendimentos.
                  </p>
                </div>
              </div>
            </div>
            <div className="preview-footer">
              <span>Última atualização: agora</span>
              <span className="signal-pill">Sinais consistentes</span>
            </div>
          </div>
        </section>

        {/* Core principles summary */}
        <section>
          <div className="metrics">
            <div className="metric-card">
              <span aria-hidden="true">📍</span>
              <h3>Inteligência regional</h3>
              <p>
                Sinais do campo e da clínica agregados para mapear tendências e
                apoiar vigilância sanitária local.
              </p>
            </div>
            <div className="metric-card">
              <span aria-hidden="true">🔒</span>
              <h3>Alertas 100% anônimos</h3>
              <p>
                Nenhum nome, CRMV ou endereço é exposto. O sistema coleta
                contexto epidemiológico, não autoria.
              </p>
            </div>
            <div className="metric-card">
              <span aria-hidden="true">🩺</span>
              <h3>Para quem está em campo</h3>
              <p>
                Informação objetiva para profissionais com pouco tempo e alta
                responsabilidade clínica.
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

        {/* Why use section */}
        <section>
          <h2>Por que usar o Vet Alert Brasil</h2>
          <p className="section-lead">
            Porque é gratuito, anônimo, rápido e transforma experiências isoladas
            em inteligência coletiva que protege você, seus pacientes e sua
            região.
          </p>
          <div className="benefits">
            <article className="benefit-card">
              <h3>1. É gratuito — e continuará sendo</h3>
              <p>
                Não há assinatura, plano oculto ou cobrança futura. O valor está
                na inteligência agregada, não no indivíduo.
              </p>
            </article>
            <article className="benefit-card">
              <h3>2. É 100% anônimo</h3>
              <p>
                Nenhum nome, CRMV ou dado pessoal é compartilhado. A realidade é
                registrada sem medo de exposição, julgamento ou risco jurídico.
              </p>
            </article>
            <article className="benefit-card">
              <h3>3. Você não perde tempo</h3>
              <p>
                Registro em menos de 60 segundos, sem formulários longos, sem
                burocracia e sem login complexo.
              </p>
            </article>
            <article className="benefit-card">
              <h3>4. Você ganha tempo depois</h3>
              <p>
                A informação retorna como sinal antecipado, reduzindo incerteza
                clínica e evitando repetição de erros.
              </p>
            </article>
            <article className="benefit-card">
              <h3>5. Você se mantém atualizado ao longo do dia</h3>
              <p>
                Consulte rapidamente antes do plantão, entre atendimentos ou
                quando algo foge do padrão. Informação em tempo real criada por
                colegas da sua região.
              </p>
            </article>
            <article className="benefit-card">
              <h3>6. Você não está sozinho — mesmo trabalhando sozinho</h3>
              <p>
                A plataforma cria uma consciência clínica regional compartilhada,
                mesmo sem contato direto entre profissionais.
              </p>
            </article>
            <article className="benefit-card">
              <h3>7. Não interfere na sua conduta clínica</h3>
              <p>
                O sistema não dá diagnóstico ou protocolo. Ele responde apenas:
                “O que está acontecendo ao meu redor agora?”.
              </p>
            </article>
            <article className="benefit-card">
              <h3>8. Protege você juridicamente</h3>
              <p>
                Por ser anônimo, agregado e contextual, não cria histórico
                individual nem exposição profissional.
              </p>
            </article>
            <article className="benefit-card">
              <h3>9. Fortalece a profissão</h3>
              <p>
                Transforma experiências individuais em vigilância sanitária,
                prevenção prática e base técnica para políticas melhores.
              </p>
            </article>
            <article className="benefit-card">
              <h3>10. Inteligência coletiva aplicada, não teoria</h3>
              <p>
                Não é rede social ou opinião. É inteligência emergente criada por
                quem está no campo, em tempo real, com impacto direto no dia a
                dia.
              </p>
            </article>
          </div>
        </section>

        {/* Collective intelligence section */}
        <section className="collective">
          <div>
            <h2>Inteligência criada com outros colegas</h2>
            <p>
              Cada alerta isolado é pequeno. Juntos, eles revelam padrões que não
              aparecem em experiências individuais. Você participa porque o
              sistema passa a trabalhar para você.
            </p>
          </div>
          <div className="collective-highlights">
            <div>
              <h3>O que muda na prática</h3>
              <ul>
                <li>Antecipação de sinais regionais.</li>
                <li>Triagem diferencial com mais contexto.</li>
                <li>Decisões mais seguras antes do próximo caso.</li>
              </ul>
            </div>
            <div>
              <h3>Exemplo real</h3>
              <p className="quote">
                “Estou vendo vômitos neurológicos atípicos hoje. Será que é um
                caso isolado?” Ao consultar o Vet Alert, outros colegas da região
                relatam o mesmo — e um padrão surge.
              </p>
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
          <div className="cta-actions">
            <a
              className="primary-button"
              href="https://vet-alert-brasil.vercel.app/"
            >
              Participar do piloto em Santa Catarina
            </a>
            <p className="cta-note">
              Disponível apenas para veterinários com CRMV ativo em Santa
              Catarina.
            </p>
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
