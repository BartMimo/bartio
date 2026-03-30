import { PenTool, Code2, Smartphone, Zap, MessageSquare } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

const reasons = [
  {
    icon: PenTool,
    title: "Doordacht ontwerp",
    description:
      "Elk visueel besluit heeft een reden. We ontwerpen niet voor de looks, maar voor de gebruiker — en het resultaat ziet er vanzelf goed uit.",
  },
  {
    icon: Code2,
    title: "Maatwerk ontwikkeling",
    description:
      "Geen templates of goedkope builders. Elk project is van de grond af opgebouwd, op maat voor jouw wensen en doelgroep.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first aanpak",
    description:
      "Meer dan 60% van het webverkeer is mobiel. Elk product dat Bartio bouwt is geoptimaliseerd voor alle schermformaten.",
  },
  {
    icon: Zap,
    title: "Snel en schaalbaar",
    description:
      "Snelle laadtijden, schone code en een architectuur die meegroeit met jouw bedrijf. Geen technische schuld van dag één.",
  },
  {
    icon: MessageSquare,
    title: "Heldere communicatie",
    description:
      "Geen gedoe, geen verrassingen. Je weet altijd waar we staan, wat de volgende stap is en wat het kost.",
  },
];

export default function WhyBartio() {
  return (
    <section id="over" className="py-24 lg:py-32 bg-zinc-50/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: text */}
          <AnimateIn>
            <SectionLabel className="mb-4">Waarom Bartio</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 tracking-tight text-balance leading-tight">
              Kwaliteit zonder compromis, communicatie zonder jargon.
            </h2>
            <p className="mt-5 text-zinc-500 leading-relaxed">
              Bartio is opgericht met één doel: digitale producten bouwen die echt werken voor de
              mensen die ze gebruiken. Geen overbodige complexiteit, geen half werk.
            </p>
            <p className="mt-3 text-zinc-500 leading-relaxed">
              Elke samenwerking begint met luisteren. Pas als we begrijpen wat jij wilt bereiken,
              beginnen we met bouwen.
            </p>
          </AnimateIn>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 gap-4">
            {reasons.map((reason, i) => (
              <AnimateIn key={reason.title} delay={i * 0.06} direction="left">
                <div className="flex gap-4 p-5 bg-white rounded-xl border border-zinc-100 shadow-soft hover:shadow-card transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                    <reason.icon size={18} className="text-brand-600" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-zinc-900 text-sm mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
