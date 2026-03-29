import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:saurava581@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="glow-orb w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            Let's Talk
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto px-2 sm:px-0">
            Interested in working together or have a project in mind? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-3 sm:space-y-4"
          >
            {[
              { icon: Mail, label: "saurava581@gmail.com", href: "mailto:saurava581@gmail.com", sub: "Email" },
              { icon: Phone, label: "+91 8830306901", href: "tel:+918830306901", sub: "Phone" },
              { icon: MapPin, label: "Pune, India", href: "#", sub: "Location" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 sm:gap-4 glass-card-hover p-4 sm:p-5 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <item.icon size={18} className="text-primary sm:hidden" />
                  <item.icon size={20} className="text-primary hidden sm:block" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs text-muted-foreground mb-0.5">{item.sub}</p>
                  <span className="text-sm sm:text-base text-foreground font-medium group-hover:text-primary transition-colors truncate block">
                    {item.label}
                  </span>
                </div>
                <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 sm:hidden" />
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 hidden sm:block" />
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            onSubmit={handleSubmit}
            className="glass-card p-5 sm:p-8 space-y-4 sm:space-y-5"
          >
            <div>
              <label className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2 block">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                required
              />
            </div>
            <div>
              <label className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2 block">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                required
              />
            </div>
            <div>
              <label className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2 block">Message</label>
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                required
              />
            </div>
            <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2 text-sm sm:text-base py-3 sm:py-3.5">
              <Send size={16} className="sm:hidden" />
              <Send size={18} className="hidden sm:block" /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
