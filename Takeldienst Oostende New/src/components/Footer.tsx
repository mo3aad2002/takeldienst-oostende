import { Phone, Mail, MapPin } from "lucide-react";
const logo = "/logo.png";

const quickLinks = [
  { href: "#diensten", label: "Diensten" },
  { href: "#waarom", label: "Waarom Ons" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-border/60">
          <div>
            <a href="/#top" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Takeldienst Oostende" className="h-12 w-auto" />
              <span className="font-display text-lg tracking-wider">
                Takeldienst <span className="text-primary">Oostende</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Snelle takeldienst en pechverhelping in Oostende en omgeving. 24/7 bereikbaar.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wider text-primary mb-4">
              Snelle links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground/80 hover:text-primary transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wider text-primary mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+32471683234"
                  className="flex items-start gap-2.5 text-foreground/80 hover:text-primary transition"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" strokeWidth={2.5} />
                  +32 471 68 32 34
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@takeldienstoostende.be"
                  className="flex items-start gap-2.5 text-foreground/80 hover:text-primary transition break-all"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" strokeWidth={2.5} />
                  info@takeldienstoostende.be
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" strokeWidth={2.5} />
                Oostende, België
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wider text-primary mb-4">
              Openingsuren
            </h4>
            <p className="text-sm text-foreground/80">
              <span className="block font-semibold text-foreground">24/7 bereikbaar</span>
              7 dagen op 7, ook op feestdagen.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Takeldienst Oostende. Alle rechten voorbehouden.
          </p>
          <nav className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="/privacybeleid" className="hover:text-primary transition">Privacybeleid</a>
            <a href="/algemene-voorwaarden" className="hover:text-primary transition">Algemene Voorwaarden</a>
            <a href="/cookiebeleid" className="hover:text-primary transition">Cookiebeleid</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
