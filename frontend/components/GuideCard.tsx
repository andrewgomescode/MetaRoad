"use client";

import React from "react";

type Props = {
  titleHtml: string;
  excerptHtml?: string;
  href?: string;
  category?: string;
  difficulty?: "Iniciante" | "Intermediário" | "Avançado";
  isNew?: boolean;
  isUpdated?: boolean;
  gameIcon?: string;
  estimatedTime?: string;
};

export default function GuideCard({
  titleHtml,
  excerptHtml,
  href = "#",
  category = "Guia",
  difficulty,
  isNew = false,
  isUpdated = false,
  gameIcon = "🎮",
  estimatedTime,
}: Props) {
  const getDifficultyColor = (diff?: string) => {
    switch (diff) {
      case "Iniciante": return "bg-green-600 text-green-100 border-green-500";
      case "Intermediário": return "bg-yellow-600 text-yellow-100 border-yellow-500";
      case "Avançado": return "bg-red-600 text-red-100 border-red-500";
      default: return "bg-gray-600 text-gray-100 border-gray-500";
    }
  };

  return (
    <a
      href={href}
      className="group block card-dark-interactive p-0 animate-fade-in"
    >
      {/* Image/Icon Header */}
      <div className="relative aspect-[16/10] bg-gradient-to-br from-dark-tertiary via-dark-card to-dark-secondary rounded-t-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300">
          {gameIcon}
        </div>
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {isNew && (
            <span className="bg-gradient-to-r from-green-600 to-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse-soft">
              NOVO
            </span>
          )}
          {isUpdated && !isNew && (
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              ATUALIZADO
            </span>
          )}
        </div>

        {/* Category */}
        <div className="absolute top-3 right-3">
          <span className="bg-dark-card/90 backdrop-blur-sm text-secondary px-3 py-1 rounded-full text-xs font-medium border border-dark">
            {category}
          </span>
        </div>

        {/* Time estimate */}
        {estimatedTime && (
          <div className="absolute bottom-3 right-3">
            <span className="bg-dark-card/90 backdrop-blur-sm text-secondary px-3 py-1 rounded-full text-xs flex items-center gap-1.5 border border-dark">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {estimatedTime}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div
          className="text-lg font-bold text-primary group-hover:text-blue-400 transition-colors line-clamp-2 mb-3 leading-tight"
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />

        {/* Excerpt */}
        {excerptHtml && (
          <div
            className="text-secondary text-sm line-clamp-3 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: excerptHtml }}
          />
        )}

        {/* Bottom meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {difficulty && (
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(difficulty)}`}>
                {difficulty}
              </span>
            )}
          </div>
          
          <div className="flex items-center text-muted group-hover:text-secondary transition-colors">
            <span className="text-xs font-medium">Ver guia</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}