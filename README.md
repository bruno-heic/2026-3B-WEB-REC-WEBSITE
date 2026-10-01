# Digital Project: Website de Arquitetura

Recriação do site de uma empresa de arquitetura, feita a partir de um protótipo do Figma, usando **React + Vite + React Router**. O projeto foi desenvolvido como atividade em grupo, com foco em fidelidade ao layout, componentização e organização das rotas.

**Protótipo:** [Website of Architects (Figma Community)](https://www.figma.com/community/file/891374608655348853/website-of-architects-free-website)

## Integrantes

- Agno Souza Seles Junior
- Bruno Souza Guerra
- Guilherme Carvalho do Santos
- ""

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS puro (Flexbox e CSS Grid)

## Rotas

| Rota            | Página              | Descrição                                                          |
| --------------- | ------------------- | ------------------------------------------------------------------ |
| `/`             | Home                | Destaque, sobre, missão, prévia dos projetos e formulário de contato |
| `/projetos`     | Projetos            | Lista com todos os projetos da empresa                             |
| `/projetos/:id` | Detalhes do Projeto | Rota dinâmica: exibe o projeto correspondente ao `id` da URL       |
| `/sobre`        | Sobre               | Apresentação da empresa                                            |
| `/contato`      | Contato             | Informações e formulário de contato                                |

A rota `/projetos/:id` usa o hook `useParams` para ler o `id` da URL e buscar o projeto no arquivo de dados (`src/data/projects.js`). Se o `id` não existir, a página exibe uma mensagem de "Projeto não encontrado" com um link para voltar.

## Funcionalidades

- Navegação entre páginas com `Link` e rotas definidas com React Router
- Rota dinâmica para os detalhes de cada projeto
- Componentes reutilizáveis (Header, Footer e botões)
- Lista de projetos gerada a partir de um array de dados com `map`
- Formulário de contato com campos obrigatórios e validação do navegador
- Footer sempre posicionado ao final da página
- Layout feito com Flexbox e CSS Grid, seguindo o protótipo do Figma

## Como executar

**Pré-requisito:** Node.js 18 ou superior.

```bash
# 1. Clonar o repositório
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git

# 2. Entrar na pasta
cd NOME-DO-REPOSITORIO

# 3. Instalar as dependências
npm install

# 4. Rodar em modo de desenvolvimento
npm run dev
```

O terminal mostra o endereço, normalmente `http://localhost:5173`.

Outros comandos:

```bash
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # serve localmente a versão gerada pelo build
```
