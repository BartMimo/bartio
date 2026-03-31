import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ShoppingBag,
  Smartphone,
  Watch,
  TabletSmartphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Bartio bouwt websites, webshops, iOS apps, Apple Watch apps en Android apps. Ontdek wat we voor jou kunnen doen.",
};

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "Websites",
    subtitle: "Jouw digitale visitekaartje, maar dan echt goed",
    color: "bg-blue-50 text-blue-600",
    borderColor: "border-blue-100",
    intro:
      "Een website is vaak de eerste indruk die iemand van jouw merk krijgt. Die indruk moet kloppen — op elk apparaat, op elk moment. Bartio bouwt websites die snel laden, er goed uitzien en worden gevonden in Google.",
    forWho: "Voor ondernemers, bureaus, studios, consultants en bedrijven die een website willen die écht werkt.",
    focus: [
      "Strakke, op maat gemaakte designs",
      "Snelle laadtijden en goede SEO",
      "Volledig responsief op alle schermen",
      "Gemakkelijk zelf te beheren via CMS",
      "Toegankelijk en semantisch correct",
    ],
    benefits: [
      "Meer bezoekers via organische zoekresultaten",
      "Hogere conversie door heldere structuur",
      "Professionele uitstraling die vertrouwen wekt",
      "Schaalbaar naarmate je bedrijf groeit",
    ],
  },
  {
    id: "webshops",
    icon: ShoppingBag,
    title: "Webshops",
    subtitle: "Online verkopen zonder gedoe",
    color: "bg-emerald-50 text-emerald-600",
    borderColor: "border-emerald-100",
    intro:
      "Een webshop is meer dan een productcatalogus. Het is een verkoopkanaal dat dag en nacht voor je werkt. Bartio bouwt webshops met een soepele winkelervaring, veilige betalingen en een backend die je niet gek maakt.",
    forWho: "Voor merken en retailers die producten online willen verkopen, van kleine boetieks tot grotere aanbieders.",
    focus: [
      "Op maat gebouwde webshop of Shopify-integratie",
      "Geoptimaliseerde checkout met hoge conversie",
      "Veilige betalingen via Stripe of Mollie",
      "Voorraadbeheer en automatische notificaties",
      "Mobiele winkelervaring die echt prettig is",
    ],
    benefits: [
      "Meer online verkopen via een beter klanttraject",
      "Minder verlaten winkelwagentjes",
      "Inzicht in je verkopen via heldere analytics",
      "Schaalbaar voor groeiende productcatalogi",
    ],
  },
  {
    id: "ios",
    icon: Smartphone,
    title: "iOS Apps",
    subtitle: "Native iPhone en iPad apps in SwiftUI",
    color: "bg-violet-50 text-violet-600",
    borderColor: "border-violet-100",
    intro:
      "iOS-gebruikers hebben hoge verwachtingen. Ze zijn gewend aan apps die snel, vloeiend en intuïtief aanvoelen. Bartio bouwt native iOS-apps in SwiftUI die voldoen aan de kwaliteitsstandaard van Apple — en die gebruikers willen blijven gebruiken.",
    forWho: "Voor startups, scale-ups en bedrijven die een iOS-app willen bouwen of verbeteren.",
    focus: [
      "Native SwiftUI voor de beste gebruikerservaring",
      "Integratie met Apple HealthKit, MapKit en meer",
      "Ondersteuning voor iPhone en iPad",
      "App Store-publicatie en review-begeleiding",
      "Toegankelijkheid en Dark Mode ondersteuning",
    ],
    benefits: [
      "Snellere en vloeiendere ervaring dan cross-platform",
      "Betere App Store ratings door native kwaliteit",
      "Volledige integratie met het Apple-ecosysteem",
      "Toekomstbestendig en goed onderhoudbaar",
    ],
  },
  {
    id: "watch",
    icon: Watch,
    title: "Apple Watch Apps",
    subtitle: "Slim op de pols",
    color: "bg-sky-50 text-sky-600",
    borderColor: "border-sky-100",
    intro:
      "De Apple Watch is het meest persoonlijke scherm dat er is. Apps voor de Watch moeten razendsnel informatie overbrengen — want de gebruiker kijkt hooguit vijf seconden. Bartio bouwt watchOS-apps die precies dat doen.",
    forWho: "Voor bedrijven die hun iOS-app willen uitbreiden met een Watch-companion, of een zelfstandige watchOS-app willen bouwen.",
    focus: [
      "Optimale interface voor het kleine watchOS-scherm",
      "Complicaties voor het wijzerplaat",
      "Naadloze communicatie met de bijbehorende iPhone-app",
      "Haptic feedback en notificaties",
      "Laag batterijverbruik door efficiënte code",
    ],
    benefits: [
      "Directe toegang tot informatie, zonder telefoon te pakken",
      "Hogere betrokkenheid bij time-sensitive content",
      "Onderscheidend aanbod ten opzichte van concurrenten",
      "Unieke kans op de pols van jouw gebruikers",
    ],
  },
  {
    id: "android",
    icon: TabletSmartphone,
    title: "Android Apps",
    subtitle: "Bereik iedereen, op elk apparaat",
    color: "bg-amber-50 text-amber-600",
    borderColor: "border-amber-100",
    intro:
      "Android heeft wereldwijd het grootste marktaandeel. Wie zijn app ook voor Android bouwt, bereikt een aanzienlijk groter publiek. Bartio bouwt moderne Android-apps in Kotlin en Jetpack Compose — snel, stabiel en goed getest.",
    forWho: "Voor bedrijven en startups die hun app beschikbaar willen maken voor Android-gebruikers.",
    focus: [
      "Native Kotlin en Jetpack Compose",
      "Compatibel met een breed scala aan Android-apparaten",
      "Google Play Store publicatie",
      "Integratie met Firebase, Maps, Biometrics en meer",
      "Material Design 3 richtlijnen",
    ],
    benefits: [
      "Toegang tot het grootste mobiele platform ter wereld",
      "Native prestaties op alle Android-apparaten",
      "Consistente ervaring naast een eventuele iOS-app",
      "Eenvoudig door te ontwikkelen na lancering",
    ],
  },
];

