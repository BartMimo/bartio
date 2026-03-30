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
    slug: "vakwerk-interiors",
    title: "Vakwerk Interiors",
    category: "Website",
    client: "Vakwerk Interiors",
    year: 2024,
    shortDescription:
      "Een stijlvolle portfoliosite voor een Amsterdams interieurbureau, gericht op indrukwekkende beeldkwaliteit en sfeer.",
    fullDescription: `Vakwerk Interiors is een interieurbureau uit Amsterdam dat zich specialiseert in luxe residentiële projecten. Ze zochten een website die hun stijl weerspiegelt: verfijnd, tijdloos en visueel overtuigend.

We ontwierpen en bouwden een volledig op maat gemaakte portfoliosite met nadruk op immersieve projectpresentaties, een vloeiende navigatie en typografie die de high-end sfeer ondersteunt.

Het resultaat is een website die bezoekers meteen overtuigt van de kwaliteit van het bureau — en zorgt voor meer kwalitatieve aanvragen.`,
    challenge:
      "De uitdaging lag in het centraal stellen van beeldkwaliteit zonder de prestaties te verliezen. De fotografie moest de hoofdrol spelen, niet concurreren met de interface.",
    solution:
      "We kozen voor een minimalistische opzet waarbij tekst en navigatie terugtreden ten gunste van de beelden. Met slimme laadtechnieken en progressieve afbeeldingsoptimalisatie blijft de site snel, ook op mobiel.",
    result:
      "Binnen drie maanden na lancering steeg het aantal contactaanvragen met 62%. Bezoekers bleven gemiddeld twee keer zo lang op de site.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Vercel"],
    gradient: "from-stone-200 via-amber-100 to-orange-50",
    gradientDark: "from-stone-700 via-amber-800 to-orange-900",
    accentColor: "#D4A96A",
    featured: true,
    tags: ["Portfolio", "CMS", "Animaties", "SEO"],
  },
  {
    id: "2",
    slug: "de-groene-tak",
    title: "De Groene Tak",
    category: "Webshop",
    client: "De Groene Tak",
    year: 2024,
    shortDescription:
      "Een moderne webshop voor een duurzaam plantenmerk, met een soepele winkelervaring en een frisse, botanische uitstraling.",
    fullDescription: `De Groene Tak is een Nederlands merk dat kamerplanten, potten en botanische accessoires verkoopt met focus op duurzaamheid en kwaliteit. Ze wilden een webshop die hun verhaal vertelt én bezoekers omzet in klanten.

We bouwden een volledige e-commerce ervaring: van productpagina's met rijke content en stylingfoto's tot een geoptimaliseerde checkout. De shop integreert met het voorraadbeheersysteem van de klant en ondersteunt automatische verzendbevestigingen.`,
    challenge:
      "Een webshop die er premium uitziet maar tegelijk laagdrempelig aanvoelt. Planten kopen online vraagt om vertrouwen — de site moest dat vertrouwen meteen wekken.",
    solution:
      "Met een warme, groene huisstijl, uitgebreide plantgidsen en echte klantverhalen creëerden we een shop die authentiek aanvoelt. Slim filteren en zoeken maakt het vinden van de perfecte plant eenvoudig.",
    result:
      "In het eerste kwartaal na lancering realiseerde De Groene Tak 340% meer online omzet dan via hun oude website.",
    techStack: ["Next.js", "TypeScript", "Stripe", "Shopify Storefront API", "Tailwind CSS", "Vercel"],
    gradient: "from-emerald-200 via-green-100 to-teal-50",
    gradientDark: "from-emerald-800 via-green-700 to-teal-900",
    accentColor: "#2D7A4F",
    featured: true,
    tags: ["E-commerce", "Stripe", "Shopify", "Mobile-first"],
  },
  {
    id: "3",
    slug: "puls-app",
    title: "Puls",
    category: "iOS App",
    client: "Puls B.V.",
    year: 2023,
    shortDescription:
      "Een iOS app voor gepersonaliseerd hardloopcoaching, gebouwd rond hartslagdata en intelligente trainingsplanning.",
    fullDescription: `Puls is een hardloopcoaching app die gebruikers helpt slimmer te trainen op basis van hun hartslag en hersteldata. De app analyseert historische data, stelt trainingsplannen voor en geeft real-time feedback tijdens het lopen.

We ontwierpen en bouwden de iOS-app volledig in SwiftUI, met integratie in Apple HealthKit voor naadloze toegang tot biometrische data. De interface is ontworpen voor gebruik tijdens het bewegen: grote knoppen, duidelijke kleurcontrasten en een minimalistische weergave die geen afleidingen biedt.`,
    challenge:
      "Hartslagdata is complex — de uitdaging was om dit op een begrijpelijke, motiverende manier te presenteren aan gewone gebruikers, niet aan sportwetenschappers.",
    solution:
      "Door gebruik te maken van kleurgebaseerde zones (groen, geel, rood) en eenvoudig taalgebruik maakten we complexe data direct begrijpelijk. De onboarding legt in drie stappen uit hoe de zones persoonlijk worden ingesteld.",
    result:
      "4.8 sterren in de App Store. Meer dan 12.000 downloads in de eerste zes maanden na lancering.",
    techStack: ["SwiftUI", "HealthKit", "CoreData", "CloudKit", "WatchKit", "Xcode"],
    externalLink: "#",
    gradient: "from-violet-200 via-purple-100 to-indigo-50",
    gradientDark: "from-violet-800 via-purple-700 to-indigo-900",
    accentColor: "#7C3AED",
    featured: true,
    tags: ["SwiftUI", "HealthKit", "Watch-integratie", "Onboarding"],
  },
  {
    id: "4",
    slug: "tij-watch-app",
    title: "Tij",
    category: "Apple Watch App",
    client: "Tij Labs",
    year: 2024,
    shortDescription:
      "Een watchOS-app voor surfers en watersporters met real-time getijdendata en windcondities direct op de pols.",
    fullDescription: `Tij is een watchOS-app die surfers, kitesurfers en watersporters voorziet van real-time getijdendata, windcondities en golfhoogte — rechtstreeks op hun Apple Watch.

We ontwierpen een app die volledig is geoptimaliseerd voor het kleine scherm van de Watch, met een schermvullend tij-overzicht, complicaties voor het wijzerplaat en snelle toegang tot de meest relevante data op favoriete locaties.`,
    challenge:
      "Het Apple Watch scherm is klein en het gebruik is kortdurend. De informatie moest in één oogopslag begrijpelijk zijn, ook met natte handen of in felle zon.",
    solution:
      "We ontwierpen een high-contrast interface met grote, bold typografie en een intuïtieve kleurschaal voor condities. Haptic feedback laat de Watch trillen bij ideale omstandigheden.",
    result:
      "Winnaar van de Surf Media Award 2024 in de categorie 'Beste Digitale Tool'. Meer dan 8.000 actieve gebruikers.",
    techStack: ["watchOS", "SwiftUI", "ClockKit", "CoreLocation", "WidgetKit", "REST API"],
    gradient: "from-sky-200 via-blue-100 to-cyan-50",
    gradientDark: "from-sky-800 via-blue-700 to-cyan-900",
    accentColor: "#0284C7",
    featured: false,
    tags: ["watchOS", "Complicaties", "Geolocation", "Real-time data"],
  },
  {
    id: "6",
    slug: "julies-art",
    title: "Julies Art",
    category: "Webshop",
    client: "Julies Art",
    year: 2024,
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
    image: "/portfolio/julies-art.png",
    gradient: "from-amber-200 via-orange-100 to-yellow-50",
    gradientDark: "from-amber-800 via-orange-700 to-yellow-900",
    accentColor: "#92400E",
    featured: true,
    tags: ["E-commerce", "Personalisatie", "Webshop", "Stripe"],
  },
  {
    id: "7",
    slug: "kortio",
    title: "Kortio",
    category: "iOS App",
    client: "Kortio",
    year: 2024,
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
    image: "/portfolio/kortio.png",
    gradient: "from-blue-200 via-indigo-100 to-violet-50",
    gradientDark: "from-blue-800 via-indigo-700 to-violet-900",
    accentColor: "#4F46E5",
    featured: true,
    tags: ["iOS", "Android", "Cross-platform", "Marketingsite"],
  },
  {
    id: "8",
    slug: "huisaanhuisdirect",
    title: "Huis-aan-huis Direct",
    category: "Website",
    client: "Huis-aan-huis Direct",
    year: 2025,
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
    image: "/portfolio/huisaanhuisdirect.png",
    gradient: "from-blue-200 via-sky-100 to-cyan-50",
    gradientDark: "from-blue-800 via-sky-700 to-cyan-900",
    accentColor: "#2563EB",
    featured: false,
    tags: ["Marketing", "SEO", "Lokaal", "Conversie"],
  },
  {
    id: "5",
    slug: "markt-android",
    title: "Markt",
    category: "Android App",
    client: "Markt B.V.",
    year: 2023,
    shortDescription:
      "Een Android marketplace-app voor lokale handel, met een intuïtieve zoekervaring en geïntegreerd veilig betalingsverkeer.",
    fullDescription: `Markt is een Android-app waarmee mensen eenvoudig spullen kunnen kopen en verkopen in hun buurt. De focus ligt op een prettige gebruikerservaring: snel berichten plaatsen, slim zoeken op categorie of locatie, en betalen via een geïntegreerde betalingsomgeving.

We bouwden de app volledig in Kotlin met Jetpack Compose voor de UI. De real-time berichtenmodule is gebouwd op Firebase, en betalingen verlopen via een Stripe-integratie.`,
    challenge:
      "De tweede-hands markt is al erg competitief. Markt moest zich onderscheiden door snelheid en gebruiksgemak — een bericht plaatsen in minder dan 60 seconden was het doel.",
    solution:
      "Door het plaatsingsproces te stroomlijnen naar vier simpele stappen (foto's, categorie, prijs, publiceren) en intelligente categorisatie op basis van de foto, bereikten we een gemiddelde plaatsingstijd van 42 seconden.",
    result:
      "50.000+ downloads op Google Play in het eerste jaar. 4.6 sterren gemiddelde beoordeling.",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase", "Stripe", "Room Database", "Google Maps SDK"],
    gradient: "from-orange-200 via-amber-100 to-yellow-50",
    gradientDark: "from-orange-800 via-amber-700 to-yellow-900",
    accentColor: "#D97706",
    featured: false,
    tags: ["Kotlin", "Compose", "Firebase", "Betalingen", "Real-time"],
  },
];

export const allCategories: PortfolioCategory[] = [
  "Website",
  "Webshop",
  "iOS App",
  "Apple Watch App",
  "Android App",
];
