import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Sparkles,
  FolderGit2,
  Monitor,
} from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Aether",
      subtitle: "Full-Stack E-Commerce Platform",
      description:
        "A modern, responsive e-commerce application featuring real-time inventory tracking, Stripe payment integration, cart state management, and an administrative product catalog.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com/Kaifms250/aether",
      live: "https://aether-coral-ten.vercel.app",
      featured: true,
      category: "Full-Stack Web App",
    },
    {
      title: "Osho Audio Books",
      subtitle: "Audio Streaming Web Platform",
      description:
        "A responsive audio streaming platform designed with a clean player interface, playlist management, categorized discography, and optimized media playback performance.",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS", "PWA"],
      github: "https://github.com/Kaifms250/inner-path-studio",
      live: "https://osho-audio.vercel.app",
      featured: true,
      category: "Media Application",
    },
    {
      title: "Questflow",
      subtitle: "AI Task & Note Workflow App",
      description:
        "A task management application integrating smart AI insights to help organize, prioritize, and structure daily engineering goals and notes efficiently.",
      tags: ["React", "TypeScript", "Node.js", "AI Integration", "Tailwind CSS"],
      github: "https://github.com/Kaifms250/daily-note-ai",
      live: "https://daily-note-ai.vercel.app",
      featured: true,
      category: "Productivity Tool",
    },
    {
      title: "Qryo",
      subtitle: "Real-Time Directory & Chat",
      description:
        "A real-time communication platform with an interactive user directory, live presence indicators, message threading, and instant status updates.",
      tags: ["React", "WebSocket", "Firebase", "Tailwind CSS"],
      github: "https://github.com/Kaifms250/Qryo",
      live: "https://qryo-directory.vercel.app",
      featured: false,
      category: "Real-time Messaging",
    },
    {
      title: "Expense Tracker",
      subtitle: "Desktop Financial Analytics Tool",
      description:
        "A software application engineered to record, categorize, and analyze personal financial expenditures with SQL-driven category breakdown reports.",
      tags: ["Java", "Swing GUI", "JDBC", "MySQL"],
      github: "https://github.com/Kaifms250/expense-tracker",
      live: null,
      featured: false,
      category: "Desktop & Database App",
    },
    {
      title: "Movie Search App",
      subtitle: "Media Catalog & Discovery App",
      description:
        "An asynchronous search web application allowing users to search, filter, and view detailed metadata, ratings, and cast information via external REST APIs.",
      tags: ["React", "REST API", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/Kaifms250/Movie-search-App",
      live: null,
      featured: false,
      category: "API Integration",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/20 via-background to-background relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs font-medium text-muted-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5 text-primary" />
            <span>Featured Software</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 hero-text tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            A selection of applications and developer tools built with a focus on usability, clean code, and reliable architecture.
          </p>
        </div>

        {/* Projects Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group flex flex-col justify-between overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:shadow-neon bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div>
                {/* Dedicated Screenshot Container with consistent 16:9 Aspect Ratio */}
                <div className="relative aspect-video w-full bg-secondary/50 border-b border-border/80 overflow-hidden flex flex-col">
                  {/* Mockup Top Window Bar */}
                  <div className="bg-secondary/90 px-3 py-2 border-b border-border/60 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 inline-block" />
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground truncate max-w-[140px] sm:max-w-[180px]">
                      {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                    </span>
                    <span className="w-8" />
                  </div>

                  {/* Minimalist Screenshot Placeholder Frame */}
                  <div className="flex-1 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-muted/30 to-background/50">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-xs font-semibold text-foreground tracking-wide">
                      {project.title}
                    </span>
                    <span className="text-[11px] text-muted-foreground mt-0.5">
                      Screenshot preview container
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <Badge className="absolute top-2.5 right-2.5 bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold shadow-sm">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Card Content */}
                <CardContent className="p-5 sm:p-6 space-y-3.5">
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-[11px] px-2 py-0.5 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>

              {/* Action Buttons Bar: Always visible & touch-friendly on all screen sizes */}
              <div className="p-5 sm:p-6 pt-0 border-t border-border/50 mt-4 flex items-center gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 min-h-[42px] border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 active:scale-95 text-xs font-semibold"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github size={15} className="mr-1.5" />
                    Code
                  </a>
                </Button>

                {project.live ? (
                  <Button
                    size="sm"
                    className="flex-1 min-h-[42px] bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all duration-300 active:scale-95 text-xs font-semibold"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={15} className="mr-1.5" />
                      Live Demo
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="ghost"
                    disabled
                    className="flex-1 min-h-[42px] text-muted-foreground opacity-60 cursor-not-allowed text-xs"
                  >
                    Demo N/A
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Button
            size="lg"
            variant="outline"
            className="min-h-[48px] px-8 border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base font-semibold"
            asChild
          >
            <a
              href="https://github.com/Kaifms250"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              Explore More Repositories on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
