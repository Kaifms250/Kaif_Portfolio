import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2 } from "lucide-react";

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
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-16 sm:py-24 px-4"
    >
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-background pointer-events-none" />

      {/* Parallax particles (hidden on small mobile for performance) */}
      <div className="absolute inset-0 hidden sm:block pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-foreground rounded-full opacity-15 floating"
            style={{
              left: `${(i * 6.25) % 100}%`,
              top: `${(i * 12.5) % 100}%`,
              animationDelay: `${(i % 5) * 1.2}s`,
              animationDuration: `${7 + (i % 4) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive cursor glow (desktop only) */}
      <div
        className="hidden md:block absolute w-96 h-96 bg-foreground/5 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Profile Picture */}
        <div className="mb-6 sm:mb-8 slide-up">
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-muted border-4 border-border overflow-hidden shadow-xl ring-4 ring-primary/5 mx-auto">
            <img
              src="/profile.png"
              alt="Mohammad Kaif - Full-Stack Developer"
              className="w-full h-full object-cover object-[40%_25%]"
              loading="eager"
            />
          </div>
        </div>

        {/* Profile Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-xs sm:text-sm font-medium text-foreground mb-4 fade-in-up">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Full-Stack Developer • React & Node.js</span>
        </div>

        {/* Name */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 tracking-tight slide-up hero-text">
          Mohammad Kaif
        </h1>

        {/* Subtitle / Focus */}
        <p
          className="text-lg sm:text-2xl font-semibold text-primary mb-3 fade-in-up flex items-center justify-center gap-2"
          style={{ animationDelay: "0.2s" }}
        >
          <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>Full-Stack Software Engineer</span>
        </p>

        {/* Value Proposition */}
        <p
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-2 leading-relaxed fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Building scalable, production-grade web applications. Combining intuitive React and TypeScript frontends with resilient Node.js backend systems and database architectures.
        </p>

        {/* Call to Actions (Mobile-first touch targets) */}
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center mb-8 sm:mb-12 px-4 fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto min-h-[48px] px-8 bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all duration-300 hover:scale-105 active:scale-95 text-base font-semibold"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto min-h-[48px] px-8 border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 text-base font-semibold"
            onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
          >
            Experience
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="w-full sm:w-auto min-h-[48px] px-6 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 active:scale-95 text-base"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links (Large touch targets for mobile) */}
        <div
          className="flex justify-center items-center gap-4 mb-12 sm:mb-16 fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            { icon: Github, href: "https://github.com/Kaifms250", label: "GitHub Profile" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-kaif-83b062258/", label: "LinkedIn Profile" },
            { icon: Mail, href: "mailto:mdkaif2213@gmail.com", label: "Email Contact" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-glow bg-card/40"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="text-primary/70 hover:text-primary transition-colors duration-300 pulse-glow p-2"
          aria-label="Scroll down to About section"
        >
          <ArrowDown size={28} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
