import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const getIconUrl = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;

const devopsProjects = [
  {
    title: "Ecommerce CI/CD System",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    tech: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "AWS EC2", icon: "amazonwebservices" },
      { name: "S3", icon: "amazonwebservices" },
      { name: "VPC", icon: "amazonwebservices" },
      { name: "Jenkins", icon: "jenkins" },
    ],
    desc: "End-to-end CI/CD pipeline for e-commerce platform with containerized microservices, auto-scaling, and zero-downtime deployments.",
  },
  {
    title: "Banking Application Deployment",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    tech: [
      { name: "AWS EC2", icon: "amazonwebservices" },
      { name: "NGINX", icon: "nginx" },
      { name: "Grafana", icon: "grafana" },
      { name: "Terraform", icon: "terraform" },
      { name: "Python", icon: "python" },
    ],
    desc: "Secure banking application deployment with automated pipelines, SSL termination, database management, and comprehensive monitoring.",
  },
];

const DevOpsProjects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="glow-orb w-[350px] h-[350px] bg-primary -bottom-20 left-1/3 animate-pulse-glow opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
            Infrastructure
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            DevOps <span className="gradient-text">Architecture</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {devopsProjects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="glass-card-hover p-8 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center p-2.5 group-hover:bg-primary/20 transition-colors">
                  <img src={proj.iconUrl} alt={proj.title} className="w-9 h-9 object-contain" />
                </div>
                <h3 className="text-xl font-bold">{proj.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-xl bg-secondary/10 text-foreground border border-secondary/15 hover:bg-secondary/20 transition-colors"
                  >
                    <img src={getIconUrl(t.icon)} alt={t.name} className="w-3.5 h-3.5 object-contain" />
                    {t.name}
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
