import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Inter,
  Noto_Sans_Gujarati,
  Noto_Serif_Gujarati,
} from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { site } from "@/lib/data";
import "./globals.css";

// Latin display face for English headings, as on the reference portal;
// Gujarati glyphs fall through to Noto Serif Gujarati.
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const serifGu = Noto_Serif_Gujarati({
  variable: "--font-serif-gu",
  subsets: ["gujarati"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sansGu = Noto_Sans_Gujarati({
  variable: "--font-sans-gu",
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "સમસ્ત માંગરોળીયા પરિવાર — એક પરિવાર, એક ઓળખ",
    template: "%s · સમસ્ત માંગરોળીયા પરિવાર",
  },
  description:
    "સમસ્ત માંગરોળીયા પરિવારની ઓનલાઈન ડિરેક્ટરી — સ્થાપના ૧૯૯૧. સભ્ય ડિરેક્ટરી, ઇવેન્ટ્સ, નોટિસ અને પરિવાર આર્કાઇવ.",
  keywords: [
    "Samast Mangroliya Parivar",
    "Mangroliya Parivar Surat",
    "માંગરોળીયા પરિવાર",
    "family tree Surat",
    "parivar directory",
    "Gujarati family association",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "gu_IN",
    url: site.domain,
    siteName: site.name,
    title: "સમસ્ત માંગરોળીયા પરિવાર — એક પરિવાર, એક ઓળખ",
    description:
      "ચાર પેઢીઓ, ત્રણ શાખાઓ, એક પરિવાર. ડિરેક્ટરી, સમિતિ, ઇવેન્ટ્સ અને પરિવાર આર્કાઇવ જુઓ.",
    images: [
      { url: "/logo.png", width: 1254, height: 1254, alt: site.name },
    ],
  },
  twitter: {
    card: "summary",
    title: "સમસ્ત માંગરોળીયા પરિવાર",
    description:
      "ચાર પેઢીઓ, ત્રણ શાખાઓ, એક પરિવાર — સમસ્ત માંગરોળીયા પરિવારની ઓનલાઈન ડિરેક્ટરી.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#7b1e1e",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: "સમસ્ત માંગરોળીયા પરિવાર",
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
      lang="gu"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${cinzel.variable} ${serifGu.variable} ${inter.variable} ${sansGu.variable} h-full`}
    >
      <body suppressHydrationWarning className="flex min-h-screen flex-col bg-cream text-ink antialiased">
        <SiteHeader />
        <main className="flex-1 flex flex-col">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
