import { ReactNode } from "react";
import { usePageMeta } from "@/hooks/use-page-meta";

type LegalLayoutProps = {
  title: string;
  updated: string;
  children: ReactNode;
  metaDescription: string;
  canonicalPath: string;
};

export function LegalLayout({ title, updated, children, metaDescription, canonicalPath }: LegalLayoutProps) {
  usePageMeta({
    title: `${title} — Takeldienst Oostende`,
    description: metaDescription,
    canonicalPath,
    ogType: "article",
  });

  return (
    <main className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
        <p className="text-primary text-sm font-semibold tracking-[0.25em] mb-3">JURIDISCH</p>
        <h1 className="font-display text-5xl sm:text-6xl mb-4">{title}</h1>
        <p className="text-sm text-muted-foreground mb-12">Laatst bijgewerkt: {updated}</p>
        <div className="space-y-8 text-foreground/90 leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-foreground [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mb-2 [&_h3]:mt-6 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_a]:text-primary [&_a]:underline">
          {children}
        </div>
      </div>
    </main>
  );
}
