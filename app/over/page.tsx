import type { Metadata } from "next";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Over Bartio",
  description:
    "Bartio is een digitale studio in Nederland die websites, webshops en mobiele apps bouwt voor merken en ondernemers die kwaliteit serieus nemen.",
  alternates: {
    canonical: "https://www.bartio.nl/over",
  },
  openGraph: {
    title: "Over Bartio | Digitale studio Nederland",
    description:
      "Bartio is een digitale studio in Nederland die websites, webshops en mobiele apps bouwt voor merken en ondernemers die kwaliteit serieus nemen.",
    url: "https://www.bartio.nl/over",
  },
};

const values = [
  {
    title: "Kwaliteit boven snelheid",
    description:
      "We nemen de tijd om iets goed te doen. Dat betekent niet traag — het betekent doordacht. Elke beslissing heeft een reden.",
  },
  {
    title: "Eenvoud als ontwerpprincipe",
    description:
      "De beste interface is de interface die je niet opmerkt. We ontwerpen zo dat het voor de gebruiker vanzelf spreekt.",
  },
  {
    title: "Eerlijk en direct",
    description:
      "We zeggen wat we denken, ook als dat ongemakkelijk is. Geen verkooppraatjes, geen beloftes die we niet kunnen waarmaken.",
  },
  {
    title: "Gebouwd om te groeien",
    description:
      "Wat we bouwen moet niet alleen vandaag werken, maar ook over twee jaar. We denken verder dan de lancering.",
  },
];

export default function OverPage() {
  return (
    <>
      <div className="pt-24 pb-0 lg:pt-32">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="max-w-3xl">
            <AnimateIn>
              <SectionLabel className="mb-4">Over Bartio</SectionLabel>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-zinc-900 tracking-tight text-balance leading-tight">
                Digitale producten met karakter.
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <p className="mt-6 text-xl text-zinc-500 leading-relaxed">
                Bartio is een digitale studio die websites, webshops en mobiele apps bouwt voor
                merken en ondernemers die kwaliteit serieus nemen.
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* Divider visual */}
        <AnimateIn>
          <div className="max-w-7xl mx-auto px-6 mb-24">
            <div className="w-full h-56 md:h-72 rounded-3xl bg-gradient-to-br from-brand-50 via-brand-100 to-violet-100 relative overflow-hidden shadow-soft flex items-center justify-center">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 50%, rgba(101,55,238,0.15) 0%, transparent 60%)",
                }}
              />
              <p className="relative font-display font-bold text-5xl md:text-7xl text-brand-600/20 select-none tracking-tighter text-center px-6">
                Ontwerp. Bouw. Lanceer.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Story */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <AnimateIn>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-zinc-900 tracking-tight mb-6">
                Wie is Bartio?
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Bartio is opgericht vanuit een eenvoudige gedachte: veel digitale producten zien
                  er ofwel goed uit maar werken niet, of werken wel maar zien er niet uit. Waarom
                  niet allebei?
                </p>
                <p>
                  We combineren sterk visueel ontwerp met solide technische bouw. Niet omdat het
                  klinkt als een goed verhaal, maar omdat we geloven dat één zonder de ander nooit
                  volledig is.
                </p>
                <p>
                  Of het nu gaat om een eenvoudige bedrijfswebsite, een complexe webshop of een
                  native iOS-app — elk project krijgt dezelfde aandacht. Van de eerste schets tot
                  de dag van lancering.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-zinc-900 tracking-tight mb-6">
                Hoe we werken
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  We houden van duidelijkheid. Dat begint al in het eerste gesprek: wat wil je
                  bereiken, voor wie maak je dit, en wanneer moet het klaar zijn? Pas als we die
                  vragen hebben beantwoord, beginnen we met ontwerpen.
                </p>
                <p>
                  We werken iteratief. Je ziet vroeg hoe het eruit gaat zien, zodat we kunnen
                  bijsturen voordat er iets gebouwd is. Minder verrassingen, betere resultaten.
                </p>
                <p>
                  Na de lancering staan we je bij. Niet met automatische e-mails en chatbots, maar
                  met een directe lijn naar de mensen die het gebouwd hebben.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Values */}
        <div className="bg-zinc-50/60 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateIn className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-zinc-900 tracking-tight">
                Waar we in geloven
              </h2>
            </AnimateIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((value, i) => (
                <AnimateIn key={value.title} delay={i * 0.07}>
                  <div className="p-7 bg-white rounded-2xl border border-zinc-100 shadow-card h-full">
                    <h3 className="font-display font-semibold text-zinc-900 text-lg mb-3">
                      {value.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed text-sm">{value.description}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection
        title="Werken we samen?"
        description="Of je nu een helder plan hebt of een vaag idee — we denken graag mee. Neem vrijblijvend contact op."
        primaryLabel="Vertel ons over je project"
        primaryHref="/#contact"
        secondaryLabel="Bekijk ons werk"
        secondaryHref="/portfolio"
      />
    </>
  );
}
