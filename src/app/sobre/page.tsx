import S from "./sobre.module.css";

export default function SobrePage() {
  return (
    <section className={S.section}>
      <div className={S.inner}>
        <p className={S.label}>{"// sobre mim"}</p>
        <h1 className={S.title}>{"Da prevenção de incêndios ao código"}</h1>

        <div className={S.block}>
          <p className={S.paragraph}>
            Por mais de quatro anos, trabalhei como{" "}
            <strong>
              instalador de sistemas de prevenção e combate a incêndios
            </strong>
            , atuando de forma autônoma em Betim, Minas Gerais. Foi nesse
            trabalho que aprendi, na prática, o que significa seguir normas
            técnicas com rigor, prestar atenção em cada detalhe de uma
            instalação e garantir que tudo funcione exatamente como deveria —
            porque o erro ali tem consequência real.
          </p>

          <p className={S.paragraph}>
            Em 2025, decidi migrar pra área de tecnologia. Não foi uma escolha
            por acaso: sempre tive facilidade pra aprender coisas novas e queria
            aplicar essa disciplina toda em um campo onde pudesse crescer
            continuamente. Hoje sou{" "}
            <strong>desenvolvedor Full Stack Java</strong>, em formação pela
            EBAC, construindo projetos reais e trabalhando como freelancer.
          </p>

          <p className={S.paragraph}>
            A transição trouxe algo que considero meu maior diferencial: não sou
            só alguém que aprendeu a programar. Sou alguém que já sabe o que
            significa <strong>responsabilidade, prazo e qualidade</strong> em um
            trabalho de campo, e agora aplico isso em cada linha de código.
          </p>
        </div>

        <div className={S.divider} />

        <p className={S.label}>{"// trajetória"}</p>
        <div className={S.timeline}>
          <div className={S.timelineItem}>
            <div className={S.timelineDot} />
            <div className={S.timelineContent}>
              <p className={S.timelinePeriod}>{"2021 - 2025"}</p>
              <p className={S.timelineTitle}>
                {"Instalador de Sistemas de Prevenção e Combate a Incêndios"}
              </p>
              <p className={S.timelineDescription}>
                {
                  " Profissional autônomo, responsável por instalação, testes e manutenção de equipamentos seguindo normas técnicas e exigências do Corpo de Bombeiros."
                }
              </p>
            </div>
          </div>

          <div className={S.timelineItem}>
            <div className={S.timelineDot} />
            <div className={S.timelineContent}>
              <p className={S.timelinePeriod}>{"2025 — atual"}</p>
              <p className={S.timelineTitle}>
                {"Desenvolvedor Full Stack Java — EBAC"}
              </p>
              <p className={S.timelineDescription}>
                {
                  " Formação profissionalizante com foco em Java, Spring Boot, banco de dados e desenvolvimento web. Construindo projetos reais aplicados a casos de uso de negócio."
                }
              </p>
            </div>
          </div>

          <div className={S.timelineItem}>
            <div className={S.timelineDot} />
            <div className={S.timelineContent}>
              <p className={S.timelinePeriod}>{"atual"}</p>
              <p className={S.timelineTitle}>{"Freelancer Full-Stack"}</p>
              <p className={S.timelineDescription}>
                {
                  "Desenvolvendo soluções sob demanda para clientes — de APIs Java até sistemas web completos com Next.js."
                }
              </p>
            </div>
          </div>
        </div>

        <div className={S.divider} />

        <p className={S.label}>{"// como trabalho"}</p>
        <div className={S.values}>
          <div className={S.valueCard}>
            <p className={S.valueTitle}>{"Atenção a detalhes"}</p>
            <p className={S.valueDescription}>
              {
                "Cada linha de código importa. Trago essa mentalidade direto do trabalho com normas técnicas de segurança."
              }
            </p>
          </div>

          <div className={S.valueCard}>
            <p className={S.valueTitle}>{"Aprendizado contínuo"}</p>
            <p className={S.valueDescription}>
              {
                "Gosto de entender o porquê de cada decisão técnica, não só aplicar soluções prontas."
              }
            </p>
          </div>

          <div className={S.valueCard}>
            <p className={S.valueTitle}>{"Comunicação direta"}</p>
            <p className={S.valueDescription}>
              {
                "Prefiro transparência sobre prazos e escopo desde o início de cada projeto."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
