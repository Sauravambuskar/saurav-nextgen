import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  HiMiniArrowTopRightOnSquare,
  HiMiniShoppingCart,
  HiMiniBuildingLibrary,
  HiMiniAcademicCap,
  HiMiniBuildingOffice2,
  HiMiniGlobeAlt,
  HiMiniHeart,
  HiMiniWrench,
  HiMiniBuildingStorefront,
  HiMiniMapPin,
  HiMiniCube,
  HiMiniCog6Tooth,
  HiMiniBeaker,
  HiMiniTruck,
  HiMiniScale,
} from "react-icons/hi2";

const industryIcons: Record<string, React.ElementType> = {
  "E-commerce": HiMiniShoppingCart,
  "FinTech": HiMiniBuildingLibrary,
  "EdTech SaaS": HiMiniAcademicCap,
  "Enterprise": HiMiniBuildingOffice2,
  "Import/Export": HiMiniTruck,
  "Healthcare": HiMiniBeaker,
  "Business": HiMiniBuildingOffice2,
  "Services": HiMiniWrench,
  "NGO": HiMiniHeart,
  "Hospitality": HiMiniBuildingStorefront,
  "Engineering": HiMiniCog6Tooth,
  "Manufacturing": HiMiniCube,
  "Real Estate": HiMiniMapPin,
  "Signage": HiMiniCog6Tooth,
  "Technology": HiMiniGlobeAlt,
  "Wellness": HiMiniHeart,
  "Digital Agency": HiMiniGlobeAlt,
  "Adventure": HiMiniMapPin,
  "Legal Services": HiMiniScale,
  "LegalTech SaaS": HiMiniScale,
};

const featured = [
  { title: "OSTREE", tag: "E-commerce", url: "https://ostree.in/", desc: "Scalable fashion platform with high availability and performance optimization.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-324-1024x576.png" },
  { title: "SJA MICRO FINANCE", tag: "FinTech", url: "https://sjamicrofoundation.com/", desc: "Secure microfinance platform with reliable infrastructure.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-327-1024x576.png" },
  { title: "STUDDY LMS", tag: "EdTech SaaS", url: "https://studdyy.vercel.app/", desc: "Learning platform used by 5000+ students.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-332-1024x576.png" },
  { title: "ADVANCE FMS", tag: "Enterprise", url: "https://advancefms.in/", desc: "Facility management digital platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-326-1024x576.png" },
  { title: "TRUVARA EXIM", tag: "Import/Export", url: "https://truvaraaexim.com/", desc: "Global trade platform improving visibility.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-330-1024x576.png" },
  { title: "LIMAYE EYE CARE", tag: "Healthcare", url: "https://limayeeyehospital.com/", desc: "Patient-focused healthcare platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-338-1024x576.png" },
];

