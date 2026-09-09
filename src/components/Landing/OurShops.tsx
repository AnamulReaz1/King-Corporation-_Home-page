'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const shops = [
  {
    name: 'King Kebab Higashijujo',
    image: '/images/king_kebab3.png',
    link: '/shops/3',
  },
  {
    name: 'King Kebab Jujo (King Curry)',
    image: '/images/king_kebab2.png',
    link: '/shops/2',
  },
  { name: 'King Kebab Akabane', image: '/images/king_kebab1.png', link: '/shops/1' },
];

export default function OurShops() {
  return (
    <section className="w-full py-16 transition-colors duration-500">
      <div className="container px-4 mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Shops
        </motion.h2>
        <motion.p
          className="text-zinc-600 dark:text-zinc-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Explore Our Exclusive Range of Specialty Shops
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {shops.map((shop, index) => (
            <motion.a
              key={index}
              href={shop.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group relative overflow-hidden rounded-2xl border transition-all duration-500 flex flex-col h-full',
                'bg-gradient-to-br from-white/70 via-green-50 to-white/70 border-zinc-200 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]',
                'dark:bg-gradient-to-br dark:from-zinc-800/60 dark:via-zinc-900/50 dark:to-zinc-950/80 dark:border-zinc-700 dark:hover:border-green-500 dark:hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]'
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="relative w-full h-48 sm:h-60 md:h-72 overflow-hidden rounded-xl mb-4">
                <motion.div
                  className="relative h-full w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <Image
                    src={shop.image}
                    alt={shop.name}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              </div>
              <div className="flex-1 flex items-center justify-center px-2 pb-4">
                <p className="text-zinc-900 dark:text-white font-semibold text-lg md:text-xl text-center">
                  {shop.name}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
