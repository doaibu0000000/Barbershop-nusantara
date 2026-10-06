import { Clock, MapPin, Navigation } from "lucide-react";
import { Reveal } from "./reveal";
import { business, links } from "@/lib/business";
import { WhatsAppIcon } from "./hero";

export function Location() {
  return (
    <section id="lokasi" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brass-dark">
            Lokasi &amp; jam buka
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Mampir, kami tunggu
          </h2>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          {/* Info */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white/80 p-6 shadow-sm sm:p-8">
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brass/10 text-brass-dark">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold">Alamat</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">
                      {business.addressFull}
                    </p>
                    <p className="mt-1 text-xs text-ink/45">
                      Plus code: {business.plusCode}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brass/10 text-brass-dark">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold">Jam buka</h3>
                    <p className="mt-1 text-sm text-ink/65">{business.hours}</p>
                    <p className="mt-1 text-xs text-ink/45">
                      Jam terakhir booking 20.30
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-auto">
                <a
                  href={links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-full bg-ink px-6 text-base font-semibold text-cream transition-all hover:bg-ink-soft"
                >
                  <Navigation className="h-4.5 w-4.5" aria-hidden="true" />
                  Petunjuk Arah
                </a>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-full border-2 border-brass bg-brass/10 px-6 text-base font-semibold text-brass-dark transition-all hover:bg-brass hover:text-ink"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          {/* Peta */}
          <Reveal delay={120} className="h-full">
            <div className="h-full min-h-[320px] overflow-hidden rounded-3xl border border-ink/10 shadow-sm md:min-h-[420px]">
              <iframe
                src={links.mapEmbed}
                title={`Peta lokasi ${business.name}`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[320px] w-full border-0 md:min-h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
