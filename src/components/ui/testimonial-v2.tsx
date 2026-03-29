import React from 'react';
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Saurav transformed our deployment pipeline completely. What used to take hours now happens in minutes with zero downtime. His Kubernetes expertise is outstanding.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Rajesh Sharma",
    role: "CTO, Ostree Fashion",
  },
  {
    text: "Our e-commerce platform handles 10x more traffic after Saurav optimized our AWS infrastructure. The cost savings were remarkable too.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Amit Patel",
    role: "Founder, Advance FMS",
  },
  {
    text: "The CI/CD pipeline Saurav built for our fintech platform is rock solid. We deploy with confidence every single day now.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Priya Deshmukh",
    role: "Director, SJA Micro Finance",
  },
  {
    text: "Saurav's DevOps work on our LMS platform helped us scale to 5000+ students without any performance issues. Truly impressive work.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Vikram Joshi",
    role: "CEO, Studdy LMS",
  },
  {
    text: "His monitoring setup with Prometheus and Grafana gave us complete visibility into our systems. Downtime is now a thing of the past.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sneha Kulkarni",
    role: "Operations Head, Truvara Exim",
  },
  {
    text: "Our hospital website needed 99.9% uptime. Saurav delivered exactly that with a bulletproof cloud architecture.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Dr. Meena Limaye",
    role: "Director, Limaye Eye Care",
  },
  {
    text: "Saurav automated our entire infrastructure with Terraform. Spinning up new environments went from days to minutes.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Rohan Mehta",
    role: "Tech Lead, Global Packaging",
  },
  {
    text: "Working with Saurav was seamless. He understood our business needs and delivered a scalable, secure hosting solution.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Ananya Iyer",
    role: "Manager, Royal Residency",
  },
  {
    text: "The Docker containerization Saurav implemented cut our deployment errors by 90%. His attention to detail is unmatched.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Kavita Nair",
    role: "Product Manager, Advanced Group",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({
  className,
  testimonials: items,
  duration = 15,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {items.map(({ text, image, name, role }, i) => (
              <div key={`${index}-${i}`} className="glass-card-hover p-6">
                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover border border-primary/20"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = React.forwardRef<HTMLElement>((_, forwardedRef) => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bg-primary -top-40 right-0 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by businesses across India to deliver reliable, scalable infrastructure and DevOps solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} duration={22} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={16} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
