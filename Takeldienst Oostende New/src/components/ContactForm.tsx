import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
const ENDPOINT = `${SUPABASE_URL}/functions/v1/send-contact`;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          naam: String(fd.get("naam") || ""),
          email: String(fd.get("email") || ""),
          telefoon: String(fd.get("telefoon") || ""),
          bericht: String(fd.get("bericht") || ""),
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Er ging iets mis bij het verzenden. Probeer opnieuw of bel ons direct.");
    }
  }

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 border-t border-border/60 bg-foreground/[0.02]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <p className="text-primary text-sm font-semibold tracking-[0.25em] mb-3">
            CONTACT
          </p>
          <h2 className="font-display text-5xl sm:text-6xl mb-6">
            Stuur ons een bericht
          </h2>
          <p className="text-muted-foreground sm:text-lg leading-relaxed">
            Geen nood aan een takelwagen maar een vraag? Vul het formulier in en wij
            contacteren u zo snel mogelijk.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <Field label="Naam" name="naam" required />
          <Field label="E-mailadres" name="email" type="email" required />
          <Field label="Telefoonnummer" name="telefoon" type="tel" />
          <div>
            <label htmlFor="contact-bericht" className="block text-sm font-semibold tracking-wide mb-2 uppercase text-muted-foreground">
              Bericht
            </label>
            <textarea
              id="contact-bericht"
              name="bericht"
              required
              rows={5}
              className="w-full bg-background border border-border focus:border-primary outline-none px-4 py-3 text-foreground"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 font-semibold hover:brightness-110 transition disabled:opacity-60"
          >
            <Send className="h-4 w-4" strokeWidth={2.5} />
            {status === "sending" ? "Bezig met verzenden…" : "Verstuur bericht"}
          </button>

          {status === "ok" && (
            <div className="flex items-start gap-2 text-green-500 text-sm">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
              <p>Bedankt! Uw bericht is verzonden. We nemen zo snel mogelijk contact op.</p>
            </div>
          )}
          {status === "error" && (
            <div className="flex items-start gap-2 text-red-400 text-sm">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold tracking-wide mb-2 uppercase text-muted-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-border focus:border-primary outline-none px-4 py-3 text-foreground"
      />
    </div>
  );
}
