import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { getLenis } from "./use-lenis";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// GPU-accelerated defaults for butter-smooth rendering
gsap.defaults({
  ease: "power2.out",
  force3D: true,
});

// Avoid spurious re-layouts from mobile browser address-bar resize.
ScrollTrigger.config({ ignoreMobileResize: true });

// NOTE: Section/card entrance reveals are handled per-component by Framer
// Motion (whileInView/useInView) — every section already has its own tuned
// reveal. This hook only owns effects Framer Motion doesn't: anchor-link
// smooth scroll, background parallax, and magnetic button hover. Doing
// section reveals here too used to fight the Framer Motion ones (both
// writing opacity/transform on the same nodes every time they scrolled
// into view), which was a real source of scroll jank.

export const useGSAPSmooth = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Smooth scroll for anchor links, routed through Lenis when it's active.
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.length <= 1) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();

      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 });
      } else {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: el, offsetY: 80 },
          ease: "power3.inOut",
        });
      }
    };
    document.addEventListener("click", handleClick);

    if (prefersReducedMotion) {
      return () => document.removeEventListener("click", handleClick);
    }

    // Elements handled so far, so late-mounting (lazy loaded) sections
    // aren't silently skipped by a one-shot querySelectorAll.
    const observedOrbs = new WeakSet<Element>();
    const observedButtons = new WeakSet<Element>();

    const observeOrb = (orb: Element) => {
      gsap.to(orb, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: orb.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    };

    const observeButton = (btn: Element) => {
      const el = btn as HTMLElement;
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
        gsap.to(el, { x, y, duration: 0.4, ease: "power2.out" });
      };
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
    };

    // Returns true only if a genuinely new (not-yet-seen) element was picked
    // up, so callers know whether a ScrollTrigger.refresh() is warranted.
    const scanForNewElements = () => {
      let foundNew = false;

      document.querySelectorAll(".glow-orb").forEach((orb) => {
        if (observedOrbs.has(orb)) return;
        observedOrbs.add(orb);
        observeOrb(orb);
        foundNew = true;
      });

      document.querySelectorAll(".btn-primary, .btn-secondary").forEach((btn) => {
        if (observedButtons.has(btn)) return;
        observedButtons.add(btn);
        observeButton(btn);
      });

      return foundNew;
    };

    // Initial pass once the current layout has settled.
    const rafId = requestAnimationFrame(scanForNewElements);

    // Lazy-loaded sections (React.lazy + Suspense) mount asynchronously after
    // the initial pass — watch the DOM so their orbs still get parallax.
    // Mutation bursts (tooltips, sheets, toasts) are coalesced into a single
    // scan per frame, and ScrollTrigger only refreshes when something new
    // was actually found, to avoid layout thrashing during interaction.
    let scanQueued = false;
    const scheduleScan = () => {
      if (scanQueued) return;
      scanQueued = true;
      requestAnimationFrame(() => {
        scanQueued = false;
        if (scanForNewElements()) ScrollTrigger.refresh();
      });
    };

    const mutationObserver = new MutationObserver(scheduleScan);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("click", handleClick);
      cancelAnimationFrame(rafId);
      mutationObserver.disconnect();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
};
