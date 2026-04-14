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
  metadataBase: new URL("https://www.bartio.nl"),
  title: {
    default: "Bartio — Digitale producten die werken",
    template: "%s | Bartio",
  },
  description:
    "Bartio ontwerpt en bouwt websites, webshops en mobiele apps voor ondernemers en merken in Nederland die kwaliteit en stijl vooropstellen.",
  keywords: [
    "website laten bouwen",
    "webshop laten bouwen",
    "app laten bouwen",
    "iOS app ontwikkeling",
    "Android app ontwikkeling",
    "Next.js developer Nederland",
    "SwiftUI developer",
    "digitaal bureau Nederland",
    "freelance webdeveloper",
    "website bouwen Nederland",
    "Bartio",
  ],
  authors: [{ name: "Bartio", url: "https://www.bartio.nl" }],
  creator: "Bartio",
  alternates: {
    canonical: "https://www.bartio.nl",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.bartio.nl",
    siteName: "Bartio",
    title: "Bartio — Digitale producten die werken",
    description:
      "Bartio ontwerpt en bouwt websites, webshops en mobiele apps voor ondernemers en merken in Nederland die kwaliteit en stijl vooropstellen.",
    images: [
      {
        url: "/logobartio2.png",
        width: 512,
        height: 512,
        alt: "Bartio logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bartio — Digitale producten die werken",
    description:
      "Bartio ontwerpt en bouwt websites, webshops en mobiele apps voor ondernemers en merken in Nederland die kwaliteit en stijl vooropstellen.",
    images: ["/logobartio2.png"],
  },
  icons: {
    icon: "/logobartio2.png",
    apple: "/logobartio2.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bartio",
  url: "https://www.bartio.nl",
  logo: "https://www.bartio.nl/logobartio2.png",
  description:
    "Bartio ontwerpt en bouwt websites, webshops en mobiele apps voor ondernemers en merken in Nederland.",
  areaServed: "NL",
  serviceType: [
    "Website ontwikkeling",
    "Webshop ontwikkeling",
    "iOS app ontwikkeling",
    "Android app ontwikkeling",
    "Apple Watch app ontwikkeling",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
