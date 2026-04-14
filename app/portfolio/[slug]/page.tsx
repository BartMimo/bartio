import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import CTASection from "@/components/sections/CTASection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.shortDescription,
    alternates: {
      canonical: `https://www.bartio.nl/portfolio/${item.slug}`,
    },
    openGraph: {
      title: `${item.title} | Bartio`,
      description: item.shortDescription,
      url: `https://www.bartio.nl/portfolio/${item.slug}`,
      type: "article",
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <>
      <article className="pt-24 lg:pt-32 pb-0">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Terug naar portfolio
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold">
              {item.category}
            </span>
            <span className="text-zinc-400 text-sm">{item.year}</span>
            {item.client && (
              <span className="text-zinc-400 text-sm">— {item.client}</span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-zinc-900 tracking-tight text-balance leading-tight mb-6">
            {item.title}
          </h1>
          <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl">
            {item.shortDescription}
          </p>
        </div>

        {/* Hero visual */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div
            className={`w-full aspect-[16/7] rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden shadow-elevated`}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 70% 30%, ${item.accentColor}30, transparent 60%)`,
              }}
            />
            <span className="relative font-display font-bold text-6xl md:text-8xl lg:text-9xl text-white/20 select-none tracking-tighter">
              {item.title}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-xl font-display font-semibold text-zinc-900 mb-4">
                  Over het project
                </h2>
                <div className="prose prose-zinc max-w-none">
                  {item.fullDescription.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-zinc-600 leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {item.challenge && (
                <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wide mb-3">
                    De uitdaging
                  </h3>
                  <p className="text-zinc-600 leading-relaxed text-sm">{item.challenge}</p>
                </div>
              )}

              {item.solution && (
                <div className="p-6 bg-brand-50 rounded-2xl border border-brand-100">
                  <h3 className="text-sm font-semibold text-brand-700 uppercase tracking-wide mb-3">
                    De oplossing
                  </h3>
                  <p className="text-brand-800/70 leading-relaxed text-sm">{item.solution}</p>
                </div>
              )}

              {item.result && (
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <h3 className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-3">
                    Het resultaat
                  </h3>
                  <p className="text-emerald-800/70 leading-relaxed text-sm">{item.result}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech stack */}
              {item.techStack.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
                    Technologie
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-zinc-100 text-zinc-700 text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {item.tags.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
                    Labels
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* External link */}
              {item.externalLink && item.externalLink !== "#" && (
                <div>
                  <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-4">
                    Bekijk live
                  </h3>
                  <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-700 transition-colors"
                  >
                    Open project
                    <ExternalLink size={13} />
                  </a>
                </div>
              )}

              {/* CTA block */}
              <div className="p-6 bg-zinc-900 rounded-2xl text-white">
                <p className="font-display font-semibold text-base mb-2">
                  Soortgelijk project?
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  Vertel ons over jouw idee. We denken graag mee.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                >
                  Neem contact op →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        title="Jouw project is het volgende."
        description="Bartio bouwt digitale producten die indruk maken. Laat ons horen wat jij wilt bereiken."
        primaryLabel="Gesprek inplannen"
        primaryHref="/#contact"
        secondaryLabel="Meer projecten"
        secondaryHref="/portfolio"
      />
    </>
  );
}
