import Link from "next/link";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span>$</span>
          <span>whoami</span>
          <span className={styles.cursor} />
        </div>

        <h1 className={styles.title}>
          Olá, sou <span className={styles.titleAccent}>Pedro Ferreira</span>.
          <br />
          Desenvolvedor Full-Stack.
        </h1>

        <p className={styles.description}>
          Construo APIs robustas, sistemas web e soluções completas — do backend
          Java até o frontend. Focado em entregar valor real.
        </p>

        <div className={styles.tags}>
          <span className={styles.tagGreen}>Java</span>
          <span className={styles.tagGreen}>Spring Boot</span>
          <span className={styles.tag}>Next.js</span>
          <span className={styles.tag}>PostgreSQL</span>
        </div>

        <div className={styles.actions}>
          <Link href="/projetos" className={styles.btnPrimary}>
            Ver projetos
          </Link>
          <Link href="#contatos" className={styles.btnOutline}>
            Entrar em contato
          </Link>
        </div>
      </div>
    </section>
  );
}
