import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lp-cconect.com.br"),
  title: "Arena Cconect — Complexo Esportivo & Confraternização",
  description: "O complexo esportivo mais moderno de Chapadinha - MA. Arena de Areia Premium, Campo Society e Área Gourmet para seu time e família.",
  openGraph: {
    title: "Arena Cconect — Complexo Esportivo & Confraternização",
    description: "O complexo esportivo mais moderno de Chapadinha - MA. Arena de Areia Premium, Campo Society e Área Gourmet.",
    url: "https://lp-cconect.com.br/arena",
    siteName: "Cconect",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Arena Cconect Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Arena Cconect — Complexo Esportivo & Confraternização",
    description: "O complexo esportivo mais moderno de Chapadinha - MA.",
    images: ["/logo.png"],
  },
};

export default function ArenaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Arena Cconect",
    "url": "https://lp-cconect.com.br/arena",
    "logo": "https://lp-cconect.com.br/logo.png",
    "image": "https://lp-cconect.com.br/logo.png",
    "description": "Complexo esportivo em Chapadinha - MA. Arena de Areia para Beach Tennis, Futevôlei e Vôlei de Areia, Campo Society e Espaço Gourmet.",
    "telephone": "+5598985271601",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua 1 - Angelim",
      "addressLocality": "Chapadinha",
      "addressRegion": "MA",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-3.7423",
      "longitude": "-43.3598"
    },
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
