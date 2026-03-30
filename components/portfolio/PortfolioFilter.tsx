"use client";

import { PortfolioCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface PortfolioFilterProps {
  categories: PortfolioCategory[];
  active: PortfolioCategory | "Alle";
  onChange: (category: PortfolioCategory | "Alle") => void;
}

export default function PortfolioFilter({ categories, active, onChange }: PortfolioFilterProps) {
  const all = ["Alle", ...categories] as (PortfolioCategory | "Alle")[];

  return (
    <div
      role="group"
      aria-label="Filter op categorie"
      className="flex flex-wrap gap-2"
    >
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            active === cat
              ? "bg-zinc-900 text-white shadow-sm"
              : "bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 hover:bg-zinc-50"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
