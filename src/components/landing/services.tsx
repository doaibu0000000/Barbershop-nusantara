import { MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { links, services } from "@/lib/business";
import { WhatsAppIcon } from "./hero";

export function Services() {
  return (
    <section id="layanan" className="scroll-mt-24 bg-cream-dark/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brass-dark">
            Layanan
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Layanan &amp; harga
          </h2>
          <p className="mt-3 text-ink/65">
            Harga jujur, nggak ada biaya tersembunyi.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 md:mt-14">
          <div className="mx-auto max-w-3xl rounded-3xl border border-ink/10 bg-white/80 p-5 shadow-sm sm:p-8">
            <ul className="divide-y divide-dashed divide-ink/15">
              {services.map((s) => (
                <li
                  key={s.name}
                  className="flex items-baseline gap-3 py-4 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-semibold tracking-tight">{s.name}</h3>
                      <span
                        className="hidden shrink-0 self-center border-b border-dotted border-ink/30 sm:block sm:w-16"
                        aria-hidden="true"
                      />
                      <span className="shrink-0 font-display text-base font-semibold text-brass-dark sm:text-lg">
                        {s.price}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink/55">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col items-center gap-3 border-t border-ink/10 pt-6 sm:flex-row sm:justify-between">
              <p className="text-xs text-ink/50">
                *Harga dapat berubah. Chat kami untuk info terbaru.
              </p>
              <a
                href={links.whatsappAsk}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-cream transition-all hover:bg-ink-soft sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Tanya dulu boleh kok
              </a>
            </div>
          </div>
        </Reveal>

        {/* CTA kecil di bawah daftar */}
        <Reveal delay={200} className="mt-8 text-center">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-brass px-8 text-base font-semibold text-ink shadow-lg shadow-brass/25 transition-all hover:-translate-y-0.5 hover:bg-brass-light"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Booking via WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
