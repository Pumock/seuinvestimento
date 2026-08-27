# SeuInvestimento

Monorepo do projeto **SeuInvestimento**: API (NestJS) + Web (Next.js), orquestrados com Docker Compose.

## Estrutura

```
seuinvestimento/
├── backend/                 # API NestJS (Clean Architecture / DDD)
├── frontend/                # App Next.js (App Router)
├── docker-compose.yml       # stack de produção
├── docker-compose.dev.yml   # stack de desenvolvimento (hot reload)
├── .env.exemplo             # variáveis da infra (compose)
├── dev.sh / dev.bat         # helpers de desenvolvimento
└── README.md
```

Serviços de apoio no compose: **PostgreSQL**, **Redis** e **MinIO** (storage S3-compatível).

## Como rodar (desenvolvimento)

1. Crie os arquivos `.env` a partir dos exemplos:

```bash
cp .env.exemplo .env
cp backend/.env.exemplo backend/.env
cp frontend/.env.exemplo frontend/.env
```

2. Suba a stack de desenvolvimento:

```bash
./dev.sh up
```

Serviços:

| Serviço      | URL                            |
|--------------|--------------------------------|
| Frontend     | http://localhost:3000          |
| Backend      | http://localhost:3001          |
| API Docs     | http://localhost:3001/docs     |
| MinIO Console| http://localhost:9001          |
| PostgreSQL   | localhost:5432                 |
| Redis        | localhost:6379                 |

3. Migrações e seed do banco:

```bash
./dev.sh prisma migrate dev --name init
./dev.sh seed
```

## Produção

```bash
docker compose up -d --build
```

## Comandos úteis (`dev.sh`)

| Comando                       | Ação                          |
|-------------------------------|-------------------------------|
| `./dev.sh up`                 | sobe a stack de dev           |
| `./dev.sh down`               | derruba a stack               |
| `./dev.sh logs [serviço]`     | segue os logs                 |
| `./dev.sh restart [serviço]`  | reinicia um serviço           |
| `./dev.sh prisma <args>`      | roda o Prisma no backend      |
| `./dev.sh seed`               | popula o banco                |
