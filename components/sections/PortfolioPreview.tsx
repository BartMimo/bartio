import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPreview() {
  const featured = portfolioItems.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel className="mb-4">Portfolio</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 tracking-tight text-balance">
              Geselecteerde projecten
            </h2>
            <p className="mt-3 max-w-md text-zinc-500 leading-relaxed">
              Een greep uit recent werk. Elk project is uniek, doordacht ontworpen en met aandacht
              voor detail gebouwd.
            </p>
          </div>
          <a
            href="#portfolio"
            className="group flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            Alle projecten
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <AnimateIn key={item.id} delay={i * 0.1}>
              <Link
                href={`/portfolio/${item.slug}`}
                className="group block bg-white rounded-2xl border border-zinc-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Card image / gradient */}
                <div
                  className={`w-full h-52 bg-gradient-to-br ${item.gradient} flex items-end p-5 relative overflow-hidden`}
                >
                  <span className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-semibold text-zinc-700">
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-zinc-600/70">{item.year}</span>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-zinc-900 text-lg leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed line-clamp-2">
                    {item.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-5 text-xs font-semibold text-brand-600 group-hover:gap-2 transition-all">
                    Bekijk project
                    <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
