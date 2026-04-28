"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

  // Animation variants
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : direction < 0 ? -100 : 0,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 30 },
        opacity: { duration: 0.25 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : direction > 0 ? -100 : 0,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <>
      <div className="border-t border-white/5 pt-16">
        <h2
          className="text-white text-2xl tracking-wider mb-8"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
          }}
        >
          PROJECT GALLERY
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {gallery.map((image, index) => (
            <button
              key={index}
              // layoutId={`gallery-${index}`}
              onClick={() => {
                setDirection(0);
                setSelectedIndex(index);
              }}
              className="relative w-full aspect-[4/3] bg-[#111] cursor-pointer rounded-2xl overflow-hidden border-2 border-white/5 hover:border-[#FF4D00]/70 transition-all duration-300 group"
            >
              <img
                src={image}
                alt={`${projectTitle} gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl cursor-zoom-out"
            />

            {/* Content Container */}
            <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
              <AnimatePresence initial={false} custom={direction} mode="wait">
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
                    <div className="absolute top-6 left-6 text-white font-medium tracking-[0.4em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)] text-[10px] md:text-xs pointer-events-none">
                      {selectedIndex + 1} / {gallery.length}
                    </div>

                    {/* Close Overlay */}
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4 p-4 text-white/50 hover:text-white hover:rotate-90 transition-all duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,1.5)]"
                    >
                      <X className="w-8 h-8 md:w-10 md:h-10" />
                    </button>

                    {/* Nav Overlays */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/40 hover:text-[#FF4D00] transition-all duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,3.5)] group/btn"
                    >
                      <ChevronLeft className="w-12 h-12 md:w-16 md:h-16 group-hover/btn:-translate-x-2 transition-transform" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/40 hover:text-[#FF4D00] transition-all duration-300 drop-shadow-[0_2px_15px_rgba(0,0,0,3.5)] group/btn"
                    >
                      <ChevronRight className="w-12 h-12 md:w-16 md:h-16 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
