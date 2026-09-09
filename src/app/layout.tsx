import Navbar from '@/components/Shared/Navbar';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { ThemeProvider } from './providers';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'King Corporation - Premium Japanese Restaurants in Tokyo',
    template: '%s | King Corporation',
  },
  description:
    'Discover authentic Japanese cuisine at King Corporation. Enjoy mouth-watering kebabs, ramen, and more at our locations in Tokyo. Quality food, great service.',
  keywords: [
    'Japanese Restaurant',
    'Kebab',
    'Ramen',
    'Tokyo Food',
    'Authentic Cuisine',
    'King Corporation',
    'Food Court',
  ],
  authors: [{ name: 'King Corporation' }],
  creator: 'King Corporation',
  publisher: 'King Corporation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'King Corporation',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@KingCorporation',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="afUCeCykegYgyHp632y8-tenK0wwJwdCF4VUZ9bcEz0"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'King Corporation',
              url: 'https://www.kingcorporation.store/',
              logo: 'https://www.kingcorporation.store/images/logo_new.png',
              description:
                'Premium Japanese restaurants in Tokyo offering authentic kebabs, ramen, and more.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '3-17-6 Higashijujo, Kita-ku, 3F',
                addressLocality: 'Tokyo',
                addressRegion: 'Tokyo',
                postalCode: '114-0001',
                addressCountry: 'Japan',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 35.7528,
                longitude: 139.7394,
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+81-80-4168-9192',
                  contactType: 'customer service',
                  email: 'kingcorp2005@gmail.com',
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+81-3-6903-0048',
                  contactType: 'customer service',
                },
              ],
              sameAs: [
                'https://www.facebook.com/share/1JyG8RzY3p/?mibextid=wwXIfr',
                'https://www.instagram.com/king_corporation1?igsh=MTdrOWlxam05bGQ1Mw%3D%3D&utm_source=qr',
              ],
              servesCuisine: ['Japanese', 'Middle Eastern', 'Halal'],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
