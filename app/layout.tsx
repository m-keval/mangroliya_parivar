import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { site } from "@/lib/data";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Samast Mangroliya Parivar, Surat — Ek Parivar, Ek Pehchaan",
    template: "%s · Samast Mangroliya Parivar",
  },
  description:
    "The online home of Samast Mangroliya Parivar (સમસ્ત માંગરોલીયા પરિવાર), Surat — established 1991. Member directory, events, notices and the family archive.",
  keywords: [
    "Samast Mangroliya Parivar",
    "Mangroliya Parivar Surat",
    "માંગરોલીયા પરિવાર",
    "family tree Surat",
    "parivar directory",
    "Gujarati family association",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.domain,
    siteName: site.name,
    title: "Samast Mangroliya Parivar, Surat — Ek Parivar, Ek Pehchaan",
    description:
      "Four generations, three branches, one family register. Browse the directory, the committee, our events and the family archive.",
    images: [
      { url: "/logo.png", width: 1254, height: 1254, alt: site.name },
    ],
  },
  twitter: {
    card: "summary",
    title: "Samast Mangroliya Parivar",
    description:
      "Four generations, three branches, one family register — the online home of the Mangroliya Parivar, Surat.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e1312",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: "સમસ્ત માંગરોલીયા પરિવાર",
  url: site.domain,
  logo: `${site.domain}/logo.png`,
  email: site.email,
  telephone: site.phone,
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address[0],
    addressLocality: "Surat",
    postalCode: "395006",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${jakarta.variable} h-full`}
    >
      <body className="flex min-h-screen flex-col bg-cream text-ink antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
