"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to the target value when visible.
 * Resets when the element leaves the viewport so it can replay.
 * Returns the current animated value.
 */
export function useCountUp(target: number, duration = 1500, isVisible = true) {
  const [count, setCount] = useState(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!isVisible) {
      // Reset when out of view so it can replay next time
      isAnimating.current = false;
      setCount(0);
      return;
    }

    if (isAnimating.current) return;
    isAnimating.current = true;

    // Small delay to ensure the loading screen has cleared
    const delayTimer = setTimeout(() => {
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic for a satisfying deceleration
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, 200);

    return () => clearTimeout(delayTimer);
  }, [target, duration, isVisible]);

  return count;
}
