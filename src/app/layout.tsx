import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Barbershop Nusantara — Potong Rambut Rapi di Pamanukan, Subang",
  description:
    "Barbershop langganan warga Pamanukan, Subang. Potongan rapi, tempat nyaman, harga bersahabat. Buka setiap hari sampai 21.00. Booking via WhatsApp.",
  keywords: [
    "barbershop Pamanukan",
    "barbershop Subang",
    "Barbershop Nusantara",
    "potong rambut Pamanukan",
    "cukur rambut Subang",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Barbershop Nusantara — Pamanukan, Subang",
    description:
      "Potongan rapi, tempat nyaman, harga bersahabat. Buka setiap hari sampai 21.00.",
    url: "/",
    siteName: "Barbershop Nusantara",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Interior Barbershop Nusantara" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbershop Nusantara — Pamanukan, Subang",
    description:
      "Potongan rapi, tempat nyaman, harga bersahabat. Buka setiap hari sampai 21.00.",
    images: ["/images/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1512",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${jakarta.variable} font-sans antialiased bg-cream text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
