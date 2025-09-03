"use client";

import React from "react";
import GuideCard from "./GuideCard";

type Guide = {
  id: string;
  title: string;
  excerpt?: string;
  difficulty?: "Iniciante" | "Intermediário" | "Avançado";
  isNew?: boolean;
  isUpdated?: boolean;
  estimatedTime?: string;
  category?: string;
};

type Props = {
  title: string;
  description: string;
  gameIcon: string;
  guides: Guide[];
  variant?: "default" | "featured";
  maxGuides?: number;
};

export default function GameSection({
  title,
  description,
  gameIcon,
  guides,
  variant = "default",
  maxGuides = 6,
}: Props) {
  const displayGuides = guides.slice(0, maxGuides);
  const isFeatured = variant === "featured";

  return (
    <section className={`${isFeatured ? "mt-6" : "mt-12"}`}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{gameIcon}</span>
            <div>
              <h2
                className={`m-0 font-bold ${
                  isFeatured ? "text-2xl" : "text-xl"
                }`}
              >
                {title}
              </h2>
              <p className="text-slate-400 text-sm mt-1">{description}</p>
            </div>
          </div>
        </div>

        <a
          href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
        >
          Ver todos
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      {/* Featured Layout for main game sections */}
      {isFeatured ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main featured guide */}
          {displayGuides[0] && (
            <div className="lg:col-span-2">
              <GuideCard
                titleHtml={displayGuides[0].title}
                excerptHtml={displayGuides[0].excerpt}
                gameIcon={gameIcon}
                difficulty={displayGuides[0].difficulty}
                isNew={displayGuides[0].isNew}
                isUpdated={displayGuides[0].isUpdated}
                estimatedTime={displayGuides[0].estimatedTime}
                category={displayGuides[0].category || "Guia Principal"}
              />
            </div>
          )}

          {/* Side guides */}
          <div className="space-y-4">
            {displayGuides.slice(1, 4).map((guide) => (
              <div key={guide.id} className="h-32">
                <GuideCard
                  titleHtml={guide.title}
                  excerptHtml={guide.excerpt}
                  gameIcon={gameIcon}
                  difficulty={guide.difficulty}
                  isNew={guide.isNew}
                  isUpdated={guide.isUpdated}
                  estimatedTime={guide.estimatedTime}
                  category={guide.category}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Standard grid layout */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayGuides.map((guide) => (
            <GuideCard
              key={guide.id}
              titleHtml={guide.title}
              excerptHtml={guide.excerpt}
              gameIcon={gameIcon}
              difficulty={guide.difficulty}
              isNew={guide.isNew}
              isUpdated={guide.isUpdated}
              estimatedTime={guide.estimatedTime}
              category={guide.category}
            />
          ))}
        </div>
      )}

      {/* Show more if there are additional guides */}
      {guides.length > maxGuides && (
        <div className="mt-6 text-center">
          <a
            href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
          >
            Ver mais {guides.length - maxGuides} guias
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      )}
    </section>
  );
}
