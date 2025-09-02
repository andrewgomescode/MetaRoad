# MetaRoad – Guias de Jogos (Headless WordPress + Next.js)

Projeto inspirado no Maxroll.gg com backend WordPress headless e frontend Next.js (App Router), Apollo Client e TailwindCSS. Este repositório contém:

- `wordpress/`: infraestrutura e plugin customizado (CPTs, ACF, webhook Vercel)
- `frontend/`: aplicação Next.js com SSR/SSG, Apollo e Tailwind

## Requisitos

- Docker e Docker Compose (para backend)
- Node.js 18+ e pnpm (ou npm/yarn) para o frontend

## Backend (WordPress Headless)

1. Configure variáveis de ambiente:

```
cp wordpress/.env.example wordpress/.env
```

Edite `wordpress/.env` conforme necessário (senhas, hostnames, URL do site e Deploy Hook da Vercel).

2. Suba os serviços:

```
cd wordpress
docker compose up -d
```

3. Aguarde o WordPress iniciar (pode levar ~1-2 minutos). Em seguida, rode o script de inicialização para instalar, configurar e ativar plugins (WPGraphQL, ACF, Yoast, cache) e o plugin customizado com CPTs/ACF:

```
./init.sh
```

4. Acesse o WP-Admin: `http://localhost:8080/wp-admin` com as credenciais do `.env`.

Plugins instalados/ativados:

- WPGraphQL
- WPGraphQL for ACF
- Advanced Custom Fields
- Yoast SEO
- WP Super Cache

O plugin `Meta Road Core` registra:

- CPTs: guias, builds, equipamentos
- Campos ACF: título do guia, classe, build recomendada, nível sugerido, dificuldade, equipamentos necessários, imagens/vídeos
- Webhook para acionar Deploy Hook da Vercel ao publicar/atualizar conteúdos desses CPTs

### Endpoint GraphQL

`http://localhost:8080/graphql`

## Frontend (Next.js)

1. Configure variáveis de ambiente:

```
cp frontend/.env.example frontend/.env.local
```

Defina `NEXT_PUBLIC_WP_GRAPHQL_ENDPOINT` com a URL do GraphQL do WordPress.

2. Instale dependências e rode localmente:

```
cd frontend
pnpm install
pnpm dev
```

3. Páginas

- Home (`/`): lista de guias por categoria/jogo (SSG com ISR)
- Guia (`/guides/[slug]`): página detalhada (SSR/SSG híbrido)

### Tecnologias

- App Router (Next.js 14)
- Apollo Client (SSR Mode)
- TailwindCSS
- TypeScript estrito

## Deploy

- Backend em VPS/Cloud (Docker). Ex: HostGator VPS, Kinsta, Lightsail, EC2, etc.
- Frontend na Vercel
- Configure CDN (ex.: Cloudflare) apontando para o WordPress e Vercel

### Rebuild automático

- Crie um Deploy Hook na Vercel
- Defina `VERCEL_DEPLOY_HOOK` no `wordpress/.env`
- Ao publicar/atualizar CPTs, o plugin envia POST ao Deploy Hook

## Como adicionar novos guias/jogos

1. No WP-Admin, crie um novo item em `Guias`
2. Preencha os campos ACF: classe, build, nível, dificuldade, equipamentos, mídia
3. Publique
4. O frontend será revalidado via Deploy Hook (ISR)

Para novos jogos:

- Use taxonomias (ex.: `jogo`) ou adicione novos CPTs conforme necessário
- Ajuste queries no frontend em `frontend/lib/queries.ts`

## Estrutura

```
wordpress/
  docker-compose.yml
  .env.example
  init.sh
  wp-content/plugins/meta-road-core/
    meta-road-core.php
    includes/
      cpt.php
      acf.php
      webhook.php

frontend/
  app/
    layout.tsx
    page.tsx
    guides/[slug]/page.tsx
  components/
    GuideCard.tsx
  lib/
    apollo.ts
    queries.ts
  styles/globals.css
  tailwind.config.ts
  tsconfig.json
  next.config.mjs
  package.json
  .env.example
```

## Observações

- Habilite e configure o WP Super Cache no WP-Admin (ou via WP-CLI) para máxima performance.
- Recomenda-se Cloudflare como CDN para backend e Vercel Edge para frontend.

