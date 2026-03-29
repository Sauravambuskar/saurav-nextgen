import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, CheckCircle } from "lucide-react";

const certifications = [
  "PMP (PMI Certified)",
  "Six Sigma Certified",
  "AWS DevOps Foundations",
  "AWS EC2 Cloud",
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
          {/* Education */}
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
              <h4 className="text-xl font-bold mb-2">Master of Computer Applications</h4>
              <p className="text-muted-foreground text-sm">MCA — Post Graduate Degree</p>
              <div className="mt-4 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Comprehensive study of computer science, software engineering, and system design with focus on practical application.
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
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
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="glass-card-hover p-5 flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle size={16} className="text-primary" />
                  </div>
                  <span className="font-medium">{cert}</span>
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
