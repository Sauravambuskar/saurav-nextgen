import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Target, Zap, BarChart3 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Navbar from "@/components/Navbar";

const WHATSAPP_NUMBER = "918830306901";

interface CaseStudyData {
  title: string;
  tag: string;
  url: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  results: { label: string; value: string }[];
  testimonial?: string;
}

const caseStudiesData: Record<string, CaseStudyData> = {
  ostree: {
    title: "OSTREE",
    tag: "E-commerce",
    url: "https://ostree.in/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-324-1024x576.png",
    overview:
      "OSTREE is a fast-growing fashion e-commerce platform that needed a robust, scalable infrastructure to handle high traffic volumes and deliver a seamless shopping experience to thousands of daily users.",
    challenge:
      "The client faced frequent downtime during flash sales, slow page load times averaging 8+ seconds, and a monolithic architecture that made scaling impossible. Cart abandonment rates were at 72% due to poor performance.",
    solution:
      "I re-architected the entire platform using a modern tech stack with server-side rendering, implemented a CDN-first strategy, optimized database queries, and set up auto-scaling infrastructure. Introduced lazy loading, image optimization, and a headless CMS for content management.",
    techStack: ["React", "Node.js", "MongoDB", "AWS EC2", "CloudFront", "Docker", "Redis", "Nginx"],
    keyFeatures: [
      "Auto-scaling infrastructure handling 10x traffic spikes",
      "Sub-2-second page load times with CDN optimization",
      "Real-time inventory management system",
      "Secure payment gateway integration with multiple providers",
      "Mobile-first responsive design with PWA capabilities",
      "Advanced analytics dashboard for business insights",
    ],
    results: [
      { label: "Page Load Time", value: "1.8s (from 8s)" },
      { label: "Uptime", value: "99.97%" },
      { label: "Cart Abandonment", value: "↓ 40%" },
      { label: "Revenue Increase", value: "↑ 65%" },
    ],
  },
  "studdy-lms": {
    title: "STUDDY LMS",
    tag: "EdTech SaaS",
    url: "https://studdyy.vercel.app/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-332-1024x576.png",
    overview:
      "STUDDY is an EdTech learning management system built to serve 5000+ students with live classes, recorded content, assignments, and real-time progress tracking — all on a budget-friendly infrastructure.",
    challenge:
      "The institution was relying on WhatsApp groups and Google Drive for course delivery. Students struggled with disorganized content, no progress tracking, and zero engagement analytics. The system needed to work reliably on slow mobile connections in rural India.",
    solution:
      "Built a custom LMS from scratch with offline-first capabilities, adaptive video streaming, a lightweight mobile-optimized UI, and an admin dashboard for instructors. Implemented role-based access, automated quiz grading, and certificate generation.",
    techStack: ["React", "Next.js", "Supabase", "Vercel", "Tailwind CSS", "PostgreSQL", "Cloudinary"],
    keyFeatures: [
      "Adaptive video streaming for low-bandwidth areas",
      "Automated quiz & assignment grading system",
      "Real-time progress tracking for students & instructors",
      "Digital certificate generation on course completion",
      "Role-based access for students, instructors, and admins",
      "Offline-first PWA for mobile users",
    ],
    results: [
      { label: "Active Students", value: "5,000+" },
      { label: "Course Completion", value: "↑ 78%" },
      { label: "Engagement Rate", value: "↑ 3x" },
      { label: "Infra Cost", value: "↓ 80%" },
    ],
  },
  "sja-microfinance": {
    title: "SJA MICRO FINANCE",
    tag: "FinTech",
    url: "https://sjamicrofoundation.com/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-327-1024x576.png",
    overview:
      "SJA Micro Foundation required a secure, reliable digital platform to manage their microfinance operations, loan tracking, and community outreach — replacing manual paperwork with a streamlined digital system.",
    challenge:
      "All loan records were maintained in physical registers, leading to data loss, human errors, and delayed reporting. The team had no visibility into repayment trends or defaulting patterns, and compliance reporting took weeks.",
    solution:
      "Developed a secure web platform with encrypted data handling, automated EMI calculations, repayment tracking dashboards, and role-based access. Implemented automated SMS notifications for payment reminders and built compliance-ready reporting modules.",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Twilio SMS", "Chart.js", "JWT Auth"],
    keyFeatures: [
      "End-to-end encrypted financial data handling",
      "Automated EMI calculation & repayment scheduling",
      "Real-time dashboard for loan portfolio monitoring",
      "Automated SMS reminders for repayments",
      "Compliance-ready financial reporting modules",
      "Role-based access for field agents and managers",
    ],
    results: [
      { label: "Processing Time", value: "↓ 85%" },
      { label: "Data Accuracy", value: "99.9%" },
      { label: "Default Rate", value: "↓ 30%" },
      { label: "Report Generation", value: "Instant" },
    ],
  },
  "advance-fms": {
    title: "ADVANCE FMS",
    tag: "Enterprise",
    url: "https://advancefms.in/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-326-1024x576.png",
    overview:
      "Advance FMS is a leading facility management company that needed a digital transformation of their operations — from client onboarding to workforce management and service delivery tracking.",
    challenge:
      "The company was managing 50+ client sites with spreadsheets and phone calls. Service requests were lost, workforce allocation was inefficient, and client satisfaction was declining due to lack of transparency in operations.",
    solution:
      "Built an enterprise-grade platform with real-time service request management, workforce GPS tracking, automated scheduling, client portals with live status updates, and comprehensive analytics for operational efficiency.",
    techStack: ["React", "Express.js", "MongoDB", "Google Maps API", "Firebase", "Tailwind CSS"],
    keyFeatures: [
      "Real-time service request tracking with SLA monitoring",
      "Workforce GPS tracking and automated scheduling",
      "Client portal with live service status updates",
      "Automated attendance and shift management",
      "Comprehensive analytics and performance dashboards",
      "Multi-site management from a single dashboard",
    ],
    results: [
      { label: "Response Time", value: "↓ 60%" },
      { label: "Client Retention", value: "↑ 45%" },
      { label: "Operational Costs", value: "↓ 35%" },
      { label: "Sites Managed", value: "50+" },
    ],
  },
  "quantom-clouds": {
    title: "QUANTOM CLOUDS",
    tag: "Technology",
    url: "https://quantomclouds.vercel.app/",
    image: "/screenshots/quantomclouds.png",
    overview:
      "Quantom Clouds is a technology company specializing in cloud infrastructure, data engineering, and AI solutions. They needed a modern, high-performance website that showcased their technical expertise and attracted enterprise clients.",
    challenge:
      "The company had no digital presence and was losing enterprise deals to competitors with polished online portfolios. They needed a site that communicated deep technical expertise while remaining accessible to non-technical decision-makers.",
    solution:
      "Designed and built a visually striking, performance-optimized website with interactive service showcases, animated case studies, and a lead generation funnel. Implemented SEO best practices and integrated analytics for conversion tracking.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel", "Google Analytics", "SEO Optimization"],
    keyFeatures: [
      "Interactive service showcase with animated transitions",
      "SEO-optimized content architecture",
      "Lead generation funnel with smart form routing",
      "Performance-first design with 95+ Lighthouse score",
      "Responsive design across all device categories",
      "Integrated blog and thought leadership section",
    ],
    results: [
      { label: "Lighthouse Score", value: "96/100" },
      { label: "Organic Traffic", value: "↑ 200%" },
      { label: "Lead Generation", value: "↑ 150%" },
      { label: "Bounce Rate", value: "↓ 45%" },
    ],
  },
  "limaye-eye-care": {
    title: "LIMAYE EYE CARE",
    tag: "Healthcare",
    url: "https://limayeeyehospital.com/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-338-1024x576.png",
    overview:
      "Limaye Eye Hospital is a reputed eye care center that needed a patient-centric digital platform to improve appointment management, showcase their services, and build trust with potential patients through an informative online presence.",
    challenge:
      "The hospital was handling 100+ daily appointment calls manually, leading to long wait times, double bookings, and frustrated patients. Their outdated website failed to communicate their expertise, and they had zero online appointment capability.",
    solution:
      "Built a modern healthcare platform with an online appointment booking system, doctor profiles, service information with educational content, patient testimonials, and a responsive design optimized for elderly users with larger fonts and high-contrast options.",
    techStack: ["React", "Node.js", "PostgreSQL", "Twilio", "Google Maps", "Tailwind CSS"],
    keyFeatures: [
      "Online appointment booking with real-time slot availability",
      "Doctor profiles with specialization and experience details",
      "Patient-friendly UI with accessibility considerations",
      "Automated appointment reminders via SMS",
      "Service pages with educational eye-care content",
      "Google Maps integration for easy hospital navigation",
    ],
    results: [
      { label: "Online Bookings", value: "↑ 300%" },
      { label: "Phone Call Volume", value: "↓ 55%" },
      { label: "Patient Satisfaction", value: "↑ 40%" },
      { label: "No-Show Rate", value: "↓ 35%" },
    ],
  },
};

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudiesData[id] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/#case-studies" className="text-primary hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Saurav! I just read your "${study.title}" case study and I'm interested in discussing a similar project. Can we chat?`
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="pt-24 pb-16">
        {/* Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Link
            to="/#case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              {study.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {study.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mb-8">
              {study.overview}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-xl overflow-hidden border border-border mb-16"
          >
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <Target className="text-destructive" size={22} />
                </div>
                <h2 className="text-xl font-bold">The Challenge</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {study.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="text-primary" size={22} />
                </div>
                <h2 className="text-xl font-bold">The Solution</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {study.solution}
              </p>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Layers className="text-secondary" size={22} />
              </div>
              <h2 className="text-xl font-bold">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-muted/50 text-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <CheckCircle2 className="text-primary" size={22} />
              </div>
              <h2 className="text-xl font-bold">Key Features Delivered</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {study.keyFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <CheckCircle2
                    size={18}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <BarChart3 className="text-accent" size={22} />
              </div>
              <h2 className="text-xl font-bold">Results & Impact</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {study.results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                    {result.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {result.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visit Live Site */}
          <div className="text-center mb-12">
            <a
              href={study.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={16} /> Visit Live Website
            </a>
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 blur-3xl" />
            <div className="relative glass-card p-8 sm:p-12 text-center border border-primary/20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Want Something <span className="gradient-text">Similar?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Impressed by this project? Let's discuss how I can build something even better for your business. Reach out directly on WhatsApp for a quick, no-obligation chat.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
              >
                <FaWhatsapp size={24} />
                Let's Talk on WhatsApp
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                Typically replies within 1 hour • Available Mon–Sat
              </p>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default CaseStudyDetail;
