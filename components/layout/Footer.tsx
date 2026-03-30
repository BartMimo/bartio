import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  diensten: [
    { href: "/diensten#websites", label: "Websites" },
    { href: "/diensten#webshops", label: "Webshops" },
    { href: "/diensten#ios", label: "iOS Apps" },
    { href: "/diensten#watch", label: "Apple Watch Apps" },
    { href: "/diensten#android", label: "Android Apps" },
  ],
  studio: [
    { href: "/over", label: "Over Bartio" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 w-fit">
              <Image
                src="/logobartio.png"
                alt="Bartio"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Bartio
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-zinc-500">
              Bartio ontwerpt en bouwt digitale producten voor merken en ondernemers die kwaliteit vooropstellen.
            </p>
            <div className="mt-5 space-y-1">
              <a
                href="mailto:hallo@bartio.nl"
                className="block text-sm text-brand-400 hover:text-brand-300 transition-colors"
              >
                hallo@bartio.nl
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold tracking-wide uppercase mb-4">
              Diensten
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.diensten.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold tracking-wide uppercase mb-4">
              Studio
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.studio.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800/60 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Bartio. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-zinc-600">
            Ontworpen en gebouwd door Bartio
          </p>
        </div>
      </div>
    </footer>
  );
}
