"use client";

import React from "react";

export default function Hero() {
  const featuredContent = {
    title: "BLASTCAST - Path of Exile 2: The Third Edict",
    description: "com cArn_, Crouching_Tuna, Palsteron, Zizaran",
    isLive: true,
  };

  const popularGames = [
    {
      name: "Path of Exile 2",
      status: "AO VIVO",
      statusColor: "bg-red-500",
      updates: "Tool and Guide Updates",
      gradient: "from-red-500/20 to-orange-500/20",
    },
    {
      name: "The Third Edict",
      status: "PATCH 0.3.0",
      statusColor: "bg-blue-500",
      updates: "Reveal Summary",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Last Epoch",
      status: "ATUALIZADO",
      statusColor: "bg-green-500",
      updates: "Branch Update for Rune Master",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary text-primary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-overlay"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse-soft"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse-soft"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative section-container py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Main Featured Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live Status Badge */}
            <div className="flex items-center gap-4 animate-fade-in">
              <div className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg glow-red">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse-soft"></div>
                AO VIVO
              </div>
              <div className="flex items-center gap-2 text-muted">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium">GAMING</span>
              </div>
            </div>

            {/* Featured Card */}
            <div className="group card-dark-interactive p-0 overflow-hidden animate-slide-up">
              <div className="aspect-video bg-gradient-to-br from-dark-tertiary to-dark-card relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

                {/* Background Gaming Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-8 opacity-10 text-6xl">
                    <span className="animate-pulse-soft">🎮</span>
                    <span
                      className="animate-pulse-soft"
                      style={{ animationDelay: "0.5s" }}
                    >
                      ⚔️
                    </span>
                    <span
                      className="animate-pulse-soft"
                      style={{ animationDelay: "1s" }}
                    >
                      🎯
                    </span>
                    <span
                      className="animate-pulse-soft"
                      style={{ animationDelay: "1.5s" }}
                    >
                      🛡️
                    </span>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <button
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-110 glow-blue"
                    aria-label="Reproduzir podcast"
                    title="Reproduzir"
                  >
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Live indicator */}
                <div className="absolute top-4 right-4 z-30 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  ● AO VIVO
                </div>
              </div>

              <div className="p-8">
                <h1 className="text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                  {featuredContent.title}
                </h1>
                <p className="text-secondary text-lg mb-6 leading-relaxed">
                  {featuredContent.description}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="btn-primary flex items-center gap-2">
                    <span>🎧</span>
                    Ouvir Podcast
                  </button>
                  <button className="btn-secondary">Ver Detalhes</button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Popular Games */}
          <div
            className="space-y-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <h2 className="text-xl font-bold">Gaming</h2>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-border-dark to-transparent"></div>
            </div>

            <div className="space-y-4">
              {popularGames.map((game, index) => (
                <div
                  key={index}
                  className="group card-dark-interactive p-0 overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div
                    className={`aspect-[16/9] bg-gradient-to-br ${game.gradient} relative`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-40 group-hover:opacity-60 transition-opacity">
                      {index === 0 ? "⚔️" : index === 1 ? "🎯" : "⚡"}
                    </div>
                    <div
                      className={`absolute top-3 left-3 ${game.statusColor} text-white px-2 py-1 rounded-full text-xs font-bold`}
                    >
                      {game.status}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {game.name}
                    </h3>
                    <p className="text-xs text-secondary line-clamp-2 leading-relaxed">
                      {game.updates}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div
              className="card-dark p-5 space-y-4 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🚀</span>
                <h3 className="font-bold text-sm">Ações Rápidas</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#guides"
                  className="btn-secondary text-center py-3 text-sm flex flex-col items-center gap-1"
                >
                  <span className="text-lg">📖</span>
                  <span>Guias</span>
                </a>
                <a
                  href="#builds"
                  className="btn-secondary text-center py-3 text-sm flex flex-col items-center gap-1"
                >
                  <span className="text-lg">⚔️</span>
                  <span>Builds</span>
                </a>
                <a
                  href="#news"
                  className="btn-secondary text-center py-3 text-sm flex flex-col items-center gap-1"
                >
                  <span className="text-lg">📰</span>
                  <span>Notícias</span>
                </a>
                <a
                  href="#tools"
                  className="btn-secondary text-center py-3 text-sm flex flex-col items-center gap-1"
                >
                  <span className="text-lg">🛠️</span>
                  <span>Tools</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 text-center space-y-6 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <div className="space-y-2">
            <p className="text-secondary text-lg">
              Builds, progressão e estratégias otimizadas
            </p>
            <p className="text-muted text-sm">
              Inspirado no padrão Maxroll — Criado pela comunidade, para a
              comunidade
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#maplestory"
              className="btn-primary flex items-center gap-2"
            >
              <span>🍁</span>
              Explorar MapleStory
            </a>
            <a
              href="#poe2"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
            >
              <span>⚔️</span>
              Path of Exile 2
            </a>
            <a href="#guides" className="btn-secondary flex items-center gap-2">
              <span>📚</span>
              Todos os Guias
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
