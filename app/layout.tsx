import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Bartio — Digitale producten die werken",
    template: "%s | Bartio",
  },
  description:
    "Bartio ontwerpt en bouwt websites, webshops en mobiele apps voor merken en ondernemers die kwaliteit en stijl vooropstellen.",
  keywords: [
    "website bouwen",
    "app ontwikkeling",
    "webshop",
    "iOS app",
    "Android app",
    "digitaal bureau",
    "Next.js",
    "SwiftUI",
  ],
  authors: [{ name: "Bartio" }],
  creator: "Bartio",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://bartio.nl",
    siteName: "Bartio",
    title: "Bartio — Digitale producten die werken",
    description:
      "Bartio ontwerpt en bouwt websites, webshops en mobiele apps voor merken en ondernemers die kwaliteit en stijl vooropstellen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bartio — Digitale producten die werken",
    description:
      "Bartio ontwerpt en bouwt websites, webshops en mobiele apps voor merken en ondernemers die kwaliteit en stijl vooropstellen.",
  },
  icons: {
    icon: "/logobartio2.png",
    apple: "/logobartio2.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
