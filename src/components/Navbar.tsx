import React, { useState, useEffect } from "react";
import { HiMiniBars3, HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa6";
import { HiMiniSun, HiMiniMoon } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet-v2";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CommandItem, SearchModal } from "@/components/ui/search-modal";
import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Stats", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const searchData: CommandItem[] = [
  { id: "about", title: "About Me", description: "Learn about my background and experience", category: "Section" },
  { id: "skills", title: "Skills & Tools", description: "Technologies and tools I work with", category: "Section" },
  { id: "projects", title: "Projects", description: "23+ production projects across industries", category: "Section" },
  { id: "case-studies", title: "Case Studies", description: "Deep dives into select projects", category: "Section" },
  { id: "devops", title: "DevOps Projects", description: "Infrastructure and CI/CD work", category: "Section" },
  { id: "education", title: "Education", description: "Academic background and certifications", category: "Section" },
  { id: "testimonials", title: "Testimonials", description: "What clients say about my work", category: "Section" },
  { id: "contact", title: "Contact", description: "Get in touch for collaborations", category: "Section" },
  { id: "ostree", title: "OSTREE – E-commerce Platform", description: "Scalable fashion e-commerce", category: "Project" },
  { id: "studdy", title: "STUDDY LMS", description: "EdTech platform for 5000+ students", category: "Project" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="#" className="text-lg font-extrabold tracking-tight">
              <span className="gradient-text">Dev</span>
              <span className="text-foreground">Ops</span>
              <span className="text-muted-foreground">.</span>
            </a>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-primary/5 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <SearchModal data={searchData}>
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex gap-2 text-muted-foreground border-border hover:bg-primary/5 hover:text-foreground h-9 px-3"
              >
                <SearchIcon className="h-4 w-4" />
                <span className="text-xs">Search...</span>
                <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  ⌘K
                </kbd>
              </Button>
            </SearchModal>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all relative overflow-hidden"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 90, scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiMiniSun size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -90, scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiMiniMoon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Social icons - desktop only */}
            <div className="hidden md:flex items-center gap-1">
              <a
                href="https://github.com/Sauravambuskar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sauravambuskar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://www.behance.net/Saurava581"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
              >
                <FaBehance size={18} />
              </a>
            </div>

            {/* Hire Me - desktop */}
            <a href="#contact" className="hidden md:inline-flex btn-primary text-sm px-5 py-2">
              Hire Me
            </a>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(!open)}
                className="lg:hidden text-foreground"
              >
                <MenuIcon className="h-5 w-5" />
              </Button>
              <SheetContent side="right" className="w-[280px] bg-background border-border p-0">
                <div className="flex flex-col h-full">
                  <div className="px-6 pt-12 pb-4">
                    <a href="#" className="text-lg font-extrabold tracking-tight">
                      <span className="gradient-text">Dev</span>
                      <span className="text-foreground">Ops</span>
                      <span className="text-muted-foreground">.</span>
                    </a>
                  </div>

                  <div className="flex flex-col gap-1 px-4 flex-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground hover:text-foreground hover:bg-primary/5 px-3 py-3 rounded-lg transition-all text-sm"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <SheetFooter className="px-4 pb-6 flex-col gap-3 border-t border-border pt-4">
                    <div className="flex gap-3 justify-center">
                      <a href="https://github.com/Sauravambuskar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <FaGithub size={20} />
                      </a>
                      <a href="https://www.linkedin.com/in/sauravambuskar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <FaLinkedinIn size={20} />
                      </a>
                      <a href="https://www.behance.net/Saurava581" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <FaBehance size={20} />
                      </a>
                    </div>
                    <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="btn-primary text-sm px-5 py-2.5 text-center w-full rounded-lg"
                    >
                      Hire Me
                    </a>
                  </SheetFooter>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
