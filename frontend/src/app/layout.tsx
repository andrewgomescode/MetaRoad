import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/main-layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetaRoad - Guias e Builds para MapleStory",
  description:
    "O melhor site de guias, builds e ferramentas para MapleStory Classic e outros MMORPGs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
