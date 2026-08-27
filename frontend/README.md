# SeuInvestimento — Frontend

App **Next.js** (App Router) com TypeScript, Tailwind CSS e componentes reutilizáveis.

## Estrutura

```
app/
├── layout.tsx           # layout raiz + Providers
├── page.tsx             # home
├── globals.css          # estilos globais (Tailwind)
├── (public)/            # rotas públicas (ex.: login)
└── (protected)/         # rotas autenticadas (ex.: dashboard)
components/
├── ui/                  # componentes base (design system)
├── layout/              # header, sidebar, etc.
└── providers/           # theme, toaster e outros providers
hooks/                   # hooks reutilizáveis
lib/                     # api client, utils, integrações
├── api.ts               # instância axios (NEXT_PUBLIC_API_URL)
├── utils.ts             # helper cn()
└── validations/         # schemas zod
types/                   # tipos compartilhados
middleware.ts            # proteção de rotas
```

## Scripts

| Comando           | Descrição                |
|-------------------|--------------------------|
| `npm run dev`     | dev server (porta 3000)  |
| `npm run build`   | build de produção        |
| `npm run start`   | roda o build             |
| `npm run lint`    | lint                     |

Copie `.env.exemplo` para `.env` e ajuste `NEXT_PUBLIC_API_URL`.
