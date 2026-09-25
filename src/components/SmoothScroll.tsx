"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: { offset: -20 },
      smoothWheel: true,
      syncTouch: true,
      lerp: 0.045,
      wheelMultiplier: 0.8,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
