import type { Metadata } from "next";
import { Bungee, Rubik } from "next/font/google";
import "./globals.scss";
import { LenisProvider } from "@/providers/lenis-provider";

const bungee = Bungee({
  variable: "--font-bungee",
  weight: "400",
  subsets: ["latin"],
});

const mainFont = Rubik({
  variable: "--font-main",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Разработчик сайтов на React и Next.js",
  description: "Разработка сайтов по адекватным ценам! 50% предоплата, вы получите результат и сможете наблюдать за проектом в любое время!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bungee.variable} ${mainFont.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
