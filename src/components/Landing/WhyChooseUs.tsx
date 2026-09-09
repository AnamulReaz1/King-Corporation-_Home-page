"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function WhyChooseUs() {
  const router = useRouter();
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg bg-white/30 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 transition-colors">
            <Image
              src="/images/why_choose.png"
              alt="chef preparing food"
              width={500}
              height={600}
              className="rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-green font-semibold mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-white">
            Culinary Excellence Crafted <br /> with Passion
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-10 leading-relaxed">
            We are committed to delivering an extraordinary dining experience.
            From the freshest ingredients to the finest craftsmanship, every
            dish is a testament to our dedication to quality and flavor.
          </p>

          {/* Features */}
          <div className="space-y-6 mb-10">
            {[
              {
                img: "/images/fresh_vegitables.png",
                title: "Fresh, Local Ingredients",
                desc: "We source only the finest local produce to ensure every bite bursts with authentic flavor.",
              },
              {
                img: "/images/cheif.png",
                title: "Expertly Trained Chefs",
                desc: "Our skilled chefs bring passion and creativity to the table, crafting dishes that tell a story of tradition and innovation.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 rounded-xl shadow-md bg-white/30 dark:bg-zinc-800/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 transition-colors"
              >
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <Button
            className="rounded-full px-8 py-4 text-md bg-green hover:bg-green/90"
            onClick={() => router.push("/aboutus")}
          >
            Explore More
          </Button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.img
        src="/images/leaf-decor.webp"
        alt="decorative leaf"
        className="hidden md:block absolute top-10 left-10 w-24 opacity-40"
        initial={{ opacity: 0, rotate: -20 }}
        whileInView={{ opacity: 0.4, rotate: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src="/images/coffee-decor.png"
        alt="decorative coffee"
        className="hidden md:block absolute bottom-10 right-10 w-24 opacity-40"
        initial={{ opacity: 0, rotate: 20 }}
        whileInView={{ opacity: 0.4, rotate: 0 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}
