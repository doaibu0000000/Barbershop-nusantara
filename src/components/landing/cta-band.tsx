import { Reveal } from "./reveal";
import { links } from "@/lib/business";
import { WhatsAppIcon } from "./hero";

export function CtaBand() {
  return (
    <section aria-label="Ajakan booking" className="relative bg-ink text-cream">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(rgba(228,200,150,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 md:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Chat dulu, biar nggak ngantri.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-cream/70">
            Kirim WhatsApp, balasannya cepat. Atau langsung mampir — pintu
            kami terbuka.
          </p>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-brass px-9 text-lg font-semibold text-ink shadow-2xl shadow-brass/25 transition-all hover:-translate-y-0.5 hover:bg-brass-light"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Booking Sekarang
          </a>
          <p className="mt-4 text-sm text-cream/50">
            Gratis, tanpa aplikasi tambahan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
