import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const useGSAPSmooth = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href?.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: el, offsetY: 80 },
            ease: "power3.inOut",
          });
        }
      }
    };

    // Use event delegation instead of attaching to every anchor
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        handleAnchorClick.call(null, Object.assign(e, { currentTarget: anchor }));
      }
    };
    document.addEventListener("click", handleClick);

    // Batch ScrollTrigger creation with requestAnimationFrame
    requestAnimationFrame(() => {
      // Section reveals - lightweight
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 90%",
          onEnter: () => {
            gsap.to(section, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
          },
          once: true,
        });
        gsap.set(section, { opacity: 0.2, y: 30 });
      });

      // Parallax orbs - reduced count, lighter scrub
      const orbs = document.querySelectorAll(".glow-orb");
      orbs.forEach((orb) => {
        gsap.to(orb, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: orb.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });
    });

    return () => {
      document.removeEventListener("click", handleClick);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
};
