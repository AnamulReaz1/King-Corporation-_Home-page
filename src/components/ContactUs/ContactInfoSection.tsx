"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const info = [
  {
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green"
      >
        <path d="M21 10.5V19a1.5 1.5 0 0 1-1.5 1.5h0a1.5 1.5 0 0 1-.5-.08l-6-2.14-6 2.14A1.5 1.5 0 0 1 3 19V5a1.5 1.5 0 0 1 2-1.41l7 2.5 6-2.14a1.5 1.5 0 0 1 2 1.41v5" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
    title: "Main Location",
    lines: [
      "〒114-0001 東京都北区東十条 3-17-6",
      "チャレンジビル 3F",
      "",
      "3-17-6 Higashijujo, Kita-ku, Tokyo 114-0001 Japan",
    ],
  },
  {
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
    title: "Email Address",
    lines: [
      "kingcorp2005@gmail.com",
      "https://www.kingcorporation.store",
      "",
      "supportking@gmail.com",
      "https://www.kingcorporation.store",
    ],
  },
  {
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green"
      >
        <path d="M22 17v-3A10 10 0 0 0 2 14v3" />
        <rect x="2" y="17" width="4" height="4" rx="2" />
        <rect x="18" y="17" width="4" height="4" rx="2" />
        <path d="M8 21v-2a4 4 0 0 1 8 0v2" />
      </svg>
    ),
    title: "Phone Number",
    lines: ["03-6903-0048", "", "+81-80-4168-9192"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function ContactInfoSection() {
  return (
    <section className="w-full flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {info.map((item, i) => (
          <motion.div
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 70 }}
          >
            <Card
              className={cn(
                "group relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 min-h-[420px]",
                // 🌞 Light Mode Gradient
                "bg-gradient-to-br from-green-100 via-green-50 to-white border-zinc-200 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]",
                // 🌙 Dark Mode Gradient
                "dark:bg-gradient-to-br dark:from-zinc-800/60 dark:via-zinc-900/50 dark:to-zinc-950/80 dark:border-zinc-700 dark:hover:border-green-500 dark:hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]"
              )}
            >
              <CardContent className="flex flex-col flex-1 items-center gap-4 h-full justify-center">
                <div>{item.icon}</div>
                <h3 className="text-2xl font-semibold mt-2 text-zinc-900 dark:text-zinc-100 font-sans tracking-wide text-center">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-2 mt-2 text-base text-zinc-700 dark:text-zinc-300 flex-1 justify-center text-center">
                  {item.lines.map((line, idx) =>
                    line === "" ? (
                      <span key={idx} className="flex justify-center my-2">
                        <span className="w-32 border-t-2 border-dashed border-green" />
                      </span>
                    ) : (
                      <span key={idx}>{line}</span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
