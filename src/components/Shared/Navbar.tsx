"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu automatically on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkClass =
    "relative hover:text-green font-medium transition-colors " +
    "before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 " +
    "before:bg-green before:transition-all before:duration-300 hover:before:w-full";

  return (
    <header className="w-full sticky top-0 z-50  
                       bg-gradient-to-r from-white/80 via-white/60 to-white/40 
                       dark:from-[#0d1420]/95 dark:via-[#111827]/80 dark:to-[#1c1f2a]/80
                       border-b border-green shadow-md transition-colors duration-500">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-[72px] px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            className="mr-4"
            src="/images/logo_new.png"
            alt="logo"
            width={40}
            height={40}
          />
          <Link href="/" className={linkClass}>
            KING CORPORATION
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[30px] text-md">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/aboutus" className={linkClass}>
            About Us
          </Link>
          <Link href="/shops" className={linkClass}>
            Our Shops
          </Link>
          <Link href="/contactus" className={linkClass}>
            Contact Us
          </Link>
        </nav>

        {/* Right Button */}
        <div className="hidden md:block">
          <button className="px-[20px] py-2 rounded-full border border-green hover:bg-green hover:text-white transition text-md flex items-center font-bold backdrop-blur-md bg-gradient-to-r from-white/40 to-white/20 dark:from-[#111827]/50 dark:to-[#1c1f2a]/40">
            <Image
              src="/images/halal.webp"
              alt="logo"
              width={30}
              height={30}
              className="mr-2"
            />
            HALAL CERTIFIED
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          <Menu className="w-7 h-7 text-zinc-900 dark:text-white" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full shadow-lg z-50 flex flex-col
                         backdrop-blur-md bg-white/90 dark:bg-[#111827]/90 border-l border-green 
                         rounded-l-2xl transition-colors"
            >
              {/* Close Button */}
              <div className="flex justify-end px-10 pt-5">
                <button onClick={toggleMenu} aria-label="Close Menu">
                  <X className="w-7 h-7 text-zinc-900 dark:text-white" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col items-center gap-6 mt-10 text-lg font-medium">
                <Link href="/" className={linkClass} onClick={toggleMenu}>
                  Home
                </Link>
                <Link href="/aboutus" className={linkClass} onClick={toggleMenu}>
                  About Us
                </Link>
                <Link href="/shops" className={linkClass} onClick={toggleMenu}>
                  Our Shops
                </Link>
                <Link href="/contactus" className={linkClass} onClick={toggleMenu}>
                  Contact Us
                </Link>
                <button className="px-[20px] py-2 rounded-full border border-green hover:bg-green hover:text-white transition text-md flex items-center font-bold backdrop-blur-md bg-white/90 dark:bg-[#111827]/90">
                  <Image
                    src="/images/halal.webp"
                    alt="logo"
                    width={30}
                    height={30}
                    className="mr-2"
                  />
                  HALAL CERTIFIED
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
