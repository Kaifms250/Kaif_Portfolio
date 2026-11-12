import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Server,
  Database,
  Workflow,
  Sparkles,
  CheckCircle,
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Code2,
      description: "Building responsive, performant, and accessible user interfaces with modern React and TypeScript.",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Responsive UI",
        "State Management",
      ],
    },
    {
      title: "Backend & APIs",
      icon: Server,
      description: "Architecting reliable server-side services, secure authentication, and scalable RESTful interfaces.",
      skills: [
        "Node.js",
        "Express",
        "RESTful APIs",
        "Authentication & JWT",
        "Middleware Architecture",
        "API Integration",
        "CRUD Operations",
      ],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      description: "Managing relational and NoSQL databases with schema design, normalization, and efficient querying.",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Prisma ORM",
        "SQL Querying",
        "Database Design",
        "Data Modeling",
        "Data Integrity",
      ],
    },
    {
      title: "Tools & Practices",
      icon: Workflow,
      description: "Utilizing modern developer tooling, version control, and collaborative engineering standards.",
      skills: [
        "Git & GitHub",
        "Vite",
        "Postman",
        "Linux / CLI",
        "Agile / Scrum",
        "Code Reviews",
        "Debugging",
        "Clean Architecture",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs font-medium text-muted-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Categorized Tech Stack</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 hero-text tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Skills & Expertise
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Technologies, frameworks, and methodologies I use to design, build, and deploy production-grade software.
          </p>
        </div>

        {/* Skills Cards Grid: 1 column on mobile, 2 columns on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`border-border hover:border-primary/40 transition-all duration-500 hover:shadow-neon bg-card flex flex-col justify-between ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <CardContent className="p-5 sm:p-7 space-y-4 flex flex-col justify-between h-full">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <category.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-primary font-medium mt-0.5">
                        <CheckCircle size={12} />
                        <span>Production Ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-border/50">
                  {category.skills.map((skill, sIdx) => (
                    <Badge
                      key={sIdx}
                      variant="secondary"
                      className="text-xs py-1 px-2.5 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
