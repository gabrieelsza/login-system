# Autenticação com JWT

Aplicação fullstack de autenticação desenvolvida como projeto de portfólio, com foco em boas práticas de login, registro e proteção de rotas com JWT.

---

## Visão Geral

 Uma plataforma com tela de autenticação completa — login e registro — integrada a um backend Node.js com geração e validação de tokens JWT. O projeto foi construído para demonstrar domínio do fluxo de autenticação moderno em aplicações web.

---

## Stack

**Frontend**
- React 18
- React Router DOM v6
- Tailwind CSS
- React Icons

**Backend**
- Node.js
- Express
- JSON Web Token (jsonwebtoken)
- bcryptjs

---

## Estrutura do Projeto

```
momento/
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── auth/
│       │   │   ├── LoginForm.jsx
│       │   │   └── RegisterForm.jsx
│       │   ├── landing/
│       │   │   ├── HeroSection.jsx
│       │   │   └── Navbar.jsx
│       │   └── ui/
│       │       ├── Button.jsx
│       │       └── Input.jsx
│       ├── pages/
│       │   └── LandingPage.jsx
│       ├── router.jsx
│       └── main.jsx
│
└── backend/
    ├── src/
    │   ├── controllers/
    │   │   └── authController.js
    │   ├── middleware/
    │   │   └── authMiddleware.js
    │   ├── models/
    │   │   └── userModel.js
    │   └── routes/
    │       └── authRoutes.js
    ├── server.js
    └── .env
```

---

## Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- npm

### Backend

```bash
cd backend
npm install
npm run dev
```

O servidor sobe em `http://localhost:3001`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

A aplicação abre em `http://localhost:5173`

---

## Variáveis de Ambiente

Crie um arquivo `.env` na pasta `backend/` com:

```env
PORT=3001
JWT_SECRET=sua_chave_secreta_aqui
JWT_EXPIRES_IN=1h
```

> **Atenção:** nunca suba o `.env` para o repositório. Ele já está no `.gitignore`.

---

## Endpoints da API

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| `POST` | `/api/auth/register` | Cria um novo usuário | ❌ |
| `POST` | `/api/auth/login` | Autentica e retorna JWT | ❌ |
| `GET` | `/api/auth/me` | Retorna dados do usuário logado | ✅ |

### Exemplos

**Register**
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "Seu Nome",
  "email": "email@exemplo.com",
  "password": "123456"
}
```

**Login**
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "email@exemplo.com",
  "password": "123456"
}
```

**Rota protegida**
```http
GET /api/auth/me
Authorization: Bearer <token>
```

---

## Aprendizados do Projeto

- Estruturação de projeto React com separação entre `pages`, `components/auth` e `components/ui`
- Alternância de formulários via estado (`useState`) sem troca de rota
- Implementação de JWT do zero: geração, assinatura e validação
- Uso de `bcryptjs` para hash de senhas
- Criação de middleware de autenticação no Express
- Roteamento moderno com `createBrowserRouter` (React Router v6.4+)

---

## Autor

Desenvolvido por **Gabriel Souza**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-leonardo-dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/gabrieelsza)
