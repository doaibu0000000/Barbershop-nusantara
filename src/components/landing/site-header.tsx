"use client";

import { useEffect, useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { business, links } from "@/lib/business";

const navItems = [
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#lokasi", label: "Lokasi" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-ink/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-[72px]">
        {/* Logo */}
        <a
          href="#beranda"
          className="flex items-center gap-2.5 text-cream"
          aria-label={`${business.name} — kembali ke atas`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brass/60 bg-ink-soft font-display text-sm font-semibold text-brass-light">
            {business.shortName}
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-semibold tracking-wide md:text-base">
              {business.name}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-cream/60">
              {business.city}
            </span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-brass-light"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brass px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-brass-light hover:shadow-lg hover:shadow-brass/25"
          >
            <Scissors className="h-4 w-4" aria-hidden="true" />
            Booking
          </a>
        </nav>

        {/* Toggle mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-cream transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden ${
          open ? "block" : "pointer-events-none hidden"
        }`}
      >
        <nav
          aria-label="Navigasi seluler"
          className="space-y-1 border-t border-white/10 px-4 pb-6 pt-3"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-cream/90 transition-colors hover:bg-white/10 hover:text-brass-light"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brass px-5 py-3.5 text-base font-semibold text-ink"
          >
            <Scissors className="h-4 w-4" aria-hidden="true" />
            Booking via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
