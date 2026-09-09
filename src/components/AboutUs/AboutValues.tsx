"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Our Journey",
    subtitle: "Since 2010",
    description:
      "We’ve grown from a local startup to a leader in the food industry, serving customers worldwide.",
  },
  {
    title: "Our Values",
    subtitle: "Integrity & Quality",
    description:
      "Integrity, Quality, and Customer Focus are the pillars of everything we do at King Corporation.",
  },
  {
    title: "Our Vision",
    subtitle: "Future Forward",
    description:
      "To revolutionize the food industry with our dedication to innovation, quality, and customer satisfaction.",
  },
];

export function AboutValues() {
  return (
    <section className="relative w-full py-20  transition-colors duration-700">


      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl md:text-5xl font-bold mb-14 text-green-600 dark:text-green-400 font-heading"
        >
          About King Corporation
        </motion.h2>

        {/* Card Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: 0.15 * idx,
                duration: 0.7,
                type: "spring",
                stiffness: 90,
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 40px rgba(34,197,94,0.25)",
              }}
              className={cn(
                "group relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300",
                // 🌞 Light Mode
                "bg-white border-zinc-200 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]",
                // 🌙 Dark Mode
                "dark:bg-zinc-800/60 dark:border-zinc-700 dark:hover:border-green-500 dark:hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
              )}
            >
              {/* Subtle glow animation overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-green-400 to-transparent rounded-2xl blur-md transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-heading text-green-600 dark:text-green-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-200 mb-2">
                  {item.subtitle}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
