
# Desafios: CRUD de Employees e Integração com API externa

## Índice
- [Configuração Inicial do Banco de Dados](#configuração-inicial-do-banco-de-dados)
- [Desafio 2: CRUD e Banco de Dados](#desafio-2-crud-e-banco-de-dados)
- [Desafio 3: Integração com API externa](#desafio-3-integração-com-api-externa)
---
## Configuração Inicial do Banco de Dados

Para configurar inicialmente o MongoDB, execute os seguintes comandos:

```sh
docker exec -it dbcontainer mongo
use admin;
db.createUser({
  user: 'root',
  pwd: 'admin',
  roles: ['root']
});
```
## Desafio 2: CRUD e Banco de Dados

### Objetivo
O objetivo deste desafio é implementar operações de CRUD (Criar, Ler, Atualizar e Excluir) para um recurso chamado "Employee" em um banco de dados de escolha própria.

### Tecnologias Utilizadas
- Banco de dados: MongoDB
- Backend: Node.js

### Instruções para Configuração e Teste
1. Clone o repositório para sua máquina local.
2. Navegue até o diretório do projeto.
3. Execute `comandos para iniciar o banco de dados e a aplicação`.
4. Abra um navegador e acesse `URL do aplicativo`.

### Critérios de Avaliação
- A escolha e implementação do banco de dados são apropriadas.
- A estrutura do banco está correta.
- As operações CRUD funcionam sem erros.
- O código está organizado e limpo.

---

## Desafio 3: Integração com API externa

### Objetivo
O objetivo deste desafio é integrar a aplicação do desafio 2 com a API externa Random User Generator. A API fornece informações aleatórias sobre usuários, que serão usadas para popular a base de dados.

### Tecnologias Utilizadas
- Random User Generator API

### Instruções para Configuração e Teste
1. Execute `comandos para iniciar o banco de dados e a aplicação`.
2. Abra um navegador e acesse `URL do aplicativo`.
3. Navegue até o endpoint `GET /populate` para popular o banco de dados com informações da API externa.

