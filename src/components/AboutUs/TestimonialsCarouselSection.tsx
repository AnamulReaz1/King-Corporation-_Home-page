"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonials = [
  {
    name: "John Miller",
    text: `The quality and freshness of the food are unmatched. Every dish is prepared with such attention to detail, making every visit a culinary delight!`,
    avatar: "/images/avatar1.jpg",
    stars: 5,
  },
  {
    name: "Sophia Davis",
    text: `Hokkaido Grill & BBQ is our family’s favorite! The variety of meats and seafood grilled to perfection keeps us coming back for more.`,
    avatar: "/images/avatar2.jpg",
    stars: 5,
  },
  {
    name: "Emma Rodriguez",
    text: `The service is top-notch, and the food never disappoints. Every bite is an experience in itself!`,
    avatar: "/images/avatar3.jpg",
    stars: 5,
  },
  {
    name: "Noah Wilson",
    text: `I’ve tried many places, but the flavors here are on another level. The unique blend of spices and grilling techniques is second to none.`,
    avatar: "/images/avatar4.jpg",
    stars: 5,
  },
  {
    name: "Olivia Johnson",
    text: `The chefs here are masters of their craft. Every dish is beautifully presented and tastes as incredible as it looks!`,
    avatar: "/images/avatar5.jpg",
    stars: 5,
  },
  {
    name: "Ethan Brown",
    text: `The food here is absolutely divine! From the first bite to the last, it’s a burst of flavor that leaves you wanting more.`,
    avatar: "/images/avatar6.jpg",
    stars: 5,
  },
];

const CARD_COUNT = 4;

export function TestimonialsCarouselSection() {
  const [current, setCurrent] = React.useState(0);

  const getCurrentIndexes = () => {
    const idxs = [];
    for (let i = 0; i < CARD_COUNT; i++) {
      idxs.push((current + i) % testimonials.length);
    }
    return idxs;
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + CARD_COUNT) % testimonials.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [current]);

  const pageCount = Math.ceil(testimonials.length / CARD_COUNT);

  return (
    <section className="w-full py-20  transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-green-500 uppercase tracking-wider text-sm font-semibold mb-3">
            Customer Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-heading">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl">
            Real stories from our happy customers around the world.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex flex-col items-center pt-10">
          <div className="w-full flex justify-center">
            <div className="w-full">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={getCurrentIndexes().join("-")}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {getCurrentIndexes().map((idx) => {
                    const t = testimonials[idx];
                    return (
                      <motion.div
                        key={t.name}
                        whileHover={{
                          y: -5,
                          scale: 1.02,
                          transition: { duration: 0.3 },
                        }}
                        className={cn(
                          "relative rounded-2xl border backdrop-blur-md p-8 pt-14 text-center transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.08)]",
                          "bg-white/70 border-zinc-200 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
                          "dark:bg-zinc-800/50 dark:border-zinc-700 dark:hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
                        )}
                      >
                        {/* Avatar */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-lg">
                          <Image
                            src={t.avatar}
                            alt={t.name}
                            className="w-full h-full object-cover"
                            height={80}
                            width={80}
                          />
                        </div>

                        {/* Stars */}
                        <div className="flex items-center justify-center mt-2 mb-4">
                          {Array.from({ length: t.stars }).map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-green-500 fill-green-500"
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                            >
                              <polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.6 16.54,17.94 10,13.7 3.46,17.94 6.04,11.6 0.49,7.36 7.41,7.36" />
                            </svg>
                          ))}
                        </div>

                        {/* Text */}
                        <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-6">
                          {t.text}
                        </p>

                        {/* Name */}
                        <div className="text-green-600 dark:text-green-400 font-semibold text-lg">
                          {t.name}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: pageCount }).map((_, pageIdx) => (
              <button
                key={pageIdx}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  Math.floor(current / CARD_COUNT) === pageIdx
                    ? "bg-green-500 scale-110"
                    : "bg-gray-300 dark:bg-zinc-700"
                )}
                aria-label={`Go to testimonial page ${pageIdx + 1}`}
                onClick={() => setCurrent(pageIdx * CARD_COUNT)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
