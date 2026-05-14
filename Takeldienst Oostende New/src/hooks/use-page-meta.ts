import { useEffect } from "react";

type Meta = {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE_URL = "https://takeldienst-oostende.lovable.app";
const JSONLD_ID = "page-jsonld";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageMeta({ title, description, canonicalPath = "/", ogType = "website", jsonLd }: Meta) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", `${SITE_URL}${canonicalPath}`);
    setLink("canonical", `${SITE_URL}${canonicalPath}`);

    // Remove any previous page-scoped JSON-LD before injecting a new one.
    document.querySelectorAll(`script[data-page-jsonld="${JSONLD_ID}"]`).forEach((n) => n.remove());
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.pageJsonld = JSONLD_ID;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, ogType, jsonLd]);
}
