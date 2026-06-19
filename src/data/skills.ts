export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA/Hibernate",
      "Jakarta EE",
      "JWT",
    ],
  },
  {
    category: "Banco de Dados",
    items: ["PostgreSQL", "Supabase"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Ferramentas",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "Swagger",
      "WildFly",
      "Tomcat",
      "Vercel",
    ],
  },
  {
    category: "Testes",
    items: ["JUnit 5", "Mockito"],
  },
];
