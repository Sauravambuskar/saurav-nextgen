import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiMiniCpuChip } from "react-icons/hi2";
import serviceWebDesign from "@/assets/service-web-design.jpg";
import serviceMvp from "@/assets/service-mvp.jpg";
import serviceLanding from "@/assets/service-landing.jpg";
import serviceServer from "@/assets/service-server.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceAi from "@/assets/service-ai.jpg";

const services = [
  {
    id: 1,
    title: "Website Design & Development",
    imageUrl: serviceWebDesign,
  },
  {
    id: 2,
    title: "Software MVP & Prototyping",
    imageUrl: serviceMvp,
  },
  {
    id: 3,
    title: "Landing Page Design",
    imageUrl: serviceLanding,
  },
  {
    id: 4,
    title: "Server Deployment & Management",
    imageUrl: serviceServer,
  },
  {
    id: 5,
    title: "Cloud & DevOps Solutions",
    imageUrl: serviceCloud,
  },
  {
    id: 6,
    title: "AI & Automation Services",
    imageUrl: serviceAi,
  },
];

const ServiceAccordionItem = ({
  item,
  isActive,
  onMouseEnter,
}: {
  item: (typeof services)[0];
  isActive: boolean;
  onMouseEnter: () => void;
}) => (
  <div
    onMouseEnter={onMouseEnter}
    className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${
      isActive ? "flex-[4]" : "flex-[0.8]"
    }`}
    style={{ minHeight: "350px" }}
  >
    <img
      src={item.imageUrl}
      alt={item.title}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src =
          "https://placehold.co/400x450/2d3748/ffffff?text=Image+Error";
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    <div
      className={`absolute bottom-0 left-0 right-0 p-4 sm:p-5 transition-all duration-500 ${
        isActive ? "opacity-100 translate-y-0" : "opacity-70 translate-y-1"
      }`}
    >
      <span
        className={`text-white font-semibold transition-all duration-500 ${
          isActive ? "text-base sm:text-lg" : "text-xs sm:text-sm"
        }`}
        style={
          !isActive
            ? { writingMode: "vertical-rl", textOrientation: "mixed" }
            : undefined
        }
      >
        {item.title}
      </span>
    </div>
  </div>
);

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              <HiMiniCpuChip className="text-primary" size={14} /> What I Offer
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Premium <span className="gradient-text">Services</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2 sm:px-0">
              End-to-end digital solutions — from pixel-perfect landing pages to
              production-grade cloud infrastructure and AI-powered automation.
            </p>
          </div>

          {/* Desktop accordion */}
          <div className="hidden md:flex gap-2 h-[400px] lg:h-[450px]">
            {services.map((item, index) => (
              <ServiceAccordionItem
                key={item.id}
                item={item}
                isActive={activeIndex === index}
                onMouseEnter={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Mobile grid */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {services.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-xl h-44"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-white font-semibold text-xs">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
