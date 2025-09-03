"use client";

import React, { useEffect, useRef } from "react";
import { useSidebar } from "./SidebarContext";

export default function NavigationSidebar() {
  const { isExpanded, toggleSidebar } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const games = [
    {
      id: "poe2",
      name: "Path of Exile 2",
      href: "/poe2",
      emoji: "⚔️",
    },
    {
      id: "diablo4",
      name: "Diablo IV",
      href: "/d4",
      emoji: "🔥",
    },
    {
      id: "wow",
      name: "World of Warcraft",
      href: "/wow",
      emoji: "🛡️",
    },
    {
      id: "lastepoch",
      name: "Last Epoch",
      href: "/last-epoch",
      emoji: "⚡",
    },
    {
      id: "poe",
      name: "Path of Exile",
      href: "/poe",
      emoji: "💎",
    },
    {
      id: "d2",
      name: "Diablo II: R",
      href: "/d2",
      emoji: "⚖️",
    },
    {
      id: "lostark",
      name: "Lost Ark",
      href: "/lost-ark",
      emoji: "🏰",
    },
    {
      id: "destiny2",
      name: "Destiny 2",
      href: "/destiny-2",
      emoji: "🌟",
    },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isExpanded &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded, toggleSidebar]);

  return (
    <nav
      ref={sidebarRef}
      className={`bg-dark-primary fixed inset-y-0 left-0 z-[110] hidden md:flex flex-col justify-between gap-0 py-4 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-24"
      }`}
    >
      {/* Main Content */}
      <div className="flex flex-[0_1_auto] flex-col overflow-hidden">
        {/* Logo */}
        <div
          className={`flex items-center h-18 transition-all duration-300 ${
            isExpanded ? "justify-start px-6" : "justify-center"
          }`}
        >
          <a href="/" className="flex items-center gap-3">
            <div
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg w-9 h-10 flex-shrink-0"
              title="MetaRoad"
            >
              M
            </div>
            {isExpanded && (
              <div className="overflow-hidden">
                <h1 className="text-primary font-bold text-xl whitespace-nowrap">
                  Meta Road
                </h1>
                <p className="text-muted text-xs -mt-1 whitespace-nowrap">
                  Gaming Guides
                </p>
              </div>
            )}
          </a>
        </div>

        {/* Expand/Collapse Button */}
        <div className="pt-10 mb-6 flex h-8 cursor-pointer select-none items-center gap-3 pl-8">
          <div
            className="bg-dark-primary border-dark-5 flex h-8 w-8 items-center justify-center rounded-lg border border-dark hover:border-border-hover transition-colors"
            onClick={toggleSidebar}
          >
            <svg
              className={`w-6 h-6 text-white transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
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
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="scrollbar-hidden overflow-auto">
          <ul className="flex flex-col gap-2">
            {/* Home */}
            <li className={`relative pt-[6px] ${isExpanded ? "px-4" : "px-6"}`}>
              <div>
                <a
                  href="/"
                  className={`group flex h-12 flex-row items-center cursor-pointer ${
                    isExpanded ? "justify-start gap-3" : "justify-center"
                  }`}
                  title="Home"
                >
                  <div
                    className={`flex items-center justify-center rounded-lg transition-colors group-hover:bg-dark-tertiary ${
                      isExpanded ? "h-10 w-10 px-2" : "h-full w-full px-3"
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-muted group-hover:text-secondary transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  {isExpanded && (
                    <span className="text-secondary group-hover:text-primary transition-colors font-medium whitespace-nowrap">
                      Home
                    </span>
                  )}
                </a>
              </div>
            </li>

            {/* Games Section */}
            <li className="relative px-6 pt-[6px]">
              <div>
                <div
                  className="group flex h-12 flex-row items-center justify-center cursor-pointer"
                  title="Games"
                >
                  <div className="flex h-full w-full items-center justify-center rounded-lg px-3 group-hover:bg-dark-tertiary transition-colors">
                    <svg
                      className="w-6 h-6 text-muted group-hover:text-secondary transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Games List */}
                <ul className="flex list-none flex-col gap-4 py-4 md:pt-[10px] md:pb-2">
                  {games.map((game) => (
                    <li key={game.id} className="group/game relative">
                      <a
                        href={game.href}
                        className={`flex cursor-pointer flex-row items-center transition-all duration-200 ${
                          isExpanded
                            ? "h-12 justify-start px-4"
                            : "h-10 justify-center"
                        }`}
                        title={game.name}
                      >
                        <div
                          className={`flex items-center ${
                            isExpanded ? "gap-3" : ""
                          }`}
                        >
                          <div className="bg-dark-primary flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 p-1 border-dark group-hover/game:border-border-hover transition-colors">
                            <span className="text-lg">{game.emoji}</span>
                          </div>
                          {isExpanded && (
                            <span className="text-secondary group-hover/game:text-primary transition-colors font-medium whitespace-nowrap">
                              {game.name}
                            </span>
                          )}
                        </div>
                      </a>
                    </li>
                  ))}

                  {/* More Games */}
                  <li className="group/game relative">
                    <div
                      className="flex h-12 cursor-pointer flex-row items-center justify-center rounded-lg group-hover/game:bg-dark-tertiary transition-colors"
                      title="More Games"
                    >
                      <div className="flex h-full w-full items-center">
                        <div className="relative flex h-12 w-12 items-center justify-center">
                          <div className="flex h-12 w-12 items-center justify-center overflow-hidden p-1">
                            <svg
                              className="w-6 h-6 text-muted"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>

            {/* Store */}
            <li className="group relative px-6">
              <div>
                <a
                  href="/shop"
                  className="flex h-12 flex-row items-center justify-center cursor-pointer"
                  title="Store"
                >
                  <div className="flex h-full w-full items-center justify-center px-3 rounded-lg group-hover:bg-dark-tertiary transition-colors">
                    <svg
                      className="w-6 h-6 text-muted group-hover:text-secondary transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </li>

            {/* Gift (Coming Soon) */}
            <li className="group relative px-6">
              <div>
                <div
                  className="flex h-12 flex-row items-center justify-center text-muted"
                  title="Coming Soon"
                >
                  <div className="flex h-full w-full items-center justify-center px-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-muted"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </li>

            {/* About Us */}
            <li className="group relative px-6">
              <div>
                <a
                  href="#"
                  className="flex h-12 flex-row items-center justify-center cursor-pointer"
                  title="About Us"
                >
                  <div className="flex h-full w-full items-center justify-center px-3 rounded-lg group-hover:bg-dark-tertiary transition-colors">
                    <svg
                      className="w-6 h-6 text-muted group-hover:text-secondary transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </li>

            {/* Contact Us */}
            <li className="group relative px-6">
              <div>
                <a
                  href="/contact-us"
                  className="flex h-12 flex-row items-center justify-center cursor-pointer"
                  title="Contact Us"
                >
                  <div className="flex h-full w-full items-center justify-center px-3 rounded-lg group-hover:bg-dark-tertiary transition-colors">
                    <svg
                      className="w-6 h-6 text-muted group-hover:text-secondary transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <div className=""></div>
    </nav>
  );
}
