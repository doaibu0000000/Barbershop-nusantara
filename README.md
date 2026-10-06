# Barbershop Nusantara — Landing Page

Landing page resmi **Barbershop Nusantara**, barbershop di Jl. Raya Husen
Kertadibrata No.99, Pamanukan, Kabupaten Subang, Jawa Barat.

Dibuat sebagai halaman bisnis yang cepat, mobile-first, dan berorientasi
konversi (booking via WhatsApp), dengan data bisnis diambil langsung dari
listing Google Maps.

## ✨ Fitur

- **Mobile-first & responsif** — nyaman di layar 320px sampai desktop besar
- **Booking via WhatsApp** — tombol CTA, tombol melayang, dan pesan terisi otomatis
- **SEO lokal** — metadata lengkap, Open Graph, dan JSON-LD `HairSalon` schema
- **Peta lokasi** — Google Maps embed + tombol petunjuk arah
- **Performa** — static export, gambar terkompresi, font self-hosted, tanpa JS berat
- **100% statis** — bisa dideploy ke Vercel maupun GitHub Pages

## 🛠️ Teknologi

| Bagian     | Teknologi                     |
| ---------- | ----------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router, static export) |
| Bahasa     | TypeScript                    |
| Styling    | Tailwind CSS 4                |
| Font       | Fraunces + Plus Jakarta Sans (next/font) |
| Ikon       | Lucide React                  |

## 🚀 Cara Install

```bash
# clone repo
git clone <url-repo-anda>
cd barbershop-nusantara-landing

# install dependency (bun / npm / pnpm)
bun install
```

## 💻 Development

```bash
bun run dev
# buka http://localhost:3000
```

## 📦 Build

```bash
bun run build
```

Hasil build berupa **static export** di folder `out/`.

## 🧪 Preview hasil build

```bash
bun run start
# menjalankan `serve out` — butuh koneksi untuk mengunduh `serve` sekali
```

## 🔑 Environment Variable

Semua opsional — tanpa variable apa pun project sudah jalan.

| Variable                | Kapan dipakai | Contoh                          |
| ----------------------- | ------------- | ------------------------------- |
| `NEXT_PUBLIC_SITE_URL`  | Production (SEO/OG URL) | `https://barbershopnusantara.com` |
| `NEXT_PUBLIC_BASE_PATH` | Deploy ke GitHub Pages  | `/barbershop-nusantara`           |

## ☁️ Deployment

### Vercel (rekomendasi)

1. Push repo ke GitHub.
2. Import project di [vercel.com](https://vercel.com) — framework **Next.js** terdeteksi otomatis.
3. (Opsional) set `NEXT_PUBLIC_SITE_URL` ke domain final Anda.
4. Deploy — tanpa konfigurasi tambahan.

### GitHub Pages

1. Aktifkan GitHub Pages (GitHub Actions / branch `gh-pages`).
2. Set environment variable saat build:

```bash
NEXT_PUBLIC_BASE_PATH=/nama-repo bun run build
```

3. Upload isi folder `out/` ke GitHub Pages.

> Catatan: `NEXT_PUBLIC_BASE_PATH` **hanya** untuk GitHub Pages. Di Vercel,
> biarkan kosong.

## 📝 Mengubah Konten

Semua data bisnis terpusat di satu file:

```
src/lib/business.ts
```

Ubah di sana untuk mengganti: nama, alamat, nomor WhatsApp, jam buka,
daftar layanan & harga, hingga testimoni.

- **Foto**: asli dari listing Google Maps, tersimpan di `public/images/`.
  Jalankan `node scripts/optimize-images.mjs` setelah mengganti foto sumber
  (`public/images/barbershop-nusantara-interior.jpg`).
- **Harga & testimoni** adalah placeholder yang wajar — sesuaikan dengan
  data asli pemilik sebelum go-live.

## 🗂️ Struktur Proyek

```
src/
├── app/
│   ├── layout.tsx        # Font, metadata SEO, tema
│   ├── page.tsx          # Halaman utama + JSON-LD
│   ├── sitemap.ts        # Sitemap otomatis
│   └── icon.svg          # Favicon
├── components/landing/   # Section-section landing page
└── lib/business.ts       # ★ Data bisnis (sumber tunggal)
public/images/            # Foto asli dari Google Maps
```

## 📄 Kredit

- Foto: listing Google Maps **Barbershop Nusantara** (foto pelanggan).
- Data bisnis: [Google Maps](https://www.google.com/maps/place/?q=place_id:ChIJb1wxuPZFaS4RGQ5rXrSHbB0).
