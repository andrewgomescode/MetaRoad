"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  Users,
  Settings,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  isMobile: boolean;
}

function Sidebar({ isOpen, onToggle, isMobile }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { href: "/", icon: Home, label: "Home", active: true },
    { href: "/guides", icon: BookOpen, label: "Guides" },
    { href: "/builds", icon: Users, label: "Builds" },
    { href: "/tools", icon: Settings, label: "Tools" },
  ];

  const handleCollapse = () => {
    if (!isMobile) {
      setIsCollapsed(!isCollapsed);
    }
  };

  if (isMobile) {
    return (
      <>
        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[100] md:hidden"
            onClick={onToggle}
          />
        )}

        {/* Mobile Sidebar */}
        <aside
          className={clsx(
            "fixed top-0 right-0 h-full bg-dark-2 border-l border-dark-5 z-[110] transition-transform duration-300 ease-in-out md:hidden",
            "w-80",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header with Logo */}
            <div className="h-[72px] flex items-center justify-center border-b border-dark-5">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-white font-bold text-xl">MetaRoad</span>
              </Link>
            </div>

            {/* Mobile Menu Items */}
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={clsx(
                          "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                          item.active
                            ? "bg-primary text-white"
                            : "text-grey-30 hover:text-white hover:bg-dark-3"
                        )}
                        onClick={onToggle}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>
      </>
    );
  }

  // Desktop Sidebar
  return (
    <aside
      className={clsx(
        "fixed left-0 top-0 h-full bg-dark-2 border-r border-dark-5 z-[100] transition-all duration-300 ease-in-out hidden md:flex flex-col",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Desktop Logo Area */}
      <div className="h-[72px] flex items-center justify-between px-4 border-b border-dark-5">
        {!isCollapsed && (
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-white font-bold text-xl">MetaRoad</span>
          </Link>
        )}
        {isCollapsed && (
          <Link href="/" className="flex items-center justify-center w-full">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
          </Link>
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative group",
                    item.active
                      ? "bg-primary text-white"
                      : "text-grey-30 hover:text-white hover:bg-dark-3"
                  )}
                >
                  <Icon size={20} />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}

                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-dark-3 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {item.label}
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Collapse Toggle Button */}
      <div className="p-4 border-t border-dark-5">
        <button
          onClick={handleCollapse}
          className="flex items-center justify-center w-full p-2 text-grey-30 hover:text-white hover:bg-dark-3 rounded-lg transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
