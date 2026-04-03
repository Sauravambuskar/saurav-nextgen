import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// GPU-accelerated defaults for butter-smooth rendering
gsap.defaults({
  ease: "power2.out",
  force3D: true,
});

export const useGSAPSmooth = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.length <= 1) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: el, offsetY: 80 },
        ease: "power3.inOut",
      });
    };
    document.addEventListener("click", handleClick);

    // Wait for layout
    requestAnimationFrame(() => {
      // Section reveals with staggered children
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        gsap.set(section, { opacity: 0, y: 40, willChange: "transform, opacity" });

        ScrollTrigger.create({
          trigger: section,
          start: "top 88%",
          onEnter: () => {
            gsap.to(section, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              clearProps: "willChange",
            });

            // Stagger-reveal direct children (cards, headings, etc.)
            const children = section.querySelectorAll(
              ".glass-card, .glass-card-hover, h2, h3, p, .stagger-child"
            );
            if (children.length) {
              gsap.fromTo(
                children,
                { opacity: 0, y: 20 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.06,
                  ease: "power2.out",
                  delay: 0.15,
                }
              );
            }
          },
          once: true,
        });
      });

      // Parallax orbs with smooth scrub
      const orbs = document.querySelectorAll(".glow-orb");
      orbs.forEach((orb) => {
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
      });

      // Magnetic hover effect on buttons
      const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");
      buttons.forEach((btn) => {
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
      });
    });

    return () => {
      document.removeEventListener("click", handleClick);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
};
