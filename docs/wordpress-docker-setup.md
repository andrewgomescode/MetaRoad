### WordPress (Docker) - Setup Rápido

Requisitos: Docker Desktop e Docker Compose.

1. Copie o arquivo de variáveis de ambiente:

```
cp .env.example .env
```

2. Suba os containers:

```
docker compose up -d
```

3. Acesse os serviços:

- WordPress: `http://localhost:${WORDPRESS_PORT:-8080}` (Admin em `/wp-admin`)
- phpMyAdmin: `http://localhost:${PHPMYADMIN_PORT:-9000}`

Credenciais do banco são definidas em `.env`. O WordPress já usa MariaDB 11.8 (container `db`) e a versão 6.8.2 no container `wordpress`.

Observação: o WordPress é armazenado em um volume nomeado (`wp_data`). Não é necessário ter os arquivos do core no repositório.

Futuro: um app Next.js rodará em `http://localhost:${NEXTJS_PORT:-3000}` consumindo o WordPress como Headless CMS (WPGraphQL ou REST).
