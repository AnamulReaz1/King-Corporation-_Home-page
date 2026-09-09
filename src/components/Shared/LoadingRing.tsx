"use client";
import { motion } from "framer-motion";

export function LoadingRing({
  size = 40,
  color = "#1c9876",
  secondaryColor = "#b49273", // add a second color
  stroke = 4,
  className = "",
}: {
  size?: number;
  color?: string;
  secondaryColor?: string;
  stroke?: number;
  className?: string;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <span className={className} role="status" aria-label="Loading">
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
        style={{ display: "block" }}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={secondaryColor}
          strokeWidth={stroke}
          opacity={0.25}
        />
        {/* Foreground arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.25}
          strokeLinecap="round"
          initial={{ pathLength: 0.3 }}
          animate={{ pathLength: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </span>
  );
}