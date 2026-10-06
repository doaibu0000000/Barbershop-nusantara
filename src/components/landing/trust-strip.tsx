import { Clock, MapPin, Star } from "lucide-react";
import { Reveal } from "./reveal";
import { business } from "@/lib/business";

const items = [
  {
    icon: Star,
    title: `${business.rating} di Google`,
    desc: "Dipercaya pelanggan",
  },
  {
    icon: Clock,
    title: "08.30 – 21.00",
    desc: "Buka setiap hari",
  },
  {
    icon: MapPin,
    title: "Jl. Raya No.99",
    desc: "Mudah dijangkau",
  },
];

export function TrustStrip() {
  return (
    <section aria-label="Ringkasan singkat" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-12">
        <Reveal>
          <dl className="grid grid-cols-3 divide-x divide-ink/10 rounded-2xl border border-ink/10 bg-white/60 shadow-sm">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-1 px-2 py-5 text-center sm:py-7"
              >
                <item.icon
                  className="mb-1 h-5 w-5 text-brass sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
                <dt className="order-2 text-[11px] font-medium text-ink/55 sm:text-sm">
                  {item.desc}
                </dt>
                <dd className="order-1 font-display text-sm font-semibold tracking-tight sm:text-lg">
                  {item.title}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
