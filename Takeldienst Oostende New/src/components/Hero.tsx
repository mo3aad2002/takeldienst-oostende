import { Phone, ArrowDown } from "lucide-react";
const heroImg = "/towing-one.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 lg:pt-20 lg:pb-8"
    >
      {/* subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,200,0,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2.5 border border-border/70 bg-background/70 px-4 py-2 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 pulse-dot" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-foreground/90">
              Nu beschikbaar
            </span>
          </div>

          <h1 className="font-display text-[3.25rem] sm:text-7xl lg:text-8xl leading-[0.95] text-balance">
            Takeldienst Oostende
            <span className="block text-primary mt-3">Snel &amp; 24/7.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-balance">
            Pech onderweg? Wij staan binnen de kortste tijd bij u.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4">
            <a
              href="tel:+32471683234"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 font-semibold text-base hover:brightness-110 transition w-full sm:w-auto justify-center"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              Bel Direct: +32 471 68 32 34
            </a>
            <a
              href="#diensten"
              className="inline-flex items-center gap-2 border border-foreground/40 text-foreground px-7 py-4 font-semibold text-base hover:bg-foreground hover:text-background transition w-full sm:w-auto justify-center"
            >
              Bekijk onze diensten
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* RIGHT — creative image presentation */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] max-h-[60vh] lg:max-h-[70vh] max-w-md mx-auto lg:max-w-none">
            {/* yellow offset frame */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 inset-0 border-2 border-primary" />
            {/* dark backdrop block */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 inset-0 bg-primary/10" />
            {/* image */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={heroImg}
                alt="Takelwagen tilt voertuig op in Oostende"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
            </div>

            {/* floating badge */}
            <div className="absolute bottom-2 right-2 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground px-4 py-3 sm:px-5 sm:py-4 shadow-2xl max-w-[14rem]">
              <div className="font-display text-2xl sm:text-3xl leading-none">30 MIN</div>
              <div className="text-[10px] sm:text-xs font-semibold mt-1.5 uppercase tracking-wide">
                Gemiddelde aankomsttijd
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
