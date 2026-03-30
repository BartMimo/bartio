import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateIn className="max-w-2xl mb-16">
          <SectionLabel className="mb-4">Portfolio</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 tracking-tight text-balance">
            Recent werk
          </h1>
          <p className="mt-4 text-zinc-500 leading-relaxed text-lg">
            Een overzicht van projecten die Bartio heeft ontworpen en gebouwd.
          </p>
        </AnimateIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <AnimateIn key={item.id} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-zinc-100 shadow-card overflow-hidden flex flex-col">
                {/* Image */}
                <div className={`w-full h-56 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top"
                    />
                  )}
                  <span className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-sm text-xs font-semibold text-zinc-700 shadow-sm z-10">
                    {item.category}
                  </span>
                  <span className="absolute bottom-4 left-4 text-xs font-medium text-zinc-600/70 z-10">{item.year}</span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-display font-semibold text-zinc-900 text-xl mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    {item.shortDescription}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-50 text-zinc-500 text-xs font-medium border border-zinc-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {item.externalLink && (
                    <div className="mt-auto">
                      <a
                        href={item.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-zinc-200 text-zinc-700 hover:bg-zinc-50 transition-colors"
                      >
                        Bezoek website ↗
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  );
}
