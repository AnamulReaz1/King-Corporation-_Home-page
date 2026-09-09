"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

type Dish = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

const dishes: Dish[] = [
  { id: 1, title: "Gourmet Burger", desc: "Burger with special sauce", image: "/images/burger.png" },
  { id: 2, title: "Gyudon", desc: "Traditional Japanese beef bowl", image: "/images/gyudon.png" },
  { id: 3, title: "Karaage", desc: "Japanese fried chicken", image: "/images/karaage.png" },
  { id: 4, title: "Katsu Sando", desc: "Japanese pork cutlet sandwich", image: "/images/katsu.png" },
  { id: 5, title: "Signature Ramen", desc: "Rich and flavorful ramen bowl", image: "/images/ramen.png" },
  { id: 6, title: "Yakitori", desc: "Grilled chicken skewers", image: "/images/yakitori.png" },
];

export default function SpecialMenu() {
  const [index, setIndex] = useState(0);
  const visibleCards = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % dishes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleDishes = () => {
    const result: Dish[] = [];
    for (let i = 0; i < visibleCards; i++) {
      result.push(dishes[(index + i) % dishes.length]);
    }
    return result;
  };

  return (
    <section className="py-20 transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <p className="uppercase text-gray-400 mb-2">Our Special Menu</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-zinc-900 dark:text-white">
          Discover our delicious Japanese and fusion dishes
        </h2>
        <div className="w-52 h-1 bg-green mx-auto mb-12 rounded"></div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            >
              {getVisibleDishes().map((dish) => (
                <Card
                  key={dish.id}
                  className="bg-white/30 dark:bg-zinc-800/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden shadow-lg transition-colors py-0"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="px-4 py-2 text-left">
                    <h3 className="font-semibold text-lg mb-1 text-zinc-900 dark:text-white">
                      {dish.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {dish.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {dishes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? "bg-green" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
