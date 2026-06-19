export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techs: string[];
  gitHub?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "cardapio-api",
    title: "Cardápio API",
    description:
      "API REST para restaurante com autenticação JWT e controle de acesso por roles.",
    longDescription: `Desenvolvi uma API REST completa para gerenciamento de cardápio de restaurante. O principal desafio foi implementar um sistema de autenticação seguro com diferentes níveis de acesso —  clientes podem visualizar o cardápio, apenas admins podem editar. Usei Spring Security com JWT stateless, o que elimina a necessidade de sessão no servidor e escala melhor.`,
    techs: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Docker",
      "Swagger",
    ],
    gitHub: "https://github.com/pedrof777/cardapio-api",
    featured: true,
  },
  {
    slug: "cadastrar-produto",
    title: "Sistema de estoque",
    description:
      "Controle de inventário com Jakarta EE, JSF e arquitetura em camadas com padrão DAO.",
    longDescription: `Sistema de controle de estoque construído com Jakarta EE 10 e JSF/PrimeFaces. Implementei uma arquitetura em camadas com GenericDAO e GenericService, o que reduziu bastante a repetição de código — cada entidade nova herda os CRUDs básicos automaticamente. Deploy no WildFly com PostgreSQL.`,
    techs: [
      "Jakarta EE",
      "JSF",
      "PrimeFaces",
      "JPA",
      "Hibernate",
      "PostgreSQL",
      "WildFly",
    ],
    gitHub: "https://github.com/pedrof777/cadastrar-produto",
    featured: false,
  },
  {
    slug: "agendamento-barbearia",
    title: "Agendamento Barbearia",
    description:
      "Sistema de agendamento com Tomcat, CDI e testes automatizados com JUnit 5 e Mockito.",
    longDescription: `Sistema de agendamento para barbearia com foco em qualidade de código. Implementei testes unitários e de integração com JUnit 5 e Mockito, garantindo que as regras de negócio funcionam corretamente — como não permitir dois agendamentos no mesmo horário. Gerenciamento manual de transações JPA via JPAUtil.`,
    techs: ["Java", "Tomcat", "CDI", "JPA", "JUnit 5", "Mockito", "Lombok"],
    gitHub: "https://github.com/pedrof777/agendamentoBarbearia",
    featured: false,
  },
];
