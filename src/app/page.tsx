import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { TrustStrip } from "@/components/landing/trust-strip";
import { About } from "@/components/landing/about";
import { Services } from "@/components/landing/services";
import { WhyUs } from "@/components/landing/why-us";
import { Testimonials } from "@/components/landing/testimonials";
import { Location } from "@/components/landing/location";
import { CtaBand } from "@/components/landing/cta-band";
import { SiteFooter } from "@/components/landing/site-footer";
import { FloatingWa } from "@/components/landing/floating-wa";
import { business, links } from "@/lib/business";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: business.name,
  description:
    "Barbershop di Pamanukan, Subang. Potongan rapi, tempat nyaman, harga bersahabat. Buka setiap hari sampai 21.00.",
  image: `${siteUrl}/images/hero.jpg`,
  url: siteUrl,
  telephone: business.phoneTel,
  priceRange: "Rp10.000 - Rp30.000",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.district,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:30",
      closes: "21:00",
    },
  ],
  sameAs: [links.mapsPlace],
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Data terstruktur untuk SEO lokal */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Location />
        <CtaBand />
      </main>

      <SiteFooter />
      <FloatingWa />
    </div>
  );
}
