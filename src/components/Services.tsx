import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Database,
  FileText,
  Bot,
  Zap,
  Users,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Quote,
} from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-performance, SEO-optimized websites built with modern frameworks. From corporate sites to complex platforms.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Web App Development",
    description:
      "Scalable web applications with real-time features, responsive design, and seamless user experiences.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
  },
  {
    icon: Database,
    title: "CRM & ERP Solutions",
    description:
      "Custom CRM and ERP systems that streamline operations, automate workflows, and boost productivity.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages with stunning visuals, A/B testing ready, and blazing fast load times.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
  },
  {
    icon: Bot,
    title: "AI Agents & Design",
    description:
      "Intelligent AI agents and chatbots that automate customer support, lead generation, and business processes.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
  },
  {
    icon: Zap,
    title: "Automation Solutions",
    description:
      "End-to-end business automation using n8n, Zapier, and custom integrations to eliminate manual tasks.",
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop",
  },
  {
    icon: Users,
    title: "HRMS Systems",
    description:
      "Complete HR management systems with employee tracking, payroll, attendance, and performance modules.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
  },
  {
    icon: Lightbulb,
    title: "Project Prototyping",
    description:
      "Rapid MVP development and prototyping to validate ideas fast, iterate quickly, and launch confidently.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-orb w-[500px] h-[500px] bg-primary/20 -top-40 -right-40 absolute" />
      <div className="glow-orb w-[400px] h-[400px] bg-secondary/15 bottom-20 -left-32 absolute" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Our Services
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Solutions That{" "}
            <span className="gradient-text">Drive Results</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-base sm:text-lg"
        >
          From concept to deployment — full-stack development services
          engineered for performance, scalability, and business growth.
        </motion.p>

        {/* Marquee of service cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <Marquee
            pauseOnHover
            duration="60s"
            gap="1.5rem"
            className="py-4"
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card-hover group relative w-[280px] sm:w-[320px] flex-shrink-0 overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 p-2 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </Marquee>

          {/* Reverse marquee */}
          <Marquee
            pauseOnHover
            reverse
            duration="65s"
            gap="1.5rem"
            className="py-4 mt-2"
          >
            {[...services].reverse().map((service) => (
              <div
                key={service.title}
                className="glass-card-hover group relative w-[280px] sm:w-[320px] flex-shrink-0 overflow-hidden cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 p-2 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* Testimonial quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8 sm:p-10 max-w-3xl mx-auto text-center"
        >
          <Quote className="w-8 h-8 text-primary/40 mx-auto mb-4" />
          <p className="text-foreground/90 text-base sm:text-lg italic leading-relaxed mb-6">
            "The exceptional quality and speed of delivery truly impressed us.
            From prototyping to production, every solution was engineered with
            precision and scalability in mind."
          </p>
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
              alt="Client"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary/30"
              loading="lazy"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">
                Satisfied Client
              </p>
              <p className="text-xs text-muted-foreground">
                CTO · Enterprise Solutions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
