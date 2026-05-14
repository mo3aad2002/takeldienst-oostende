import { Phone, Clock, MapPin } from "lucide-react";
const towing3 = "/towing-three.jpg";

export function CtaBanner() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-border/60">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src={towing3}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <p className="text-primary text-sm font-semibold tracking-[0.25em] mb-4">
              DIRECT HULP NODIG?
            </p>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-balance">
              Pech onderweg?
              <span className="block text-primary">Bel ons direct.</span>
            </h2>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold tracking-wide uppercase text-foreground/80">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" strokeWidth={2.5} />
                24/7 bereikbaar
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" strokeWidth={2.5} />
                Oostende &amp; omgeving
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            {/* Mobile: compact button */}
            <a
              href="tel:+32471683234"
              className="lg:hidden inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-semibold text-sm shadow-lg hover:brightness-110 transition w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Bel nu: +32 471 68 32 34
            </a>

            {/* Desktop: full block */}
            <a
              href="tel:+32471683234"
              className="hidden lg:block group w-full sm:w-auto bg-primary text-primary-foreground p-7 hover:brightness-110 transition shadow-2xl"
            >
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-3">
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                Bel ons nu
              </div>
              <div className="font-display text-3xl sm:text-4xl tracking-wider">
                +32 471 68 32 34
              </div>
              <div className="mt-3 text-xs font-semibold opacity-80">
                Geen wachttijden, geen gedoe.
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
