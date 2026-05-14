const items = [
  {
    label: "24/7",
    title: "Altijd beschikbaar",
    desc: "Ook 's nachts, in het weekend en op feestdagen.",
  },
  {
    label: "30 min",
    title: "Snel ter plaatse",
    desc: "Gemiddeld binnen 30 minuten in Oostende en omgeving.",
  },
  {
    label: "100%",
    title: "Vakkundig team",
    desc: "Ervaren chauffeurs met de juiste uitrusting.",
  },
  {
    label: "Regio",
    title: "Volledige kustlijn",
    desc: "Van Bredene tot Middelkerke en verder.",
  },
];

export function WhyUs() {
  return (
    <section id="waarom" className="py-20 sm:py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="text-primary text-sm font-semibold tracking-[0.25em] mb-3">
            WAAROM ONS
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">
            Waarom Takeldienst Oostende?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x divide-border/70 border-y border-border/70">
          {items.map((it) => (
            <div key={it.title} className="py-8 px-6 sm:py-6 sm:px-8 border-b sm:border-b-0 border-border/70 last:border-0 sm:[&:nth-child(2)]:border-b lg:[&:nth-child(2)]:border-b-0">
              <span className="inline-block bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase px-2.5 py-1 mb-4">
                {it.label}
              </span>
              <h3 className="font-display text-xl sm:text-2xl mb-2 leading-tight">
                {it.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
