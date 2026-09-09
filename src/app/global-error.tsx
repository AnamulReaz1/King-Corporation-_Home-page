"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
          "flex flex-col items-center justify-center p-8 rounded-xl shadow-xl max-w-lg w-full",
          "bg-white dark:bg-[#232221] border border-neutral-200 dark:border-neutral-800"
        )}
      >
        <div className="mb-4">
          <svg
            width={74}
            height={74}
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
            <path
              d="M32 18v18"
              stroke="#1c9876"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="32" cy="45" r="2" fill="#1c9876" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-2 text-[#1c9876]">
          Something went wrong
        </h1>
        <p className="text-lg mb-6 text-muted-foreground text-center">
          {error?.message}
        </p>

        <div className="flex gap-4">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="rounded-full"
          >
            <Link href="/">Go Home</Link>
          </Button>
          <Button
            variant="default"
            size="lg"
            className="rounded-full"
            onClick={() => reset()}
          >
            Try Again
          </Button>
        </div>
        {/* For dev/debug: */}
        {/* <pre className="mt-6 text-xs text-red-600 whitespace-pre-wrap">{error?.message}</pre> */}
      </motion.div>
    </section>
  );
}
