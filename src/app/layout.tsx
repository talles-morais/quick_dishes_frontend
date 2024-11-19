import type { Metadata } from "next";
import "./globals.css";
import QueryClientProvider from "./QueryClientProvider";
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: "QuickDishes",
  description: "Seu gestor de delivery!",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider>
        <html lang="pt-br" className={inter.className}>
          <body className="bg-dark">{children}</body>
        </html>
    </QueryClientProvider>
  );
}
