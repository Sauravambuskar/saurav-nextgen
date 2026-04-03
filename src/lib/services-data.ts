import {
  HiMiniGlobeAlt,
  HiMiniDevicePhoneMobile,
  HiMiniCircleStack,
  HiMiniDocumentText,
  HiMiniCpuChip,
  HiMiniBolt,
  HiMiniUserGroup,
  HiMiniLightBulb,
} from "react-icons/hi2";

export interface ServiceExample {
  title: string;
  industry: string;
  description: string;
  image: string;
  results: string[];
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  icon: typeof HiMiniGlobeAlt;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  features: string[];
  techStack: string[];
  process: ServiceProcess[];
  examples: ServiceExample[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "website-development",
    icon: HiMiniGlobeAlt,
    title: "Website Development",
    tagline: "High-performance websites that convert visitors into customers",
    description:
      "We build blazing-fast, SEO-optimized websites using modern frameworks like React, Next.js, and Tailwind CSS. Every site is engineered for performance, accessibility, and conversion — from corporate portals to complex multi-page platforms.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    features: [
      "Server-side rendering & static generation for lightning-fast load times",
      "Mobile-first responsive design across all device categories",
      "SEO architecture with schema markup, sitemaps, and meta optimization",
      "CMS integration (WordPress, Strapi, Sanity) for easy content management",
      "Analytics & conversion tracking with Google Analytics 4",
      "SSL, security headers, and OWASP compliance baked in",
      "Progressive Web App (PWA) capabilities for offline access",
      "Accessibility (WCAG 2.1 AA) compliant designs",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Cloudflare", "WordPress", "Strapi"],
    process: [
      { step: 1, title: "Discovery & Strategy", description: "Deep-dive into your business goals, target audience, competitor analysis, and technical requirements to craft a winning strategy." },
      { step: 2, title: "Design & Prototyping", description: "High-fidelity wireframes and interactive prototypes in Figma, iterated with your feedback until pixel-perfect." },
      { step: 3, title: "Development & Integration", description: "Clean, modular code with CI/CD pipelines. CMS, analytics, and third-party integrations wired up seamlessly." },
      { step: 4, title: "Testing & Launch", description: "Cross-browser testing, performance audits (Lighthouse 95+), security hardening, and a smooth go-live with zero downtime." },
    ],
    examples: [
      {
        title: "OSTREE Fashion E-commerce",
        industry: "Fashion & Retail",
        description: "A high-traffic fashion e-commerce platform serving thousands of daily users with sub-2-second load times, real-time inventory, and auto-scaling infrastructure.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
        results: ["Page load: 1.8s (from 8s)", "99.97% uptime", "Cart abandonment ↓ 40%", "Revenue ↑ 65%"],
      },
      {
        title: "Advance FMS Corporate Portal",
        industry: "Facility Management",
        description: "Enterprise-grade corporate website with real-time service dashboards, workforce tracking, and client portals managing 50+ sites from a single platform.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
        results: ["Response time ↓ 60%", "Client retention ↑ 45%", "Operational costs ↓ 35%", "50+ sites managed"],
      },
      {
        title: "Limaye Eye Care Hospital",
        industry: "Healthcare",
        description: "Patient-centric healthcare platform with online appointment booking, doctor profiles, and accessibility-first design optimized for elderly users.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
        results: ["Online bookings ↑ 300%", "Phone calls ↓ 55%", "Patient satisfaction ↑ 40%", "No-show rate ↓ 35%"],
      },
    ],
    faqs: [
      { question: "How long does a website take to build?", answer: "Typical timelines range from 2-6 weeks depending on complexity. A simple business site takes ~2 weeks, while a complex platform with integrations can take 4-6 weeks." },
      { question: "Do you provide hosting and maintenance?", answer: "Yes! We offer managed hosting on Vercel/AWS with 99.9% uptime SLA, plus ongoing maintenance packages that include security updates, performance monitoring, and content updates." },
      { question: "Will my website be mobile-friendly?", answer: "Absolutely. Every website is built mobile-first, meaning it's designed for phones first and then enhanced for tablets and desktops. We test across 20+ device configurations." },
      { question: "Can I update the content myself?", answer: "Yes. We integrate a user-friendly CMS (content management system) so you can update text, images, blog posts, and more without any coding knowledge." },
    ],
  },
  {
    slug: "web-app-development",
    icon: HiMiniDevicePhoneMobile,
    title: "Web App Development",
    tagline: "Scalable applications built for millions of users",
    description:
      "Full-stack web applications with real-time features, complex business logic, authentication, and seamless UX. We build SaaS platforms, dashboards, marketplaces, and internal tools that scale effortlessly.",
    heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop",
    features: [
      "Real-time data with WebSockets and server-sent events",
      "Role-based authentication & authorization (OAuth, JWT, SSO)",
      "RESTful & GraphQL API architecture",
      "Database design with PostgreSQL, MongoDB, or Supabase",
      "File upload, storage, and CDN delivery",
      "Payment integration (Stripe, Razorpay, PayPal)",
      "Push notifications and email automation",
      "Automated testing and CI/CD pipelines",
    ],
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Supabase", "Redis", "Docker", "AWS"],
    process: [
      { step: 1, title: "Requirements & Architecture", description: "System design sessions to define data models, API contracts, user flows, and infrastructure requirements." },
      { step: 2, title: "Sprint-Based Development", description: "Agile 2-week sprints with working demos at each milestone. You see progress and provide feedback continuously." },
      { step: 3, title: "API & Integration Layer", description: "Robust API development with documentation, rate limiting, and integration with third-party services." },
      { step: 4, title: "Deployment & Monitoring", description: "Containerized deployment with health checks, error tracking (Sentry), and performance monitoring dashboards." },
    ],
    examples: [
      {
        title: "STUDDY LMS Platform",
        industry: "EdTech",
        description: "Learning management system serving 5,000+ students with adaptive video streaming, automated grading, real-time progress tracking, and offline-first PWA for low-bandwidth areas.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
        results: ["5,000+ active students", "Course completion ↑ 78%", "Engagement ↑ 3x", "Infra cost ↓ 80%"],
      },
      {
        title: "SJA Microfinance Dashboard",
        industry: "FinTech",
        description: "Secure financial platform replacing manual paperwork with automated EMI calculations, repayment tracking, SMS reminders, and compliance-ready reporting for a microfinance foundation.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
        results: ["Processing time ↓ 85%", "Data accuracy 99.9%", "Default rate ↓ 30%", "Instant reports"],
      },
      {
        title: "Multi-Vendor Marketplace",
        industry: "E-commerce",
        description: "A full-featured marketplace with vendor onboarding, product management, order processing, split payments, and admin analytics supporting 200+ sellers.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        results: ["200+ vendors onboarded", "Order processing ↓ 70%", "GMV ↑ 150%", "99.95% uptime"],
      },
    ],
    faqs: [
      { question: "What's the difference between a website and a web app?", answer: "A website primarily displays information, while a web app has interactive functionality — user accounts, dashboards, data manipulation, real-time features, and complex business logic." },
      { question: "Can you build a SaaS product from scratch?", answer: "Yes! We've built multiple SaaS platforms from zero to launch, including subscription billing, multi-tenancy, API access, and admin dashboards." },
      { question: "How do you handle data security?", answer: "We implement encryption at rest and in transit, role-based access control, input sanitization, OWASP top-10 protection, and regular security audits." },
      { question: "Do you support post-launch iteration?", answer: "Absolutely. Most of our clients continue with monthly retainers for feature development, bug fixes, and performance optimization after launch." },
    ],
  },
  {
    slug: "crm-erp-solutions",
    icon: HiMiniCircleStack,
    title: "CRM & ERP Solutions",
    tagline: "Streamline operations with custom business management systems",
    description:
      "Custom CRM and ERP systems tailored to your business processes. We build solutions that centralize customer data, automate workflows, and provide actionable insights — replacing scattered spreadsheets with unified platforms.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    features: [
      "360° customer view with interaction history and scoring",
      "Sales pipeline management with automated stage transitions",
      "Inventory management with real-time stock tracking",
      "Invoice generation and payment tracking",
      "Custom workflow automation with rule-based triggers",
      "Multi-department dashboards with role-based views",
      "Email and communication integration (Gmail, Outlook)",
      "Advanced reporting with exportable charts and data",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "n8n", "Chart.js", "AWS"],
    process: [
      { step: 1, title: "Business Process Mapping", description: "We map every workflow, data flow, and pain point in your current operations to design the ideal digital system." },
      { step: 2, title: "Module Design", description: "Breaking the system into logical modules — sales, inventory, HR, finance — with clear data relationships and access controls." },
      { step: 3, title: "Iterative Development", description: "Building module by module with weekly demos, ensuring each piece works perfectly before moving to the next." },
      { step: 4, title: "Migration & Training", description: "Data migration from existing systems, comprehensive team training, and phased rollout to minimize disruption." },
    ],
    examples: [
      {
        title: "Manufacturing ERP System",
        industry: "Manufacturing",
        description: "End-to-end ERP managing raw material procurement, production scheduling, quality control, inventory, and dispatch for a factory with 500+ SKUs.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        results: ["Production efficiency ↑ 40%", "Inventory waste ↓ 60%", "Order fulfillment ↑ 55%", "500+ SKUs managed"],
      },
      {
        title: "Real Estate CRM",
        industry: "Real Estate",
        description: "Sales CRM for a property developer tracking 2,000+ leads, automated follow-ups, site visit scheduling, and deal pipeline visualization with WhatsApp integration.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
        results: ["Lead conversion ↑ 35%", "Follow-up automation 100%", "2,000+ leads tracked", "Deal closure ↑ 50%"],
      },
      {
        title: "Retail Chain POS + CRM",
        industry: "Retail",
        description: "Unified POS and customer management system for a 15-store retail chain with loyalty programs, cross-store inventory visibility, and real-time sales dashboards.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        results: ["Sales tracking: real-time", "Customer retention ↑ 45%", "15 stores unified", "Stock-outs ↓ 70%"],
      },
    ],
    faqs: [
      { question: "Should I use an off-the-shelf CRM or build custom?", answer: "If your workflows are unique or you need deep integrations with existing systems, custom is the way. Off-the-shelf works for standard sales pipelines, but custom CRMs grow with you without per-seat pricing." },
      { question: "Can you integrate with our existing tools?", answer: "Yes. We integrate with email providers, accounting software (Tally, QuickBooks), payment gateways, WhatsApp, and any tool with an API." },
      { question: "How long does an ERP take to build?", answer: "A focused MVP with core modules takes 6-10 weeks. Full-featured ERPs with multiple departments take 3-6 months with phased rollouts." },
      { question: "What about data migration from spreadsheets?", answer: "We handle complete data migration — cleaning, transforming, and importing your existing data into the new system with validation checks." },
    ],
  },
  {
    slug: "landing-pages",
    icon: HiMiniDocumentText,
    title: "Landing Pages",
    tagline: "Conversion-focused pages that turn clicks into customers",
    description:
      "High-converting landing pages designed with behavioral psychology, stunning visuals, and blazing-fast performance. Every element is optimized for a single goal — whether it's signups, sales, or lead generation.",
    heroImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop",
    features: [
      "Conversion-optimized layout based on proven UX patterns",
      "A/B testing ready with variant tracking",
      "Sub-1-second load times with edge-cached delivery",
      "Dynamic content personalization based on traffic source",
      "Lead capture forms with CRM/email integration",
      "Social proof sections with live testimonials",
      "Mobile-optimized with thumb-friendly interactions",
      "Retargeting pixel integration (Meta, Google, LinkedIn)",
    ],
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel Edge", "Google Optimize", "Hotjar", "Mailchimp"],
    process: [
      { step: 1, title: "Conversion Strategy", description: "Analyzing your offer, audience, and competitors to craft a messaging hierarchy and conversion funnel." },
      { step: 2, title: "Copywriting & Design", description: "Persuasive copy paired with eye-catching visuals. Every headline, CTA, and section is designed to guide visitors toward action." },
      { step: 3, title: "Development & Speed", description: "Code-level optimization for Core Web Vitals. Every millisecond counts — we obsess over performance." },
      { step: 4, title: "Launch & Optimize", description: "Heatmap analysis, A/B tests, and iterative improvements based on real user behavior data." },
    ],
    examples: [
      {
        title: "SaaS Product Launch Page",
        industry: "Technology",
        description: "Pre-launch landing page for an AI writing tool that collected 12,000+ waitlist signups in 3 weeks with animated product demos and social proof counters.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
        results: ["12,000+ signups in 3 weeks", "Conversion rate: 34%", "Bounce rate: 18%", "Load time: 0.8s"],
      },
      {
        title: "Real Estate Project Launch",
        industry: "Real Estate",
        description: "Premium property launch page with virtual tour integration, EMI calculator, and WhatsApp-based lead capture generating 500+ qualified leads per month.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
        results: ["500+ leads/month", "Cost per lead ↓ 60%", "Virtual tour views: 8K+", "Conversion rate: 28%"],
      },
      {
        title: "Event Registration Page",
        industry: "Events",
        description: "Countdown-driven event page with early-bird pricing tiers, speaker showcases, and integrated payment processing that sold out a 2,000-seat conference.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
        results: ["2,000 tickets sold", "Early-bird conversion: 45%", "Revenue: ₹50L+", "Page load: 0.6s"],
      },
    ],
    faqs: [
      { question: "What conversion rates can I expect?", answer: "Industry average is 2-5%. Our landing pages consistently achieve 15-35% conversion rates through data-driven design, persuasive copy, and continuous optimization." },
      { question: "Do you write the copy too?", answer: "Yes! We have in-house copywriters who specialize in conversion-focused messaging. We also work with your existing copy if you prefer." },
      { question: "How fast can you deliver a landing page?", answer: "A high-quality landing page takes 3-7 days from brief to launch. Rush delivery in 48 hours is available for urgent campaigns." },
      { question: "Can I track performance and run A/B tests?", answer: "Absolutely. We set up analytics, heatmaps, and A/B testing infrastructure so you can continuously improve conversion rates post-launch." },
    ],
  },
  {
    slug: "ai-agents-design",
    icon: HiMiniCpuChip,
    title: "AI Agents & Design",
    tagline: "Intelligent automation that works 24/7 for your business",
    description:
      "We design and build custom AI agents, chatbots, and intelligent assistants that automate customer support, lead qualification, content generation, and complex business workflows using cutting-edge LLMs.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    features: [
      "Custom AI chatbots trained on your business data",
      "Multi-channel deployment (website, WhatsApp, Slack, Teams)",
      "RAG (Retrieval-Augmented Generation) for accurate responses",
      "Lead qualification and automated booking agents",
      "Document analysis and summarization pipelines",
      "Voice AI agents for phone-based interactions",
      "Human handoff with full conversation context",
      "Analytics dashboard for conversation insights",
    ],
    techStack: ["OpenAI GPT-4", "LangChain", "Pinecone", "Python", "Node.js", "Whisper AI", "Supabase", "n8n"],
    process: [
      { step: 1, title: "Use Case Definition", description: "Identifying the highest-impact automation opportunities and defining success metrics for your AI agent." },
      { step: 2, title: "Knowledge Base Setup", description: "Ingesting your documents, FAQs, product catalogs, and policies into a vector database for accurate retrieval." },
      { step: 3, title: "Agent Development", description: "Building the AI agent with conversation flows, tool integrations, guardrails, and fallback handling." },
      { step: 4, title: "Testing & Deployment", description: "Adversarial testing, edge case handling, A/B testing against human agents, and production deployment with monitoring." },
    ],
    examples: [
      {
        title: "E-commerce Support Agent",
        industry: "E-commerce",
        description: "AI chatbot handling 80% of customer queries automatically — order tracking, returns, product recommendations, and FAQs — with seamless human handoff for complex issues.",
        image: "https://images.unsplash.com/photo-1531746790095-e5988a9e1e4b?w=600&h=400&fit=crop",
        results: ["80% queries automated", "Response time: <3 seconds", "CSAT: 4.6/5", "Support cost ↓ 60%"],
      },
      {
        title: "Legal Document Analyzer",
        industry: "Legal Tech",
        description: "AI agent that reads contracts, highlights risks, extracts key clauses, and generates summaries — reducing contract review time from hours to minutes.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
        results: ["Review time ↓ 90%", "1,000+ contracts processed", "Accuracy: 97%", "Cost savings: ₹20L/year"],
      },
      {
        title: "Real Estate Lead Qualifier",
        industry: "Real Estate",
        description: "WhatsApp-based AI agent that qualifies property leads, answers questions about projects, schedules site visits, and syncs with the sales CRM automatically.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
        results: ["Lead qualification: 24/7", "Qualified leads ↑ 200%", "Site visits booked: 500+/mo", "Sales team efficiency ↑ 3x"],
      },
    ],
    faqs: [
      { question: "Can the AI agent learn from our specific data?", answer: "Yes! We train agents on your documents, FAQs, product catalogs, and past conversations using RAG technology so responses are accurate and brand-consistent." },
      { question: "What if the AI gives wrong answers?", answer: "We implement guardrails, confidence scoring, and automatic human handoff for uncertain queries. The agent knows when to escalate." },
      { question: "Which platforms can the agent deploy on?", answer: "Website widget, WhatsApp Business, Slack, Microsoft Teams, Telegram, email, and even phone (voice AI). Multi-channel from day one." },
      { question: "How much does it cost compared to human agents?", answer: "AI agents typically cost 70-80% less than human support teams while handling 10x more conversations simultaneously, 24/7." },
    ],
  },
  {
    slug: "automation-solutions",
    icon: HiMiniBolt,
    title: "Automation Solutions",
    tagline: "Eliminate manual tasks and let systems do the heavy lifting",
    description:
      "End-to-end business automation using n8n, Zapier, Make, and custom code integrations. We connect your tools, automate repetitive workflows, and build self-running systems that save hundreds of hours monthly.",
    heroImage: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=600&fit=crop",
    features: [
      "Workflow automation with n8n, Zapier, and Make",
      "Custom API integrations between any platforms",
      "Email automation sequences and drip campaigns",
      "Data sync across CRM, accounting, and operations tools",
      "Automated reporting and dashboard generation",
      "Invoice and payment processing automation",
      "Social media scheduling and content distribution",
      "Error handling, logging, and notification systems",
    ],
    techStack: ["n8n", "Zapier", "Make", "Python", "Node.js", "REST APIs", "Webhooks", "Cron Jobs"],
    process: [
      { step: 1, title: "Workflow Audit", description: "Documenting every manual process, identifying bottlenecks, and calculating time/cost savings potential for each workflow." },
      { step: 2, title: "Integration Mapping", description: "Mapping data flows between your tools and designing the automation architecture with error handling and fallbacks." },
      { step: 3, title: "Build & Test", description: "Building automations with comprehensive testing — edge cases, error scenarios, and volume stress tests." },
      { step: 4, title: "Monitor & Optimize", description: "Deploying with monitoring dashboards, setting up alerts for failures, and continuously optimizing for reliability." },
    ],
    examples: [
      {
        title: "Sales Pipeline Automation",
        industry: "B2B Sales",
        description: "Automated lead capture from 5 sources, CRM entry, lead scoring, email sequences, and Slack notifications — eliminating 40 hours/week of manual data entry for a sales team of 20.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        results: ["40 hours/week saved", "Lead response time: <2 min", "CRM accuracy: 100%", "Sales ↑ 30%"],
      },
      {
        title: "E-commerce Order Flow",
        industry: "E-commerce",
        description: "End-to-end automation from order placement to delivery — inventory updates, invoice generation, shipping label creation, tracking notifications, and review requests.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        results: ["Order processing: 100% automated", "Delivery updates: real-time", "Returns processing ↓ 50%", "Customer reviews ↑ 200%"],
      },
      {
        title: "HR Onboarding Workflow",
        industry: "Human Resources",
        description: "Automated new-hire onboarding — document collection, account provisioning, training assignment, buddy matching, and 30/60/90-day check-in scheduling.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
        results: ["Onboarding time ↓ 70%", "100% compliance", "New hire satisfaction ↑ 45%", "HR hours saved: 25/week"],
      },
    ],
    faqs: [
      { question: "What tools can you integrate?", answer: "Any tool with an API or webhook — CRMs (HubSpot, Salesforce), accounting (Tally, QuickBooks), email (Gmail, Mailchimp), messaging (Slack, WhatsApp), and hundreds more." },
      { question: "What if an automation fails?", answer: "We build robust error handling with retry logic, fallback workflows, and instant Slack/email alerts so issues are caught and resolved before they impact your business." },
      { question: "How much time can automation save?", answer: "On average, our clients save 20-50 hours per week per department. We calculate exact ROI during the initial workflow audit." },
      { question: "Do I need technical knowledge to manage automations?", answer: "No. We build intuitive dashboards for monitoring and provide training. For n8n/Zapier workflows, you can make simple changes yourself with our documentation." },
    ],
  },
  {
    slug: "hrms-systems",
    icon: HiMiniUserGroup,
    title: "HRMS Systems",
    tagline: "Complete workforce management from hire to retire",
    description:
      "Full-featured HR management systems covering employee lifecycle, attendance, payroll, leave management, performance reviews, and recruitment — all in one unified platform tailored to your company's policies.",
    heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop",
    features: [
      "Employee database with document management",
      "Biometric & GPS-based attendance tracking",
      "Leave management with approval workflows",
      "Payroll processing with tax calculations",
      "Performance review and goal tracking",
      "Recruitment pipeline with applicant tracking",
      "Employee self-service portal",
      "Compliance reporting and audit trails",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Razorpay", "Twilio"],
    process: [
      { step: 1, title: "Policy Documentation", description: "Mapping your company's HR policies, leave rules, payroll structure, and compliance requirements into system specifications." },
      { step: 2, title: "Module Development", description: "Building core modules — employees, attendance, leave, payroll — with your specific business rules encoded." },
      { step: 3, title: "Integration & Testing", description: "Integrating with biometric devices, bank systems, and accounting tools. Thorough testing with real payroll scenarios." },
      { step: 4, title: "Rollout & Training", description: "Department-wise rollout, admin training, employee onboarding to self-service portal, and 30-day hypercare support." },
    ],
    examples: [
      {
        title: "500-Employee Manufacturing HRMS",
        industry: "Manufacturing",
        description: "Complete HRMS for a manufacturing company with shift management, overtime calculations, biometric attendance across 3 factory locations, and statutory compliance for PF/ESI.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        results: ["Payroll processing: 2 hours (from 3 days)", "Attendance accuracy: 99.9%", "HR team size ↓ 40%", "Compliance: 100%"],
      },
      {
        title: "IT Company Remote HRMS",
        industry: "Technology",
        description: "Cloud-based HRMS for a 200-person remote-first IT company with timezone-aware attendance, project-based leave policies, and 360° performance reviews.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
        results: ["Fully remote-compatible", "Self-service adoption: 95%", "Review completion ↑ 80%", "Attrition ↓ 25%"],
      },
      {
        title: "Retail Chain Workforce System",
        industry: "Retail",
        description: "Multi-location workforce management for 20 retail stores with dynamic shift scheduling, overtime alerts, and performance-based incentive calculations.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
        results: ["20 stores on one platform", "Scheduling time ↓ 80%", "Overtime costs ↓ 35%", "Employee satisfaction ↑ 40%"],
      },
    ],
    faqs: [
      { question: "Can you handle Indian payroll compliance (PF, ESI, TDS)?", answer: "Yes. Our HRMS handles all Indian statutory compliance including PF, ESI, Professional Tax, TDS, and generates Form 16 and other required reports." },
      { question: "Does it integrate with biometric devices?", answer: "Yes. We integrate with all major biometric devices (ZKTeco, eSSL, etc.) and also support GPS-based mobile attendance for field staff." },
      { question: "Can employees access it on mobile?", answer: "Yes. The employee self-service portal is fully responsive and available as a PWA — check attendance, apply for leave, download payslips, all from their phone." },
      { question: "How is data security handled?", answer: "Employee data is encrypted, access is role-based, and we maintain complete audit trails. The system is compliant with data protection best practices." },
    ],
  },
  {
    slug: "project-prototyping",
    icon: HiMiniLightBulb,
    title: "Project Prototyping",
    tagline: "Validate ideas fast, fail cheap, launch confidently",
    description:
      "Rapid MVP development and prototyping to test your idea in the real market before investing in full-scale development. We build functional prototypes in days, not months — helping you validate, iterate, and pivot quickly.",
    heroImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=600&fit=crop",
    features: [
      "Clickable prototypes in Figma within 48 hours",
      "Functional MVP with core features in 1-2 weeks",
      "User testing and feedback collection built-in",
      "Investor-ready demos and pitch decks",
      "Technical architecture planning for scale",
      "Market validation through real user data",
      "Pivot-friendly modular architecture",
      "Seamless transition from prototype to production",
    ],
    techStack: ["React", "Supabase", "Tailwind CSS", "Figma", "Vercel", "TypeScript", "Framer Motion"],
    process: [
      { step: 1, title: "Idea Workshop", description: "90-minute session to distill your idea into a clear value proposition, identify core features, and define success metrics." },
      { step: 2, title: "Rapid Prototyping", description: "Figma prototype in 48 hours followed by a functional MVP with core features in 1-2 weeks." },
      { step: 3, title: "User Testing", description: "Deploy to real users, collect feedback, analyze usage patterns, and identify what works and what doesn't." },
      { step: 4, title: "Iterate or Scale", description: "Based on validation data — pivot, iterate on features, or proceed to full-scale production development." },
    ],
    examples: [
      {
        title: "HealthTech Appointment Platform",
        industry: "Healthcare",
        description: "MVP for a doctor appointment marketplace — built in 10 days, tested with 50 doctors and 500 patients, validated the model, and secured seed funding of ₹1.5 Cr.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
        results: ["MVP in 10 days", "50 doctors onboarded", "500 patients tested", "₹1.5 Cr funding secured"],
      },
      {
        title: "EdTech Gamification Prototype",
        industry: "Education",
        description: "Interactive learning prototype with gamification elements — points, leaderboards, streaks — tested with 200 students to validate engagement hypothesis before full build.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
        results: ["Prototype in 7 days", "200 student testers", "Engagement: 4x baseline", "Full build approved"],
      },
      {
        title: "Logistics Tracking MVP",
        industry: "Logistics",
        description: "Real-time shipment tracking prototype with driver app, customer tracking link, and admin dashboard — validated with 3 logistics companies before production development.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        results: ["MVP in 2 weeks", "3 pilot companies", "Tracking accuracy: 98%", "Production greenlit"],
      },
    ],
    faqs: [
      { question: "How fast can you build an MVP?", answer: "A functional MVP with core features takes 1-2 weeks. A clickable prototype in Figma can be ready in 48 hours for initial validation and investor pitches." },
      { question: "What's included in the MVP?", answer: "Core user flows, authentication, basic data management, and the key differentiating feature of your product. We focus on what matters for validation." },
      { question: "Can the MVP code be used for the final product?", answer: "Yes! We build MVPs with production-quality code and scalable architecture, so there's no throwaway work when you're ready to scale." },
      { question: "How do you help with investor pitches?", answer: "We provide functional demos, usage analytics from beta testing, and can create investor-ready pitch materials showing traction and technical feasibility." },
    ],
  },
];
