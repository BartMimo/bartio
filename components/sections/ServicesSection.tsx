import { Globe, ShoppingBag, Smartphone, Watch, TabletSmartphone } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description:
      "Van strakke portfoliosites tot complexe bedrijfswebsites. Snel, toegankelijk en optimaal gevonden in Google.",
    color: "bg-blue-50 text-blue-600",
    border: "hover:border-blue-100",
  },
  {
    icon: ShoppingBag,
    title: "Webshops",
    description:
      "E-commerce die converteert. Met soepele checkout, veilige betalingen en een winkelervaring die vertrouwen wekt.",
    color: "bg-emerald-50 text-emerald-600",
    border: "hover:border-emerald-100",
  },
  {
    icon: Smartphone,
    title: "iOS Apps",
    description:
      "Native iPhone en iPad apps in SwiftUI. Gebouwd met de kwaliteit en verfijning die Apple-gebruikers verwachten.",
    color: "bg-violet-50 text-violet-600",
    border: "hover:border-violet-100",
  },
  {
    icon: Watch,
    title: "Apple Watch Apps",
    description:
      "Compacte watchOS-apps die precies de juiste informatie tonen op precies het juiste moment.",
    color: "bg-sky-50 text-sky-600",
    border: "hover:border-sky-100",
  },
  {
    icon: TabletSmartphone,
    title: "Android Apps",
    description:
      "Moderne Android-apps in Kotlin en Jetpack Compose. Bereik het volledige Android-ecosysteem.",
    color: "bg-amber-50 text-amber-600",
    border: "hover:border-amber-100",
  },
];

export default function ServicesSection() {
  return (
    <section id="diensten" className="py-24 lg:py-32 bg-zinc-50/60">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-14">
          <SectionLabel className="mb-4">Diensten</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 tracking-tight text-balance">
            Alles wat je nodig hebt,
            <br />
            op één plek
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-zinc-500 leading-relaxed">
            Bartio bouwt het volledige spectrum van digitale producten. Of je nu een website, een
            webshop of een mobiele app nodig hebt — we begeleiden je van idee tot lancering.
          </p>
        </AnimateIn>

        <div className="flex flex-wrap justify-center gap-5">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.07} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
              <div
                className={`p-7 bg-white rounded-2xl border border-zinc-100 shadow-card hover:shadow-card-hover transition-all duration-300 ${service.border} hover:-translate-y-0.5`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${service.color}`}
                >
                  <service.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-semibold text-zinc-900 text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