const allProjects = [
  { title: "ADVANCED GROUP", tag: "Business", url: "https://theadvancedgroup.in/", desc: "Corporate group digital presence.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-2026-01-06-135414-1024x576.png" },
  { title: "JYOTI CLEANING", tag: "Services", url: "https://jyotishine.vercel.app/", desc: "Professional cleaning services platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-331-1024x576.png" },
  { title: "TRIVENI GAURAKSHAN", tag: "NGO", url: "https://trivenigaurakshan.org/", desc: "Non-profit organization platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-333.png" },
  { title: "DR B P DESHPANDE", tag: "Healthcare", url: "https://drbipindeshpande.com/", desc: "Doctor's professional website.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-334-1024x576.png" },
  { title: "ROYAL RESIDENCY", tag: "Hospitality", url: "https://hotelroyalenclave.com/", desc: "Hotel booking and information platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-335.png" },
  { title: "SP RESIDENCY", tag: "Hospitality", url: "https://spresidencyhostel.com/", desc: "Hostel management platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-336-1024x576.png" },
  { title: "LIMSON ENGINEERING", tag: "Engineering", url: "https://limson.co.in/", desc: "Engineering solutions company website.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-337.png" },
  { title: "GLOBAL PACKAGING", tag: "Manufacturing", url: "https://globalpkg.net/", desc: "Industrial packaging solutions platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-339.png" },
  { title: "SJA LAND DEVELOPERS", tag: "Real Estate", url: "https://sjalanddevelopers.com/", desc: "Land development company website.", thumb: "/screenshots/sjalanddevelopers.png" },
  { title: "SJA LANDS", tag: "Real Estate", url: "https://www.sjalands.in/", desc: "Real estate listings platform.", thumb: "/screenshots/sjalands.png" },
  { title: "AKASH ENTERPRISES", tag: "Signage", url: "https://akashsignage.vercel.app/", desc: "Signage manufacturing company.", thumb: "/screenshots/akashsignage.png" },
  { title: "QUANTOM CLOUDS", tag: "Technology", url: "https://quantomclouds.vercel.app/", desc: "Cloud, data & AI engineering solutions platform.", thumb: "/screenshots/quantomclouds.png" },
  { title: "DHARMA VOICE", tag: "Wellness", url: "https://dharma-voice.vercel.app/", desc: "AI-powered spiritual guidance from Bhagavad Gita.", thumb: "/screenshots/dharma-voice.png" },
  { title: "THE OCD VOICE", tag: "Healthcare", url: "https://theocdvoice.vercel.app/", desc: "OCD recovery coaching and wellness platform.", thumb: "/screenshots/theocdvoice.png" },
  { title: "IGNITE INDIANS", tag: "Digital Agency", url: "https://igniteindians.com/", desc: "Digital marketing and business growth agency.", thumb: "/screenshots/igniteindians.png" },
  { title: "DR MILIND BAPAT", tag: "Healthcare", url: "https://drmilindbapat.in/", desc: "Urology & andrology specialist practice website.", thumb: "/screenshots/drmilindbapat.png" },
  { title: "MOUNTAIN BREEZE", tag: "Adventure", url: "https://mountainbreeze.farm/", desc: "Villa and adventure experience company platform.", thumb: "/screenshots/mountainbreeze.png" },
  { title: "ADVANCE SMT", tag: "EdTech SaaS", url: "https://advancesmt.com/", desc: "LMS platform for skill development and training management.", thumb: "/screenshots/advancesmt.png" },
  { title: "CHWINK REAL ESTATE", tag: "Real Estate", url: "https://www.chwink.com/", desc: "Property consultancy website for Pune developers, trusted by Hyundai, Tata & POSCO since 1987.", thumb: "/screenshots/chwink.png" },
  { title: "AAURA REALTY", tag: "Real Estate", url: "https://www.aaurarealty.com/", desc: "Property broker platform for flats, offices, plots, resale and rentals across Pune.", thumb: "/screenshots/aaurarealty.png" },
  { title: "LAWMIND AI", tag: "LegalTech SaaS", url: "https://crm.advmdsarda.in/login", desc: "AI-powered legal practice management CRM for advocates at Akola & Washim courts.", thumb: "/screenshots/lawmind-crm.png" },
  { title: "COSMOS REAL ESTATE", tag: "Real Estate", url: "https://www.cosmosrealestate.co.in/", desc: "NAR-certified property dealer platform for buying, selling & renting in Pune since 2004.", thumb: "/screenshots/cosmosrealestate.png" },
  { title: "OPSDECK", tag: "Technology", url: "https://opendeskk-nxxv.vercel.app/", desc: "Unified DevOps control plane — pipelines, incidents, runbooks & utilities in one dashboard.", thumb: "/screenshots/opendesk.png" },
  { title: "ADV. M.D. SARDA & ASSOCIATES", tag: "Legal Services", url: "https://advmdsarda.in/", desc: "Law firm website for Agricultural Law, IPR, Corporate Law & Litigation experts in Akola.", thumb: "/screenshots/advmdsarda.png" },
];

type ProjectItem = { title: string; tag: string; url: string; desc: string; thumb: string };

const ProjectCard = ({ project, index }: { project: ProjectItem; index: number }) => {
  const Icon = industryIcons[project.tag] || HiMiniBuildingOffice2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="glass-card-hover overflow-hidden group"
    >
      {/* Preview thumbnail */}
      <div className="relative h-36 sm:h-48 overflow-hidden border-b border-border">
        <img
          src={project.thumb}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="btn-primary text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 inline-flex items-center gap-2">
            <HiMiniArrowTopRightOnSquare size={14} /> View Live
          </span>
        </a>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-2 sm:mb-3">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
            <Icon size={10} className="sm:hidden" />
            <Icon size={12} className="hidden sm:block" />
            {project.tag}
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <HiMiniArrowTopRightOnSquare size={16} className="sm:hidden" />
            <HiMiniArrowTopRightOnSquare size={18} className="hidden sm:block" />
          </a>
        </div>
        <h3 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">{project.title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{project.desc}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="section-padding relative bg-background-secondary" ref={ref}>
      <div className="glow-orb w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-secondary bottom-0 left-0 opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">30+ production projects across multiple industries</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {!showAll ? (
          <div className="text-center mt-8 sm:mt-12">
            <button onClick={() => setShowAll(true)} className="btn-primary text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3">
              View All Projects
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 sm:mt-12"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
              More <span className="gradient-text">Projects</span>
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {allProjects.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
