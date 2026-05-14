import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Phone, Mail, MessageCircle } from "lucide-react";

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  function scrollToContact() {
    setOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 bg-background border border-border shadow-2xl">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <div>
              <p className="font-display text-lg leading-none">Hoe kunnen we helpen?</p>
              <p className="text-xs text-muted-foreground mt-1">Kies een optie hieronder</p>
            </div>
          </div>
          <div className="divide-y divide-border">
            <ChatItem
              href="tel:+32471683234"
              icon={<Phone className="h-4 w-4" strokeWidth={2.5} />}
              title="Bel ons"
              sub="+32 471 68 32 34"
            />
            <button
              onClick={scrollToContact}
              className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-foreground/5 transition"
            >
              <span className="h-9 w-9 grid place-items-center bg-primary text-primary-foreground">
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span>
                <span className="block font-semibold text-sm">Stuur een bericht</span>
                <span className="block text-xs text-muted-foreground">Via het formulier</span>
              </span>
            </button>
            <ChatItem
              href="mailto:info@takeldienstoostende.be"
              icon={<Mail className="h-4 w-4" strokeWidth={2.5} />}
              title="Stuur een e-mail"
              sub="info@takeldienstoostende.be"
            />
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Sluit chat" : "Open chat"}
        className="h-14 w-14 grid place-items-center bg-primary text-primary-foreground shadow-xl hover:brightness-110 transition rounded-full"
      >
        {open ? (
          <X className="h-6 w-6" strokeWidth={2.5} />
        ) : (
          <MessageSquare className="h-6 w-6" strokeWidth={2.5} />
        )}
      </button>
    </div>
  );
}

function ChatItem({
  href,
  icon,
  title,
  sub,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <a
      href={href}
      className="px-5 py-4 flex items-center gap-4 hover:bg-foreground/5 transition"
    >
      <span className="h-9 w-9 grid place-items-center bg-primary text-primary-foreground">
        {icon}
      </span>
      <span>
        <span className="block font-semibold text-sm">{title}</span>
        <span className="block text-xs text-muted-foreground">{sub}</span>
      </span>
    </a>
  );
}
