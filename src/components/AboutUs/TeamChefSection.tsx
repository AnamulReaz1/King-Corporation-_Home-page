"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const chefs = [
  {
    name: "Anthony J. Bowman",
    role: "Senior Chef",
    image: "/images/chef1.png",
  },
  {
    name: "Kenny V. Gonzalez",
    role: "Senior Chef",
    image: "/images/chef2.png",
  },
  {
    name: "Joseph M. Lawrence",
    role: "Senior Chef",
    image: "/images/chef3.png",
  },
  { name: "Charles K. Smith", role: "Senior Chef", image: "/images/chef4.png" },
];

export function TeamChefsSection() {
  return (
    <section className="w-full py-20  transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-green-500 uppercase tracking-wider text-sm font-medium mb-3">
            Experienced Team Members
          </span>
          <h2
            className={cn(
              "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-heading text-center"
            )}
          >
            Meet Our Professional Chefs
          </h2>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, idx) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: 0.1 * idx,
                duration: 0.6,
                type: "spring",
                stiffness: 90,
              }}
              className={cn(
                "relative bg-white dark:bg-zinc-800 rounded-2xl shadow-lg flex flex-col items-center p-6 hover:shadow-2xl transition-shadow duration-300 group"
              )}
            >
              {/* Image */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-5 relative group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                  width={400}
                  height={400}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>

              {/* Name & Role */}
              <div className="w-full text-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {chef.name}
                </h3>
                <div className="text-green-500 dark:text-green-400 text-base font-medium">
                  {chef.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
