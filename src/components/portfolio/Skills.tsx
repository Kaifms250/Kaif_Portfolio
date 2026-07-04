import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Zap,
  Layers,
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "SASS"],
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs"],
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Supabase", "MySQL"],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel", "Netlify"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "Progressive Web Apps", "Responsive Design"],
    },
    {
      icon: Palette,
      title: "Design & Tools",
      skills: ["Figma", "Adobe XD", "Photoshop", "Git", "VS Code", "Linear"],
    },
    {
      icon: Zap,
      title: "Performance",
      skills: ["Web Vitals", "Lighthouse", "Bundle Analysis", "Code Splitting"],
    },
    {
      icon: Layers,
      title: "Architecture",
      skills: ["Microservices", "MVC", "JAMstack", "Serverless", "Design Patterns"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-background via-secondary/10 to-background"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 hero-text transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Skills & Expertise
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            A comprehensive toolkit built through years of learning, practicing, and creating.
            Always evolving, always improving.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`group hover:shadow-neon transition-all duration-500 hover:scale-105 border-border hover:border-primary/30 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg border-2 border-primary text-primary bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="ml-3 text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Technologies */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-8 text-primary">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AI/ML Integration",
              "WebAssembly",
              "Blockchain",
              "AR/VR Development",
              "Edge Computing",
              "Quantum Computing",
            ].map((tech, index) => (
              <Badge
                key={index}
                className="px-4 py-2 text-sm bg-gradient-primary text-primary-foreground hover:scale-110 transition-transform duration-300 cursor-pointer"
                style={{ animationDelay: `${1200 + index * 100}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
