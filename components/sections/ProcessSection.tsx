import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Kennismaking",
    description:
      "We starten met een vrijblijvend gesprek. Wat wil je bouwen? Voor wie? Wat zijn de doelen? Dit gesprek vormt de basis van alles wat volgt.",
  },
  {
    number: "02",
    title: "Ontwerp",
    description:
      "We schetsen, prototypen en verfijnen totdat het klopt. Je ziet het eindresultaat al lang voordat er een regel code is geschreven.",
  },
  {
    number: "03",
    title: "Bouw",
    description:
      "Met goedgekeurd ontwerp beginnen we de bouw. Schone code, getest op alle apparaten, en je bent altijd welkom om mee te kijken.",
  },
  {
    number: "04",
    title: "Oplevering",
    description:
      "We leveren het product op, begeleiden de lancering en zorgen dat alles soepel loopt. Ook daarna sta je er niet alleen voor.",
  },
];

export default function ProcessSection() {
  return (
    <section id="werkwijze" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <SectionLabel className="mb-4">Werkwijze</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 tracking-tight text-balance">
            Van idee naar product, stap voor stap
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-zinc-500 leading-relaxed">
            Een helder proces zonder verrassingen. Je weet altijd wat de volgende stap is.
          </p>
        </AnimateIn>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-zinc-100 mx-[calc(12.5%+1.5rem)]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 0.1}>
                <div className="relative">
                  {/* Step number bubble */}
                  <div className="w-20 h-20 rounded-2xl bg-white border border-zinc-100 shadow-card flex items-center justify-center mb-6">
                    <span className="font-display font-bold text-2xl text-brand-600">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-zinc-900 text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
