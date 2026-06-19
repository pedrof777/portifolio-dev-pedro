import Link from "next/link";

import { projects } from "@/data/projects";
import S from "./FeaturedProject.module.css";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className={S.section}>
      <div className={S.inner}>
        <div className={S.header}>
          <div>
            <p className={S.label}>{"// projetos"}</p>
            <h2 className={S.title}>{"O que já construí"}</h2>
          </div>
          <Link href="/projetos" className={S.viewAll}>
            {"ver todos →"}
          </Link>
        </div>

        <div className={S.grid}>
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
