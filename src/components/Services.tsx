import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cloud,
  Globe,
  Lightbulb,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { AnimatedTabs, type Tab } from "@/components/ui/animated-tabs";
import managedImage from "@/assets/service-managed.jpg";
import consultingImage from "@/assets/service-consulting.jpg";
import webImage from "@/assets/service-web.jpg";
import mobileImage from "@/assets/service-mobile.jpg";
import cloudImage from "@/assets/service-cloud.jpg";
import aiImage from "@/assets/service-ai.jpg";

type Service = {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    id: "managed-services",
    label: "Managed Services",
    title: "Managed Services",
    description:
      "Reliable end-to-end infrastructure management with proactive monitoring, automation, and ongoing optimization to keep your systems stable and fast.",
    features: [
      "24/7 monitoring, alerting, and incident response",
      "Automated scaling and uptime optimization",
      "Backup, disaster recovery, and maintenance planning",
      "Cost control and performance tuning for production workloads",
    ],
    image: managedImage,
    icon: Server,
  },
  {
    id: "it-consulting",
    label: "IT Consulting",
    title: "IT Consulting & Advisory",
    description:
      "Strategic guidance to align technology decisions with business goals, from architecture reviews and migration planning to long-term digital transformation.",
    features: [
      "Architecture review and roadmap planning",
      "Cloud adoption and modernization consulting",
      "Security, risk, and process improvement guidance",
      "Scalable technical decisions for growing teams",
    ],
    image: consultingImage,
    icon: Lightbulb,
  },
  {
    id: "web-development",
    label: "Web Development",
    title: "Web Development",
    description:
      "Modern, high-performance web experiences built for speed, usability, and growth—from polished landing pages to full business platforms.",
    features: [
      "Responsive websites and custom web apps",
      "Clean frontend architecture with modern frameworks",
      "API integrations and business workflow automation",
      "SEO-aware, fast-loading user experiences",
    ],
    image: webImage,
    icon: Globe,
  },
  {
    id: "mobile-development",
    label: "Mobile Apps",
    title: "Mobile APP Development",
    description:
      "Mobile products designed for real users with smooth performance, thoughtful UX, and practical integrations for startups and established businesses.",
    features: [
      "Cross-platform app development for faster delivery",
      "Modern UI systems and intuitive user journeys",
      "Real-time features, notifications, and API connectivity",
      "Launch-ready builds for testing and growth",
    ],
    image: mobileImage,
    icon: Smartphone,
  },
  {
    id: "cloud-services",
    label: "Cloud Services",
    title: "Cloud Services",
    description:
      "Cloud-native systems designed for scale, resilience, and maintainability using automation, containerization, and deployment best practices.",
    features: [
      "Cloud architecture across AWS, Azure, or GCP",
      "Containers, orchestration, and deployment pipelines",
      "Infrastructure as Code for repeatable environments",
      "Security-first setup for production-grade systems",
    ],
    image: cloudImage,
    icon: Cloud,
  },
  {
    id: "ai-prototyping",
    label: "AI Prototyping",
    title: "AI Application Prototyping & MVP",
    description:
      "Fast AI product prototyping to validate ideas quickly, whether you need copilots, chat interfaces, internal tools, or intelligent MVP experiences.",
    features: [
      "Rapid MVPs for AI-enabled workflows",
      "LLM chat, summarization, and assistant experiences",
      "Prototype validation before major investment",
      "Tight iteration cycles focused on business outcomes",
    ],
    image: aiImage,
    icon: Bot,
  },
];

const ServiceCard = React.forwardRef<HTMLDivElement, { service: Service }>(
  ({ service }, ref) => {
    const Icon = service.icon;

    return (
      <div ref={ref} className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center xl:gap-12">
        <div className="order-2 space-y-6 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Icon className="h-4 w-4" />
            <span>{service.label}</span>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {service.title}
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              {service.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background/70 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            Let’s Build It
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-muted/30">
            <img
              src={service.image}
              alt={service.title}
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/85 px-3 py-2 text-xs font-medium text-foreground backdrop-blur-sm">
                <Icon className="h-4 w-4 text-primary" />
                <span>{service.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

const serviceTabs: Tab[] = services.map((service) => ({
  id: service.id,
  label: service.label,
  icon: service.icon,
  content: <ServiceCard service={service} />,
}));

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Services
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Solutions Built for Growth
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            From infrastructure and consulting to cloud delivery and AI MVPs,
            this section now uses a fully responsive animated tab experience that
            feels smooth across desktop, tablet, and mobile.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <AnimatedTabs tabs={serviceTabs} defaultTab="managed-services" />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
