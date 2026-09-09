import type { Metadata } from 'next';
import ExpoHighlights from "@/components/Landing/ExpoHighlights";
import OurShops from "@/components/Landing/OurShops";
import Footer from "@/components/Shared/Footer";
import Hero from "@/components/Shared/Hero";
import Breadcrumb from "@/components/Shared/Breadcrumb";

export const metadata: Metadata = {
  title: 'Our Shops - King Corporation Restaurant Locations in Tokyo',
  description: 'Explore our various restaurant locations at King Corporation. Find kebab shops, ramen places, and food courts in Tokyo. Authentic Japanese cuisine at multiple locations.',
  keywords: [
    'King Corporation Shops',
    'Tokyo Restaurant Locations',
    'Kebab Shops Tokyo',
    'Ramen Restaurants Tokyo',
    'Food Courts Tokyo',
    'Japanese Restaurants Locations',
  ],
  alternates: {
    canonical: 'https://www.kingcorporation.store/shops',
  },
  openGraph: {
    title: 'Our Shops - King Corporation Restaurant Locations in Tokyo',
    description: 'Explore our various restaurant locations at King Corporation. Find kebab shops, ramen places, and food courts in Tokyo.',
    url: 'https://www.kingcorporation.store/shops',
    images: [
      {
        url: 'https://www.kingcorporation.store/images/logo_new.png',
        width: 1200,
        height: 630,
        alt: 'King Corporation Restaurant Locations in Tokyo',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Shops - King Corporation Restaurant Locations in Tokyo',
    description: 'Explore our various restaurant locations at King Corporation. Find kebab shops, ramen places, and food courts in Tokyo.',
    images: ['https://www.kingcorporation.store/images/logo_new.png'],
  },
};

export default function Shops() {
  return (
    <section
      className="w-full font-inter transition-colors duration-500
                        bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200
                        dark:from-zinc-900 dark:via-zinc-950 dark:to-black"
    >
      <Breadcrumb items={[{ label: "Our Shops" }]} />
      <Hero title="Explore Our Shops" image="/images/cheif.png" alt="Our Shops - King Corporation Restaurant Locations in Tokyo" />
      <ExpoHighlights />
      <OurShops />
      <div className="mt-20">
        <Footer />
      </div>
    </section>
  );
}
