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
cp .env.example .env
```

2. Suba os serviços (na raiz do projeto):

```
docker compose up -d
```

3. Acesse o WP-Admin: `http://localhost:8080/wp-admin`.

Notas:

- O core do WordPress não é versionado; é provisionado em um volume nomeado `wp_data`.
- Apenas `wordpress/wp-content/plugins/` é versionado (para plugins customizados).
- Banco: MariaDB 11.8; admin via phpMyAdmin em `http://localhost:9000`.

Plugins obrigatórios (instale via WP-Admin ou WP-CLI):

- WPGraphQL
- WPGraphQL for ACF
- Advanced Custom Fields
- Yoast SEO
- WP Super Cache

Customizações sugeridas (plugin próprio):

- CPTs: guias, builds, equipamentos
- Campos ACF: título do guia, classe, build recomendada, nível sugerido, dificuldade, equipamentos necessários, imagens/vídeos
- Webhook para acionar Deploy Hook da Vercel ao publicar/atualizar conteúdos desses CPTs

### Endpoint GraphQL

`http://localhost:8080/graphql` (após instalar WPGraphQL)

## Frontend (Next.js) — futuro

- Usaremos React Query para consumo de dados no cliente (sem Apollo).
- Páginas podem usar pré-render (ISR/SSG/SSR) no App Router e hidratar no cliente com React Query quando necessário.
- GraphQL via `graphql-request` apontando para `http://localhost:8080/graphql` (configurável por env).

### Como rodar o frontend

1. Configure as variáveis:

```
cp frontend/.env.example frontend/.env.local
```

2. Instale e rode:

```
cd frontend
npm install
npm run dev
```

3. Acesse: `http://localhost:3000`

Observações:

- Endpoint GraphQL: defina `NEXT_PUBLIC_WP_GRAPHQL_ENDPOINT` em `.env.local`.
- Exemplo de listagem de posts via WPGraphQL já incluso na página inicial.

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
docker-compose.yml
.env.example
docs/
  wordpress-docker-setup.md
wordpress/
  wp-content/
    plugins/
      .gitkeep (ou seus plugins versionados)
```

## Observações

- Habilite e configure o WP Super Cache no WP-Admin (ou via WP-CLI) para máxima performance.
- Recomenda-se Cloudflare como CDN para backend e Vercel Edge para frontend.

## Regras do projeto

1. Backend (WordPress Headless)

- Instalação em servidor VPS ou Cloud.
- CMS exclusivamente para gerenciar conteúdo.
- Plugins obrigatórios: WPGraphQL, Advanced Custom Fields (ACF), Yoast SEO, WP Super Cache (ou equivalente).
- Criar Custom Post Types para guias, builds, equipamentos.

Estrutura de campos ACF sugerida:

- Título do guia, Classe, Build recomendada, Nível sugerido, Dificuldade, Equipamentos necessários, Imagens/Vídeos.

2. Frontend (Next.js + React)

- SSR para SEO e SSG para páginas estáticas.
- TailwindCSS e layout responsivo.
- Home com lista de guias por categoria/jogo; página de guia detalhada.
- Deploy na Vercel com rebuild automático ao atualizar conteúdo no WordPress.

3. Infraestrutura

- Backend em VPS/Cloud (HostGator, Kinsta, etc.).
- Frontend em Vercel.
- Configurar CDN e cache para alta performance.

4. Funcionalidades futuras

- Multi-jogos, login/usuários, SEO avançado, filtros e ranking de builds.

5. Entregáveis

- Estrutura do WordPress com CPTs e ACF configurados.
- Frontend Next.js consumindo GraphQL.
- Deploy completo (frontend + backend).
- Documentação para adicionar novos guias e jogos.
