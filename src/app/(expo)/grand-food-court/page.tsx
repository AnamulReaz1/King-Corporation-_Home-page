"use client";

import React from "react";
import PhotoAlbum from "react-photo-album";
import { motion } from "framer-motion";
import "react-photo-album/rows.css";
import Footer from "@/components/Shared/Footer";

export default function Page() {
  const photos = Array.from({ length: 14 }, (_, i) => ({
    src: `/images/food_court/image${i + 1}.jpg`,
    width: 1200,
    height: 800,
  }));

  const activities = [
    {
      title: "Shake Show",
      desc: "A thrilling performance featuring vibrant energy and dance moves to shake up your spirit.",
      icon: "💃",
    },
    {
      title: "Dall Dance",
      desc: "Experience traditional cultural rhythms blended with modern beats — a dance of joy and unity.",
      icon: "🕺",
    },
    {
      title: "Live Concert",
      desc: "Enjoy live music from top artists and local performers under the Osaka Expo night sky.",
      icon: "🎤",
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
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-500 to-orange-600 text-transparent bg-clip-text drop-shadow-sm flex items-center justify-center gap-3">
          🌟 Grand Food Court — Osaka Expo 2025
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Experience the flavors, culture, and live entertainment of the Osaka
          Expo! Discover world cuisines, dance, and music — all in one vibrant
          space.
        </p>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="w-full max-w-7xl mb-20 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-700 bg-white/30 dark:bg-zinc-900/50 backdrop-blur-md transition-all">
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
          className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎭 Featured Activities
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
