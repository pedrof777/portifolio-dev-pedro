import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.text}>~/pedro-dev • 2026</span>
        <span className={styles.text}>feito com next.js</span>
      </div>
    </footer>
  );
}
