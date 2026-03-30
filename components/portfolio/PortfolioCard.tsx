import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PortfolioItem } from "@/data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group block bg-white rounded-2xl border border-zinc-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Visual */}
      <div
        className={`w-full h-56 bg-gradient-to-br ${item.gradient} relative overflow-hidden flex items-end p-5`}
      >
        {item.image && (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <span className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-sm text-xs font-semibold text-zinc-700 shadow-sm z-10">
          {item.category}
        </span>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${item.accentColor}20, transparent)`,
          }}
        />
        <span className="relative z-10 text-xs font-medium text-zinc-600/60">{item.year}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        {item.client && (
          <p className="text-xs text-zinc-400 font-medium mb-1">{item.client}</p>
        )}
        <h3 className="font-display font-semibold text-zinc-900 text-lg leading-snug mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
          {item.shortDescription}
        </p>

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-50 text-zinc-500 text-xs font-medium border border-zinc-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <span className="inline-flex items-center gap-1 mt-5 text-xs font-semibold text-brand-600 group-hover:gap-2 transition-all">
          Bekijk project
          <ArrowRight size={12} />
        </span>
      </div>
    </Link>
  );
}
