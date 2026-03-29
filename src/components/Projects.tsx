import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const featured = [
  { title: "OSTREE", tag: "E-commerce", url: "https://ostree.in/", desc: "Scalable fashion platform with high availability and performance optimization." },
  { title: "SJA MICRO FINANCE", tag: "FinTech", url: "https://sjamicrofoundation.com/", desc: "Secure microfinance platform with reliable infrastructure." },
  { title: "STUDDY LMS", tag: "EdTech SaaS", url: "https://studdyy.vercel.app/", desc: "Learning platform used by 5000+ students." },
  { title: "ADVANCE FMS", tag: "Enterprise", url: "https://advancefms.in/", desc: "Facility management digital platform." },
  { title: "TRUVARA EXIM", tag: "Import/Export", url: "https://truvaraaexim.com/", desc: "Global trade platform improving visibility." },
  { title: "LIMAYE EYE CARE", tag: "Healthcare", url: "https://limayeeyehospital.com/", desc: "Patient-focused healthcare platform." },
];

const allProjects = [
  { title: "ADVANCED GROUP", tag: "Business", url: "https://theadvancedgroup.in/", desc: "Corporate group digital presence." },
  { title: "JYOTI CLEANING", tag: "Services", url: "https://jyotishine.vercel.app/", desc: "Professional cleaning services platform." },
  { title: "TRIVENI GAURAKSHAN", tag: "NGO", url: "https://trivenigaurakshan.org/", desc: "Non-profit organization platform." },
  { title: "DR B P DESHPANDE", tag: "Healthcare", url: "https://drbipindeshpande.com/", desc: "Doctor's professional website." },
  { title: "ROYAL RESIDENCY", tag: "Hospitality", url: "https://hotelroyalenclave.com/", desc: "Hotel booking and information platform." },
  { title: "SP RESIDENCY", tag: "Hospitality", url: "https://spresidencyhostel.com/", desc: "Hostel management platform." },
  { title: "LIMSON ENGINEERING", tag: "Engineering", url: "https://limson.co.in/", desc: "Engineering solutions company website." },
  { title: "GLOBAL PACKAGING", tag: "Manufacturing", url: "https://globalpkg.net/", desc: "Industrial packaging solutions platform." },
  { title: "SJA LAND DEVELOPERS", tag: "Real Estate", url: "https://sjalanddevelopers.com/", desc: "Land development company website." },
  { title: "SJA LANDS", tag: "Real Estate", url: "https://www.sjalands.in/", desc: "Real estate listings platform." },
  { title: "AKASH ENTERPRISES", tag: "Signage", url: "https://akashsignage.vercel.app/", desc: "Signage manufacturing company." },
];

const ProjectCard = ({ project, index }: { project: typeof featured[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="glass-card-hover p-6 group"
  >
    <div className="flex items-start justify-between mb-3">
      <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
        {project.tag}
      </span>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
      >
        <ExternalLink size={18} />
      </a>
    </div>
    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{project.desc}</p>
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
    >
      View Live <ExternalLink size={14} />
    </a>
  </motion.div>
);

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="section-padding relative bg-background-secondary" ref={ref}>
      <div className="glow-orb w-[500px] h-[500px] bg-secondary bottom-0 left-0 opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">17+ production projects across multiple industries</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {!showAll ? (
          <div className="text-center mt-12">
            <button onClick={() => setShowAll(true)} className="btn-primary">
              View All Projects
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              More <span className="gradient-text">Projects</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
