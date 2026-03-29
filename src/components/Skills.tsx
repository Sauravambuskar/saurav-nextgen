import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, GitBranch, Activity, Code, Network } from "lucide-react";

const categories = [
  {
    title: "Cloud",
    icon: Cloud,
    items: ["AWS EC2", "S3", "IAM", "VPC", "Lambda", "EKS", "ECS", "GCP"],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    items: ["Terraform", "Docker", "Kubernetes", "Helm", "Jenkins", "GitHub Actions", "GitLab CI"],
  },
  {
    title: "Monitoring",
    icon: Activity,
    items: ["Prometheus", "Grafana", "ELK Stack", "Splunk"],
  },
  {
    title: "Scripting",
    icon: Code,
    items: ["Python (Boto3)", "Bash"],
  },
  {
    title: "Networking",
    icon: Network,
    items: ["NGINX", "Load Balancers", "DNS", "Security Groups"],
  },
];

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
              className={`glass-card-hover p-6 ${i >= 3 ? "lg:col-span-1" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold gradient-text">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {item}
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
