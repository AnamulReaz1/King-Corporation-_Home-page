"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const SHOPS = [
  {
    label: "King Kebab Akabane",
    content: (
      <div>
        <h3 className="text-2xl font-bold mb-2">King Kebab Akabane</h3>
        <p className="mb-2">〒115-0045 東京都北区赤羽1丁目10-2</p>
        <p className="mb-2">営業時間: 11:00〜23:00</p>
        <p className="mb-2">TEL: 03-1234-5678</p>
        <p className="mb-2">
          Special: Lamb Kebab, Chicken Kebab, Turkish Ice Cream
        </p>
      </div>
    ),
  },
  {
    label: "King Kebab Jujo",
    content: (
      <div>
        <h3 className="text-2xl font-bold mb-2">King Kebab Jujo</h3>
        <p className="mb-2">〒114-0032 東京都北区中十条2丁目18-7</p>
        <p className="mb-2">営業時間: 12:00〜22:00</p>
        <p className="mb-2">TEL: 03-8765-4321</p>
        <p className="mb-2">Special: Beef Kebab, Veggie Kebab, Baklava</p>
      </div>
    ),
  },
  {
    label: "King Kebab Higashijujo",
    content: (
      <div>
        <h3 className="text-2xl font-bold mb-2">King Kebab Higashijujo</h3>
        <p className="mb-2">〒114-0001 東京都北区東十条3丁目17-6</p>
        <p className="mb-2">営業時間: 10:00〜21:00</p>
        <p className="mb-2">TEL: 03-2468-1357</p>
        <p className="mb-2">Special: Mixed Kebab, Turkish Coffee, Falafel</p>
      </div>
    ),
  },
];

export function Tabs() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full flex items-center justify-center py-16 px-2">
      <div className="w-full max-w-3xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-2 mb-8">
          {SHOPS.map((shop, idx) => (
            <button
              key={shop.label}
              onClick={() => setSelected(idx)}
              className={cn(
                "w-full md:w-auto flex-1 px-5 py-3 rounded-t-lg md:rounded-l-lg md:rounded-t-none font-semibold text-lg transition-colors duration-200",
                selected === idx
                  ? "bg-[#191b1b] text-[#1c9876] shadow"
                  : "bg-[#101113] text-[#ececec] hover:bg-[#191b1b]"
              )}
              aria-selected={selected === idx}
              aria-controls={`panel-${idx}`}
              role="tab"
            >
              {shop.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="relative min-h-[180px] bg-[#191b1b] rounded-b-lg md:rounded-lg p-6 text-[#ececec] shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 80 }}
              id={`panel-${selected}`}
              aria-labelledby={`tab-${selected}`}
              role="tabpanel"
              className="w-full"
            >
              {SHOPS[selected].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
