'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContentOne() {
  return (
    <section className="relative w-full py-20  transition-colors duration-700">
      <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section (Text + Features) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <p className="text-sm uppercase tracking-[0.15em] text-green-500 font-semibold">
            About King Corporation
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 dark:from-green-400 dark:via-lime-300 dark:to-green-500">
              Culinary Excellence
            </span>{' '}
            Crafted with Passion
          </h2>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base md:text-lg max-w-lg">
            We are committed to delivering an extraordinary dining experience. From the freshest
            ingredients to the finest craftsmanship, every dish reflects our dedication to quality,
            creativity, and passion.
          </p>

          {/* Feature Items */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all"
            >
              <Image
                src="/images/fresh_vegitables.png"
                alt="Fresh Ingredients"
                width={60}
                height={60}
                className="rounded-md object-cover shadow-md"
              />
              <div>
                <h4 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                  Fresh, Local Ingredients
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  We source the finest local produce to ensure every bite bursts with authentic
                  flavor and freshness.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all"
            >
              <Image
                src="/images/cheif.png"
                alt="Expertly Trained Chefs"
                width={60}
                height={60}
                className="rounded-md object-cover shadow-md"
              />
              <div>
                <h4 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                  Expertly Trained Chefs
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Our chefs combine tradition with innovation, crafting dishes that tell stories of
                  taste, culture, and craftsmanship.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full h-[320px] md:h-[460px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/aboutUs.png"
            alt="King Kebab Dish"
            fill
            className="object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
          />

          {/* Subtle overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent dark:from-black/60"></div>
        </motion.div>
      </div>
    </section>
  );
}
