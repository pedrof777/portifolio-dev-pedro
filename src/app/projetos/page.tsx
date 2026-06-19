import { projects } from "@/data/projects";
import S from "./projetos.module.css";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function ProjetosPage() {
  return (
    <section className={S.section}>
      <div className={S.inner}>
        <p className={S.label}>{"// todos os projetos"}</p>
        <h1 className={S.title}> {"Projetos"}</h1>
        <p className={S.subtitle}>
          {
            "Tudo que já construí, do backend Java até soluções full-stack completas."
          }
        </p>

        <div className={S.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
