import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © 2026 Saurav Ambuskar. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="https://github.com/Sauravambuskar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/sauravambuskar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
