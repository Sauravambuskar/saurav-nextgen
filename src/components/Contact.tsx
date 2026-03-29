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
      <div className="glow-orb w-[400px] h-[400px] bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-sm text-muted-foreground mb-4">
            Let's Talk
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Interested in working together or have a project in mind? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-4"
          >
            {[
              { icon: Mail, label: "saurava581@gmail.com", href: "mailto:saurava581@gmail.com", sub: "Email" },
              { icon: Phone, label: "+91 8830306901", href: "tel:+918830306901", sub: "Phone" },
              { icon: MapPin, label: "Pune, India", href: "#", sub: "Location" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 glass-card-hover p-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{item.sub}</p>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </div>
                <ArrowRight size={16} className="ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                required
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Message</label>
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                required
              />
            </div>
            <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2 text-base py-3.5">
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
