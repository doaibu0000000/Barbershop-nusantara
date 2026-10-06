import { Clock, MapPin, Phone } from "lucide-react";
import { business, links } from "@/lib/business";
import { WhatsAppIcon } from "./hero";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#141010] text-cream/75">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-brass/60 bg-ink-soft font-display text-sm font-semibold text-brass-light">
                {business.shortName}
              </span>
              <span className="font-display text-lg font-semibold text-cream">
                {business.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
              {business.tagline}. Potongan rapi, tempat nyaman, harga
              bersahabat.
            </p>
          </div>

          {/* Kontak */}
          <nav aria-label="Kontak">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-brass-light">
              Kontak
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{business.addressFull}</span>
              </li>
              <li>
                <a
                  href={links.tel}
                  className="flex gap-3 transition-colors hover:text-brass-light"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
                {business.hours}
              </li>
            </ul>
          </nav>

          {/* Tautan */}
          <nav aria-label="Tautan cepat">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-brass-light">
              Tautan
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-brass-light"
                >
                  <WhatsAppIcon className="h-4 w-4 text-brass" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={links.mapsPlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brass-light"
                >
                  Google Maps
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="transition-colors hover:text-brass-light"
                >
                  Layanan &amp; harga
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. Dibuat dengan senang hati di Subang.
          </p>
          <p>Foto di halaman ini berasal dari listing Google Maps kami.</p>
        </div>
      </div>
    </footer>
  );
}
