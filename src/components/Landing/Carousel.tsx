"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const slides = [
  {
    title: "King Kebab Akabane Delight Shop",
    subtitle:
      "TASTE THE ART OF GRILLING: WHERE EACH KEBAB IS A PERFECTLY SPICED MASTERPIECE!",
    imageUrl: "/images/slide1.jpg",
    link: "/shops/kebab-akabane",
  },
  {
    title: "Authentic Taste, Every Bite",
    subtitle: "Experience the true flavors of Turkish kebabs right in Tokyo.",
    imageUrl: "/images/slide2.jpg",
    link: "/shops/kebab-jujo",
  },
  {
    title: "Grill. Spice. Serve.",
    subtitle: "Delicious, sizzling, and unforgettable kebabs await.",
    imageUrl: "/images/slide3.jpg",
    link: "/shops/kebab-higashijujo",
  },
];

export default function Carousel() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;

    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [paused]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div
      className="relative w-full h-[60vh] overflow-hidden group rounded-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={clsx(
            "absolute inset-0 transition-opacity duration-700 ease-in-out rounded-xl overflow-hidden",
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            className="object-cover"
          />

          {/* Glassy overlay */}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-10" />

          {/* Slide content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center px-4">
            <p className="bg-white/20 dark:bg-black/30 px-4 py-1 rounded text-sm uppercase tracking-wide text-white dark:text-green-400">
              {slide.subtitle}
            </p>
            <h2 className="text-2xl md:text-5xl font-bold mt-2 drop-shadow-lg text-white">
              {slide.title}
            </h2>
            <Button
              className="bg-green hover:bg-green-700 text-white mt-4 shadow-md"
              onClick={() => router.push(slide.link)}
            >
              Explore More
            </Button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-30 transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-30 transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={clsx(
              "w-3 h-3 rounded-full transition-all duration-300",
              current === index ? "bg-green" : "bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </div>
  );
}
