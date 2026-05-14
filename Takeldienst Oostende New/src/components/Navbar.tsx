import { Phone } from "lucide-react";
const logo = "/logo.png";

const navLinks = [
  { href: "#diensten", label: "Diensten" },
  { href: "#waarom", label: "Waarom Ons" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="/#top" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Takeldienst Oostende logo" className="h-12 sm:h-14 w-auto" />
          <span className="hidden sm:block font-display text-xl tracking-wider text-foreground">
            Takeldienst <span className="text-primary">Oostende</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide uppercase text-foreground/80 hover:text-primary transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+32471683234"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 sm:px-5 py-2 sm:py-2.5 font-semibold text-sm sm:text-base hover:brightness-110 transition shrink-0"
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          <span>Bel ons</span>
        </a>
      </div>
    </header>
  );
}
