"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, ShoppingBag, Smartphone, Watch, TabletSmartphone } from "lucide-react";

const services = [
  { icon: Globe, label: "Website", color: "bg-white/10 text-white border-white/20" },
  { icon: ShoppingBag, label: "Webshop", color: "bg-white/10 text-white border-white/20" },
  { icon: Smartphone, label: "iOS App", color: "bg-white/10 text-white border-white/20" },
  { icon: Watch, label: "Watch App", color: "bg-white/10 text-white border-white/20" },
  { icon: TabletSmartphone, label: "Android App", color: "bg-white/10 text-white border-white/20" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 6 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-28 lg:pt-48 lg:pb-40 overflow-hidden bg-zinc-950"
    >
      {/* Purple glow top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(101,55,238,0.45) 0%, transparent 65%)",
        }}
      />
      {/* Subtle bottom glow for transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(9,9,11,0.6))",
        }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 hero-dot-grid opacity-[0.07] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Service pills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {services.map((service) => (
            <motion.span
              key={service.label}
              variants={pillVariants}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${service.color}`}
            >
              <service.icon size={12} strokeWidth={2} />
              {service.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl md:text-6xl lg:text-[5rem] font-display font-bold text-center text-white leading-[1.06] tracking-tight text-balance"
        >
          Digitale producten
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #9575FF 0%, #6537EE 50%, #B8A5FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            die je trots op bent.
          </span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 max-w-xl mx-auto text-center text-lg text-zinc-400 leading-relaxed"
        >
          Bartio ontwerpt en bouwt websites, webshops en mobiele apps voor ambitieuze merken en
          ondernemers. Van eerste concept tot werkend product.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.44, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <button
            onClick={() => scrollTo("portfolio")}
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-zinc-900 rounded-full font-medium text-sm hover:bg-zinc-100 transition-colors shadow-sm"
          >
            Bekijk het portfolio
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white rounded-full font-medium text-sm hover:border-white/40 hover:bg-white/5 transition-colors"
          >
            Neem contact op
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="mt-10 text-center text-xs text-zinc-500"
        >
          Vertrouwd door ondernemers en merken door heel Nederland
        </motion.p>
      </div>
    </section>
  );
}
