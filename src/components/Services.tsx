import { motion } from "framer-motion";
import { HiMiniArrowRight, HiMiniSparkles } from "react-icons/hi2";
import { Marquee } from "@/components/ui/marquee";
import { Link } from "react-router-dom";
import { servicesData } from "@/lib/services-data";

const services = servicesData.map((s) => ({
  slug: s.slug,
  icon: s.icon,
  title: s.title,
  description: s.description.slice(0, 120) + "...",
  image: s.heroImage.replace("w=1200&h=600", "w=400&h=300"),
}));

const _unused = [
  {
    icon: HiMiniGlobeAlt,
    title: "Website Development",
    description:
      "High-performance, SEO-optimized websites built with modern frameworks. From corporate sites to complex platforms.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  {
    icon: HiMiniDevicePhoneMobile,
    title: "Web App Development",
    description:
      "Scalable web applications with real-time features, responsive design, and seamless user experiences.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
  },
  {
    icon: HiMiniCircleStack,
    title: "CRM & ERP Solutions",
    description:
      "Custom CRM and ERP systems that streamline operations, automate workflows, and boost productivity.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    icon: HiMiniDocumentText,
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages with stunning visuals, A/B testing ready, and blazing fast load times.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
  },
  {
    icon: HiMiniCpuChip,
    title: "AI Agents & Design",
    description:
      "Intelligent AI agents and chatbots that automate customer support, lead generation, and business processes.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
  },
  {
    icon: HiMiniBolt,
    title: "Automation Solutions",
    description:
      "End-to-end business automation using n8n, Zapier, and custom integrations to eliminate manual tasks.",
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop",
  },
  {
    icon: HiMiniUserGroup,
    title: "HRMS Systems",
    description:
      "Complete HR management systems with employee tracking, payroll, attendance, and performance modules.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
  },
  {
    icon: HiMiniLightBulb,
    title: "Project Prototyping",
    description:
      "Rapid MVP development and prototyping to validate ideas fast, iterate quickly, and launch confidently.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop",
  },
];

const smoothTransition = {
  type: "spring" as const,
  stiffness: 80,
  damping: 20,
  mass: 0.8,
};

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <div className="glass-card-hover group relative w-[280px] sm:w-[320px] flex-shrink-0 overflow-hidden cursor-pointer">
    <div className="relative h-44 overflow-hidden rounded-t-2xl">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      <div className="absolute bottom-3 left-3 p-2.5 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:bg-primary/30">
        <service.icon className="w-5 h-5 text-primary" />
      </div>
    </div>

    <div className="p-5">
      <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {service.description}
      </p>
      <div className="mt-4 flex items-center gap-1.5 text-primary text-sm font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
        Learn more <HiMiniArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-primary/20 -top-40 -right-40 absolute" />
      <div className="glow-orb w-[400px] h-[400px] bg-secondary/15 bottom-20 -left-32 absolute" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={smoothTransition}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
            <HiMiniSparkles className="w-4 h-4" />
            Our Services
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition, delay: 0.08 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Solutions That{" "}
            <span className="gradient-text">Drive Results</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ ...smoothTransition, delay: 0.15 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-base sm:text-lg"
        >
          From concept to deployment — full-stack development services
          engineered for performance, scalability, and business growth.
        </motion.p>

        {/* Single marquee row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Marquee
            pauseOnHover
            duration="50s"
            gap="1.5rem"
            className="py-4"
          >
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </Marquee>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
