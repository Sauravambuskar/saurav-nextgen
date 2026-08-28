import { motion } from "framer-motion";
import { HiMiniArrowRight, HiMiniSparkles } from "react-icons/hi2";
import { Marquee } from "@/components/ui/marquee";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";

const services = servicesData.map((s) => ({
  slug: s.slug,
  icon: s.icon,
  title: s.title,
  description: s.description.slice(0, 120) + "...",
  image: s.heroImage.replace("w=1200&h=600", "w=400&h=300"),
}));

const smoothTransition = {
  type: "spring" as const,
  stiffness: 80,
  damping: 20,
  mass: 0.8,
};

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <Link href={`/service/${service.slug}`} className="glass-card-hover group relative w-[280px] sm:w-[320px] flex-shrink-0 overflow-hidden cursor-pointer block">
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
        Explore details <HiMiniArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
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
