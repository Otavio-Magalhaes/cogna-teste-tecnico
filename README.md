# Cogna Teste Técnico 

Este projeto implementa um sistema fullstack com autenticação baseada em JSON Web Tokens (JWT). Rotas privadas, como `/produtos` e `/produtos/:id`, só podem ser acessadas por usuários autenticados. A aplicação inclui endpoints para cadastro e login de usuários e para operações Criacao de produtos, assegurando que apenas usuários válidos possam visualizar e manipular os dados.

## Tecnologias Utilizadas
- Frontend:
  - React, Tailwindcss ,React Router DOM e React Helmet 

- Backend: 
  - Node.js com Express.js, nodemon, express-validator, bcrypt, dotenv, cookie-parser, 

- ORM:
  - Prisma 

- Banco de Dados:
  - MySQL

- Autenticação:
  - JSON Web Tokens (JWT)

- Docker:
  - Docker e Docker Compose para containerização dos serviços (backend, frontend e banco de dados).
 
## Justificativa de Escolha Tecnológica
O  projeto foi desenvolvido seguindo a stack sugerida pelo teste técnico. Para o frontend, foi utilizado React, conforme orientação do Tech Lead Rafael Ferres, considerando que era a tecnologia com a qual eu possuía maior familiaridade.

### Como Executar Localmente com Docker

### Clone este repositório e acesse-o:
``` 
git clone https://github.com/Otavio-Magalhaes/cogna-teste-tecnico.git
cd cogna-teste-tecnico
```

### Construa e inicie os containers Docker:
```
docker-compose up --build 
```
### Isso iniciará os serviços de backend, frontend e banco de dados em containers separados.

### Aplique as migrações do Prisma para criar as tabelas no banco:
```
docker-compose exec backend npx prisma migrate dev 
```
## Populando o Banco de Dados com Docker
```
docker exec -it <nome-do-container> npx prisma db seed
``` 
Vai Rodar um Script com produtos iniciais para a popular a tabéla Produto

## Acesse a aplicação:

- Frontend: abra `http://localhost:5173` no navegador.
- Backend: a API Express estará disponível em `http://localhost:3000` (ou na porta configurada).

## Estrutura de Pastas
`/backend/`: código do servidor Node.js/Express, rotas e lógica de negócios.
`/frontend/`: código da aplicação React (componentes, páginas e rotas).
`/prisma/`: configurações do Prisma (arquivo schema.prisma e pastas de migração).
`docker-compose.yml`: configuração de orquestração Docker para os serviços.
Outros arquivos: configurações gerais (`.env.mjs`, `package.json`, etc).


## Screenshots:
![Tela Principal do projeto](./screenshots/home.png)
![Tela de Login do projeto](./screenshots/login.png)
![Tela de Cadastro do projeto](./screenshots/cadastro.png)
![Tela de Produtos Desktop do projeto](./screenshots/ProdutosDesktop.png)
![Tela de Produtos/:id Desktop do projeto](./screenshots/ProdutoDetalhe.png)
![Tela de Produtos Tablet do projeto](./screenshots/ProdutoTablet.png)
![Tela de Produtos/:id Tablet do projeto](./screenshots/ProdutoDetalheTablet.png)

## Autor
Otavio Magalhães – @Otavio-Magalhaes
