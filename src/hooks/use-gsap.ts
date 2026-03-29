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
      if (href?.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: el, offsetY: 80 },
            ease: "power3.inOut",
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener("click", handleAnchorClick));

    // GSAP ScrollTrigger reveal animations for sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0.3, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax glow orbs
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

    return () => {
      anchors.forEach((a) => a.removeEventListener("click", handleAnchorClick));
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
};
