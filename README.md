# MetaRoad – Guias de Jogos (Headless WordPress + Next.js)

Projeto inspirado no Maxroll.gg com backend WordPress headless e frontend Next.js (App Router), Apollo Client e TailwindCSS. Este repositório contém:

- `wordpress/`: infraestrutura e plugin customizado (CPTs, ACF, webhook Vercel)
- `frontend/`: aplicação Next.js com SSR/SSG, Apollo e Tailwind

## Quick Start (Docker)

1. Copie o exemplo de variáveis e ajuste senhas se desejar:

```
cp .env.example .env
```

2. Suba os serviços:

```
docker compose up -d
```

3. Acesse:

- WordPress: `http://localhost:8080` (admin em `/wp-admin` na primeira configuração)
- phpMyAdmin: `http://localhost:9000` (host `db`, porta 3306)

Por padrão, versões: WordPress 6.8.2, MariaDB 11.8. Os arquivos do WordPress são gerenciados por um volume nomeado (`wp_data`), não é necessário versionar o core.

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

## PROMPT INICIAL DO PROJETO:

Crie um projeto web de guias de jogos inspirado no Maxroll.gg com as seguintes características:

1. Backend (WordPress Headless)

- Instalação em servidor VPS ou Cloud.
- CMS exclusivamente para gerenciar conteúdo.
- Plugins obrigatórios:
- WPGraphQL para expor conteúdo via GraphQL.
- Advanced Custom Fields (ACF) para campos personalizados.
- Yoast SEO para otimização de buscas.
- WP Super Cache ou equivalente para performance.
- Criar Custom Post Types para guias, builds, equipamentos.

Estrutura de campos ACF sugerida:

- Título do guia
- Classe
- Build recomendada
- Nível sugerido
- Dificuldade
- Equipamentos necessários
- Imagens ou vídeos ilustrativos

2. Frontend (Next.js + React)

- Conectar ao GraphQL do WordPress via Apollo Client.
- Renderização híbrida: SSR para SEO e SSG para páginas estáticas.
- Estilização com TailwindCSS.
- Layout responsivo para desktop e mobile.
- Página inicial com lista de guias por categoria/jogo.
- Página de guia detalhada puxando dados do WordPress.
- Deploy na Vercel com rebuild automático ao atualizar conteúdo no WordPress.

3. Infraestrutura

- Backend hospedado em VPS/Cloud (HostGator, Kinsta ou similar).
- Frontend hospedado em Vercel.
- Configurar CDN e cache para alta performance.

4. Funcionalidades futuras

- Multi-jogos (possibilidade de expandir para outros jogos além de MapleStory Classic).
- Sistema de login e gerenciamento de usuários (mais adiante).
- SEO avançado, filtros e ranking de builds.

5. Entregáveis

- Estrutura do WordPress com CPTs e ACF configurados.
- Frontend Next.js funcional consumindo GraphQL.
- Deploy completo (frontend + backend).
- Documentação do projeto com instruções de como adicionar novos guias e jogos.
