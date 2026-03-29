import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-primary -top-40 -left-40 animate-pulse-glow" />
      <div className="glow-orb w-[400px] h-[400px] bg-secondary -bottom-20 -right-20 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="glow-orb w-[300px] h-[300px] bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Building{" "}
              <span className="gradient-text">Scalable Cloud</span>
              <br />& DevOps Systems
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              DevOps Engineer with 3+ years of experience in AWS, Kubernetes, CI/CD,
              and Infrastructure Automation. Delivered 17+ production projects across industries.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
                Contact Me
              </a>
              <a
                href="https://github.com/Sauravambuskar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card flex items-center justify-center hover:border-primary/30 transition-all"
                style={{ borderRadius: "50%" }}
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sauravambuskar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card flex items-center justify-center hover:border-primary/30 transition-all"
                style={{ borderRadius: "50%" }}
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { value: "3+", label: "Years Exp" },
                { value: "17+", label: "Projects" },
                { value: "5+", label: "Industries" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className="text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/20 relative z-10">
                <img
                  src={profileImg}
                  alt="Saurav Ambuskar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl animate-pulse-glow" />
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card px-4 py-2 text-sm font-semibold"
              >
                ☁️ AWS
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2 text-sm font-semibold"
              >
                🐳 Docker
              </motion.div>
              <motion.div
                animate={{ y: [-8, 12, -8] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute top-1/2 -right-12 glass-card px-4 py-2 text-sm font-semibold"
              >
                ⎈ K8s
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
