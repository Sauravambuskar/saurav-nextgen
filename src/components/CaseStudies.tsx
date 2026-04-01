import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";

const caseStudies: Gallery4Item[] = [
  {
    id: "ostree",
    title: "OSTREE – Scalable E-commerce Fashion Platform",
    description: "Built a high-availability fashion e-commerce platform with performance optimization, handling thousands of daily transactions seamlessly.",
    href: "/case-study/ostree",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-324-1024x576.png",
  },
  {
    id: "studdy-lms",
    title: "STUDDY LMS – EdTech Platform for 5000+ Students",
    description: "Developed a comprehensive learning management system powering education for thousands of students with real-time features and scalable architecture.",
    href: "/case-study/studdy-lms",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-332-1024x576.png",
  },
  {
    id: "sja-microfinance",
    title: "SJA Micro Finance – Secure FinTech Platform",
    description: "Engineered a secure microfinance platform with reliable infrastructure, enabling seamless financial operations for underserved communities.",
    href: "/case-study/sja-microfinance",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-327-1024x576.png",
  },
  {
    id: "advance-fms",
    title: "Advance FMS – Enterprise Facility Management",
    description: "Digital transformation of facility management operations with a comprehensive enterprise platform streamlining workflows and reporting.",
    href: "/case-study/advance-fms",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-326-1024x576.png",
  },
  {
    id: "quantom-clouds",
    title: "Quantom Clouds – Cloud, Data & AI Solutions",
    description: "Built a modern platform showcasing cloud engineering, data solutions, and AI capabilities for enterprise clients.",
    href: "/case-study/quantom-clouds",
    image: "/screenshots/quantomclouds.png",
  },
  {
    id: "limaye-eye-care",
    title: "Limaye Eye Care – Healthcare Digital Platform",
    description: "Patient-focused healthcare platform with appointment management and comprehensive medical information architecture.",
    href: "/case-study/limaye-eye-care",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-338-1024x576.png",
  },
  {
    id: "truvara-exim",
    title: "Truvara Exim – Global Import/Export Platform",
    description: "Global trade platform improving visibility and international buyer connections for import/export operations.",
    href: "/case-study/truvara-exim",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-330-1024x576.png",
  },
  {
    id: "advanced-group",
    title: "Advanced Group – Corporate Digital Presence",
    description: "Unified corporate website representing multiple business verticals with premium design and brand consistency.",
    href: "/case-study/advanced-group",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-2026-01-06-135414-1024x576.png",
  },
  {
    id: "jyoti-cleaning",
    title: "Jyoti Cleaning – Professional Services Platform",
    description: "Professional cleaning services platform with online booking and local SEO optimization.",
    href: "/case-study/jyoti-cleaning",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-331-1024x576.png",
  },
  {
    id: "triveni-gaurakshan",
    title: "Triveni Gaurakshan – NGO Digital Platform",
    description: "Non-profit platform with online donations, volunteer management, and impact storytelling.",
    href: "/case-study/triveni-gaurakshan",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-333.png",
  },
  {
    id: "dr-bp-deshpande",
    title: "Dr B P Deshpande – Medical Practice Website",
    description: "Professional healthcare website with online appointments and patient education resources.",
    href: "/case-study/dr-bp-deshpande",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-334-1024x576.png",
  },
  {
    id: "royal-residency",
    title: "Royal Residency – Premium Hotel Booking Platform",
    description: "Direct hotel booking platform reducing OTA dependency with virtual tours and rate management.",
    href: "/case-study/royal-residency",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-335.png",
  },
  {
    id: "sp-residency",
    title: "SP Residency – Hostel Management Platform",
    description: "Budget accommodation platform with online inquiries and tenant management for students and professionals.",
    href: "/case-study/sp-residency",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-336-1024x576.png",
  },
  {
    id: "limson-engineering",
    title: "Limson Engineering – Industrial Solutions Website",
    description: "Professional engineering company website with project portfolio and B2B lead generation.",
    href: "/case-study/limson-engineering",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-337.png",
  },
  {
    id: "global-packaging",
    title: "Global Packaging – Manufacturing Catalog Platform",
    description: "Industrial packaging catalog with global reach, product specifications, and multi-market inquiries.",
    href: "/case-study/global-packaging",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-339.png",
  },
  {
    id: "sja-land-developers",
    title: "SJA Land Developers – Real Estate Platform",
    description: "Premium real estate website with interactive listings, virtual tours, and RERA compliance display.",
    href: "/case-study/sja-land-developers",
    image: "/screenshots/sjalanddevelopers.png",
  },
  {
    id: "sja-lands",
    title: "SJA Lands – Property Listing Platform",
    description: "Streamlined property listing platform with advanced search, comparison tools, and automated lead routing.",
    href: "/case-study/sja-lands",
    image: "/screenshots/sjalands.png",
  },
  {
    id: "akash-enterprises",
    title: "Akash Enterprises – Signage Manufacturing Showcase",
    description: "Signage company portfolio with product catalog, project galleries, and online quotation system.",
    href: "/case-study/akash-enterprises",
    image: "/screenshots/akashsignage.png",
  },
  {
    id: "dharma-voice",
    title: "Dharma Voice – AI Spiritual Guidance Platform",
    description: "AI-powered spiritual guidance from Bhagavad Gita with personalized insights and daily inspiration.",
    href: "/case-study/dharma-voice",
    image: "/screenshots/dharma-voice.png",
  },
  {
    id: "the-ocd-voice",
    title: "The OCD Voice – Mental Health & Recovery Platform",
    description: "OCD recovery coaching platform with resources, community support, and anxiety-sensitive design.",
    href: "/case-study/the-ocd-voice",
    image: "/screenshots/theocdvoice.png",
  },
  {
    id: "ignite-indians",
    title: "Ignite Indians – Digital Marketing Agency",
    description: "Digital agency website with service showcases, case studies, and lead generation funnel.",
    href: "/case-study/ignite-indians",
    image: "/screenshots/igniteindians.png",
  },
  {
    id: "dr-milind-bapat",
    title: "Dr Milind Bapat – Urology Specialist Website",
    description: "Specialist medical practice website with treatment info, online booking, and healthcare SEO.",
    href: "/case-study/dr-milind-bapat",
    image: "/screenshots/drmilindbapat.png",
  },
  {
    id: "mountain-breeze",
    title: "Mountain Breeze – Villa & Adventure Experience",
    description: "Immersive farmstay and adventure platform with direct bookings and virtual property tours.",
    href: "/case-study/mountain-breeze",
    image: "/screenshots/mountainbreeze.png",
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
