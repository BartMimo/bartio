"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioItem } from "@/data/portfolio";

export default function ProjectModal({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`w-full h-56 bg-gradient-to-br ${item.gradient} relative overflow-hidden rounded-t-3xl`}>
            {item.image && (
              <Image src={item.image} alt={item.title} fill sizes="672px" className="object-cover object-top" />
            )}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-sm"
            >
              <X size={16} className="text-zinc-700" />
            </button>
            <span className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-sm text-xs font-semibold text-zinc-700 shadow-sm z-10">
              {item.category}
            </span>
          </div>

          <div className="p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="font-display font-bold text-2xl text-zinc-900">{item.title}</h2>
              <span className="flex-shrink-0 text-sm text-zinc-400">{item.year}</span>
            </div>

            <p className="text-zinc-600 leading-relaxed mb-6">{item.shortDescription}</p>

            {item.challenge && (
              <div className="mb-5">
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-2">Uitdaging</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.challenge}</p>
              </div>
            )}
            {item.solution && (
              <div className="mb-5">
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-2">Aanpak</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.solution}</p>
              </div>
            )}
            {item.result && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-2">Resultaat</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{item.result}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mb-6">
              {item.techStack.map((tech) => (
                <span key={tech} className="inline-flex items-center px-2.5 py-1 rounded-md bg-zinc-50 text-zinc-600 text-xs font-medium border border-zinc-100">
                  {tech}
                </span>
              ))}
            </div>

            {item.externalLink && (
              <a
                href={item.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-700 transition-colors"
              >
                Bezoek website ↗
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
