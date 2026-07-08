import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Aether",
      description: "A modern, responsive e-commerce platform with advanced features like real-time inventory, payment processing, and user analytics.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/Kaifms250/aether",
      live: "https://aether-coral-ten.vercel.app",
      featured: true,
    },
    {
      title: "Osho Audio Books",
      description: "A curated audio book platform featuring Osho's teachings with seamless streaming and personalized listening experience.",
      tags: ["React", "Firebase", "TypeScript", "PWA"],
      github: "https://github.com/Kaifms250/inner-path-studio",
      live: "https://osho-audio.vercel.app",
      featured: true,
    },
    {
      title: "Questflow",
      description: "A daily task management app powered by AI, helping you organize and prioritize your tasks with smart insights.",
      tags: ["React", "AI", "Node.js", "TypeScript"],
      github: "https://github.com/Kaifms250/daily-note-ai",
      live: "https://daily-note-ai.vercel.app",
      featured: true,
    },
    {
      title: "Qryo",
      description: "A modern chat application with real-time messaging, contact management, and a clean directory interface.",
      tags: ["React", "WebSocket", "Firebase", "Tailwind CSS"],
      github: "https://github.com/Kaifms250/Qryo",
      live: "https://qryo-directory.vercel.app",
      featured: true,
    },
    {
      title: "Expense Tracker",
      description: "A Java-based expense tracking application for managing personal finances with category-wise breakdowns and reports.",
      tags: ["Java", "Swing", "JDBC", "MySQL"],
      github: "https://github.com/Kaifms250/expense-tracker",
      live: "#",
      featured: false,
    },
    {
      title: "Movie Search App",
      description: "A movie search application that lets you explore films, view ratings, cast details, and trailers from a vast database.",
      tags: ["React", "API", "JavaScript", "CSS3"],
      github: "https://github.com/Kaifms250/Movie-search-App",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-secondary/20 via-background to-background"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 hero-text transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            A showcase of my latest work, featuring innovative solutions and cutting-edge technologies
            that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden hover:shadow-neon transition-all duration-500 hover:scale-105 border-border hover:border-primary/50 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${project.featured ? "lg:col-span-1 lg:row-span-1" : ""}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image/Background */}
              <div className="h-48 bg-gradient-to-br from-secondary via-muted to-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>

                {/* Featured Badge */}
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-foreground/10 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  } sm:opacity-0 sm:group-hover:opacity-100`}
                >
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-background/90 hover:bg-background"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className={`border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
