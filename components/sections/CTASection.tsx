import { ArrowRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Klaar om iets moois te bouwen?",
  description = "Vertel ons over je project. We denken graag mee, ook als het idee nog prille is.",
  primaryLabel = "Project bespreken",
  primaryHref = "mailto:hallo@bartio.nl",
  secondaryLabel = "Bekijk het portfolio",
  secondaryHref = "#portfolio",
}: CTASectionProps) {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <div className="relative rounded-3xl bg-zinc-900 px-8 py-16 md:px-16 md:py-20 overflow-hidden text-center">
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 0%, rgba(101,55,238,0.35) 0%, transparent 65%), radial-gradient(ellipse at 20% 100%, rgba(101,55,238,0.2) 0%, transparent 60%)",
              }}
            />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight text-balance leading-tight">
                {title}
              </h2>
              <p className="mt-5 max-w-lg mx-auto text-zinc-400 leading-relaxed text-lg">
                {description}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href={primaryHref}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 rounded-full font-medium text-sm hover:bg-zinc-100 transition-colors shadow-sm"
                >
                  {primaryLabel}
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </a>
                <a
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-medium text-sm hover:border-white/40 hover:bg-white/5 transition-colors"
                >
                  {secondaryLabel}
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
