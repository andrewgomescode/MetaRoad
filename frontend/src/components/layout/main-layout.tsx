"use client";

import { useState, useEffect } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-dark-1 text-white">
      <Header onMenuToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
        isMobile={isMobile}
      />

      {/* Main Content */}
      <main className="md:pl-64 transition-all duration-300 ease-in-out">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}

export default MainLayout;
