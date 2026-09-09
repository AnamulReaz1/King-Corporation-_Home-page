"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function GetInTouchSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Card Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 90 }}
          className="flex-shrink-0 rounded-xl overflow-hidden shadow-2xl bg-white/5 dark:bg-white/10 backdrop-blur-sm"
        >
          <Image
            src="/images/contact.webp"
            alt="Business Card"
            width={450}
            height={330}
            className="block w-[350px] md:w-[450px] h-auto"
            priority
          />
        </motion.div>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 90 }}
          className="max-w-xl text-left px-5"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-zinc-900 dark:text-zinc-100 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300">
            Have questions about our services? Want to make a reservation? We
            are here to help you and answer any questions you might have.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
