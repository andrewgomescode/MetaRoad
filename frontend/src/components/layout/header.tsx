"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
}

function Header({ onMenuToggle, isSidebarOpen }: HeaderProps) {
  const [isGameMenuOpen, setIsGameMenuOpen] = useState(false);

  return (
    <header className="bg-dark-1 h-[72px] w-full select-none sticky top-0 z-[105] flex items-center justify-between px-4 md:px-0">
      {/* Mobile: Logo + Menu Button */}
      <div className="flex items-center md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-white font-bold text-xl">MetaRoad</span>
        </Link>
      </div>

      {/* Desktop: Navigation */}
      <div className="hidden md:flex flex-1 items-center pl-[96px]">
        <div className="flex items-center gap-2 px-3 md:pl-4 lg:gap-4 lg:pl-6 py-5 md:py-6 md:pr-4 lg:pr-6 group relative">
          <div className="w-5 h-5 bg-grey-30 group-hover:bg-white mask-image-[url('/icons/discovery.svg')]"></div>
          <span className="text-grey-30 group-hover:text-white hidden lg:inline">
            Browse Games
          </span>
          <ChevronDown className="w-4 h-4 text-grey-30 group-hover:text-white transition-transform duration-300 ease-in-out group-hover:rotate-180" />

          {/* Dropdown Menu */}
          <div className="absolute top-full z-[200] pt-[10px] hidden group-hover:flex">
            <div className="bg-dark-3 border-dark-5 flex rounded-lg border gap-5 p-6 min-w-[400px]">
              <div className="flex flex-col gap-4 min-w-[120px]">
                <span className="block min-h-[24px] text-grey-30 font-semibold">
                  MMORPG
                </span>
                <div className="flex flex-col gap-5">
                  <Link
                    href="/maplestory"
                    className="flex gap-4 hover:opacity-80"
                  >
                    <div className="flex items-center justify-center">
                      <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                        <span className="text-white font-bold">MS</span>
                      </div>
                    </div>
                    <div className="flex h-full flex-col justify-between">
                      <span className="font-sans font-semibold text-white">
                        MapleStory
                      </span>
                      <span className="text-grey-50 font-sans font-semibold">
                        MMORPG
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Menu Button */}
      <button
        onClick={onMenuToggle}
        className="md:hidden p-2 text-grey-30 hover:text-white transition-colors"
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Header;
