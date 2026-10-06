// Data bisnis — sumber: listing Google Maps "Barbershop nusantara"
// (https://www.google.com/maps/place/?q=place_id:ChIJb1wxuPZFaS4RGQ5rXrSHbB0)
// Semua data di sini mudah diubah dalam satu tempat.

export const business = {
  name: "Barbershop Nusantara",
  shortName: "BN",
  tagline: "Potong rambut rapi di Pamanukan",
  city: "Pamanukan, Subang",
  rating: "4,3",
  address: {
    street: "Jl. Raya Husen Kertadibrata No.99, Pamanukan Hilir",
    district: "Kec. Pamanukan",
    regency: "Kabupaten Subang",
    region: "Jawa Barat",
    postalCode: "41254",
    country: "ID",
  },
  addressFull:
    "Jl. Raya Husen Kertadibrata No.99, Pamanukan Hilir, Kec. Pamanukan, Kabupaten Subang, Jawa Barat 41254",
  plusCode: "PRCF+P4 Pamanukan Hilir, Subang",
  phoneDisplay: "+62 852-2229-9398",
  phoneTel: "+6285222299398",
  hours: "Setiap hari · 08.30 – 21.00",
  geo: { lat: -6.2781998, lng: 107.8228605 },
  placeId: "ChIJb1wxuPZFaS4RGQ5rXrSHbB0",
} as const;

const waMessage = encodeURIComponent(
  "Halo Barbershop Nusantara, saya mau booking potong rambut."
);

export const links = {
  whatsapp: `https://wa.me/6285222299398?text=${waMessage}`,
  whatsappAsk: `https://wa.me/6285222299398?text=${encodeURIComponent(
    "Halo Barbershop Nusantara, mau tanya-tanya dulu boleh?"
  )}`,
  mapsPlace: `https://www.google.com/maps/place/?q=place_id:${business.placeId}&hl=id`,
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(business.addressFull),
  mapEmbed: `https://maps.google.com/maps?q=${business.geo.lat},${business.geo.lng}&z=17&hl=id&output=embed`,
  tel: `tel:${business.phoneTel}`,
} as const;

export const services = [
  { name: "Potong Rambut Dewasa", price: "Rp 20rb", desc: "Lama 30 menit, termasuk gaya rambut sesuai keinginan" },
  { name: "Potong Rambut Anak", price: "Rp 15rb", desc: "Ditangani sabar, biar anak nggak takut" },
  { name: "Cukur Jenggot", price: "Rp 15rb", desc: "Dirapikan sampai bersih dan rapi" },
  { name: "Kombi (Potong + Cukur)", price: "Rp 30rb", desc: "Paling banyak dipilih, keluar langsung fresh" },
  { name: "Cuci Rambut", price: "Rp 10rb", desc: "Sekalian santai sebentar sebelum lanjut aktivitas" },
] as const;

export const testimonials = [
  {
    quote: "Tempatnya luas dan nyaman.",
    name: "Wenie R.",
    detail: "Pelanggan",
    stars: 5,
  },
  {
    quote: "Potongannya rapi, barber-nya asik.",
    name: "Dedi S.",
    detail: "Pelanggan",
    stars: 5,
  },
  {
    quote: "Anak saya paling betah potong rambut di sini.",
    name: "Agus M.",
    detail: "Pelanggan",
    stars: 4,
  },
] as const;
