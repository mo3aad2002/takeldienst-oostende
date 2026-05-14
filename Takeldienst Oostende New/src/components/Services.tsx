import { Truck, Fuel, BatteryCharging, Disc3, Wrench, ArrowRight } from "lucide-react";
const towing2 = "/towing-two.jpg";

const services = [
  {
    icon: Truck,
    title: "Sleepdienst",
    desc: "Veilig en snel slepen van auto's, motoren en bestelwagens naar elke bestemming.",
    featured: true,
  },
  {
    icon: Fuel,
    title: "Brandstofhulp",
    desc: "Zonder brandstof gevallen? Wij brengen het rechtstreeks naar u toe.",
  },
  {
    icon: BatteryCharging,
    title: "Batterijondersteuning",
    desc: "Lege accu? Wij starten uw voertuig op of vervangen de batterij ter plaatse.",
  },
  {
    icon: Disc3,
    title: "Bandenservice",
    desc: "Lekke band onderweg? Wij wisselen uw reservewiel ter plaatse.",
  },
  {
    icon: Wrench,
    title: "Pech ter plaatse",
    desc: "Buitengesloten of technisch probleem? Ons team komt direct naar u toe.",
  },
];

export function Services() {
  return (
    <section id="diensten" className="py-24 sm:py-32 border-t border-border/60 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.25em] mb-3">
              DIENSTEN
            </p>
            <h2 className="font-display text-5xl sm:text-7xl">Wat wij doen</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Vijf kerntaken, één doel: u snel en veilig terug op weg helpen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-px bg-border/70">
          {/* Featured: Sleepdienst with image */}
          <div className="lg:col-span-3 lg:row-span-2 relative bg-background overflow-hidden group min-h-[20rem]">
            <img
              src={towing2}
              alt="Voertuig wordt vastgemaakt op takelwagen"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
            <div className="relative h-full p-8 sm:p-10 flex flex-col justify-end">
              <div className="inline-flex items-center justify-center h-14 w-14 bg-primary text-primary-foreground mb-6">
                <Truck className="h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-4xl sm:text-5xl mb-3">Sleepdienst</h3>
              <p className="text-muted-foreground sm:text-lg max-w-md">
                {services[0].desc}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide uppercase">
                24/7 inzetbaar <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Other 4 services */}
          {services.slice(1).map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="lg:col-span-3 bg-background p-7 sm:p-8 group hover:bg-foreground/[0.03] transition relative"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 inline-flex items-center justify-center h-12 w-12 border border-primary/40 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl mb-2">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
