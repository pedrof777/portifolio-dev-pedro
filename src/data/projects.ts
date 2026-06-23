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
  {
    slug: "crm-freelancer",
    title: "CRM Freelancer",
    description:
      "Sistema de gestão de clientes e orçamentos com CRUD completo, conectado a banco de dados real.",
    longDescription: `Construí esse CRM para organizar meus próprios clientes e orçamentos como freelancer. O maior desafio foi modelar a relação entre clientes e orçamentos usando foreign key no banco — cada orçamento pertence a um cliente, e a exclusão em cascata garante integridade dos dados. Usei Supabase como backend completo (banco PostgreSQL, API e seguranca via RLS), o que me permitiu focar no front-end sem precisar construir um servidor do zero. A edição é feita inline na própria lista, sem páginas separadas, priorizando agilidade no uso diário.`,
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    gitHub: "https://github.com/pedrof777/crm-freelancer",
    featured: true,
  }
];
