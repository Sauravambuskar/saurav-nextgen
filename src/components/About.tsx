import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiMiniCloudArrowUp, HiMiniCodeBracket, HiMiniCpuChip, HiMiniPaintBrush, HiMiniGlobeAlt, HiMiniCog8Tooth, HiMiniCommandLine, HiMiniShieldCheck } from "react-icons/hi2";
import type { IconType } from "react-icons";

const highlights: { icon: IconType; title: string; desc: string }[] = [
  { icon: HiMiniCloudArrowUp, title: "Cloud & DevOps", desc: "AWS, Docker, K8s, Terraform" },
  { icon: HiMiniCodeBracket, title: "Development", desc: "Python, React, Node.js" },
  { icon: HiMiniCpuChip, title: "AI & Automation", desc: "Gen AI, n8n, Bots" },
  { icon: HiMiniPaintBrush, title: "Creative", desc: "Branding, Graphics, UI/UX" },
];

const currentWork: { icon: IconType; text: string }[] = [
  { icon: HiMiniGlobeAlt, text: "Cloud + DevOps Projects" },
  { icon: HiMiniCog8Tooth, text: "Kubernetes + Microservice Deployment" },
  { icon: HiMiniCpuChip, text: "AI automation using Python & n8n" },
  { icon: HiMiniShieldCheck, text: "Linux Servers: Ubuntu, Debian, SUSE" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="glow-orb w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-secondary top-20 -left-20 animate-pulse-glow opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            <HiMiniCpuChip className="text-primary" size={14} /> Who am I
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 px-2 sm:px-0">
            Multi-skilled tech builder who loves developing, deploying & automating solutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            {[
              { icon: HiMiniCog8Tooth, label: "Linux Specialist" },
              { icon: HiMiniCommandLine, label: "DevOps Engineer" },
              { icon: HiMiniCloudArrowUp, label: "Cloud Explorer" },
              { icon: HiMiniCpuChip, label: "AI Innovator" },
            ].map((tag) => (
              <span key={tag.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                <tag.icon size={14} />
                {tag.label}
              </span>
            ))}
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2 sm:px-0">
            DevOps Engineer with 3+ years of experience designing scalable cloud
            infrastructure, automating CI/CD pipelines, and managing Kubernetes-based
            microservices. Strong in AWS, Terraform, Docker, and monitoring systems.
            Always leveling up through learning & real-world practice.
          </p>
        </motion.div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-10 sm:mb-16"
        >
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card-hover p-4 sm:p-6 text-center group"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={22} />
                </div>
                <h3 className="text-xs sm:text-base font-semibold mb-0.5 sm:mb-1">{item.title}</h3>
                <p className="text-[10px] sm:text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Currently Working On */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="glass-card p-5 sm:p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 text-center">
            <HiMiniCommandLine className="inline-block text-primary mr-2 -mt-0.5" size={20} />
            Currently <span className="gradient-text">Working On</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {currentWork.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <Icon className="text-primary flex-shrink-0" size={18} />
                  <span className="text-xs sm:text-sm font-medium text-foreground">{item.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
