import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa6";
import { HiMiniChevronDown } from "react-icons/hi2";
import { PulseBeams } from "@/components/ui/pulse-beams";

const profileImg = "/profile.jpg";

const beams = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["0%", "0%", "200%"], x2: ["0%", "0%", "180%"], y1: ["80%", "0%", "0%"], y2: ["100%", "20%", "20%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0.3 },
    },
    connectionPoints: [{ cx: 6.5, cy: 398.5, r: 6 }, { cx: 269, cy: 220.5, r: 6 }],
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["20%", "100%", "100%"], x2: ["0%", "90%", "90%"], y1: ["80%", "80%", "-20%"], y2: ["100%", "100%", "0%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0.8 },
    },
    connectionPoints: [{ cx: 851, cy: 34, r: 6.5 }, { cx: 568, cy: 200, r: 6 }],
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["20%", "100%", "100%"], x2: ["0%", "90%", "90%"], y1: ["80%", "80%", "-20%"], y2: ["100%", "100%", "0%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 1.2 },
    },
    connectionPoints: [{ cx: 142, cy: 427, r: 6.5 }, { cx: 425.5, cy: 274, r: 6 }],
  },
  {
    path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
    gradientConfig: {
      initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" },
      animate: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0.5 },
    },
    connectionPoints: [{ cx: 770, cy: 427, r: 6.5 }, { cx: 493, cy: 274, r: 6 }],
  },
  {
    path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
    gradientConfig: {
      initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" },
      animate: { x1: ["40%", "0%", "0%"], x2: ["10%", "0%", "0%"], y1: ["0%", "0%", "180%"], y2: ["20%", "20%", "200%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 1.6 },
    },
    connectionPoints: [{ cx: 420.5, cy: 6.5, r: 6 }, { cx: 380, cy: 168, r: 6 }],
  },
];

const orangeGradientColors = { start: "#F97316", middle: "#EA580C", end: "#FDBA74" };

const floatingBadges = [
  {
    label: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    className: "absolute -top-2 -right-2 z-20",
    animate: { y: [-10, 10, -10] },
    duration: 4,
  },
  {
    label: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    className: "absolute -bottom-2 -left-2 z-20",
    animate: { y: [10, -10, 10] },
    duration: 5,
  },
  {
    label: "K8s",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    className: "absolute top-1/2 -right-8 z-20",
    animate: { y: [-8, 12, -8] },
    duration: 4.5,
  },
  {
    label: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    className: "absolute top-1/4 -left-6 z-20",
    animate: { y: [8, -12, 8] },
    duration: 5.5,
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50 hidden md:block">
        <PulseBeams
          beams={beams}
          width={858}
          height={434}
          className="w-full h-full"
          baseColor="hsl(25 95% 53% / 0.12)"
          accentColor="hsl(25 95% 53% / 0.25)"
          gradientColors={orangeGradientColors}
        />
      </div>

      <div className="glow-orb w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary -top-40 -left-20 md:-top-60 md:-left-40 animate-pulse-glow opacity-20" />
      <div className="glow-orb w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-secondary -bottom-10 -right-10 md:-bottom-20 md:-right-20 animate-pulse-glow opacity-15" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Profile Photo - shows FIRST on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center order-first lg:order-last"
          >
            <div className="relative">
              <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/10 blur-2xl animate-pulse-glow" />
              <div className="w-44 h-44 sm:w-64 sm:h-64 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-2 border-primary/30 relative z-10 shadow-2xl shadow-primary/10">
                <img src={profileImg} alt="Saurav Ambuskar" className="w-full h-full object-cover object-top" />
              </div>

              {/* Floating badges - hidden on mobile, visible from md up */}
              {floatingBadges.map((badge) => (
                <motion.div
                  key={badge.label}
                  animate={badge.animate}
                  transition={{ duration: badge.duration, repeat: Infinity }}
                  className={`${badge.className} glass-card px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm font-semibold hidden md:flex items-center gap-2`}
                >
                  <img src={badge.icon} alt={badge.label} className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content - shows SECOND on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-last lg:order-first text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 lg:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-3 sm:mb-4 lg:mb-6 tracking-tight">
              Building{" "}
              <span className="gradient-text">Scalable Cloud</span>
              <br />
              <span className="text-foreground/90">&amp; DevOps Systems</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-2 sm:px-0">
              DevOps Engineer with 3+ years of experience in AWS, Kubernetes, CI/CD,
              and Infrastructure Automation. Delivered 17+ production projects across industries.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-12">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2 text-xs sm:text-sm lg:text-base px-4 sm:px-6 py-2.5 sm:py-3">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center gap-2 text-xs sm:text-sm lg:text-base px-4 sm:px-6 py-2.5 sm:py-3">
                Contact Me
              </a>
              <div className="flex items-center gap-2">
                <a href="https://github.com/Sauravambuskar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 glass-card rounded-full flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all">
                  <FaGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/in/sauravambuskar/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 glass-card rounded-full flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all">
                  <FaLinkedinIn size={18} />
                </a>
                <a href="https://www.behance.net/Saurava581" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 glass-card rounded-full flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all">
                  <FaBehance size={18} />
                </a>
              </div>
            </div>

            {/* Tech logos strip */}
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-10 opacity-50">
              <span className="text-[10px] sm:text-xs text-muted-foreground mr-1 sm:mr-2">Powered by</span>
              {[
                { slug: "amazonwebservices", variant: "original-wordmark" },
                { slug: "docker", variant: "original" },
                { slug: "kubernetes", variant: "original" },
                { slug: "terraform", variant: "original" },
                { slug: "jenkins", variant: "original" },
                { slug: "python", variant: "original" },
              ].map(({ slug, variant }) => (
                <img
                  key={slug}
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`}
                  alt={slug}
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 object-contain grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              ))}
            </div>

            <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-10">
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
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gradient-text">{s.value}</div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-8 sm:mt-12"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <HiMiniChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
