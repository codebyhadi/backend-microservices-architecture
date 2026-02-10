# Backend Microservices Architecture

## 🧱 Services

| Service | Responsibility | Tech |
|------|---------------|------|
| API Gateway | Routing, auth verification, rate limits | Node.js (Fastify) |
| Auth Service | JWT / OAuth, token issuing | Node.js + JWT |
| User Service | User profiles, roles | Node.js + PostgreSQL |
| Payment Service | Payment abstraction (Stripe mock) | Node.js |
| Redis | Cache / session store | Redis |
| Logging | Centralized logs | Pino + stdout |

---

## 📁 Folder Structure

```
backend-microservices-architecture/
├── docker-compose.yml
├── api-gateway/
│   ├── src/
│   │   ├── index.js
│   │   ├── routes.js
│   │   └── auth-middleware.js
│   └── package.json
├── services/
│   ├── auth-service/
│   │   ├── src/index.js
│   │   ├── src/jwt.js
│   │   └── package.json
│   ├── user-service/
│   │   ├── src/index.js
│   │   ├── src/db.js
│   │   ├── src/routes.js
│   │   └── package.json
│   └── payment-service/
│       ├── src/index.js
│       ├── src/provider.js
│       └── package.json
└── shared/
    ├── logger.js
    └── http-client.js
```



## 🚀 Running the Project

### 1️⃣ Prerequisites
- Node.js 18+
- Docker & Docker Compose

### 2️⃣ Clone Repo
```bash
git clone https://github.com/codebyhadi/backend-microservices-architecture.git
cd backend-microservices-architecture
```

### 3️⃣ Start Infrastructure
```bash
docker-compose up -d redis postgres
```

### 4️⃣ Install Dependencies
```bash
cd api-gateway && npm install
cd services/auth-service && npm install
cd services/user-service && npm install
cd services/payment-service && npm install
```

### 5️⃣ Run Services
```bash
npm run dev
```
(Repeat per service or use tmux / pm2)

---

## 🔐 Auth Flow
1. Client hits `/auth/login`
2. Auth service issues JWT
3. API Gateway validates JWT
4. Requests forwarded internally


---

## 🧪 Example Requests

```bash
curl -X POST http://localhost:3000/auth/login \
  -d '{"email":"test@test.com","password":"123"}'
```


