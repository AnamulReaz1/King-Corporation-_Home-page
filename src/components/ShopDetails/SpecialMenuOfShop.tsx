"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

interface MenuItem {
  id: number;
  title: string;
  menuName: string;
  image: string;
}

interface SpecialMenuOfShopProps {
  shop: {
    menu: MenuItem[];
  };
}

export default function SpecialMenuOfShop({ shop }: SpecialMenuOfShopProps) {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:px-0 px-5">
        {shop.menu.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onMenuNameClick={() => setModalImage(item.image)}
          />
        ))}
      </div>
      <AnimatePresence>
        {modalImage && (
          <Modal image={modalImage} onClose={() => setModalImage(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

function MenuCard({
  item,
  onMenuNameClick,
}: {
  item: MenuItem;
  onMenuNameClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="rounded-2xl overflow-hidden shadow-xl bg-zinc-50 dark:bg-zinc-950 flex flex-col cursor-pointer transition-all duration-200"
      whileHover={{ scale: 1.04, boxShadow: "0 4px 32px rgba(0,0,0,0.20)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        onMenuNameClick();
      }}
    >
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-all duration-200"
          priority={false}
        />
        <motion.button
          initial={false}
          animate={
            hovered
              ? { opacity: 1, y: 0, pointerEvents: "auto" }
              : { opacity: 0, y: 30, pointerEvents: "none" }
          }
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute left-4 bottom-3 z-10 px-4 py-2 rounded-full font-semibold text-white text-base bg-[#fc6a5b] shadow-lg select-none"
        >
          {item.menuName}
        </motion.button>
      </div>
      <div className="bg-zinc-50 dark:bg-zinc-950 flex-1 flex items-center justify-center py-6">
        <span className="text-lg md:text-xl font-bold text-white">
          {item.title}
        </span>
      </div>
    </motion.div>
  );
}

function Modal({ image, onClose }: { image: string; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.97, opacity: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-6 -right-6 bg-green rounded-full p-2 text-white hover:bg-[#fc6a5b] transition z-10"
          aria-label="Close"
        >
          <IoMdClose size={32} />
        </button>
        <div className="relative w-[90vw] max-w-3xl h-[70vw] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl ">
          <Image
            src={image}
            alt="Menu Image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
