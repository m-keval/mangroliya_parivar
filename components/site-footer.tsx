import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/data";
import { Icon } from "@/components/icon";
import { LogoMark } from "@/components/logo";

const columns = [
  {
    title: "પરિવાર",
    subtitle: "The Family",
    links: [
      { label: "અમારો પરિચય", href: "/about", en: "Our Introduction" },
      { label: "ગામની યાદી", href: "/village", en: "Village Directory" },
      { label: "મુખ્ય સમિતિ", href: "/committee", en: "Main Committee" },
    ],
  },
  {
    title: "ડિરેક્ટરી",
    subtitle: "Directories",
    links: [
      { label: "બિઝનેસ ડિરેક્ટરી", href: "/business", en: "Business Directory" },
      { label: "ગામની યાદી", href: "/village", en: "Village Directory" },
    ],
  },
  {
    title: "સમર્થન",
    subtitle: "Support",
    links: [
      { label: "દાતા", href: "/donors", en: "Donors" },
      { label: "ગેલેરી", href: "/gallery", en: "Gallery" },
      { label: "સમાચાર", href: "/news", en: "News" },
    ],
  },
  {
    title: "વધુ",
    subtitle: "More",
    links: [
      { label: "ઇવેન્ટ્સ", href: "/events", en: "Events" },
      { label: "નોકરી", href: "/jobs", en: "Jobs" },
      { label: "જાહેરાતો", href: "/notices", en: "Notices" },
      { label: "સંપર્ક", href: "/contact", en: "Contact" },
    ],
  },
];

const quickLinks = [
  { label: "ડોનેટ", href: "/donate" },
  { label: "ડાઉનલોડ", href: "/downloads" },
  { label: "ગોપનીયતા નીતિ", href: "/privacy" },
];

const year = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="bg-cream border-t border-ink/10">
      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-6">
        <div className="grid gap-6 lg:grid-cols-6">
          {/* Brand + contact */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label={`${site.name} — home`}
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sand border border-ink/10 p-1.5">
                <LogoMark className="h-full w-full" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl font-semibold text-ink">
                  {site.name}
                </span>
              </span>
            </Link>



            <div className="mt-5 flex flex-col gap-3">
              <div className="flex gap-3">
                <Icon name="map-pin" size={17} className="mt-0.5 shrink-0 text-brand-600" />
                <address className="not-italic text-sm text-ink/70 leading-relaxed">
                  {site.address.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
              <div className="flex gap-3">
                <Icon name="phone" size={17} className="mt-0.5 shrink-0 text-brand-600" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-sm text-ink/70 hover:text-ink"
                >
                  {site.phone}
                </a>
              </div>
              <div className="flex gap-3">
                <Icon name="mail" size={17} className="mt-0.5 shrink-0 text-brand-600" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-ink/70 hover:text-ink break-all"
                >
                  {site.email}
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="flex items-center justify-center gap-3 rounded-xl border border-ink/20 bg-ink px-4 py-2 transition-colors hover:bg-ink/80 hover:border-ink/40">
                <Image src="/apple.svg" alt="Apple Logo" width={26} height={26} className="h-7 w-auto" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-medium text-white/80 leading-none mb-1">Download on the</span>
                  <span className="text-[18px] font-semibold tracking-tight text-white leading-none">App Store</span>
                </div>
              </a>
              <a href="#" className="flex items-center justify-center gap-3 rounded-xl border border-ink/20 bg-ink px-4 py-2 transition-colors hover:bg-ink/80 hover:border-ink/40">
                <Image src="/playstore.svg" alt="Play Store Logo" width={24} height={24} className="h-6 w-auto" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-medium text-white/80 leading-none mb-1 uppercase tracking-wider">Get it on</span>
                  <span className="text-[17px] font-semibold tracking-tight text-white leading-none">Google Play</span>
                </div>
              </a>
            </div>

          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.subtitle}>
              <h3 className="flex items-baseline gap-2">
                <span className="text-base font-semibold text-marigold-600">
                  {col.title}
                </span>
                
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-baseline justify-between gap-3 text-sm text-ink/70 transition-colors hover:text-ink"
                    >
                      <span>{link.label}</span>
                      
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-8 border-t border-ink/12 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-ink/50 text-center md:text-left">
          <div className="flex flex-col gap-1.5">
            <p>
              © {year} {site.legalName} · સ્થાપના {site.founded}
            </p>
            <Link href="/privacy" className="hover:text-ink transition-colors">
              ગોપનીયતા નીતિ (Privacy Policy)
            </Link>
          </div>
          
          {/* Social Media Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-4 md:mt-0">
            <span className="text-[13px] font-bold text-ink/40 uppercase tracking-widest">
              અમને ફોલો કરો
            </span>
            <div className="flex items-center gap-5">
              <a href="#" aria-label="Facebook" className="transition-transform duration-300 hover:scale-110 opacity-70 hover:opacity-100">
                <Image src="/facebook.svg" alt="Facebook" width={24} height={24} className="w-6 h-6 object-contain" />
              </a>
              <a href="#" aria-label="Instagram" className="transition-transform duration-300 hover:scale-110 opacity-70 hover:opacity-100">
                <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6 object-contain" />
              </a>
              <a href="#" aria-label="YouTube" className="transition-transform duration-300 hover:scale-110 opacity-70 hover:opacity-100">
                <Image src="/youtube.svg" alt="YouTube" width={24} height={24} className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}