import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const devopsProjects = [
  {
    title: "Ecommerce CI/CD System",
    tech: ["Docker", "Kubernetes", "AWS EC2", "S3", "VPC", "Load Balancing", "CI/CD"],
    desc: "End-to-end CI/CD pipeline for e-commerce platform with containerized microservices, auto-scaling, and zero-downtime deployments.",
  },
  {
    title: "Banking Application Deployment",
    tech: ["AWS EC2", "RDS", "S3", "NGINX", "SSL", "CI/CD", "Monitoring"],
    desc: "Secure banking application deployment with automated pipelines, SSL termination, database management, and comprehensive monitoring.",
  },
];

const DevOpsProjects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          DevOps <span className="gradient-text">Architecture</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {devopsProjects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="glass-card-hover p-8"
            >
              <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsProjects;
