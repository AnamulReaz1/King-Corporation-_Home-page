"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <section className="py-20 transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-green font-semibold mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leading with Innovation <br /> and Excellence
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-6">
            At King Corporation, we pride ourselves on delivering exceptional
            quality and service across all our ventures. With a commitment to
            innovation and integrity, we aim to exceed expectations and create
            lasting value for our clients and communities.
          </p>

          {/* Glassy Founder Card */}
          <Card className="bg-white/30 dark:bg-zinc-800/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 shadow-lg rounded-2xl transition-colors duration-500">
            <CardContent className="flex items-center gap-6 p-6">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/restaurant/image1.jpg"
                  alt="founder"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="italic text-sm md:text-base text-zinc-700 dark:text-zinc-300">
                  True success is building something that matters, leaving a
                  legacy of excellence.
                </p>
                <p className="font-semibold mt-2 md:mt-3 text-base md:text-lg">
                  Hossain Dulal
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-700 bg-white/20 dark:bg-zinc-900/40 backdrop-blur-md transition-all duration-500"
        >
          <Image
            src="/images/office.png"
            alt="office"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
