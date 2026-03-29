import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getDevIconUrl } from "@/lib/tech-icons";

const categories = [
  {
    title: "Cloud",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    items: [
      { name: "AWS EC2", icon: "amazonwebservices" },
      { name: "S3", icon: "amazonwebservices" },
      { name: "IAM", icon: "amazonwebservices" },
      { name: "VPC", icon: "amazonwebservices" },
      { name: "Lambda", icon: "amazonwebservices" },
      { name: "EKS", icon: "amazonwebservices" },
      { name: "ECS", icon: "amazonwebservices" },
      { name: "GCP", icon: "googlecloud" },
    ],
  },
  {
    title: "DevOps",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    items: [
      { name: "Terraform", icon: "terraform" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Helm", icon: "helm" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "GitHub Actions", icon: "github" },
      { name: "GitLab CI", icon: "gitlab" },
    ],
  },
  {
    title: "Monitoring",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
    items: [
      { name: "Prometheus", icon: "prometheus" },
      { name: "Grafana", icon: "grafana" },
      { name: "ELK Stack", icon: "elasticsearch" },
      { name: "Splunk", icon: "splunk" },
    ],
  },
  {
    title: "Scripting",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    items: [
      { name: "Python (Boto3)", icon: "python" },
      { name: "Bash", icon: "bash" },
    ],
  },
  {
    title: "Networking",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
    items: [
      { name: "NGINX", icon: "nginx" },
      { name: "Load Balancers", icon: "amazonwebservices" },
      { name: "DNS", icon: "amazonwebservices" },
      { name: "Security Groups", icon: "amazonwebservices" },
    ],
  },
];

const getIconUrl = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative bg-background-secondary" ref={ref}>
      <div className="glow-orb w-[400px] h-[400px] bg-primary top-0 right-0 opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
            Technologies
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center p-2">
                  <img src={cat.iconUrl} alt={cat.title} className="w-7 h-7 object-contain" />
                </div>
                <h3 className="text-lg font-bold gradient-text">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-xl bg-primary/5 text-foreground border border-primary/10 hover:bg-primary/15 hover:border-primary/25 transition-all cursor-default group"
                  >
                    <img
                      src={getIconUrl(item.icon)}
                      alt={item.name}
                      className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    {item.name}
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

export default Skills;
