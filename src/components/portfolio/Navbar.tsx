import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3.5">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-xl font-bold hero-text hover:opacity-80 transition-opacity"
              aria-label="Mohammad Kaif Home"
            >
              MK<span className="text-primary">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-5 lg:space-x-7 text-sm font-medium">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group py-1"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-11 h-11"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`text-2xl font-semibold text-foreground hover:text-primary transition-all duration-300 py-3 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${100 + index * 60}ms` : "0ms" }}
            >
              {item.label}
            </button>
          ))}

          <div
            className={`flex items-center gap-5 mt-8 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? `${100 + navItems.length * 60}ms` : "0ms" }}
          >
            <a href="https://github.com/Kaifms250" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-kaif-83b062258/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:mdkaif2213@gmail.com" className="p-3 rounded-full border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
