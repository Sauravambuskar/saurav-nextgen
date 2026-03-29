import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const getIconUrl = (slug: string) =>
  slug === "amazonwebservices"
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg`
    : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;

const categories = [
  {
    title: "☁️ DevOps + Cloud + Automation",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    items: [
      { name: "AWS", icon: "amazonwebservices" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Terraform", icon: "terraform" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "GitHub Actions", icon: "github" },
      { name: "GitLab CI", icon: "gitlab" },
      { name: "Helm", icon: "helm" },
      { name: "Prometheus", icon: "prometheus" },
      { name: "Grafana", icon: "grafana" },
      { name: "NGINX", icon: "nginx" },
      { name: "Linux", icon: "linux" },
      { name: "Bash", icon: "bash" },
    ],
  },
  {
    title: "👨‍💻 Development + Web Tech",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    items: [
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Next.js", icon: "nextjs" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    title: "🎨 Platforms + Creativity",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    items: [
      { name: "Figma", icon: "figma" },
      { name: "WordPress", icon: "wordpress" },
      { name: "Canva", icon: "canva" },
      { name: "Git", icon: "git" },
      { name: "VS Code", icon: "vscode" },
      { name: "Jira", icon: "jira" },
    ],
  },
];

const extraSkills = [
  "Automation with n8n",
  "CI/CD Pipelines",
  "Generative AI",
  "Device Debugging",
  "Graphics & Branding",
  "ELK Stack",
  "Splunk",
  "GCP",
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative bg-background-secondary" ref={ref}>
      <div className="glow-orb w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-primary top-0 right-0 opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            🧩 Tech Playground 🎮
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card-hover p-4 sm:p-6"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center p-1.5 sm:p-2">
                  <img src={cat.iconUrl} alt={cat.title} className="w-5 h-5 sm:w-7 sm:h-7 object-contain" loading="lazy" />
                </div>
                <h3 className="text-sm sm:text-base font-bold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-lg sm:rounded-xl bg-primary/5 text-foreground border border-primary/10 hover:bg-primary/15 hover:border-primary/25 transition-all cursor-default group"
                  >
                    <img
                      src={getIconUrl(item.icon)}
                      alt={item.name}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="glass-card p-4 sm:p-6 text-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 font-medium">💡 Also experienced with:</p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {extraSkills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm rounded-full bg-secondary/10 text-secondary border border-secondary/15 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
