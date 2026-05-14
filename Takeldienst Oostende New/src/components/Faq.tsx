import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Hoe snel zijn jullie ter plaatse?",
    a: "In de meeste gevallen zijn wij binnen 30 minuten bij u, afhankelijk van uw locatie in Oostende en omgeving.",
  },
  {
    q: "Zijn jullie ook 's nachts en in het weekend bereikbaar?",
    a: "Ja, onze dienst is 7 dagen op 7 en 24 uur op 24 bereikbaar, inclusief feestdagen.",
  },
  {
    q: "Wat kost een takelbeurt?",
    a: "De prijs hangt af van de afstand en het type voertuig. Wij geven u direct een duidelijke prijs wanneer u belt, zonder verrassingen achteraf.",
  },
  {
    q: "Slepen jullie ook motoren en bestelwagens?",
    a: "Ja, wij slepen alle types voertuigen: personenwagens, motoren, bestelwagens en lichte vrachtwagens.",
  },
  {
    q: "Wat moet ik doen als ik pech heb?",
    a: "Bel ons direct op +32 471 68 32 34. Wij begeleiden u verder en sturen onmiddellijk een takeldienst naar u toe.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.25em] mb-3">
            FAQ
          </p>
          <h2 className="font-display text-5xl sm:text-7xl">Veelgestelde vragen</h2>
        </div>

        <ul className="border-t border-border/70">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-border/70">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 text-left py-6 sm:py-8 hover:text-primary transition"
                >
                  <span className="font-display text-xl sm:text-2xl lg:text-3xl leading-snug">
                    {f.q}
                  </span>
                  <span className="shrink-0 mt-1 text-primary">
                    {isOpen ? (
                      <Minus className="h-6 w-6" strokeWidth={2.5} />
                    ) : (
                      <Plus className="h-6 w-6" strokeWidth={2.5} />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-muted-foreground sm:text-lg leading-relaxed max-w-3xl">
                    {f.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
