import type { Metadata } from 'next';
import { ContactFormSection } from "@/components/ContactUs/ContactFormSection";
import { ContactInfoSection } from "@/components/ContactUs/ContactInfoSection";
import { GetInTouchSection } from "@/components/ContactUs/GetInTouchSection";
import Footer from "@/components/Shared/Footer";
import Hero from "@/components/Shared/Hero";
import Breadcrumb from "@/components/Shared/Breadcrumb";

export const metadata: Metadata = {
  title: 'Contact King Corporation - Locations & Information | Tokyo Restaurants',
  description: 'Get in touch with King Corporation. Find our locations, contact information, and reach out for inquiries about our restaurants in Tokyo. Phone, email, and address details.',
  keywords: [
    'Contact King Corporation',
    'Tokyo Restaurant Locations',
    'King Corporation Address',
    'Japanese Restaurant Contact',
    'Tokyo Food Court Contact',
  ],
  alternates: {
    canonical: 'https://www.kingcorporation.store/contactus',
  },
  openGraph: {
    title: 'Contact King Corporation - Locations & Information | Tokyo Restaurants',
    description: 'Get in touch with King Corporation. Find our locations, contact information, and reach out for inquiries about our restaurants in Tokyo.',
    url: 'https://www.kingcorporation.store/contactus',
    images: [
      {
        url: 'https://www.kingcorporation.store/images/logo_new.png',
        width: 1200,
        height: 630,
        alt: 'Contact King Corporation - Tokyo Restaurant Locations',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact King Corporation - Locations & Information | Tokyo Restaurants',
    description: 'Get in touch with King Corporation. Find our locations, contact information, and reach out for inquiries about our restaurants in Tokyo.',
    images: ['https://www.kingcorporation.store/images/logo_new.png'],
  },
};

export default function ContactUsPage() {
  return (
    <section
      className="w-full font-inter transition-colors duration-500
                        bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200
                        dark:from-zinc-900 dark:via-zinc-950 dark:to-black"
    >
      <Breadcrumb items={[{ label: "Contact Us" }]} />
      <Hero title="Contact Us" image="/images/cheif.png" alt="Contact King Corporation - Locations and Information in Tokyo" />
      <ContactInfoSection />
      <GetInTouchSection />
      <ContactFormSection />
      <Footer />
    </section>
  );
}
