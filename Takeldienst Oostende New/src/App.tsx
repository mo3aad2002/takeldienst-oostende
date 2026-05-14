import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { CtaBanner } from "@/components/CtaBanner";
import { FloatingChat } from "@/components/FloatingChat";
import { Footer } from "@/components/Footer";
import { Privacybeleid } from "@/pages/Privacybeleid";
import { AlgemeneVoorwaarden } from "@/pages/AlgemeneVoorwaarden";
import { Cookiebeleid } from "@/pages/Cookiebeleid";
import { usePageMeta } from "@/hooks/use-page-meta";

const HOME_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Hoe snel zijn jullie ter plaatse?", acceptedAnswer: { "@type": "Answer", text: "In de meeste gevallen zijn wij binnen 30 minuten bij u, afhankelijk van uw locatie in Oostende en omgeving." } },
    { "@type": "Question", name: "Zijn jullie ook 's nachts en in het weekend bereikbaar?", acceptedAnswer: { "@type": "Answer", text: "Ja, onze dienst is 7 dagen op 7 en 24 uur op 24 bereikbaar, inclusief feestdagen." } },
    { "@type": "Question", name: "Wat kost een takelbeurt?", acceptedAnswer: { "@type": "Answer", text: "De prijs hangt af van de afstand en het type voertuig. Wij geven u direct een duidelijke prijs wanneer u belt, geen verrassingen achteraf." } },
    { "@type": "Question", name: "Slepen jullie ook motoren en bestelwagens?", acceptedAnswer: { "@type": "Answer", text: "Ja, wij slepen alle types voertuigen: personenwagens, motoren, bestelwagens en lichte vrachtwagens." } },
    { "@type": "Question", name: "Wat moet ik doen als ik pech heb?", acceptedAnswer: { "@type": "Answer", text: "Bel ons direct op +32 471 68 32 34. Wij begeleiden u verder en sturen onmiddellijk een takeldienst naar u toe." } },
  ],
};

function Home() {
  usePageMeta({
    title: "Takeldienst Oostende — 24/7 Sleepdienst & Pechverhelping",
    description: "Snelle takeldienst en pechhulp in Oostende en omgeving. 24/7 bereikbaar, ±30 minuten ter plaatse. Bel +32 471 68 32 34.",
    canonicalPath: "/",
    jsonLd: HOME_FAQ_JSONLD,
  });
  return (
    <main>
      <Hero />
      <Services />
      <CtaBanner />
      <WhyUs />
      <Faq />
      <ContactForm />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacybeleid" element={<Privacybeleid />} />
        <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
        <Route path="/cookiebeleid" element={<Cookiebeleid />} />
      </Routes>
      <Footer />
      <FloatingChat />
    </BrowserRouter>
  );
}
