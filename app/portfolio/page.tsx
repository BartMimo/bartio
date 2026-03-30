"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems, allCategories, PortfolioCategory } from "@/data/portfolio";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

export default function PortfolioPage() {
  const [active, setActive] = useState<PortfolioCategory | "Alle">("Alle");

  const filtered =
    active === "Alle"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <div className="pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimateIn className="max-w-2xl mb-12">
          <SectionLabel className="mb-4">Portfolio</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 tracking-tight text-balance">
            Recent werk
          </h1>
          <p className="mt-4 text-zinc-500 leading-relaxed text-lg">
            Een overzicht van projecten die Bartio heeft ontworpen en gebouwd. Van websites en
            webshops tot iOS, watchOS en Android apps.
          </p>
        </AnimateIn>

        {/* Filter */}
        <AnimateIn delay={0.1} className="mb-12">
          <PortfolioFilter
            categories={allCategories}
            active={active}
            onChange={setActive}
          />
        </AnimateIn>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-400">
            Geen projecten gevonden in deze categorie.
          </div>
        )}
      </div>
    </div>
  );
}
