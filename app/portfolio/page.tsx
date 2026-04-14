import type { Metadata } from "next";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Bekijk het werk van Bartio: websites, webshops en mobiele apps gebouwd voor ondernemers en merken in Nederland.",
  alternates: {
    canonical: "https://www.bartio.nl/portfolio",
  },
  openGraph: {
    title: "Portfolio | Bartio",
    description:
      "Bekijk het werk van Bartio: websites, webshops en mobiele apps gebouwd voor ondernemers en merken in Nederland.",
    url: "https://www.bartio.nl/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="max-w-2xl mb-16">
          <SectionLabel className="mb-4">Portfolio</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 tracking-tight text-balance">
            Recent werk
          </h1>
          <p className="mt-4 text-zinc-500 leading-relaxed text-lg">
            Een overzicht van projecten die Bartio heeft ontworpen en gebouwd. Klik op een project voor meer info.
          </p>
        </AnimateIn>

        <PortfolioGrid />
      </div>
    </div>
  );
}
