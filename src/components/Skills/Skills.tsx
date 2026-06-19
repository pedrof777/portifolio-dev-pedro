import { skills } from "@/data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>{"// stack"}</p>
        <h2 className={styles.title}>{"Tecnologias"}</h2>

        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.category}>
              <p className={styles.categoryTitle}>{group.category}</p>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <span key={item} className={styles.item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
