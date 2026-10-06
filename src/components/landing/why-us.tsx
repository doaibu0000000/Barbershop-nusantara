import { Armchair, Clock3, MessageCircle, Wallet } from "lucide-react";
import { Reveal } from "./reveal";

const reasons = [
  {
    icon: Clock3,
    title: "Barber yang teliti",
    desc: "Digarap rapi, nggak asal cepat.",
  },
  {
    icon: Armchair,
    title: "Tempat nyaman",
    desc: "Luas, adem, kursinya enak.",
  },
  {
    icon: MessageCircle,
    title: "Nggak bikin nunggu",
    desc: "Chat dulu, datang pas giliranmu.",
  },
  {
    icon: Wallet,
    title: "Harga bersahabat",
    desc: "Kualitas oke, dompet aman.",
  },
];

export function WhyUs() {
  return (
    <section aria-label="Keunggulan" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Kenapa mampir ke kami?
          </h2>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <li className="group h-full rounded-2xl border border-ink/10 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg hover:shadow-brass/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brass/10 text-brass-dark transition-colors group-hover:bg-brass group-hover:text-ink">
                  <r.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold tracking-tight">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {r.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
