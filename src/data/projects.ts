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
    demo: "https://cardapio-api-67zv.onrender.com/swagger-ui/index.html",
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
    slug: "efood",
    title: "eFood",
    description:
      "Aplicação de delivery de comida (e-commerce) com vitrine de restaurantes e checkout em múltiplas etapas.",
    longDescription: `Desenvolvi uma aplicação de delivery de comida inspirada em plataformas como iFood. O app exibe uma vitrine com múltiplos restaurantes (cada um com nota de avaliação e categoria), permite navegar pelo cardápio de cada estabelecimento e adicionar itens ao carrinho. O maior desafio foi estruturar o fluxo de checkout em duas etapas — dados de entrega e pagamento — mantendo o estado do carrinho consistente durante toda a navegação.`,
    techs: ["React", "TypeScript"],
    demo: "https://efood-six-roan.vercel.app",
    gitHub: "https://github.com/pedrof777/efood",
    featured: true,
  },
  {
    slug: "financeiro-service",
    title: "Financeiro Service",
    description:
      "Sistema de gestão financeira pessoal multi-tenant, com isolamento total de dados por usuário via JWT.",
    longDescription: `Desenvolvi um sistema de gestão financeira pessoal com controle de contas bancárias, categorias e transações. O principal desafio foi garantir isolamento completo de dados entre usuários — nenhuma query é executada sem validar ownership, eliminando a vulnerabilidade "broken object level authorization" (BOLA), uma das mais comuns em APIs multi-tenant. O saldo é calculado em tempo real a partir das transações pagas, sem campo denormalizado no banco, e todos os valores monetários usam BigDecimal para precisão exata.`,
    techs: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Docker",
      "JUnit 5",
      "Mockito",
    ],
    gitHub: "https://github.com/pedrof777/sistema-financeiro",
    featured: false,
  },
];
