"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

const YOUTUBE_ID = "DzSSUU37ynQ";

export function HeroWithPlay() {
  const [playing, setPlaying] = React.useState(false);

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center my-16 px-4">
      <div className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl flex items-center justify-center ">
        {/* Thumbnail & Play Button */}
        {!playing && (
          <>
            <Image
              src="/images/thumbnail.png"
              alt="YouTube Video Thumbnail"
              className="absolute inset-0 w-full h-full object-cover brightness-90 dark:brightness-75 transition-all duration-500"
              draggable={false}
              width={1200}
              height={600}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 dark:from-black/60 dark:to-black/30 flex items-center justify-center z-10 transition-colors duration-500">
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              >
                <Button
                  size="icon"
                  className="rounded-full w-32 h-32 bg-white/90 hover:bg-white/80 dark:bg-neutral-900/80 dark:hover:bg-neutral-900/90 shadow-xl hover:scale-105 transition-transform duration-300 group flex items-center justify-center"
                  aria-label="Play video"
                  onClick={() => setPlaying(true)}
                >
                  <Play className="w-16 h-16 text-green-500 group-hover:text-green-600 dark:text-green-400 dark:group-hover:text-green-300 transition-colors duration-300" />
                </Button>
              </motion.div>
            </div>
          </>
        )}

        {/* Video iFrame */}
        {playing && (
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube video player"
            className="absolute inset-0 w-full h-full rounded-xl"
          />
        )}

        {/* Maintain aspect ratio when not playing */}
        {!playing && <div className="w-full h-full aspect-video" />}
      </div>
    </section>
  );
}
