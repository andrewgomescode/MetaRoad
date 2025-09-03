"use client";

import React from "react";
import { useSidebar } from "./SidebarContext";

export default function Footer() {
  const { isExpanded } = useSidebar();

  return (
    <footer
      className={`mt-16 border-t border-dark bg-dark-secondary transition-all duration-300 ${
        isExpanded ? "md:ml-64" : "md:ml-24"
      }`}
    >
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 py-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <strong className="text-xl text-primary font-bold">
                MetaRoad
              </strong>
            </div>
            <p className="text-secondary mb-4 max-w-md leading-relaxed">
              Sua fonte definitiva para guias de jogos, builds otimizadas e
              estratégias avançadas. Criado pela comunidade, para a comunidade.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#discord"
                className="text-secondary hover:text-primary transition-colors"
              >
                <span className="text-xl">💬</span>
              </a>
              <a
                href="#twitter"
                className="text-secondary hover:text-primary transition-colors"
              >
                <span className="text-xl">🐦</span>
              </a>
              <a
                href="#youtube"
                className="text-secondary hover:text-primary transition-colors"
              >
                <span className="text-xl">📺</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#guides"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Todos os Guias
                </a>
              </li>
              <li>
                <a
                  href="#builds"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Database de Builds
                </a>
              </li>
              <li>
                <a
                  href="#tools"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Ferramentas
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Notícias
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-primary font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Termos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-muted text-sm">
            © {new Date().getFullYear()} MetaRoad. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-4 text-sm text-muted">
            <span>Inspirado no Maxroll</span>
            <span>•</span>
            <span>Feito com ❤️ pela comunidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
