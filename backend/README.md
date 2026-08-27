# SeuInvestimento — Backend

API construída com **NestJS**, seguindo Clean Architecture / DDD por módulo.

## Estrutura

```
src/
├── main.ts                  # bootstrap (CORS, Swagger, validação, cookies)
├── app.module.ts            # módulo raiz
├── infrastructure/          # integrações transversais
│   ├── prisma/              # PrismaService + PrismaModule (global)
│   └── redis/               # RedisService + RedisModule (global)
├── common/                  # helpers e utilitários
├── shared/                  # tipos e código compartilhado entre módulos
└── modules/                 # um diretório por contexto de negócio
    └── <modulo>/
        ├── application/     # casos de uso (use-cases) + DTOs
        ├── domain/          # entidades, tipos e interfaces (contratos)
        ├── infrastructure/  # repositórios/serviços (implementações)
        └── presentation/    # controllers, guards, decorators, strategies
```

Cada módulo isola suas 4 camadas. O `domain` define contratos (interfaces + tokens),
`infrastructure` os implementa (ex.: Prisma), `application` orquestra a regra de
negócio e `presentation` expõe via HTTP.

## Scripts

| Comando               | Descrição                         |
|-----------------------|-----------------------------------|
| `npm run start:dev`   | dev com watch                     |
| `npm run build`       | build de produção                 |
| `npm run start:prod`  | roda o build                      |
| `npm run seed`        | popula o banco (prisma/seed.ts)   |
| `npm test`            | testes (Jest)                     |

## Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
npm run seed
```

Docs da API (Swagger): `http://localhost:3001/docs`
