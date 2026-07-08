import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-background"></div>

      {/* Parallax particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-foreground rounded-full opacity-20 floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive cursor effect */}
      <div
        className="absolute w-96 h-96 bg-foreground/5 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Photo */}
        <div className="flex justify-center items-center mb-8 slide-up">
          <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-muted border-4 border-border overflow-hidden shadow-lg mx-auto">
            <img
              src="/profile.png"
              alt="Mohammad Kaif"
              className="w-full h-full object-cover object-[40%_25%]"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">
          Mohammad Kaif
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up" style={{ animationDelay: "0.3s" }}>
          Software Engineer
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 fade-in-up" style={{ animationDelay: "0.9s" }}>
          {[
            { icon: Github, href: "https://github.com/Kaifms250", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-kaif-83b062258/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:mdkaif2213@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 rounded-full border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary-glow transition-colors duration-300 pulse-glow"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
