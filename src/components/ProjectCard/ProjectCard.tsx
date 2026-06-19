"use client";

import { useRouter } from "next/navigation";

import { Project } from "@/data/projects";
import { icons } from "@/data/icons";

import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/projetos/${project.slug}`)}
      className={styles.card}
    >
      <div className={styles.top}>
        <div className={styles.icon}>{icons[project.slug] ?? "📁"}</div>

        <div className={styles.links}>
          {project.gitHub && (
            <a
              href={project.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              onClick={(e) => e.stopPropagation()}
            >
              {"github ↗"}
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              onClick={(e) => e.stopPropagation()}
            >
              {"demo ↗"}
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.techs}>
        {project.techs.map((tech) => (
          <span key={tech} className={styles.tech}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
