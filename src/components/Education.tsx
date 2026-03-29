import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, CheckCircle, BookOpen } from "lucide-react";

const certifications = [
  { name: "PMP (PMI Certified)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
  { name: "Six Sigma Certified", icon: "" },
  { name: "AWS DevOps Foundations", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "AWS EC2 Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative bg-background-secondary" ref={ref}>
      <div className="glow-orb w-[300px] h-[300px] bg-primary -top-10 left-1/4 animate-pulse-glow opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
            Qualifications
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="glass-card-hover p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Master of Computer Applications</h4>
                  <p className="text-muted-foreground text-sm">MCA — Post Graduate Degree</p>
                  <div className="mt-4 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    Comprehensive study of computer science, software engineering, and system design with focus on practical application.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Award className="text-secondary" size={22} />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="glass-card-hover p-5 flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {cert.icon ? (
                      <img src={cert.icon} alt={cert.name} className="w-5 h-5 object-contain" />
                    ) : (
                      <CheckCircle size={16} className="text-primary" />
                    )}
                  </div>
                  <span className="font-medium">{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
