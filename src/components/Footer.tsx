import Link from "next/link";
import { HiMiniHeart } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa6";

const Footer = () => (
  <footer className="py-8 sm:py-10 border-t border-border relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link href="/" className="text-xl font-extrabold"><span className="gradient-text">Dev</span><span className="text-foreground">Ops</span><span className="text-muted-foreground">.</span></Link>
          <p className="text-sm text-muted-foreground">
            DevOps Engineer · Cloud & Infrastructure
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <Link
              href="/services"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              All Services
            </Link>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              All Projects
            </Link>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <HiMiniHeart className="text-primary" size={14} /> by Saurav Ambuskar
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Sauravambuskar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sauravambuskar/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://www.behance.net/Saurava581"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
          >
            <FaBehance size={18} />
          </a>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 Saurav Ambuskar. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
