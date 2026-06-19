import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import S from "./page.module.css";
import Link from "next/link";
import { icons } from "@/data/icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjetoPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className={S.section}>
      <div className={S.inner}>
        <Link href="/projetos" className={S.back}>
          {"← voltar para projetos"}
        </Link>

        <div className={S.header}>
          <div className={S.icon}>{icons[project.slug] ?? "📁"}</div>
          <h1 className={S.title}>{project.title}</h1>
        </div>

        <p className={S.description}>{project.description}</p>

        <div className={S.links}>
          {project.gitHub && (
            <a
              href={project.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className={`${S.linkBtn} ${S.linkOutline}`}
            >
              {"Ver demo"}
            </a>
          )}
        </div>

        <div className={S.divider} />

        <p className={S.sectionLabel}>{"// sobre o projeto"}</p>
        <p className={S.longDescription}>{project.longDescription}</p>

        <p className={S.techsTitle}>{"// tecnologias"}</p>
        <div className={S.techs}>
          {project.techs.map((tech) => (
            <span key={tech} className={S.tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
