import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundGradient from "@/components/BackgroundGradient";
import Header from "@/components/Header";

export const runtime = 'edge'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zach Feldman",
  description: "Software Leader",
  icons: {
    icon: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-white">
      <body className={inter.className}>
        <BackgroundGradient />
        {children}
        <Header />
        </body>
    </html>
  );
}
