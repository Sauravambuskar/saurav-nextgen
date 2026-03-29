import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Quantum Clouds",
    role: "Associate DevOps Engineer",
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
    points: [
      "L1/L2 incident management",
      "VMware environment support",
      "Python & Bash automation",
    ],
  },
  {
    company: "Corelearn",
    role: "System Support Engineer",
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
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
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
              {/* Dot */}
              <div className="absolute left-2.5 md:left-auto top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(217_91%_60%/0.5)]"
                style={i % 2 === 0 ? { right: "-6.5px" } : { left: "-6.5px" }}
              />

              <div className="glass-card-hover p-6">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p className="text-primary text-sm font-medium mb-3">{exp.role}</p>
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
