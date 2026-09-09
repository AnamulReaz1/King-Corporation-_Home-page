"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t text-zinc-300 dark:text-zinc-400">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* ======= LEFT: About Section ======= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <Image
              src="/images/logo_new.png"
              alt="logo"
              width={30}
              height={30}
            />
            <p className="font-bold text-xl ml-3">KING CORPORATION</p>
          </div>
          <p className="text-sm leading-relaxed mb-6 text-zinc-400">
            Experience the authentic taste of Japanese cuisine at King Kebab. We
            bring you the finest flavors with our commitment to quality and
            tradition.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1JyG8RzY3p/?mibextid=wwXIfr"
              className="bg-zinc-800 hover:bg-green text-white p-2 rounded-full transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="bg-zinc-800 hover:bg-green text-white p-2 rounded-full transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/king_corporation1?igsh=MTdrOWlxam05bGQ1Mw%3D%3D&utm_source=qr"
              className="bg-zinc-800 hover:bg-green text-white p-2 rounded-full transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </motion.div>

        {/* ======= MIDDLE: Contact Info ======= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3 border-b-2 border-green inline-block">
            Contact Info
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-green w-5 h-5 mt-1" />
              <p>
                3-17-6 Higashijujo, Kita-ku
                <br />
                Tokyo 114-0001 Japan
                <br />
                〒114-0001 東京都北区東十条 3F
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-green w-5 h-5 mt-1" />
              <p>
                Phone: +81-80-4168-9192
                <br />
                Tel: +81-3-6903-0048
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-green w-5 h-5 mt-1" />
              <p>kingcorp2005@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* ======= RIGHT: Opening Hours ======= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3 border-b-2 border-green inline-block">
            Opening Hours
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex justify-between border-b border-zinc-800 pb-2">
              <span>Sunday - Thursday</span>
              <span>08:00 AM - 09:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-zinc-800 pb-2">
              <span>Friday</span>
              <span>03:00 PM - 09:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span className="text-red-500 font-medium">Saturday</span>
              <span className="text-red-500">Closed</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <Separator className="bg-zinc-800" />

      {/* Bottom bar */}
      <div className="py-4 text-center text-sm text-zinc-500 dark:text-zinc-600">
        © 2025 King Corporation. All Rights Reserved.
      </div>
    </footer>
  );
}
