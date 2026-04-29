"use client";

import { useLayoutEffect } from "react";

export default function ScrollToTop() {
  useLayoutEffect(() => {
    // With 'scroll-behavior: smooth' removed from CSS, this will be an instant jump.
    window.scrollTo(0, 0);
  }, []);

  return null;
}
