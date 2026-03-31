import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";

const caseStudies: Gallery4Item[] = [
  {
    id: "ostree",
    title: "OSTREE – Scalable E-commerce Fashion Platform",
    description:
      "Built a high-availability fashion e-commerce platform with performance optimization, handling thousands of daily transactions seamlessly.",
    href: "/case-study/ostree",
    image:
      "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-324-1024x576.png",
  },
  {
    id: "studdy-lms",
    title: "STUDDY LMS – EdTech Platform for 5000+ Students",
    description:
      "Developed a comprehensive learning management system powering education for thousands of students with real-time features and scalable architecture.",
    href: "/case-study/studdy-lms",
    image:
      "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-332-1024x576.png",
  },
  {
    id: "sja-microfinance",
    title: "SJA Micro Finance – Secure FinTech Platform",
    description:
      "Engineered a secure microfinance platform with reliable infrastructure, enabling seamless financial operations for underserved communities.",
    href: "/case-study/sja-microfinance",
    image:
      "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-327-1024x576.png",
  },
  {
    id: "advance-fms",
    title: "Advance FMS – Enterprise Facility Management",
    description:
      "Digital transformation of facility management operations with a comprehensive enterprise platform streamlining workflows and reporting.",
    href: "/case-study/advance-fms",
    image:
      "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-326-1024x576.png",
  },
  {
    id: "quantom-clouds",
    title: "Quantom Clouds – Cloud, Data & AI Solutions",
    description:
      "Built a modern platform showcasing cloud engineering, data solutions, and AI capabilities for enterprise clients.",
    href: "/case-study/quantom-clouds",
    image: "/screenshots/quantomclouds.png",
  },
  {
    id: "limaye-eye-care",
    title: "Limaye Eye Care – Healthcare Digital Platform",
    description:
      "Patient-focused healthcare platform with appointment management and comprehensive medical information architecture.",
    href: "https://limayeeyehospital.com/",
    image:
      "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-338-1024x576.png",
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="case-studies"
      className="relative bg-background"
      ref={ref}
    >
      <div className="glow-orb w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary top-0 right-0 opacity-10" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <Gallery4
          title="Case Studies"
          description="Deep dives into select projects — exploring the technical challenges, architecture decisions, and real-world impact across industries."
          items={caseStudies}
        />
      </motion.div>
    </section>
  );
};

export default CaseStudies;
