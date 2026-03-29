import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Education</span>
              </h2>
            </div>
            <div className="glass-card-hover p-6">
              <h3 className="text-xl font-bold">Master of Computer Applications</h3>
              <p className="text-muted-foreground text-sm mt-1">MCA</p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-secondary" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Certifications</span>
              </h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card-hover p-4 flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
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
