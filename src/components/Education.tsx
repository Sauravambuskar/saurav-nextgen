import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, CheckCircle, BookOpen } from "lucide-react";

const certifications = [
  { name: "PMP (PMI Certified)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
  { name: "Six Sigma Certified", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "AWS DevOps Foundations", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "AWS EC2 Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative bg-background-secondary" ref={ref}>
      <div className="glow-orb w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-primary -top-10 left-1/4 animate-pulse-glow opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            Qualifications
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={18} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Education</h3>
            </div>
            <div className="glass-card-hover p-5 sm:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} className="text-primary sm:hidden" />
                  <BookOpen size={22} className="text-primary hidden sm:block" />
                </div>
                <div>
                  <h4 className="text-base sm:text-xl font-bold mb-1 sm:mb-2">Master of Computer Applications</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">MCA — Post Graduate Degree</p>
                  <div className="mt-3 sm:mt-4 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 leading-relaxed">
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
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-secondary/10 flex items-center justify-center">
                <Award className="text-secondary" size={18} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="glass-card-hover p-3.5 sm:p-5 flex items-center gap-3 sm:gap-4 group"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    {cert.icon ? (
                      <img src={cert.icon} alt={cert.name} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                    ) : (
                      <CheckCircle size={14} className="text-primary sm:hidden" />
                    )}
                    {!cert.icon && <CheckCircle size={16} className="text-primary hidden sm:block" />}
                  </div>
                  <span className="text-sm sm:text-base font-medium">{cert.name}</span>
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
