"use client";

import React, { useState } from "react";
import { useSidebar } from "./SidebarContext";

export default function Header() {
  const { isExpanded } = useSidebar();
  const [isGamesMenuOpen, setIsGamesMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const games = [
    { name: "MapleStory", href: "#maplestory", icon: "🍁" },
    { name: "Path of Exile 2", href: "#poe2", icon: "⚔️" },
    { name: "Diablo IV", href: "#diablo", icon: "🔥" },
    { name: "Last Epoch", href: "#lastepoch", icon: "⚡" },
    { name: "Lost Ark", href: "#lostark", icon: "🛡️" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-dark bg-dark-secondary/95 backdrop-blur-md transition-all duration-300 ${
        isExpanded ? "md:ml-64" : "md:ml-24"
      }`}
    >
      <div className="mx-auto my-4 max-w-7xl">
        <div className="flex items-center justify-between gap-4 py-2">
          {/* Mobile Menu Toggle & Logo */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-secondary hover:text-primary transition-colors p-2"
              aria-label="Abrir menu de navegação"
              title="Menu de Navegação"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo - Hidden on large screens since it's in the sidebar */}
            <div className="lg:hidden flex items-center gap-3">
              <div className="relative group">
                <div
                  aria-label="MetaRoad"
                  className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-105 transition-transform duration-300"
                >
                  M
                </div>
              </div>
              <div>
                <strong className="text-lg text-primary font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  MetaRoad
                </strong>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-secondary">
            <a
              className="hover:text-primary transition-colors font-medium relative group"
              href="/"
            >
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </a>

            {/* Games Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 hover:text-primary transition-colors font-medium group"
                onClick={() => setIsGamesMenuOpen(!isGamesMenuOpen)}
              >
                Games
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isGamesMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isGamesMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-dark-card border border-dark rounded-xl shadow-2xl py-2 z-50 animate-fade-in">
                  <div className="px-3 py-2 border-b border-dark">
                    <span className="text-xs text-muted font-semibold uppercase tracking-wider">
                      Jogos Suportados
                    </span>
                  </div>
                  {games.map((game, index) => (
                    <a
                      key={game.name}
                      href={game.href}
                      className="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-dark-tertiary transition-all duration-200 group animate-fade-in"
                      onClick={() => setIsGamesMenuOpen(false)}
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                        {game.icon}
                      </span>
                      <span className="font-medium">{game.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              className="hover:text-primary transition-colors font-medium relative group"
              href="#guides"
            >
              Guias
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              className="hover:text-primary transition-colors font-medium relative group"
              href="#builds"
            >
              Builds
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </a>
            <a
              className="hover:text-primary transition-colors font-medium relative group"
              href="#news"
            >
              Notícias
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Buscar guias..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-dark w-64 pl-10 text-sm"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Live Status */}
            <div className="hidden xl:flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-red-500/25 transition-shadow">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse-soft"></div>
              AO VIVO
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-18 z-40 bg-dark-secondary/95 backdrop-blur-md animate-fade-in">
            <div className="h-full overflow-y-auto p-4">
              <div className="space-y-4">
                {/* Home */}
                <a
                  href="/"
                  className="flex items-center gap-3 px-4 py-3 text-secondary hover:text-primary hover:bg-dark-card rounded-lg transition-colors"
                >
                  <span className="text-xl">🏠</span>
                  <span className="font-medium">Home</span>
                </a>

                {/* Games Section */}
                <div className="space-y-2">
                  <div className="px-4 py-2">
                    <span className="text-xs text-muted font-semibold uppercase tracking-wider">
                      🎮 Games
                    </span>
                  </div>
                  {games.map((game) => (
                    <div key={game.name} className="space-y-1">
                      <a
                        href={game.href}
                        className="flex items-center gap-3 px-6 py-3 text-secondary hover:text-primary hover:bg-dark-card rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-lg">{game.icon}</span>
                        <span className="font-medium">{game.name}</span>
                      </a>
                    </div>
                  ))}
                </div>

                {/* Tools Section */}
                <div className="space-y-2">
                  <div className="px-4 py-2">
                    <span className="text-xs text-muted font-semibold uppercase tracking-wider">
                      🛠️ Ferramentas
                    </span>
                  </div>
                  <a
                    href="#calculator"
                    className="flex items-center gap-3 px-6 py-3 text-secondary hover:text-primary hover:bg-dark-card rounded-lg transition-colors"
                  >
                    <span className="text-lg">🧮</span>
                    <span className="font-medium">Build Calculator</span>
                  </a>
                  <a
                    href="#simulator"
                    className="flex items-center gap-3 px-6 py-3 text-secondary hover:text-primary hover:bg-dark-card rounded-lg transition-colors"
                  >
                    <span className="text-lg">⚡</span>
                    <span className="font-medium">DPS Simulator</span>
                  </a>
                  <a
                    href="#planner"
                    className="flex items-center gap-3 px-6 py-3 text-secondary hover:text-primary hover:bg-dark-card rounded-lg transition-colors"
                  >
                    <span className="text-lg">📋</span>
                    <span className="font-medium">Skill Planner</span>
                  </a>
                </div>

                {/* Community Section */}
                <div className="space-y-2">
                  <div className="px-4 py-2">
                    <span className="text-xs text-muted font-semibold uppercase tracking-wider">
                      👥 Comunidade
                    </span>
                  </div>
                  <a
                    href="#discord"
                    className="flex items-center gap-3 px-6 py-3 text-secondary hover:text-primary hover:bg-dark-card rounded-lg transition-colors"
                  >
                    <span className="text-lg">💬</span>
                    <span className="font-medium">Discord</span>
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="px-4 pt-4 space-y-3 border-t border-dark">
                  <a
                    href="#live"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-3 rounded-lg text-sm font-semibold shadow-lg w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse-soft"></div>
                    Assistir AO VIVO
                  </a>
                  <a
                    href="#discord"
                    className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-lg text-sm font-semibold w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>💬</span>
                    Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Search */}
        <div className="md:hidden border-t border-dark bg-dark-tertiary/95 px-0 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar guias..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-dark w-full pl-10 text-sm"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
