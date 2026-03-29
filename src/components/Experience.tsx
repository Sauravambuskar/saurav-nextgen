import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiMiniBriefcase } from "react-icons/hi2";

const getIconUrl = (slug: string) =>
  slug === "amazonwebservices"
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg`
    : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;

const experiences = [
  {
    company: "Quantum Clouds",
    role: "Associate DevOps Engineer",
    period: "2022 – Present",
    techIcons: ["amazonwebservices", "terraform", "kubernetes", "docker", "prometheus", "grafana"],
    points: [
      "Reduced deployment effort by 60%",
      "Automated infrastructure using Terraform",
      "Managed Kubernetes (EKS) clusters",
      "Implemented Prometheus & Grafana monitoring",
      "Improved cost efficiency and reliability",
    ],
  },
  {
    company: "WNS (Capgemini)",
    role: "Senior Operations Associate",
    period: "2021 – 2022",
    techIcons: ["python", "bash", "linux"],
    points: [
      "L1/L2 incident management",
      "VMware environment support",
      "Python & Bash automation",
    ],
  },
  {
    company: "Corelearn",
    role: "System Support Engineer",
    period: "2020 – 2021",
    techIcons: ["linux"],
    points: [
      "Linux & Windows server management",
      "Troubleshooting and documentation",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="glow-orb w-[300px] h-[300px] bg-secondary top-1/3 -right-20 animate-pulse-glow opacity-10" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
            <HiMiniBriefcase className="text-primary" size={14} /> Career Journey
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              } pl-12 md:pl-0`}
            >
              <div
                className="absolute left-2.5 md:left-auto top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(25_95%_53%/0.5)]"
                style={i % 2 === 0 ? { right: "-6.5px" } : { left: "-6.5px" }}
              />

              <div className="glass-card-hover p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2 glass-card px-2 py-1 rounded-md">{exp.period}</span>
                </div>
                <p className="text-primary text-sm font-medium mb-3">{exp.role}</p>

                {/* Tech icons row */}
                <div className="flex items-center gap-2 mb-4">
                  {exp.techIcons.map((slug) => (
                    <img
                      key={slug}
                      src={getIconUrl(slug)}
                      alt={slug}
                      className="w-5 h-5 object-contain opacity-60 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>

                <ul className="space-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">▸</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
