import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <a href="#" className="text-xl font-extrabold gradient-text">SA.</a>
          <p className="text-sm text-muted-foreground">
            DevOps Engineer · Cloud & Infrastructure
          </p>
        </div>
        
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Made with <Heart size={14} className="text-primary fill-primary" /> by Saurav Ambuskar
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Sauravambuskar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sauravambuskar/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
          >
            <Linkedin size={18} />
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
