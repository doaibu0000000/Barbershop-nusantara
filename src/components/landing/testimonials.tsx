import { ExternalLink, Star } from "lucide-react";
import { Reveal } from "./reveal";
import { links, testimonials } from "@/lib/business";

function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Rating ${count} dari 5 bintang`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count ? "fill-brass text-brass" : "fill-ink/15 text-ink/15"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimoni" className="scroll-mt-24 bg-cream-dark/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brass-dark">
            Testimoni
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Kata pelanggan
          </h2>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-12">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <li className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white/80 p-6 shadow-sm">
                <Stars count={t.stars} />
                <blockquote className="mt-4 flex-1">
                  <p className="font-display text-lg leading-snug text-ink/85">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <footer className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-brass-light"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-tight">
                      {t.name}
                    </p>
                    <p className="text-xs text-ink/50">{t.detail}</p>
                  </div>
                </footer>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={150} className="mt-8 text-center">
          <a
            href={links.mapsPlace}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brass-dark underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            Lihat semua ulasan di Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
