"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", id: "home" },
  { href: "/#diensten", label: "Diensten", id: "diensten" },
  { href: "/portfolio", label: "Portfolio", id: "portfolio" },
  { href: "/#over", label: "Over", id: "over" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  const isActive = (href: string) => {
    if (href === "/portfolio") return pathname === "/portfolio";
    if (href === "/") return pathname === "/";
    return false;
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-soft"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleNavClick("/"); }}
            className="flex items-center gap-2.5 group flex-shrink-0"
          >
            <Image
              src="/logobartio.png"
              alt="Bartio"
              width={48}
              height={48}
              className="rounded-xl shadow-sm group-hover:shadow-md transition-shadow"
            />
            <span className="font-display font-bold text-zinc-900 text-lg tracking-tight">
              Bartio
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer",
                  isActive(link.href)
                    ? "text-brand-600 bg-brand-50"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href="/#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("/#contact"); }}
              className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              Project bespreken
            </a>
          </div>

          <button
            className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm pt-16"
          >
            <nav className="flex flex-col p-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={cn(
                      "block px-4 py-3.5 text-lg font-medium rounded-xl transition-colors cursor-pointer",
                      isActive(link.href)
                        ? "text-brand-600 bg-brand-50"
                        : "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50"
                    )}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.05, duration: 0.25 }}
                className="mt-4 pt-4 border-t border-zinc-100"
              >
                <a
                  href="/#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick("/#contact"); }}
                  className="block w-full text-center px-6 py-4 bg-zinc-900 text-white font-medium rounded-xl hover:bg-zinc-700 transition-colors text-base cursor-pointer"
                >
                  Project bespreken
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
