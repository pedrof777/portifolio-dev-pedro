# Portfólio — Pedro Ferreira

- Site pessoal para apresentar minha trajetória como desenvolvedor Full Stack, projetos reais e formas de contato.
- Desenvolvido com Next.js 15 (App Router) e TypeScript.
- Estilização feita inteiramente com CSS Modules — sem frameworks de CSS, com design system próprio via CSS variables.
- Conteúdo dos projetos centralizado em arquivo de dados único, facilitando manutenção e adição de novos projetos.
- Rotas dinâmicas (`[slug]`) geram páginas individuais de case study para cada projeto, a partir do mesmo arquivo de dados.
- Componente de card de projeto reutilizado tanto na home (destaques) quanto na listagem completa.
- Navegação com indicação de página ativa (active state) via `usePathname`.
- Deploy contínuo na Vercel a partir do repositório GitHub.

## Tecnologias

- Next.js 15 (App Router)
- TypeScript
- CSS Modules
- Vercel (deploy)

## Como rodar

Pré-requisitos

- Node.js 18+

Passos

```bash
git clone https://github.com/pedrof777/portfolio.git
cd portfolio
npm install
npm run dev
```

Acesse em `http://localhost:3000`

---

🔗 **Site no ar:** [em breve]

💼 **LinkedIn:** [linkedin.com/in/pedro-ferreira-developer-java](https://www.linkedin.com/in/pedro-ferreira-developer-java)
