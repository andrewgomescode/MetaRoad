"use client";

import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../lib/graphql-client";
import { GET_POSTS, GET_POSTS_BY_CATEGORY } from "../lib/queries";
import Header from "../components/Header";
import Hero from "../components/Hero";
import GameSection from "../components/GameSection";
import NavigationSidebar from "../components/NavigationSidebar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { SidebarProvider, useSidebar } from "../components/SidebarContext";

type Post = { id: string; title: string; slug: string; excerpt?: string };

type Guide = {
  id: string;
  title: string;
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  readTime: string;
  isNew?: boolean;
  isUpdated?: boolean;
  gameIcon: string;
  gameTag: string;
  href: string;
  description: string;
};

function PageContent() {
  const { isExpanded } = useSidebar();
  const { data, isLoading, isError } = useQuery<{ posts: { nodes: Post[] } }>({
    queryKey: ["wp-posts", 10],
    queryFn: async () => graphqlClient.request(GET_POSTS, { first: 10 }),
  });

  const maple = useQuery<{ posts: { nodes: Post[] } }>({
    queryKey: ["wp-posts-maple", 6],
    queryFn: async () =>
      graphqlClient.request(GET_POSTS_BY_CATEGORY, {
        slug: ["maplestory"],
        first: 6,
      }),
  });

  const difficulty = ["Iniciante", "Intermediário", "Avançado"] as const;

  const transformPosts = (
    posts: Post[],
    gameIcon: string,
    gameTag: string
  ): Guide[] => {
    return posts.map((post, index) => ({
      id: post.id,
      title: post.title,
      difficulty: difficulty[index % 3],
      readTime: `${Math.floor(Math.random() * 10) + 5} min`,
      isNew: index < 2,
      isUpdated: index === 2 || index === 5,
      gameIcon,
      gameTag,
      href: `/guides/${post.slug}`,
      description: post.excerpt || "Guia completo e atualizado.",
    }));
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-primary">
        <Header />
        <NavigationSidebar />

        <div
          className={`transition-all duration-300 ${
            isExpanded ? "md:ml-64" : "md:ml-24"
          }`}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="animate-pulse mb-4">
                <div className="h-8 w-8 rounded-full bg-blue-500 mx-auto animate-pulse-soft"></div>
              </div>
              <p className="text-secondary">Carregando conteúdo...</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="min-h-screen bg-dark-primary">
        <Header />
        <NavigationSidebar />

        <div
          className={`transition-all duration-300 ${
            isExpanded ? "md:ml-64" : "md:ml-24"
          }`}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Erro ao Carregar
              </h2>
              <p className="text-secondary">
                Não foi possível carregar o conteúdo. Tente novamente mais
                tarde.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  const posts = data?.posts?.nodes || [];

  // Transform posts into guides for different games
  const mapleGuides = transformPosts(posts.slice(0, 6), "🍁", "MapleStory");
  const poe2Guides = transformPosts(posts.slice(1, 5), "⚔️", "Path of Exile 2");
  const diabloGuides = transformPosts(posts.slice(2, 6), "🔥", "Diablo IV");
  const lostArkGuides = transformPosts(posts.slice(3, 7), "🛡️", "Lost Ark");

  return (
    <div className="min-h-screen bg-dark-primary">
      <Header />
      <NavigationSidebar />

      <div
        className={`transition-all duration-300 ${
          isExpanded ? "md:ml-64" : "md:ml-24"
        }`}
      >
        {/* Content */}
        <main className="flex-1 max-w-none">
          <Hero />

          <div className="section-container">
            <div className="grid xl:grid-cols-4 gap-10">
              {/* Main Content */}
              <div className="xl:col-span-3 space-y-16">
                {/* Featured MapleStory Section */}
                <GameSection
                  title="MapleStory"
                  description="Guias completos, builds otimizadas e estratégias avançadas"
                  gameIcon="🍁"
                  guides={mapleGuides}
                  variant="featured"
                  maxGuides={6}
                />

                {/* Path of Exile 2 Section */}
                <GameSection
                  title="Path of Exile 2"
                  description="Builds, mecânicas e estratégias para o novo ARPG"
                  gameIcon="⚔️"
                  guides={poe2Guides}
                  maxGuides={4}
                />

                {/* Diablo IV Section */}
                <GameSection
                  title="Diablo IV"
                  description="Temporadas, builds e estratégias de endgame"
                  gameIcon="🔥"
                  guides={diabloGuides}
                  maxGuides={4}
                />

                {/* Lost Ark Section */}
                <GameSection
                  title="Lost Ark"
                  description="Raids, builds e conteúdo PvP atualizado"
                  gameIcon="🛡️"
                  guides={lostArkGuides}
                  maxGuides={4}
                />

                {/* Recent Guides Section */}
                <section className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-2">
                        📚 Guias Recentes
                      </h2>
                      <p className="text-secondary">
                        Últimas adições e atualizações da comunidade
                      </p>
                    </div>
                    <a
                      href="#all-guides"
                      className="text-accent hover:text-accent-hover font-medium transition-colors"
                    >
                      Ver todos →
                    </a>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.slice(0, 6).map((post, index) => (
                      <div
                        key={post.id}
                        className="card-dark-interactive p-6 space-y-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">
                            {["🍁", "⚔️", "🔥", "🛡️", "⚡", "🌟"][index]}
                          </span>
                          <div>
                            <h3 className="text-lg font-bold text-primary line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-muted text-sm">
                              {
                                [
                                  "MapleStory",
                                  "Path of Exile 2",
                                  "Diablo IV",
                                  "Lost Ark",
                                  "Last Epoch",
                                  "Destiny 2",
                                ][index]
                              }
                            </p>
                          </div>
                        </div>
                        <p className="text-secondary text-sm line-clamp-3">
                          {post.excerpt ||
                            "Guia completo e detalhado com estratégias avançadas."}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-dark-tertiary text-secondary px-2 py-1 rounded">
                            {Math.floor(Math.random() * 10) + 5} min
                          </span>
                          {index < 3 && (
                            <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded font-semibold">
                              NOVO
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Widgets Sidebar - Right */}
              <div className="xl:col-span-1">
                <div className="sticky top-18">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default function HomePage() {
  return (
    <SidebarProvider>
      <PageContent />
    </SidebarProvider>
  );
}
