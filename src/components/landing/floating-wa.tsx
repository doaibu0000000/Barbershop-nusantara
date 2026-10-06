import { links } from "@/lib/business";
import { WhatsAppIcon } from "./hero";

/** Tombol WhatsApp melayang — selalu terlihat, mudah dijangkau jempol. */
export function FloatingWa() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat booking via WhatsApp"
      className="group fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-black/25 transition-transform hover:scale-105 active:scale-95 md:bottom-6 md:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
        Booking cepat
      </span>
    </a>
  );
}
