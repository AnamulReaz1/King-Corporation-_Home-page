import type { Metadata } from 'next';
import ClientShopPage from "@/components/Shops/ClientShopPage";
import shopList from "@/lib/shops-data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const shop = shopList.find((s) => s.id === Number(slug));

  if (!shop) return {};

  return {
    title: `${shop.name} - ${shop.pageTitle} | King Corporation Tokyo`,
    description: `Visit ${shop.name} for delicious ${shop.pageTitle.toLowerCase()}. Authentic Japanese flavors at King Corporation in Tokyo. Premium kebabs, ramen, and halal food.`,
    keywords: [
      shop.name,
      shop.pageTitle,
      'King Corporation',
      'Tokyo Restaurant',
      'Japanese Cuisine',
      'Authentic Food',
    ],
    alternates: {
      canonical: `https://www.kingcorporation.store/shops/${shop.id}`,
    },
    openGraph: {
      title: `${shop.name} - ${shop.pageTitle} | King Corporation Tokyo`,
      description: `Visit ${shop.name} for delicious ${shop.pageTitle.toLowerCase()}. Authentic Japanese flavors at King Corporation in Tokyo.`,
      url: `https://www.kingcorporation.store/shops/${shop.id}`,
      images: [
        {
          url: shop.heroImage ? `https://www.kingcorporation.store${shop.heroImage}` : 'https://www.kingcorporation.store/images/logo_new.png',
          width: 1200,
          height: 630,
          alt: `${shop.name} - King Corporation Restaurant in Tokyo`,
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${shop.name} - ${shop.pageTitle} | King Corporation Tokyo`,
      description: `Visit ${shop.name} for delicious ${shop.pageTitle.toLowerCase()}. Authentic Japanese flavors at King Corporation in Tokyo.`,
      images: [shop.heroImage ? `https://www.kingcorporation.store${shop.heroImage}` : 'https://www.kingcorporation.store/images/logo_new.png'],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const shop = shopList.find((s) => s.id === Number(slug));

  if (!shop) return notFound();

  return <ClientShopPage shop={shop} />;
}
