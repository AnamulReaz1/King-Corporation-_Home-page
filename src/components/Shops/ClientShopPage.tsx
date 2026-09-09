"use client";

import Hero from "@/components/Shared/Hero";
import SpecialMenu from "@/components/Landing/SpecialMenu";
import SpecialMenuOfShop from "@/components/ShopDetails/SpecialMenuOfShop";
import Footer from "@/components/Shared/Footer";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import { Shop } from "@/types";

interface ClientShopPageProps {
  shop: Shop;
}

export default function ClientShopPage({ shop }: ClientShopPageProps) {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": shop.name,
    "description": `Visit ${shop.name} for delicious ${shop.pageTitle.toLowerCase()}. Authentic flavors at King Corporation in Tokyo.`,
    "url": `https://www.kingcorporation.store/shops/${shop.id}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3-17-6 Higashijujo, Kita-ku, 3F",
      "addressLocality": "Tokyo",
      "addressRegion": "Tokyo",
      "postalCode": "114-0001",
      "addressCountry": "Japan"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": shop.location.lat,
      "longitude": shop.location.long
    },
    "telephone": "+81-80-4168-9192",
    "servesCuisine": ["Japanese", "Middle Eastern"],
    "priceRange": "$$",
    "image": `https://www.kingcorporation.store${shop.heroImage}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "100"
    }
  };

  return (
    <div className="min-h-screen ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantSchema),
        }}
      />
      <Breadcrumb items={[{ label: "Our Shops", href: "/shops" }, { label: shop.name }]} />
      <Hero title={shop.pageTitle} image={shop.heroImage} alt={`${shop.name} - ${shop.pageTitle} at King Corporation Tokyo`} />

      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-[#fc6a5b] font-bold text-center my-10 border-b border-yellow-400 pb-5 md:mx-10 mx-2 ">
          {shop.name}
        </h2>
        <SpecialMenuOfShop shop={shop} />
      </div>
      <div className="my-16">
        <SpecialMenu />
      </div>
      <Footer />
    </div>
  );
}
