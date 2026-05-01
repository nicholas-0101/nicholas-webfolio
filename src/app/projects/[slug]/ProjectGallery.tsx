"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { MotionFade, MotionCard } from "@/components/motion/MotionSection";

const smoothEase: [number, number, number, number] = [0.32, 0.72, 0, 1];

interface ProjectGalleryProps {
  gallery: string[];
  projectTitle: string;
}

export default function ProjectGallery({
  gallery,
  projectTitle,
}: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setDirection(1);
      setSelectedIndex((prev) => (prev! + 1) % gallery.length);
    }
  }, [selectedIndex, gallery.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setDirection(-1);
      setSelectedIndex((prev) => (prev! - 1 + gallery.length) % gallery.length);
    }
  }, [selectedIndex, gallery.length]);

  const handleClose = () => {
    setDirection(0);
    setSelectedIndex(null);
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Slide animation variants — slower & smoother
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : dir < 0 ? -200 : 0,
      opacity: 0,
      scale: dir === 0 ? 0.8 : 0.92,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: smoothEase,
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 200 : dir > 0 ? -200 : 0,
      opacity: 0,
      scale: dir === 0 ? 0.85 : 0.92,
      transition: {
        duration: 0.4,
        ease: smoothEase,
      },
    }),
  };

  return (
    <>
      <div className="border-t border-white/5 pt-16">
        <MotionFade
          as="h2"
          className="text-white text-2xl tracking-wider mb-8"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
          }}
        >
          PROJECT GALLERY
        </MotionFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {gallery.map((image, index) => (
            <MotionCard key={index} delay={index * 0.1}>
              <button
                onClick={() => {
                  setDirection(0);
                  setSelectedIndex(index);
                }}
                className="relative w-full aspect-[4/3] bg-[#111] cursor-pointer rounded-2xl overflow-hidden border-2 border-white/5 hover:border-[#FF4D00]/70 transition-colors duration-300 group"
              >
                <Image
                  src={image}
                  alt={`${projectTitle} gallery ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={75}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </button>
            </MotionCard>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: smoothEase }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl cursor-zoom-out"
            />

            {/* Content Container */}
            <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={selectedIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative pointer-events-auto flex items-center justify-center"
                >
                  <div className="relative group">
                    <img
                      src={gallery[selectedIndex]}
                      alt="Selected project image"
                      className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] max-h-[75vh] object-contain rounded-xl shadow-[0_0_100px_rgba(0,0,0,0.9)] border border-white/10"
                    />

                    {/* Counter Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4, ease: smoothEase }}
                      className="absolute top-6 left-6 text-white font-medium tracking-[0.4em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)] text-[10px] md:text-xs pointer-events-none"
                    >
                      {selectedIndex + 1} / {gallery.length}
                    </motion.div>

                    {/* Close Button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15, duration: 0.4, ease: smoothEase }}
                      onClick={handleClose}
                      className="absolute top-4 right-4 p-4 text-white/50 hover:text-white hover:rotate-90 transition-all duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,1.5)]"
                    >
                      <X className="w-8 h-8 md:w-10 md:h-10" />
                    </motion.button>

                    {/* Nav — Previous */}
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25, duration: 0.4, ease: smoothEase }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/40 hover:text-[#FF4D00] transition-all duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,3.5)] group/btn"
                    >
                      <ChevronLeft className="w-12 h-12 md:w-16 md:h-16 group-hover/btn:-translate-x-2 transition-transform duration-300" />
                    </motion.button>

                    {/* Nav — Next */}
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25, duration: 0.4, ease: smoothEase }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/40 hover:text-[#FF4D00] transition-all duration-300 drop-shadow-[0_2px_15px_rgba(0,0,0,3.5)] group/btn"
                    >
                      <ChevronRight className="w-12 h-12 md:w-16 md:h-16 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
