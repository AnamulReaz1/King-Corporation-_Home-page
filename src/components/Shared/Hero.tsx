"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  image: string;
  alt?: string;
}
// Shared Hero Component

export default function Hero({ title, image, alt = "King Corporation Restaurant" }: HeroProps) {
  return (
    <div className="relative h-[200px] md:h-[300px] overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover opacity-90"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-5xl font-bold text-white px-5 md:px-0 "
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
