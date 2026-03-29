import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Server, GitBranch, Clock, Shield, Rocket, Activity, Database, Zap } from "lucide-react";

const stats = [
  { icon: Rocket, value: 200, suffix: "+", label: "Deployments Delivered", color: "text-primary" },
  { icon: Clock, value: 99.9, suffix: "%", label: "Uptime Achieved", color: "text-green-400" },
  { icon: Server, value: 50, suffix: "+", label: "Servers Managed", color: "text-primary" },
  { icon: GitBranch, value: 30, suffix: "+", label: "CI/CD Pipelines Built", color: "text-secondary" },
  { icon: Shield, value: 0, suffix: "Zero", label: "Security Breaches", color: "text-green-400", isZero: true },
  { icon: Database, value: 60, suffix: "%", label: "Cost Reduction", color: "text-primary" },
  { icon: Activity, value: 24, suffix: "/7", label: "Monitoring Coverage", color: "text-secondary" },
  { icon: Zap, value: 5, suffix: "min", label: "Avg Deploy Time", color: "text-primary" },
];

const AnimatedCounter = ({ target, suffix, isZero, inView }: { target: number; suffix: string; isZero?: boolean; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (isZero) { setCount(0); return; }

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target, isZero]);

  if (isZero) {
    return <span>{inView ? "Zero" : "0"}</span>;
  }

  const display = Number.isInteger(target) ? Math.floor(count) : count.toFixed(1);
  return <span>{display}{suffix}</span>;
};

const TechStats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="glow-orb w-[500px] h-[500px] bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
            Impact & Results
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            DevOps <span className="gradient-text">By The Numbers</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real metrics from 3+ years of building and managing production infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card-hover p-6 text-center group relative overflow-hidden"
            >
              {/* Subtle gradient bg on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon size={22} className={stat.color} />
                </div>
                <div className={`text-3xl md:text-4xl font-extrabold mb-2 ${stat.color}`}>
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    isZero={stat.isZero}
                    inView={inView}
                  />
                </div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech logos banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm text-muted-foreground">
            Tools powering these results:
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {["amazonwebservices", "docker", "kubernetes", "terraform", "jenkins", "prometheus", "grafana", "nginx"].map((slug) => (
              <img
                key={slug}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`}
                alt={slug}
                className="w-7 h-7 object-contain opacity-50 hover:opacity-100 hover:scale-125 transition-all cursor-pointer"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStats;
