import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lp-cconect.com.br"),
  title: "Cconect — Provedor de Internet 100% Fibra Óptica",
  description: "Internet que acompanha o ritmo da sua vida. Fibra óptica de alta performance em Chapadinha-MA para streaming, games, home office e empresas.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Cconect — Provedor de Internet 100% Fibra Óptica",
    description: "Internet que acompanha o ritmo da sua vida. Fibra óptica de alta performance em Chapadinha-MA.",
    url: "https://lp-cconect.com.br",
    siteName: "Cconect",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Cconect Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cconect — Provedor de Internet 100% Fibra Óptica",
    description: "Internet que acompanha o ritmo da sua vida.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InternetServiceProvider",
    "name": "Cconect",
    "url": "https://lp-cconect.com.br",
    "logo": "https://lp-cconect.com.br/logo.png",
    "image": "https://lp-cconect.com.br/logo.png",
    "description": "Internet 100% fibra óptica de alta performance em Chapadinha-MA para streaming, games, home office e empresas.",
    "telephone": "+5598985271601",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chapadinha",
      "addressRegion": "MA",
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Chapadinha"
    },
    "provider": {
      "@type": "Organization",
      "name": "Cconect"
    }
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${instrumentSerif.variable} antialiased bg-white text-text-main font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}


