export type PortfolioCategory =
  | "Website"
  | "Webshop"
  | "iOS App"
  | "Apple Watch App"
  | "Android App";

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  client?: string;
  year: number;
  shortDescription: string;
  fullDescription: string;
  challenge?: string;
  solution?: string;
  result?: string;
  techStack: string[];
  externalLink?: string;
  image?: string;
  gradient: string;
  gradientDark: string;
  accentColor: string;
  featured?: boolean;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    slug: "julies-art",
    title: "Julies Art",
    category: "Webshop",
    client: "Julies Art",
    year: 2026,
    shortDescription:
      "Een warme webshop voor gepersonaliseerde houten kindercadeaus, met een soepele bestelflow en een speelse, betrouwbare uitstraling.",
    fullDescription: `Julies Art maakt gepersonaliseerde houten cadeaus voor kinderen — op naam, met liefde gemaakt in Nederland. Ze zochten een webshop die hun warmte en kwaliteit uitstraalt én die bezoekers moeiteloos naar een bestelling leidt.

We bouwden een volledige e-commerce shop met productpagina's waar klanten direct hun personalisatie kunnen invullen, een overzichtelijke checkout en integratie met het orderbeheer van de klant. De huisstijl ademt gezelligheid en vertrouwen — precies wat ouders en grootouders zoeken bij een cadeau.`,
    challenge:
      "Gepersonaliseerde producten vragen om een heldere bestelflow. De klant moet direct begrijpen hoe het werkt: wat kan ik invullen, hoe ziet het eindresultaat eruit, en wanneer ontvang ik het?",
    solution:
      "Met een stapsgewijze productconfigurator, previews van de personalisatie en duidelijke levertijden maakten we het bestelproces intuïtief en vertrouwenwekkend. Reviews van echte klanten versterken het gevoel van kwaliteit.",
    result:
      "Julies Art zag direct na de lancering een significante stijging in conversie vergeleken met hun vorige platform.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Vercel"],
    externalLink: "https://juliesart.nl",
    image: "/portfolio/julies-art.jpg",
    gradient: "from-amber-200 via-orange-100 to-yellow-50",
    gradientDark: "from-amber-800 via-orange-700 to-yellow-900",
    accentColor: "#92400E",
    featured: true,
    tags: ["E-commerce", "Personalisatie", "Webshop", "Stripe"],
  },
  {
    id: "2",
    slug: "kortio",
    title: "Kortio",
    category: "iOS App",
    client: "Kortio",
    year: 2026,
    shortDescription:
      "Een iOS & Android app om kortingscodes van honderden merken snel te vinden, bewaren en gebruiken — zonder account, zonder reclame.",
    fullDescription: `Kortio is de slimste manier om kortingscodes te vinden en te gebruiken. De app bundelt actuele codes van honderden merken en laat gebruikers ze in één tik kopiëren. Geen account nodig, geen advertenties — gewoon direct besparen.

We bouwden zowel de iOS- als Android-app, samen met een bijbehorende marketingwebsite. De app is ontworpen voor snelheid: merken bladeren, een code vinden en kopiëren gaat in seconden. Een favorieten-systeem en eigen codebeheer maken Kortio ook handig voor vaste gebruikers.`,
    challenge:
      "De kortingscode-markt is vol met rommelige, advertentie-gedreven sites. Kortio moest het tegenovergestelde zijn: snel, overzichtelijk en eerlijk.",
    solution:
      "Een strakke, merkgerichte interface waarbij de code altijd centraal staat. Haptic feedback bij het kopiëren en een directe link naar de webshop maken de ervaring vloeiend en bevredigend.",
    result:
      "Kortio staat in de App Store en Google Play, met een groeiende gebruikersbasis en positieve reviews over de eenvoud van de app.",
    techStack: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Next.js", "Tailwind CSS"],
    externalLink: "https://kortio.app",
    image: "/portfolio/kortio.jpg",
    gradient: "from-blue-200 via-indigo-100 to-violet-50",
    gradientDark: "from-blue-800 via-indigo-700 to-violet-900",
    accentColor: "#4F46E5",
    featured: true,
    tags: ["iOS", "Android", "Cross-platform", "Marketingsite"],
  },
  {
    id: "3",
    slug: "huisaanhuisdirect",
    title: "Huis-aan-huis Direct",
    category: "Website",
    client: "Huis-aan-huis Direct",
    year: 2026,
    shortDescription:
      "Een heldere marketingsite voor een lokaal advertentieplatform dat flyers bezorgt bij huishoudens in meer dan 10 gemeentes.",
    fullDescription: `Huis-aan-huis Direct biedt bedrijven de mogelijkheid om lokaal te adverteren via fysieke flyers — bezorgd bij alle huishoudens die reclame ontvangen, voor slechts €0,03 per huishouden. Ze zochten een website die dit concept snel en overtuigend uitlegt aan potentiële adverteerders.

We bouwden een strakke, conversiegerichte marketingsite met een duidelijke propositie, prijsoverzicht, FAQ en een eenvoudig aanmeldformulier. De site is volledig geoptimaliseerd voor lokale SEO zodat adverteerders Huis-aan-huis Direct makkelijk vinden.`,
    challenge:
      "Het concept — fysieke flyers in een digitale wereld — vraagt om een sterk verhaal. De site moet twijfel wegnemen en direct het voordeel duidelijk maken.",
    solution:
      "Met concrete cijfers (€0,03 per huishouden, 12 advertenties per flyer, 10+ gemeentes) en een heldere 'hoe het werkt'-sectie maakten we het aanbod direct begrijpelijk en aantrekkelijk.",
    result:
      "De site converteert goed met een lage bounce rate dankzij de duidelijke structuur en sterke call-to-action.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    externalLink: "https://huisaanhuisdirect.nl",
    image: "/portfolio/huisaanhuisdirect.jpg",
    gradient: "from-blue-200 via-sky-100 to-cyan-50",
    gradientDark: "from-blue-800 via-sky-700 to-cyan-900",
    accentColor: "#2563EB",
    featured: true,
    tags: ["Marketing", "SEO", "Lokaal", "Conversie"],
  },
];

export const allCategories: PortfolioCategory[] = [
  "Website",
  "Webshop",
  "iOS App",
  "Apple Watch App",
  "Android App",
];
