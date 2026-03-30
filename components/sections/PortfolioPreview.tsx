import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPreview() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="mb-14">
          <SectionLabel className="mb-4">Portfolio</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 tracking-tight text-balance">
            Recent werk
          </h2>
          <p className="mt-3 max-w-md text-zinc-500 leading-relaxed">
            Een overzicht van projecten die Bartio heeft ontworpen en gebouwd.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <AnimateIn key={item.id} delay={i * 0.07}>
              <div className="group bg-white rounded-2xl border border-zinc-100 shadow-card overflow-hidden">
                {/* Card image / gradient */}
                <div
                  className={`w-full h-52 bg-gradient-to-br ${item.gradient} flex items-end p-5 relative overflow-hidden`}
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top"
                    />
                  )}
                  <span className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-semibold text-zinc-700 z-10">
                    {item.category}
                  </span>
                  <span className="relative z-10 text-xs font-medium text-zinc-600/70">{item.year}</span>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-zinc-900 text-lg leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed line-clamp-2">
                    {item.shortDescription}
                  </p>
                  {item.externalLink && item.externalLink !== "#" && (
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      Bezoek website ↗
                    </a>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
