import type { Metadata } from "next";
import { Bungee, Rubik } from "next/font/google";
import "./globals.scss";
import LenisProvider from "@/providers/lenis-provider";
import Header from "@/components/ui/header";
import PrismHighlighter from "@/components/common/prism-highlighter";

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
  metadataBase: new URL('https://z1mo0x.vercel.app'),
  title: 'Андрей — Frontend Developer',
  description:
    'Разработка сайтов на React и Next.js. Создаю быстрые, понятные и аккуратные интерфейсы с упором на качество, SEO и адаптивность.',
  keywords: [
    'frontend developer',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'верстка',
    'SEO',
    'веб-разработка',
    'портфолио',
    'блог',
  ],
  authors: [{ name: 'Андрей' }],
  creator: 'Андрей',
  publisher: 'Андрей',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Андрей — Frontend Developer',
    description:
      'Разработка сайтов на React и Next.js с упором на скорость, SEO и качество интерфейса.',
    url: 'https://z1mo0x.vercel.app',
    siteName: 'Андрей — Frontend Developer',
    locale: 'ru_RU',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Андрей — Frontend Developer',
    description:
      'Разработка сайтов на React и Next.js с упором на скорость, SEO и качество интерфейса.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <body
        className={`${bungee.variable} ${mainFont.variable} antialiased`}
      >
        <LenisProvider>
          <Header />
          {children}
          <PrismHighlighter />
        </LenisProvider>
      </body>
    </html >
  );
}
