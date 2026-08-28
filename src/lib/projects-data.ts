import {
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
  HiMiniMegaphone,
  HiMiniIdentification,
} from "react-icons/hi2";

export interface ProjectItem {
  title: string;
  tag: string;
  url: string;
  desc: string;
  thumb: string;
  /** Matches a key in caseStudiesData, so cards can deep-link to the write-up. */
  caseStudyId: string;
  /** Surfaced in the homepage Projects grid; the rest live on /projects. */
  featured?: boolean;
}

export const industryIcons: Record<string, React.ElementType> = {
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
  "B2B Marketing": HiMiniMegaphone,
  "GovTech": HiMiniIdentification,
};

export const projects: ProjectItem[] = [
  { title: "OSTREE", tag: "E-commerce", url: "https://ostree.in/", desc: "Scalable fashion platform with high availability and performance optimization.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-324-1024x576.png", caseStudyId: "ostree", featured: true },
  { title: "SJA MICRO FINANCE", tag: "FinTech", url: "https://sjamicrofoundation.com/", desc: "Secure microfinance platform with reliable infrastructure.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-327-1024x576.png", caseStudyId: "sja-microfinance", featured: true },
  { title: "STUDDY LMS", tag: "EdTech SaaS", url: "https://studdyy.vercel.app/", desc: "Learning platform used by 5000+ students.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-332-1024x576.png", caseStudyId: "studdy-lms", featured: true },
  { title: "ADVANCE FMS", tag: "Enterprise", url: "https://advancefms.in/", desc: "Facility management digital platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-326-1024x576.png", caseStudyId: "advance-fms", featured: true },
  { title: "TRUVARA EXIM", tag: "Import/Export", url: "https://truvaraaexim.com/", desc: "Global trade platform improving visibility.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-330-1024x576.png", caseStudyId: "truvara-exim", featured: true },
  { title: "LIMAYE EYE CARE", tag: "Healthcare", url: "https://limayeeyehospital.com/", desc: "Patient-focused healthcare platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-338-1024x576.png", caseStudyId: "limaye-eye-care", featured: true },

  { title: "ADVANCED GROUP", tag: "Business", url: "https://theadvancedgroup.in/", desc: "Corporate group digital presence.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-2026-01-06-135414-1024x576.png", caseStudyId: "advanced-group" },
  { title: "JYOTI CLEANING", tag: "Services", url: "https://jyotishine.vercel.app/", desc: "Professional cleaning services platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-331-1024x576.png", caseStudyId: "jyoti-cleaning" },
  { title: "TRIVENI GAURAKSHAN", tag: "NGO", url: "https://trivenigaurakshan.org/", desc: "Non-profit organization platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-333.png", caseStudyId: "triveni-gaurakshan" },
  { title: "DR B P DESHPANDE", tag: "Healthcare", url: "https://drbipindeshpande.com/", desc: "Doctor's professional website.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-334-1024x576.png", caseStudyId: "dr-bp-deshpande" },
  { title: "ROYAL RESIDENCY", tag: "Hospitality", url: "https://hotelroyalenclave.com/", desc: "Hotel booking and information platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-335.png", caseStudyId: "royal-residency" },
  { title: "SP RESIDENCY", tag: "Hospitality", url: "https://spresidencyhostel.com/", desc: "Hostel management platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-336-1024x576.png", caseStudyId: "sp-residency" },
  { title: "LIMSON ENGINEERING", tag: "Engineering", url: "https://limson.co.in/", desc: "Engineering solutions company website.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-337.png", caseStudyId: "limson-engineering" },
  { title: "GLOBAL PACKAGING", tag: "Manufacturing", url: "https://globalpkg.net/", desc: "Industrial packaging solutions platform.", thumb: "https://igniteindians.com/wp-content/uploads/2026/01/Screenshot-339.png", caseStudyId: "global-packaging" },
  { title: "SJA LAND DEVELOPERS", tag: "Real Estate", url: "https://sjalanddevelopers.com/", desc: "Land development company website.", thumb: "/screenshots/sjalanddevelopers.png", caseStudyId: "sja-land-developers" },
  { title: "SJA LANDS", tag: "Real Estate", url: "https://www.sjalands.in/", desc: "Real estate listings platform.", thumb: "/screenshots/sjalands.png", caseStudyId: "sja-lands" },
  { title: "AKASH ENTERPRISES", tag: "Signage", url: "https://akashsignage.vercel.app/", desc: "Signage manufacturing company.", thumb: "/screenshots/akashsignage.png", caseStudyId: "akash-enterprises" },
  { title: "QUANTOM CLOUDS", tag: "Technology", url: "https://quantomclouds.vercel.app/", desc: "Cloud, data & AI engineering solutions platform.", thumb: "/screenshots/quantomclouds.png", caseStudyId: "quantom-clouds" },
  { title: "DHARMA VOICE", tag: "Wellness", url: "https://dharma-voice.vercel.app/", desc: "AI-powered spiritual guidance from Bhagavad Gita.", thumb: "/screenshots/dharma-voice.png", caseStudyId: "dharma-voice" },
  { title: "THE OCD VOICE", tag: "Healthcare", url: "https://theocdvoice.vercel.app/", desc: "OCD recovery coaching and wellness platform.", thumb: "/screenshots/theocdvoice.png", caseStudyId: "the-ocd-voice" },
  { title: "IGNITE INDIANS", tag: "Digital Agency", url: "https://igniteindians.com/", desc: "Digital marketing and business growth agency.", thumb: "/screenshots/igniteindians.png", caseStudyId: "ignite-indians" },
  { title: "DR MILIND BAPAT", tag: "Healthcare", url: "https://drmilindbapat.in/", desc: "Urology & andrology specialist practice website.", thumb: "/screenshots/drmilindbapat.png", caseStudyId: "dr-milind-bapat" },
  { title: "MOUNTAIN BREEZE", tag: "Adventure", url: "https://mountainbreeze.farm/", desc: "Villa and adventure experience company platform.", thumb: "/screenshots/mountainbreeze.png", caseStudyId: "mountain-breeze" },
  { title: "ADVANCE SMT", tag: "EdTech SaaS", url: "https://advancesmt.com/", desc: "LMS platform for skill development and training management.", thumb: "/screenshots/advancesmt.png", caseStudyId: "advance-smt" },
  { title: "CHWINK REAL ESTATE", tag: "Real Estate", url: "https://www.chwink.com/", desc: "Property consultancy website for Pune developers, trusted by Hyundai, Tata & POSCO since 1987.", thumb: "/screenshots/chwink.png", caseStudyId: "chwink" },
  { title: "AAURA REALTY", tag: "Real Estate", url: "https://www.aaurarealty.com/", desc: "Property broker platform for flats, offices, plots, resale and rentals across Pune.", thumb: "/screenshots/aaurarealty.png", caseStudyId: "aaura-realty" },
  { title: "LAWMIND AI", tag: "LegalTech SaaS", url: "https://crm.advmdsarda.in/login", desc: "AI-powered legal practice management CRM for advocates at Akola & Washim courts.", thumb: "/screenshots/lawmind-crm.png", caseStudyId: "lawmind-ai" },
  { title: "COSMOS REAL ESTATE", tag: "Real Estate", url: "https://www.cosmosrealestate.co.in/", desc: "NAR-certified property dealer platform for buying, selling & renting in Pune since 2004.", thumb: "/screenshots/cosmosrealestate.png", caseStudyId: "cosmos-real-estate" },
  { title: "OPSDECK", tag: "Technology", url: "https://opendeskk-nxxv.vercel.app/", desc: "Unified DevOps control plane — pipelines, incidents, runbooks & utilities in one dashboard.", thumb: "/screenshots/opendesk.png", caseStudyId: "opsdeck" },
  { title: "ADV. M.D. SARDA & ASSOCIATES", tag: "Legal Services", url: "https://advmdsarda.in/", desc: "Law firm website for Agricultural Law, IPR, Corporate Law & Litigation experts in Akola.", thumb: "/screenshots/advmdsarda.png", caseStudyId: "adv-md-sarda" },
  { title: "THE SALESBRIDGE", tag: "B2B Marketing", url: "https://thesalesbridge.com/", desc: "AI-powered B2B demand generation platform for qualified leads and predictable revenue pipelines.", thumb: "/screenshots/thesalesbridge.png", caseStudyId: "the-salesbridge" },
  { title: "SILK THREADS", tag: "E-commerce", url: "https://silkthreads.com/", desc: "Designer Indian ethnic wear e-commerce store in Dallas — bridal, womenswear & custom menswear.", thumb: "/screenshots/silkthreads.png", caseStudyId: "silk-threads" },
  { title: "LABOUR CARD GENERATOR", tag: "GovTech", url: "https://labourcard.vercel.app/", desc: "Digital worker identification system generating printable labour ID cards with photo upload & PDF export.", thumb: "/screenshots/labourcard.png", caseStudyId: "labour-card" },
  { title: "SHIV UDYOG SAHAKAR SENA", tag: "NGO", url: "https://shivudhyog.vercel.app/", desc: "Federation platform for an entrepreneur community driving cooperatives, skill development & rural growth.", thumb: "/screenshots/shivudhyog.png", caseStudyId: "shiv-udyog" },
  { title: "AL RAK ASPIRATIONS", tag: "Real Estate", url: "https://al-rak-aspirations.vercel.app/", desc: "Investment landing platform for branded residences in Ras Al Khaimah with returns-focused conversion flow.", thumb: "/screenshots/alrak-aspirations.png", caseStudyId: "al-rak-aspirations" },
  { title: "KUTE HOSPITAL", tag: "Healthcare", url: "https://www.kutehospital.com/", desc: "Multi-specialty hospital platform with laparoscopy, 24×7 ICU & emergency care and appointment booking.", thumb: "/screenshots/kutehospital.png", caseStudyId: "kute-hospital" },
];

export const featuredProjects = projects.filter((p) => p.featured);

/** Unique industry tags, ordered by how many projects carry each one. */
export const projectCategories = Array.from(
  projects.reduce((counts, p) => {
    counts.set(p.tag, (counts.get(p.tag) ?? 0) + 1);
    return counts;
  }, new Map<string, number>())
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .map(([tag, count]) => ({ tag, count }));
