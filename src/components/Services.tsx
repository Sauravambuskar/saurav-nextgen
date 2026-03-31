import { AnimatedTabs, type Tab } from "@/components/ui/animated-tabs";
import {
  Server,
  Lightbulb,
  Globe,
  Smartphone,
  Cloud,
  Bot,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  image,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  image: string;
}) => (
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div className="space-y-6">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span className="text-muted-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors group"
      >
        Get Started
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
    <div className="relative rounded-2xl overflow-hidden border border-border aspect-[4/3]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
    </div>
  </div>
);

const serviceTabs: Tab[] = [
  {
    id: "managed",
    label: "Managed Services",
    content: (
      <ServiceCard
        icon={Server}
        title="Managed Services"
        description="End-to-end infrastructure management with 24/7 monitoring, automated scaling, and proactive incident response to keep your systems running flawlessly."
        features={[
          "24/7 infrastructure monitoring & alerting",
          "Automated scaling and load balancing",
          "Disaster recovery & backup management",
          "Performance optimization & cost reduction",
        ]}
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
      />
    ),
  },
  {
    id: "consulting",
    label: "IT Consulting",
    content: (
      <ServiceCard
        icon={Lightbulb}
        title="IT Consulting & Advisory"
        description="Strategic technology consulting to align your IT infrastructure with business goals. From architecture reviews to digital transformation roadmaps."
        features={[
          "Technology stack assessment & recommendations",
          "Cloud migration strategy & planning",
          "Security audits & compliance advisory",
          "Digital transformation roadmaps",
        ]}
        image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
      />
    ),
  },
  {
    id: "web",
    label: "Web Development",
    content: (
      <ServiceCard
        icon={Globe}
        title="Web Development"
        description="High-performance web applications built with modern frameworks. From responsive landing pages to complex enterprise platforms with seamless user experiences."
        features={[
          "React, Next.js & modern frontend frameworks",
          "Responsive design & cross-browser compatibility",
          "API development & third-party integrations",
          "Performance optimization & SEO best practices",
        ]}
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      />
    ),
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    content: (
      <ServiceCard
        icon={Smartphone}
        title="Mobile APP Development"
        description="Native and cross-platform mobile applications that deliver exceptional user experiences. From concept to deployment on App Store and Google Play."
        features={[
          "React Native & Flutter cross-platform apps",
          "Native iOS & Android development",
          "Push notifications & real-time features",
          "App Store optimization & deployment",
        ]}
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
      />
    ),
  },
  {
    id: "cloud",
    label: "Cloud Services",
    content: (
      <ServiceCard
        icon={Cloud}
        title="Cloud Services"
        description="Comprehensive cloud solutions spanning AWS, Azure, and GCP. Infrastructure as Code, containerization, and CI/CD pipelines for modern cloud-native architectures."
        features={[
          "Multi-cloud architecture (AWS, Azure, GCP)",
          "Kubernetes & Docker containerization",
          "CI/CD pipeline setup & automation",
          "Infrastructure as Code (Terraform, Pulumi)",
        ]}
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
      />
    ),
  },
  {
    id: "ai",
    label: "AI Prototyping",
    content: (
      <ServiceCard
        icon={Bot}
        title="AI Application Prototyping & MVP"
        description="Rapid prototyping of AI-powered applications. From chatbots and recommendation engines to computer vision solutions — validated MVPs built to test and iterate fast."
        features={[
          "LLM integration & custom AI chatbots",
          "Computer vision & image processing MVPs",
          "Recommendation engines & predictive models",
          "Rapid MVP development with 2-4 week sprints",
        ]}
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
      />
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to accelerate your
            business growth — from infrastructure to intelligent applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedTabs tabs={serviceTabs} defaultTab="managed" />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
