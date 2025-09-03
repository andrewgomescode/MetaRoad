"use client";

import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../lib/graphql-client";
import { GET_POSTS } from "../lib/queries";

type Post = { id: string; title: string; slug: string; excerpt?: string };

export default function HomePage() {
  const { data, isLoading, isError } = useQuery<{ posts: { nodes: Post[] } }>({
    queryKey: ["wp-posts", 10],
    queryFn: async () => graphqlClient.request(GET_POSTS, { first: 10 }),
  });

  if (isLoading)
    return (
      <main>
        <h1>Carregando…</h1>
      </main>
    );
  if (isError)
    return (
      <main>
        <h1>Erro ao carregar posts.</h1>
      </main>
    );

  const posts = data?.posts?.nodes ?? [];

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>Guias recentes</h1>
      <p style={{ color: "#666" }}>
        Fonte: WPGraphQL em {process.env.NEXT_PUBLIC_WP_GRAPHQL_ENDPOINT}
      </p>
      <ul style={{ marginTop: 16, display: "grid", gap: 12 }}>
        {posts.map((p) => (
          <li
            key={p.id}
            style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}
          >
            <div
              style={{ fontSize: 18, fontWeight: 600 }}
              dangerouslySetInnerHTML={{ __html: p.title }}
            />
            {p.excerpt ? (
              <div
                style={{ color: "#555", marginTop: 8 }}
                dangerouslySetInnerHTML={{ __html: p.excerpt }}
              />
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
