"use client";

import React from "react";
import PhotoAlbum from "react-photo-album";
import { motion } from "framer-motion";
import "react-photo-album/rows.css";
import Footer from "@/components/Shared/Footer";

export default function Page() {
  // Generate and shuffle 9 photos randomly each render
  const photos = React.useMemo(() => {
    const list = Array.from({ length: 9 }, (_, i) => ({
      src: `/images/restaurant/image${i + 1}.jpg`,
      width: 1200,
      height: 800,
    }));
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, []);

  const activities = [
    {
      title: "Chef’s Special Show",
      desc: "Watch world-class chefs craft dishes live with mesmerizing precision and creativity.",
      icon: "👨‍🍳",
    },
    {
      title: "Fusion Tasting Event",
      desc: "Indulge in an exquisite fusion of Japanese and international cuisines — a taste journey around the world.",
      icon: "🍣",
    },
    {
      title: "Wine & Music Night",
      desc: "Unwind with live acoustic music paired with premium wines and gourmet snacks.",
      icon: "🍷",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center font-inter bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-500">
      {/* Title Section */}
      <motion.section
        className="text-center py-16 px-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-600 text-transparent bg-clip-text drop-shadow-sm">
          🍽 Fustian Restaurant — Osaka Expo 2025
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Step into an elegant dining experience blending innovation, flavor,
          and culture. Discover Osaka’s finest fusion cuisine under the dazzling
          lights of Expo 2025.
        </p>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="w-full max-w-7xl mb-20 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white/30 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 transition-colors">
          <PhotoAlbum
            layout="rows"
            photos={photos}
            spacing={10}
            targetRowHeight={250}
          />
        </div>
      </motion.section>

      {/* Activities Section */}
      <section className="w-full max-w-6xl px-4 mb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎉 Special Experiences
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center place-items-center">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              className="shadow-lg rounded-2xl p-6 flex flex-col items-center text-center border border-gray-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 bg-white/30 dark:bg-zinc-900/50 backdrop-blur-md w-full sm:w-[90%] md:w-[85%] group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-125">
                {activity.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                {activity.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {activity.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <Footer />
      </motion.div>
    </main>
  );
}
