import Image from "next/image";
import { Star } from "lucide-react";
import { business, links } from "@/lib/business";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-ink text-cream"
    >
      {/* Foto latar (mobile) — foto asli dari Google Maps */}
      <div className="absolute inset-0 md:hidden" aria-hidden="true">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/15" />
      </div>

      {/* Tekstur halus (desktop) */}
      <div
        className="absolute inset-0 hidden md:block"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(rgba(228,200,150,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-4 pb-14 pt-28 sm:px-6 md:min-h-[92svh] md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:pb-20 md:pt-32 lg:gap-20">
        {/* Teks */}
        <div className="max-w-xl">
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brass/50 bg-brass/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brass-light">
              <Star className="h-3.5 w-3.5 fill-brass-light text-brass-light" />
              {business.rating} di Google
            </span>
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-cream/80">
              Barbershop · {business.city}
            </span>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Tampil rapi,
            <br />
            <span className="text-brass-light">gak perlu jauh-jauh.</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/75 sm:text-lg">
            Barbershop langganan warga {business.city}. Duduk santai,
            keluar dengan potongan baru.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-brass px-7 text-base font-semibold text-ink shadow-xl shadow-brass/20 transition-all hover:-translate-y-0.5 hover:bg-brass-light"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Booking via WhatsApp
            </a>
            <a
              href="#layanan"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-cream/25 px-7 text-base font-medium text-cream transition-colors hover:border-brass-light hover:text-brass-light"
            >
              Lihat layanan
            </a>
          </div>

          <p className="mt-5 text-sm text-cream/55">
            {business.hours} · Walk-in juga welcome
          </p>
        </div>

        {/* Foto (desktop) — foto asli dari Google Maps */}
        <div className="relative hidden md:block">
          <div
            className="absolute -inset-3 rounded-[28px] border border-brass/30"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
            <Image
              src="/images/hero.jpg"
              alt="Suasana di dalam Barbershop Nusantara"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-top"
            />
            <div
              className="absolute inset-0 ring-1 ring-inset ring-white/10"
              aria-hidden="true"
            />
          </div>
          {/* Kartu rating */}
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-cream px-5 py-4 text-ink shadow-xl">
            <div className="flex items-center gap-1" aria-label="Rating 4,3 dari 5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-brass text-brass" />
              ))}
              <Star className="h-4 w-4 fill-brass/40 text-brass/40" />
            </div>
            <p className="mt-1.5 text-sm font-semibold leading-none">
              {business.rating} / 5
            </p>
            <p className="mt-1 text-xs text-ink/60">di Google Maps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
