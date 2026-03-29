import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { emoji: "🚀", value: 200, suffix: "+", label: "Successful Deployments", description: "Zero-downtime releases across production environments" },
  { emoji: "⏱️", value: 99.9, suffix: "%", label: "Uptime Achieved", description: "SLA compliance across all managed infrastructure" },
  { emoji: "🖥️", value: 50, suffix: "+", label: "Servers Managed", description: "AWS EC2, EKS clusters, and Linux servers" },
  { emoji: "🔄", value: 30, suffix: "+", label: "CI/CD Pipelines", description: "Jenkins, GitHub Actions, GitLab CI automations" },
  { emoji: "💰", value: 60, suffix: "%", label: "Cost Reduction", description: "Infrastructure optimization & right-sizing" },
  { emoji: "🌐", value: 17, suffix: "+", label: "Live Projects", description: "Production websites across 5+ industries" },
  { emoji: "👥", value: 10, suffix: "K+", label: "Users Served", description: "End users across all deployed platforms" },
  { emoji: "⭐", value: 100, suffix: "%", label: "Client Satisfaction", description: "Repeat clients and positive referrals" },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Number.isInteger(target) ? Math.floor(current) : Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = Number.isInteger(target) ? Math.floor(count) : count.toFixed(1);
  return <span>{display}{suffix}</span>;
};

const TechStats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="glow-orb w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            📊 Real Results
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Impact & <span className="gradient-text">Results</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto px-2 sm:px-0">
            Measurable outcomes from 3+ years of building, deploying, and managing production infrastructure across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card-hover p-4 sm:p-6 text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-lg sm:text-2xl">{stat.emoji}</span>
                </div>
                <div className="text-xl sm:text-3xl md:text-4xl font-extrabold gradient-text mb-0.5 sm:mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <p className="text-[10px] sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">{stat.label}</p>
                <p className="text-[9px] sm:text-xs text-muted-foreground leading-relaxed hidden sm:block">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-12 glass-card p-4 sm:p-6 flex flex-col items-center gap-4 sm:gap-6 sm:flex-row sm:justify-between"
        >
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm font-semibold text-foreground">Powered by industry-leading tools</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground">The tech stack behind these results</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            {[
              { slug: "amazonwebservices", variant: "original-wordmark" },
              { slug: "docker", variant: "original" },
              { slug: "kubernetes", variant: "original" },
              { slug: "terraform", variant: "original" },
              { slug: "jenkins", variant: "original" },
              { slug: "prometheus", variant: "original" },
              { slug: "grafana", variant: "original" },
              { slug: "nginx", variant: "original" },
              { slug: "python", variant: "original" },
              { slug: "linux", variant: "original" },
            ].map(({ slug, variant }) => (
              <img
                key={slug}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`}
                alt={slug}
                className="w-5 h-5 sm:w-7 sm:h-7 object-contain opacity-50 hover:opacity-100 hover:scale-125 transition-all cursor-pointer"
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStats;
