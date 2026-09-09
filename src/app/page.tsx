import AboutUs from '@/components/Landing/AboutUs';
import Carousel from '@/components/Landing/Carousel';
import ExpoHighlights from '@/components/Landing/ExpoHighlights';
import OurShops from '@/components/Landing/OurShops';
import SpecialMenu from '@/components/Landing/SpecialMenu';
import WhyChooseUs from '@/components/Landing/WhyChooseUs';
import Footer from '@/components/Shared/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'King Corporation',
  description:
    'King Corporation: Premium Japanese restaurants in Tokyo. Authentic kebabs, ramen, sushi, and halal food. Multiple locations across Tokyo. Quality cuisine since 2005.',
  keywords: [
    'King Corporation',
    'King Corporation Restaurants',
    'King Corporation Tokyo',
    'Japanese Restaurant Tokyo',
    'Kebab Tokyo',
    'Ramen Tokyo',
    'Halal Food Tokyo',
    'Authentic Japanese Cuisine',
    'Tokyo Food Court',
    'King Corporation Restaurants',
    'Best Japanese Food Tokyo',
  ],
  alternates: {
    canonical: 'https://www.kingcorporation.store/',
  },
  openGraph: {
    title: 'King Corporation - Premium Japanese Restaurants in Tokyo | Authentic Kebabs & Ramen',
    description:
      'Discover authentic Japanese cuisine at King Corporation. Enjoy mouth-watering kebabs, ramen, and more at our locations in Tokyo. Quality food, great service.',
    url: 'https://www.kingcorporation.store/',
    siteName: 'King Corporation',
    images: [
      {
        url: 'https://www.kingcorporation.store/images/logo_new.png',
        width: 1200,
        height: 630,
        alt: 'King Corporation - Premium Japanese Restaurants in Tokyo',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'King Corporation - Premium Japanese Restaurants in Tokyo | Authentic Kebabs & Ramen',
    description:
      'Discover authentic Japanese cuisine at King Corporation. Enjoy mouth-watering kebabs, ramen, and more at our locations in Tokyo. Quality food, great service.',
    images: ['https://www.kingcorporation.store/images/logo_new.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <div
      className="w-full font-inter transition-colors duration-500
                        bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200
                        dark:from-zinc-900 dark:via-zinc-950 dark:to-black"
    >
      <header className="text-center py-8 hidden">
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-4 ">
          King Corporation
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
          Authentic Japanese Restaurants in Tokyo
        </p>
      </header>
      <Carousel />
      <ExpoHighlights />
      <OurShops />
      <WhyChooseUs />
      <SpecialMenu />
      <AboutUs />
      <Footer />
    </div>
  );
}
