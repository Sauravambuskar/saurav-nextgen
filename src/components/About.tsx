import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Cloud, Box, BarChart3 } from "lucide-react";

const highlights = [
  { icon: Rocket, title: "CI/CD", desc: "Automated Pipelines" },
  { icon: Cloud, title: "Cloud", desc: "AWS & GCP" },
  { icon: Box, title: "Containers", desc: "Docker & K8s" },
  { icon: BarChart3, title: "Monitoring", desc: "Prometheus & Grafana" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="glow-orb w-[300px] h-[300px] bg-secondary top-20 -left-20 animate-pulse-glow opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
            Who am I
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            DevOps Engineer with 3+ years of experience designing scalable cloud
            infrastructure, automating CI/CD pipelines, and managing Kubernetes-based
            microservices. Strong in AWS, Terraform, Docker, and monitoring systems
            with a focus on reliability and performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass-card-hover p-6 text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
