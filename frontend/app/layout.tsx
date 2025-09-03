import "./globals.css";
import React from "react";
import ReactQueryProvider from "../components/react-query-provider";

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
    <html lang="pt-BR">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
