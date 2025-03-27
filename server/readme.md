<h1 align="center">
  Daily Diet API
<p align="center">
  <img src="https://img.shields.io/static/v1?label=daily&message=diet&color=blueviolet&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MayconSlv/find-a-friend-API?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MaayconSlv/daily-diet?color=blueviolet&style=for-the-badge">
</p>

#

## Sobre
Esta API permite o gerenciamento de refeições dentro de uma dieta. Os usuários podem criar uma conta fornecendo e-mail, senha e nome de usuário. Além disso, podem cadastrar refeições, especificando se estão dentro ou fora da dieta, e visualizar métricas sobre sua alimentação ao longo do tempo.

## Instalação

```bash
# Clone este repositório
$ git clone git@github.com:maayconslv/daily-diet.git

# Selecione a pasta da API
$ cd daily-diet/server

# Instale as dependências
$ npm install

# Inicie os containers
$ docker compose up -d

# Instale 
$ npm run migrate

# Execute a aplicação em modo de desenvolvimento
$ npm run start
```

## Endpoints da API

### Autenticação
#### Cadastro de Usuário
`POST /user`

**Requisição:**
```json
{
  "name": "Usuário Exemplo",
  "email": "usuario@example.com",
  "password": "senha123",
  "username": "Usuário"
}
```

**Resposta:**
```json
{
  "id": 1,
  "name": "Usuário Exemplo",
  "username": "Usuário",
  "email": "usuario@example.com"
}
```

#### Autenticação de Usuário
`POST /user/authenticate`

**Requisição:**
```json
{
  "username": "Usuário",
  "password": "senha123"
}
```

**Resposta:**
```json
{
  "id": 1,
  "name": "Usuário Exemplo",
  "username": "Usuário",
  "email": "usuario@example.com",
  "token": "jwt-token-aqui"
}
```

### Refeições
#### Cadastrar uma refeição
`POST /meal`

**Headers:**
```json
{
  "Authorization": "Bearer token-jwt",
  "userId": 123
}
```

**Requisição:**
```json
{
  "name": "Almoço",
  "description": "Arroz e feijão",
  "inDiet": true
}
```

**Resposta:**
```json
{
  "id": 1,
  "name": "Almoço",
  "description": "Arroz e feijão",
  "inDiet": true
}
```

#### Atualizar uma refeição
`PUT /meal`

**Headers:**
```json
{
  "Authorization": "Bearer token-jwt",
  "userId": 123
}
```

**Requisição:**
```json
{
  "mealId": 1,
  "name": "Jantar",
  "description": "Arroz, feijão e frango.",
  "inDiet": false
}
```

**Resposta:**
```json
{
  "id": 1,
  "name": "Jantar",
  "description": "Arroz, feijão e frango.",
  "inDiet": false
}
```

#### Listar todas as refeições do usuário
`GET /meal`

**Headers:**
```json
{
  "Authorization": "Bearer token-jwt",
  "userId": 123
}
```

**Resposta:**
```json
[
  {
    "id": 1,
    "name": "Jantar",
    "description": "Arroz, feijão e frango.",
    "inDiet": true
  },
  {
    "id": 2,
    "name": "Almoço",
    "description": "Arroz, feijão.",
    "inDiet": true
  }
]
```

#### Buscar uma refeição específica
`GET /meal/:id`

**Headers:**
```json
{
  "Authorization": "Bearer token-jwt",
  "userId": 123
}
```

**Resposta:**
```json
{
  "id": 1,
  "name": "Jantar",
  "description": "Arroz, feijão e frango.",
  "inDiet": true
}
```

#### Deletar uma refeição
`DELETE /meal/:id`

**Headers:**
```json
{
  "Authorization": "Bearer token-jwt",
  "userId": 123
}
```

**Resposta:**
```json
{
  "message": "Refeição deletada com sucesso"
}
```

#### Métricas do Usuário
`GET /user/metrics`

**Headers:**
```json
{
  "Authorization": "Bearer token-jwt",
  "userId": 123
}
```

**Resposta:**
```json
{
  "totalMealsCount": 123,
  "totalMealsInDiet": 123,
  "totalMealsOutDiet": 123,
  "maxCount": 123
}
```

## Tecnologias
- nodejs
- typescript
- Prisma(ORM)
- PostgreSQL
- Express
- Routing Controller
- TypeDI
- JWT para autenticação

##
