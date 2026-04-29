"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

/* ──────────────────────────────────────────
   Shared easing curve (typed as tuple)
   ────────────────────────────────────────── */
const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ──────────────────────────────────────────
   Container — triggers stagger for children
   ────────────────────────────────────────── */
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export function MotionSection({
  children,
  className,
  style,
  id,
  threshold = 0.08,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  threshold?: number;
}) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: threshold }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   Fade-in-up — for headings, text, etc.
   ────────────────────────────────────────── */
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
};

export function MotionFade({
  children,
  className,
  style,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "span";
}) {
  const Component = motion[as] as any;
  return (
    <Component
      className={className}
      style={style}
      variants={{
        hidden: fadeUpVariants.hidden,
        visible: {
          ...fadeUpVariants.visible,
          transition: {
            duration: 1,
            ease: smoothEase,
            delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </Component>
  );
}

/* ──────────────────────────────────────────
   Card item — slide-up with slight scale
   ────────────────────────────────────────── */
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: smoothEase,
    },
  },
};

export function MotionCard({
  children,
  className,
  style,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: cardVariants.hidden,
        visible: {
          ...cardVariants.visible,
          transition: {
            duration: 0.9,
            ease: smoothEase,
            delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   Slide-in from left/right
   ────────────────────────────────────────── */
export function MotionSlide({
  children,
  className,
  style,
  direction = "left",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: "left" | "right";
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: {
          opacity: 0,
          x: direction === "left" ? -60 : 60,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            ease: smoothEase,
            delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
