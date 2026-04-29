"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Simulate loading percentage
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Lock body scroll during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center grain"
        >
          {/* Logo Reveal */}
          <div className="relative overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
              className="text-[#FF4D00] text-5xl md:text-7xl lg:text-8xl tracking-[0.2em]"
              style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
            >
              //NICH
            </motion.h1>
          </div>

          {/* Progress bar container */}
          <div className="w-64 md:w-80 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-[#FF4D00] origin-left"
              style={{ scaleX: percent / 100 }}
            />
          </div>

          {/* Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-[#666] text-xs md:text-sm tracking-[0.4em] font-mono"
          >
            {percent}%
          </motion.div>

          {/* Ambient Glows for the loader */}
          <div
            className="absolute z-0 rounded-full blur-[150px] opacity-[0.10]"
            style={{
              width: "400px",
              height: "400px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, #FF4D00 70%, transparent 70%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
