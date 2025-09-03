import "./globals.css";
import React from "react";
import ReactQueryProvider from "../components/react-query-provider";
import { SidebarProvider } from "../components/SidebarContext";

export const metadata = {
  title: "MetaRoad",
  description: "Guias de jogos - WordPress Headless + Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-dark-primary text-primary antialiased">
        <ReactQueryProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