export default function DienstenPage() {
  return (
    <>
      <div className="pt-24 pb-0 lg:pt-32">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <AnimateIn className="max-w-2xl">
            <SectionLabel className="mb-4">Diensten</SectionLabel>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 tracking-tight text-balance">
              Wat Bartio voor je bouwt
            </h1>
            <p className="mt-4 text-zinc-500 leading-relaxed text-lg">
              Van website tot watchOS-app — Bartio bouwt het volledige spectrum van digitale
              producten. Altijd op maat, altijd met aandacht voor kwaliteit.
            </p>
          </AnimateIn>
        </div>

        {/* Services */}
        <div className="max-w-7xl mx-auto px-6 space-y-24 pb-0">
          {services.map((service, i) => (
            <div key={service.id} id={service.id}>
            <AnimateIn>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Left: description */}
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                    <service.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 tracking-tight mb-2">
                    {service.title}
                  </h2>
                  <p className="text-brand-600 font-semibold mb-5">{service.subtitle}</p>
                  <p className="text-zinc-600 leading-relaxed mb-6">{service.intro}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    <strong className="text-zinc-700 font-semibold">Voor wie:</strong>{" "}
                    {service.forWho}
                  </p>

                  <div className="mt-8">
                    <Link
                      href="/#contact"
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors"
                    >
                      Project bespreken
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                  </div>
                </div>

                {/* Right: focus + benefits */}
                <div className="space-y-6">
                  <div className={`p-6 rounded-2xl border ${service.borderColor} bg-white shadow-card`}>
                    <h3 className="font-display font-semibold text-zinc-900 mb-4">
                      Waar Bartio op focust
                    </h3>
                    <ul className="space-y-3">
                      {service.focus.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-zinc-600">
                          <CheckCircle2
                            size={16}
                            className="flex-shrink-0 mt-0.5 text-brand-600"
                            strokeWidth={2}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                    <h3 className="font-display font-semibold text-zinc-900 mb-4">
                      De voordelen
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3 text-sm text-zinc-600">
                          <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {i < services.length - 1 && (
                <div className="mt-20 border-b border-zinc-100" />
              )}
            </AnimateIn>
            </div>
          ))}
        </div>
      </div>

      <CTASection
        title="Welke stap wil jij zetten?"
        description="Neem contact op voor een vrijblijvend gesprek. We bespreken je idee en kijken samen wat de beste aanpak is."
        primaryLabel="Vrijblijvend gesprek"
        primaryHref="/#contact"
        secondaryLabel="Bekijk het portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
