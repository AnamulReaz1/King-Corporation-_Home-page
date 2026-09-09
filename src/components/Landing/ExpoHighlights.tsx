"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const shops = [
  {
    name: "Grand Food Court",
    description:
      "Serving quick bites and sizzling kebabs for Expo visitors on the go. Located at the heart of the Osaka Expo 2025 food zone.",
    image: "/images/food_court.jpg",
    link: "/grand-food-court",
  },
  {
    name: "Fustian Restaurant",
    description:
      "Our full-service dine-in restaurant offering authentic Turkish dishes with a luxurious experience. Perfect for families and groups.",
    image: "/images/restaurant.jpg",
    link: "/fustian-restaurant",
  },
];

export default function ExpoHighlights() {
  return (
    <section className="w-full py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-zinc-900 dark:text-white">
            🇯🇵 Osaka Expo 2025 — We’re There!
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Visit our two amazing locations at Expo 2025: a fast-food experience
            and a full dine-in restaurant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {shops.map((shop, index) => (
            <motion.div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-2xl border transition-all duration-300 p-6 flex flex-col h-full",
                // Light Mode
                "bg-gradient-to-br from-green-50 via-white to-green-100 border-zinc-200 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]",
                // Dark Mode
                "dark:bg-gradient-to-br dark:from-zinc-800/60 dark:via-zinc-900/50 dark:to-zinc-950/80 dark:border-zinc-700 dark:hover:border-green-500 dark:hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
              )}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl mb-4">
                <motion.div
                  className="relative h-full w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={shop.image}
                    alt={shop.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {shop.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {shop.description}
                </p>{" "}
                <a href={shop.link} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green hover:bg-green-700 text-white shadow-md w-full">
                    Learn More
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
