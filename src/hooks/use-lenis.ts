import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

/** Access the shared Lenis instance outside React (e.g. anchor-link handlers). */
export const getLenis = () => lenisInstance;

/**
 * Drives Lenis off GSAP's ticker instead of its own rAF loop so scroll-linked
 * ScrollTrigger animations never fall a frame behind the smoothed scroll position.
 */
export const useLenis = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Respect the user's OS preference: skip smoothing, keep native scroll.
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      syncTouch: false,
      // Let native scroll take over inside nested scrollable UI (sheets,
      // command palette, scroll areas) instead of fighting page smoothing.
      allowNestedScroll: true,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    // Lenis already smooths the scroll; let GSAP's ticker stay tied to real time.
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
};
