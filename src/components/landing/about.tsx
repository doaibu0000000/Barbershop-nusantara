import Image from "next/image";
import { Armchair, Clock3, Users } from "lucide-react";
import { Reveal } from "./reveal";
import { business } from "@/lib/business";

const chips = [
  { icon: Armchair, label: "Luas & nyaman" },
  { icon: Users, label: "Ramah buat anak" },
  { icon: Clock3, label: "Buka sampai malam" },
];

export function About() {
  return (
    <section id="tentang" className="scroll-mt-24 bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-4 sm:px-6 md:grid-cols-2 md:gap-14 md:pb-24 md:pt-8">
        {/* Foto */}
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg shadow-ink/10">
            <Image
              src="/images/tentang.jpg"
              alt="Interior Barbershop Nusantara — kursi potong, cermin, dan dinding sertifikat"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-4 right-6 rounded-full bg-ink px-4 py-2 text-xs font-medium tracking-wide text-brass-light shadow-lg"
          >
            Foto asli lokasi
          </span>
        </Reveal>

        {/* Teks */}
        <div>
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brass-dark">
              Tentang kami
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Barbershop langganan warga Pamanukan
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-5 leading-relaxed text-ink/70">
              Kami cuma jualan satu hal: potongan rambut yang rapi dengan
              harga masuk akal. Udah lama jadi tempat mampir warga setelah
              kerja, setelah sekolah, atau sekadar numpang lewat.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              Datang sendiri, bawa anak, atau rame-rame sama teman — semua
              welcome.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {chips.map((chip) => (
                <li
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-sm font-medium text-ink/80"
                >
                  <chip.icon className="h-4 w-4 text-brass-dark" aria-hidden="true" />
                  {chip.label}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-ink/50">
              {business.addressFull}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
