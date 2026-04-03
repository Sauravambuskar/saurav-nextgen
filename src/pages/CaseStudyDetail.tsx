import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMiniArrowLeft, HiMiniArrowTopRightOnSquare, HiMiniCheckCircle, HiMiniSquares2X2, HiMiniXMark, HiMiniBolt, HiMiniChartBar } from "react-icons/hi2";
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
  "truvara-exim": {
    title: "TRUVARA EXIM",
    tag: "Import/Export",
    url: "https://truvaraaexim.com/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-330-1024x576.png",
    overview:
      "Truvara Exim is a global trade company specializing in import/export operations. They needed a professional digital platform to showcase their product catalog, build international credibility, and streamline trade inquiries.",
    challenge:
      "The company relied on WhatsApp and email for all trade communications with no centralized product catalog. International buyers had difficulty verifying legitimacy, and the lack of a professional online presence was costing them deals.",
    solution:
      "Developed a multilingual trade platform with a structured product catalog, inquiry management system, trade documentation resources, and SEO optimization targeting international markets. Integrated WhatsApp Business API for instant buyer communication.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Vercel", "WhatsApp API", "SEO Tools"],
    keyFeatures: [
      "Comprehensive product catalog with categories and filters",
      "Multi-language support for international buyers",
      "Trade inquiry management with automated responses",
      "SEO-optimized pages targeting global trade keywords",
      "WhatsApp Business integration for instant communication",
      "Professional company profile with certifications showcase",
    ],
    results: [
      { label: "International Inquiries", value: "↑ 180%" },
      { label: "Website Traffic", value: "↑ 250%" },
      { label: "Deal Conversion", value: "↑ 60%" },
      { label: "Response Time", value: "↓ 70%" },
    ],
  },
  "advanced-group": {
    title: "ADVANCED GROUP",
    tag: "Business",
    url: "https://theadvancedgroup.in/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-2026-01-06-135414-1024x576.png",
    overview:
      "The Advanced Group is a diversified business conglomerate that needed a unified corporate website to represent their multiple business verticals and establish a strong digital brand presence.",
    challenge:
      "Each business vertical had disconnected branding and no unified digital identity. Stakeholders and potential partners had difficulty understanding the group's full scope, and there was no centralized platform for corporate communications.",
    solution:
      "Designed and built a premium corporate website with a unified brand language, interactive business vertical showcases, leadership profiles, and an investor-relations section. Implemented smooth animations and a corporate-grade design system.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel", "Google Analytics"],
    keyFeatures: [
      "Unified brand identity across all business verticals",
      "Interactive business vertical showcase with animations",
      "Leadership and team profiles section",
      "Corporate news and updates section",
      "Contact forms routed to specific business divisions",
      "Mobile-responsive premium design",
    ],
    results: [
      { label: "Brand Recognition", value: "↑ 120%" },
      { label: "Partner Inquiries", value: "↑ 85%" },
      { label: "Page Views", value: "↑ 200%" },
      { label: "Bounce Rate", value: "↓ 40%" },
    ],
  },
  "jyoti-cleaning": {
    title: "JYOTI CLEANING",
    tag: "Services",
    url: "https://jyotishine.vercel.app/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-331-1024x576.png",
    overview:
      "Jyoti Cleaning Services needed a professional online platform to showcase their cleaning services, enable online booking, and build credibility in the competitive facility cleaning market.",
    challenge:
      "The business was entirely offline with no web presence. Customer acquisition relied solely on word-of-mouth and pamphlets. They had no system for booking management and were losing potential clients to competitors with online booking capabilities.",
    solution:
      "Built a clean, professional website with service catalogs, online booking functionality, customer testimonials, and before/after galleries. Implemented SEO for local search visibility and WhatsApp integration for quick inquiries.",
    techStack: ["React", "Tailwind CSS", "Vercel", "WhatsApp API", "Google My Business"],
    keyFeatures: [
      "Service catalog with detailed descriptions and pricing",
      "Online booking and inquiry system",
      "Before/after cleaning gallery showcase",
      "Customer testimonials and reviews section",
      "Local SEO optimization for city-level visibility",
      "WhatsApp quick-connect for instant quotes",
    ],
    results: [
      { label: "Online Leads", value: "↑ 300%" },
      { label: "Booking Rate", value: "↑ 150%" },
      { label: "Local Search Rank", value: "Top 5" },
      { label: "Customer Retention", value: "↑ 45%" },
    ],
  },
  "triveni-gaurakshan": {
    title: "TRIVENI GAURAKSHAN",
    tag: "NGO",
    url: "https://trivenigaurakshan.org/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-333.png",
    overview:
      "Triveni Gaurakshan is a non-profit organization dedicated to cow protection and welfare. They needed a digital platform to raise awareness, accept donations, and share their impact stories with supporters.",
    challenge:
      "The NGO had limited digital presence with no way to accept online donations. Volunteer coordination was manual, impact reporting was inconsistent, and they struggled to reach younger demographics who primarily engage online.",
    solution:
      "Created an emotionally engaging website with online donation integration, volunteer registration, impact stories with photo galleries, event calendars, and social media integration. Built a donor management system for transparency and reporting.",
    techStack: ["React", "Tailwind CSS", "Razorpay", "Vercel", "Cloudinary", "Google Analytics"],
    keyFeatures: [
      "Secure online donation gateway with Razorpay",
      "Volunteer registration and coordination system",
      "Impact stories with photo and video galleries",
      "Event calendar with registration capabilities",
      "Transparent fund utilization reporting",
      "Social media integration for broader reach",
    ],
    results: [
      { label: "Online Donations", value: "↑ 400%" },
      { label: "Volunteer Sign-ups", value: "↑ 200%" },
      { label: "Website Reach", value: "10K+/mo" },
      { label: "Donor Retention", value: "↑ 65%" },
    ],
  },
  "dr-bp-deshpande": {
    title: "DR B P DESHPANDE",
    tag: "Healthcare",
    url: "https://drbipindeshpande.com/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-334-1024x576.png",
    overview:
      "Dr. B P Deshpande is a renowned medical practitioner who needed a professional online presence to showcase expertise, manage patient appointments, and provide health education resources.",
    challenge:
      "The doctor's practice relied entirely on phone-based appointments with no online visibility. Patients couldn't find information about services, qualifications, or availability online, leading to lost potential patients to digitally-present competitors.",
    solution:
      "Built a professional medical practice website with detailed service information, doctor credentials showcase, online appointment booking, patient education blog, and testimonials. Implemented schema markup for healthcare SEO.",
    techStack: ["React", "Tailwind CSS", "Vercel", "Google Maps", "Schema.org", "WhatsApp API"],
    keyFeatures: [
      "Professional doctor profile with credentials and experience",
      "Online appointment booking system",
      "Detailed service and treatment information pages",
      "Patient education blog with health tips",
      "Google Maps integration for clinic location",
      "Healthcare schema markup for search visibility",
    ],
    results: [
      { label: "Online Appointments", value: "↑ 250%" },
      { label: "Patient Inquiries", value: "↑ 180%" },
      { label: "Google Visibility", value: "↑ 300%" },
      { label: "Patient Satisfaction", value: "95%" },
    ],
  },
  "royal-residency": {
    title: "ROYAL RESIDENCY",
    tag: "Hospitality",
    url: "https://hotelroyalenclave.com/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-335.png",
    overview:
      "Royal Residency is a premium hotel that needed a modern booking platform to showcase their rooms, amenities, and attract both business and leisure travelers through direct online bookings.",
    challenge:
      "The hotel was heavily dependent on OTA platforms (MakeMyTrip, Booking.com) paying 15-25% commissions. They had no direct booking channel, limited online brand presence, and couldn't capture guest data for remarketing.",
    solution:
      "Developed a visually stunning hotel website with a direct booking engine, virtual room tours, amenity showcases, event space booking, and guest review integration. Implemented rate parity management and a loyalty program signup.",
    techStack: ["React", "Tailwind CSS", "Vercel", "Google Maps", "WhatsApp API", "Google Analytics"],
    keyFeatures: [
      "Direct room booking engine with real-time availability",
      "Virtual room tours with high-quality photography",
      "Event and banquet space showcase with inquiry forms",
      "Guest reviews and testimonials integration",
      "Local attractions and travel guide section",
      "Mobile-optimized booking experience",
    ],
    results: [
      { label: "Direct Bookings", value: "↑ 200%" },
      { label: "OTA Dependency", value: "↓ 40%" },
      { label: "Revenue/Booking", value: "↑ 25%" },
      { label: "Guest Satisfaction", value: "4.5/5" },
    ],
  },
  "sp-residency": {
    title: "SP RESIDENCY",
    tag: "Hospitality",
    url: "https://spresidencyhostel.com/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-336-1024x576.png",
    overview:
      "SP Residency is a hostel and budget accommodation provider that needed an online platform to attract students and working professionals looking for affordable long-term stays.",
    challenge:
      "The hostel had no online presence and relied on local brokers for occupancy. Vacancy management was manual, tenant onboarding was paper-based, and they had no way to showcase facilities to out-of-town prospects.",
    solution:
      "Built a modern hostel website with room listings, virtual facility tours, online inquiry and booking system, tenant testimonials, and a facilities showcase. Implemented local SEO targeting students and professionals.",
    techStack: ["React", "Tailwind CSS", "Vercel", "Google Maps", "WhatsApp API"],
    keyFeatures: [
      "Room listings with photos, pricing, and amenities",
      "Online inquiry and pre-booking system",
      "Virtual facility tour with image galleries",
      "Tenant testimonials and review section",
      "Nearby landmarks and connectivity information",
      "Mobile-first responsive design",
    ],
    results: [
      { label: "Online Inquiries", value: "↑ 350%" },
      { label: "Occupancy Rate", value: "↑ 30%" },
      { label: "Broker Dependency", value: "↓ 60%" },
      { label: "Tenant Satisfaction", value: "4.3/5" },
    ],
  },
  "limson-engineering": {
    title: "LIMSON ENGINEERING",
    tag: "Engineering",
    url: "https://limson.co.in/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-337.png",
    overview:
      "Limson Engineering is an industrial engineering solutions company that needed a professional digital presence to showcase their capabilities, project portfolio, and attract enterprise clients.",
    challenge:
      "The company had no digital footprint and was losing large contracts to competitors with professional websites. Their project portfolio existed only in physical brochures, and client communication was entirely phone-based.",
    solution:
      "Developed a professional engineering company website with a detailed project portfolio, service showcases, capability statements, client testimonials, and an inquiry management system. Optimized for B2B search visibility.",
    techStack: ["React", "Tailwind CSS", "Vercel", "Google Analytics", "SEO Optimization"],
    keyFeatures: [
      "Detailed project portfolio with case studies",
      "Service and capability showcase with specifications",
      "Client testimonials and partnership highlights",
      "Technical specification download section",
      "B2B-optimized contact and inquiry forms",
      "Industry-specific SEO optimization",
    ],
    results: [
      { label: "Website Inquiries", value: "↑ 200%" },
      { label: "Contract Value", value: "↑ 45%" },
      { label: "Client Reach", value: "3x wider" },
      { label: "Brand Credibility", value: "↑ 80%" },
    ],
  },
  "global-packaging": {
    title: "GLOBAL PACKAGING",
    tag: "Manufacturing",
    url: "https://globalpkg.net/",
    image: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-339.png",
    overview:
      "Global Packaging is an industrial packaging manufacturer that needed a digital platform to showcase their product range, manufacturing capabilities, and serve both domestic and international clients.",
    challenge:
      "Product catalogs were shared as PDFs over email, making it hard for buyers to browse and compare options. The company had no online presence, and international buyers couldn't discover them through search engines.",
    solution:
      "Built a comprehensive product catalog website with detailed specifications, manufacturing capability showcases, quality certification displays, and a multi-language inquiry system. Implemented product-level SEO for global discoverability.",
    techStack: ["React", "Tailwind CSS", "Vercel", "Cloudinary", "Google Analytics", "SEO Tools"],
    keyFeatures: [
      "Interactive product catalog with specifications",
      "Manufacturing capability and capacity showcase",
      "Quality certifications and compliance display",
      "Multi-market inquiry system with routing",
      "Product-level SEO for global search visibility",
      "Downloadable product spec sheets",
    ],
    results: [
      { label: "International Leads", value: "↑ 250%" },
      { label: "Catalog Engagement", value: "↑ 180%" },
      { label: "Export Orders", value: "↑ 70%" },
      { label: "Search Visibility", value: "↑ 300%" },
    ],
  },
  "sja-land-developers": {
    title: "SJA LAND DEVELOPERS",
    tag: "Real Estate",
    url: "https://sjalanddevelopers.com/",
    image: "/screenshots/sjalanddevelopers.png",
    overview:
      "SJA Land Developers is a real estate development company that needed a premium digital platform to showcase their land projects, build buyer trust, and generate qualified leads for property sales.",
    challenge:
      "Property listings were scattered across classifieds with inconsistent information. Buyers couldn't verify project details online, site visit bookings were phone-only, and the company lacked a cohesive brand image in the competitive real estate market.",
    solution:
      "Created a premium real estate website with interactive project listings, virtual site tours, document verification section, online site visit booking, and EMI calculator. Implemented RERA compliance display and location-based project discovery.",
    techStack: ["React", "Tailwind CSS", "Vercel", "Google Maps", "WhatsApp API", "Google Analytics"],
    keyFeatures: [
      "Interactive property listings with filters and maps",
      "Virtual site tour galleries with drone imagery",
      "EMI calculator and pricing transparency tools",
      "Online site visit booking system",
      "RERA compliance and document verification display",
      "Location-based project discovery with Google Maps",
    ],
    results: [
      { label: "Qualified Leads", value: "↑ 300%" },
      { label: "Site Visit Bookings", value: "↑ 200%" },
      { label: "Buyer Trust Score", value: "↑ 75%" },
      { label: "Sales Cycle", value: "↓ 30%" },
    ],
  },
  "sja-lands": {
    title: "SJA LANDS",
    tag: "Real Estate",
    url: "https://www.sjalands.in/",
    image: "/screenshots/sjalands.png",
    overview:
      "SJA Lands is a real estate listing platform focused on land and plot sales, requiring a user-friendly interface for buyers to discover, compare, and inquire about available properties.",
    challenge:
      "The existing property listing process was manual with no searchable database. Buyers had to call for every property detail, and the sales team spent hours on repetitive information sharing instead of closing deals.",
    solution:
      "Built a streamlined property listing platform with advanced search and filter capabilities, property comparison tools, automated inquiry routing, and a CRM-lite system for the sales team to track and follow up on leads.",
    techStack: ["React", "Tailwind CSS", "Vercel", "Google Maps", "WhatsApp API"],
    keyFeatures: [
      "Advanced property search with area and budget filters",
      "Property comparison tool for side-by-side evaluation",
      "Automated inquiry routing to sales team",
      "Property detail pages with location maps",
      "Saved searches and wishlist functionality",
      "Mobile-optimized property browsing experience",
    ],
    results: [
      { label: "Property Inquiries", value: "↑ 250%" },
      { label: "Sales Team Efficiency", value: "↑ 60%" },
      { label: "Time to Response", value: "↓ 80%" },
      { label: "Conversion Rate", value: "↑ 40%" },
    ],
  },
  "akash-enterprises": {
    title: "AKASH ENTERPRISES",
    tag: "Signage",
    url: "https://akashsignage.vercel.app/",
    image: "/screenshots/akashsignage.png",
    overview:
      "Akash Enterprises is a signage manufacturing company that needed a digital showcase of their products and services to attract commercial and corporate clients for signage solutions.",
    challenge:
      "The company had no online portfolio and relied on physical samples for client presentations. Potential clients in other cities couldn't evaluate their work, and the quotation process was slow and entirely manual.",
    solution:
      "Developed a visually rich portfolio website with product categories, project galleries, material specifications, and an online quotation request system. Implemented industrial SEO targeting signage-related search terms.",
    techStack: ["React", "Tailwind CSS", "Vercel", "Cloudinary", "WhatsApp API"],
    keyFeatures: [
      "Product catalog with signage categories and specs",
      "Project portfolio with high-quality imagery",
      "Online quotation request with specifications form",
      "Material and finishing options showcase",
      "Client logo wall and testimonials",
      "Industrial SEO for signage market visibility",
    ],
    results: [
      { label: "Quote Requests", value: "↑ 200%" },
      { label: "Client Reach", value: "5x wider" },
      { label: "Project Inquiries", value: "↑ 150%" },
      { label: "Brand Visibility", value: "↑ 250%" },
    ],
  },
  "dharma-voice": {
    title: "DHARMA VOICE",
    tag: "Wellness",
    url: "https://dharma-voice.vercel.app/",
    image: "/screenshots/dharma-voice.png",
    overview:
      "Dharma Voice is an AI-powered spiritual guidance platform that provides wisdom from the Bhagavad Gita, offering personalized insights and daily inspiration for seekers of spiritual knowledge.",
    challenge:
      "Access to Bhagavad Gita wisdom was limited to physical books and static websites. Modern seekers wanted personalized, context-aware spiritual guidance that could address their specific life situations in an accessible format.",
    solution:
      "Built an AI-powered platform using large language models fine-tuned on Bhagavad Gita teachings. Created a conversational interface for personalized spiritual guidance, daily verse delivery, and thematic exploration of ancient wisdom.",
    techStack: ["React", "Tailwind CSS", "OpenAI API", "Vercel", "Supabase", "Framer Motion"],
    keyFeatures: [
      "AI-powered conversational spiritual guidance",
      "Personalized verse recommendations based on context",
      "Daily inspiration with Gita verses and commentary",
      "Thematic exploration of teachings by life topics",
      "Beautiful, meditative UI with calming animations",
      "Bookmark and share favorite verses and insights",
    ],
    results: [
      { label: "Daily Active Users", value: "500+" },
      { label: "Avg Session Duration", value: "8 min" },
      { label: "User Satisfaction", value: "4.8/5" },
      { label: "Verses Explored", value: "10K+" },
    ],
  },
  "the-ocd-voice": {
    title: "THE OCD VOICE",
    tag: "Healthcare",
    url: "https://theocdvoice.vercel.app/",
    image: "/screenshots/theocdvoice.png",
    overview:
      "The OCD Voice is a mental health platform dedicated to OCD recovery coaching and awareness, providing resources, coaching programs, and community support for individuals struggling with OCD.",
    challenge:
      "OCD remains stigmatized and misunderstood. The coach had valuable content and programs but no platform to reach those in need. Existing mental health platforms were generic and didn't address OCD-specific recovery journeys.",
    solution:
      "Created a dedicated OCD wellness platform with coaching program showcases, educational resources, recovery stories, and a calming UI designed for anxiety-sensitive users. Implemented accessible design with reduced motion options.",
    techStack: ["React", "Tailwind CSS", "Vercel", "Calendly", "WhatsApp API", "Google Analytics"],
    keyFeatures: [
      "Coaching program showcase with session booking",
      "OCD education resources and recovery guides",
      "Recovery stories and community testimonials",
      "Anxiety-sensitive UI with reduced motion support",
      "Calendly integration for session scheduling",
      "Resource library with articles and exercises",
    ],
    results: [
      { label: "Coaching Signups", value: "↑ 300%" },
      { label: "Resource Downloads", value: "2K+/mo" },
      { label: "Community Reach", value: "↑ 400%" },
      { label: "Client Satisfaction", value: "4.9/5" },
    ],
  },
  "ignite-indians": {
    title: "IGNITE INDIANS",
    tag: "Digital Agency",
    url: "https://igniteindians.com/",
    image: "/screenshots/igniteindians.png",
    overview:
      "Ignite Indians is a digital marketing and business growth agency that needed a powerful website to showcase their services, case studies, and attract both startups and established businesses as clients.",
    challenge:
      "The agency was pitching through slide decks and PDFs with no live portfolio. Potential clients couldn't evaluate their capabilities online, and the lack of social proof was limiting their ability to close enterprise deals.",
    solution:
      "Built a dynamic agency website with service showcases, interactive case studies, client testimonials, team profiles, and a lead generation funnel. Implemented conversion tracking and A/B testing for continuous optimization.",
    techStack: ["WordPress", "Elementor", "Google Analytics", "Facebook Pixel", "SEO Tools", "CRM Integration"],
    keyFeatures: [
      "Dynamic service showcase with detailed offerings",
      "Interactive case studies with measurable results",
      "Client testimonials and brand logo showcase",
      "Lead generation funnel with smart routing",
      "Blog with SEO-optimized content marketing",
      "Performance tracking and analytics dashboard",
    ],
    results: [
      { label: "Client Inquiries", value: "↑ 250%" },
      { label: "Website Traffic", value: "↑ 400%" },
      { label: "Deal Closure Rate", value: "↑ 55%" },
      { label: "Brand Authority", value: "↑ 200%" },
    ],
  },
  "dr-milind-bapat": {
    title: "DR MILIND BAPAT",
    tag: "Healthcare",
    url: "https://drmilindbapat.in/",
    image: "/screenshots/drmilindbapat.png",
    overview:
      "Dr. Milind Bapat is a specialist in urology and andrology who needed a professional medical website to establish authority, educate patients, and streamline appointment management.",
    challenge:
      "The specialist practice had no online presence in a competitive medical field. Patients searching for urology specialists online couldn't find the practice, and all appointments were managed through phone calls with frequent scheduling conflicts.",
    solution:
      "Developed a professional medical practice website with specialization details, treatment information, patient education content, online appointment booking, and healthcare SEO to rank for specialty-specific search terms.",
    techStack: ["React", "Tailwind CSS", "Vercel", "Google Maps", "Schema.org", "WhatsApp API"],
    keyFeatures: [
      "Specialty-focused doctor profile with credentials",
      "Treatment and procedure information pages",
      "Online appointment booking with availability display",
      "Patient education section with condition guides",
      "Healthcare schema markup for specialist search visibility",
      "Multilingual support for patient accessibility",
    ],
    results: [
      { label: "Online Appointments", value: "↑ 280%" },
      { label: "Search Ranking", value: "Top 3" },
      { label: "Patient Inquiries", value: "↑ 200%" },
      { label: "Practice Growth", value: "↑ 45%" },
    ],
  },
  "mountain-breeze": {
    title: "MOUNTAIN BREEZE",
    tag: "Adventure",
    url: "https://mountainbreeze.farm/",
    image: "/screenshots/mountainbreeze.png",
    overview:
      "Mountain Breeze is a villa and adventure experience company offering unique farmstay and outdoor activities. They needed an immersive digital platform to showcase their experiences and drive direct bookings.",
    challenge:
      "The property was listed only on Airbnb with high commission costs. There was no brand identity, the unique adventure offerings weren't highlighted, and they had no direct booking capability or guest relationship management.",
    solution:
      "Created an immersive, visually stunning website with full-screen imagery, adventure activity showcases, direct booking system, virtual property tours, and guest review integration. Implemented seasonal pricing and package deals.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel", "Google Maps", "WhatsApp API"],
    keyFeatures: [
      "Immersive full-screen imagery and virtual tours",
      "Adventure activity catalog with booking options",
      "Direct booking system with seasonal pricing",
      "Guest reviews and experience testimonials",
      "Package deals and group booking capabilities",
      "Location guide with nearby attractions",
    ],
    results: [
      { label: "Direct Bookings", value: "↑ 350%" },
      { label: "Airbnb Dependency", value: "↓ 50%" },
      { label: "Revenue/Booking", value: "↑ 30%" },
      { label: "Guest Satisfaction", value: "4.7/5" },
    ],
  },
  "advance-smt": {
    title: "ADVANCE SMT",
    tag: "EdTech SaaS",
    url: "https://advancesmt.com/",
    image: "/screenshots/advancesmt.png",
    overview:
      "Advance SMT is a smart LMS platform by Advanced FMS and Security Services, designed to empower learning and skill development for their workforce across corporate offices, hospitals, schools, industries, and more with over 10 years of pan-India presence.",
    challenge:
      "The organization needed to train and upskill a large distributed workforce across multiple service verticals. Traditional classroom training was costly, inconsistent, and hard to track. There was no centralized system for course management, progress tracking, or certification.",
    solution:
      "Built a comprehensive LMS platform with course catalogs, video-based learning modules, progress dashboards, login/authentication for employees, and an admin dashboard for managing content and tracking learner performance across locations.",
    techStack: ["WordPress", "LMS Plugin", "PHP", "MySQL", "WhatsApp API", "Responsive Design"],
    keyFeatures: [
      "Course catalog with categorized training modules",
      "Employee login and personalized dashboards",
      "Video-based learning with progress tracking",
      "Admin panel for content and user management",
      "Certificate generation on course completion",
      "Mobile-responsive design for on-the-go learning",
    ],
    results: [
      { label: "Training Reach", value: "↑ 300%" },
      { label: "Training Cost", value: "↓ 60%" },
      { label: "Completion Rate", value: "85%" },
      { label: "Locations Covered", value: "Pan-India" },
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
            <HiMiniArrowLeft size={16} /> Back to Portfolio
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
                  <HiMiniXMark className="text-destructive" size={22} />
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
                  <HiMiniBolt className="text-primary" size={22} />
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
                <HiMiniSquares2X2 className="text-secondary" size={22} />
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
                <HiMiniCheckCircle className="text-primary" size={22} />
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
                  <HiMiniCheckCircle
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
                <HiMiniChartBar className="text-accent" size={22} />
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
