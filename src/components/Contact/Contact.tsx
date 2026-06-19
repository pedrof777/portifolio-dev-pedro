import S from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contato" className={S.section}>
      <div className={S.inner}>
        <p className={S.label}>{"// contato"}</p>
        <h2 className={S.title}>{"Vamos trabalhar juntos?"}</h2>
        <p className={S.description}>
          {
            "Tem um projeto em mente ou quer discutir uma ideia? Me envia uma mensagem, respondo o mais rápido possível."
          }
        </p>

        <div className={S.links}>
          <a
            href="mailto:pedrohenriquef278@gmail.com"
            className={S.linkPrimary}
          >
            {"✉ Enviar email"}
          </a>

          <a
            href="https://www.linkedin.com/in/pedro-ferreira-developer-java"
            target="_blank"
            rel="noopener noreferrer"
            className={S.linkOutline}
          >
            {"LinkedIn"}
          </a>

          <a
            href="https://github.com/pedrof777"
            target="_blank"
            rel="noopener noreferrer"
            className={S.linkOutline}
          >
            {"GitHub"}
          </a>
        </div>
      </div>
    </section>
  );
}
