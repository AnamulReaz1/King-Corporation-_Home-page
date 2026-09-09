"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center min-h-screen px-4"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        className={cn(
          "flex flex-col items-center justify-center p-10 rounded-xl shadow-xl max-w-lg w-full",
          "bg-white dark:bg-[#232221] border border-neutral-200 dark:border-neutral-800"
        )}
      >
        <div className="mb-4">
          <svg
            width={80}
            height={80}
            viewBox="0 0 64 64"
            fill="none"
            className="mx-auto"
          >
            <circle
              cx="32"
              cy="32"
              r="31"
              stroke="#1c9876"
              strokeWidth="2"
              fill={theme === "dark" ? "#232221" : "#f7f5f2"}
            />
            <text
              x="50%"
              y="52%"
              textAnchor="middle"
              fill="#1c9876"
              fontSize="2.2rem"
              fontWeight="bold"
              dy=".3em"
              fontFamily="inherit"
            >
              404
            </text>
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-[#1c9876]">
          Page Not Found
        </h1>
        <p className="text-lg mb-6 text-muted-foreground text-center">
          Oops, the page you are looking for does not exist.
          <br />
          It may have been moved or deleted.
        </p>

        <Button
          asChild
          variant="secondary"
          size="lg"
          className="rounded-full hover:bg-green hover:text-white font-bold"
        >
          <Link href="/">Go Home</Link>
        </Button>
      </motion.div>
    </section>
  );
}
