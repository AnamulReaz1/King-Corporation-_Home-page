import type { Metadata } from 'next';
import { AboutValues } from "@/components/AboutUs/AboutValues";
import { HeroWithPlay } from "@/components/AboutUs/HeroWithPlay";
import ContentOne from "@/components/AboutUs/ContentOne";
import Footer from "@/components/Shared/Footer";
import { TeamChefsSection } from "@/components/AboutUs/TeamChefSection";
import { TestimonialsCarouselSection } from "@/components/AboutUs/TestimonialsCarouselSection";
import Hero from "@/components/Shared/Hero";
import Breadcrumb from "@/components/Shared/Breadcrumb";

export const metadata: Metadata = {
  title: 'About King Corporation - Authentic Japanese Restaurants in Tokyo',
  description: 'Learn more about King Corporation, our story, values, and the team behind our authentic Japanese restaurants in Tokyo. Premium kebabs, ramen, and halal food.',
  keywords: [
    'About King Corporation',
    'Japanese Restaurant Story',
    'Tokyo Restaurant Team',
    'Authentic Cuisine Values',
    'King Corporation History',
  ],
  alternates: {
    canonical: 'https://www.kingcorporation.store/aboutus',
  },
  openGraph: {
    title: 'About King Corporation - Authentic Japanese Restaurants in Tokyo',
    description: 'Learn more about King Corporation, our story, values, and the team behind our authentic Japanese restaurants in Tokyo.',
    url: 'https://www.kingcorporation.store/aboutus',
    images: [
      {
        url: 'https://www.kingcorporation.store/images/logo_new.png',
        width: 1200,
        height: 630,
        alt: 'King Corporation Team and Story',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About King Corporation - Authentic Japanese Restaurants in Tokyo',
    description: 'Learn more about King Corporation, our story, values, and the team behind our authentic Japanese restaurants in Tokyo.',
    images: ['https://www.kingcorporation.store/images/logo_new.png'],
  },
};

export default function AboutUs() {
  return (
    <section className="w-full font-inter transition-colors duration-500
                        bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200
                        dark:from-zinc-900 dark:via-zinc-950 dark:to-black">
      <Breadcrumb items={[{ label: "About Us" }]} />
      {/* Hero Section */}
      <Hero title="About Us" image="/images/cheif.png" alt="About King Corporation - Our Story and Team" />

      {/* Main Content */}
      <ContentOne />
      <AboutValues />
      <HeroWithPlay />
      <TeamChefsSection />
      <TestimonialsCarouselSection />

      {/* Footer */}
      <Footer />
    </section>
  );
}
