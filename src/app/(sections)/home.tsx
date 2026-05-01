"use client";

import { ArrowDownRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const roles = [
  { title: "Fullstack Developer", tagline: "WEBSITES." },
  { title: "UI/UX Designer", tagline: "EXPERIENCES." },
  { title: "Graphic Designer", tagline: "VISUALS." },
];

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Technologies Mastered" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
];

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: smoothEase,
      delay,
    },
  }),
};

function StatItem({
  value,
  suffix,
  label,
  isVisible,
  delay,
  isLast,
}: {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
  isLast: boolean;
}) {
  const count = useCountUp(value, 1800, isVisible);

  return (
    <motion.div
      className={`group flex items-center cursor-default ${
        !isLast ? "md:border-r md:border-white/10 md:pr-10 lg:pr-12" : ""
      }`}
      variants={fadeUp}
      custom={delay}
    >
      <div className="flex flex-col">
        <span
          className="text-white transition-all duration-300 group-hover:text-[#FF4D00] group-hover:drop-shadow-[0_0_15px_rgba(255,77,0,0.5)] text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
          }}
        >
          {count}
          {suffix}
        </span>
        <span className="text-[#666] transition-colors duration-300 group-hover:text-[#999] text-xs md:text-sm uppercase tracking-[0.2em] mt-1">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

function HomeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.05 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);

  // Wait for loading screen to finish before enabling count-up
  useEffect(() => {
    const onDone = () => setLoadingDone(true);
    window.addEventListener("loadingComplete", onDone);
    return () => window.removeEventListener("loadingComplete", onDone);
  }, []);

  const currentTagline = roles[roleIndex].tagline;

  // Typewriter effect for the tagline
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentTagline.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTagline.slice(0, displayedText.length + 1));
      }, 120);
    } else if (!isDeleting && displayedText.length === currentTagline.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3500);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 60);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTagline]);

  return (
    <motion.div
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center gap-16 overflow-x-clip grain"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.05 }}
    >
      {/* Grid lines background */}
      <div className="h-screen absolute inset-0 z-0 hero-grid" />

      {/* Gradient glows */}
      <div
        className="absolute z-0 rounded-full blur-[180px] opacity-[0.10]"
        style={{
          width: "600px",
          height: "500px",
          top: "-10%",
          right: "-5%",
          background: "radial-gradient(circle, #a855f7 70%, transparent 70%)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute z-0 rounded-full blur-[150px] opacity-[0.08]"
        style={{
          width: "450px",
          height: "450px",
          top: "5%",
          right: "15%",
          background: "radial-gradient(circle, #FF4D00 70%, transparent 70%)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute z-0 rounded-full blur-[160px] opacity-[0.06]"
        style={{
          width: "400px",
          height: "400px",
          top: "35%",
          right: "30%",
          background: "radial-gradient(circle, #ec4899 70%, transparent 70%)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute z-0 rounded-full blur-[160px] opacity-[0.06]"
        style={{
          width: "400px",
          height: "400px",
          bottom: "25%",
          left: "10%",
          background: "radial-gradient(circle, #ec4899 70%, transparent 70%)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute z-0 rounded-full blur-[140px] opacity-[0.07]"
        style={{
          width: "500px",
          height: "450px",
          bottom: "5%",
          left: "0%",
          background: "radial-gradient(circle, #FF6B2B 70%, transparent 70%)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />

      {/* Hero content — two-column layout */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-20 md:pt-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-16 xl:gap-24">
          {/* Left column — greeting + name */}
          <div className="lg:flex-1 text-left">
            <motion.p
              className="text-[#b0b0b0] text-lg md:text-xl tracking-[0.2em] uppercase mb-4"
              variants={fadeUp}
              custom={0}
            >
              Hi, I&apos;m
            </motion.p>
            <motion.h1
              className="flex text-[#FF4D00] cursor-default text-6xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[200px] leading-[0.85] tracking-tight ml-[-5px]"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              }}
              variants={fadeUp}
              custom={0.15}
            >
              {"NICHOLAS".split("").map((letter, index) => (
                <span
                  key={index}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {letter}
                </span>
              ))}
            </motion.h1>
          </div>

          {/* Right column — role, tagline, description, CTAs */}
          <div className="lg:flex-1 mt-8 lg:mt-0">
            {/* Auto-cycling role */}
            <motion.div
              className="relative h-6 md:h-7 mb-6 overflow-hidden"
              variants={fadeUp}
              custom={0.3}
            >
              {roles.map((role, i) => (
                <p
                  key={role.title}
                  className="absolute inset-0 text-[#FF4D00] text-sm md:text-base tracking-[0.3em] uppercase transition-all duration-700 ease-in-out"
                  style={{
                    opacity: i === roleIndex ? 1 : 0,
                    transform:
                      i === roleIndex ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  {">> "}
                  {role.title}
                </p>
              ))}
            </motion.div>

            {/* Auto-cycling tagline with typewriter */}
            <motion.h2
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-8"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              }}
              variants={fadeUp}
              custom={0.45}
            >
              I BUILD
              <br />
              <span className="text-[#FF4D00]">
                {displayedText}
                <span className="inline-block w-[3px] h-[0.85em] bg-[#FF4D00] ml-1 align-middle animate-blink" />
              </span>
            </motion.h2>

            <motion.p
              className="text-[#b0b0b0] text-base md:text-lg max-w-lg leading-relaxed mb-10"
              variants={fadeUp}
              custom={0.6}
            >
              Blending fullstack development, UI/UX, and visual design —
              <br /> I turn complexity into elegant solutions.
            </motion.p>

            {/* CTA links */}
            <motion.div
              className="flex flex-wrap items-center gap-8"
              variants={fadeUp}
              custom={0.75}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  if (window.location.hash) {
                    history.replaceState(null, "", window.location.pathname);
                  }
                }}
                className="link-underline text-white text-sm md:text-base uppercase tracking-[0.2em] flex items-center gap-2 group cursor-pointer bg-transparent border-none p-0 font-sans"
              >
                Contact me
                <ArrowDownRight className="w-4 h-4 text-[#FF4D00] group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              <a
                href="/CV-Nicholas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-white text-sm md:text-base uppercase tracking-[0.2em] flex items-center gap-2 group cursor-pointer"
              >
                View CV
                <ArrowDownRight className="w-4 h-4 text-[#FF4D00] group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats row — bottom of hero */}
      <div className="relative z-10 px-8 md:px-12 lg:px-16 pb-12 md:pb-16">
        <div className="flex flex-wrap gap-8 md:gap-10 lg:gap-12">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={inView && loadingDone}
              delay={0.8 + i * 0.15}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default HomeSection;
