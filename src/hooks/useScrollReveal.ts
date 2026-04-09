"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hook that returns a ref and a boolean indicating whether the element is visible.
 * Uses IntersectionObserver to detect when the element enters the viewport.
 * Once visible, stays visible (no re-hiding on scroll away).
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Find the scroll container
    const scrollContainer = document.querySelector(
      ".overflow-y-auto"
    ) as HTMLElement | null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        root: scrollContainer,
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
