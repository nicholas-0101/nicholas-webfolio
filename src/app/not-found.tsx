"use client";

import Link from "next/link";
import { MotionSection, MotionFade } from "@/components/motion/MotionSection";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden grain">
      {/* Grid lines background */}
      <div className="absolute inset-0 z-0 hero-grid" />

      {/* Gradient glows */}
      <div
        className="absolute z-0 rounded-full blur-[180px] opacity-[0.10]"
        style={{
          width: "600px",
          height: "500px",
          top: "10%",
          right: "10%",
          background: "radial-gradient(circle, #a855f7 70%, transparent 70%)",
        }}
      />
      <div
        className="absolute z-0 rounded-full blur-[150px] opacity-[0.08]"
        style={{
          width: "450px",
          height: "450px",
          bottom: "10%",
          left: "10%",
          background: "radial-gradient(circle, #FF4D00 70%, transparent 70%)",
        }}
      />

      {/* Content */}
      <MotionSection className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Large 404 */}
        <MotionFade
          as="h1"
          className="text-[#FF4D00] text-[150px] sm:text-[200px] md:text-[280px] lg:text-[350px] leading-none tracking-tight select-none"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
          }}
        >
          404
        </MotionFade>

        {/* Subtitle */}
        <MotionFade
          as="p"
          delay={0.15}
          className="text-white text-2xl sm:text-3xl md:text-4xl tracking-tight -mt-4 md:-mt-8"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
          }}
        >
          PAGE NOT FOUND
        </MotionFade>

        {/* Description */}
        <MotionFade delay={0.3}>
          <p className="text-[#666] text-sm md:text-base max-w-md mt-4 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </MotionFade>

        {/* Divider */}
        <MotionFade delay={0.45}>
          <div className="w-12 h-px bg-white/10 mt-8 mb-8" />
        </MotionFade>

        {/* Back home button */}
        <MotionFade delay={0.6}>
          <Link
            href="/"
            className="group flex items-center gap-3 text-white text-sm uppercase tracking-[0.2em] hover:text-[#FF4D00] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12H5m7-7l-7 7 7 7"
              />
            </svg>
            Back to Home
          </Link>
        </MotionFade>
      </MotionSection>
    </div>
  );
}
