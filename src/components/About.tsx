import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Cloud, Box, BarChart3, Code, Cpu, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, Docker, K8s, Terraform" },
  { icon: Code, title: "Development", desc: "Python, React, Node.js" },
  { icon: Cpu, title: "AI & Automation", desc: "Gen AI, n8n, Bots" },
  { icon: Palette, title: "Creative", desc: "Branding, Graphics, UI/UX" },
];

const currentWork = [
  { emoji: "🌐", text: "Cloud + DevOps Projects" },
  { emoji: "🐳", text: "Kubernetes + Microservice Deployment" },
  { emoji: "🤖", text: "AI automation using Python & n8n" },
  { emoji: "🛡️", text: "Linux Servers: Ubuntu, Debian, SUSE" },
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
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
            🎯 Who am I
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl font-semibold text-foreground mb-4">
            🚀 Multi-skilled tech builder who loves developing, deploying & automating solutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {["⚙️ Linux Specialist", "🛠️ DevOps Engineer", "☁️ Cloud Explorer", "🤖 AI Innovator"].map((tag) => (
              <span key={tag} className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            DevOps Engineer with 3+ years of experience designing scalable cloud
            infrastructure, automating CI/CD pipelines, and managing Kubernetes-based
            microservices. Strong in AWS, Terraform, Docker, and monitoring systems.
            Always leveling up through learning & real-world practice. 🔥
          </p>
        </motion.div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16"
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

        {/* Currently Working On */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="glass-card p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-5 text-center">
            🛠️ Currently <span className="gradient-text">Working On</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {currentWork.map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                <span className="text-lg">{item.emoji}</span>
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
